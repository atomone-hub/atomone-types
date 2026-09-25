/* eslint-disable */
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import {
  VoteOption,
  WeightedVoteOption,
  WeightedVoteOptionAmino,
  Params,
  ParamsAmino,
  GovernorDescription,
  GovernorDescriptionAmino,
  GovernorStatus,
  voteOptionFromJSON,
  voteOptionToJSON,
  governorStatusFromJSON,
  governorStatusToJSON,
} from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { TxRpc } from "../../../types";
export const protobufPackage = "atomone.gov.v1";
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 */
export interface MsgSubmitProposal {
  /** messages are the arbitrary messages to be executed if proposal passes. */
  messages: Any[];
  /**
   * initial_deposit is the deposit value that must be paid at proposal
   * submission.
   */
  initialDeposit: Coin[];
  /** proposer is the account address of the proposer. */
  proposer: string;
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
  /**
   * title is the title of the proposal.
   *
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is the summary of the proposal
   *
   * Since: cosmos-sdk 0.47
   */
  summary: string;
}
export interface MsgSubmitProposalProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgSubmitProposal";
  value: Uint8Array;
}
/**
 * MsgSubmitProposal defines an sdk.Msg type that supports submitting arbitrary
 * proposal Content.
 * @name MsgSubmitProposalAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgSubmitProposal
 */
export interface MsgSubmitProposalAmino {
  /**
   * messages are the arbitrary messages to be executed if proposal passes.
   */
  messages?: AnyAmino[];
  /**
   * initial_deposit is the deposit value that must be paid at proposal
   * submission.
   */
  initial_deposit: CoinAmino[];
  /**
   * proposer is the account address of the proposer.
   */
  proposer?: string;
  /**
   * metadata is any arbitrary metadata attached to the proposal.
   */
  metadata?: string;
  /**
   * title is the title of the proposal.
   *
   * Since: cosmos-sdk 0.47
   */
  title?: string;
  /**
   * summary is the summary of the proposal
   *
   * Since: cosmos-sdk 0.47
   */
  summary?: string;
}
export interface MsgSubmitProposalAminoMsg {
  type: "atomone/v1/MsgSubmitProposal";
  value: MsgSubmitProposalAmino;
}
/** MsgSubmitProposalResponse defines the Msg/SubmitProposal response type. */
export interface MsgSubmitProposalResponse {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
}
export interface MsgSubmitProposalResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgSubmitProposalResponse";
  value: Uint8Array;
}
/**
 * MsgSubmitProposalResponse defines the Msg/SubmitProposal response type.
 * @name MsgSubmitProposalResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgSubmitProposalResponse
 */
export interface MsgSubmitProposalResponseAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id?: string;
}
export interface MsgSubmitProposalResponseAminoMsg {
  type: "/atomone.gov.v1.MsgSubmitProposalResponse";
  value: MsgSubmitProposalResponseAmino;
}
/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 */
export interface MsgExecLegacyContent {
  /** content is the proposal's content. */
  content?: Any | undefined;
  /** authority must be the gov module address. */
  authority: string;
}
export interface MsgExecLegacyContentProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgExecLegacyContent";
  value: Uint8Array;
}
/**
 * MsgExecLegacyContent is used to wrap the legacy content field into a message.
 * This ensures backwards compatibility with v1beta1.MsgSubmitProposal.
 * @name MsgExecLegacyContentAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgExecLegacyContent
 */
export interface MsgExecLegacyContentAmino {
  /**
   * content is the proposal's content.
   */
  content?: AnyAmino | undefined;
  /**
   * authority must be the gov module address.
   */
  authority?: string;
}
export interface MsgExecLegacyContentAminoMsg {
  type: "atomone/v1/MsgExecLegacyContent";
  value: MsgExecLegacyContentAmino;
}
/** MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type. */
export interface MsgExecLegacyContentResponse {}
export interface MsgExecLegacyContentResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgExecLegacyContentResponse";
  value: Uint8Array;
}
/**
 * MsgExecLegacyContentResponse defines the Msg/ExecLegacyContent response type.
 * @name MsgExecLegacyContentResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgExecLegacyContentResponse
 */
export interface MsgExecLegacyContentResponseAmino {}
export interface MsgExecLegacyContentResponseAminoMsg {
  type: "/atomone.gov.v1.MsgExecLegacyContentResponse";
  value: MsgExecLegacyContentResponseAmino;
}
/** MsgVote defines a message to cast a vote. */
export interface MsgVote {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter is the voter address for the proposal. */
  voter: string;
  /** option defines the vote option. */
  option: VoteOption;
  /** metadata is any arbitrary metadata attached to the Vote. */
  metadata: string;
}
export interface MsgVoteProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgVote";
  value: Uint8Array;
}
/**
 * MsgVote defines a message to cast a vote.
 * @name MsgVoteAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgVote
 */
export interface MsgVoteAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id: string;
  /**
   * voter is the voter address for the proposal.
   */
  voter?: string;
  /**
   * option defines the vote option.
   */
  option?: VoteOption;
  /**
   * metadata is any arbitrary metadata attached to the Vote.
   */
  metadata?: string;
}
export interface MsgVoteAminoMsg {
  type: "atomone/v1/MsgVote";
  value: MsgVoteAmino;
}
/** MsgVoteResponse defines the Msg/Vote response type. */
export interface MsgVoteResponse {}
export interface MsgVoteResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgVoteResponse";
  value: Uint8Array;
}
/**
 * MsgVoteResponse defines the Msg/Vote response type.
 * @name MsgVoteResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgVoteResponse
 */
export interface MsgVoteResponseAmino {}
export interface MsgVoteResponseAminoMsg {
  type: "/atomone.gov.v1.MsgVoteResponse";
  value: MsgVoteResponseAmino;
}
/** MsgVoteWeighted defines a message to cast a vote. */
export interface MsgVoteWeighted {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter is the voter address for the proposal. */
  voter: string;
  /** options defines the weighted vote options. */
  options: WeightedVoteOption[];
  /** metadata is any arbitrary metadata attached to the VoteWeighted. */
  metadata: string;
}
export interface MsgVoteWeightedProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgVoteWeighted";
  value: Uint8Array;
}
/**
 * MsgVoteWeighted defines a message to cast a vote.
 * @name MsgVoteWeightedAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgVoteWeighted
 */
export interface MsgVoteWeightedAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id: string;
  /**
   * voter is the voter address for the proposal.
   */
  voter?: string;
  /**
   * options defines the weighted vote options.
   */
  options?: WeightedVoteOptionAmino[];
  /**
   * metadata is any arbitrary metadata attached to the VoteWeighted.
   */
  metadata?: string;
}
export interface MsgVoteWeightedAminoMsg {
  type: "atomone/v1/MsgVoteWeighted";
  value: MsgVoteWeightedAmino;
}
/** MsgVoteWeightedResponse defines the Msg/VoteWeighted response type. */
export interface MsgVoteWeightedResponse {}
export interface MsgVoteWeightedResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgVoteWeightedResponse";
  value: Uint8Array;
}
/**
 * MsgVoteWeightedResponse defines the Msg/VoteWeighted response type.
 * @name MsgVoteWeightedResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgVoteWeightedResponse
 */
export interface MsgVoteWeightedResponseAmino {}
export interface MsgVoteWeightedResponseAminoMsg {
  type: "/atomone.gov.v1.MsgVoteWeightedResponse";
  value: MsgVoteWeightedResponseAmino;
}
/** MsgDeposit defines a message to submit a deposit to an existing proposal. */
export interface MsgDeposit {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: Coin[];
}
export interface MsgDepositProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgDeposit";
  value: Uint8Array;
}
/**
 * MsgDeposit defines a message to submit a deposit to an existing proposal.
 * @name MsgDepositAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgDeposit
 */
export interface MsgDepositAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id: string;
  /**
   * depositor defines the deposit addresses from the proposals.
   */
  depositor?: string;
  /**
   * amount to be deposited by depositor.
   */
  amount: CoinAmino[];
}
export interface MsgDepositAminoMsg {
  type: "atomone/v1/MsgDeposit";
  value: MsgDepositAmino;
}
/** MsgDepositResponse defines the Msg/Deposit response type. */
export interface MsgDepositResponse {}
export interface MsgDepositResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgDepositResponse";
  value: Uint8Array;
}
/**
 * MsgDepositResponse defines the Msg/Deposit response type.
 * @name MsgDepositResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgDepositResponse
 */
export interface MsgDepositResponseAmino {}
export interface MsgDepositResponseAminoMsg {
  type: "/atomone.gov.v1.MsgDepositResponse";
  value: MsgDepositResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the x/gov parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params | undefined;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 * @name MsgUpdateParamsAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /**
   * params defines the x/gov parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino | undefined;
}
export interface MsgUpdateParamsAminoMsg {
  type: "atomone/x/gov/v1/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 * @name MsgUpdateParamsResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/atomone.gov.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
/** MsgLaw is the Msg/ProposeLaw request type. */
export interface MsgProposeLaw {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
}
export interface MsgProposeLawProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgProposeLaw";
  value: Uint8Array;
}
/**
 * MsgLaw is the Msg/ProposeLaw request type.
 * @name MsgProposeLawAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgProposeLaw
 */
export interface MsgProposeLawAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
}
export interface MsgProposeLawAminoMsg {
  type: "atomone/x/gov/v1/MsgProposeLaw";
  value: MsgProposeLawAmino;
}
/**
 * MsgProposeLawResponse defines the response structure for executing a
 * MsgProposeLaw message.
 */
export interface MsgProposeLawResponse {}
export interface MsgProposeLawResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgProposeLawResponse";
  value: Uint8Array;
}
/**
 * MsgProposeLawResponse defines the response structure for executing a
 * MsgProposeLaw message.
 * @name MsgProposeLawResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgProposeLawResponse
 */
export interface MsgProposeLawResponseAmino {}
export interface MsgProposeLawResponseAminoMsg {
  type: "/atomone.gov.v1.MsgProposeLawResponse";
  value: MsgProposeLawResponseAmino;
}
/** MsgConstitutionAmendment is the Msg/ProposeConstitutionAmendment request type. */
export interface MsgProposeConstitutionAmendment {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /** amendment is the amendment to the constitution. It must be in valid GNU patch format. */
  amendment: string;
}
export interface MsgProposeConstitutionAmendmentProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendment";
  value: Uint8Array;
}
/**
 * MsgConstitutionAmendment is the Msg/ProposeConstitutionAmendment request type.
 * @name MsgProposeConstitutionAmendmentAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgProposeConstitutionAmendment
 */
export interface MsgProposeConstitutionAmendmentAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /**
   * amendment is the amendment to the constitution. It must be in valid GNU patch format.
   */
  amendment?: string;
}
export interface MsgProposeConstitutionAmendmentAminoMsg {
  type: "atomone/x/gov/v1/MsgProposeAmendment";
  value: MsgProposeConstitutionAmendmentAmino;
}
/**
 * MsgProposeConstitutionAmendmentResponse defines the response structure for executing a
 * MsgProposeConstitutionAmendment message.
 */
export interface MsgProposeConstitutionAmendmentResponse {}
export interface MsgProposeConstitutionAmendmentResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendmentResponse";
  value: Uint8Array;
}
/**
 * MsgProposeConstitutionAmendmentResponse defines the response structure for executing a
 * MsgProposeConstitutionAmendment message.
 * @name MsgProposeConstitutionAmendmentResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgProposeConstitutionAmendmentResponse
 */
export interface MsgProposeConstitutionAmendmentResponseAmino {}
export interface MsgProposeConstitutionAmendmentResponseAminoMsg {
  type: "/atomone.gov.v1.MsgProposeConstitutionAmendmentResponse";
  value: MsgProposeConstitutionAmendmentResponseAmino;
}
/** MsgCreateGovernor defines a SDK message for creating a new governor. */
export interface MsgCreateGovernor {
  /** address is the base account address that is creating the governor. */
  address: string;
  description: GovernorDescription | undefined;
}
export interface MsgCreateGovernorProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgCreateGovernor";
  value: Uint8Array;
}
/**
 * MsgCreateGovernor defines a SDK message for creating a new governor.
 * @name MsgCreateGovernorAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgCreateGovernor
 */
export interface MsgCreateGovernorAmino {
  /**
   * address is the base account address that is creating the governor.
   */
  address?: string;
  description: GovernorDescriptionAmino | undefined;
}
export interface MsgCreateGovernorAminoMsg {
  type: "atomone/v1/MsgCreateGovernor";
  value: MsgCreateGovernorAmino;
}
/** MsgCreateGovernorrResponse defines the Msg/CreateGovernor response type. */
export interface MsgCreateGovernorResponse {}
export interface MsgCreateGovernorResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgCreateGovernorResponse";
  value: Uint8Array;
}
/**
 * MsgCreateGovernorrResponse defines the Msg/CreateGovernor response type.
 * @name MsgCreateGovernorResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgCreateGovernorResponse
 */
export interface MsgCreateGovernorResponseAmino {}
export interface MsgCreateGovernorResponseAminoMsg {
  type: "/atomone.gov.v1.MsgCreateGovernorResponse";
  value: MsgCreateGovernorResponseAmino;
}
/** MsgEditGovernor defines a SDK message for editing an existing governor. */
export interface MsgEditGovernor {
  /** address is the base account address that is editing the corresponding governor. */
  address: string;
  description: GovernorDescription | undefined;
}
export interface MsgEditGovernorProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgEditGovernor";
  value: Uint8Array;
}
/**
 * MsgEditGovernor defines a SDK message for editing an existing governor.
 * @name MsgEditGovernorAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgEditGovernor
 */
export interface MsgEditGovernorAmino {
  /**
   * address is the base account address that is editing the corresponding governor.
   */
  address?: string;
  description: GovernorDescriptionAmino | undefined;
}
export interface MsgEditGovernorAminoMsg {
  type: "atomone/v1/MsgEditGovernor";
  value: MsgEditGovernorAmino;
}
/** MsgEditGovernorResponse defines the Msg/EditGovernor response type. */
export interface MsgEditGovernorResponse {}
export interface MsgEditGovernorResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgEditGovernorResponse";
  value: Uint8Array;
}
/**
 * MsgEditGovernorResponse defines the Msg/EditGovernor response type.
 * @name MsgEditGovernorResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgEditGovernorResponse
 */
export interface MsgEditGovernorResponseAmino {}
export interface MsgEditGovernorResponseAminoMsg {
  type: "/atomone.gov.v1.MsgEditGovernorResponse";
  value: MsgEditGovernorResponseAmino;
}
/** MsgUpdateGovernorStatus defines a SDK message for updating the status of a governor. */
export interface MsgUpdateGovernorStatus {
  /** address is the base account address that is editing the corresponding governor. */
  address: string;
  status: GovernorStatus;
}
export interface MsgUpdateGovernorStatusProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgUpdateGovernorStatus";
  value: Uint8Array;
}
/**
 * MsgUpdateGovernorStatus defines a SDK message for updating the status of a governor.
 * @name MsgUpdateGovernorStatusAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgUpdateGovernorStatus
 */
export interface MsgUpdateGovernorStatusAmino {
  /**
   * address is the base account address that is editing the corresponding governor.
   */
  address?: string;
  status?: GovernorStatus;
}
export interface MsgUpdateGovernorStatusAminoMsg {
  type: "atomone/v1/MsgUpdateGovernorStatus";
  value: MsgUpdateGovernorStatusAmino;
}
/** MsgUpdateGovernorStatusResponse defines the Msg/UpdateGovernorStatus response type. */
export interface MsgUpdateGovernorStatusResponse {}
export interface MsgUpdateGovernorStatusResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgUpdateGovernorStatusResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateGovernorStatusResponse defines the Msg/UpdateGovernorStatus response type.
 * @name MsgUpdateGovernorStatusResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgUpdateGovernorStatusResponse
 */
export interface MsgUpdateGovernorStatusResponseAmino {}
export interface MsgUpdateGovernorStatusResponseAminoMsg {
  type: "/atomone.gov.v1.MsgUpdateGovernorStatusResponse";
  value: MsgUpdateGovernorStatusResponseAmino;
}
/**
 * MsgDelegateGovernor defines a SDK message for performing a delegation of governance voting power
 * from a delegator to a governor.
 */
export interface MsgDelegateGovernor {
  delegatorAddress: string;
  governorAddress: string;
}
export interface MsgDelegateGovernorProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgDelegateGovernor";
  value: Uint8Array;
}
/**
 * MsgDelegateGovernor defines a SDK message for performing a delegation of governance voting power
 * from a delegator to a governor.
 * @name MsgDelegateGovernorAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgDelegateGovernor
 */
export interface MsgDelegateGovernorAmino {
  delegator_address?: string;
  governor_address?: string;
}
export interface MsgDelegateGovernorAminoMsg {
  type: "atomone/v1/MsgDelegateGovernor";
  value: MsgDelegateGovernorAmino;
}
/** MsgDelegateGovernorResponse defines the Msg/Delegate response type. */
export interface MsgDelegateGovernorResponse {}
export interface MsgDelegateGovernorResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgDelegateGovernorResponse";
  value: Uint8Array;
}
/**
 * MsgDelegateGovernorResponse defines the Msg/Delegate response type.
 * @name MsgDelegateGovernorResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgDelegateGovernorResponse
 */
export interface MsgDelegateGovernorResponseAmino {}
export interface MsgDelegateGovernorResponseAminoMsg {
  type: "/atomone.gov.v1.MsgDelegateGovernorResponse";
  value: MsgDelegateGovernorResponseAmino;
}
/** MsgUndelegateGovernor defines a SDK message for undelegating governance voting power */
export interface MsgUndelegateGovernor {
  delegatorAddress: string;
}
export interface MsgUndelegateGovernorProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgUndelegateGovernor";
  value: Uint8Array;
}
/**
 * MsgUndelegateGovernor defines a SDK message for undelegating governance voting power
 * @name MsgUndelegateGovernorAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgUndelegateGovernor
 */
export interface MsgUndelegateGovernorAmino {
  delegator_address?: string;
}
export interface MsgUndelegateGovernorAminoMsg {
  type: "atomone/v1/MsgUndelegateGovernor";
  value: MsgUndelegateGovernorAmino;
}
/** MsgUndelegateGovernorResponse defines the Msg/UndelegateGovernor response type. */
export interface MsgUndelegateGovernorResponse {}
export interface MsgUndelegateGovernorResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.MsgUndelegateGovernorResponse";
  value: Uint8Array;
}
/**
 * MsgUndelegateGovernorResponse defines the Msg/UndelegateGovernor response type.
 * @name MsgUndelegateGovernorResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MsgUndelegateGovernorResponse
 */
export interface MsgUndelegateGovernorResponseAmino {}
export interface MsgUndelegateGovernorResponseAminoMsg {
  type: "/atomone.gov.v1.MsgUndelegateGovernorResponse";
  value: MsgUndelegateGovernorResponseAmino;
}
function createBaseMsgSubmitProposal(): MsgSubmitProposal {
  return {
    messages: [],
    initialDeposit: [],
    proposer: "",
    metadata: "",
    title: "",
    summary: "",
  };
}
export const MsgSubmitProposal = {
  typeUrl: "/atomone.gov.v1.MsgSubmitProposal",
  encode(message: MsgSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.initialDeposit) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.proposer !== "") {
      writer.uint32(26).string(message.proposer);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    if (message.title !== "") {
      writer.uint32(42).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(50).string(message.summary);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.initialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.proposer = reader.string();
          break;
        case 4:
          message.metadata = reader.string();
          break;
        case 5:
          message.title = reader.string();
          break;
        case 6:
          message.summary = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposal {
    const obj = createBaseMsgSubmitProposal();
    if (Array.isArray(object?.messages)) obj.messages = object.messages.map((e: any) => Any.fromJSON(e));
    if (Array.isArray(object?.initialDeposit))
      obj.initialDeposit = object.initialDeposit.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.proposer)) obj.proposer = String(object.proposer);
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.summary)) obj.summary = String(object.summary);
    return obj;
  },
  toJSON(message: MsgSubmitProposal): JsonSafe<MsgSubmitProposal> {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.messages = [];
    }
    if (message.initialDeposit) {
      obj.initialDeposit = message.initialDeposit.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.initialDeposit = [];
    }
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitProposal>): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
    message.initialDeposit = object.initialDeposit?.map((e) => Coin.fromPartial(e)) || [];
    message.proposer = object.proposer ?? "";
    message.metadata = object.metadata ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    return message;
  },
  fromAmino(object: MsgSubmitProposalAmino): MsgSubmitProposal {
    const message = createBaseMsgSubmitProposal();
    message.messages = object.messages?.map((e) => Any.fromAmino(e)) || [];
    message.initialDeposit = object.initial_deposit?.map((e) => Coin.fromAmino(e)) || [];
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    }
    if (object.summary !== undefined && object.summary !== null) {
      message.summary = object.summary;
    }
    return message;
  },
  toAmino(message: MsgSubmitProposal): MsgSubmitProposalAmino {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) => (e ? Any.toAmino(e) : undefined));
    } else {
      obj.messages = message.messages;
    }
    if (message.initialDeposit) {
      obj.initial_deposit = message.initialDeposit.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.initial_deposit = message.initialDeposit;
    }
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.title = message.title === "" ? undefined : message.title;
    obj.summary = message.summary === "" ? undefined : message.summary;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalAminoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSubmitProposal): MsgSubmitProposalAminoMsg {
    return {
      type: "atomone/v1/MsgSubmitProposal",
      value: MsgSubmitProposal.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgSubmitProposalProtoMsg): MsgSubmitProposal {
    return MsgSubmitProposal.decode(message.value);
  },
  toProto(message: MsgSubmitProposal): Uint8Array {
    return MsgSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposal): MsgSubmitProposalProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgSubmitProposal",
      value: MsgSubmitProposal.encode(message).finish(),
    };
  },
};
function createBaseMsgSubmitProposalResponse(): MsgSubmitProposalResponse {
  return {
    proposalId: BigInt(0),
  };
}
export const MsgSubmitProposalResponse = {
  typeUrl: "/atomone.gov.v1.MsgSubmitProposalResponse",
  encode(message: MsgSubmitProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSubmitProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSubmitProposalResponse {
    const obj = createBaseMsgSubmitProposalResponse();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: MsgSubmitProposalResponse): JsonSafe<MsgSubmitProposalResponse> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgSubmitProposalResponse>): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromAmino(object: MsgSubmitProposalResponseAmino): MsgSubmitProposalResponse {
    const message = createBaseMsgSubmitProposalResponse();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSubmitProposalResponseAminoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSubmitProposalResponseProtoMsg): MsgSubmitProposalResponse {
    return MsgSubmitProposalResponse.decode(message.value);
  },
  toProto(message: MsgSubmitProposalResponse): Uint8Array {
    return MsgSubmitProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSubmitProposalResponse): MsgSubmitProposalResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgSubmitProposalResponse",
      value: MsgSubmitProposalResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgExecLegacyContent(): MsgExecLegacyContent {
  return {
    content: undefined,
    authority: "",
  };
}
export const MsgExecLegacyContent = {
  typeUrl: "/atomone.gov.v1.MsgExecLegacyContent",
  encode(message: MsgExecLegacyContent, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.content !== undefined) {
      Any.encode(message.content, writer.uint32(10).fork()).ldelim();
    }
    if (message.authority !== "") {
      writer.uint32(18).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecLegacyContent {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecLegacyContent();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.content = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecLegacyContent {
    const obj = createBaseMsgExecLegacyContent();
    if (isSet(object.content)) obj.content = Any.fromJSON(object.content);
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: MsgExecLegacyContent): JsonSafe<MsgExecLegacyContent> {
    const obj: any = {};
    message.content !== undefined &&
      (obj.content = message.content ? Any.toJSON(message.content) : undefined);
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<MsgExecLegacyContent>): MsgExecLegacyContent {
    const message = createBaseMsgExecLegacyContent();
    if (object.content !== undefined && object.content !== null) {
      message.content = Any.fromPartial(object.content);
    }
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgExecLegacyContentAmino): MsgExecLegacyContent {
    const message = createBaseMsgExecLegacyContent();
    if (object.content !== undefined && object.content !== null) {
      message.content = Any.fromAmino(object.content);
    }
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgExecLegacyContent): MsgExecLegacyContentAmino {
    const obj: any = {};
    obj.content = message.content ? Any.toAmino(message.content) : undefined;
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgExecLegacyContentAminoMsg): MsgExecLegacyContent {
    return MsgExecLegacyContent.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecLegacyContent): MsgExecLegacyContentAminoMsg {
    return {
      type: "atomone/v1/MsgExecLegacyContent",
      value: MsgExecLegacyContent.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgExecLegacyContentProtoMsg): MsgExecLegacyContent {
    return MsgExecLegacyContent.decode(message.value);
  },
  toProto(message: MsgExecLegacyContent): Uint8Array {
    return MsgExecLegacyContent.encode(message).finish();
  },
  toProtoMsg(message: MsgExecLegacyContent): MsgExecLegacyContentProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgExecLegacyContent",
      value: MsgExecLegacyContent.encode(message).finish(),
    };
  },
};
function createBaseMsgExecLegacyContentResponse(): MsgExecLegacyContentResponse {
  return {};
}
export const MsgExecLegacyContentResponse = {
  typeUrl: "/atomone.gov.v1.MsgExecLegacyContentResponse",
  encode(_: MsgExecLegacyContentResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecLegacyContentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecLegacyContentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgExecLegacyContentResponse {
    const obj = createBaseMsgExecLegacyContentResponse();
    return obj;
  },
  toJSON(_: MsgExecLegacyContentResponse): JsonSafe<MsgExecLegacyContentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgExecLegacyContentResponse>): MsgExecLegacyContentResponse {
    const message = createBaseMsgExecLegacyContentResponse();
    return message;
  },
  fromAmino(_: MsgExecLegacyContentResponseAmino): MsgExecLegacyContentResponse {
    const message = createBaseMsgExecLegacyContentResponse();
    return message;
  },
  toAmino(_: MsgExecLegacyContentResponse): MsgExecLegacyContentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExecLegacyContentResponseAminoMsg): MsgExecLegacyContentResponse {
    return MsgExecLegacyContentResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExecLegacyContentResponseProtoMsg): MsgExecLegacyContentResponse {
    return MsgExecLegacyContentResponse.decode(message.value);
  },
  toProto(message: MsgExecLegacyContentResponse): Uint8Array {
    return MsgExecLegacyContentResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecLegacyContentResponse): MsgExecLegacyContentResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgExecLegacyContentResponse",
      value: MsgExecLegacyContentResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgVote(): MsgVote {
  return {
    proposalId: BigInt(0),
    voter: "",
    option: 0,
    metadata: "",
  };
}
export const MsgVote = {
  typeUrl: "/atomone.gov.v1.MsgVote",
  encode(message: MsgVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.option !== 0) {
      writer.uint32(24).int32(message.option);
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.option = reader.int32() as any;
          break;
        case 4:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVote {
    const obj = createBaseMsgVote();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.voter)) obj.voter = String(object.voter);
    if (isSet(object.option)) obj.option = voteOptionFromJSON(object.option);
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    return obj;
  },
  toJSON(message: MsgVote): JsonSafe<MsgVote> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: Partial<MsgVote>): MsgVote {
    const message = createBaseMsgVote();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.voter = object.voter ?? "";
    message.option = object.option ?? 0;
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgVoteAmino): MsgVote {
    const message = createBaseMsgVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgVote): MsgVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.option = message.option === 0 ? undefined : message.option;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgVoteAminoMsg): MsgVote {
    return MsgVote.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVote): MsgVoteAminoMsg {
    return {
      type: "atomone/v1/MsgVote",
      value: MsgVote.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgVoteProtoMsg): MsgVote {
    return MsgVote.decode(message.value);
  },
  toProto(message: MsgVote): Uint8Array {
    return MsgVote.encode(message).finish();
  },
  toProtoMsg(message: MsgVote): MsgVoteProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgVote",
      value: MsgVote.encode(message).finish(),
    };
  },
};
function createBaseMsgVoteResponse(): MsgVoteResponse {
  return {};
}
export const MsgVoteResponse = {
  typeUrl: "/atomone.gov.v1.MsgVoteResponse",
  encode(_: MsgVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgVoteResponse {
    const obj = createBaseMsgVoteResponse();
    return obj;
  },
  toJSON(_: MsgVoteResponse): JsonSafe<MsgVoteResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgVoteResponse>): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  fromAmino(_: MsgVoteResponseAmino): MsgVoteResponse {
    const message = createBaseMsgVoteResponse();
    return message;
  },
  toAmino(_: MsgVoteResponse): MsgVoteResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteResponseAminoMsg): MsgVoteResponse {
    return MsgVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVoteResponseProtoMsg): MsgVoteResponse {
    return MsgVoteResponse.decode(message.value);
  },
  toProto(message: MsgVoteResponse): Uint8Array {
    return MsgVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteResponse): MsgVoteResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgVoteResponse",
      value: MsgVoteResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgVoteWeighted(): MsgVoteWeighted {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: [],
    metadata: "",
  };
}
export const MsgVoteWeighted = {
  typeUrl: "/atomone.gov.v1.MsgVoteWeighted",
  encode(message: MsgVoteWeighted, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(34).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeighted {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeighted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 4:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVoteWeighted {
    const obj = createBaseMsgVoteWeighted();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.voter)) obj.voter = String(object.voter);
    if (Array.isArray(object?.options))
      obj.options = object.options.map((e: any) => WeightedVoteOption.fromJSON(e));
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    return obj;
  },
  toJSON(message: MsgVoteWeighted): JsonSafe<MsgVoteWeighted> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    if (message.options) {
      obj.options = message.options.map((e) => (e ? WeightedVoteOption.toJSON(e) : undefined));
    } else {
      obj.options = [];
    }
    message.metadata !== undefined && (obj.metadata = message.metadata);
    return obj;
  },
  fromPartial(object: Partial<MsgVoteWeighted>): MsgVoteWeighted {
    const message = createBaseMsgVoteWeighted();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.voter = object.voter ?? "";
    message.options = object.options?.map((e) => WeightedVoteOption.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: MsgVoteWeightedAmino): MsgVoteWeighted {
    const message = createBaseMsgVoteWeighted();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    message.options = object.options?.map((e) => WeightedVoteOption.fromAmino(e)) || [];
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    }
    return message;
  },
  toAmino(message: MsgVoteWeighted): MsgVoteWeightedAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    obj.voter = message.voter === "" ? undefined : message.voter;
    if (message.options) {
      obj.options = message.options.map((e) => (e ? WeightedVoteOption.toAmino(e) : undefined));
    } else {
      obj.options = message.options;
    }
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: MsgVoteWeightedAminoMsg): MsgVoteWeighted {
    return MsgVoteWeighted.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVoteWeighted): MsgVoteWeightedAminoMsg {
    return {
      type: "atomone/v1/MsgVoteWeighted",
      value: MsgVoteWeighted.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgVoteWeightedProtoMsg): MsgVoteWeighted {
    return MsgVoteWeighted.decode(message.value);
  },
  toProto(message: MsgVoteWeighted): Uint8Array {
    return MsgVoteWeighted.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteWeighted): MsgVoteWeightedProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgVoteWeighted",
      value: MsgVoteWeighted.encode(message).finish(),
    };
  },
};
function createBaseMsgVoteWeightedResponse(): MsgVoteWeightedResponse {
  return {};
}
export const MsgVoteWeightedResponse = {
  typeUrl: "/atomone.gov.v1.MsgVoteWeightedResponse",
  encode(_: MsgVoteWeightedResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVoteWeightedResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteWeightedResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgVoteWeightedResponse {
    const obj = createBaseMsgVoteWeightedResponse();
    return obj;
  },
  toJSON(_: MsgVoteWeightedResponse): JsonSafe<MsgVoteWeightedResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgVoteWeightedResponse>): MsgVoteWeightedResponse {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  },
  fromAmino(_: MsgVoteWeightedResponseAmino): MsgVoteWeightedResponse {
    const message = createBaseMsgVoteWeightedResponse();
    return message;
  },
  toAmino(_: MsgVoteWeightedResponse): MsgVoteWeightedResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVoteWeightedResponseAminoMsg): MsgVoteWeightedResponse {
    return MsgVoteWeightedResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVoteWeightedResponseProtoMsg): MsgVoteWeightedResponse {
    return MsgVoteWeightedResponse.decode(message.value);
  },
  toProto(message: MsgVoteWeightedResponse): Uint8Array {
    return MsgVoteWeightedResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVoteWeightedResponse): MsgVoteWeightedResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgVoteWeightedResponse",
      value: MsgVoteWeightedResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgDeposit(): MsgDeposit {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: [],
  };
}
export const MsgDeposit = {
  typeUrl: "/atomone.gov.v1.MsgDeposit",
  encode(message: MsgDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        case 3:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDeposit {
    const obj = createBaseMsgDeposit();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgDeposit): JsonSafe<MsgDeposit> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgDeposit>): MsgDeposit {
    const message = createBaseMsgDeposit();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgDepositAmino): MsgDeposit {
    const message = createBaseMsgDeposit();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    message.amount = object.amount?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgDeposit): MsgDepositAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId?.toString() : "0";
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: MsgDepositAminoMsg): MsgDeposit {
    return MsgDeposit.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDeposit): MsgDepositAminoMsg {
    return {
      type: "atomone/v1/MsgDeposit",
      value: MsgDeposit.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgDepositProtoMsg): MsgDeposit {
    return MsgDeposit.decode(message.value);
  },
  toProto(message: MsgDeposit): Uint8Array {
    return MsgDeposit.encode(message).finish();
  },
  toProtoMsg(message: MsgDeposit): MsgDepositProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgDeposit",
      value: MsgDeposit.encode(message).finish(),
    };
  },
};
function createBaseMsgDepositResponse(): MsgDepositResponse {
  return {};
}
export const MsgDepositResponse = {
  typeUrl: "/atomone.gov.v1.MsgDepositResponse",
  encode(_: MsgDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDepositResponse {
    const obj = createBaseMsgDepositResponse();
    return obj;
  },
  toJSON(_: MsgDepositResponse): JsonSafe<MsgDepositResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDepositResponse>): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  fromAmino(_: MsgDepositResponseAmino): MsgDepositResponse {
    const message = createBaseMsgDepositResponse();
    return message;
  },
  toAmino(_: MsgDepositResponse): MsgDepositResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDepositResponseAminoMsg): MsgDepositResponse {
    return MsgDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDepositResponseProtoMsg): MsgDepositResponse {
    return MsgDepositResponse.decode(message.value);
  },
  toProto(message: MsgDepositResponse): Uint8Array {
    return MsgDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDepositResponse): MsgDepositResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgDepositResponse",
      value: MsgDepositResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    params: Params.fromPartial({}),
  };
}
export const MsgUpdateParams = {
  typeUrl: "/atomone.gov.v1.MsgUpdateParams",
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateParams {
    const obj = createBaseMsgUpdateParams();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: MsgUpdateParams): JsonSafe<MsgUpdateParams> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "atomone/x/gov/v1/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/atomone.gov.v1.MsgUpdateParamsResponse",
  encode(_: MsgUpdateParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    const obj = createBaseMsgUpdateParamsResponse();
    return obj;
  },
  toJSON(_: MsgUpdateParamsResponse): JsonSafe<MsgUpdateParamsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  },
  toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgProposeLaw(): MsgProposeLaw {
  return {
    authority: "",
  };
}
export const MsgProposeLaw = {
  typeUrl: "/atomone.gov.v1.MsgProposeLaw",
  encode(message: MsgProposeLaw, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeLaw {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeLaw();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgProposeLaw {
    const obj = createBaseMsgProposeLaw();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: MsgProposeLaw): JsonSafe<MsgProposeLaw> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<MsgProposeLaw>): MsgProposeLaw {
    const message = createBaseMsgProposeLaw();
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgProposeLawAmino): MsgProposeLaw {
    const message = createBaseMsgProposeLaw();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgProposeLaw): MsgProposeLawAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgProposeLawAminoMsg): MsgProposeLaw {
    return MsgProposeLaw.fromAmino(object.value);
  },
  toAminoMsg(message: MsgProposeLaw): MsgProposeLawAminoMsg {
    return {
      type: "atomone/x/gov/v1/MsgProposeLaw",
      value: MsgProposeLaw.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgProposeLawProtoMsg): MsgProposeLaw {
    return MsgProposeLaw.decode(message.value);
  },
  toProto(message: MsgProposeLaw): Uint8Array {
    return MsgProposeLaw.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeLaw): MsgProposeLawProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgProposeLaw",
      value: MsgProposeLaw.encode(message).finish(),
    };
  },
};
function createBaseMsgProposeLawResponse(): MsgProposeLawResponse {
  return {};
}
export const MsgProposeLawResponse = {
  typeUrl: "/atomone.gov.v1.MsgProposeLawResponse",
  encode(_: MsgProposeLawResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeLawResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeLawResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgProposeLawResponse {
    const obj = createBaseMsgProposeLawResponse();
    return obj;
  },
  toJSON(_: MsgProposeLawResponse): JsonSafe<MsgProposeLawResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgProposeLawResponse>): MsgProposeLawResponse {
    const message = createBaseMsgProposeLawResponse();
    return message;
  },
  fromAmino(_: MsgProposeLawResponseAmino): MsgProposeLawResponse {
    const message = createBaseMsgProposeLawResponse();
    return message;
  },
  toAmino(_: MsgProposeLawResponse): MsgProposeLawResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgProposeLawResponseAminoMsg): MsgProposeLawResponse {
    return MsgProposeLawResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgProposeLawResponseProtoMsg): MsgProposeLawResponse {
    return MsgProposeLawResponse.decode(message.value);
  },
  toProto(message: MsgProposeLawResponse): Uint8Array {
    return MsgProposeLawResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeLawResponse): MsgProposeLawResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgProposeLawResponse",
      value: MsgProposeLawResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgProposeConstitutionAmendment(): MsgProposeConstitutionAmendment {
  return {
    authority: "",
    amendment: "",
  };
}
export const MsgProposeConstitutionAmendment = {
  typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendment",
  encode(
    message: MsgProposeConstitutionAmendment,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.amendment !== "") {
      writer.uint32(18).string(message.amendment);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeConstitutionAmendment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeConstitutionAmendment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.amendment = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgProposeConstitutionAmendment {
    const obj = createBaseMsgProposeConstitutionAmendment();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.amendment)) obj.amendment = String(object.amendment);
    return obj;
  },
  toJSON(message: MsgProposeConstitutionAmendment): JsonSafe<MsgProposeConstitutionAmendment> {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.amendment !== undefined && (obj.amendment = message.amendment);
    return obj;
  },
  fromPartial(object: Partial<MsgProposeConstitutionAmendment>): MsgProposeConstitutionAmendment {
    const message = createBaseMsgProposeConstitutionAmendment();
    message.authority = object.authority ?? "";
    message.amendment = object.amendment ?? "";
    return message;
  },
  fromAmino(object: MsgProposeConstitutionAmendmentAmino): MsgProposeConstitutionAmendment {
    const message = createBaseMsgProposeConstitutionAmendment();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.amendment !== undefined && object.amendment !== null) {
      message.amendment = object.amendment;
    }
    return message;
  },
  toAmino(message: MsgProposeConstitutionAmendment): MsgProposeConstitutionAmendmentAmino {
    const obj: any = {};
    obj.authority = message.authority === "" ? undefined : message.authority;
    obj.amendment = message.amendment === "" ? undefined : message.amendment;
    return obj;
  },
  fromAminoMsg(object: MsgProposeConstitutionAmendmentAminoMsg): MsgProposeConstitutionAmendment {
    return MsgProposeConstitutionAmendment.fromAmino(object.value);
  },
  toAminoMsg(message: MsgProposeConstitutionAmendment): MsgProposeConstitutionAmendmentAminoMsg {
    return {
      type: "atomone/x/gov/v1/MsgProposeAmendment",
      value: MsgProposeConstitutionAmendment.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgProposeConstitutionAmendmentProtoMsg): MsgProposeConstitutionAmendment {
    return MsgProposeConstitutionAmendment.decode(message.value);
  },
  toProto(message: MsgProposeConstitutionAmendment): Uint8Array {
    return MsgProposeConstitutionAmendment.encode(message).finish();
  },
  toProtoMsg(message: MsgProposeConstitutionAmendment): MsgProposeConstitutionAmendmentProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendment",
      value: MsgProposeConstitutionAmendment.encode(message).finish(),
    };
  },
};
function createBaseMsgProposeConstitutionAmendmentResponse(): MsgProposeConstitutionAmendmentResponse {
  return {};
}
export const MsgProposeConstitutionAmendmentResponse = {
  typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendmentResponse",
  encode(
    _: MsgProposeConstitutionAmendmentResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgProposeConstitutionAmendmentResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProposeConstitutionAmendmentResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgProposeConstitutionAmendmentResponse {
    const obj = createBaseMsgProposeConstitutionAmendmentResponse();
    return obj;
  },
  toJSON(_: MsgProposeConstitutionAmendmentResponse): JsonSafe<MsgProposeConstitutionAmendmentResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgProposeConstitutionAmendmentResponse>): MsgProposeConstitutionAmendmentResponse {
    const message = createBaseMsgProposeConstitutionAmendmentResponse();
    return message;
  },
  fromAmino(_: MsgProposeConstitutionAmendmentResponseAmino): MsgProposeConstitutionAmendmentResponse {
    const message = createBaseMsgProposeConstitutionAmendmentResponse();
    return message;
  },
  toAmino(_: MsgProposeConstitutionAmendmentResponse): MsgProposeConstitutionAmendmentResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(
    object: MsgProposeConstitutionAmendmentResponseAminoMsg,
  ): MsgProposeConstitutionAmendmentResponse {
    return MsgProposeConstitutionAmendmentResponse.fromAmino(object.value);
  },
  fromProtoMsg(
    message: MsgProposeConstitutionAmendmentResponseProtoMsg,
  ): MsgProposeConstitutionAmendmentResponse {
    return MsgProposeConstitutionAmendmentResponse.decode(message.value);
  },
  toProto(message: MsgProposeConstitutionAmendmentResponse): Uint8Array {
    return MsgProposeConstitutionAmendmentResponse.encode(message).finish();
  },
  toProtoMsg(
    message: MsgProposeConstitutionAmendmentResponse,
  ): MsgProposeConstitutionAmendmentResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgProposeConstitutionAmendmentResponse",
      value: MsgProposeConstitutionAmendmentResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgCreateGovernor(): MsgCreateGovernor {
  return {
    address: "",
    description: GovernorDescription.fromPartial({}),
  };
}
export const MsgCreateGovernor = {
  typeUrl: "/atomone.gov.v1.MsgCreateGovernor",
  encode(message: MsgCreateGovernor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.description !== undefined) {
      GovernorDescription.encode(message.description, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGovernor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGovernor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.description = GovernorDescription.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCreateGovernor {
    const obj = createBaseMsgCreateGovernor();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.description)) obj.description = GovernorDescription.fromJSON(object.description);
    return obj;
  },
  toJSON(message: MsgCreateGovernor): JsonSafe<MsgCreateGovernor> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.description !== undefined &&
      (obj.description = message.description ? GovernorDescription.toJSON(message.description) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgCreateGovernor>): MsgCreateGovernor {
    const message = createBaseMsgCreateGovernor();
    message.address = object.address ?? "";
    if (object.description !== undefined && object.description !== null) {
      message.description = GovernorDescription.fromPartial(object.description);
    }
    return message;
  },
  fromAmino(object: MsgCreateGovernorAmino): MsgCreateGovernor {
    const message = createBaseMsgCreateGovernor();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = GovernorDescription.fromAmino(object.description);
    }
    return message;
  },
  toAmino(message: MsgCreateGovernor): MsgCreateGovernorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.description = message.description
      ? GovernorDescription.toAmino(message.description)
      : GovernorDescription.toAmino(GovernorDescription.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCreateGovernorAminoMsg): MsgCreateGovernor {
    return MsgCreateGovernor.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCreateGovernor): MsgCreateGovernorAminoMsg {
    return {
      type: "atomone/v1/MsgCreateGovernor",
      value: MsgCreateGovernor.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgCreateGovernorProtoMsg): MsgCreateGovernor {
    return MsgCreateGovernor.decode(message.value);
  },
  toProto(message: MsgCreateGovernor): Uint8Array {
    return MsgCreateGovernor.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGovernor): MsgCreateGovernorProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgCreateGovernor",
      value: MsgCreateGovernor.encode(message).finish(),
    };
  },
};
function createBaseMsgCreateGovernorResponse(): MsgCreateGovernorResponse {
  return {};
}
export const MsgCreateGovernorResponse = {
  typeUrl: "/atomone.gov.v1.MsgCreateGovernorResponse",
  encode(_: MsgCreateGovernorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateGovernorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateGovernorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgCreateGovernorResponse {
    const obj = createBaseMsgCreateGovernorResponse();
    return obj;
  },
  toJSON(_: MsgCreateGovernorResponse): JsonSafe<MsgCreateGovernorResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCreateGovernorResponse>): MsgCreateGovernorResponse {
    const message = createBaseMsgCreateGovernorResponse();
    return message;
  },
  fromAmino(_: MsgCreateGovernorResponseAmino): MsgCreateGovernorResponse {
    const message = createBaseMsgCreateGovernorResponse();
    return message;
  },
  toAmino(_: MsgCreateGovernorResponse): MsgCreateGovernorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateGovernorResponseAminoMsg): MsgCreateGovernorResponse {
    return MsgCreateGovernorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateGovernorResponseProtoMsg): MsgCreateGovernorResponse {
    return MsgCreateGovernorResponse.decode(message.value);
  },
  toProto(message: MsgCreateGovernorResponse): Uint8Array {
    return MsgCreateGovernorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateGovernorResponse): MsgCreateGovernorResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgCreateGovernorResponse",
      value: MsgCreateGovernorResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgEditGovernor(): MsgEditGovernor {
  return {
    address: "",
    description: GovernorDescription.fromPartial({}),
  };
}
export const MsgEditGovernor = {
  typeUrl: "/atomone.gov.v1.MsgEditGovernor",
  encode(message: MsgEditGovernor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.description !== undefined) {
      GovernorDescription.encode(message.description, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditGovernor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditGovernor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.description = GovernorDescription.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEditGovernor {
    const obj = createBaseMsgEditGovernor();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.description)) obj.description = GovernorDescription.fromJSON(object.description);
    return obj;
  },
  toJSON(message: MsgEditGovernor): JsonSafe<MsgEditGovernor> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.description !== undefined &&
      (obj.description = message.description ? GovernorDescription.toJSON(message.description) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgEditGovernor>): MsgEditGovernor {
    const message = createBaseMsgEditGovernor();
    message.address = object.address ?? "";
    if (object.description !== undefined && object.description !== null) {
      message.description = GovernorDescription.fromPartial(object.description);
    }
    return message;
  },
  fromAmino(object: MsgEditGovernorAmino): MsgEditGovernor {
    const message = createBaseMsgEditGovernor();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = GovernorDescription.fromAmino(object.description);
    }
    return message;
  },
  toAmino(message: MsgEditGovernor): MsgEditGovernorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.description = message.description
      ? GovernorDescription.toAmino(message.description)
      : GovernorDescription.toAmino(GovernorDescription.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgEditGovernorAminoMsg): MsgEditGovernor {
    return MsgEditGovernor.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEditGovernor): MsgEditGovernorAminoMsg {
    return {
      type: "atomone/v1/MsgEditGovernor",
      value: MsgEditGovernor.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgEditGovernorProtoMsg): MsgEditGovernor {
    return MsgEditGovernor.decode(message.value);
  },
  toProto(message: MsgEditGovernor): Uint8Array {
    return MsgEditGovernor.encode(message).finish();
  },
  toProtoMsg(message: MsgEditGovernor): MsgEditGovernorProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgEditGovernor",
      value: MsgEditGovernor.encode(message).finish(),
    };
  },
};
function createBaseMsgEditGovernorResponse(): MsgEditGovernorResponse {
  return {};
}
export const MsgEditGovernorResponse = {
  typeUrl: "/atomone.gov.v1.MsgEditGovernorResponse",
  encode(_: MsgEditGovernorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEditGovernorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEditGovernorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgEditGovernorResponse {
    const obj = createBaseMsgEditGovernorResponse();
    return obj;
  },
  toJSON(_: MsgEditGovernorResponse): JsonSafe<MsgEditGovernorResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgEditGovernorResponse>): MsgEditGovernorResponse {
    const message = createBaseMsgEditGovernorResponse();
    return message;
  },
  fromAmino(_: MsgEditGovernorResponseAmino): MsgEditGovernorResponse {
    const message = createBaseMsgEditGovernorResponse();
    return message;
  },
  toAmino(_: MsgEditGovernorResponse): MsgEditGovernorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEditGovernorResponseAminoMsg): MsgEditGovernorResponse {
    return MsgEditGovernorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEditGovernorResponseProtoMsg): MsgEditGovernorResponse {
    return MsgEditGovernorResponse.decode(message.value);
  },
  toProto(message: MsgEditGovernorResponse): Uint8Array {
    return MsgEditGovernorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEditGovernorResponse): MsgEditGovernorResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgEditGovernorResponse",
      value: MsgEditGovernorResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateGovernorStatus(): MsgUpdateGovernorStatus {
  return {
    address: "",
    status: 0,
  };
}
export const MsgUpdateGovernorStatus = {
  typeUrl: "/atomone.gov.v1.MsgUpdateGovernorStatus",
  encode(message: MsgUpdateGovernorStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGovernorStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGovernorStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateGovernorStatus {
    const obj = createBaseMsgUpdateGovernorStatus();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.status)) obj.status = governorStatusFromJSON(object.status);
    return obj;
  },
  toJSON(message: MsgUpdateGovernorStatus): JsonSafe<MsgUpdateGovernorStatus> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.status !== undefined && (obj.status = governorStatusToJSON(message.status));
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateGovernorStatus>): MsgUpdateGovernorStatus {
    const message = createBaseMsgUpdateGovernorStatus();
    message.address = object.address ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: MsgUpdateGovernorStatusAmino): MsgUpdateGovernorStatus {
    const message = createBaseMsgUpdateGovernorStatus();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: MsgUpdateGovernorStatus): MsgUpdateGovernorStatusAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.status = message.status === 0 ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGovernorStatusAminoMsg): MsgUpdateGovernorStatus {
    return MsgUpdateGovernorStatus.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateGovernorStatus): MsgUpdateGovernorStatusAminoMsg {
    return {
      type: "atomone/v1/MsgUpdateGovernorStatus",
      value: MsgUpdateGovernorStatus.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgUpdateGovernorStatusProtoMsg): MsgUpdateGovernorStatus {
    return MsgUpdateGovernorStatus.decode(message.value);
  },
  toProto(message: MsgUpdateGovernorStatus): Uint8Array {
    return MsgUpdateGovernorStatus.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGovernorStatus): MsgUpdateGovernorStatusProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgUpdateGovernorStatus",
      value: MsgUpdateGovernorStatus.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateGovernorStatusResponse(): MsgUpdateGovernorStatusResponse {
  return {};
}
export const MsgUpdateGovernorStatusResponse = {
  typeUrl: "/atomone.gov.v1.MsgUpdateGovernorStatusResponse",
  encode(_: MsgUpdateGovernorStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateGovernorStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGovernorStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUpdateGovernorStatusResponse {
    const obj = createBaseMsgUpdateGovernorStatusResponse();
    return obj;
  },
  toJSON(_: MsgUpdateGovernorStatusResponse): JsonSafe<MsgUpdateGovernorStatusResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateGovernorStatusResponse>): MsgUpdateGovernorStatusResponse {
    const message = createBaseMsgUpdateGovernorStatusResponse();
    return message;
  },
  fromAmino(_: MsgUpdateGovernorStatusResponseAmino): MsgUpdateGovernorStatusResponse {
    const message = createBaseMsgUpdateGovernorStatusResponse();
    return message;
  },
  toAmino(_: MsgUpdateGovernorStatusResponse): MsgUpdateGovernorStatusResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateGovernorStatusResponseAminoMsg): MsgUpdateGovernorStatusResponse {
    return MsgUpdateGovernorStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateGovernorStatusResponseProtoMsg): MsgUpdateGovernorStatusResponse {
    return MsgUpdateGovernorStatusResponse.decode(message.value);
  },
  toProto(message: MsgUpdateGovernorStatusResponse): Uint8Array {
    return MsgUpdateGovernorStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateGovernorStatusResponse): MsgUpdateGovernorStatusResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgUpdateGovernorStatusResponse",
      value: MsgUpdateGovernorStatusResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgDelegateGovernor(): MsgDelegateGovernor {
  return {
    delegatorAddress: "",
    governorAddress: "",
  };
}
export const MsgDelegateGovernor = {
  typeUrl: "/atomone.gov.v1.MsgDelegateGovernor",
  encode(message: MsgDelegateGovernor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.governorAddress !== "") {
      writer.uint32(18).string(message.governorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateGovernor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateGovernor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.governorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgDelegateGovernor {
    const obj = createBaseMsgDelegateGovernor();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.governorAddress)) obj.governorAddress = String(object.governorAddress);
    return obj;
  },
  toJSON(message: MsgDelegateGovernor): JsonSafe<MsgDelegateGovernor> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.governorAddress !== undefined && (obj.governorAddress = message.governorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgDelegateGovernor>): MsgDelegateGovernor {
    const message = createBaseMsgDelegateGovernor();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.governorAddress = object.governorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgDelegateGovernorAmino): MsgDelegateGovernor {
    const message = createBaseMsgDelegateGovernor();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.governor_address !== undefined && object.governor_address !== null) {
      message.governorAddress = object.governor_address;
    }
    return message;
  },
  toAmino(message: MsgDelegateGovernor): MsgDelegateGovernorAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.governor_address = message.governorAddress === "" ? undefined : message.governorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgDelegateGovernorAminoMsg): MsgDelegateGovernor {
    return MsgDelegateGovernor.fromAmino(object.value);
  },
  toAminoMsg(message: MsgDelegateGovernor): MsgDelegateGovernorAminoMsg {
    return {
      type: "atomone/v1/MsgDelegateGovernor",
      value: MsgDelegateGovernor.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgDelegateGovernorProtoMsg): MsgDelegateGovernor {
    return MsgDelegateGovernor.decode(message.value);
  },
  toProto(message: MsgDelegateGovernor): Uint8Array {
    return MsgDelegateGovernor.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateGovernor): MsgDelegateGovernorProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgDelegateGovernor",
      value: MsgDelegateGovernor.encode(message).finish(),
    };
  },
};
function createBaseMsgDelegateGovernorResponse(): MsgDelegateGovernorResponse {
  return {};
}
export const MsgDelegateGovernorResponse = {
  typeUrl: "/atomone.gov.v1.MsgDelegateGovernorResponse",
  encode(_: MsgDelegateGovernorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDelegateGovernorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegateGovernorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgDelegateGovernorResponse {
    const obj = createBaseMsgDelegateGovernorResponse();
    return obj;
  },
  toJSON(_: MsgDelegateGovernorResponse): JsonSafe<MsgDelegateGovernorResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgDelegateGovernorResponse>): MsgDelegateGovernorResponse {
    const message = createBaseMsgDelegateGovernorResponse();
    return message;
  },
  fromAmino(_: MsgDelegateGovernorResponseAmino): MsgDelegateGovernorResponse {
    const message = createBaseMsgDelegateGovernorResponse();
    return message;
  },
  toAmino(_: MsgDelegateGovernorResponse): MsgDelegateGovernorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDelegateGovernorResponseAminoMsg): MsgDelegateGovernorResponse {
    return MsgDelegateGovernorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDelegateGovernorResponseProtoMsg): MsgDelegateGovernorResponse {
    return MsgDelegateGovernorResponse.decode(message.value);
  },
  toProto(message: MsgDelegateGovernorResponse): Uint8Array {
    return MsgDelegateGovernorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDelegateGovernorResponse): MsgDelegateGovernorResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgDelegateGovernorResponse",
      value: MsgDelegateGovernorResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgUndelegateGovernor(): MsgUndelegateGovernor {
  return {
    delegatorAddress: "",
  };
}
export const MsgUndelegateGovernor = {
  typeUrl: "/atomone.gov.v1.MsgUndelegateGovernor",
  encode(message: MsgUndelegateGovernor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateGovernor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateGovernor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUndelegateGovernor {
    const obj = createBaseMsgUndelegateGovernor();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: MsgUndelegateGovernor): JsonSafe<MsgUndelegateGovernor> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object: Partial<MsgUndelegateGovernor>): MsgUndelegateGovernor {
    const message = createBaseMsgUndelegateGovernor();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: MsgUndelegateGovernorAmino): MsgUndelegateGovernor {
    const message = createBaseMsgUndelegateGovernor();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: MsgUndelegateGovernor): MsgUndelegateGovernorAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateGovernorAminoMsg): MsgUndelegateGovernor {
    return MsgUndelegateGovernor.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUndelegateGovernor): MsgUndelegateGovernorAminoMsg {
    return {
      type: "atomone/v1/MsgUndelegateGovernor",
      value: MsgUndelegateGovernor.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgUndelegateGovernorProtoMsg): MsgUndelegateGovernor {
    return MsgUndelegateGovernor.decode(message.value);
  },
  toProto(message: MsgUndelegateGovernor): Uint8Array {
    return MsgUndelegateGovernor.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateGovernor): MsgUndelegateGovernorProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgUndelegateGovernor",
      value: MsgUndelegateGovernor.encode(message).finish(),
    };
  },
};
function createBaseMsgUndelegateGovernorResponse(): MsgUndelegateGovernorResponse {
  return {};
}
export const MsgUndelegateGovernorResponse = {
  typeUrl: "/atomone.gov.v1.MsgUndelegateGovernorResponse",
  encode(_: MsgUndelegateGovernorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUndelegateGovernorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegateGovernorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): MsgUndelegateGovernorResponse {
    const obj = createBaseMsgUndelegateGovernorResponse();
    return obj;
  },
  toJSON(_: MsgUndelegateGovernorResponse): JsonSafe<MsgUndelegateGovernorResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUndelegateGovernorResponse>): MsgUndelegateGovernorResponse {
    const message = createBaseMsgUndelegateGovernorResponse();
    return message;
  },
  fromAmino(_: MsgUndelegateGovernorResponseAmino): MsgUndelegateGovernorResponse {
    const message = createBaseMsgUndelegateGovernorResponse();
    return message;
  },
  toAmino(_: MsgUndelegateGovernorResponse): MsgUndelegateGovernorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUndelegateGovernorResponseAminoMsg): MsgUndelegateGovernorResponse {
    return MsgUndelegateGovernorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUndelegateGovernorResponseProtoMsg): MsgUndelegateGovernorResponse {
    return MsgUndelegateGovernorResponse.decode(message.value);
  },
  toProto(message: MsgUndelegateGovernorResponse): Uint8Array {
    return MsgUndelegateGovernorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUndelegateGovernorResponse): MsgUndelegateGovernorResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MsgUndelegateGovernorResponse",
      value: MsgUndelegateGovernorResponse.encode(message).finish(),
    };
  },
};
/** Msg defines the gov Msg service. */
export interface Msg {
  /** SubmitProposal defines a method to create new proposal given the messages. */
  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse>;
  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  ExecLegacyContent(request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponse>;
  /** Vote defines a method to add a vote on a specific proposal. */
  Vote(request: MsgVote): Promise<MsgVoteResponse>;
  /**
   * VoteWeighted defines a method to add a weighted vote on a specific
   * proposal.
   */
  VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse>;
  /** Deposit defines a method to add deposit on a specific proposal. */
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/gov module
   * parameters. The authority is defined in the keeper.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  /**
   * ProposeLaw defines a governance operation for proposing a new law.
   * The authority is defined in the keeper.
   */
  ProposeLaw(request: MsgProposeLaw): Promise<MsgProposeLawResponse>;
  /**
   * ProposeConstitutionAmendment defines a governance operation for proposing a
   * new constitution amendment. The authority is defined in the keeper.
   */
  ProposeConstitutionAmendment(
    request: MsgProposeConstitutionAmendment,
  ): Promise<MsgProposeConstitutionAmendmentResponse>;
  /** CreateGovernor defines a method to create a new governor. */
  CreateGovernor(request: MsgCreateGovernor): Promise<MsgCreateGovernorResponse>;
  /**
   * EditGovernor defines a method to edit an existing governor.
   * It also sets its status.
   */
  EditGovernor(request: MsgEditGovernor): Promise<MsgEditGovernorResponse>;
  /** UpdateGovernorStatus defines a method to update the status of a governor. */
  UpdateGovernorStatus(request: MsgUpdateGovernorStatus): Promise<MsgUpdateGovernorStatusResponse>;
  /**
   * DelegateGovernor defines a method to delegate a non-zero percentange of
   * governance voting power from a delegator to a governor.
   */
  DelegateGovernor(request: MsgDelegateGovernor): Promise<MsgDelegateGovernorResponse>;
  /** UndelegateGovernor defines a method to undelegate governance voting power */
  UndelegateGovernor(request: MsgUndelegateGovernor): Promise<MsgUndelegateGovernorResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.SubmitProposal = this.SubmitProposal.bind(this);
    this.ExecLegacyContent = this.ExecLegacyContent.bind(this);
    this.Vote = this.Vote.bind(this);
    this.VoteWeighted = this.VoteWeighted.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
    this.ProposeLaw = this.ProposeLaw.bind(this);
    this.ProposeConstitutionAmendment = this.ProposeConstitutionAmendment.bind(this);
    this.CreateGovernor = this.CreateGovernor.bind(this);
    this.EditGovernor = this.EditGovernor.bind(this);
    this.UpdateGovernorStatus = this.UpdateGovernorStatus.bind(this);
    this.DelegateGovernor = this.DelegateGovernor.bind(this);
    this.UndelegateGovernor = this.UndelegateGovernor.bind(this);
  }
  SubmitProposal(request: MsgSubmitProposal): Promise<MsgSubmitProposalResponse> {
    const data = MsgSubmitProposal.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "SubmitProposal", data);
    return promise.then((data) => MsgSubmitProposalResponse.decode(new BinaryReader(data)));
  }
  ExecLegacyContent(request: MsgExecLegacyContent): Promise<MsgExecLegacyContentResponse> {
    const data = MsgExecLegacyContent.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "ExecLegacyContent", data);
    return promise.then((data) => MsgExecLegacyContentResponse.decode(new BinaryReader(data)));
  }
  Vote(request: MsgVote): Promise<MsgVoteResponse> {
    const data = MsgVote.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "Vote", data);
    return promise.then((data) => MsgVoteResponse.decode(new BinaryReader(data)));
  }
  VoteWeighted(request: MsgVoteWeighted): Promise<MsgVoteWeightedResponse> {
    const data = MsgVoteWeighted.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "VoteWeighted", data);
    return promise.then((data) => MsgVoteWeightedResponse.decode(new BinaryReader(data)));
  }
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "Deposit", data);
    return promise.then((data) => MsgDepositResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  ProposeLaw(request: MsgProposeLaw): Promise<MsgProposeLawResponse> {
    const data = MsgProposeLaw.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "ProposeLaw", data);
    return promise.then((data) => MsgProposeLawResponse.decode(new BinaryReader(data)));
  }
  ProposeConstitutionAmendment(
    request: MsgProposeConstitutionAmendment,
  ): Promise<MsgProposeConstitutionAmendmentResponse> {
    const data = MsgProposeConstitutionAmendment.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "ProposeConstitutionAmendment", data);
    return promise.then((data) => MsgProposeConstitutionAmendmentResponse.decode(new BinaryReader(data)));
  }
  CreateGovernor(request: MsgCreateGovernor): Promise<MsgCreateGovernorResponse> {
    const data = MsgCreateGovernor.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "CreateGovernor", data);
    return promise.then((data) => MsgCreateGovernorResponse.decode(new BinaryReader(data)));
  }
  EditGovernor(request: MsgEditGovernor): Promise<MsgEditGovernorResponse> {
    const data = MsgEditGovernor.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "EditGovernor", data);
    return promise.then((data) => MsgEditGovernorResponse.decode(new BinaryReader(data)));
  }
  UpdateGovernorStatus(request: MsgUpdateGovernorStatus): Promise<MsgUpdateGovernorStatusResponse> {
    const data = MsgUpdateGovernorStatus.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "UpdateGovernorStatus", data);
    return promise.then((data) => MsgUpdateGovernorStatusResponse.decode(new BinaryReader(data)));
  }
  DelegateGovernor(request: MsgDelegateGovernor): Promise<MsgDelegateGovernorResponse> {
    const data = MsgDelegateGovernor.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "DelegateGovernor", data);
    return promise.then((data) => MsgDelegateGovernorResponse.decode(new BinaryReader(data)));
  }
  UndelegateGovernor(request: MsgUndelegateGovernor): Promise<MsgUndelegateGovernorResponse> {
    const data = MsgUndelegateGovernor.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Msg", "UndelegateGovernor", data);
    return promise.then((data) => MsgUndelegateGovernorResponse.decode(new BinaryReader(data)));
  }
}
