---
"@atomone/atomone-types": minor
---

Restore the decoder registry, and publish the compiled output from `dist/`.

`GlobalDecoderRegistry` is generated again, and 166 generated modules register their decoders and amino type mappings into it. It had stopped being generated while a copy built by an older code generator was still being published, so the registry a consumer imported was empty.

The compiled output now ships from `dist/` instead of being copied file by file into the package root. Import paths are unchanged: `main`, `types` and an `exports` map keep `@atomone/atomone-types/atomone/gov/v1/gov` and the rest resolving as before, with or without a `.js` suffix.

Regenerated with `@cosmology/telescope` 1.12.21, built with TypeScript 7, and the `@cosmjs/*` peers used for development moved to 0.39.0. The generated sources are no longer run through Prettier afterwards, so comments and line wrapping in the compiled output differ cosmetically; the exported API is unchanged.
