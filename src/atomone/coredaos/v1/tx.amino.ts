/* eslint-disable */
import {
  MsgAnnotateProposal,
  MsgEndorseProposal,
  MsgExtendVotingPeriod,
  MsgVetoProposal,
  MsgUpdateParams,
} from "./tx";
export const AminoConverter = {
  "/atomone.coredaos.v1.MsgAnnotateProposal": {
    aminoType: "atomone/coredaos/v1/MsgAnnotateProposal",
    toAmino: MsgAnnotateProposal.toAmino,
    fromAmino: MsgAnnotateProposal.fromAmino,
  },
  "/atomone.coredaos.v1.MsgEndorseProposal": {
    aminoType: "atomone/coredaos/v1/MsgEndorseProposal",
    toAmino: MsgEndorseProposal.toAmino,
    fromAmino: MsgEndorseProposal.fromAmino,
  },
  "/atomone.coredaos.v1.MsgExtendVotingPeriod": {
    aminoType: "atomone/coredaos/v1/MsgExtendVotingPeriod",
    toAmino: MsgExtendVotingPeriod.toAmino,
    fromAmino: MsgExtendVotingPeriod.fromAmino,
  },
  "/atomone.coredaos.v1.MsgVetoProposal": {
    aminoType: "atomone/coredaos/v1/MsgVetoProposal",
    toAmino: MsgVetoProposal.toAmino,
    fromAmino: MsgVetoProposal.fromAmino,
  },
  "/atomone.coredaos.v1.MsgUpdateParams": {
    aminoType: "/atomone.coredaos.v1.MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
};
