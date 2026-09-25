/* eslint-disable */
import { TelescopeGeneratedType } from "../../../types";
import { Registry } from "@cosmjs/proto-signing";
import { MsgSubmitProposal, MsgExecLegacyContent, MsgVote, MsgVoteWeighted, MsgDeposit, MsgUpdateParams, MsgProposeLaw, MsgProposeConstitutionAmendment, MsgCreateGovernor, MsgEditGovernor, MsgUpdateGovernorStatus, MsgDelegateGovernor, MsgUndelegateGovernor } from "./tx";
export const registry: ReadonlyArray<[string, TelescopeGeneratedType<any, any, any>]> = [["/atomone.gov.v1.MsgSubmitProposal", MsgSubmitProposal], ["/atomone.gov.v1.MsgExecLegacyContent", MsgExecLegacyContent], ["/atomone.gov.v1.MsgVote", MsgVote], ["/atomone.gov.v1.MsgVoteWeighted", MsgVoteWeighted], ["/atomone.gov.v1.MsgDeposit", MsgDeposit], ["/atomone.gov.v1.MsgUpdateParams", MsgUpdateParams], ["/atomone.gov.v1.MsgProposeLaw", MsgProposeLaw], ["/atomone.gov.v1.MsgProposeConstitutionAmendment", MsgProposeConstitutionAmendment], ["/atomone.gov.v1.MsgCreateGovernor", MsgCreateGovernor], ["/atomone.gov.v1.MsgEditGovernor", MsgEditGovernor], ["/atomone.gov.v1.MsgUpdateGovernorStatus", MsgUpdateGovernorStatus], ["/atomone.gov.v1.MsgDelegateGovernor", MsgDelegateGovernor], ["/atomone.gov.v1.MsgUndelegateGovernor", MsgUndelegateGovernor]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/atomone.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.encode(value).finish()
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: "/atomone.gov.v1.MsgExecLegacyContent",
        value: MsgExecLegacyContent.encode(value).finish()
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVote",
        value: MsgVote.encode(value).finish()
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVoteWeighted",
        value: MsgVoteWeighted.encode(value).finish()
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/atomone.gov.v1.MsgDeposit",
        value: MsgDeposit.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    },
    proposeLaw(value: MsgProposeLaw) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeLaw",
        value: MsgProposeLaw.encode(value).finish()
      };
    },
    proposeConstitutionAmendment(value: MsgProposeConstitutionAmendment) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendment",
        value: MsgProposeConstitutionAmendment.encode(value).finish()
      };
    },
    createGovernor(value: MsgCreateGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgCreateGovernor",
        value: MsgCreateGovernor.encode(value).finish()
      };
    },
    editGovernor(value: MsgEditGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgEditGovernor",
        value: MsgEditGovernor.encode(value).finish()
      };
    },
    updateGovernorStatus(value: MsgUpdateGovernorStatus) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUpdateGovernorStatus",
        value: MsgUpdateGovernorStatus.encode(value).finish()
      };
    },
    delegateGovernor(value: MsgDelegateGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgDelegateGovernor",
        value: MsgDelegateGovernor.encode(value).finish()
      };
    },
    undelegateGovernor(value: MsgUndelegateGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUndelegateGovernor",
        value: MsgUndelegateGovernor.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/atomone.gov.v1.MsgSubmitProposal",
        value
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: "/atomone.gov.v1.MsgExecLegacyContent",
        value
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVote",
        value
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVoteWeighted",
        value
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/atomone.gov.v1.MsgDeposit",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUpdateParams",
        value
      };
    },
    proposeLaw(value: MsgProposeLaw) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeLaw",
        value
      };
    },
    proposeConstitutionAmendment(value: MsgProposeConstitutionAmendment) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendment",
        value
      };
    },
    createGovernor(value: MsgCreateGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgCreateGovernor",
        value
      };
    },
    editGovernor(value: MsgEditGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgEditGovernor",
        value
      };
    },
    updateGovernorStatus(value: MsgUpdateGovernorStatus) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUpdateGovernorStatus",
        value
      };
    },
    delegateGovernor(value: MsgDelegateGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgDelegateGovernor",
        value
      };
    },
    undelegateGovernor(value: MsgUndelegateGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUndelegateGovernor",
        value
      };
    }
  },
  toJSON: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/atomone.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.toJSON(value)
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: "/atomone.gov.v1.MsgExecLegacyContent",
        value: MsgExecLegacyContent.toJSON(value)
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVote",
        value: MsgVote.toJSON(value)
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVoteWeighted",
        value: MsgVoteWeighted.toJSON(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/atomone.gov.v1.MsgDeposit",
        value: MsgDeposit.toJSON(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUpdateParams",
        value: MsgUpdateParams.toJSON(value)
      };
    },
    proposeLaw(value: MsgProposeLaw) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeLaw",
        value: MsgProposeLaw.toJSON(value)
      };
    },
    proposeConstitutionAmendment(value: MsgProposeConstitutionAmendment) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendment",
        value: MsgProposeConstitutionAmendment.toJSON(value)
      };
    },
    createGovernor(value: MsgCreateGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgCreateGovernor",
        value: MsgCreateGovernor.toJSON(value)
      };
    },
    editGovernor(value: MsgEditGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgEditGovernor",
        value: MsgEditGovernor.toJSON(value)
      };
    },
    updateGovernorStatus(value: MsgUpdateGovernorStatus) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUpdateGovernorStatus",
        value: MsgUpdateGovernorStatus.toJSON(value)
      };
    },
    delegateGovernor(value: MsgDelegateGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgDelegateGovernor",
        value: MsgDelegateGovernor.toJSON(value)
      };
    },
    undelegateGovernor(value: MsgUndelegateGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUndelegateGovernor",
        value: MsgUndelegateGovernor.toJSON(value)
      };
    }
  },
  fromJSON: {
    submitProposal(value: any) {
      return {
        typeUrl: "/atomone.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromJSON(value)
      };
    },
    execLegacyContent(value: any) {
      return {
        typeUrl: "/atomone.gov.v1.MsgExecLegacyContent",
        value: MsgExecLegacyContent.fromJSON(value)
      };
    },
    vote(value: any) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVote",
        value: MsgVote.fromJSON(value)
      };
    },
    voteWeighted(value: any) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVoteWeighted",
        value: MsgVoteWeighted.fromJSON(value)
      };
    },
    deposit(value: any) {
      return {
        typeUrl: "/atomone.gov.v1.MsgDeposit",
        value: MsgDeposit.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    },
    proposeLaw(value: any) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeLaw",
        value: MsgProposeLaw.fromJSON(value)
      };
    },
    proposeConstitutionAmendment(value: any) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendment",
        value: MsgProposeConstitutionAmendment.fromJSON(value)
      };
    },
    createGovernor(value: any) {
      return {
        typeUrl: "/atomone.gov.v1.MsgCreateGovernor",
        value: MsgCreateGovernor.fromJSON(value)
      };
    },
    editGovernor(value: any) {
      return {
        typeUrl: "/atomone.gov.v1.MsgEditGovernor",
        value: MsgEditGovernor.fromJSON(value)
      };
    },
    updateGovernorStatus(value: any) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUpdateGovernorStatus",
        value: MsgUpdateGovernorStatus.fromJSON(value)
      };
    },
    delegateGovernor(value: any) {
      return {
        typeUrl: "/atomone.gov.v1.MsgDelegateGovernor",
        value: MsgDelegateGovernor.fromJSON(value)
      };
    },
    undelegateGovernor(value: any) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUndelegateGovernor",
        value: MsgUndelegateGovernor.fromJSON(value)
      };
    }
  },
  fromPartial: {
    submitProposal(value: MsgSubmitProposal) {
      return {
        typeUrl: "/atomone.gov.v1.MsgSubmitProposal",
        value: MsgSubmitProposal.fromPartial(value)
      };
    },
    execLegacyContent(value: MsgExecLegacyContent) {
      return {
        typeUrl: "/atomone.gov.v1.MsgExecLegacyContent",
        value: MsgExecLegacyContent.fromPartial(value)
      };
    },
    vote(value: MsgVote) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVote",
        value: MsgVote.fromPartial(value)
      };
    },
    voteWeighted(value: MsgVoteWeighted) {
      return {
        typeUrl: "/atomone.gov.v1.MsgVoteWeighted",
        value: MsgVoteWeighted.fromPartial(value)
      };
    },
    deposit(value: MsgDeposit) {
      return {
        typeUrl: "/atomone.gov.v1.MsgDeposit",
        value: MsgDeposit.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    },
    proposeLaw(value: MsgProposeLaw) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeLaw",
        value: MsgProposeLaw.fromPartial(value)
      };
    },
    proposeConstitutionAmendment(value: MsgProposeConstitutionAmendment) {
      return {
        typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendment",
        value: MsgProposeConstitutionAmendment.fromPartial(value)
      };
    },
    createGovernor(value: MsgCreateGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgCreateGovernor",
        value: MsgCreateGovernor.fromPartial(value)
      };
    },
    editGovernor(value: MsgEditGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgEditGovernor",
        value: MsgEditGovernor.fromPartial(value)
      };
    },
    updateGovernorStatus(value: MsgUpdateGovernorStatus) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUpdateGovernorStatus",
        value: MsgUpdateGovernorStatus.fromPartial(value)
      };
    },
    delegateGovernor(value: MsgDelegateGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgDelegateGovernor",
        value: MsgDelegateGovernor.fromPartial(value)
      };
    },
    undelegateGovernor(value: MsgUndelegateGovernor) {
      return {
        typeUrl: "/atomone.gov.v1.MsgUndelegateGovernor",
        value: MsgUndelegateGovernor.fromPartial(value)
      };
    }
  }
};