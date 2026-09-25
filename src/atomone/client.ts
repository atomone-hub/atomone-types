/* eslint-disable */
import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as atomoneCoredaosV1TxRegistry from "./coredaos/v1/tx.registry";
import * as atomoneGovV1TxRegistry from "./gov/v1/tx.registry";
import * as atomoneGovV1beta1TxRegistry from "./gov/v1beta1/tx.registry";
import * as atomonePhotonV1TxRegistry from "./photon/v1/tx.registry";
import * as atomoneCoredaosV1TxAmino from "./coredaos/v1/tx.amino";
import * as atomoneGovV1TxAmino from "./gov/v1/tx.amino";
import * as atomoneGovV1beta1TxAmino from "./gov/v1beta1/tx.amino";
import * as atomonePhotonV1TxAmino from "./photon/v1/tx.amino";
export const atomoneAminoConverters = {
  ...atomoneCoredaosV1TxAmino.AminoConverter,
  ...atomoneGovV1TxAmino.AminoConverter,
  ...atomoneGovV1beta1TxAmino.AminoConverter,
  ...atomonePhotonV1TxAmino.AminoConverter
};
export const atomoneProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...atomoneCoredaosV1TxRegistry.registry, ...atomoneGovV1TxRegistry.registry, ...atomoneGovV1beta1TxRegistry.registry, ...atomonePhotonV1TxRegistry.registry];
export const getSigningAtomoneClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...atomoneProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...atomoneAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningAtomoneClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningAtomoneClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry: registry as any,
    aminoTypes
  });
  return client;
};