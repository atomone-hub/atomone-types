#!/usr/bin/env node

const { join } = require("path");
const { writeFileSync } = require("fs");
const telescope = require("@cosmology/telescope").default;

const outPath = join(__dirname, "/../src");

telescope({
  protoDirs: ["protos/cosmos-sdk/proto", "protos/third_party", "protos/atomone/proto"],
  outPath: outPath,
  options: {
    logLevel: 0,
    useSDKTypes: false,
    tsDisable: {
      disableAll: false,
    },
    eslintDisable: {
      disableAll: true,
    },
    bundle: {
      enabled: false,
    },
    interfaces: {
      enabled: false,
      useGlobalDecoderRegistry: true,
    },
    prototypes: {
      includePackageVar: true,
      allowUndefinedTypes: true,
      strictNullCheckForPrototypeMethods: true,
      paginationDefaultFromPartial: true,
      addTypeUrlToObjects: true,
      // Those are causing trouble in CosmJS testing (https://github.com/cosmology-tech/telescope/issues/489)
      addTypeUrlToDecoders: false,
      excluded: {
        packages: ["cosmos.gov.v1beta1", "cosmos.gov.v1beta1"],
        protos: [
          "cosmos/gov/v1/genesis.proto",
          "cosmos/gov/v1/gov.proto",
          "cosmos/gov/v1/query.proto",
          "cosmos/gov/v1/tx.proto",
          "cosmos/gov/v1beta1/genesis.proto",
          "cosmos/gov/v1beta1/gov.proto",
          "cosmos/gov/v1beta1/query.proto",
          "cosmos/gov/v1beta1/tx.proto",
          "cosmos/autocli/v1/options.proto",
          "cosmos/autocli/v1/query.proto",
          "cosmos/authz/v1beta1/event.proto",
          "cosmos/base/reflection/v2alpha1/reflection.proto",
          "cosmos/crypto/secp256r1/keys.proto",
          "tendermint/libs/bits/types.proto",
          "google/api/httpbody.proto",
          "tendermint/blockchain/types.proto",
          "tendermint/consensus/types.proto",
          "tendermint/consensus/wal.proto",
          "tendermint/mempool/types.proto",
          "tendermint/p2p/conn.proto",
          "tendermint/p2p/pex.proto",
          "tendermint/privval/types.proto",
          "tendermint/rpc/grpc/types.proto",
          "tendermint/state/types.proto",
          "tendermint/statesync/types.proto",
          "tendermint/store/types.proto",
          "tendermint/types/canonical.proto",
          "tendermint/types/events.proto",
        ],
      },
      methods: {
        // There are users who need those functions. CosmJS does not need them directly.
        // See https://github.com/cosmos/cosmjs/pull/1329
        fromJSON: true,
        toJSON: true,
        fromAmino: false,
        toAmino: false,
        fromProto: false,
        toProto: false,
      },
      typingsFormat: {
        useTelescopeGeneratedType: true,
        useDeepPartial: false,
        useExact: false,
        timestamp: "timestamp",
        duration: "duration",
        setDefaultCustomTypesToUndefined: true,
        customTypes: {
          useCosmosSDKDec: false,
        },
        num64: "bigint",
      },
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: true,
      inline: true,
      extensions: false,
      camelCase: false,
      enabledServices: ["Msg", "Query", "Service", "ReflectionService", "ABCIApplication"],
    },
    aminoEncoding: {
      enabled: true,
      useLegacyInlineEncoding: false,
    },
    tsDisable: {
      patterns: ["**/authz/**/*.amino.ts"],
    },
  },
}).then(
  () => {
    // Create index.ts
    const index_ts = `
    // Auto-generated, see scripts/codegen.js!

    // Exports we want to provide at the root of the "cosmjs-types" package

    export { DeepPartial, Exact } from "./helpers";
    `;
    writeFileSync(`${outPath}/index.ts`, index_ts);

    console.log("✨ All Done!");
  },
  (e) => {
    console.error(e);
    process.exit(1);
  },
);
