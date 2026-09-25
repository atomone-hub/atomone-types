/* eslint-disable */
import { ProposalStatus, Proposal, ProposalAmino, Vote, VoteAmino, VotingParams, VotingParamsAmino, DepositParams, DepositParamsAmino, TallyParams, TallyParamsAmino, Params, ParamsAmino, Deposit, DepositAmino, TallyResult, TallyResultAmino, Governor, GovernorAmino, GovernanceDelegation, GovernanceDelegationAmino, GovernorValShares, GovernorValSharesAmino, proposalStatusFromJSON, proposalStatusToJSON } from "./gov";
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../cosmos/base/query/v1beta1/pagination";
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { TxRpc } from "../../../types";
export const protobufPackage = "atomone.gov.v1";
/** QueryConstitutionRequest is the request type for the Query/Constitution RPC method */
export interface QueryConstitutionRequest {}
export interface QueryConstitutionRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryConstitutionRequest";
  value: Uint8Array;
}
/**
 * QueryConstitutionRequest is the request type for the Query/Constitution RPC method
 * @name QueryConstitutionRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryConstitutionRequest
 */
export interface QueryConstitutionRequestAmino {}
export interface QueryConstitutionRequestAminoMsg {
  type: "/atomone.gov.v1.QueryConstitutionRequest";
  value: QueryConstitutionRequestAmino;
}
/** QueryConstitutionResponse is the response type for the Query/Constitution RPC method */
export interface QueryConstitutionResponse {
  constitution: string;
}
export interface QueryConstitutionResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryConstitutionResponse";
  value: Uint8Array;
}
/**
 * QueryConstitutionResponse is the response type for the Query/Constitution RPC method
 * @name QueryConstitutionResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryConstitutionResponse
 */
export interface QueryConstitutionResponseAmino {
  constitution?: string;
}
export interface QueryConstitutionResponseAminoMsg {
  type: "/atomone.gov.v1.QueryConstitutionResponse";
  value: QueryConstitutionResponseAmino;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
}
export interface QueryProposalRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryProposalRequest";
  value: Uint8Array;
}
/**
 * QueryProposalRequest is the request type for the Query/Proposal RPC method.
 * @name QueryProposalRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryProposalRequest
 */
export interface QueryProposalRequestAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id?: string;
}
export interface QueryProposalRequestAminoMsg {
  type: "/atomone.gov.v1.QueryProposalRequest";
  value: QueryProposalRequestAmino;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
  /** proposal is the requested governance proposal. */
  proposal?: Proposal | undefined;
}
export interface QueryProposalResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryProposalResponse";
  value: Uint8Array;
}
/**
 * QueryProposalResponse is the response type for the Query/Proposal RPC method.
 * @name QueryProposalResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryProposalResponse
 */
export interface QueryProposalResponseAmino {
  /**
   * proposal is the requested governance proposal.
   */
  proposal?: ProposalAmino | undefined;
}
export interface QueryProposalResponseAminoMsg {
  type: "/atomone.gov.v1.QueryProposalResponse";
  value: QueryProposalResponseAmino;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
  /** proposal_status defines the status of the proposals. */
  proposalStatus: ProposalStatus;
  /** voter defines the voter address for the proposals. */
  voter: string;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryProposalsRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryProposalsRequest";
  value: Uint8Array;
}
/**
 * QueryProposalsRequest is the request type for the Query/Proposals RPC method.
 * @name QueryProposalsRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryProposalsRequest
 */
export interface QueryProposalsRequestAmino {
  /**
   * proposal_status defines the status of the proposals.
   */
  proposal_status?: ProposalStatus;
  /**
   * voter defines the voter address for the proposals.
   */
  voter?: string;
  /**
   * depositor defines the deposit addresses from the proposals.
   */
  depositor?: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryProposalsRequestAminoMsg {
  type: "/atomone.gov.v1.QueryProposalsRequest";
  value: QueryProposalsRequestAmino;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 */
export interface QueryProposalsResponse {
  /** proposals defines all the requested governance proposals. */
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryProposalsResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryProposalsResponse";
  value: Uint8Array;
}
/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 * @name QueryProposalsResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryProposalsResponse
 */
export interface QueryProposalsResponseAmino {
  /**
   * proposals defines all the requested governance proposals.
   */
  proposals?: ProposalAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryProposalsResponseAminoMsg {
  type: "/atomone.gov.v1.QueryProposalsResponse";
  value: QueryProposalsResponseAmino;
}
/** QueryVoteRequest is the request type for the Query/Vote RPC method. */
export interface QueryVoteRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter defines the voter address for the proposals. */
  voter: string;
}
export interface QueryVoteRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryVoteRequest";
  value: Uint8Array;
}
/**
 * QueryVoteRequest is the request type for the Query/Vote RPC method.
 * @name QueryVoteRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryVoteRequest
 */
export interface QueryVoteRequestAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id?: string;
  /**
   * voter defines the voter address for the proposals.
   */
  voter?: string;
}
export interface QueryVoteRequestAminoMsg {
  type: "/atomone.gov.v1.QueryVoteRequest";
  value: QueryVoteRequestAmino;
}
/** QueryVoteResponse is the response type for the Query/Vote RPC method. */
export interface QueryVoteResponse {
  /** vote defines the queried vote. */
  vote?: Vote | undefined;
}
export interface QueryVoteResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryVoteResponse";
  value: Uint8Array;
}
/**
 * QueryVoteResponse is the response type for the Query/Vote RPC method.
 * @name QueryVoteResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryVoteResponse
 */
export interface QueryVoteResponseAmino {
  /**
   * vote defines the queried vote.
   */
  vote?: VoteAmino | undefined;
}
export interface QueryVoteResponseAminoMsg {
  type: "/atomone.gov.v1.QueryVoteResponse";
  value: QueryVoteResponseAmino;
}
/** QueryVotesRequest is the request type for the Query/Votes RPC method. */
export interface QueryVotesRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryVotesRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryVotesRequest";
  value: Uint8Array;
}
/**
 * QueryVotesRequest is the request type for the Query/Votes RPC method.
 * @name QueryVotesRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryVotesRequest
 */
export interface QueryVotesRequestAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id?: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryVotesRequestAminoMsg {
  type: "/atomone.gov.v1.QueryVotesRequest";
  value: QueryVotesRequestAmino;
}
/** QueryVotesResponse is the response type for the Query/Votes RPC method. */
export interface QueryVotesResponse {
  /** votes defines the queried votes. */
  votes: Vote[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryVotesResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryVotesResponse";
  value: Uint8Array;
}
/**
 * QueryVotesResponse is the response type for the Query/Votes RPC method.
 * @name QueryVotesResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryVotesResponse
 */
export interface QueryVotesResponseAmino {
  /**
   * votes defines the queried votes.
   */
  votes?: VoteAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryVotesResponseAminoMsg {
  type: "/atomone.gov.v1.QueryVotesResponse";
  value: QueryVotesResponseAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  paramsType: string;
}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryParamsRequest";
  value: Uint8Array;
}
/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 * @name QueryParamsRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryParamsRequest
 */
export interface QueryParamsRequestAmino {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   */
  params_type?: string;
}
export interface QueryParamsRequestAminoMsg {
  type: "/atomone.gov.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines the parameters related to voting.
   */
  /** @deprecated */
  votingParams?: VotingParams | undefined;
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines the parameters related to deposit.
   */
  /** @deprecated */
  depositParams?: DepositParams | undefined;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines the parameters related to tally.
   */
  /** @deprecated */
  tallyParams?: TallyParams | undefined;
  /**
   * params defines all the paramaters of x/gov module.
   * 
   * Since: cosmos-sdk 0.47
   */
  params?: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryParamsResponse";
  value: Uint8Array;
}
/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 * @name QueryParamsResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryParamsResponse
 */
export interface QueryParamsResponseAmino {
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines the parameters related to voting.
   * @deprecated
   */
  voting_params?: VotingParamsAmino | undefined;
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines the parameters related to deposit.
   * @deprecated
   */
  deposit_params?: DepositParamsAmino | undefined;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines the parameters related to tally.
   * @deprecated
   */
  tally_params?: TallyParamsAmino | undefined;
  /**
   * params defines all the paramaters of x/gov module.
   * 
   * Since: cosmos-sdk 0.47
   */
  params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "/atomone.gov.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryDepositRequest is the request type for the Query/Deposit RPC method. */
export interface QueryDepositRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
}
export interface QueryDepositRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryDepositRequest";
  value: Uint8Array;
}
/**
 * QueryDepositRequest is the request type for the Query/Deposit RPC method.
 * @name QueryDepositRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryDepositRequest
 */
export interface QueryDepositRequestAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id?: string;
  /**
   * depositor defines the deposit addresses from the proposals.
   */
  depositor?: string;
}
export interface QueryDepositRequestAminoMsg {
  type: "/atomone.gov.v1.QueryDepositRequest";
  value: QueryDepositRequestAmino;
}
/** QueryDepositResponse is the response type for the Query/Deposit RPC method. */
export interface QueryDepositResponse {
  /** deposit defines the requested deposit. */
  deposit?: Deposit | undefined;
}
export interface QueryDepositResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryDepositResponse";
  value: Uint8Array;
}
/**
 * QueryDepositResponse is the response type for the Query/Deposit RPC method.
 * @name QueryDepositResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryDepositResponse
 */
export interface QueryDepositResponseAmino {
  /**
   * deposit defines the requested deposit.
   */
  deposit?: DepositAmino | undefined;
}
export interface QueryDepositResponseAminoMsg {
  type: "/atomone.gov.v1.QueryDepositResponse";
  value: QueryDepositResponseAmino;
}
/** QueryDepositsRequest is the request type for the Query/Deposits RPC method. */
export interface QueryDepositsRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryDepositsRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryDepositsRequest";
  value: Uint8Array;
}
/**
 * QueryDepositsRequest is the request type for the Query/Deposits RPC method.
 * @name QueryDepositsRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryDepositsRequest
 */
export interface QueryDepositsRequestAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id?: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryDepositsRequestAminoMsg {
  type: "/atomone.gov.v1.QueryDepositsRequest";
  value: QueryDepositsRequestAmino;
}
/** QueryDepositsResponse is the response type for the Query/Deposits RPC method. */
export interface QueryDepositsResponse {
  /** deposits defines the requested deposits. */
  deposits: Deposit[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryDepositsResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryDepositsResponse";
  value: Uint8Array;
}
/**
 * QueryDepositsResponse is the response type for the Query/Deposits RPC method.
 * @name QueryDepositsResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryDepositsResponse
 */
export interface QueryDepositsResponseAmino {
  /**
   * deposits defines the requested deposits.
   */
  deposits?: DepositAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryDepositsResponseAminoMsg {
  type: "/atomone.gov.v1.QueryDepositsResponse";
  value: QueryDepositsResponseAmino;
}
/** QueryTallyResultRequest is the request type for the Query/Tally RPC method. */
export interface QueryTallyResultRequest {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
}
export interface QueryTallyResultRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryTallyResultRequest";
  value: Uint8Array;
}
/**
 * QueryTallyResultRequest is the request type for the Query/Tally RPC method.
 * @name QueryTallyResultRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryTallyResultRequest
 */
export interface QueryTallyResultRequestAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id?: string;
}
export interface QueryTallyResultRequestAminoMsg {
  type: "/atomone.gov.v1.QueryTallyResultRequest";
  value: QueryTallyResultRequestAmino;
}
/** QueryTallyResultResponse is the response type for the Query/Tally RPC method. */
export interface QueryTallyResultResponse {
  /** tally defines the requested tally. */
  tally?: TallyResult | undefined;
}
export interface QueryTallyResultResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryTallyResultResponse";
  value: Uint8Array;
}
/**
 * QueryTallyResultResponse is the response type for the Query/Tally RPC method.
 * @name QueryTallyResultResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryTallyResultResponse
 */
export interface QueryTallyResultResponseAmino {
  /**
   * tally defines the requested tally.
   */
  tally?: TallyResultAmino | undefined;
}
export interface QueryTallyResultResponseAminoMsg {
  type: "/atomone.gov.v1.QueryTallyResultResponse";
  value: QueryTallyResultResponseAmino;
}
/** QueryMinDepositRequest is the request type for the Query/MinDeposit RPC method. */
export interface QueryMinDepositRequest {}
export interface QueryMinDepositRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryMinDepositRequest";
  value: Uint8Array;
}
/**
 * QueryMinDepositRequest is the request type for the Query/MinDeposit RPC method.
 * @name QueryMinDepositRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryMinDepositRequest
 */
export interface QueryMinDepositRequestAmino {}
export interface QueryMinDepositRequestAminoMsg {
  type: "/atomone.gov.v1.QueryMinDepositRequest";
  value: QueryMinDepositRequestAmino;
}
/** QueryMinDepositResponse is the response type for the Query/MinDeposit RPC method. */
export interface QueryMinDepositResponse {
  /** min_deposit defines the minimum deposit required for a proposal to enter voting period. */
  minDeposit: Coin[];
}
export interface QueryMinDepositResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryMinDepositResponse";
  value: Uint8Array;
}
/**
 * QueryMinDepositResponse is the response type for the Query/MinDeposit RPC method.
 * @name QueryMinDepositResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryMinDepositResponse
 */
export interface QueryMinDepositResponseAmino {
  /**
   * min_deposit defines the minimum deposit required for a proposal to enter voting period.
   */
  min_deposit?: CoinAmino[];
}
export interface QueryMinDepositResponseAminoMsg {
  type: "/atomone.gov.v1.QueryMinDepositResponse";
  value: QueryMinDepositResponseAmino;
}
/** QueryMinInitialDepositRequest is the request type for the Query/MinInitialDeposit RPC method. */
export interface QueryMinInitialDepositRequest {}
export interface QueryMinInitialDepositRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryMinInitialDepositRequest";
  value: Uint8Array;
}
/**
 * QueryMinInitialDepositRequest is the request type for the Query/MinInitialDeposit RPC method.
 * @name QueryMinInitialDepositRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryMinInitialDepositRequest
 */
export interface QueryMinInitialDepositRequestAmino {}
export interface QueryMinInitialDepositRequestAminoMsg {
  type: "/atomone.gov.v1.QueryMinInitialDepositRequest";
  value: QueryMinInitialDepositRequestAmino;
}
/** QueryMinInitialDepositResponse is the response type for the Query/MinInitialDeposit RPC method. */
export interface QueryMinInitialDepositResponse {
  /** min_initial_deposit defines the minimum initial deposit required for a proposal to be submitted. */
  minInitialDeposit: Coin[];
}
export interface QueryMinInitialDepositResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryMinInitialDepositResponse";
  value: Uint8Array;
}
/**
 * QueryMinInitialDepositResponse is the response type for the Query/MinInitialDeposit RPC method.
 * @name QueryMinInitialDepositResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryMinInitialDepositResponse
 */
export interface QueryMinInitialDepositResponseAmino {
  /**
   * min_initial_deposit defines the minimum initial deposit required for a proposal to be submitted.
   */
  min_initial_deposit?: CoinAmino[];
}
export interface QueryMinInitialDepositResponseAminoMsg {
  type: "/atomone.gov.v1.QueryMinInitialDepositResponse";
  value: QueryMinInitialDepositResponseAmino;
}
/** QueryQuorumsRequest is the request type for the Query/Quorums RPC method. */
export interface QueryQuorumsRequest {}
export interface QueryQuorumsRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryQuorumsRequest";
  value: Uint8Array;
}
/**
 * QueryQuorumsRequest is the request type for the Query/Quorums RPC method.
 * @name QueryQuorumsRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryQuorumsRequest
 */
export interface QueryQuorumsRequestAmino {}
export interface QueryQuorumsRequestAminoMsg {
  type: "/atomone.gov.v1.QueryQuorumsRequest";
  value: QueryQuorumsRequestAmino;
}
/** QueryQuorumsResponse is the response type for the Query/Quorums RPC method. */
export interface QueryQuorumsResponse {
  /** quorum defines the requested quorum. */
  quorum: string;
  /**
   * constitution_amendment_quorum defines the requested quorum for
   * constitution amendment proposals.
   */
  constitutionAmendmentQuorum: string;
  /** law_quorum defines the requested quorum for law proposals. */
  lawQuorum: string;
}
export interface QueryQuorumsResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryQuorumsResponse";
  value: Uint8Array;
}
/**
 * QueryQuorumsResponse is the response type for the Query/Quorums RPC method.
 * @name QueryQuorumsResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryQuorumsResponse
 */
export interface QueryQuorumsResponseAmino {
  /**
   * quorum defines the requested quorum.
   */
  quorum?: string;
  /**
   * constitution_amendment_quorum defines the requested quorum for
   * constitution amendment proposals.
   */
  constitution_amendment_quorum?: string;
  /**
   * law_quorum defines the requested quorum for law proposals.
   */
  law_quorum?: string;
}
export interface QueryQuorumsResponseAminoMsg {
  type: "/atomone.gov.v1.QueryQuorumsResponse";
  value: QueryQuorumsResponseAmino;
}
/** QueryParticipationEMAsRequest is the request type for the Query/ParticipationEMAs RPC method. */
export interface QueryParticipationEMAsRequest {}
export interface QueryParticipationEMAsRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryParticipationEMAsRequest";
  value: Uint8Array;
}
/**
 * QueryParticipationEMAsRequest is the request type for the Query/ParticipationEMAs RPC method.
 * @name QueryParticipationEMAsRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryParticipationEMAsRequest
 */
export interface QueryParticipationEMAsRequestAmino {}
export interface QueryParticipationEMAsRequestAminoMsg {
  type: "/atomone.gov.v1.QueryParticipationEMAsRequest";
  value: QueryParticipationEMAsRequestAmino;
}
/** QueryParticipationEMAsResponse is the response type for the Query/ParticipationEMAs RPC method. */
export interface QueryParticipationEMAsResponse {
  /** participation_ema defines the requested participation EMA for proposals. */
  participationEma: string;
  /**
   * constitution_amendment_participation_ema defines the requested participation EMA for
   * constitution amendment proposals.
   */
  constitutionAmendmentParticipationEma: string;
  /** law_participation_ema defines the requestedparticipation EMA for law proposals. */
  lawParticipationEma: string;
}
export interface QueryParticipationEMAsResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryParticipationEMAsResponse";
  value: Uint8Array;
}
/**
 * QueryParticipationEMAsResponse is the response type for the Query/ParticipationEMAs RPC method.
 * @name QueryParticipationEMAsResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryParticipationEMAsResponse
 */
export interface QueryParticipationEMAsResponseAmino {
  /**
   * participation_ema defines the requested participation EMA for proposals.
   */
  participation_ema?: string;
  /**
   * constitution_amendment_participation_ema defines the requested participation EMA for
   * constitution amendment proposals.
   */
  constitution_amendment_participation_ema?: string;
  /**
   * law_participation_ema defines the requestedparticipation EMA for law proposals.
   */
  law_participation_ema?: string;
}
export interface QueryParticipationEMAsResponseAminoMsg {
  type: "/atomone.gov.v1.QueryParticipationEMAsResponse";
  value: QueryParticipationEMAsResponseAmino;
}
/** QueryGovernorRequest is the request type for the Query/Governor RPC method. */
export interface QueryGovernorRequest {
  /** governor_address defines the address of the governor. */
  governorAddress: string;
}
export interface QueryGovernorRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryGovernorRequest";
  value: Uint8Array;
}
/**
 * QueryGovernorRequest is the request type for the Query/Governor RPC method.
 * @name QueryGovernorRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryGovernorRequest
 */
export interface QueryGovernorRequestAmino {
  /**
   * governor_address defines the address of the governor.
   */
  governor_address?: string;
}
export interface QueryGovernorRequestAminoMsg {
  type: "/atomone.gov.v1.QueryGovernorRequest";
  value: QueryGovernorRequestAmino;
}
/** QueryGovernorResponse is the response type for the Query/Governor RPC method. */
export interface QueryGovernorResponse {
  /** governor defines the requested governor. */
  governor?: Governor | undefined;
}
export interface QueryGovernorResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryGovernorResponse";
  value: Uint8Array;
}
/**
 * QueryGovernorResponse is the response type for the Query/Governor RPC method.
 * @name QueryGovernorResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryGovernorResponse
 */
export interface QueryGovernorResponseAmino {
  /**
   * governor defines the requested governor.
   */
  governor?: GovernorAmino | undefined;
}
export interface QueryGovernorResponseAminoMsg {
  type: "/atomone.gov.v1.QueryGovernorResponse";
  value: QueryGovernorResponseAmino;
}
/** QueryGovernorsRequest is the request type for the Query/Governors RPC method. */
export interface QueryGovernorsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryGovernorsRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryGovernorsRequest";
  value: Uint8Array;
}
/**
 * QueryGovernorsRequest is the request type for the Query/Governors RPC method.
 * @name QueryGovernorsRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryGovernorsRequest
 */
export interface QueryGovernorsRequestAmino {
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryGovernorsRequestAminoMsg {
  type: "/atomone.gov.v1.QueryGovernorsRequest";
  value: QueryGovernorsRequestAmino;
}
/** QueryGovernorsResponse is the response type for the Query/Governors RPC method. */
export interface QueryGovernorsResponse {
  /** governors defines the requested governors. */
  governors: Governor[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryGovernorsResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryGovernorsResponse";
  value: Uint8Array;
}
/**
 * QueryGovernorsResponse is the response type for the Query/Governors RPC method.
 * @name QueryGovernorsResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryGovernorsResponse
 */
export interface QueryGovernorsResponseAmino {
  /**
   * governors defines the requested governors.
   */
  governors?: GovernorAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryGovernorsResponseAminoMsg {
  type: "/atomone.gov.v1.QueryGovernorsResponse";
  value: QueryGovernorsResponseAmino;
}
/** QueryGovernanceDelegationsRequest is the request type for the Query/GovernanceDelegations RPC method. */
export interface QueryGovernanceDelegationsRequest {
  /** governor_address defines the address of the governor. */
  governorAddress: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryGovernanceDelegationsRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryGovernanceDelegationsRequest";
  value: Uint8Array;
}
/**
 * QueryGovernanceDelegationsRequest is the request type for the Query/GovernanceDelegations RPC method.
 * @name QueryGovernanceDelegationsRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryGovernanceDelegationsRequest
 */
export interface QueryGovernanceDelegationsRequestAmino {
  /**
   * governor_address defines the address of the governor.
   */
  governor_address?: string;
  /**
   * pagination defines an optional pagination for the request.
   */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryGovernanceDelegationsRequestAminoMsg {
  type: "/atomone.gov.v1.QueryGovernanceDelegationsRequest";
  value: QueryGovernanceDelegationsRequestAmino;
}
/** QueryGovernanceDelegationsResponse is the response type for the Query/GovernanceDelegations RPC method. */
export interface QueryGovernanceDelegationsResponse {
  /** delegations defines the requested delegations. */
  delegations: GovernanceDelegation[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryGovernanceDelegationsResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryGovernanceDelegationsResponse";
  value: Uint8Array;
}
/**
 * QueryGovernanceDelegationsResponse is the response type for the Query/GovernanceDelegations RPC method.
 * @name QueryGovernanceDelegationsResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryGovernanceDelegationsResponse
 */
export interface QueryGovernanceDelegationsResponseAmino {
  /**
   * delegations defines the requested delegations.
   */
  delegations?: GovernanceDelegationAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryGovernanceDelegationsResponseAminoMsg {
  type: "/atomone.gov.v1.QueryGovernanceDelegationsResponse";
  value: QueryGovernanceDelegationsResponseAmino;
}
/** QueryGovernanceDelegationRequest is the request type for the Query/GovernanceDelegation RPC method. */
export interface QueryGovernanceDelegationRequest {
  /** delegator_address defines the address of the delegator. */
  delegatorAddress: string;
}
export interface QueryGovernanceDelegationRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryGovernanceDelegationRequest";
  value: Uint8Array;
}
/**
 * QueryGovernanceDelegationRequest is the request type for the Query/GovernanceDelegation RPC method.
 * @name QueryGovernanceDelegationRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryGovernanceDelegationRequest
 */
export interface QueryGovernanceDelegationRequestAmino {
  /**
   * delegator_address defines the address of the delegator.
   */
  delegator_address?: string;
}
export interface QueryGovernanceDelegationRequestAminoMsg {
  type: "/atomone.gov.v1.QueryGovernanceDelegationRequest";
  value: QueryGovernanceDelegationRequestAmino;
}
/** QueryGovernanceDelegationResponse is the response type for the Query/GovernanceDelegation RPC method. */
export interface QueryGovernanceDelegationResponse {
  /** governor_address defines the address of the governor. */
  governorAddress: string;
}
export interface QueryGovernanceDelegationResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryGovernanceDelegationResponse";
  value: Uint8Array;
}
/**
 * QueryGovernanceDelegationResponse is the response type for the Query/GovernanceDelegation RPC method.
 * @name QueryGovernanceDelegationResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryGovernanceDelegationResponse
 */
export interface QueryGovernanceDelegationResponseAmino {
  /**
   * governor_address defines the address of the governor.
   */
  governor_address?: string;
}
export interface QueryGovernanceDelegationResponseAminoMsg {
  type: "/atomone.gov.v1.QueryGovernanceDelegationResponse";
  value: QueryGovernanceDelegationResponseAmino;
}
/** QueryGovernorValSharesRequest is the request type for the Query/GovernorValShares RPC method. */
export interface QueryGovernorValSharesRequest {
  /** governor_address defines the address of the governor. */
  governorAddress: string;
  /** pagination defines the pagination in the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryGovernorValSharesRequestProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryGovernorValSharesRequest";
  value: Uint8Array;
}
/**
 * QueryGovernorValSharesRequest is the request type for the Query/GovernorValShares RPC method.
 * @name QueryGovernorValSharesRequestAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryGovernorValSharesRequest
 */
export interface QueryGovernorValSharesRequestAmino {
  /**
   * governor_address defines the address of the governor.
   */
  governor_address?: string;
  /**
   * pagination defines the pagination in the request.
   */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryGovernorValSharesRequestAminoMsg {
  type: "/atomone.gov.v1.QueryGovernorValSharesRequest";
  value: QueryGovernorValSharesRequestAmino;
}
/** QueryGovernorValSharesResponse is the response type for the Query/GovernorValShares RPC method. */
export interface QueryGovernorValSharesResponse {
  /** val_shares defines the requested validator shares. */
  valShares: GovernorValShares[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryGovernorValSharesResponseProtoMsg {
  typeUrl: "/atomone.gov.v1.QueryGovernorValSharesResponse";
  value: Uint8Array;
}
/**
 * QueryGovernorValSharesResponse is the response type for the Query/GovernorValShares RPC method.
 * @name QueryGovernorValSharesResponseAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QueryGovernorValSharesResponse
 */
export interface QueryGovernorValSharesResponseAmino {
  /**
   * val_shares defines the requested validator shares.
   */
  val_shares?: GovernorValSharesAmino[];
  /**
   * pagination defines the pagination in the response.
   */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryGovernorValSharesResponseAminoMsg {
  type: "/atomone.gov.v1.QueryGovernorValSharesResponse";
  value: QueryGovernorValSharesResponseAmino;
}
function createBaseQueryConstitutionRequest(): QueryConstitutionRequest {
  return {};
}
export const QueryConstitutionRequest = {
  typeUrl: "/atomone.gov.v1.QueryConstitutionRequest",
  is(o: any): o is QueryConstitutionRequest {
    return o && o.$typeUrl === QueryConstitutionRequest.typeUrl;
  },
  isAmino(o: any): o is QueryConstitutionRequestAmino {
    return o && o.$typeUrl === QueryConstitutionRequest.typeUrl;
  },
  encode(_: QueryConstitutionRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConstitutionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConstitutionRequest();
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
  fromJSON(_: any): QueryConstitutionRequest {
    const obj = createBaseQueryConstitutionRequest();
    return obj;
  },
  toJSON(_: QueryConstitutionRequest): JsonSafe<QueryConstitutionRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryConstitutionRequest>): QueryConstitutionRequest {
    const message = createBaseQueryConstitutionRequest();
    return message;
  },
  fromAmino(_: QueryConstitutionRequestAmino): QueryConstitutionRequest {
    const message = createBaseQueryConstitutionRequest();
    return message;
  },
  toAmino(_: QueryConstitutionRequest): QueryConstitutionRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryConstitutionRequestAminoMsg): QueryConstitutionRequest {
    return QueryConstitutionRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConstitutionRequestProtoMsg): QueryConstitutionRequest {
    return QueryConstitutionRequest.decode(message.value);
  },
  toProto(message: QueryConstitutionRequest): Uint8Array {
    return QueryConstitutionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConstitutionRequest): QueryConstitutionRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryConstitutionRequest",
      value: QueryConstitutionRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConstitutionRequest.typeUrl, QueryConstitutionRequest);
function createBaseQueryConstitutionResponse(): QueryConstitutionResponse {
  return {
    constitution: ""
  };
}
export const QueryConstitutionResponse = {
  typeUrl: "/atomone.gov.v1.QueryConstitutionResponse",
  is(o: any): o is QueryConstitutionResponse {
    return o && (o.$typeUrl === QueryConstitutionResponse.typeUrl || typeof o.constitution === "string");
  },
  isAmino(o: any): o is QueryConstitutionResponseAmino {
    return o && (o.$typeUrl === QueryConstitutionResponse.typeUrl || typeof o.constitution === "string");
  },
  encode(message: QueryConstitutionResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.constitution !== "") {
      writer.uint32(10).string(message.constitution);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConstitutionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConstitutionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.constitution = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConstitutionResponse {
    const obj = createBaseQueryConstitutionResponse();
    if (isSet(object.constitution)) obj.constitution = String(object.constitution);
    return obj;
  },
  toJSON(message: QueryConstitutionResponse): JsonSafe<QueryConstitutionResponse> {
    const obj: any = {};
    message.constitution !== undefined && (obj.constitution = message.constitution);
    return obj;
  },
  fromPartial(object: Partial<QueryConstitutionResponse>): QueryConstitutionResponse {
    const message = createBaseQueryConstitutionResponse();
    message.constitution = object.constitution ?? "";
    return message;
  },
  fromAmino(object: QueryConstitutionResponseAmino): QueryConstitutionResponse {
    const message = createBaseQueryConstitutionResponse();
    if (object.constitution !== undefined && object.constitution !== null) {
      message.constitution = object.constitution;
    }
    return message;
  },
  toAmino(message: QueryConstitutionResponse): QueryConstitutionResponseAmino {
    const obj: any = {};
    obj.constitution = message.constitution === "" ? undefined : message.constitution;
    return obj;
  },
  fromAminoMsg(object: QueryConstitutionResponseAminoMsg): QueryConstitutionResponse {
    return QueryConstitutionResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConstitutionResponseProtoMsg): QueryConstitutionResponse {
    return QueryConstitutionResponse.decode(message.value);
  },
  toProto(message: QueryConstitutionResponse): Uint8Array {
    return QueryConstitutionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConstitutionResponse): QueryConstitutionResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryConstitutionResponse",
      value: QueryConstitutionResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConstitutionResponse.typeUrl, QueryConstitutionResponse);
function createBaseQueryProposalRequest(): QueryProposalRequest {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryProposalRequest = {
  typeUrl: "/atomone.gov.v1.QueryProposalRequest",
  is(o: any): o is QueryProposalRequest {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposalId === "bigint");
  },
  isAmino(o: any): o is QueryProposalRequestAmino {
    return o && (o.$typeUrl === QueryProposalRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryProposalRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
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
  fromJSON(object: any): QueryProposalRequest {
    const obj = createBaseQueryProposalRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: QueryProposalRequest): JsonSafe<QueryProposalRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryProposalRequest>): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromAmino(object: QueryProposalRequestAmino): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryProposalRequest): QueryProposalRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalRequestAminoMsg): QueryProposalRequest {
    return QueryProposalRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalRequestProtoMsg): QueryProposalRequest {
    return QueryProposalRequest.decode(message.value);
  },
  toProto(message: QueryProposalRequest): Uint8Array {
    return QueryProposalRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalRequest): QueryProposalRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryProposalRequest",
      value: QueryProposalRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalRequest.typeUrl, QueryProposalRequest);
function createBaseQueryProposalResponse(): QueryProposalResponse {
  return {
    proposal: undefined
  };
}
export const QueryProposalResponse = {
  typeUrl: "/atomone.gov.v1.QueryProposalResponse",
  is(o: any): o is QueryProposalResponse {
    return o && o.$typeUrl === QueryProposalResponse.typeUrl;
  },
  isAmino(o: any): o is QueryProposalResponseAmino {
    return o && o.$typeUrl === QueryProposalResponse.typeUrl;
  },
  encode(message: QueryProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalResponse {
    const obj = createBaseQueryProposalResponse();
    if (isSet(object.proposal)) obj.proposal = Proposal.fromJSON(object.proposal);
    return obj;
  },
  toJSON(message: QueryProposalResponse): JsonSafe<QueryProposalResponse> {
    const obj: any = {};
    message.proposal !== undefined && (obj.proposal = message.proposal ? Proposal.toJSON(message.proposal) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalResponse>): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromPartial(object.proposal);
    }
    return message;
  },
  fromAmino(object: QueryProposalResponseAmino): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    if (object.proposal !== undefined && object.proposal !== null) {
      message.proposal = Proposal.fromAmino(object.proposal);
    }
    return message;
  },
  toAmino(message: QueryProposalResponse): QueryProposalResponseAmino {
    const obj: any = {};
    obj.proposal = message.proposal ? Proposal.toAmino(message.proposal) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalResponseAminoMsg): QueryProposalResponse {
    return QueryProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalResponseProtoMsg): QueryProposalResponse {
    return QueryProposalResponse.decode(message.value);
  },
  toProto(message: QueryProposalResponse): Uint8Array {
    return QueryProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalResponse): QueryProposalResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryProposalResponse",
      value: QueryProposalResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalResponse.typeUrl, QueryProposalResponse);
function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return {
    proposalStatus: 0,
    voter: "",
    depositor: "",
    pagination: undefined
  };
}
export const QueryProposalsRequest = {
  typeUrl: "/atomone.gov.v1.QueryProposalsRequest",
  is(o: any): o is QueryProposalsRequest {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || isSet(o.proposalStatus) && typeof o.voter === "string" && typeof o.depositor === "string");
  },
  isAmino(o: any): o is QueryProposalsRequestAmino {
    return o && (o.$typeUrl === QueryProposalsRequest.typeUrl || isSet(o.proposal_status) && typeof o.voter === "string" && typeof o.depositor === "string");
  },
  encode(message: QueryProposalsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalStatus !== 0) {
      writer.uint32(8).int32(message.proposalStatus);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.depositor !== "") {
      writer.uint32(26).string(message.depositor);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalStatus = reader.int32() as any;
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.depositor = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsRequest {
    const obj = createBaseQueryProposalsRequest();
    if (isSet(object.proposalStatus)) obj.proposalStatus = proposalStatusFromJSON(object.proposalStatus);
    if (isSet(object.voter)) obj.voter = String(object.voter);
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryProposalsRequest): JsonSafe<QueryProposalsRequest> {
    const obj: any = {};
    message.proposalStatus !== undefined && (obj.proposalStatus = proposalStatusToJSON(message.proposalStatus));
    message.voter !== undefined && (obj.voter = message.voter);
    message.depositor !== undefined && (obj.depositor = message.depositor);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalsRequest>): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.proposalStatus = object.proposalStatus ?? 0;
    message.voter = object.voter ?? "";
    message.depositor = object.depositor ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryProposalsRequestAmino): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    if (object.proposal_status !== undefined && object.proposal_status !== null) {
      message.proposalStatus = object.proposal_status;
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsRequest): QueryProposalsRequestAmino {
    const obj: any = {};
    obj.proposal_status = message.proposalStatus === 0 ? undefined : message.proposalStatus;
    obj.voter = message.voter === "" ? undefined : message.voter;
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsRequestAminoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsRequestProtoMsg): QueryProposalsRequest {
    return QueryProposalsRequest.decode(message.value);
  },
  toProto(message: QueryProposalsRequest): Uint8Array {
    return QueryProposalsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsRequest): QueryProposalsRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryProposalsRequest",
      value: QueryProposalsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalsRequest.typeUrl, QueryProposalsRequest);
function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return {
    proposals: [],
    pagination: undefined
  };
}
export const QueryProposalsResponse = {
  typeUrl: "/atomone.gov.v1.QueryProposalsResponse",
  is(o: any): o is QueryProposalsResponse {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.is(o.proposals[0])));
  },
  isAmino(o: any): o is QueryProposalsResponseAmino {
    return o && (o.$typeUrl === QueryProposalsResponse.typeUrl || Array.isArray(o.proposals) && (!o.proposals.length || Proposal.isAmino(o.proposals[0])));
  },
  encode(message: QueryProposalsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryProposalsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryProposalsResponse {
    const obj = createBaseQueryProposalsResponse();
    if (Array.isArray(object?.proposals)) obj.proposals = object.proposals.map((e: any) => Proposal.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryProposalsResponse): JsonSafe<QueryProposalsResponse> {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toJSON(e) : undefined);
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryProposalsResponse>): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryProposalsResponseAmino): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals = object.proposals?.map(e => Proposal.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryProposalsResponse): QueryProposalsResponseAmino {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map(e => e ? Proposal.toAmino(e) : undefined);
    } else {
      obj.proposals = message.proposals;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryProposalsResponseAminoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryProposalsResponseProtoMsg): QueryProposalsResponse {
    return QueryProposalsResponse.decode(message.value);
  },
  toProto(message: QueryProposalsResponse): Uint8Array {
    return QueryProposalsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryProposalsResponse): QueryProposalsResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryProposalsResponse",
      value: QueryProposalsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryProposalsResponse.typeUrl, QueryProposalsResponse);
function createBaseQueryVoteRequest(): QueryVoteRequest {
  return {
    proposalId: BigInt(0),
    voter: ""
  };
}
export const QueryVoteRequest = {
  typeUrl: "/atomone.gov.v1.QueryVoteRequest",
  is(o: any): o is QueryVoteRequest {
    return o && (o.$typeUrl === QueryVoteRequest.typeUrl || typeof o.proposalId === "bigint" && typeof o.voter === "string");
  },
  isAmino(o: any): o is QueryVoteRequestAmino {
    return o && (o.$typeUrl === QueryVoteRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.voter === "string");
  },
  encode(message: QueryVoteRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteRequest {
    const obj = createBaseQueryVoteRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.voter)) obj.voter = String(object.voter);
    return obj;
  },
  toJSON(message: QueryVoteRequest): JsonSafe<QueryVoteRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },
  fromPartial(object: Partial<QueryVoteRequest>): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.voter = object.voter ?? "";
    return message;
  },
  fromAmino(object: QueryVoteRequestAmino): QueryVoteRequest {
    const message = createBaseQueryVoteRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    }
    return message;
  },
  toAmino(message: QueryVoteRequest): QueryVoteRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    return obj;
  },
  fromAminoMsg(object: QueryVoteRequestAminoMsg): QueryVoteRequest {
    return QueryVoteRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteRequestProtoMsg): QueryVoteRequest {
    return QueryVoteRequest.decode(message.value);
  },
  toProto(message: QueryVoteRequest): Uint8Array {
    return QueryVoteRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteRequest): QueryVoteRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryVoteRequest",
      value: QueryVoteRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVoteRequest.typeUrl, QueryVoteRequest);
function createBaseQueryVoteResponse(): QueryVoteResponse {
  return {
    vote: undefined
  };
}
export const QueryVoteResponse = {
  typeUrl: "/atomone.gov.v1.QueryVoteResponse",
  is(o: any): o is QueryVoteResponse {
    return o && o.$typeUrl === QueryVoteResponse.typeUrl;
  },
  isAmino(o: any): o is QueryVoteResponseAmino {
    return o && o.$typeUrl === QueryVoteResponse.typeUrl;
  },
  encode(message: QueryVoteResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vote !== undefined) {
      Vote.encode(message.vote, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVoteResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vote = Vote.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVoteResponse {
    const obj = createBaseQueryVoteResponse();
    if (isSet(object.vote)) obj.vote = Vote.fromJSON(object.vote);
    return obj;
  },
  toJSON(message: QueryVoteResponse): JsonSafe<QueryVoteResponse> {
    const obj: any = {};
    message.vote !== undefined && (obj.vote = message.vote ? Vote.toJSON(message.vote) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVoteResponse>): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromPartial(object.vote);
    }
    return message;
  },
  fromAmino(object: QueryVoteResponseAmino): QueryVoteResponse {
    const message = createBaseQueryVoteResponse();
    if (object.vote !== undefined && object.vote !== null) {
      message.vote = Vote.fromAmino(object.vote);
    }
    return message;
  },
  toAmino(message: QueryVoteResponse): QueryVoteResponseAmino {
    const obj: any = {};
    obj.vote = message.vote ? Vote.toAmino(message.vote) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVoteResponseAminoMsg): QueryVoteResponse {
    return QueryVoteResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVoteResponseProtoMsg): QueryVoteResponse {
    return QueryVoteResponse.decode(message.value);
  },
  toProto(message: QueryVoteResponse): Uint8Array {
    return QueryVoteResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVoteResponse): QueryVoteResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryVoteResponse",
      value: QueryVoteResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVoteResponse.typeUrl, QueryVoteResponse);
function createBaseQueryVotesRequest(): QueryVotesRequest {
  return {
    proposalId: BigInt(0),
    pagination: undefined
  };
}
export const QueryVotesRequest = {
  typeUrl: "/atomone.gov.v1.QueryVotesRequest",
  is(o: any): o is QueryVotesRequest {
    return o && (o.$typeUrl === QueryVotesRequest.typeUrl || typeof o.proposalId === "bigint");
  },
  isAmino(o: any): o is QueryVotesRequestAmino {
    return o && (o.$typeUrl === QueryVotesRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryVotesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesRequest {
    const obj = createBaseQueryVotesRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryVotesRequest): JsonSafe<QueryVotesRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVotesRequest>): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryVotesRequestAmino): QueryVotesRequest {
    const message = createBaseQueryVotesRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesRequest): QueryVotesRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesRequestAminoMsg): QueryVotesRequest {
    return QueryVotesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotesRequestProtoMsg): QueryVotesRequest {
    return QueryVotesRequest.decode(message.value);
  },
  toProto(message: QueryVotesRequest): Uint8Array {
    return QueryVotesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesRequest): QueryVotesRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryVotesRequest",
      value: QueryVotesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVotesRequest.typeUrl, QueryVotesRequest);
function createBaseQueryVotesResponse(): QueryVotesResponse {
  return {
    votes: [],
    pagination: undefined
  };
}
export const QueryVotesResponse = {
  typeUrl: "/atomone.gov.v1.QueryVotesResponse",
  is(o: any): o is QueryVotesResponse {
    return o && (o.$typeUrl === QueryVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.is(o.votes[0])));
  },
  isAmino(o: any): o is QueryVotesResponseAmino {
    return o && (o.$typeUrl === QueryVotesResponse.typeUrl || Array.isArray(o.votes) && (!o.votes.length || Vote.isAmino(o.votes[0])));
  },
  encode(message: QueryVotesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVotesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVotesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVotesResponse {
    const obj = createBaseQueryVotesResponse();
    if (Array.isArray(object?.votes)) obj.votes = object.votes.map((e: any) => Vote.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryVotesResponse): JsonSafe<QueryVotesResponse> {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toJSON(e) : undefined);
    } else {
      obj.votes = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVotesResponse>): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryVotesResponseAmino): QueryVotesResponse {
    const message = createBaseQueryVotesResponse();
    message.votes = object.votes?.map(e => Vote.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryVotesResponse): QueryVotesResponseAmino {
    const obj: any = {};
    if (message.votes) {
      obj.votes = message.votes.map(e => e ? Vote.toAmino(e) : undefined);
    } else {
      obj.votes = message.votes;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVotesResponseAminoMsg): QueryVotesResponse {
    return QueryVotesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryVotesResponseProtoMsg): QueryVotesResponse {
    return QueryVotesResponse.decode(message.value);
  },
  toProto(message: QueryVotesResponse): Uint8Array {
    return QueryVotesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVotesResponse): QueryVotesResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryVotesResponse",
      value: QueryVotesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVotesResponse.typeUrl, QueryVotesResponse);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {
    paramsType: ""
  };
}
export const QueryParamsRequest = {
  typeUrl: "/atomone.gov.v1.QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.paramsType === "string");
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && (o.$typeUrl === QueryParamsRequest.typeUrl || typeof o.params_type === "string");
  },
  encode(message: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.paramsType !== "") {
      writer.uint32(10).string(message.paramsType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.paramsType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    if (isSet(object.paramsType)) obj.paramsType = String(object.paramsType);
    return obj;
  },
  toJSON(message: QueryParamsRequest): JsonSafe<QueryParamsRequest> {
    const obj: any = {};
    message.paramsType !== undefined && (obj.paramsType = message.paramsType);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.paramsType = object.paramsType ?? "";
    return message;
  },
  fromAmino(object: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    if (object.params_type !== undefined && object.params_type !== null) {
      message.paramsType = object.params_type;
    }
    return message;
  },
  toAmino(message: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    obj.params_type = message.paramsType === "" ? undefined : message.paramsType;
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    votingParams: undefined,
    depositParams: undefined,
    tallyParams: undefined,
    params: undefined
  };
}
export const QueryParamsResponse = {
  typeUrl: "/atomone.gov.v1.QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && o.$typeUrl === QueryParamsResponse.typeUrl;
  },
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(10).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(18).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingParams = VotingParams.decode(reader, reader.uint32());
          break;
        case 2:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;
        case 3:
          message.tallyParams = TallyParams.decode(reader, reader.uint32());
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.votingParams)) obj.votingParams = VotingParams.fromJSON(object.votingParams);
    if (isSet(object.depositParams)) obj.depositParams = DepositParams.fromJSON(object.depositParams);
    if (isSet(object.tallyParams)) obj.tallyParams = TallyParams.fromJSON(object.tallyParams);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): JsonSafe<QueryParamsResponse> {
    const obj: any = {};
    message.votingParams !== undefined && (obj.votingParams = message.votingParams ? VotingParams.toJSON(message.votingParams) : undefined);
    message.depositParams !== undefined && (obj.depositParams = message.depositParams ? DepositParams.toJSON(message.depositParams) : undefined);
    message.tallyParams !== undefined && (obj.tallyParams = message.tallyParams ? TallyParams.toJSON(message.tallyParams) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.votingParams !== undefined && object.votingParams !== null) {
      message.votingParams = VotingParams.fromPartial(object.votingParams);
    }
    if (object.depositParams !== undefined && object.depositParams !== null) {
      message.depositParams = DepositParams.fromPartial(object.depositParams);
    }
    if (object.tallyParams !== undefined && object.tallyParams !== null) {
      message.tallyParams = TallyParams.fromPartial(object.tallyParams);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.voting_params !== undefined && object.voting_params !== null) {
      message.votingParams = VotingParams.fromAmino(object.voting_params);
    }
    if (object.deposit_params !== undefined && object.deposit_params !== null) {
      message.depositParams = DepositParams.fromAmino(object.deposit_params);
    }
    if (object.tally_params !== undefined && object.tally_params !== null) {
      message.tallyParams = TallyParams.fromAmino(object.tally_params);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.voting_params = message.votingParams ? VotingParams.toAmino(message.votingParams) : undefined;
    obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : undefined;
    obj.tally_params = message.tallyParams ? TallyParams.toAmino(message.tallyParams) : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
function createBaseQueryDepositRequest(): QueryDepositRequest {
  return {
    proposalId: BigInt(0),
    depositor: ""
  };
}
export const QueryDepositRequest = {
  typeUrl: "/atomone.gov.v1.QueryDepositRequest",
  is(o: any): o is QueryDepositRequest {
    return o && (o.$typeUrl === QueryDepositRequest.typeUrl || typeof o.proposalId === "bigint" && typeof o.depositor === "string");
  },
  isAmino(o: any): o is QueryDepositRequestAmino {
    return o && (o.$typeUrl === QueryDepositRequest.typeUrl || typeof o.proposal_id === "bigint" && typeof o.depositor === "string");
  },
  encode(message: QueryDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.depositor !== "") {
      writer.uint32(18).string(message.depositor);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositRequest {
    const obj = createBaseQueryDepositRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    return obj;
  },
  toJSON(message: QueryDepositRequest): JsonSafe<QueryDepositRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },
  fromPartial(object: Partial<QueryDepositRequest>): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.depositor = object.depositor ?? "";
    return message;
  },
  fromAmino(object: QueryDepositRequestAmino): QueryDepositRequest {
    const message = createBaseQueryDepositRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    return message;
  },
  toAmino(message: QueryDepositRequest): QueryDepositRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    return obj;
  },
  fromAminoMsg(object: QueryDepositRequestAminoMsg): QueryDepositRequest {
    return QueryDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositRequestProtoMsg): QueryDepositRequest {
    return QueryDepositRequest.decode(message.value);
  },
  toProto(message: QueryDepositRequest): Uint8Array {
    return QueryDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositRequest): QueryDepositRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryDepositRequest",
      value: QueryDepositRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDepositRequest.typeUrl, QueryDepositRequest);
function createBaseQueryDepositResponse(): QueryDepositResponse {
  return {
    deposit: undefined
  };
}
export const QueryDepositResponse = {
  typeUrl: "/atomone.gov.v1.QueryDepositResponse",
  is(o: any): o is QueryDepositResponse {
    return o && o.$typeUrl === QueryDepositResponse.typeUrl;
  },
  isAmino(o: any): o is QueryDepositResponseAmino {
    return o && o.$typeUrl === QueryDepositResponse.typeUrl;
  },
  encode(message: QueryDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      Deposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposit = Deposit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositResponse {
    const obj = createBaseQueryDepositResponse();
    if (isSet(object.deposit)) obj.deposit = Deposit.fromJSON(object.deposit);
    return obj;
  },
  toJSON(message: QueryDepositResponse): JsonSafe<QueryDepositResponse> {
    const obj: any = {};
    message.deposit !== undefined && (obj.deposit = message.deposit ? Deposit.toJSON(message.deposit) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDepositResponse>): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Deposit.fromPartial(object.deposit);
    }
    return message;
  },
  fromAmino(object: QueryDepositResponseAmino): QueryDepositResponse {
    const message = createBaseQueryDepositResponse();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Deposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: QueryDepositResponse): QueryDepositResponseAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? Deposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositResponseAminoMsg): QueryDepositResponse {
    return QueryDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositResponseProtoMsg): QueryDepositResponse {
    return QueryDepositResponse.decode(message.value);
  },
  toProto(message: QueryDepositResponse): Uint8Array {
    return QueryDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositResponse): QueryDepositResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryDepositResponse",
      value: QueryDepositResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDepositResponse.typeUrl, QueryDepositResponse);
function createBaseQueryDepositsRequest(): QueryDepositsRequest {
  return {
    proposalId: BigInt(0),
    pagination: undefined
  };
}
export const QueryDepositsRequest = {
  typeUrl: "/atomone.gov.v1.QueryDepositsRequest",
  is(o: any): o is QueryDepositsRequest {
    return o && (o.$typeUrl === QueryDepositsRequest.typeUrl || typeof o.proposalId === "bigint");
  },
  isAmino(o: any): o is QueryDepositsRequestAmino {
    return o && (o.$typeUrl === QueryDepositsRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryDepositsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositsRequest {
    const obj = createBaseQueryDepositsRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDepositsRequest): JsonSafe<QueryDepositsRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDepositsRequest>): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryDepositsRequestAmino): QueryDepositsRequest {
    const message = createBaseQueryDepositsRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDepositsRequest): QueryDepositsRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsRequestAminoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsRequestProtoMsg): QueryDepositsRequest {
    return QueryDepositsRequest.decode(message.value);
  },
  toProto(message: QueryDepositsRequest): Uint8Array {
    return QueryDepositsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsRequest): QueryDepositsRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryDepositsRequest",
      value: QueryDepositsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDepositsRequest.typeUrl, QueryDepositsRequest);
function createBaseQueryDepositsResponse(): QueryDepositsResponse {
  return {
    deposits: [],
    pagination: undefined
  };
}
export const QueryDepositsResponse = {
  typeUrl: "/atomone.gov.v1.QueryDepositsResponse",
  is(o: any): o is QueryDepositsResponse {
    return o && (o.$typeUrl === QueryDepositsResponse.typeUrl || Array.isArray(o.deposits) && (!o.deposits.length || Deposit.is(o.deposits[0])));
  },
  isAmino(o: any): o is QueryDepositsResponseAmino {
    return o && (o.$typeUrl === QueryDepositsResponse.typeUrl || Array.isArray(o.deposits) && (!o.deposits.length || Deposit.isAmino(o.deposits[0])));
  },
  encode(message: QueryDepositsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDepositsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDepositsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDepositsResponse {
    const obj = createBaseQueryDepositsResponse();
    if (Array.isArray(object?.deposits)) obj.deposits = object.deposits.map((e: any) => Deposit.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryDepositsResponse): JsonSafe<QueryDepositsResponse> {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toJSON(e) : undefined);
    } else {
      obj.deposits = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryDepositsResponse>): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryDepositsResponseAmino): QueryDepositsResponse {
    const message = createBaseQueryDepositsResponse();
    message.deposits = object.deposits?.map(e => Deposit.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryDepositsResponse): QueryDepositsResponseAmino {
    const obj: any = {};
    if (message.deposits) {
      obj.deposits = message.deposits.map(e => e ? Deposit.toAmino(e) : undefined);
    } else {
      obj.deposits = message.deposits;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryDepositsResponseAminoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryDepositsResponseProtoMsg): QueryDepositsResponse {
    return QueryDepositsResponse.decode(message.value);
  },
  toProto(message: QueryDepositsResponse): Uint8Array {
    return QueryDepositsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDepositsResponse): QueryDepositsResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryDepositsResponse",
      value: QueryDepositsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryDepositsResponse.typeUrl, QueryDepositsResponse);
function createBaseQueryTallyResultRequest(): QueryTallyResultRequest {
  return {
    proposalId: BigInt(0)
  };
}
export const QueryTallyResultRequest = {
  typeUrl: "/atomone.gov.v1.QueryTallyResultRequest",
  is(o: any): o is QueryTallyResultRequest {
    return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposalId === "bigint");
  },
  isAmino(o: any): o is QueryTallyResultRequestAmino {
    return o && (o.$typeUrl === QueryTallyResultRequest.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: QueryTallyResultRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultRequest();
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
  fromJSON(object: any): QueryTallyResultRequest {
    const obj = createBaseQueryTallyResultRequest();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: QueryTallyResultRequest): JsonSafe<QueryTallyResultRequest> {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryTallyResultRequest>): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromAmino(object: QueryTallyResultRequestAmino): QueryTallyResultRequest {
    const message = createBaseQueryTallyResultRequest();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: QueryTallyResultRequest): QueryTallyResultRequestAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultRequestAminoMsg): QueryTallyResultRequest {
    return QueryTallyResultRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTallyResultRequestProtoMsg): QueryTallyResultRequest {
    return QueryTallyResultRequest.decode(message.value);
  },
  toProto(message: QueryTallyResultRequest): Uint8Array {
    return QueryTallyResultRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultRequest): QueryTallyResultRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryTallyResultRequest",
      value: QueryTallyResultRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTallyResultRequest.typeUrl, QueryTallyResultRequest);
function createBaseQueryTallyResultResponse(): QueryTallyResultResponse {
  return {
    tally: undefined
  };
}
export const QueryTallyResultResponse = {
  typeUrl: "/atomone.gov.v1.QueryTallyResultResponse",
  is(o: any): o is QueryTallyResultResponse {
    return o && o.$typeUrl === QueryTallyResultResponse.typeUrl;
  },
  isAmino(o: any): o is QueryTallyResultResponseAmino {
    return o && o.$typeUrl === QueryTallyResultResponse.typeUrl;
  },
  encode(message: QueryTallyResultResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.tally !== undefined) {
      TallyResult.encode(message.tally, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryTallyResultResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryTallyResultResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tally = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryTallyResultResponse {
    const obj = createBaseQueryTallyResultResponse();
    if (isSet(object.tally)) obj.tally = TallyResult.fromJSON(object.tally);
    return obj;
  },
  toJSON(message: QueryTallyResultResponse): JsonSafe<QueryTallyResultResponse> {
    const obj: any = {};
    message.tally !== undefined && (obj.tally = message.tally ? TallyResult.toJSON(message.tally) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryTallyResultResponse>): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = TallyResult.fromPartial(object.tally);
    }
    return message;
  },
  fromAmino(object: QueryTallyResultResponseAmino): QueryTallyResultResponse {
    const message = createBaseQueryTallyResultResponse();
    if (object.tally !== undefined && object.tally !== null) {
      message.tally = TallyResult.fromAmino(object.tally);
    }
    return message;
  },
  toAmino(message: QueryTallyResultResponse): QueryTallyResultResponseAmino {
    const obj: any = {};
    obj.tally = message.tally ? TallyResult.toAmino(message.tally) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryTallyResultResponseAminoMsg): QueryTallyResultResponse {
    return QueryTallyResultResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryTallyResultResponseProtoMsg): QueryTallyResultResponse {
    return QueryTallyResultResponse.decode(message.value);
  },
  toProto(message: QueryTallyResultResponse): Uint8Array {
    return QueryTallyResultResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryTallyResultResponse): QueryTallyResultResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryTallyResultResponse",
      value: QueryTallyResultResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryTallyResultResponse.typeUrl, QueryTallyResultResponse);
function createBaseQueryMinDepositRequest(): QueryMinDepositRequest {
  return {};
}
export const QueryMinDepositRequest = {
  typeUrl: "/atomone.gov.v1.QueryMinDepositRequest",
  is(o: any): o is QueryMinDepositRequest {
    return o && o.$typeUrl === QueryMinDepositRequest.typeUrl;
  },
  isAmino(o: any): o is QueryMinDepositRequestAmino {
    return o && o.$typeUrl === QueryMinDepositRequest.typeUrl;
  },
  encode(_: QueryMinDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMinDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinDepositRequest();
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
  fromJSON(_: any): QueryMinDepositRequest {
    const obj = createBaseQueryMinDepositRequest();
    return obj;
  },
  toJSON(_: QueryMinDepositRequest): JsonSafe<QueryMinDepositRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryMinDepositRequest>): QueryMinDepositRequest {
    const message = createBaseQueryMinDepositRequest();
    return message;
  },
  fromAmino(_: QueryMinDepositRequestAmino): QueryMinDepositRequest {
    const message = createBaseQueryMinDepositRequest();
    return message;
  },
  toAmino(_: QueryMinDepositRequest): QueryMinDepositRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMinDepositRequestAminoMsg): QueryMinDepositRequest {
    return QueryMinDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinDepositRequestProtoMsg): QueryMinDepositRequest {
    return QueryMinDepositRequest.decode(message.value);
  },
  toProto(message: QueryMinDepositRequest): Uint8Array {
    return QueryMinDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMinDepositRequest): QueryMinDepositRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryMinDepositRequest",
      value: QueryMinDepositRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMinDepositRequest.typeUrl, QueryMinDepositRequest);
function createBaseQueryMinDepositResponse(): QueryMinDepositResponse {
  return {
    minDeposit: []
  };
}
export const QueryMinDepositResponse = {
  typeUrl: "/atomone.gov.v1.QueryMinDepositResponse",
  is(o: any): o is QueryMinDepositResponse {
    return o && (o.$typeUrl === QueryMinDepositResponse.typeUrl || Array.isArray(o.minDeposit) && (!o.minDeposit.length || Coin.is(o.minDeposit[0])));
  },
  isAmino(o: any): o is QueryMinDepositResponseAmino {
    return o && (o.$typeUrl === QueryMinDepositResponse.typeUrl || Array.isArray(o.min_deposit) && (!o.min_deposit.length || Coin.isAmino(o.min_deposit[0])));
  },
  encode(message: QueryMinDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMinDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMinDepositResponse {
    const obj = createBaseQueryMinDepositResponse();
    if (Array.isArray(object?.minDeposit)) obj.minDeposit = object.minDeposit.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryMinDepositResponse): JsonSafe<QueryMinDepositResponse> {
    const obj: any = {};
    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minDeposit = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryMinDepositResponse>): QueryMinDepositResponse {
    const message = createBaseQueryMinDepositResponse();
    message.minDeposit = object.minDeposit?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMinDepositResponseAmino): QueryMinDepositResponse {
    const message = createBaseQueryMinDepositResponse();
    message.minDeposit = object.min_deposit?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMinDepositResponse): QueryMinDepositResponseAmino {
    const obj: any = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_deposit = message.minDeposit;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMinDepositResponseAminoMsg): QueryMinDepositResponse {
    return QueryMinDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinDepositResponseProtoMsg): QueryMinDepositResponse {
    return QueryMinDepositResponse.decode(message.value);
  },
  toProto(message: QueryMinDepositResponse): Uint8Array {
    return QueryMinDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMinDepositResponse): QueryMinDepositResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryMinDepositResponse",
      value: QueryMinDepositResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMinDepositResponse.typeUrl, QueryMinDepositResponse);
function createBaseQueryMinInitialDepositRequest(): QueryMinInitialDepositRequest {
  return {};
}
export const QueryMinInitialDepositRequest = {
  typeUrl: "/atomone.gov.v1.QueryMinInitialDepositRequest",
  is(o: any): o is QueryMinInitialDepositRequest {
    return o && o.$typeUrl === QueryMinInitialDepositRequest.typeUrl;
  },
  isAmino(o: any): o is QueryMinInitialDepositRequestAmino {
    return o && o.$typeUrl === QueryMinInitialDepositRequest.typeUrl;
  },
  encode(_: QueryMinInitialDepositRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMinInitialDepositRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinInitialDepositRequest();
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
  fromJSON(_: any): QueryMinInitialDepositRequest {
    const obj = createBaseQueryMinInitialDepositRequest();
    return obj;
  },
  toJSON(_: QueryMinInitialDepositRequest): JsonSafe<QueryMinInitialDepositRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryMinInitialDepositRequest>): QueryMinInitialDepositRequest {
    const message = createBaseQueryMinInitialDepositRequest();
    return message;
  },
  fromAmino(_: QueryMinInitialDepositRequestAmino): QueryMinInitialDepositRequest {
    const message = createBaseQueryMinInitialDepositRequest();
    return message;
  },
  toAmino(_: QueryMinInitialDepositRequest): QueryMinInitialDepositRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryMinInitialDepositRequestAminoMsg): QueryMinInitialDepositRequest {
    return QueryMinInitialDepositRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinInitialDepositRequestProtoMsg): QueryMinInitialDepositRequest {
    return QueryMinInitialDepositRequest.decode(message.value);
  },
  toProto(message: QueryMinInitialDepositRequest): Uint8Array {
    return QueryMinInitialDepositRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryMinInitialDepositRequest): QueryMinInitialDepositRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryMinInitialDepositRequest",
      value: QueryMinInitialDepositRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMinInitialDepositRequest.typeUrl, QueryMinInitialDepositRequest);
function createBaseQueryMinInitialDepositResponse(): QueryMinInitialDepositResponse {
  return {
    minInitialDeposit: []
  };
}
export const QueryMinInitialDepositResponse = {
  typeUrl: "/atomone.gov.v1.QueryMinInitialDepositResponse",
  is(o: any): o is QueryMinInitialDepositResponse {
    return o && (o.$typeUrl === QueryMinInitialDepositResponse.typeUrl || Array.isArray(o.minInitialDeposit) && (!o.minInitialDeposit.length || Coin.is(o.minInitialDeposit[0])));
  },
  isAmino(o: any): o is QueryMinInitialDepositResponseAmino {
    return o && (o.$typeUrl === QueryMinInitialDepositResponse.typeUrl || Array.isArray(o.min_initial_deposit) && (!o.min_initial_deposit.length || Coin.isAmino(o.min_initial_deposit[0])));
  },
  encode(message: QueryMinInitialDepositResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minInitialDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryMinInitialDepositResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMinInitialDepositResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minInitialDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryMinInitialDepositResponse {
    const obj = createBaseQueryMinInitialDepositResponse();
    if (Array.isArray(object?.minInitialDeposit)) obj.minInitialDeposit = object.minInitialDeposit.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryMinInitialDepositResponse): JsonSafe<QueryMinInitialDepositResponse> {
    const obj: any = {};
    if (message.minInitialDeposit) {
      obj.minInitialDeposit = message.minInitialDeposit.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.minInitialDeposit = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryMinInitialDepositResponse>): QueryMinInitialDepositResponse {
    const message = createBaseQueryMinInitialDepositResponse();
    message.minInitialDeposit = object.minInitialDeposit?.map(e => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryMinInitialDepositResponseAmino): QueryMinInitialDepositResponse {
    const message = createBaseQueryMinInitialDepositResponse();
    message.minInitialDeposit = object.min_initial_deposit?.map(e => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryMinInitialDepositResponse): QueryMinInitialDepositResponseAmino {
    const obj: any = {};
    if (message.minInitialDeposit) {
      obj.min_initial_deposit = message.minInitialDeposit.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.min_initial_deposit = message.minInitialDeposit;
    }
    return obj;
  },
  fromAminoMsg(object: QueryMinInitialDepositResponseAminoMsg): QueryMinInitialDepositResponse {
    return QueryMinInitialDepositResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryMinInitialDepositResponseProtoMsg): QueryMinInitialDepositResponse {
    return QueryMinInitialDepositResponse.decode(message.value);
  },
  toProto(message: QueryMinInitialDepositResponse): Uint8Array {
    return QueryMinInitialDepositResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryMinInitialDepositResponse): QueryMinInitialDepositResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryMinInitialDepositResponse",
      value: QueryMinInitialDepositResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryMinInitialDepositResponse.typeUrl, QueryMinInitialDepositResponse);
function createBaseQueryQuorumsRequest(): QueryQuorumsRequest {
  return {};
}
export const QueryQuorumsRequest = {
  typeUrl: "/atomone.gov.v1.QueryQuorumsRequest",
  is(o: any): o is QueryQuorumsRequest {
    return o && o.$typeUrl === QueryQuorumsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryQuorumsRequestAmino {
    return o && o.$typeUrl === QueryQuorumsRequest.typeUrl;
  },
  encode(_: QueryQuorumsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuorumsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuorumsRequest();
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
  fromJSON(_: any): QueryQuorumsRequest {
    const obj = createBaseQueryQuorumsRequest();
    return obj;
  },
  toJSON(_: QueryQuorumsRequest): JsonSafe<QueryQuorumsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryQuorumsRequest>): QueryQuorumsRequest {
    const message = createBaseQueryQuorumsRequest();
    return message;
  },
  fromAmino(_: QueryQuorumsRequestAmino): QueryQuorumsRequest {
    const message = createBaseQueryQuorumsRequest();
    return message;
  },
  toAmino(_: QueryQuorumsRequest): QueryQuorumsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryQuorumsRequestAminoMsg): QueryQuorumsRequest {
    return QueryQuorumsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuorumsRequestProtoMsg): QueryQuorumsRequest {
    return QueryQuorumsRequest.decode(message.value);
  },
  toProto(message: QueryQuorumsRequest): Uint8Array {
    return QueryQuorumsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryQuorumsRequest): QueryQuorumsRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryQuorumsRequest",
      value: QueryQuorumsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryQuorumsRequest.typeUrl, QueryQuorumsRequest);
function createBaseQueryQuorumsResponse(): QueryQuorumsResponse {
  return {
    quorum: "",
    constitutionAmendmentQuorum: "",
    lawQuorum: ""
  };
}
export const QueryQuorumsResponse = {
  typeUrl: "/atomone.gov.v1.QueryQuorumsResponse",
  is(o: any): o is QueryQuorumsResponse {
    return o && (o.$typeUrl === QueryQuorumsResponse.typeUrl || typeof o.quorum === "string" && typeof o.constitutionAmendmentQuorum === "string" && typeof o.lawQuorum === "string");
  },
  isAmino(o: any): o is QueryQuorumsResponseAmino {
    return o && (o.$typeUrl === QueryQuorumsResponse.typeUrl || typeof o.quorum === "string" && typeof o.constitution_amendment_quorum === "string" && typeof o.law_quorum === "string");
  },
  encode(message: QueryQuorumsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }
    if (message.constitutionAmendmentQuorum !== "") {
      writer.uint32(18).string(message.constitutionAmendmentQuorum);
    }
    if (message.lawQuorum !== "") {
      writer.uint32(26).string(message.lawQuorum);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryQuorumsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryQuorumsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.string();
          break;
        case 2:
          message.constitutionAmendmentQuorum = reader.string();
          break;
        case 3:
          message.lawQuorum = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryQuorumsResponse {
    const obj = createBaseQueryQuorumsResponse();
    if (isSet(object.quorum)) obj.quorum = String(object.quorum);
    if (isSet(object.constitutionAmendmentQuorum)) obj.constitutionAmendmentQuorum = String(object.constitutionAmendmentQuorum);
    if (isSet(object.lawQuorum)) obj.lawQuorum = String(object.lawQuorum);
    return obj;
  },
  toJSON(message: QueryQuorumsResponse): JsonSafe<QueryQuorumsResponse> {
    const obj: any = {};
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.constitutionAmendmentQuorum !== undefined && (obj.constitutionAmendmentQuorum = message.constitutionAmendmentQuorum);
    message.lawQuorum !== undefined && (obj.lawQuorum = message.lawQuorum);
    return obj;
  },
  fromPartial(object: Partial<QueryQuorumsResponse>): QueryQuorumsResponse {
    const message = createBaseQueryQuorumsResponse();
    message.quorum = object.quorum ?? "";
    message.constitutionAmendmentQuorum = object.constitutionAmendmentQuorum ?? "";
    message.lawQuorum = object.lawQuorum ?? "";
    return message;
  },
  fromAmino(object: QueryQuorumsResponseAmino): QueryQuorumsResponse {
    const message = createBaseQueryQuorumsResponse();
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = object.quorum;
    }
    if (object.constitution_amendment_quorum !== undefined && object.constitution_amendment_quorum !== null) {
      message.constitutionAmendmentQuorum = object.constitution_amendment_quorum;
    }
    if (object.law_quorum !== undefined && object.law_quorum !== null) {
      message.lawQuorum = object.law_quorum;
    }
    return message;
  },
  toAmino(message: QueryQuorumsResponse): QueryQuorumsResponseAmino {
    const obj: any = {};
    obj.quorum = message.quorum === "" ? undefined : message.quorum;
    obj.constitution_amendment_quorum = message.constitutionAmendmentQuorum === "" ? undefined : message.constitutionAmendmentQuorum;
    obj.law_quorum = message.lawQuorum === "" ? undefined : message.lawQuorum;
    return obj;
  },
  fromAminoMsg(object: QueryQuorumsResponseAminoMsg): QueryQuorumsResponse {
    return QueryQuorumsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryQuorumsResponseProtoMsg): QueryQuorumsResponse {
    return QueryQuorumsResponse.decode(message.value);
  },
  toProto(message: QueryQuorumsResponse): Uint8Array {
    return QueryQuorumsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryQuorumsResponse): QueryQuorumsResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryQuorumsResponse",
      value: QueryQuorumsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryQuorumsResponse.typeUrl, QueryQuorumsResponse);
function createBaseQueryParticipationEMAsRequest(): QueryParticipationEMAsRequest {
  return {};
}
export const QueryParticipationEMAsRequest = {
  typeUrl: "/atomone.gov.v1.QueryParticipationEMAsRequest",
  is(o: any): o is QueryParticipationEMAsRequest {
    return o && o.$typeUrl === QueryParticipationEMAsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParticipationEMAsRequestAmino {
    return o && o.$typeUrl === QueryParticipationEMAsRequest.typeUrl;
  },
  encode(_: QueryParticipationEMAsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParticipationEMAsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParticipationEMAsRequest();
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
  fromJSON(_: any): QueryParticipationEMAsRequest {
    const obj = createBaseQueryParticipationEMAsRequest();
    return obj;
  },
  toJSON(_: QueryParticipationEMAsRequest): JsonSafe<QueryParticipationEMAsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParticipationEMAsRequest>): QueryParticipationEMAsRequest {
    const message = createBaseQueryParticipationEMAsRequest();
    return message;
  },
  fromAmino(_: QueryParticipationEMAsRequestAmino): QueryParticipationEMAsRequest {
    const message = createBaseQueryParticipationEMAsRequest();
    return message;
  },
  toAmino(_: QueryParticipationEMAsRequest): QueryParticipationEMAsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParticipationEMAsRequestAminoMsg): QueryParticipationEMAsRequest {
    return QueryParticipationEMAsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParticipationEMAsRequestProtoMsg): QueryParticipationEMAsRequest {
    return QueryParticipationEMAsRequest.decode(message.value);
  },
  toProto(message: QueryParticipationEMAsRequest): Uint8Array {
    return QueryParticipationEMAsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParticipationEMAsRequest): QueryParticipationEMAsRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryParticipationEMAsRequest",
      value: QueryParticipationEMAsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParticipationEMAsRequest.typeUrl, QueryParticipationEMAsRequest);
function createBaseQueryParticipationEMAsResponse(): QueryParticipationEMAsResponse {
  return {
    participationEma: "",
    constitutionAmendmentParticipationEma: "",
    lawParticipationEma: ""
  };
}
export const QueryParticipationEMAsResponse = {
  typeUrl: "/atomone.gov.v1.QueryParticipationEMAsResponse",
  is(o: any): o is QueryParticipationEMAsResponse {
    return o && (o.$typeUrl === QueryParticipationEMAsResponse.typeUrl || typeof o.participationEma === "string" && typeof o.constitutionAmendmentParticipationEma === "string" && typeof o.lawParticipationEma === "string");
  },
  isAmino(o: any): o is QueryParticipationEMAsResponseAmino {
    return o && (o.$typeUrl === QueryParticipationEMAsResponse.typeUrl || typeof o.participation_ema === "string" && typeof o.constitution_amendment_participation_ema === "string" && typeof o.law_participation_ema === "string");
  },
  encode(message: QueryParticipationEMAsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.participationEma !== "") {
      writer.uint32(10).string(message.participationEma);
    }
    if (message.constitutionAmendmentParticipationEma !== "") {
      writer.uint32(18).string(message.constitutionAmendmentParticipationEma);
    }
    if (message.lawParticipationEma !== "") {
      writer.uint32(26).string(message.lawParticipationEma);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParticipationEMAsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParticipationEMAsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.participationEma = reader.string();
          break;
        case 2:
          message.constitutionAmendmentParticipationEma = reader.string();
          break;
        case 3:
          message.lawParticipationEma = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryParticipationEMAsResponse {
    const obj = createBaseQueryParticipationEMAsResponse();
    if (isSet(object.participationEma)) obj.participationEma = String(object.participationEma);
    if (isSet(object.constitutionAmendmentParticipationEma)) obj.constitutionAmendmentParticipationEma = String(object.constitutionAmendmentParticipationEma);
    if (isSet(object.lawParticipationEma)) obj.lawParticipationEma = String(object.lawParticipationEma);
    return obj;
  },
  toJSON(message: QueryParticipationEMAsResponse): JsonSafe<QueryParticipationEMAsResponse> {
    const obj: any = {};
    message.participationEma !== undefined && (obj.participationEma = message.participationEma);
    message.constitutionAmendmentParticipationEma !== undefined && (obj.constitutionAmendmentParticipationEma = message.constitutionAmendmentParticipationEma);
    message.lawParticipationEma !== undefined && (obj.lawParticipationEma = message.lawParticipationEma);
    return obj;
  },
  fromPartial(object: Partial<QueryParticipationEMAsResponse>): QueryParticipationEMAsResponse {
    const message = createBaseQueryParticipationEMAsResponse();
    message.participationEma = object.participationEma ?? "";
    message.constitutionAmendmentParticipationEma = object.constitutionAmendmentParticipationEma ?? "";
    message.lawParticipationEma = object.lawParticipationEma ?? "";
    return message;
  },
  fromAmino(object: QueryParticipationEMAsResponseAmino): QueryParticipationEMAsResponse {
    const message = createBaseQueryParticipationEMAsResponse();
    if (object.participation_ema !== undefined && object.participation_ema !== null) {
      message.participationEma = object.participation_ema;
    }
    if (object.constitution_amendment_participation_ema !== undefined && object.constitution_amendment_participation_ema !== null) {
      message.constitutionAmendmentParticipationEma = object.constitution_amendment_participation_ema;
    }
    if (object.law_participation_ema !== undefined && object.law_participation_ema !== null) {
      message.lawParticipationEma = object.law_participation_ema;
    }
    return message;
  },
  toAmino(message: QueryParticipationEMAsResponse): QueryParticipationEMAsResponseAmino {
    const obj: any = {};
    obj.participation_ema = message.participationEma === "" ? undefined : message.participationEma;
    obj.constitution_amendment_participation_ema = message.constitutionAmendmentParticipationEma === "" ? undefined : message.constitutionAmendmentParticipationEma;
    obj.law_participation_ema = message.lawParticipationEma === "" ? undefined : message.lawParticipationEma;
    return obj;
  },
  fromAminoMsg(object: QueryParticipationEMAsResponseAminoMsg): QueryParticipationEMAsResponse {
    return QueryParticipationEMAsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParticipationEMAsResponseProtoMsg): QueryParticipationEMAsResponse {
    return QueryParticipationEMAsResponse.decode(message.value);
  },
  toProto(message: QueryParticipationEMAsResponse): Uint8Array {
    return QueryParticipationEMAsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParticipationEMAsResponse): QueryParticipationEMAsResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryParticipationEMAsResponse",
      value: QueryParticipationEMAsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryParticipationEMAsResponse.typeUrl, QueryParticipationEMAsResponse);
function createBaseQueryGovernorRequest(): QueryGovernorRequest {
  return {
    governorAddress: ""
  };
}
export const QueryGovernorRequest = {
  typeUrl: "/atomone.gov.v1.QueryGovernorRequest",
  is(o: any): o is QueryGovernorRequest {
    return o && (o.$typeUrl === QueryGovernorRequest.typeUrl || typeof o.governorAddress === "string");
  },
  isAmino(o: any): o is QueryGovernorRequestAmino {
    return o && (o.$typeUrl === QueryGovernorRequest.typeUrl || typeof o.governor_address === "string");
  },
  encode(message: QueryGovernorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.governorAddress !== "") {
      writer.uint32(10).string(message.governorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovernorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovernorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.governorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGovernorRequest {
    const obj = createBaseQueryGovernorRequest();
    if (isSet(object.governorAddress)) obj.governorAddress = String(object.governorAddress);
    return obj;
  },
  toJSON(message: QueryGovernorRequest): JsonSafe<QueryGovernorRequest> {
    const obj: any = {};
    message.governorAddress !== undefined && (obj.governorAddress = message.governorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryGovernorRequest>): QueryGovernorRequest {
    const message = createBaseQueryGovernorRequest();
    message.governorAddress = object.governorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGovernorRequestAmino): QueryGovernorRequest {
    const message = createBaseQueryGovernorRequest();
    if (object.governor_address !== undefined && object.governor_address !== null) {
      message.governorAddress = object.governor_address;
    }
    return message;
  },
  toAmino(message: QueryGovernorRequest): QueryGovernorRequestAmino {
    const obj: any = {};
    obj.governor_address = message.governorAddress === "" ? undefined : message.governorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGovernorRequestAminoMsg): QueryGovernorRequest {
    return QueryGovernorRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernorRequestProtoMsg): QueryGovernorRequest {
    return QueryGovernorRequest.decode(message.value);
  },
  toProto(message: QueryGovernorRequest): Uint8Array {
    return QueryGovernorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernorRequest): QueryGovernorRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryGovernorRequest",
      value: QueryGovernorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGovernorRequest.typeUrl, QueryGovernorRequest);
function createBaseQueryGovernorResponse(): QueryGovernorResponse {
  return {
    governor: undefined
  };
}
export const QueryGovernorResponse = {
  typeUrl: "/atomone.gov.v1.QueryGovernorResponse",
  is(o: any): o is QueryGovernorResponse {
    return o && o.$typeUrl === QueryGovernorResponse.typeUrl;
  },
  isAmino(o: any): o is QueryGovernorResponseAmino {
    return o && o.$typeUrl === QueryGovernorResponse.typeUrl;
  },
  encode(message: QueryGovernorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.governor !== undefined) {
      Governor.encode(message.governor, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovernorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovernorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.governor = Governor.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGovernorResponse {
    const obj = createBaseQueryGovernorResponse();
    if (isSet(object.governor)) obj.governor = Governor.fromJSON(object.governor);
    return obj;
  },
  toJSON(message: QueryGovernorResponse): JsonSafe<QueryGovernorResponse> {
    const obj: any = {};
    message.governor !== undefined && (obj.governor = message.governor ? Governor.toJSON(message.governor) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGovernorResponse>): QueryGovernorResponse {
    const message = createBaseQueryGovernorResponse();
    if (object.governor !== undefined && object.governor !== null) {
      message.governor = Governor.fromPartial(object.governor);
    }
    return message;
  },
  fromAmino(object: QueryGovernorResponseAmino): QueryGovernorResponse {
    const message = createBaseQueryGovernorResponse();
    if (object.governor !== undefined && object.governor !== null) {
      message.governor = Governor.fromAmino(object.governor);
    }
    return message;
  },
  toAmino(message: QueryGovernorResponse): QueryGovernorResponseAmino {
    const obj: any = {};
    obj.governor = message.governor ? Governor.toAmino(message.governor) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGovernorResponseAminoMsg): QueryGovernorResponse {
    return QueryGovernorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernorResponseProtoMsg): QueryGovernorResponse {
    return QueryGovernorResponse.decode(message.value);
  },
  toProto(message: QueryGovernorResponse): Uint8Array {
    return QueryGovernorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernorResponse): QueryGovernorResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryGovernorResponse",
      value: QueryGovernorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGovernorResponse.typeUrl, QueryGovernorResponse);
function createBaseQueryGovernorsRequest(): QueryGovernorsRequest {
  return {
    pagination: undefined
  };
}
export const QueryGovernorsRequest = {
  typeUrl: "/atomone.gov.v1.QueryGovernorsRequest",
  is(o: any): o is QueryGovernorsRequest {
    return o && o.$typeUrl === QueryGovernorsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryGovernorsRequestAmino {
    return o && o.$typeUrl === QueryGovernorsRequest.typeUrl;
  },
  encode(message: QueryGovernorsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovernorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovernorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGovernorsRequest {
    const obj = createBaseQueryGovernorsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGovernorsRequest): JsonSafe<QueryGovernorsRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGovernorsRequest>): QueryGovernorsRequest {
    const message = createBaseQueryGovernorsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGovernorsRequestAmino): QueryGovernorsRequest {
    const message = createBaseQueryGovernorsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGovernorsRequest): QueryGovernorsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGovernorsRequestAminoMsg): QueryGovernorsRequest {
    return QueryGovernorsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernorsRequestProtoMsg): QueryGovernorsRequest {
    return QueryGovernorsRequest.decode(message.value);
  },
  toProto(message: QueryGovernorsRequest): Uint8Array {
    return QueryGovernorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernorsRequest): QueryGovernorsRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryGovernorsRequest",
      value: QueryGovernorsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGovernorsRequest.typeUrl, QueryGovernorsRequest);
function createBaseQueryGovernorsResponse(): QueryGovernorsResponse {
  return {
    governors: [],
    pagination: undefined
  };
}
export const QueryGovernorsResponse = {
  typeUrl: "/atomone.gov.v1.QueryGovernorsResponse",
  is(o: any): o is QueryGovernorsResponse {
    return o && (o.$typeUrl === QueryGovernorsResponse.typeUrl || Array.isArray(o.governors) && (!o.governors.length || Governor.is(o.governors[0])));
  },
  isAmino(o: any): o is QueryGovernorsResponseAmino {
    return o && (o.$typeUrl === QueryGovernorsResponse.typeUrl || Array.isArray(o.governors) && (!o.governors.length || Governor.isAmino(o.governors[0])));
  },
  encode(message: QueryGovernorsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.governors) {
      Governor.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovernorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovernorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.governors.push(Governor.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGovernorsResponse {
    const obj = createBaseQueryGovernorsResponse();
    if (Array.isArray(object?.governors)) obj.governors = object.governors.map((e: any) => Governor.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGovernorsResponse): JsonSafe<QueryGovernorsResponse> {
    const obj: any = {};
    if (message.governors) {
      obj.governors = message.governors.map(e => e ? Governor.toJSON(e) : undefined);
    } else {
      obj.governors = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGovernorsResponse>): QueryGovernorsResponse {
    const message = createBaseQueryGovernorsResponse();
    message.governors = object.governors?.map(e => Governor.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGovernorsResponseAmino): QueryGovernorsResponse {
    const message = createBaseQueryGovernorsResponse();
    message.governors = object.governors?.map(e => Governor.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGovernorsResponse): QueryGovernorsResponseAmino {
    const obj: any = {};
    if (message.governors) {
      obj.governors = message.governors.map(e => e ? Governor.toAmino(e) : undefined);
    } else {
      obj.governors = message.governors;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGovernorsResponseAminoMsg): QueryGovernorsResponse {
    return QueryGovernorsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernorsResponseProtoMsg): QueryGovernorsResponse {
    return QueryGovernorsResponse.decode(message.value);
  },
  toProto(message: QueryGovernorsResponse): Uint8Array {
    return QueryGovernorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernorsResponse): QueryGovernorsResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryGovernorsResponse",
      value: QueryGovernorsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGovernorsResponse.typeUrl, QueryGovernorsResponse);
function createBaseQueryGovernanceDelegationsRequest(): QueryGovernanceDelegationsRequest {
  return {
    governorAddress: "",
    pagination: undefined
  };
}
export const QueryGovernanceDelegationsRequest = {
  typeUrl: "/atomone.gov.v1.QueryGovernanceDelegationsRequest",
  is(o: any): o is QueryGovernanceDelegationsRequest {
    return o && (o.$typeUrl === QueryGovernanceDelegationsRequest.typeUrl || typeof o.governorAddress === "string");
  },
  isAmino(o: any): o is QueryGovernanceDelegationsRequestAmino {
    return o && (o.$typeUrl === QueryGovernanceDelegationsRequest.typeUrl || typeof o.governor_address === "string");
  },
  encode(message: QueryGovernanceDelegationsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.governorAddress !== "") {
      writer.uint32(10).string(message.governorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovernanceDelegationsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovernanceDelegationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.governorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGovernanceDelegationsRequest {
    const obj = createBaseQueryGovernanceDelegationsRequest();
    if (isSet(object.governorAddress)) obj.governorAddress = String(object.governorAddress);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGovernanceDelegationsRequest): JsonSafe<QueryGovernanceDelegationsRequest> {
    const obj: any = {};
    message.governorAddress !== undefined && (obj.governorAddress = message.governorAddress);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGovernanceDelegationsRequest>): QueryGovernanceDelegationsRequest {
    const message = createBaseQueryGovernanceDelegationsRequest();
    message.governorAddress = object.governorAddress ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGovernanceDelegationsRequestAmino): QueryGovernanceDelegationsRequest {
    const message = createBaseQueryGovernanceDelegationsRequest();
    if (object.governor_address !== undefined && object.governor_address !== null) {
      message.governorAddress = object.governor_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGovernanceDelegationsRequest): QueryGovernanceDelegationsRequestAmino {
    const obj: any = {};
    obj.governor_address = message.governorAddress === "" ? undefined : message.governorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGovernanceDelegationsRequestAminoMsg): QueryGovernanceDelegationsRequest {
    return QueryGovernanceDelegationsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernanceDelegationsRequestProtoMsg): QueryGovernanceDelegationsRequest {
    return QueryGovernanceDelegationsRequest.decode(message.value);
  },
  toProto(message: QueryGovernanceDelegationsRequest): Uint8Array {
    return QueryGovernanceDelegationsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernanceDelegationsRequest): QueryGovernanceDelegationsRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryGovernanceDelegationsRequest",
      value: QueryGovernanceDelegationsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGovernanceDelegationsRequest.typeUrl, QueryGovernanceDelegationsRequest);
function createBaseQueryGovernanceDelegationsResponse(): QueryGovernanceDelegationsResponse {
  return {
    delegations: [],
    pagination: undefined
  };
}
export const QueryGovernanceDelegationsResponse = {
  typeUrl: "/atomone.gov.v1.QueryGovernanceDelegationsResponse",
  is(o: any): o is QueryGovernanceDelegationsResponse {
    return o && (o.$typeUrl === QueryGovernanceDelegationsResponse.typeUrl || Array.isArray(o.delegations) && (!o.delegations.length || GovernanceDelegation.is(o.delegations[0])));
  },
  isAmino(o: any): o is QueryGovernanceDelegationsResponseAmino {
    return o && (o.$typeUrl === QueryGovernanceDelegationsResponse.typeUrl || Array.isArray(o.delegations) && (!o.delegations.length || GovernanceDelegation.isAmino(o.delegations[0])));
  },
  encode(message: QueryGovernanceDelegationsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.delegations) {
      GovernanceDelegation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovernanceDelegationsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovernanceDelegationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(GovernanceDelegation.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGovernanceDelegationsResponse {
    const obj = createBaseQueryGovernanceDelegationsResponse();
    if (Array.isArray(object?.delegations)) obj.delegations = object.delegations.map((e: any) => GovernanceDelegation.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGovernanceDelegationsResponse): JsonSafe<QueryGovernanceDelegationsResponse> {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? GovernanceDelegation.toJSON(e) : undefined);
    } else {
      obj.delegations = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGovernanceDelegationsResponse>): QueryGovernanceDelegationsResponse {
    const message = createBaseQueryGovernanceDelegationsResponse();
    message.delegations = object.delegations?.map(e => GovernanceDelegation.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGovernanceDelegationsResponseAmino): QueryGovernanceDelegationsResponse {
    const message = createBaseQueryGovernanceDelegationsResponse();
    message.delegations = object.delegations?.map(e => GovernanceDelegation.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGovernanceDelegationsResponse): QueryGovernanceDelegationsResponseAmino {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map(e => e ? GovernanceDelegation.toAmino(e) : undefined);
    } else {
      obj.delegations = message.delegations;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGovernanceDelegationsResponseAminoMsg): QueryGovernanceDelegationsResponse {
    return QueryGovernanceDelegationsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernanceDelegationsResponseProtoMsg): QueryGovernanceDelegationsResponse {
    return QueryGovernanceDelegationsResponse.decode(message.value);
  },
  toProto(message: QueryGovernanceDelegationsResponse): Uint8Array {
    return QueryGovernanceDelegationsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernanceDelegationsResponse): QueryGovernanceDelegationsResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryGovernanceDelegationsResponse",
      value: QueryGovernanceDelegationsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGovernanceDelegationsResponse.typeUrl, QueryGovernanceDelegationsResponse);
function createBaseQueryGovernanceDelegationRequest(): QueryGovernanceDelegationRequest {
  return {
    delegatorAddress: ""
  };
}
export const QueryGovernanceDelegationRequest = {
  typeUrl: "/atomone.gov.v1.QueryGovernanceDelegationRequest",
  is(o: any): o is QueryGovernanceDelegationRequest {
    return o && (o.$typeUrl === QueryGovernanceDelegationRequest.typeUrl || typeof o.delegatorAddress === "string");
  },
  isAmino(o: any): o is QueryGovernanceDelegationRequestAmino {
    return o && (o.$typeUrl === QueryGovernanceDelegationRequest.typeUrl || typeof o.delegator_address === "string");
  },
  encode(message: QueryGovernanceDelegationRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovernanceDelegationRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovernanceDelegationRequest();
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
  fromJSON(object: any): QueryGovernanceDelegationRequest {
    const obj = createBaseQueryGovernanceDelegationRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryGovernanceDelegationRequest): JsonSafe<QueryGovernanceDelegationRequest> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryGovernanceDelegationRequest>): QueryGovernanceDelegationRequest {
    const message = createBaseQueryGovernanceDelegationRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGovernanceDelegationRequestAmino): QueryGovernanceDelegationRequest {
    const message = createBaseQueryGovernanceDelegationRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryGovernanceDelegationRequest): QueryGovernanceDelegationRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGovernanceDelegationRequestAminoMsg): QueryGovernanceDelegationRequest {
    return QueryGovernanceDelegationRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernanceDelegationRequestProtoMsg): QueryGovernanceDelegationRequest {
    return QueryGovernanceDelegationRequest.decode(message.value);
  },
  toProto(message: QueryGovernanceDelegationRequest): Uint8Array {
    return QueryGovernanceDelegationRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernanceDelegationRequest): QueryGovernanceDelegationRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryGovernanceDelegationRequest",
      value: QueryGovernanceDelegationRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGovernanceDelegationRequest.typeUrl, QueryGovernanceDelegationRequest);
function createBaseQueryGovernanceDelegationResponse(): QueryGovernanceDelegationResponse {
  return {
    governorAddress: ""
  };
}
export const QueryGovernanceDelegationResponse = {
  typeUrl: "/atomone.gov.v1.QueryGovernanceDelegationResponse",
  is(o: any): o is QueryGovernanceDelegationResponse {
    return o && (o.$typeUrl === QueryGovernanceDelegationResponse.typeUrl || typeof o.governorAddress === "string");
  },
  isAmino(o: any): o is QueryGovernanceDelegationResponseAmino {
    return o && (o.$typeUrl === QueryGovernanceDelegationResponse.typeUrl || typeof o.governor_address === "string");
  },
  encode(message: QueryGovernanceDelegationResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.governorAddress !== "") {
      writer.uint32(10).string(message.governorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovernanceDelegationResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovernanceDelegationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.governorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGovernanceDelegationResponse {
    const obj = createBaseQueryGovernanceDelegationResponse();
    if (isSet(object.governorAddress)) obj.governorAddress = String(object.governorAddress);
    return obj;
  },
  toJSON(message: QueryGovernanceDelegationResponse): JsonSafe<QueryGovernanceDelegationResponse> {
    const obj: any = {};
    message.governorAddress !== undefined && (obj.governorAddress = message.governorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryGovernanceDelegationResponse>): QueryGovernanceDelegationResponse {
    const message = createBaseQueryGovernanceDelegationResponse();
    message.governorAddress = object.governorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryGovernanceDelegationResponseAmino): QueryGovernanceDelegationResponse {
    const message = createBaseQueryGovernanceDelegationResponse();
    if (object.governor_address !== undefined && object.governor_address !== null) {
      message.governorAddress = object.governor_address;
    }
    return message;
  },
  toAmino(message: QueryGovernanceDelegationResponse): QueryGovernanceDelegationResponseAmino {
    const obj: any = {};
    obj.governor_address = message.governorAddress === "" ? undefined : message.governorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryGovernanceDelegationResponseAminoMsg): QueryGovernanceDelegationResponse {
    return QueryGovernanceDelegationResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernanceDelegationResponseProtoMsg): QueryGovernanceDelegationResponse {
    return QueryGovernanceDelegationResponse.decode(message.value);
  },
  toProto(message: QueryGovernanceDelegationResponse): Uint8Array {
    return QueryGovernanceDelegationResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernanceDelegationResponse): QueryGovernanceDelegationResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryGovernanceDelegationResponse",
      value: QueryGovernanceDelegationResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGovernanceDelegationResponse.typeUrl, QueryGovernanceDelegationResponse);
function createBaseQueryGovernorValSharesRequest(): QueryGovernorValSharesRequest {
  return {
    governorAddress: "",
    pagination: undefined
  };
}
export const QueryGovernorValSharesRequest = {
  typeUrl: "/atomone.gov.v1.QueryGovernorValSharesRequest",
  is(o: any): o is QueryGovernorValSharesRequest {
    return o && (o.$typeUrl === QueryGovernorValSharesRequest.typeUrl || typeof o.governorAddress === "string");
  },
  isAmino(o: any): o is QueryGovernorValSharesRequestAmino {
    return o && (o.$typeUrl === QueryGovernorValSharesRequest.typeUrl || typeof o.governor_address === "string");
  },
  encode(message: QueryGovernorValSharesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.governorAddress !== "") {
      writer.uint32(10).string(message.governorAddress);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovernorValSharesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovernorValSharesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.governorAddress = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGovernorValSharesRequest {
    const obj = createBaseQueryGovernorValSharesRequest();
    if (isSet(object.governorAddress)) obj.governorAddress = String(object.governorAddress);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGovernorValSharesRequest): JsonSafe<QueryGovernorValSharesRequest> {
    const obj: any = {};
    message.governorAddress !== undefined && (obj.governorAddress = message.governorAddress);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGovernorValSharesRequest>): QueryGovernorValSharesRequest {
    const message = createBaseQueryGovernorValSharesRequest();
    message.governorAddress = object.governorAddress ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGovernorValSharesRequestAmino): QueryGovernorValSharesRequest {
    const message = createBaseQueryGovernorValSharesRequest();
    if (object.governor_address !== undefined && object.governor_address !== null) {
      message.governorAddress = object.governor_address;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGovernorValSharesRequest): QueryGovernorValSharesRequestAmino {
    const obj: any = {};
    obj.governor_address = message.governorAddress === "" ? undefined : message.governorAddress;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGovernorValSharesRequestAminoMsg): QueryGovernorValSharesRequest {
    return QueryGovernorValSharesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernorValSharesRequestProtoMsg): QueryGovernorValSharesRequest {
    return QueryGovernorValSharesRequest.decode(message.value);
  },
  toProto(message: QueryGovernorValSharesRequest): Uint8Array {
    return QueryGovernorValSharesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernorValSharesRequest): QueryGovernorValSharesRequestProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryGovernorValSharesRequest",
      value: QueryGovernorValSharesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGovernorValSharesRequest.typeUrl, QueryGovernorValSharesRequest);
function createBaseQueryGovernorValSharesResponse(): QueryGovernorValSharesResponse {
  return {
    valShares: [],
    pagination: undefined
  };
}
export const QueryGovernorValSharesResponse = {
  typeUrl: "/atomone.gov.v1.QueryGovernorValSharesResponse",
  is(o: any): o is QueryGovernorValSharesResponse {
    return o && (o.$typeUrl === QueryGovernorValSharesResponse.typeUrl || Array.isArray(o.valShares) && (!o.valShares.length || GovernorValShares.is(o.valShares[0])));
  },
  isAmino(o: any): o is QueryGovernorValSharesResponseAmino {
    return o && (o.$typeUrl === QueryGovernorValSharesResponse.typeUrl || Array.isArray(o.val_shares) && (!o.val_shares.length || GovernorValShares.isAmino(o.val_shares[0])));
  },
  encode(message: QueryGovernorValSharesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.valShares) {
      GovernorValShares.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryGovernorValSharesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGovernorValSharesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valShares.push(GovernorValShares.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryGovernorValSharesResponse {
    const obj = createBaseQueryGovernorValSharesResponse();
    if (Array.isArray(object?.valShares)) obj.valShares = object.valShares.map((e: any) => GovernorValShares.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryGovernorValSharesResponse): JsonSafe<QueryGovernorValSharesResponse> {
    const obj: any = {};
    if (message.valShares) {
      obj.valShares = message.valShares.map(e => e ? GovernorValShares.toJSON(e) : undefined);
    } else {
      obj.valShares = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryGovernorValSharesResponse>): QueryGovernorValSharesResponse {
    const message = createBaseQueryGovernorValSharesResponse();
    message.valShares = object.valShares?.map(e => GovernorValShares.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryGovernorValSharesResponseAmino): QueryGovernorValSharesResponse {
    const message = createBaseQueryGovernorValSharesResponse();
    message.valShares = object.val_shares?.map(e => GovernorValShares.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryGovernorValSharesResponse): QueryGovernorValSharesResponseAmino {
    const obj: any = {};
    if (message.valShares) {
      obj.val_shares = message.valShares.map(e => e ? GovernorValShares.toAmino(e) : undefined);
    } else {
      obj.val_shares = message.valShares;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryGovernorValSharesResponseAminoMsg): QueryGovernorValSharesResponse {
    return QueryGovernorValSharesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryGovernorValSharesResponseProtoMsg): QueryGovernorValSharesResponse {
    return QueryGovernorValSharesResponse.decode(message.value);
  },
  toProto(message: QueryGovernorValSharesResponse): Uint8Array {
    return QueryGovernorValSharesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryGovernorValSharesResponse): QueryGovernorValSharesResponseProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QueryGovernorValSharesResponse",
      value: QueryGovernorValSharesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryGovernorValSharesResponse.typeUrl, QueryGovernorValSharesResponse);
/** Query defines the gRPC querier service for gov module */
export interface Query {
  /** Constitution queries the chain's constitution. */
  Constitution(request?: QueryConstitutionRequest): Promise<QueryConstitutionResponse>;
  /** Proposal queries proposal details based on ProposalID. */
  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /** Proposals queries all proposals based on given status. */
  Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
  /** Vote queries voted information based on proposalID, voterAddr. */
  Vote(request: QueryVoteRequest): Promise<QueryVoteResponse>;
  /** Votes queries votes of a given proposal. */
  Votes(request: QueryVotesRequest): Promise<QueryVotesResponse>;
  /** Params queries all parameters of the gov module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Deposit queries single deposit information based proposalID, depositAddr. */
  Deposit(request: QueryDepositRequest): Promise<QueryDepositResponse>;
  /** Deposits queries all deposits of a single proposal. */
  Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse>;
  /** TallyResult queries the tally of a proposal vote. */
  TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse>;
  /**
   * MinDeposit queries the minimum deposit currently
   * required for a proposal to enter voting period.
   */
  MinDeposit(request?: QueryMinDepositRequest): Promise<QueryMinDepositResponse>;
  /**
   * MinInitialDeposit queries the minimum initial deposit
   * currently required for a proposal to be submitted.
   */
  MinInitialDeposit(request?: QueryMinInitialDepositRequest): Promise<QueryMinInitialDepositResponse>;
  /** Quorums queries the dynamically set quorums. */
  Quorums(request?: QueryQuorumsRequest): Promise<QueryQuorumsResponse>;
  /** ParticipationEMAs queries the state of the proposal participation exponential moving averages. */
  ParticipationEMAs(request?: QueryParticipationEMAsRequest): Promise<QueryParticipationEMAsResponse>;
  /** Governor queries governor information based on governor address. */
  Governor(request: QueryGovernorRequest): Promise<QueryGovernorResponse>;
  /** Governors queries all governors. */
  Governors(request?: QueryGovernorsRequest): Promise<QueryGovernorsResponse>;
  /** GovernanceDelegations queries all delegations of a governor. */
  GovernanceDelegations(request: QueryGovernanceDelegationsRequest): Promise<QueryGovernanceDelegationsResponse>;
  /** GovernanceDelegation queries a delegation */
  GovernanceDelegation(request: QueryGovernanceDelegationRequest): Promise<QueryGovernanceDelegationResponse>;
  /** GovernorValShares queries all governor virtual validator shares resulting from all governance delegations. */
  GovernorValShares(request: QueryGovernorValSharesRequest): Promise<QueryGovernorValSharesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.Constitution = this.Constitution.bind(this);
    this.Proposal = this.Proposal.bind(this);
    this.Proposals = this.Proposals.bind(this);
    this.Vote = this.Vote.bind(this);
    this.Votes = this.Votes.bind(this);
    this.Params = this.Params.bind(this);
    this.Deposit = this.Deposit.bind(this);
    this.Deposits = this.Deposits.bind(this);
    this.TallyResult = this.TallyResult.bind(this);
    this.MinDeposit = this.MinDeposit.bind(this);
    this.MinInitialDeposit = this.MinInitialDeposit.bind(this);
    this.Quorums = this.Quorums.bind(this);
    this.ParticipationEMAs = this.ParticipationEMAs.bind(this);
    this.Governor = this.Governor.bind(this);
    this.Governors = this.Governors.bind(this);
    this.GovernanceDelegations = this.GovernanceDelegations.bind(this);
    this.GovernanceDelegation = this.GovernanceDelegation.bind(this);
    this.GovernorValShares = this.GovernorValShares.bind(this);
  }
  Constitution(request: QueryConstitutionRequest = {}): Promise<QueryConstitutionResponse> {
    const data = QueryConstitutionRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "Constitution", data);
    return promise.then(data => QueryConstitutionResponse.decode(new BinaryReader(data)));
  }
  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "Proposal", data);
    return promise.then(data => QueryProposalResponse.decode(new BinaryReader(data)));
  }
  Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse> {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "Proposals", data);
    return promise.then(data => QueryProposalsResponse.decode(new BinaryReader(data)));
  }
  Vote(request: QueryVoteRequest): Promise<QueryVoteResponse> {
    const data = QueryVoteRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "Vote", data);
    return promise.then(data => QueryVoteResponse.decode(new BinaryReader(data)));
  }
  Votes(request: QueryVotesRequest): Promise<QueryVotesResponse> {
    const data = QueryVotesRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "Votes", data);
    return promise.then(data => QueryVotesResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "Params", data);
    return promise.then(data => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  Deposit(request: QueryDepositRequest): Promise<QueryDepositResponse> {
    const data = QueryDepositRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "Deposit", data);
    return promise.then(data => QueryDepositResponse.decode(new BinaryReader(data)));
  }
  Deposits(request: QueryDepositsRequest): Promise<QueryDepositsResponse> {
    const data = QueryDepositsRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "Deposits", data);
    return promise.then(data => QueryDepositsResponse.decode(new BinaryReader(data)));
  }
  TallyResult(request: QueryTallyResultRequest): Promise<QueryTallyResultResponse> {
    const data = QueryTallyResultRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "TallyResult", data);
    return promise.then(data => QueryTallyResultResponse.decode(new BinaryReader(data)));
  }
  MinDeposit(request: QueryMinDepositRequest = {}): Promise<QueryMinDepositResponse> {
    const data = QueryMinDepositRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "MinDeposit", data);
    return promise.then(data => QueryMinDepositResponse.decode(new BinaryReader(data)));
  }
  MinInitialDeposit(request: QueryMinInitialDepositRequest = {}): Promise<QueryMinInitialDepositResponse> {
    const data = QueryMinInitialDepositRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "MinInitialDeposit", data);
    return promise.then(data => QueryMinInitialDepositResponse.decode(new BinaryReader(data)));
  }
  Quorums(request: QueryQuorumsRequest = {}): Promise<QueryQuorumsResponse> {
    const data = QueryQuorumsRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "Quorums", data);
    return promise.then(data => QueryQuorumsResponse.decode(new BinaryReader(data)));
  }
  ParticipationEMAs(request: QueryParticipationEMAsRequest = {}): Promise<QueryParticipationEMAsResponse> {
    const data = QueryParticipationEMAsRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "ParticipationEMAs", data);
    return promise.then(data => QueryParticipationEMAsResponse.decode(new BinaryReader(data)));
  }
  Governor(request: QueryGovernorRequest): Promise<QueryGovernorResponse> {
    const data = QueryGovernorRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "Governor", data);
    return promise.then(data => QueryGovernorResponse.decode(new BinaryReader(data)));
  }
  Governors(request: QueryGovernorsRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryGovernorsResponse> {
    const data = QueryGovernorsRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "Governors", data);
    return promise.then(data => QueryGovernorsResponse.decode(new BinaryReader(data)));
  }
  GovernanceDelegations(request: QueryGovernanceDelegationsRequest): Promise<QueryGovernanceDelegationsResponse> {
    const data = QueryGovernanceDelegationsRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "GovernanceDelegations", data);
    return promise.then(data => QueryGovernanceDelegationsResponse.decode(new BinaryReader(data)));
  }
  GovernanceDelegation(request: QueryGovernanceDelegationRequest): Promise<QueryGovernanceDelegationResponse> {
    const data = QueryGovernanceDelegationRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "GovernanceDelegation", data);
    return promise.then(data => QueryGovernanceDelegationResponse.decode(new BinaryReader(data)));
  }
  GovernorValShares(request: QueryGovernorValSharesRequest): Promise<QueryGovernorValSharesResponse> {
    const data = QueryGovernorValSharesRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.gov.v1.Query", "GovernorValShares", data);
    return promise.then(data => QueryGovernorValSharesResponse.decode(new BinaryReader(data)));
  }
}