/* eslint-disable */
import {
  MsgSubmitProposal,
  MsgExecLegacyContent,
  MsgVote,
  MsgVoteWeighted,
  MsgDeposit,
  MsgUpdateParams,
  MsgProposeLaw,
  MsgProposeConstitutionAmendment,
  MsgCreateGovernor,
  MsgEditGovernor,
  MsgUpdateGovernorStatus,
  MsgDelegateGovernor,
  MsgUndelegateGovernor,
} from "./tx";
export const AminoConverter = {
  "/atomone.gov.v1.MsgSubmitProposal": {
    aminoType: "atomone/v1/MsgSubmitProposal",
    toAmino: MsgSubmitProposal.toAmino,
    fromAmino: MsgSubmitProposal.fromAmino,
  },
  "/atomone.gov.v1.MsgExecLegacyContent": {
    aminoType: "atomone/v1/MsgExecLegacyContent",
    toAmino: MsgExecLegacyContent.toAmino,
    fromAmino: MsgExecLegacyContent.fromAmino,
  },
  "/atomone.gov.v1.MsgVote": {
    aminoType: "atomone/v1/MsgVote",
    toAmino: MsgVote.toAmino,
    fromAmino: MsgVote.fromAmino,
  },
  "/atomone.gov.v1.MsgVoteWeighted": {
    aminoType: "atomone/v1/MsgVoteWeighted",
    toAmino: MsgVoteWeighted.toAmino,
    fromAmino: MsgVoteWeighted.fromAmino,
  },
  "/atomone.gov.v1.MsgDeposit": {
    aminoType: "atomone/v1/MsgDeposit",
    toAmino: MsgDeposit.toAmino,
    fromAmino: MsgDeposit.fromAmino,
  },
  "/atomone.gov.v1.MsgUpdateParams": {
    aminoType: "atomone/x/gov/v1/MsgUpdateParams",
    toAmino: MsgUpdateParams.toAmino,
    fromAmino: MsgUpdateParams.fromAmino,
  },
  "/atomone.gov.v1.MsgProposeLaw": {
    aminoType: "atomone/x/gov/v1/MsgProposeLaw",
    toAmino: MsgProposeLaw.toAmino,
    fromAmino: MsgProposeLaw.fromAmino,
  },
  "/atomone.gov.v1.MsgProposeConstitutionAmendment": {
    aminoType: "atomone/x/gov/v1/MsgProposeAmendment",
    toAmino: MsgProposeConstitutionAmendment.toAmino,
    fromAmino: MsgProposeConstitutionAmendment.fromAmino,
  },
  "/atomone.gov.v1.MsgCreateGovernor": {
    aminoType: "atomone/v1/MsgCreateGovernor",
    toAmino: MsgCreateGovernor.toAmino,
    fromAmino: MsgCreateGovernor.fromAmino,
  },
  "/atomone.gov.v1.MsgEditGovernor": {
    aminoType: "atomone/v1/MsgEditGovernor",
    toAmino: MsgEditGovernor.toAmino,
    fromAmino: MsgEditGovernor.fromAmino,
  },
  "/atomone.gov.v1.MsgUpdateGovernorStatus": {
    aminoType: "atomone/v1/MsgUpdateGovernorStatus",
    toAmino: MsgUpdateGovernorStatus.toAmino,
    fromAmino: MsgUpdateGovernorStatus.fromAmino,
  },
  "/atomone.gov.v1.MsgDelegateGovernor": {
    aminoType: "atomone/v1/MsgDelegateGovernor",
    toAmino: MsgDelegateGovernor.toAmino,
    fromAmino: MsgDelegateGovernor.fromAmino,
  },
  "/atomone.gov.v1.MsgUndelegateGovernor": {
    aminoType: "atomone/v1/MsgUndelegateGovernor",
    toAmino: MsgUndelegateGovernor.toAmino,
    fromAmino: MsgUndelegateGovernor.fromAmino,
  },
};
