# Contributing to `@atomone/atomone-types`

Thanks for your interest in contributing! This document covers the bits that aren't obvious from the code — how the types are generated and how releases happen.

## Development setup

```bash
git submodule update --init --recursive
pnpm install
pnpm build
```

`pnpm install` uses the pnpm version pinned in `packageManager`. Dependency install scripts are denied by default; the two this project makes a decision about are listed under `allowBuilds` in `pnpm-workspace.yaml`.

## Building

`pnpm build` does everything in one step:

1. regenerates `src/` from the `.proto` files under `protos/` with [telescope](https://github.com/hyperweb-io/telescope), through `scripts/codegen.js`
2. compiles `src/` into `dist/` with `tsc`

`src/` is generated. Do not edit it by hand — a build overwrites it, and CI fails when the committed sources differ from what the protos produce.

The protos live in git submodules, so `git submodule update --init --recursive` is a prerequisite. `codegen.js` checks for them before it clears `src/`, so a fresh clone fails with that instruction rather than losing its sources.

`codegen.js` copies the proto trees into `.protos-build/` and strips empty statements (`;` on its own inside a message body) before parsing. protoc accepts those, telescope's parser does not, and at least one proto in each submodule has one. Normalising a copy keeps the submodules clean, so `git status` stays empty after a build.

## The published package

`dist/` is the only directory published. Everything reaches consumers through the `exports` map in `package.json`, which keeps the historical import paths working now that the compiled files no longer sit at the package root:

```ts
import { Proposal } from "@atomone/atomone-types/atomone/gov/v1/gov";
import { GlobalDecoderRegistry } from "@atomone/atomone-types/registry";
```

The Tests workflow packs the tarball, installs it into a throwaway project and resolves those imports, so a change that breaks the published shape fails CI rather than a consumer's build.

## Releasing: Changesets

Versioning, the changelog, git tags and npm publishing are all driven by [Changesets](https://github.com/changesets/changesets). Don't edit `CHANGELOG.md`, bump the version in `package.json`, or run `npm publish` by hand.

### Adding a changeset to your PR

Any PR that affects the published package needs one. PRs that only touch CI or contributor docs do not.

```bash
pnpm changeset
```

Pick the bump and describe the change for the people who consume the package. That writes a Markdown file under `.changeset/`; commit it with your PR.

### How releases happen

The `Release` workflow runs on every push to `main`:

- **With changesets pending**, it opens or updates a **"chore: version packages"** PR that consumes them, bumps the version and writes `CHANGELOG.md`.
- **When that PR is merged**, the same workflow finds no pending changesets, builds the package, publishes it to npm with provenance, and pushes the git tag.

So: you write the changeset, the bot does the rest.

Publishing authenticates either through a [Trusted Publisher](https://docs.npmjs.com/trusted-publishers) configured on npm for this package — the workflow already requests `id-token: write` — or through an `NPM_TOKEN` repository secret.

### Useful local commands

```bash
# add a changeset interactively
pnpm changeset

# see what is pending and what version it implies
pnpm changeset:status
```
