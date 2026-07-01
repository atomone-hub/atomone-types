/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import {
  MsgAnnotateProposal,
  MsgEndorseProposal,
  MsgExtendVotingPeriod,
  MsgVetoProposal,
  MsgUpdateParams,
} from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [
  ["/atomone.coredaos.v1.MsgAnnotateProposal", MsgAnnotateProposal],
  ["/atomone.coredaos.v1.MsgEndorseProposal", MsgEndorseProposal],
  ["/atomone.coredaos.v1.MsgExtendVotingPeriod", MsgExtendVotingPeriod],
  ["/atomone.coredaos.v1.MsgVetoProposal", MsgVetoProposal],
  ["/atomone.coredaos.v1.MsgUpdateParams", MsgUpdateParams],
];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    annotateProposal(value: MsgAnnotateProposal) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgAnnotateProposal",
        value: MsgAnnotateProposal.encode(value).finish(),
      };
    },
    endorseProposal(value: MsgEndorseProposal) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgEndorseProposal",
        value: MsgEndorseProposal.encode(value).finish(),
      };
    },
    extendVotingPeriod(value: MsgExtendVotingPeriod) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgExtendVotingPeriod",
        value: MsgExtendVotingPeriod.encode(value).finish(),
      };
    },
    vetoProposal(value: MsgVetoProposal) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgVetoProposal",
        value: MsgVetoProposal.encode(value).finish(),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish(),
      };
    },
  },
  withTypeUrl: {
    annotateProposal(value: MsgAnnotateProposal) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgAnnotateProposal",
        value,
      };
    },
    endorseProposal(value: MsgEndorseProposal) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgEndorseProposal",
        value,
      };
    },
    extendVotingPeriod(value: MsgExtendVotingPeriod) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgExtendVotingPeriod",
        value,
      };
    },
    vetoProposal(value: MsgVetoProposal) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgVetoProposal",
        value,
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgUpdateParams",
        value,
      };
    },
  },
  toJSON: {
    annotateProposal(value: MsgAnnotateProposal) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgAnnotateProposal",
        value: MsgAnnotateProposal.toJSON(value),
      };
    },
    endorseProposal(value: MsgEndorseProposal) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgEndorseProposal",
        value: MsgEndorseProposal.toJSON(value),
      };
    },
    extendVotingPeriod(value: MsgExtendVotingPeriod) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgExtendVotingPeriod",
        value: MsgExtendVotingPeriod.toJSON(value),
      };
    },
    vetoProposal(value: MsgVetoProposal) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgVetoProposal",
        value: MsgVetoProposal.toJSON(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value),
      };
    },
  },
  fromJSON: {
    annotateProposal(value: any) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgAnnotateProposal",
        value: MsgAnnotateProposal.fromJSON(value),
      };
    },
    endorseProposal(value: any) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgEndorseProposal",
        value: MsgEndorseProposal.fromJSON(value),
      };
    },
    extendVotingPeriod(value: any) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgExtendVotingPeriod",
        value: MsgExtendVotingPeriod.fromJSON(value),
      };
    },
    vetoProposal(value: any) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgVetoProposal",
        value: MsgVetoProposal.fromJSON(value),
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value),
      };
    },
  },
  fromPartial: {
    annotateProposal(value: MsgAnnotateProposal) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgAnnotateProposal",
        value: MsgAnnotateProposal.fromPartial(value),
      };
    },
    endorseProposal(value: MsgEndorseProposal) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgEndorseProposal",
        value: MsgEndorseProposal.fromPartial(value),
      };
    },
    extendVotingPeriod(value: MsgExtendVotingPeriod) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgExtendVotingPeriod",
        value: MsgExtendVotingPeriod.fromPartial(value),
      };
    },
    vetoProposal(value: MsgVetoProposal) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgVetoProposal",
        value: MsgVetoProposal.fromPartial(value),
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.coredaos.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value),
      };
    },
  },
};
