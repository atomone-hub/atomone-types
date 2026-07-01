/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgMintPhoton, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/atomone.photon.v1.MsgMintPhoton", MsgMintPhoton],
  ["/atomone.photon.v1.MsgUpdateParams", MsgUpdateParams],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    mintPhoton(value: MsgMintPhoton) {
      return {
        typeUrl: "/atomone.photon.v1.MsgMintPhoton",
        value: MsgMintPhoton.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.photon.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    mintPhoton(value: MsgMintPhoton) {
      return {
        typeUrl: "/atomone.photon.v1.MsgMintPhoton",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.photon.v1.MsgUpdateParams",
        value,
      };
    },
  },
  toJSON: {
    mintPhoton(value: MsgMintPhoton) {
      return {
        typeUrl: "/atomone.photon.v1.MsgMintPhoton",
        value: MsgMintPhoton.toJSON(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.photon.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    mintPhoton(value: any) {
      return {
        typeUrl: "/atomone.photon.v1.MsgMintPhoton",
        value: MsgMintPhoton.fromJSON(value),
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/atomone.photon.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    mintPhoton(value: MsgMintPhoton) {
      return {
        typeUrl: "/atomone.photon.v1.MsgMintPhoton",
        value: MsgMintPhoton.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.photon.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
