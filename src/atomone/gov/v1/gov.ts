/* eslint-disable */
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp } from "../../../google/protobuf/timestamp";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "atomone.gov.v1";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
export enum VoteOption {
  /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
  VOTE_OPTION_UNSPECIFIED = 0,
  /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
  VOTE_OPTION_YES = 1,
  /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
  VOTE_OPTION_ABSTAIN = 2,
  /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
  VOTE_OPTION_NO = 3,
  UNRECOGNIZED = -1,
}
export const VoteOptionAmino = VoteOption;
export function voteOptionFromJSON(object: any): VoteOption {
  switch (object) {
    case 0:
    case "VOTE_OPTION_UNSPECIFIED":
      return VoteOption.VOTE_OPTION_UNSPECIFIED;
    case 1:
    case "VOTE_OPTION_YES":
      return VoteOption.VOTE_OPTION_YES;
    case 2:
    case "VOTE_OPTION_ABSTAIN":
      return VoteOption.VOTE_OPTION_ABSTAIN;
    case 3:
    case "VOTE_OPTION_NO":
      return VoteOption.VOTE_OPTION_NO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteOption.UNRECOGNIZED;
  }
}
export function voteOptionToJSON(object: VoteOption): string {
  switch (object) {
    case VoteOption.VOTE_OPTION_UNSPECIFIED:
      return "VOTE_OPTION_UNSPECIFIED";
    case VoteOption.VOTE_OPTION_YES:
      return "VOTE_OPTION_YES";
    case VoteOption.VOTE_OPTION_ABSTAIN:
      return "VOTE_OPTION_ABSTAIN";
    case VoteOption.VOTE_OPTION_NO:
      return "VOTE_OPTION_NO";
    case VoteOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** ProposalStatus enumerates the valid statuses of a proposal. */
export enum ProposalStatus {
  /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default proposal status. */
  PROPOSAL_STATUS_UNSPECIFIED = 0,
  /**
   * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
   * period.
   */
  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1,
  /**
   * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
   * period.
   */
  PROPOSAL_STATUS_VOTING_PERIOD = 2,
  /**
   * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
   * passed.
   */
  PROPOSAL_STATUS_PASSED = 3,
  /**
   * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
   * been rejected.
   */
  PROPOSAL_STATUS_REJECTED = 4,
  /**
   * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
   * failed.
   */
  PROPOSAL_STATUS_FAILED = 5,
  /**
   * PROPOSAL_STATUS_VETOED - PROPOSAL_STATUS_VETOED defines a proposal status of a proposal that has
   * been vetoed.
   */
  PROPOSAL_STATUS_VETOED = 6,
  UNRECOGNIZED = -1,
}
export const ProposalStatusAmino = ProposalStatus;
export function proposalStatusFromJSON(object: any): ProposalStatus {
  switch (object) {
    case 0:
    case "PROPOSAL_STATUS_UNSPECIFIED":
      return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
    case 1:
    case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
    case 2:
    case "PROPOSAL_STATUS_VOTING_PERIOD":
      return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
    case 3:
    case "PROPOSAL_STATUS_PASSED":
      return ProposalStatus.PROPOSAL_STATUS_PASSED;
    case 4:
    case "PROPOSAL_STATUS_REJECTED":
      return ProposalStatus.PROPOSAL_STATUS_REJECTED;
    case 5:
    case "PROPOSAL_STATUS_FAILED":
      return ProposalStatus.PROPOSAL_STATUS_FAILED;
    case 6:
    case "PROPOSAL_STATUS_VETOED":
      return ProposalStatus.PROPOSAL_STATUS_VETOED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ProposalStatus.UNRECOGNIZED;
  }
}
export function proposalStatusToJSON(object: ProposalStatus): string {
  switch (object) {
    case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
      return "PROPOSAL_STATUS_UNSPECIFIED";
    case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
      return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
      return "PROPOSAL_STATUS_VOTING_PERIOD";
    case ProposalStatus.PROPOSAL_STATUS_PASSED:
      return "PROPOSAL_STATUS_PASSED";
    case ProposalStatus.PROPOSAL_STATUS_REJECTED:
      return "PROPOSAL_STATUS_REJECTED";
    case ProposalStatus.PROPOSAL_STATUS_FAILED:
      return "PROPOSAL_STATUS_FAILED";
    case ProposalStatus.PROPOSAL_STATUS_VETOED:
      return "PROPOSAL_STATUS_VETOED";
    case ProposalStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** GovernorStatus is the status of a governor. */
export enum GovernorStatus {
  /** GOVERNOR_STATUS_UNSPECIFIED - UNSPECIFIED defines an invalid governor status. */
  GOVERNOR_STATUS_UNSPECIFIED = 0,
  /** GOVERNOR_STATUS_ACTIVE - ACTIVE defines a governor that is active. */
  GOVERNOR_STATUS_ACTIVE = 1,
  /** GOVERNOR_STATUS_INACTIVE - INACTIVE defines a governor that is inactive. */
  GOVERNOR_STATUS_INACTIVE = 2,
  UNRECOGNIZED = -1,
}
export const GovernorStatusAmino = GovernorStatus;
export function governorStatusFromJSON(object: any): GovernorStatus {
  switch (object) {
    case 0:
    case "GOVERNOR_STATUS_UNSPECIFIED":
      return GovernorStatus.GOVERNOR_STATUS_UNSPECIFIED;
    case 1:
    case "GOVERNOR_STATUS_ACTIVE":
      return GovernorStatus.GOVERNOR_STATUS_ACTIVE;
    case 2:
    case "GOVERNOR_STATUS_INACTIVE":
      return GovernorStatus.GOVERNOR_STATUS_INACTIVE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return GovernorStatus.UNRECOGNIZED;
  }
}
export function governorStatusToJSON(object: GovernorStatus): string {
  switch (object) {
    case GovernorStatus.GOVERNOR_STATUS_UNSPECIFIED:
      return "GOVERNOR_STATUS_UNSPECIFIED";
    case GovernorStatus.GOVERNOR_STATUS_ACTIVE:
      return "GOVERNOR_STATUS_ACTIVE";
    case GovernorStatus.GOVERNOR_STATUS_INACTIVE:
      return "GOVERNOR_STATUS_INACTIVE";
    case GovernorStatus.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** WeightedVoteOption defines a unit of vote for vote split. */
export interface WeightedVoteOption {
  /**
   * option defines the valid vote options, it must not contain duplicate vote
   * options.
   */
  option: VoteOption;
  /** weight is the vote weight associated with the vote option. */
  weight: string;
}
export interface WeightedVoteOptionProtoMsg {
  typeUrl: "/atomone.gov.v1.WeightedVoteOption";
  value: Uint8Array;
}
/**
 * WeightedVoteOption defines a unit of vote for vote split.
 * @name WeightedVoteOptionAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.WeightedVoteOption
 */
export interface WeightedVoteOptionAmino {
  /**
   * option defines the valid vote options, it must not contain duplicate vote
   * options.
   */
  option?: VoteOption;
  /**
   * weight is the vote weight associated with the vote option.
   */
  weight?: string;
}
export interface WeightedVoteOptionAminoMsg {
  type: "/atomone.gov.v1.WeightedVoteOption";
  value: WeightedVoteOptionAmino;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 */
export interface Deposit {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** depositor defines the deposit addresses from the proposals. */
  depositor: string;
  /** amount to be deposited by depositor. */
  amount: Coin[];
}
export interface DepositProtoMsg {
  typeUrl: "/atomone.gov.v1.Deposit";
  value: Uint8Array;
}
/**
 * Deposit defines an amount deposited by an account address to an active
 * proposal.
 * @name DepositAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.Deposit
 */
export interface DepositAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id?: string;
  /**
   * depositor defines the deposit addresses from the proposals.
   */
  depositor?: string;
  /**
   * amount to be deposited by depositor.
   */
  amount: CoinAmino[];
}
export interface DepositAminoMsg {
  type: "/atomone.gov.v1.Deposit";
  value: DepositAmino;
}
/**
 * LastMinDeposit is a record of the last time the minimum deposit
 * was updated in the store, both its value and a timestamp
 */
export interface LastMinDeposit {
  /** value is the value of the minimum deposit */
  value: Coin[];
  /** time is the time the minimum deposit was last updated */
  time?: Timestamp | undefined;
}
export interface LastMinDepositProtoMsg {
  typeUrl: "/atomone.gov.v1.LastMinDeposit";
  value: Uint8Array;
}
/**
 * LastMinDeposit is a record of the last time the minimum deposit
 * was updated in the store, both its value and a timestamp
 * @name LastMinDepositAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.LastMinDeposit
 */
export interface LastMinDepositAmino {
  /**
   * value is the value of the minimum deposit
   */
  value: CoinAmino[];
  /**
   * time is the time the minimum deposit was last updated
   */
  time?: string | undefined;
}
export interface LastMinDepositAminoMsg {
  type: "/atomone.gov.v1.LastMinDeposit";
  value: LastMinDepositAmino;
}
/** Proposal defines the core field members of a governance proposal. */
export interface Proposal {
  /** id defines the unique id of the proposal. */
  id: bigint;
  /** messages are the arbitrary messages to be executed if the proposal passes. */
  messages: Any[];
  /** status defines the proposal status. */
  status: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  finalTallyResult?: TallyResult | undefined;
  /** submit_time is the time of proposal submission. */
  submitTime?: Timestamp | undefined;
  /** deposit_end_time is the end time for deposition. */
  depositEndTime?: Timestamp | undefined;
  /** total_deposit is the total deposit on the proposal. */
  totalDeposit: Coin[];
  /** voting_start_time is the starting time to vote on a proposal. */
  votingStartTime?: Timestamp | undefined;
  /** voting_end_time is the end time of voting on a proposal. */
  votingEndTime?: Timestamp | undefined;
  /** metadata is any arbitrary metadata attached to the proposal. */
  metadata: string;
  /**
   * title is the title of the proposal
   *
   * Since: cosmos-sdk 0.47
   */
  title: string;
  /**
   * summary is a short summary of the proposal
   *
   * Since: cosmos-sdk 0.47
   */
  summary: string;
  /**
   * Proposer is the address of the proposal sumbitter
   *
   * Since: cosmos-sdk 0.47
   */
  proposer: string;
  /**
   * endorsed is a boolean indicating whether the proposal has been endorsed
   * by the Steering DAO.
   */
  endorsed: boolean;
  /**
   * annotation is an optional field that contains annotations
   * added by the Steering DAO.
   */
  annotation: string;
  /**
   * times_voting_period_extended is the number of times the voting period
   * has been extended from one of the core DAOs.
   */
  timesVotingPeriodExtended: number;
}
export interface ProposalProtoMsg {
  typeUrl: "/atomone.gov.v1.Proposal";
  value: Uint8Array;
}
/**
 * Proposal defines the core field members of a governance proposal.
 * @name ProposalAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.Proposal
 */
export interface ProposalAmino {
  /**
   * id defines the unique id of the proposal.
   */
  id?: string;
  /**
   * messages are the arbitrary messages to be executed if the proposal passes.
   */
  messages?: AnyAmino[];
  /**
   * status defines the proposal status.
   */
  status?: ProposalStatus;
  /**
   * final_tally_result is the final tally result of the proposal. When
   * querying a proposal via gRPC, this field is not populated until the
   * proposal's voting period has ended.
   */
  final_tally_result?: TallyResultAmino | undefined;
  /**
   * submit_time is the time of proposal submission.
   */
  submit_time?: string | undefined;
  /**
   * deposit_end_time is the end time for deposition.
   */
  deposit_end_time?: string | undefined;
  /**
   * total_deposit is the total deposit on the proposal.
   */
  total_deposit: CoinAmino[];
  /**
   * voting_start_time is the starting time to vote on a proposal.
   */
  voting_start_time?: string | undefined;
  /**
   * voting_end_time is the end time of voting on a proposal.
   */
  voting_end_time?: string | undefined;
  /**
   * metadata is any arbitrary metadata attached to the proposal.
   */
  metadata?: string;
  /**
   * title is the title of the proposal
   *
   * Since: cosmos-sdk 0.47
   */
  title?: string;
  /**
   * summary is a short summary of the proposal
   *
   * Since: cosmos-sdk 0.47
   */
  summary?: string;
  /**
   * Proposer is the address of the proposal sumbitter
   *
   * Since: cosmos-sdk 0.47
   */
  proposer?: string;
  /**
   * endorsed is a boolean indicating whether the proposal has been endorsed
   * by the Steering DAO.
   */
  endorsed?: boolean;
  /**
   * annotation is an optional field that contains annotations
   * added by the Steering DAO.
   */
  annotation?: string;
  /**
   * times_voting_period_extended is the number of times the voting period
   * has been extended from one of the core DAOs.
   */
  times_voting_period_extended?: number;
}
export interface ProposalAminoMsg {
  type: "/atomone.gov.v1.Proposal";
  value: ProposalAmino;
}
/** TallyResult defines a standard tally for a governance proposal. */
export interface TallyResult {
  /** yes_count is the number of yes votes on a proposal. */
  yesCount: string;
  /** abstain_count is the number of abstain votes on a proposal. */
  abstainCount: string;
  /** no_count is the number of no votes on a proposal. */
  noCount: string;
}
export interface TallyResultProtoMsg {
  typeUrl: "/atomone.gov.v1.TallyResult";
  value: Uint8Array;
}
/**
 * TallyResult defines a standard tally for a governance proposal.
 * @name TallyResultAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.TallyResult
 */
export interface TallyResultAmino {
  /**
   * yes_count is the number of yes votes on a proposal.
   */
  yes_count?: string;
  /**
   * abstain_count is the number of abstain votes on a proposal.
   */
  abstain_count?: string;
  /**
   * no_count is the number of no votes on a proposal.
   */
  no_count?: string;
}
export interface TallyResultAminoMsg {
  type: "/atomone.gov.v1.TallyResult";
  value: TallyResultAmino;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 */
export interface Vote {
  /** proposal_id defines the unique id of the proposal. */
  proposalId: bigint;
  /** voter is the voter address of the proposal. */
  voter: string;
  /** options is the weighted vote options. */
  options: WeightedVoteOption[];
  /** metadata is any  arbitrary metadata to attached to the vote. */
  metadata: string;
}
export interface VoteProtoMsg {
  typeUrl: "/atomone.gov.v1.Vote";
  value: Uint8Array;
}
/**
 * Vote defines a vote on a governance proposal.
 * A Vote consists of a proposal ID, the voter, and the vote option.
 * @name VoteAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.Vote
 */
export interface VoteAmino {
  /**
   * proposal_id defines the unique id of the proposal.
   */
  proposal_id?: string;
  /**
   * voter is the voter address of the proposal.
   */
  voter?: string;
  /**
   * options is the weighted vote options.
   */
  options?: WeightedVoteOptionAmino[];
  /**
   * metadata is any  arbitrary metadata to attached to the vote.
   */
  metadata?: string;
}
export interface VoteAminoMsg {
  type: "/atomone.gov.v1.Vote";
  value: VoteAmino;
}
/** QuorumCheckQueueEntry defines a quorum check queue entry. */
export interface QuorumCheckQueueEntry {
  /**
   * quorum_timeout_time is the time after which quorum checks start happening
   * and voting period is extended if proposal reaches quorum.
   */
  quorumTimeoutTime?: Timestamp | undefined;
  /**
   * quorum_check_count is the number of times quorum will be checked.
   * This is a snapshot of the parameter value with the same name when the
   * proposal is initially added to the queue.
   */
  quorumCheckCount: bigint;
  /** quorum_checks_done is the number of quorum checks that have been done. */
  quorumChecksDone: bigint;
}
export interface QuorumCheckQueueEntryProtoMsg {
  typeUrl: "/atomone.gov.v1.QuorumCheckQueueEntry";
  value: Uint8Array;
}
/**
 * QuorumCheckQueueEntry defines a quorum check queue entry.
 * @name QuorumCheckQueueEntryAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QuorumCheckQueueEntry
 */
export interface QuorumCheckQueueEntryAmino {
  /**
   * quorum_timeout_time is the time after which quorum checks start happening
   * and voting period is extended if proposal reaches quorum.
   */
  quorum_timeout_time?: string | undefined;
  /**
   * quorum_check_count is the number of times quorum will be checked.
   * This is a snapshot of the parameter value with the same name when the
   * proposal is initially added to the queue.
   */
  quorum_check_count?: string;
  /**
   * quorum_checks_done is the number of quorum checks that have been done.
   */
  quorum_checks_done?: string;
}
export interface QuorumCheckQueueEntryAminoMsg {
  type: "/atomone.gov.v1.QuorumCheckQueueEntry";
  value: QuorumCheckQueueEntryAmino;
}
/** DepositParams defines the params for deposits on governance proposals. */
export interface DepositParams {
  /** Minimum deposit for a proposal to enter voting period. */
  minDeposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  maxDepositPeriod?: Duration | undefined;
}
export interface DepositParamsProtoMsg {
  typeUrl: "/atomone.gov.v1.DepositParams";
  value: Uint8Array;
}
/**
 * DepositParams defines the params for deposits on governance proposals.
 * @name DepositParamsAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.DepositParams
 */
export interface DepositParamsAmino {
  /**
   * Minimum deposit for a proposal to enter voting period.
   */
  min_deposit?: CoinAmino[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period?: DurationAmino | undefined;
}
export interface DepositParamsAminoMsg {
  type: "/atomone.gov.v1.DepositParams";
  value: DepositParamsAmino;
}
/** VotingParams defines the params for voting on governance proposals. */
export interface VotingParams {
  /** Duration of the voting period. */
  votingPeriod?: Duration | undefined;
}
export interface VotingParamsProtoMsg {
  typeUrl: "/atomone.gov.v1.VotingParams";
  value: Uint8Array;
}
/**
 * VotingParams defines the params for voting on governance proposals.
 * @name VotingParamsAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.VotingParams
 */
export interface VotingParamsAmino {
  /**
   * Duration of the voting period.
   */
  voting_period?: DurationAmino | undefined;
}
export interface VotingParamsAminoMsg {
  type: "/atomone.gov.v1.VotingParams";
  value: VotingParamsAmino;
}
/** TallyParams defines the params for tallying votes on governance proposals. */
export interface TallyParams {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   */
  /** @deprecated */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 2/3. */
  threshold: string;
  /** quorum for constitution amendment proposals */
  /** @deprecated */
  constitutionAmendmentQuorum: string;
  /** Minimum proportion of Yes votes for a Constitution Amendment proposal to pass. Default value: 0.9. */
  constitutionAmendmentThreshold: string;
  /** quorum for law proposals */
  /** @deprecated */
  lawQuorum: string;
  /** Minimum proportion of Yes votes for a Law proposal to pass. Default value: 0.9. */
  lawThreshold: string;
}
export interface TallyParamsProtoMsg {
  typeUrl: "/atomone.gov.v1.TallyParams";
  value: Uint8Array;
}
/**
 * TallyParams defines the params for tallying votes on governance proposals.
 * @name TallyParamsAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.TallyParams
 */
export interface TallyParamsAmino {
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   * considered valid.
   * @deprecated
   */
  quorum?: string;
  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 2/3.
   */
  threshold?: string;
  /**
   * quorum for constitution amendment proposals
   * @deprecated
   */
  constitution_amendment_quorum?: string;
  /**
   * Minimum proportion of Yes votes for a Constitution Amendment proposal to pass. Default value: 0.9.
   */
  constitution_amendment_threshold?: string;
  /**
   * quorum for law proposals
   * @deprecated
   */
  law_quorum?: string;
  /**
   * Minimum proportion of Yes votes for a Law proposal to pass. Default value: 0.9.
   */
  law_threshold?: string;
}
export interface TallyParamsAminoMsg {
  type: "/atomone.gov.v1.TallyParams";
  value: TallyParamsAmino;
}
export interface MinDepositThrottler {
  /** Floor value for the minimum deposit required for a proposal to enter the voting period. */
  floorValue: Coin[];
  /**
   * Duration that dictates after how long the dynamic minimum deposit should be recalculated
   * for time-based decreases.
   */
  updatePeriod?: Duration | undefined;
  /** The number of active proposals the dynamic minimum deposit should target. */
  targetActiveProposals: bigint;
  /**
   * The ratio of increase for the minimum deposit when the number of active proposals
   * is at or above the target.
   */
  increaseRatio: string;
  /**
   * The ratio of decrease for the minimum deposit when the number of active proposals
   * is 1 less than the target.
   */
  decreaseRatio: string;
  /**
   * A positive integer representing the sensitivity of dynamic minimum deposit
   * decreases to the distance from the target number of active proposals.
   * The higher the number, the lower the sensitivity. A value of 1 represents the
   * highest sensitivity.
   */
  decreaseSensitivityTargetDistance: bigint;
}
export interface MinDepositThrottlerProtoMsg {
  typeUrl: "/atomone.gov.v1.MinDepositThrottler";
  value: Uint8Array;
}
/**
 * @name MinDepositThrottlerAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MinDepositThrottler
 */
export interface MinDepositThrottlerAmino {
  /**
   * Floor value for the minimum deposit required for a proposal to enter the voting period.
   */
  floor_value: CoinAmino[];
  /**
   * Duration that dictates after how long the dynamic minimum deposit should be recalculated
   * for time-based decreases.
   */
  update_period?: DurationAmino | undefined;
  /**
   * The number of active proposals the dynamic minimum deposit should target.
   */
  target_active_proposals?: string;
  /**
   * The ratio of increase for the minimum deposit when the number of active proposals
   * is at or above the target.
   */
  increase_ratio?: string;
  /**
   * The ratio of decrease for the minimum deposit when the number of active proposals
   * is 1 less than the target.
   */
  decrease_ratio?: string;
  /**
   * A positive integer representing the sensitivity of dynamic minimum deposit
   * decreases to the distance from the target number of active proposals.
   * The higher the number, the lower the sensitivity. A value of 1 represents the
   * highest sensitivity.
   */
  decrease_sensitivity_target_distance?: string;
}
export interface MinDepositThrottlerAminoMsg {
  type: "/atomone.gov.v1.MinDepositThrottler";
  value: MinDepositThrottlerAmino;
}
export interface MinInitialDepositThrottler {
  /** Floor value for the minimum initial deposit required for a proposal to enter the deposit period. */
  floorValue: Coin[];
  /**
   * Duration that dictates after how long the dynamic minimum deposit should be recalculated
   * for time-based decreases.
   */
  updatePeriod?: Duration | undefined;
  /** The number of proposals in deposit period the dynamic minimum initial deposit should target. */
  targetProposals: bigint;
  /**
   * The ratio of increase for the minimum initial deposit when the number of proposals
   * in deposit period is at or above the target.
   */
  increaseRatio: string;
  /**
   * The ratio of decrease for the minimum initial deposit when the number of proposals
   * in deposit period is 1 less than the target.
   */
  decreaseRatio: string;
  /**
   * A positive integer representing the sensitivity of dynamic minimum initial
   * deposit decreases to the distance from the target number of proposals
   * in deposit period. The higher the number, the lower the sensitivity. A value
   * of 1 represents the highest sensitivity.
   */
  decreaseSensitivityTargetDistance: bigint;
}
export interface MinInitialDepositThrottlerProtoMsg {
  typeUrl: "/atomone.gov.v1.MinInitialDepositThrottler";
  value: Uint8Array;
}
/**
 * @name MinInitialDepositThrottlerAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.MinInitialDepositThrottler
 */
export interface MinInitialDepositThrottlerAmino {
  /**
   * Floor value for the minimum initial deposit required for a proposal to enter the deposit period.
   */
  floor_value: CoinAmino[];
  /**
   * Duration that dictates after how long the dynamic minimum deposit should be recalculated
   * for time-based decreases.
   */
  update_period?: DurationAmino | undefined;
  /**
   * The number of proposals in deposit period the dynamic minimum initial deposit should target.
   */
  target_proposals?: string;
  /**
   * The ratio of increase for the minimum initial deposit when the number of proposals
   * in deposit period is at or above the target.
   */
  increase_ratio?: string;
  /**
   * The ratio of decrease for the minimum initial deposit when the number of proposals
   * in deposit period is 1 less than the target.
   */
  decrease_ratio?: string;
  /**
   * A positive integer representing the sensitivity of dynamic minimum initial
   * deposit decreases to the distance from the target number of proposals
   * in deposit period. The higher the number, the lower the sensitivity. A value
   * of 1 represents the highest sensitivity.
   */
  decrease_sensitivity_target_distance?: string;
}
export interface MinInitialDepositThrottlerAminoMsg {
  type: "/atomone.gov.v1.MinInitialDepositThrottler";
  value: MinInitialDepositThrottlerAmino;
}
/**
 * Params defines the parameters for the x/gov module.
 *
 * Since: cosmos-sdk 0.47
 */
export interface Params {
  /**
   * Minimum deposit for a proposal to enter voting period.
   * Deprecated: a dynamic system now determines the minimum deposit,
   * see the other params inside the min_deposit_throttler field.
   * While setting this value returns an error, when queried it is set to the
   * value of the current minimum deposit value as determined by the dynamic
   * system for backward compatibility.
   */
  /** @deprecated */
  minDeposit: Coin[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  maxDepositPeriod?: Duration | undefined;
  /** Duration of the voting period. */
  votingPeriod?: Duration | undefined;
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid. Default value: 0.25.
   */
  /** @deprecated */
  quorum: string;
  /** Minimum proportion of Yes votes for proposal to pass. Default value: 2/3. */
  threshold: string;
  /** The ratio representing the proportion of the deposit value that must be paid at proposal submission. */
  /** @deprecated */
  minInitialDepositRatio: string;
  /** burn deposits if a proposal does not meet quorum */
  burnVoteQuorum: boolean;
  /** burn deposits if the proposal does not enter voting period */
  burnProposalDepositPrevote: boolean;
  /**
   * The ratio representing the proportion of the deposit value minimum that
   * must be met when making a deposit. Default value: 0.01. Meaning that for a
   * chain with a min_deposit of 100stake, a deposit of 1stake would be
   * required.
   *
   * Since: cosmos-sdk 0.50
   * NOTE: backported from v50 (https://github.com/cosmos/cosmos-sdk/pull/18146)
   */
  minDepositRatio: string;
  /** quorum for constitution amendment proposals */
  /** @deprecated */
  constitutionAmendmentQuorum: string;
  /** Minimum proportion of Yes votes for a Constitution Amendment proposal to pass. Default value: 0.9. */
  constitutionAmendmentThreshold: string;
  /** quorum for law proposals */
  /** @deprecated */
  lawQuorum: string;
  /** Minimum proportion of Yes votes for a Law proposal to pass. Default value: 0.9. */
  lawThreshold: string;
  /**
   * Duration of time after a proposal enters the voting period, during which quorum
   * must be achieved to not incur in a voting period extension.
   */
  quorumTimeout?: Duration | undefined;
  /**
   * Duration that expresses the maximum amount of time by which a proposal voting period
   * can be extended.
   */
  maxVotingPeriodExtension?: Duration | undefined;
  /**
   * Number of times a proposal should be checked for quorum after the quorum timeout
   * has elapsed. Used to compute the amount of time in between quorum checks.
   */
  quorumCheckCount: bigint;
  minDepositThrottler?: MinDepositThrottler | undefined;
  minInitialDepositThrottler?: MinInitialDepositThrottler | undefined;
  /** Minimum proportion of No Votes for a proposal deposit to be burnt. */
  burnDepositNoThreshold: string;
  /** Achievable quorum */
  quorumRange?: QuorumRange | undefined;
  /** Achievable quorum for constitution amendment proposals */
  constitutionAmendmentQuorumRange?: QuorumRange | undefined;
  /** Achievable quorum for law proposals */
  lawQuorumRange?: QuorumRange | undefined;
  /** Defines the duration of time that need to elapse between governor status changes. */
  governorStatusChangePeriod?: Duration | undefined;
  /**
   * Defines the minimum amound of bonded tokens, aka the "self-delegation" (because active governors
   * must have the governance VP from the base account automatically delegated to them), that a governor
   * must have to be considered active.
   */
  minGovernorSelfDelegation: string;
}
export interface ParamsProtoMsg {
  typeUrl: "/atomone.gov.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the x/gov module.
 *
 * Since: cosmos-sdk 0.47
 * @name ParamsAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.Params
 */
export interface ParamsAmino {
  /**
   * Minimum deposit for a proposal to enter voting period.
   * Deprecated: a dynamic system now determines the minimum deposit,
   * see the other params inside the min_deposit_throttler field.
   * While setting this value returns an error, when queried it is set to the
   * value of the current minimum deposit value as determined by the dynamic
   * system for backward compatibility.
   * @deprecated
   */
  min_deposit: CoinAmino[];
  /**
   * Maximum period for Atom holders to deposit on a proposal. Initial value: 2
   * months.
   */
  max_deposit_period?: DurationAmino | undefined;
  /**
   * Duration of the voting period.
   */
  voting_period?: DurationAmino | undefined;
  /**
   * Minimum percentage of total stake needed to vote for a result to be
   *  considered valid. Default value: 0.25.
   * @deprecated
   */
  quorum?: string;
  /**
   * Minimum proportion of Yes votes for proposal to pass. Default value: 2/3.
   */
  threshold?: string;
  /**
   * The ratio representing the proportion of the deposit value that must be paid at proposal submission.
   * @deprecated
   */
  min_initial_deposit_ratio?: string;
  /**
   * burn deposits if a proposal does not meet quorum
   */
  burn_vote_quorum?: boolean;
  /**
   * burn deposits if the proposal does not enter voting period
   */
  burn_proposal_deposit_prevote?: boolean;
  /**
   * The ratio representing the proportion of the deposit value minimum that
   * must be met when making a deposit. Default value: 0.01. Meaning that for a
   * chain with a min_deposit of 100stake, a deposit of 1stake would be
   * required.
   *
   * Since: cosmos-sdk 0.50
   * NOTE: backported from v50 (https://github.com/cosmos/cosmos-sdk/pull/18146)
   */
  min_deposit_ratio?: string;
  /**
   * quorum for constitution amendment proposals
   * @deprecated
   */
  constitution_amendment_quorum?: string;
  /**
   * Minimum proportion of Yes votes for a Constitution Amendment proposal to pass. Default value: 0.9.
   */
  constitution_amendment_threshold?: string;
  /**
   * quorum for law proposals
   * @deprecated
   */
  law_quorum?: string;
  /**
   * Minimum proportion of Yes votes for a Law proposal to pass. Default value: 0.9.
   */
  law_threshold?: string;
  /**
   * Duration of time after a proposal enters the voting period, during which quorum
   * must be achieved to not incur in a voting period extension.
   */
  quorum_timeout?: DurationAmino | undefined;
  /**
   * Duration that expresses the maximum amount of time by which a proposal voting period
   * can be extended.
   */
  max_voting_period_extension?: DurationAmino | undefined;
  /**
   * Number of times a proposal should be checked for quorum after the quorum timeout
   * has elapsed. Used to compute the amount of time in between quorum checks.
   */
  quorum_check_count?: string;
  min_deposit_throttler?: MinDepositThrottlerAmino | undefined;
  min_initial_deposit_throttler?: MinInitialDepositThrottlerAmino | undefined;
  /**
   * Minimum proportion of No Votes for a proposal deposit to be burnt.
   */
  burn_deposit_no_threshold?: string;
  /**
   * Achievable quorum
   */
  quorum_range?: QuorumRangeAmino | undefined;
  /**
   * Achievable quorum for constitution amendment proposals
   */
  constitution_amendment_quorum_range?: QuorumRangeAmino | undefined;
  /**
   * Achievable quorum for law proposals
   */
  law_quorum_range?: QuorumRangeAmino | undefined;
  /**
   * Defines the duration of time that need to elapse between governor status changes.
   */
  governor_status_change_period?: DurationAmino | undefined;
  /**
   * Defines the minimum amound of bonded tokens, aka the "self-delegation" (because active governors
   * must have the governance VP from the base account automatically delegated to them), that a governor
   * must have to be considered active.
   */
  min_governor_self_delegation?: string;
}
export interface ParamsAminoMsg {
  type: "/atomone.gov.v1.Params";
  value: ParamsAmino;
}
export interface QuorumRange {
  /** Maximum achievable quorum */
  max: string;
  /** Minimum achievable quorum */
  min: string;
}
export interface QuorumRangeProtoMsg {
  typeUrl: "/atomone.gov.v1.QuorumRange";
  value: Uint8Array;
}
/**
 * @name QuorumRangeAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.QuorumRange
 */
export interface QuorumRangeAmino {
  /**
   * Maximum achievable quorum
   */
  max?: string;
  /**
   * Minimum achievable quorum
   */
  min?: string;
}
export interface QuorumRangeAminoMsg {
  type: "/atomone.gov.v1.QuorumRange";
  value: QuorumRangeAmino;
}
/**
 * Governor defines a governor, together with the total amount of delegated
 * validator's bond shares for a set amount of validators. When a delegator
 * delegates a percentage of its x/gov power to a governor, the resulting
 * shares from each delegators delegations in x/staking are added to the
 * governor's total shares.
 */
export interface Governor {
  /** governor_address defines the address of the governor; bech32-encoded. */
  governorAddress: string;
  /** status is the status of the governor (active/inactive). */
  status: GovernorStatus;
  /** description defines the description terms for the governor. */
  description: GovernorDescription | undefined;
  /** last_status_change_time is the time when the governor's status was last changed. */
  lastStatusChangeTime?: Timestamp | undefined;
}
export interface GovernorProtoMsg {
  typeUrl: "/atomone.gov.v1.Governor";
  value: Uint8Array;
}
/**
 * Governor defines a governor, together with the total amount of delegated
 * validator's bond shares for a set amount of validators. When a delegator
 * delegates a percentage of its x/gov power to a governor, the resulting
 * shares from each delegators delegations in x/staking are added to the
 * governor's total shares.
 * @name GovernorAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.Governor
 */
export interface GovernorAmino {
  /**
   * governor_address defines the address of the governor; bech32-encoded.
   */
  governor_address?: string;
  /**
   * status is the status of the governor (active/inactive).
   */
  status?: GovernorStatus;
  /**
   * description defines the description terms for the governor.
   */
  description: GovernorDescriptionAmino | undefined;
  /**
   * last_status_change_time is the time when the governor's status was last changed.
   */
  last_status_change_time?: string | undefined;
}
export interface GovernorAminoMsg {
  type: "/atomone.gov.v1.Governor";
  value: GovernorAmino;
}
/** Description defines a governor description. */
export interface GovernorDescription {
  /** moniker defines a human-readable name for the governor. */
  moniker: string;
  /** identity defines an optional identity signature (ex. UPort or Keybase). */
  identity: string;
  /** website defines an optional website link. */
  website: string;
  /** security_contact defines an optional email for security contact. */
  securityContact: string;
  /** details define other optional details. */
  details: string;
}
export interface GovernorDescriptionProtoMsg {
  typeUrl: "/atomone.gov.v1.GovernorDescription";
  value: Uint8Array;
}
/**
 * Description defines a governor description.
 * @name GovernorDescriptionAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.GovernorDescription
 */
export interface GovernorDescriptionAmino {
  /**
   * moniker defines a human-readable name for the governor.
   */
  moniker?: string;
  /**
   * identity defines an optional identity signature (ex. UPort or Keybase).
   */
  identity?: string;
  /**
   * website defines an optional website link.
   */
  website?: string;
  /**
   * security_contact defines an optional email for security contact.
   */
  security_contact?: string;
  /**
   * details define other optional details.
   */
  details?: string;
}
export interface GovernorDescriptionAminoMsg {
  type: "/atomone.gov.v1.GovernorDescription";
  value: GovernorDescriptionAmino;
}
/**
 * GovernorValShares holds the number of virtual shares from the
 * specific validator that a governor can use to vote on proposals.
 */
export interface GovernorValShares {
  governorAddress: string;
  validatorAddress: string;
  /** shares define the delegation shares available from this validator. */
  shares: string;
}
export interface GovernorValSharesProtoMsg {
  typeUrl: "/atomone.gov.v1.GovernorValShares";
  value: Uint8Array;
}
/**
 * GovernorValShares holds the number of virtual shares from the
 * specific validator that a governor can use to vote on proposals.
 * @name GovernorValSharesAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.GovernorValShares
 */
export interface GovernorValSharesAmino {
  governor_address?: string;
  validator_address?: string;
  /**
   * shares define the delegation shares available from this validator.
   */
  shares?: string;
}
export interface GovernorValSharesAminoMsg {
  type: "/atomone.gov.v1.GovernorValShares";
  value: GovernorValSharesAmino;
}
/**
 * GovernanceDelegation defines a delegation of governance voting power from a
 * delegator to a governor.
 */
export interface GovernanceDelegation {
  delegatorAddress: string;
  governorAddress: string;
}
export interface GovernanceDelegationProtoMsg {
  typeUrl: "/atomone.gov.v1.GovernanceDelegation";
  value: Uint8Array;
}
/**
 * GovernanceDelegation defines a delegation of governance voting power from a
 * delegator to a governor.
 * @name GovernanceDelegationAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.GovernanceDelegation
 */
export interface GovernanceDelegationAmino {
  delegator_address?: string;
  governor_address?: string;
}
export interface GovernanceDelegationAminoMsg {
  type: "/atomone.gov.v1.GovernanceDelegation";
  value: GovernanceDelegationAmino;
}
function createBaseWeightedVoteOption(): WeightedVoteOption {
  return {
    option: 0,
    weight: "",
  };
}
export const WeightedVoteOption = {
  typeUrl: "/atomone.gov.v1.WeightedVoteOption",
  encode(message: WeightedVoteOption, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.option !== 0) {
      writer.uint32(8).int32(message.option);
    }
    if (message.weight !== "") {
      writer.uint32(18).string(message.weight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): WeightedVoteOption {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseWeightedVoteOption();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.option = reader.int32() as any;
          break;
        case 2:
          message.weight = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): WeightedVoteOption {
    const obj = createBaseWeightedVoteOption();
    if (isSet(object.option)) obj.option = voteOptionFromJSON(object.option);
    if (isSet(object.weight)) obj.weight = String(object.weight);
    return obj;
  },
  toJSON(message: WeightedVoteOption): JsonSafe<WeightedVoteOption> {
    const obj: any = {};
    message.option !== undefined && (obj.option = voteOptionToJSON(message.option));
    message.weight !== undefined && (obj.weight = message.weight);
    return obj;
  },
  fromPartial(object: Partial<WeightedVoteOption>): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    message.option = object.option ?? 0;
    message.weight = object.weight ?? "";
    return message;
  },
  fromAmino(object: WeightedVoteOptionAmino): WeightedVoteOption {
    const message = createBaseWeightedVoteOption();
    if (object.option !== undefined && object.option !== null) {
      message.option = object.option;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = object.weight;
    }
    return message;
  },
  toAmino(message: WeightedVoteOption): WeightedVoteOptionAmino {
    const obj: any = {};
    obj.option = message.option === 0 ? undefined : message.option;
    obj.weight = message.weight === "" ? undefined : message.weight;
    return obj;
  },
  fromAminoMsg(object: WeightedVoteOptionAminoMsg): WeightedVoteOption {
    return WeightedVoteOption.fromAmino(object.value);
  },
  fromProtoMsg(message: WeightedVoteOptionProtoMsg): WeightedVoteOption {
    return WeightedVoteOption.decode(message.value);
  },
  toProto(message: WeightedVoteOption): Uint8Array {
    return WeightedVoteOption.encode(message).finish();
  },
  toProtoMsg(message: WeightedVoteOption): WeightedVoteOptionProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.WeightedVoteOption",
      value: WeightedVoteOption.encode(message).finish(),
    };
  },
};
function createBaseDeposit(): Deposit {
  return {
    proposalId: BigInt(0),
    depositor: "",
    amount: [],
  };
}
export const Deposit = {
  typeUrl: "/atomone.gov.v1.Deposit",
  encode(message: Deposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  decode(input: BinaryReader | Uint8Array, length?: number): Deposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeposit();
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
  fromJSON(object: any): Deposit {
    const obj = createBaseDeposit();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.depositor)) obj.depositor = String(object.depositor);
    if (Array.isArray(object?.amount)) obj.amount = object.amount.map((e: any) => Coin.fromJSON(e));
    return obj;
  },
  toJSON(message: Deposit): JsonSafe<Deposit> {
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
  fromPartial(object: Partial<Deposit>): Deposit {
    const message = createBaseDeposit();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.depositor = object.depositor ?? "";
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: DepositAmino): Deposit {
    const message = createBaseDeposit();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    }
    message.amount = object.amount?.map((e) => Coin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Deposit): DepositAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.depositor = message.depositor === "" ? undefined : message.depositor;
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.amount = message.amount;
    }
    return obj;
  },
  fromAminoMsg(object: DepositAminoMsg): Deposit {
    return Deposit.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositProtoMsg): Deposit {
    return Deposit.decode(message.value);
  },
  toProto(message: Deposit): Uint8Array {
    return Deposit.encode(message).finish();
  },
  toProtoMsg(message: Deposit): DepositProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.Deposit",
      value: Deposit.encode(message).finish(),
    };
  },
};
function createBaseLastMinDeposit(): LastMinDeposit {
  return {
    value: [],
    time: undefined,
  };
}
export const LastMinDeposit = {
  typeUrl: "/atomone.gov.v1.LastMinDeposit",
  encode(message: LastMinDeposit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.value) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LastMinDeposit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLastMinDeposit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.value.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LastMinDeposit {
    const obj = createBaseLastMinDeposit();
    if (Array.isArray(object?.value)) obj.value = object.value.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    return obj;
  },
  toJSON(message: LastMinDeposit): JsonSafe<LastMinDeposit> {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.value = [];
    }
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    return obj;
  },
  fromPartial(object: Partial<LastMinDeposit>): LastMinDeposit {
    const message = createBaseLastMinDeposit();
    message.value = object.value?.map((e) => Coin.fromPartial(e)) || [];
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    return message;
  },
  fromAmino(object: LastMinDepositAmino): LastMinDeposit {
    const message = createBaseLastMinDeposit();
    message.value = object.value?.map((e) => Coin.fromAmino(e)) || [];
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    return message;
  },
  toAmino(message: LastMinDeposit): LastMinDepositAmino {
    const obj: any = {};
    if (message.value) {
      obj.value = message.value.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.value = message.value;
    }
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    return obj;
  },
  fromAminoMsg(object: LastMinDepositAminoMsg): LastMinDeposit {
    return LastMinDeposit.fromAmino(object.value);
  },
  fromProtoMsg(message: LastMinDepositProtoMsg): LastMinDeposit {
    return LastMinDeposit.decode(message.value);
  },
  toProto(message: LastMinDeposit): Uint8Array {
    return LastMinDeposit.encode(message).finish();
  },
  toProtoMsg(message: LastMinDeposit): LastMinDepositProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.LastMinDeposit",
      value: LastMinDeposit.encode(message).finish(),
    };
  },
};
function createBaseProposal(): Proposal {
  return {
    id: BigInt(0),
    messages: [],
    status: 0,
    finalTallyResult: undefined,
    submitTime: undefined,
    depositEndTime: undefined,
    totalDeposit: [],
    votingStartTime: undefined,
    votingEndTime: undefined,
    metadata: "",
    title: "",
    summary: "",
    proposer: "",
    endorsed: false,
    annotation: "",
    timesVotingPeriodExtended: 0,
  };
}
export const Proposal = {
  typeUrl: "/atomone.gov.v1.Proposal",
  encode(message: Proposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    for (const v of message.messages) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.status !== 0) {
      writer.uint32(24).int32(message.status);
    }
    if (message.finalTallyResult !== undefined) {
      TallyResult.encode(message.finalTallyResult, writer.uint32(34).fork()).ldelim();
    }
    if (message.submitTime !== undefined) {
      Timestamp.encode(message.submitTime, writer.uint32(42).fork()).ldelim();
    }
    if (message.depositEndTime !== undefined) {
      Timestamp.encode(message.depositEndTime, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.totalDeposit) {
      Coin.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.votingStartTime !== undefined) {
      Timestamp.encode(message.votingStartTime, writer.uint32(66).fork()).ldelim();
    }
    if (message.votingEndTime !== undefined) {
      Timestamp.encode(message.votingEndTime, writer.uint32(74).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(82).string(message.metadata);
    }
    if (message.title !== "") {
      writer.uint32(90).string(message.title);
    }
    if (message.summary !== "") {
      writer.uint32(98).string(message.summary);
    }
    if (message.proposer !== "") {
      writer.uint32(106).string(message.proposer);
    }
    if (message.endorsed === true) {
      writer.uint32(112).bool(message.endorsed);
    }
    if (message.annotation !== "") {
      writer.uint32(122).string(message.annotation);
    }
    if (message.timesVotingPeriodExtended !== 0) {
      writer.uint32(128).uint32(message.timesVotingPeriodExtended);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        case 2:
          message.messages.push(Any.decode(reader, reader.uint32()));
          break;
        case 3:
          message.status = reader.int32() as any;
          break;
        case 4:
          message.finalTallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        case 5:
          message.submitTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.depositEndTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 7:
          message.totalDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 8:
          message.votingStartTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 9:
          message.votingEndTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 10:
          message.metadata = reader.string();
          break;
        case 11:
          message.title = reader.string();
          break;
        case 12:
          message.summary = reader.string();
          break;
        case 13:
          message.proposer = reader.string();
          break;
        case 14:
          message.endorsed = reader.bool();
          break;
        case 15:
          message.annotation = reader.string();
          break;
        case 16:
          message.timesVotingPeriodExtended = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Proposal {
    const obj = createBaseProposal();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (Array.isArray(object?.messages)) obj.messages = object.messages.map((e: any) => Any.fromJSON(e));
    if (isSet(object.status)) obj.status = proposalStatusFromJSON(object.status);
    if (isSet(object.finalTallyResult)) obj.finalTallyResult = TallyResult.fromJSON(object.finalTallyResult);
    if (isSet(object.submitTime)) obj.submitTime = fromJsonTimestamp(object.submitTime);
    if (isSet(object.depositEndTime)) obj.depositEndTime = fromJsonTimestamp(object.depositEndTime);
    if (Array.isArray(object?.totalDeposit))
      obj.totalDeposit = object.totalDeposit.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.votingStartTime)) obj.votingStartTime = fromJsonTimestamp(object.votingStartTime);
    if (isSet(object.votingEndTime)) obj.votingEndTime = fromJsonTimestamp(object.votingEndTime);
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    if (isSet(object.title)) obj.title = String(object.title);
    if (isSet(object.summary)) obj.summary = String(object.summary);
    if (isSet(object.proposer)) obj.proposer = String(object.proposer);
    if (isSet(object.endorsed)) obj.endorsed = Boolean(object.endorsed);
    if (isSet(object.annotation)) obj.annotation = String(object.annotation);
    if (isSet(object.timesVotingPeriodExtended))
      obj.timesVotingPeriodExtended = Number(object.timesVotingPeriodExtended);
    return obj;
  },
  toJSON(message: Proposal): JsonSafe<Proposal> {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    if (message.messages) {
      obj.messages = message.messages.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.messages = [];
    }
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.finalTallyResult !== undefined &&
      (obj.finalTallyResult = message.finalTallyResult
        ? TallyResult.toJSON(message.finalTallyResult)
        : undefined);
    message.submitTime !== undefined && (obj.submitTime = fromTimestamp(message.submitTime).toISOString());
    message.depositEndTime !== undefined &&
      (obj.depositEndTime = fromTimestamp(message.depositEndTime).toISOString());
    if (message.totalDeposit) {
      obj.totalDeposit = message.totalDeposit.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.totalDeposit = [];
    }
    message.votingStartTime !== undefined &&
      (obj.votingStartTime = fromTimestamp(message.votingStartTime).toISOString());
    message.votingEndTime !== undefined &&
      (obj.votingEndTime = fromTimestamp(message.votingEndTime).toISOString());
    message.metadata !== undefined && (obj.metadata = message.metadata);
    message.title !== undefined && (obj.title = message.title);
    message.summary !== undefined && (obj.summary = message.summary);
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.endorsed !== undefined && (obj.endorsed = message.endorsed);
    message.annotation !== undefined && (obj.annotation = message.annotation);
    message.timesVotingPeriodExtended !== undefined &&
      (obj.timesVotingPeriodExtended = Math.round(message.timesVotingPeriodExtended));
    return obj;
  },
  fromPartial(object: Partial<Proposal>): Proposal {
    const message = createBaseProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    message.messages = object.messages?.map((e) => Any.fromPartial(e)) || [];
    message.status = object.status ?? 0;
    if (object.finalTallyResult !== undefined && object.finalTallyResult !== null) {
      message.finalTallyResult = TallyResult.fromPartial(object.finalTallyResult);
    }
    if (object.submitTime !== undefined && object.submitTime !== null) {
      message.submitTime = Timestamp.fromPartial(object.submitTime);
    }
    if (object.depositEndTime !== undefined && object.depositEndTime !== null) {
      message.depositEndTime = Timestamp.fromPartial(object.depositEndTime);
    }
    message.totalDeposit = object.totalDeposit?.map((e) => Coin.fromPartial(e)) || [];
    if (object.votingStartTime !== undefined && object.votingStartTime !== null) {
      message.votingStartTime = Timestamp.fromPartial(object.votingStartTime);
    }
    if (object.votingEndTime !== undefined && object.votingEndTime !== null) {
      message.votingEndTime = Timestamp.fromPartial(object.votingEndTime);
    }
    message.metadata = object.metadata ?? "";
    message.title = object.title ?? "";
    message.summary = object.summary ?? "";
    message.proposer = object.proposer ?? "";
    message.endorsed = object.endorsed ?? false;
    message.annotation = object.annotation ?? "";
    message.timesVotingPeriodExtended = object.timesVotingPeriodExtended ?? 0;
    return message;
  },
  fromAmino(object: ProposalAmino): Proposal {
    const message = createBaseProposal();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    message.messages = object.messages?.map((e) => Any.fromAmino(e)) || [];
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.final_tally_result !== undefined && object.final_tally_result !== null) {
      message.finalTallyResult = TallyResult.fromAmino(object.final_tally_result);
    }
    if (object.submit_time !== undefined && object.submit_time !== null) {
      message.submitTime = Timestamp.fromAmino(object.submit_time);
    }
    if (object.deposit_end_time !== undefined && object.deposit_end_time !== null) {
      message.depositEndTime = Timestamp.fromAmino(object.deposit_end_time);
    }
    message.totalDeposit = object.total_deposit?.map((e) => Coin.fromAmino(e)) || [];
    if (object.voting_start_time !== undefined && object.voting_start_time !== null) {
      message.votingStartTime = Timestamp.fromAmino(object.voting_start_time);
    }
    if (object.voting_end_time !== undefined && object.voting_end_time !== null) {
      message.votingEndTime = Timestamp.fromAmino(object.voting_end_time);
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
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = object.proposer;
    }
    if (object.endorsed !== undefined && object.endorsed !== null) {
      message.endorsed = object.endorsed;
    }
    if (object.annotation !== undefined && object.annotation !== null) {
      message.annotation = object.annotation;
    }
    if (object.times_voting_period_extended !== undefined && object.times_voting_period_extended !== null) {
      message.timesVotingPeriodExtended = object.times_voting_period_extended;
    }
    return message;
  },
  toAmino(message: Proposal): ProposalAmino {
    const obj: any = {};
    obj.id = message.id !== BigInt(0) ? message.id?.toString() : undefined;
    if (message.messages) {
      obj.messages = message.messages.map((e) => (e ? Any.toAmino(e) : undefined));
    } else {
      obj.messages = message.messages;
    }
    obj.status = message.status === 0 ? undefined : message.status;
    obj.final_tally_result = message.finalTallyResult
      ? TallyResult.toAmino(message.finalTallyResult)
      : undefined;
    obj.submit_time = message.submitTime ? Timestamp.toAmino(message.submitTime) : undefined;
    obj.deposit_end_time = message.depositEndTime ? Timestamp.toAmino(message.depositEndTime) : undefined;
    if (message.totalDeposit) {
      obj.total_deposit = message.totalDeposit.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.total_deposit = message.totalDeposit;
    }
    obj.voting_start_time = message.votingStartTime ? Timestamp.toAmino(message.votingStartTime) : undefined;
    obj.voting_end_time = message.votingEndTime ? Timestamp.toAmino(message.votingEndTime) : undefined;
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    obj.title = message.title === "" ? undefined : message.title;
    obj.summary = message.summary === "" ? undefined : message.summary;
    obj.proposer = message.proposer === "" ? undefined : message.proposer;
    obj.endorsed = message.endorsed === false ? undefined : message.endorsed;
    obj.annotation = message.annotation === "" ? undefined : message.annotation;
    obj.times_voting_period_extended =
      message.timesVotingPeriodExtended === 0 ? undefined : message.timesVotingPeriodExtended;
    return obj;
  },
  fromAminoMsg(object: ProposalAminoMsg): Proposal {
    return Proposal.fromAmino(object.value);
  },
  fromProtoMsg(message: ProposalProtoMsg): Proposal {
    return Proposal.decode(message.value);
  },
  toProto(message: Proposal): Uint8Array {
    return Proposal.encode(message).finish();
  },
  toProtoMsg(message: Proposal): ProposalProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.Proposal",
      value: Proposal.encode(message).finish(),
    };
  },
};
function createBaseTallyResult(): TallyResult {
  return {
    yesCount: "",
    abstainCount: "",
    noCount: "",
  };
}
export const TallyResult = {
  typeUrl: "/atomone.gov.v1.TallyResult",
  encode(message: TallyResult, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.yesCount !== "") {
      writer.uint32(10).string(message.yesCount);
    }
    if (message.abstainCount !== "") {
      writer.uint32(18).string(message.abstainCount);
    }
    if (message.noCount !== "") {
      writer.uint32(26).string(message.noCount);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TallyResult {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyResult();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.yesCount = reader.string();
          break;
        case 2:
          message.abstainCount = reader.string();
          break;
        case 3:
          message.noCount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TallyResult {
    const obj = createBaseTallyResult();
    if (isSet(object.yesCount)) obj.yesCount = String(object.yesCount);
    if (isSet(object.abstainCount)) obj.abstainCount = String(object.abstainCount);
    if (isSet(object.noCount)) obj.noCount = String(object.noCount);
    return obj;
  },
  toJSON(message: TallyResult): JsonSafe<TallyResult> {
    const obj: any = {};
    message.yesCount !== undefined && (obj.yesCount = message.yesCount);
    message.abstainCount !== undefined && (obj.abstainCount = message.abstainCount);
    message.noCount !== undefined && (obj.noCount = message.noCount);
    return obj;
  },
  fromPartial(object: Partial<TallyResult>): TallyResult {
    const message = createBaseTallyResult();
    message.yesCount = object.yesCount ?? "";
    message.abstainCount = object.abstainCount ?? "";
    message.noCount = object.noCount ?? "";
    return message;
  },
  fromAmino(object: TallyResultAmino): TallyResult {
    const message = createBaseTallyResult();
    if (object.yes_count !== undefined && object.yes_count !== null) {
      message.yesCount = object.yes_count;
    }
    if (object.abstain_count !== undefined && object.abstain_count !== null) {
      message.abstainCount = object.abstain_count;
    }
    if (object.no_count !== undefined && object.no_count !== null) {
      message.noCount = object.no_count;
    }
    return message;
  },
  toAmino(message: TallyResult): TallyResultAmino {
    const obj: any = {};
    obj.yes_count = message.yesCount === "" ? undefined : message.yesCount;
    obj.abstain_count = message.abstainCount === "" ? undefined : message.abstainCount;
    obj.no_count = message.noCount === "" ? undefined : message.noCount;
    return obj;
  },
  fromAminoMsg(object: TallyResultAminoMsg): TallyResult {
    return TallyResult.fromAmino(object.value);
  },
  fromProtoMsg(message: TallyResultProtoMsg): TallyResult {
    return TallyResult.decode(message.value);
  },
  toProto(message: TallyResult): Uint8Array {
    return TallyResult.encode(message).finish();
  },
  toProtoMsg(message: TallyResult): TallyResultProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.TallyResult",
      value: TallyResult.encode(message).finish(),
    };
  },
};
function createBaseVote(): Vote {
  return {
    proposalId: BigInt(0),
    voter: "",
    options: [],
    metadata: "",
  };
}
export const Vote = {
  typeUrl: "/atomone.gov.v1.Vote",
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    for (const v of message.options) {
      WeightedVoteOption.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.metadata !== "") {
      writer.uint32(42).string(message.metadata);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 4:
          message.options.push(WeightedVoteOption.decode(reader, reader.uint32()));
          break;
        case 5:
          message.metadata = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Vote {
    const obj = createBaseVote();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.voter)) obj.voter = String(object.voter);
    if (Array.isArray(object?.options))
      obj.options = object.options.map((e: any) => WeightedVoteOption.fromJSON(e));
    if (isSet(object.metadata)) obj.metadata = String(object.metadata);
    return obj;
  },
  toJSON(message: Vote): JsonSafe<Vote> {
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
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.voter = object.voter ?? "";
    message.options = object.options?.map((e) => WeightedVoteOption.fromPartial(e)) || [];
    message.metadata = object.metadata ?? "";
    return message;
  },
  fromAmino(object: VoteAmino): Vote {
    const message = createBaseVote();
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
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.voter = message.voter === "" ? undefined : message.voter;
    if (message.options) {
      obj.options = message.options.map((e) => (e ? WeightedVoteOption.toAmino(e) : undefined));
    } else {
      obj.options = message.options;
    }
    obj.metadata = message.metadata === "" ? undefined : message.metadata;
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.Vote",
      value: Vote.encode(message).finish(),
    };
  },
};
function createBaseQuorumCheckQueueEntry(): QuorumCheckQueueEntry {
  return {
    quorumTimeoutTime: undefined,
    quorumCheckCount: BigInt(0),
    quorumChecksDone: BigInt(0),
  };
}
export const QuorumCheckQueueEntry = {
  typeUrl: "/atomone.gov.v1.QuorumCheckQueueEntry",
  encode(message: QuorumCheckQueueEntry, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quorumTimeoutTime !== undefined) {
      Timestamp.encode(message.quorumTimeoutTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.quorumCheckCount !== BigInt(0)) {
      writer.uint32(16).uint64(message.quorumCheckCount);
    }
    if (message.quorumChecksDone !== BigInt(0)) {
      writer.uint32(24).uint64(message.quorumChecksDone);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuorumCheckQueueEntry {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuorumCheckQueueEntry();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorumTimeoutTime = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.quorumCheckCount = reader.uint64();
          break;
        case 3:
          message.quorumChecksDone = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuorumCheckQueueEntry {
    const obj = createBaseQuorumCheckQueueEntry();
    if (isSet(object.quorumTimeoutTime)) obj.quorumTimeoutTime = fromJsonTimestamp(object.quorumTimeoutTime);
    if (isSet(object.quorumCheckCount)) obj.quorumCheckCount = BigInt(object.quorumCheckCount.toString());
    if (isSet(object.quorumChecksDone)) obj.quorumChecksDone = BigInt(object.quorumChecksDone.toString());
    return obj;
  },
  toJSON(message: QuorumCheckQueueEntry): JsonSafe<QuorumCheckQueueEntry> {
    const obj: any = {};
    message.quorumTimeoutTime !== undefined &&
      (obj.quorumTimeoutTime = fromTimestamp(message.quorumTimeoutTime).toISOString());
    message.quorumCheckCount !== undefined &&
      (obj.quorumCheckCount = (message.quorumCheckCount || BigInt(0)).toString());
    message.quorumChecksDone !== undefined &&
      (obj.quorumChecksDone = (message.quorumChecksDone || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QuorumCheckQueueEntry>): QuorumCheckQueueEntry {
    const message = createBaseQuorumCheckQueueEntry();
    if (object.quorumTimeoutTime !== undefined && object.quorumTimeoutTime !== null) {
      message.quorumTimeoutTime = Timestamp.fromPartial(object.quorumTimeoutTime);
    }
    if (object.quorumCheckCount !== undefined && object.quorumCheckCount !== null) {
      message.quorumCheckCount = BigInt(object.quorumCheckCount.toString());
    }
    if (object.quorumChecksDone !== undefined && object.quorumChecksDone !== null) {
      message.quorumChecksDone = BigInt(object.quorumChecksDone.toString());
    }
    return message;
  },
  fromAmino(object: QuorumCheckQueueEntryAmino): QuorumCheckQueueEntry {
    const message = createBaseQuorumCheckQueueEntry();
    if (object.quorum_timeout_time !== undefined && object.quorum_timeout_time !== null) {
      message.quorumTimeoutTime = Timestamp.fromAmino(object.quorum_timeout_time);
    }
    if (object.quorum_check_count !== undefined && object.quorum_check_count !== null) {
      message.quorumCheckCount = BigInt(object.quorum_check_count);
    }
    if (object.quorum_checks_done !== undefined && object.quorum_checks_done !== null) {
      message.quorumChecksDone = BigInt(object.quorum_checks_done);
    }
    return message;
  },
  toAmino(message: QuorumCheckQueueEntry): QuorumCheckQueueEntryAmino {
    const obj: any = {};
    obj.quorum_timeout_time = message.quorumTimeoutTime
      ? Timestamp.toAmino(message.quorumTimeoutTime)
      : undefined;
    obj.quorum_check_count =
      message.quorumCheckCount !== BigInt(0) ? message.quorumCheckCount?.toString() : undefined;
    obj.quorum_checks_done =
      message.quorumChecksDone !== BigInt(0) ? message.quorumChecksDone?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuorumCheckQueueEntryAminoMsg): QuorumCheckQueueEntry {
    return QuorumCheckQueueEntry.fromAmino(object.value);
  },
  fromProtoMsg(message: QuorumCheckQueueEntryProtoMsg): QuorumCheckQueueEntry {
    return QuorumCheckQueueEntry.decode(message.value);
  },
  toProto(message: QuorumCheckQueueEntry): Uint8Array {
    return QuorumCheckQueueEntry.encode(message).finish();
  },
  toProtoMsg(message: QuorumCheckQueueEntry): QuorumCheckQueueEntryProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QuorumCheckQueueEntry",
      value: QuorumCheckQueueEntry.encode(message).finish(),
    };
  },
};
function createBaseDepositParams(): DepositParams {
  return {
    minDeposit: [],
    maxDepositPeriod: undefined,
  };
}
export const DepositParams = {
  typeUrl: "/atomone.gov.v1.DepositParams",
  encode(message: DepositParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== undefined) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DepositParams {
    const obj = createBaseDepositParams();
    if (Array.isArray(object?.minDeposit))
      obj.minDeposit = object.minDeposit.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.maxDepositPeriod)) obj.maxDepositPeriod = Duration.fromJSON(object.maxDepositPeriod);
    return obj;
  },
  toJSON(message: DepositParams): JsonSafe<DepositParams> {
    const obj: any = {};
    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.minDeposit = [];
    }
    message.maxDepositPeriod !== undefined &&
      (obj.maxDepositPeriod = message.maxDepositPeriod
        ? Duration.toJSON(message.maxDepositPeriod)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<DepositParams>): DepositParams {
    const message = createBaseDepositParams();
    message.minDeposit = object.minDeposit?.map((e) => Coin.fromPartial(e)) || [];
    if (object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null) {
      message.maxDepositPeriod = Duration.fromPartial(object.maxDepositPeriod);
    }
    return message;
  },
  fromAmino(object: DepositParamsAmino): DepositParams {
    const message = createBaseDepositParams();
    message.minDeposit = object.min_deposit?.map((e) => Coin.fromAmino(e)) || [];
    if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
      message.maxDepositPeriod = Duration.fromAmino(object.max_deposit_period);
    }
    return message;
  },
  toAmino(message: DepositParams): DepositParamsAmino {
    const obj: any = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.min_deposit = message.minDeposit;
    }
    obj.max_deposit_period = message.maxDepositPeriod
      ? Duration.toAmino(message.maxDepositPeriod)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: DepositParamsAminoMsg): DepositParams {
    return DepositParams.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositParamsProtoMsg): DepositParams {
    return DepositParams.decode(message.value);
  },
  toProto(message: DepositParams): Uint8Array {
    return DepositParams.encode(message).finish();
  },
  toProtoMsg(message: DepositParams): DepositParamsProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.DepositParams",
      value: DepositParams.encode(message).finish(),
    };
  },
};
function createBaseVotingParams(): VotingParams {
  return {
    votingPeriod: undefined,
  };
}
export const VotingParams = {
  typeUrl: "/atomone.gov.v1.VotingParams",
  encode(message: VotingParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): VotingParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVotingParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): VotingParams {
    const obj = createBaseVotingParams();
    if (isSet(object.votingPeriod)) obj.votingPeriod = Duration.fromJSON(object.votingPeriod);
    return obj;
  },
  toJSON(message: VotingParams): JsonSafe<VotingParams> {
    const obj: any = {};
    message.votingPeriod !== undefined &&
      (obj.votingPeriod = message.votingPeriod ? Duration.toJSON(message.votingPeriod) : undefined);
    return obj;
  },
  fromPartial(object: Partial<VotingParams>): VotingParams {
    const message = createBaseVotingParams();
    if (object.votingPeriod !== undefined && object.votingPeriod !== null) {
      message.votingPeriod = Duration.fromPartial(object.votingPeriod);
    }
    return message;
  },
  fromAmino(object: VotingParamsAmino): VotingParams {
    const message = createBaseVotingParams();
    if (object.voting_period !== undefined && object.voting_period !== null) {
      message.votingPeriod = Duration.fromAmino(object.voting_period);
    }
    return message;
  },
  toAmino(message: VotingParams): VotingParamsAmino {
    const obj: any = {};
    obj.voting_period = message.votingPeriod ? Duration.toAmino(message.votingPeriod) : undefined;
    return obj;
  },
  fromAminoMsg(object: VotingParamsAminoMsg): VotingParams {
    return VotingParams.fromAmino(object.value);
  },
  fromProtoMsg(message: VotingParamsProtoMsg): VotingParams {
    return VotingParams.decode(message.value);
  },
  toProto(message: VotingParams): Uint8Array {
    return VotingParams.encode(message).finish();
  },
  toProtoMsg(message: VotingParams): VotingParamsProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.VotingParams",
      value: VotingParams.encode(message).finish(),
    };
  },
};
function createBaseTallyParams(): TallyParams {
  return {
    quorum: "",
    threshold: "",
    constitutionAmendmentQuorum: "",
    constitutionAmendmentThreshold: "",
    lawQuorum: "",
    lawThreshold: "",
  };
}
export const TallyParams = {
  typeUrl: "/atomone.gov.v1.TallyParams",
  encode(message: TallyParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quorum !== "") {
      writer.uint32(10).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(18).string(message.threshold);
    }
    if (message.constitutionAmendmentQuorum !== "") {
      writer.uint32(26).string(message.constitutionAmendmentQuorum);
    }
    if (message.constitutionAmendmentThreshold !== "") {
      writer.uint32(34).string(message.constitutionAmendmentThreshold);
    }
    if (message.lawQuorum !== "") {
      writer.uint32(42).string(message.lawQuorum);
    }
    if (message.lawThreshold !== "") {
      writer.uint32(50).string(message.lawThreshold);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TallyParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTallyParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quorum = reader.string();
          break;
        case 2:
          message.threshold = reader.string();
          break;
        case 3:
          message.constitutionAmendmentQuorum = reader.string();
          break;
        case 4:
          message.constitutionAmendmentThreshold = reader.string();
          break;
        case 5:
          message.lawQuorum = reader.string();
          break;
        case 6:
          message.lawThreshold = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TallyParams {
    const obj = createBaseTallyParams();
    if (isSet(object.quorum)) obj.quorum = String(object.quorum);
    if (isSet(object.threshold)) obj.threshold = String(object.threshold);
    if (isSet(object.constitutionAmendmentQuorum))
      obj.constitutionAmendmentQuorum = String(object.constitutionAmendmentQuorum);
    if (isSet(object.constitutionAmendmentThreshold))
      obj.constitutionAmendmentThreshold = String(object.constitutionAmendmentThreshold);
    if (isSet(object.lawQuorum)) obj.lawQuorum = String(object.lawQuorum);
    if (isSet(object.lawThreshold)) obj.lawThreshold = String(object.lawThreshold);
    return obj;
  },
  toJSON(message: TallyParams): JsonSafe<TallyParams> {
    const obj: any = {};
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.constitutionAmendmentQuorum !== undefined &&
      (obj.constitutionAmendmentQuorum = message.constitutionAmendmentQuorum);
    message.constitutionAmendmentThreshold !== undefined &&
      (obj.constitutionAmendmentThreshold = message.constitutionAmendmentThreshold);
    message.lawQuorum !== undefined && (obj.lawQuorum = message.lawQuorum);
    message.lawThreshold !== undefined && (obj.lawThreshold = message.lawThreshold);
    return obj;
  },
  fromPartial(object: Partial<TallyParams>): TallyParams {
    const message = createBaseTallyParams();
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.constitutionAmendmentQuorum = object.constitutionAmendmentQuorum ?? "";
    message.constitutionAmendmentThreshold = object.constitutionAmendmentThreshold ?? "";
    message.lawQuorum = object.lawQuorum ?? "";
    message.lawThreshold = object.lawThreshold ?? "";
    return message;
  },
  fromAmino(object: TallyParamsAmino): TallyParams {
    const message = createBaseTallyParams();
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = object.quorum;
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.constitution_amendment_quorum !== undefined && object.constitution_amendment_quorum !== null) {
      message.constitutionAmendmentQuorum = object.constitution_amendment_quorum;
    }
    if (
      object.constitution_amendment_threshold !== undefined &&
      object.constitution_amendment_threshold !== null
    ) {
      message.constitutionAmendmentThreshold = object.constitution_amendment_threshold;
    }
    if (object.law_quorum !== undefined && object.law_quorum !== null) {
      message.lawQuorum = object.law_quorum;
    }
    if (object.law_threshold !== undefined && object.law_threshold !== null) {
      message.lawThreshold = object.law_threshold;
    }
    return message;
  },
  toAmino(message: TallyParams): TallyParamsAmino {
    const obj: any = {};
    obj.quorum = message.quorum === "" ? undefined : message.quorum;
    obj.threshold = message.threshold === "" ? undefined : message.threshold;
    obj.constitution_amendment_quorum =
      message.constitutionAmendmentQuorum === "" ? undefined : message.constitutionAmendmentQuorum;
    obj.constitution_amendment_threshold =
      message.constitutionAmendmentThreshold === "" ? undefined : message.constitutionAmendmentThreshold;
    obj.law_quorum = message.lawQuorum === "" ? undefined : message.lawQuorum;
    obj.law_threshold = message.lawThreshold === "" ? undefined : message.lawThreshold;
    return obj;
  },
  fromAminoMsg(object: TallyParamsAminoMsg): TallyParams {
    return TallyParams.fromAmino(object.value);
  },
  fromProtoMsg(message: TallyParamsProtoMsg): TallyParams {
    return TallyParams.decode(message.value);
  },
  toProto(message: TallyParams): Uint8Array {
    return TallyParams.encode(message).finish();
  },
  toProtoMsg(message: TallyParams): TallyParamsProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.TallyParams",
      value: TallyParams.encode(message).finish(),
    };
  },
};
function createBaseMinDepositThrottler(): MinDepositThrottler {
  return {
    floorValue: [],
    updatePeriod: undefined,
    targetActiveProposals: BigInt(0),
    increaseRatio: "",
    decreaseRatio: "",
    decreaseSensitivityTargetDistance: BigInt(0),
  };
}
export const MinDepositThrottler = {
  typeUrl: "/atomone.gov.v1.MinDepositThrottler",
  encode(message: MinDepositThrottler, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.floorValue) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updatePeriod !== undefined) {
      Duration.encode(message.updatePeriod, writer.uint32(18).fork()).ldelim();
    }
    if (message.targetActiveProposals !== BigInt(0)) {
      writer.uint32(24).uint64(message.targetActiveProposals);
    }
    if (message.increaseRatio !== "") {
      writer.uint32(34).string(message.increaseRatio);
    }
    if (message.decreaseRatio !== "") {
      writer.uint32(42).string(message.decreaseRatio);
    }
    if (message.decreaseSensitivityTargetDistance !== BigInt(0)) {
      writer.uint32(48).uint64(message.decreaseSensitivityTargetDistance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MinDepositThrottler {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinDepositThrottler();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.floorValue.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.updatePeriod = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.targetActiveProposals = reader.uint64();
          break;
        case 4:
          message.increaseRatio = reader.string();
          break;
        case 5:
          message.decreaseRatio = reader.string();
          break;
        case 6:
          message.decreaseSensitivityTargetDistance = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MinDepositThrottler {
    const obj = createBaseMinDepositThrottler();
    if (Array.isArray(object?.floorValue))
      obj.floorValue = object.floorValue.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.updatePeriod)) obj.updatePeriod = Duration.fromJSON(object.updatePeriod);
    if (isSet(object.targetActiveProposals))
      obj.targetActiveProposals = BigInt(object.targetActiveProposals.toString());
    if (isSet(object.increaseRatio)) obj.increaseRatio = String(object.increaseRatio);
    if (isSet(object.decreaseRatio)) obj.decreaseRatio = String(object.decreaseRatio);
    if (isSet(object.decreaseSensitivityTargetDistance))
      obj.decreaseSensitivityTargetDistance = BigInt(object.decreaseSensitivityTargetDistance.toString());
    return obj;
  },
  toJSON(message: MinDepositThrottler): JsonSafe<MinDepositThrottler> {
    const obj: any = {};
    if (message.floorValue) {
      obj.floorValue = message.floorValue.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.floorValue = [];
    }
    message.updatePeriod !== undefined &&
      (obj.updatePeriod = message.updatePeriod ? Duration.toJSON(message.updatePeriod) : undefined);
    message.targetActiveProposals !== undefined &&
      (obj.targetActiveProposals = (message.targetActiveProposals || BigInt(0)).toString());
    message.increaseRatio !== undefined && (obj.increaseRatio = message.increaseRatio);
    message.decreaseRatio !== undefined && (obj.decreaseRatio = message.decreaseRatio);
    message.decreaseSensitivityTargetDistance !== undefined &&
      (obj.decreaseSensitivityTargetDistance = (
        message.decreaseSensitivityTargetDistance || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial(object: Partial<MinDepositThrottler>): MinDepositThrottler {
    const message = createBaseMinDepositThrottler();
    message.floorValue = object.floorValue?.map((e) => Coin.fromPartial(e)) || [];
    if (object.updatePeriod !== undefined && object.updatePeriod !== null) {
      message.updatePeriod = Duration.fromPartial(object.updatePeriod);
    }
    if (object.targetActiveProposals !== undefined && object.targetActiveProposals !== null) {
      message.targetActiveProposals = BigInt(object.targetActiveProposals.toString());
    }
    message.increaseRatio = object.increaseRatio ?? "";
    message.decreaseRatio = object.decreaseRatio ?? "";
    if (
      object.decreaseSensitivityTargetDistance !== undefined &&
      object.decreaseSensitivityTargetDistance !== null
    ) {
      message.decreaseSensitivityTargetDistance = BigInt(object.decreaseSensitivityTargetDistance.toString());
    }
    return message;
  },
  fromAmino(object: MinDepositThrottlerAmino): MinDepositThrottler {
    const message = createBaseMinDepositThrottler();
    message.floorValue = object.floor_value?.map((e) => Coin.fromAmino(e)) || [];
    if (object.update_period !== undefined && object.update_period !== null) {
      message.updatePeriod = Duration.fromAmino(object.update_period);
    }
    if (object.target_active_proposals !== undefined && object.target_active_proposals !== null) {
      message.targetActiveProposals = BigInt(object.target_active_proposals);
    }
    if (object.increase_ratio !== undefined && object.increase_ratio !== null) {
      message.increaseRatio = object.increase_ratio;
    }
    if (object.decrease_ratio !== undefined && object.decrease_ratio !== null) {
      message.decreaseRatio = object.decrease_ratio;
    }
    if (
      object.decrease_sensitivity_target_distance !== undefined &&
      object.decrease_sensitivity_target_distance !== null
    ) {
      message.decreaseSensitivityTargetDistance = BigInt(object.decrease_sensitivity_target_distance);
    }
    return message;
  },
  toAmino(message: MinDepositThrottler): MinDepositThrottlerAmino {
    const obj: any = {};
    if (message.floorValue) {
      obj.floor_value = message.floorValue.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.floor_value = message.floorValue;
    }
    obj.update_period = message.updatePeriod ? Duration.toAmino(message.updatePeriod) : undefined;
    obj.target_active_proposals =
      message.targetActiveProposals !== BigInt(0) ? message.targetActiveProposals?.toString() : undefined;
    obj.increase_ratio = message.increaseRatio === "" ? undefined : message.increaseRatio;
    obj.decrease_ratio = message.decreaseRatio === "" ? undefined : message.decreaseRatio;
    obj.decrease_sensitivity_target_distance =
      message.decreaseSensitivityTargetDistance !== BigInt(0)
        ? message.decreaseSensitivityTargetDistance?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: MinDepositThrottlerAminoMsg): MinDepositThrottler {
    return MinDepositThrottler.fromAmino(object.value);
  },
  fromProtoMsg(message: MinDepositThrottlerProtoMsg): MinDepositThrottler {
    return MinDepositThrottler.decode(message.value);
  },
  toProto(message: MinDepositThrottler): Uint8Array {
    return MinDepositThrottler.encode(message).finish();
  },
  toProtoMsg(message: MinDepositThrottler): MinDepositThrottlerProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MinDepositThrottler",
      value: MinDepositThrottler.encode(message).finish(),
    };
  },
};
function createBaseMinInitialDepositThrottler(): MinInitialDepositThrottler {
  return {
    floorValue: [],
    updatePeriod: undefined,
    targetProposals: BigInt(0),
    increaseRatio: "",
    decreaseRatio: "",
    decreaseSensitivityTargetDistance: BigInt(0),
  };
}
export const MinInitialDepositThrottler = {
  typeUrl: "/atomone.gov.v1.MinInitialDepositThrottler",
  encode(message: MinInitialDepositThrottler, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.floorValue) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.updatePeriod !== undefined) {
      Duration.encode(message.updatePeriod, writer.uint32(18).fork()).ldelim();
    }
    if (message.targetProposals !== BigInt(0)) {
      writer.uint32(24).uint64(message.targetProposals);
    }
    if (message.increaseRatio !== "") {
      writer.uint32(34).string(message.increaseRatio);
    }
    if (message.decreaseRatio !== "") {
      writer.uint32(42).string(message.decreaseRatio);
    }
    if (message.decreaseSensitivityTargetDistance !== BigInt(0)) {
      writer.uint32(48).uint64(message.decreaseSensitivityTargetDistance);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MinInitialDepositThrottler {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMinInitialDepositThrottler();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.floorValue.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.updatePeriod = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.targetProposals = reader.uint64();
          break;
        case 4:
          message.increaseRatio = reader.string();
          break;
        case 5:
          message.decreaseRatio = reader.string();
          break;
        case 6:
          message.decreaseSensitivityTargetDistance = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MinInitialDepositThrottler {
    const obj = createBaseMinInitialDepositThrottler();
    if (Array.isArray(object?.floorValue))
      obj.floorValue = object.floorValue.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.updatePeriod)) obj.updatePeriod = Duration.fromJSON(object.updatePeriod);
    if (isSet(object.targetProposals)) obj.targetProposals = BigInt(object.targetProposals.toString());
    if (isSet(object.increaseRatio)) obj.increaseRatio = String(object.increaseRatio);
    if (isSet(object.decreaseRatio)) obj.decreaseRatio = String(object.decreaseRatio);
    if (isSet(object.decreaseSensitivityTargetDistance))
      obj.decreaseSensitivityTargetDistance = BigInt(object.decreaseSensitivityTargetDistance.toString());
    return obj;
  },
  toJSON(message: MinInitialDepositThrottler): JsonSafe<MinInitialDepositThrottler> {
    const obj: any = {};
    if (message.floorValue) {
      obj.floorValue = message.floorValue.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.floorValue = [];
    }
    message.updatePeriod !== undefined &&
      (obj.updatePeriod = message.updatePeriod ? Duration.toJSON(message.updatePeriod) : undefined);
    message.targetProposals !== undefined &&
      (obj.targetProposals = (message.targetProposals || BigInt(0)).toString());
    message.increaseRatio !== undefined && (obj.increaseRatio = message.increaseRatio);
    message.decreaseRatio !== undefined && (obj.decreaseRatio = message.decreaseRatio);
    message.decreaseSensitivityTargetDistance !== undefined &&
      (obj.decreaseSensitivityTargetDistance = (
        message.decreaseSensitivityTargetDistance || BigInt(0)
      ).toString());
    return obj;
  },
  fromPartial(object: Partial<MinInitialDepositThrottler>): MinInitialDepositThrottler {
    const message = createBaseMinInitialDepositThrottler();
    message.floorValue = object.floorValue?.map((e) => Coin.fromPartial(e)) || [];
    if (object.updatePeriod !== undefined && object.updatePeriod !== null) {
      message.updatePeriod = Duration.fromPartial(object.updatePeriod);
    }
    if (object.targetProposals !== undefined && object.targetProposals !== null) {
      message.targetProposals = BigInt(object.targetProposals.toString());
    }
    message.increaseRatio = object.increaseRatio ?? "";
    message.decreaseRatio = object.decreaseRatio ?? "";
    if (
      object.decreaseSensitivityTargetDistance !== undefined &&
      object.decreaseSensitivityTargetDistance !== null
    ) {
      message.decreaseSensitivityTargetDistance = BigInt(object.decreaseSensitivityTargetDistance.toString());
    }
    return message;
  },
  fromAmino(object: MinInitialDepositThrottlerAmino): MinInitialDepositThrottler {
    const message = createBaseMinInitialDepositThrottler();
    message.floorValue = object.floor_value?.map((e) => Coin.fromAmino(e)) || [];
    if (object.update_period !== undefined && object.update_period !== null) {
      message.updatePeriod = Duration.fromAmino(object.update_period);
    }
    if (object.target_proposals !== undefined && object.target_proposals !== null) {
      message.targetProposals = BigInt(object.target_proposals);
    }
    if (object.increase_ratio !== undefined && object.increase_ratio !== null) {
      message.increaseRatio = object.increase_ratio;
    }
    if (object.decrease_ratio !== undefined && object.decrease_ratio !== null) {
      message.decreaseRatio = object.decrease_ratio;
    }
    if (
      object.decrease_sensitivity_target_distance !== undefined &&
      object.decrease_sensitivity_target_distance !== null
    ) {
      message.decreaseSensitivityTargetDistance = BigInt(object.decrease_sensitivity_target_distance);
    }
    return message;
  },
  toAmino(message: MinInitialDepositThrottler): MinInitialDepositThrottlerAmino {
    const obj: any = {};
    if (message.floorValue) {
      obj.floor_value = message.floorValue.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.floor_value = message.floorValue;
    }
    obj.update_period = message.updatePeriod ? Duration.toAmino(message.updatePeriod) : undefined;
    obj.target_proposals =
      message.targetProposals !== BigInt(0) ? message.targetProposals?.toString() : undefined;
    obj.increase_ratio = message.increaseRatio === "" ? undefined : message.increaseRatio;
    obj.decrease_ratio = message.decreaseRatio === "" ? undefined : message.decreaseRatio;
    obj.decrease_sensitivity_target_distance =
      message.decreaseSensitivityTargetDistance !== BigInt(0)
        ? message.decreaseSensitivityTargetDistance?.toString()
        : undefined;
    return obj;
  },
  fromAminoMsg(object: MinInitialDepositThrottlerAminoMsg): MinInitialDepositThrottler {
    return MinInitialDepositThrottler.fromAmino(object.value);
  },
  fromProtoMsg(message: MinInitialDepositThrottlerProtoMsg): MinInitialDepositThrottler {
    return MinInitialDepositThrottler.decode(message.value);
  },
  toProto(message: MinInitialDepositThrottler): Uint8Array {
    return MinInitialDepositThrottler.encode(message).finish();
  },
  toProtoMsg(message: MinInitialDepositThrottler): MinInitialDepositThrottlerProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.MinInitialDepositThrottler",
      value: MinInitialDepositThrottler.encode(message).finish(),
    };
  },
};
function createBaseParams(): Params {
  return {
    minDeposit: [],
    maxDepositPeriod: undefined,
    votingPeriod: undefined,
    quorum: "",
    threshold: "",
    minInitialDepositRatio: "",
    burnVoteQuorum: false,
    burnProposalDepositPrevote: false,
    minDepositRatio: "",
    constitutionAmendmentQuorum: "",
    constitutionAmendmentThreshold: "",
    lawQuorum: "",
    lawThreshold: "",
    quorumTimeout: undefined,
    maxVotingPeriodExtension: undefined,
    quorumCheckCount: BigInt(0),
    minDepositThrottler: undefined,
    minInitialDepositThrottler: undefined,
    burnDepositNoThreshold: "",
    quorumRange: undefined,
    constitutionAmendmentQuorumRange: undefined,
    lawQuorumRange: undefined,
    governorStatusChangePeriod: undefined,
    minGovernorSelfDelegation: "",
  };
}
export const Params = {
  typeUrl: "/atomone.gov.v1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.minDeposit) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxDepositPeriod !== undefined) {
      Duration.encode(message.maxDepositPeriod, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPeriod !== undefined) {
      Duration.encode(message.votingPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.quorum !== "") {
      writer.uint32(34).string(message.quorum);
    }
    if (message.threshold !== "") {
      writer.uint32(42).string(message.threshold);
    }
    if (message.minInitialDepositRatio !== "") {
      writer.uint32(58).string(message.minInitialDepositRatio);
    }
    if (message.burnVoteQuorum === true) {
      writer.uint32(104).bool(message.burnVoteQuorum);
    }
    if (message.burnProposalDepositPrevote === true) {
      writer.uint32(112).bool(message.burnProposalDepositPrevote);
    }
    if (message.minDepositRatio !== "") {
      writer.uint32(122).string(message.minDepositRatio);
    }
    if (message.constitutionAmendmentQuorum !== "") {
      writer.uint32(130).string(message.constitutionAmendmentQuorum);
    }
    if (message.constitutionAmendmentThreshold !== "") {
      writer.uint32(138).string(message.constitutionAmendmentThreshold);
    }
    if (message.lawQuorum !== "") {
      writer.uint32(146).string(message.lawQuorum);
    }
    if (message.lawThreshold !== "") {
      writer.uint32(154).string(message.lawThreshold);
    }
    if (message.quorumTimeout !== undefined) {
      Duration.encode(message.quorumTimeout, writer.uint32(162).fork()).ldelim();
    }
    if (message.maxVotingPeriodExtension !== undefined) {
      Duration.encode(message.maxVotingPeriodExtension, writer.uint32(170).fork()).ldelim();
    }
    if (message.quorumCheckCount !== BigInt(0)) {
      writer.uint32(176).uint64(message.quorumCheckCount);
    }
    if (message.minDepositThrottler !== undefined) {
      MinDepositThrottler.encode(message.minDepositThrottler, writer.uint32(186).fork()).ldelim();
    }
    if (message.minInitialDepositThrottler !== undefined) {
      MinInitialDepositThrottler.encode(
        message.minInitialDepositThrottler,
        writer.uint32(194).fork(),
      ).ldelim();
    }
    if (message.burnDepositNoThreshold !== "") {
      writer.uint32(202).string(message.burnDepositNoThreshold);
    }
    if (message.quorumRange !== undefined) {
      QuorumRange.encode(message.quorumRange, writer.uint32(210).fork()).ldelim();
    }
    if (message.constitutionAmendmentQuorumRange !== undefined) {
      QuorumRange.encode(message.constitutionAmendmentQuorumRange, writer.uint32(218).fork()).ldelim();
    }
    if (message.lawQuorumRange !== undefined) {
      QuorumRange.encode(message.lawQuorumRange, writer.uint32(226).fork()).ldelim();
    }
    if (message.governorStatusChangePeriod !== undefined) {
      Duration.encode(message.governorStatusChangePeriod, writer.uint32(234).fork()).ldelim();
    }
    if (message.minGovernorSelfDelegation !== "") {
      writer.uint32(242).string(message.minGovernorSelfDelegation);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minDeposit.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.maxDepositPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.quorum = reader.string();
          break;
        case 5:
          message.threshold = reader.string();
          break;
        case 7:
          message.minInitialDepositRatio = reader.string();
          break;
        case 13:
          message.burnVoteQuorum = reader.bool();
          break;
        case 14:
          message.burnProposalDepositPrevote = reader.bool();
          break;
        case 15:
          message.minDepositRatio = reader.string();
          break;
        case 16:
          message.constitutionAmendmentQuorum = reader.string();
          break;
        case 17:
          message.constitutionAmendmentThreshold = reader.string();
          break;
        case 18:
          message.lawQuorum = reader.string();
          break;
        case 19:
          message.lawThreshold = reader.string();
          break;
        case 20:
          message.quorumTimeout = Duration.decode(reader, reader.uint32());
          break;
        case 21:
          message.maxVotingPeriodExtension = Duration.decode(reader, reader.uint32());
          break;
        case 22:
          message.quorumCheckCount = reader.uint64();
          break;
        case 23:
          message.minDepositThrottler = MinDepositThrottler.decode(reader, reader.uint32());
          break;
        case 24:
          message.minInitialDepositThrottler = MinInitialDepositThrottler.decode(reader, reader.uint32());
          break;
        case 25:
          message.burnDepositNoThreshold = reader.string();
          break;
        case 26:
          message.quorumRange = QuorumRange.decode(reader, reader.uint32());
          break;
        case 27:
          message.constitutionAmendmentQuorumRange = QuorumRange.decode(reader, reader.uint32());
          break;
        case 28:
          message.lawQuorumRange = QuorumRange.decode(reader, reader.uint32());
          break;
        case 29:
          message.governorStatusChangePeriod = Duration.decode(reader, reader.uint32());
          break;
        case 30:
          message.minGovernorSelfDelegation = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (Array.isArray(object?.minDeposit))
      obj.minDeposit = object.minDeposit.map((e: any) => Coin.fromJSON(e));
    if (isSet(object.maxDepositPeriod)) obj.maxDepositPeriod = Duration.fromJSON(object.maxDepositPeriod);
    if (isSet(object.votingPeriod)) obj.votingPeriod = Duration.fromJSON(object.votingPeriod);
    if (isSet(object.quorum)) obj.quorum = String(object.quorum);
    if (isSet(object.threshold)) obj.threshold = String(object.threshold);
    if (isSet(object.minInitialDepositRatio))
      obj.minInitialDepositRatio = String(object.minInitialDepositRatio);
    if (isSet(object.burnVoteQuorum)) obj.burnVoteQuorum = Boolean(object.burnVoteQuorum);
    if (isSet(object.burnProposalDepositPrevote))
      obj.burnProposalDepositPrevote = Boolean(object.burnProposalDepositPrevote);
    if (isSet(object.minDepositRatio)) obj.minDepositRatio = String(object.minDepositRatio);
    if (isSet(object.constitutionAmendmentQuorum))
      obj.constitutionAmendmentQuorum = String(object.constitutionAmendmentQuorum);
    if (isSet(object.constitutionAmendmentThreshold))
      obj.constitutionAmendmentThreshold = String(object.constitutionAmendmentThreshold);
    if (isSet(object.lawQuorum)) obj.lawQuorum = String(object.lawQuorum);
    if (isSet(object.lawThreshold)) obj.lawThreshold = String(object.lawThreshold);
    if (isSet(object.quorumTimeout)) obj.quorumTimeout = Duration.fromJSON(object.quorumTimeout);
    if (isSet(object.maxVotingPeriodExtension))
      obj.maxVotingPeriodExtension = Duration.fromJSON(object.maxVotingPeriodExtension);
    if (isSet(object.quorumCheckCount)) obj.quorumCheckCount = BigInt(object.quorumCheckCount.toString());
    if (isSet(object.minDepositThrottler))
      obj.minDepositThrottler = MinDepositThrottler.fromJSON(object.minDepositThrottler);
    if (isSet(object.minInitialDepositThrottler))
      obj.minInitialDepositThrottler = MinInitialDepositThrottler.fromJSON(object.minInitialDepositThrottler);
    if (isSet(object.burnDepositNoThreshold))
      obj.burnDepositNoThreshold = String(object.burnDepositNoThreshold);
    if (isSet(object.quorumRange)) obj.quorumRange = QuorumRange.fromJSON(object.quorumRange);
    if (isSet(object.constitutionAmendmentQuorumRange))
      obj.constitutionAmendmentQuorumRange = QuorumRange.fromJSON(object.constitutionAmendmentQuorumRange);
    if (isSet(object.lawQuorumRange)) obj.lawQuorumRange = QuorumRange.fromJSON(object.lawQuorumRange);
    if (isSet(object.governorStatusChangePeriod))
      obj.governorStatusChangePeriod = Duration.fromJSON(object.governorStatusChangePeriod);
    if (isSet(object.minGovernorSelfDelegation))
      obj.minGovernorSelfDelegation = String(object.minGovernorSelfDelegation);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    if (message.minDeposit) {
      obj.minDeposit = message.minDeposit.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.minDeposit = [];
    }
    message.maxDepositPeriod !== undefined &&
      (obj.maxDepositPeriod = message.maxDepositPeriod
        ? Duration.toJSON(message.maxDepositPeriod)
        : undefined);
    message.votingPeriod !== undefined &&
      (obj.votingPeriod = message.votingPeriod ? Duration.toJSON(message.votingPeriod) : undefined);
    message.quorum !== undefined && (obj.quorum = message.quorum);
    message.threshold !== undefined && (obj.threshold = message.threshold);
    message.minInitialDepositRatio !== undefined &&
      (obj.minInitialDepositRatio = message.minInitialDepositRatio);
    message.burnVoteQuorum !== undefined && (obj.burnVoteQuorum = message.burnVoteQuorum);
    message.burnProposalDepositPrevote !== undefined &&
      (obj.burnProposalDepositPrevote = message.burnProposalDepositPrevote);
    message.minDepositRatio !== undefined && (obj.minDepositRatio = message.minDepositRatio);
    message.constitutionAmendmentQuorum !== undefined &&
      (obj.constitutionAmendmentQuorum = message.constitutionAmendmentQuorum);
    message.constitutionAmendmentThreshold !== undefined &&
      (obj.constitutionAmendmentThreshold = message.constitutionAmendmentThreshold);
    message.lawQuorum !== undefined && (obj.lawQuorum = message.lawQuorum);
    message.lawThreshold !== undefined && (obj.lawThreshold = message.lawThreshold);
    message.quorumTimeout !== undefined &&
      (obj.quorumTimeout = message.quorumTimeout ? Duration.toJSON(message.quorumTimeout) : undefined);
    message.maxVotingPeriodExtension !== undefined &&
      (obj.maxVotingPeriodExtension = message.maxVotingPeriodExtension
        ? Duration.toJSON(message.maxVotingPeriodExtension)
        : undefined);
    message.quorumCheckCount !== undefined &&
      (obj.quorumCheckCount = (message.quorumCheckCount || BigInt(0)).toString());
    message.minDepositThrottler !== undefined &&
      (obj.minDepositThrottler = message.minDepositThrottler
        ? MinDepositThrottler.toJSON(message.minDepositThrottler)
        : undefined);
    message.minInitialDepositThrottler !== undefined &&
      (obj.minInitialDepositThrottler = message.minInitialDepositThrottler
        ? MinInitialDepositThrottler.toJSON(message.minInitialDepositThrottler)
        : undefined);
    message.burnDepositNoThreshold !== undefined &&
      (obj.burnDepositNoThreshold = message.burnDepositNoThreshold);
    message.quorumRange !== undefined &&
      (obj.quorumRange = message.quorumRange ? QuorumRange.toJSON(message.quorumRange) : undefined);
    message.constitutionAmendmentQuorumRange !== undefined &&
      (obj.constitutionAmendmentQuorumRange = message.constitutionAmendmentQuorumRange
        ? QuorumRange.toJSON(message.constitutionAmendmentQuorumRange)
        : undefined);
    message.lawQuorumRange !== undefined &&
      (obj.lawQuorumRange = message.lawQuorumRange ? QuorumRange.toJSON(message.lawQuorumRange) : undefined);
    message.governorStatusChangePeriod !== undefined &&
      (obj.governorStatusChangePeriod = message.governorStatusChangePeriod
        ? Duration.toJSON(message.governorStatusChangePeriod)
        : undefined);
    message.minGovernorSelfDelegation !== undefined &&
      (obj.minGovernorSelfDelegation = message.minGovernorSelfDelegation);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.minDeposit = object.minDeposit?.map((e) => Coin.fromPartial(e)) || [];
    if (object.maxDepositPeriod !== undefined && object.maxDepositPeriod !== null) {
      message.maxDepositPeriod = Duration.fromPartial(object.maxDepositPeriod);
    }
    if (object.votingPeriod !== undefined && object.votingPeriod !== null) {
      message.votingPeriod = Duration.fromPartial(object.votingPeriod);
    }
    message.quorum = object.quorum ?? "";
    message.threshold = object.threshold ?? "";
    message.minInitialDepositRatio = object.minInitialDepositRatio ?? "";
    message.burnVoteQuorum = object.burnVoteQuorum ?? false;
    message.burnProposalDepositPrevote = object.burnProposalDepositPrevote ?? false;
    message.minDepositRatio = object.minDepositRatio ?? "";
    message.constitutionAmendmentQuorum = object.constitutionAmendmentQuorum ?? "";
    message.constitutionAmendmentThreshold = object.constitutionAmendmentThreshold ?? "";
    message.lawQuorum = object.lawQuorum ?? "";
    message.lawThreshold = object.lawThreshold ?? "";
    if (object.quorumTimeout !== undefined && object.quorumTimeout !== null) {
      message.quorumTimeout = Duration.fromPartial(object.quorumTimeout);
    }
    if (object.maxVotingPeriodExtension !== undefined && object.maxVotingPeriodExtension !== null) {
      message.maxVotingPeriodExtension = Duration.fromPartial(object.maxVotingPeriodExtension);
    }
    if (object.quorumCheckCount !== undefined && object.quorumCheckCount !== null) {
      message.quorumCheckCount = BigInt(object.quorumCheckCount.toString());
    }
    if (object.minDepositThrottler !== undefined && object.minDepositThrottler !== null) {
      message.minDepositThrottler = MinDepositThrottler.fromPartial(object.minDepositThrottler);
    }
    if (object.minInitialDepositThrottler !== undefined && object.minInitialDepositThrottler !== null) {
      message.minInitialDepositThrottler = MinInitialDepositThrottler.fromPartial(
        object.minInitialDepositThrottler,
      );
    }
    message.burnDepositNoThreshold = object.burnDepositNoThreshold ?? "";
    if (object.quorumRange !== undefined && object.quorumRange !== null) {
      message.quorumRange = QuorumRange.fromPartial(object.quorumRange);
    }
    if (
      object.constitutionAmendmentQuorumRange !== undefined &&
      object.constitutionAmendmentQuorumRange !== null
    ) {
      message.constitutionAmendmentQuorumRange = QuorumRange.fromPartial(
        object.constitutionAmendmentQuorumRange,
      );
    }
    if (object.lawQuorumRange !== undefined && object.lawQuorumRange !== null) {
      message.lawQuorumRange = QuorumRange.fromPartial(object.lawQuorumRange);
    }
    if (object.governorStatusChangePeriod !== undefined && object.governorStatusChangePeriod !== null) {
      message.governorStatusChangePeriod = Duration.fromPartial(object.governorStatusChangePeriod);
    }
    message.minGovernorSelfDelegation = object.minGovernorSelfDelegation ?? "";
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.minDeposit = object.min_deposit?.map((e) => Coin.fromAmino(e)) || [];
    if (object.max_deposit_period !== undefined && object.max_deposit_period !== null) {
      message.maxDepositPeriod = Duration.fromAmino(object.max_deposit_period);
    }
    if (object.voting_period !== undefined && object.voting_period !== null) {
      message.votingPeriod = Duration.fromAmino(object.voting_period);
    }
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = object.quorum;
    }
    if (object.threshold !== undefined && object.threshold !== null) {
      message.threshold = object.threshold;
    }
    if (object.min_initial_deposit_ratio !== undefined && object.min_initial_deposit_ratio !== null) {
      message.minInitialDepositRatio = object.min_initial_deposit_ratio;
    }
    if (object.burn_vote_quorum !== undefined && object.burn_vote_quorum !== null) {
      message.burnVoteQuorum = object.burn_vote_quorum;
    }
    if (object.burn_proposal_deposit_prevote !== undefined && object.burn_proposal_deposit_prevote !== null) {
      message.burnProposalDepositPrevote = object.burn_proposal_deposit_prevote;
    }
    if (object.min_deposit_ratio !== undefined && object.min_deposit_ratio !== null) {
      message.minDepositRatio = object.min_deposit_ratio;
    }
    if (object.constitution_amendment_quorum !== undefined && object.constitution_amendment_quorum !== null) {
      message.constitutionAmendmentQuorum = object.constitution_amendment_quorum;
    }
    if (
      object.constitution_amendment_threshold !== undefined &&
      object.constitution_amendment_threshold !== null
    ) {
      message.constitutionAmendmentThreshold = object.constitution_amendment_threshold;
    }
    if (object.law_quorum !== undefined && object.law_quorum !== null) {
      message.lawQuorum = object.law_quorum;
    }
    if (object.law_threshold !== undefined && object.law_threshold !== null) {
      message.lawThreshold = object.law_threshold;
    }
    if (object.quorum_timeout !== undefined && object.quorum_timeout !== null) {
      message.quorumTimeout = Duration.fromAmino(object.quorum_timeout);
    }
    if (object.max_voting_period_extension !== undefined && object.max_voting_period_extension !== null) {
      message.maxVotingPeriodExtension = Duration.fromAmino(object.max_voting_period_extension);
    }
    if (object.quorum_check_count !== undefined && object.quorum_check_count !== null) {
      message.quorumCheckCount = BigInt(object.quorum_check_count);
    }
    if (object.min_deposit_throttler !== undefined && object.min_deposit_throttler !== null) {
      message.minDepositThrottler = MinDepositThrottler.fromAmino(object.min_deposit_throttler);
    }
    if (object.min_initial_deposit_throttler !== undefined && object.min_initial_deposit_throttler !== null) {
      message.minInitialDepositThrottler = MinInitialDepositThrottler.fromAmino(
        object.min_initial_deposit_throttler,
      );
    }
    if (object.burn_deposit_no_threshold !== undefined && object.burn_deposit_no_threshold !== null) {
      message.burnDepositNoThreshold = object.burn_deposit_no_threshold;
    }
    if (object.quorum_range !== undefined && object.quorum_range !== null) {
      message.quorumRange = QuorumRange.fromAmino(object.quorum_range);
    }
    if (
      object.constitution_amendment_quorum_range !== undefined &&
      object.constitution_amendment_quorum_range !== null
    ) {
      message.constitutionAmendmentQuorumRange = QuorumRange.fromAmino(
        object.constitution_amendment_quorum_range,
      );
    }
    if (object.law_quorum_range !== undefined && object.law_quorum_range !== null) {
      message.lawQuorumRange = QuorumRange.fromAmino(object.law_quorum_range);
    }
    if (object.governor_status_change_period !== undefined && object.governor_status_change_period !== null) {
      message.governorStatusChangePeriod = Duration.fromAmino(object.governor_status_change_period);
    }
    if (object.min_governor_self_delegation !== undefined && object.min_governor_self_delegation !== null) {
      message.minGovernorSelfDelegation = object.min_governor_self_delegation;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.minDeposit) {
      obj.min_deposit = message.minDeposit.map((e) => (e ? Coin.toAmino(e) : undefined));
    } else {
      obj.min_deposit = message.minDeposit;
    }
    obj.max_deposit_period = message.maxDepositPeriod
      ? Duration.toAmino(message.maxDepositPeriod)
      : undefined;
    obj.voting_period = message.votingPeriod ? Duration.toAmino(message.votingPeriod) : undefined;
    obj.quorum = message.quorum === "" ? undefined : message.quorum;
    obj.threshold = message.threshold === "" ? undefined : message.threshold;
    obj.min_initial_deposit_ratio =
      message.minInitialDepositRatio === "" ? undefined : message.minInitialDepositRatio;
    obj.burn_vote_quorum = message.burnVoteQuorum === false ? undefined : message.burnVoteQuorum;
    obj.burn_proposal_deposit_prevote =
      message.burnProposalDepositPrevote === false ? undefined : message.burnProposalDepositPrevote;
    obj.min_deposit_ratio = message.minDepositRatio === "" ? undefined : message.minDepositRatio;
    obj.constitution_amendment_quorum =
      message.constitutionAmendmentQuorum === "" ? undefined : message.constitutionAmendmentQuorum;
    obj.constitution_amendment_threshold =
      message.constitutionAmendmentThreshold === "" ? undefined : message.constitutionAmendmentThreshold;
    obj.law_quorum = message.lawQuorum === "" ? undefined : message.lawQuorum;
    obj.law_threshold = message.lawThreshold === "" ? undefined : message.lawThreshold;
    obj.quorum_timeout = message.quorumTimeout ? Duration.toAmino(message.quorumTimeout) : undefined;
    obj.max_voting_period_extension = message.maxVotingPeriodExtension
      ? Duration.toAmino(message.maxVotingPeriodExtension)
      : undefined;
    obj.quorum_check_count =
      message.quorumCheckCount !== BigInt(0) ? message.quorumCheckCount?.toString() : undefined;
    obj.min_deposit_throttler = message.minDepositThrottler
      ? MinDepositThrottler.toAmino(message.minDepositThrottler)
      : undefined;
    obj.min_initial_deposit_throttler = message.minInitialDepositThrottler
      ? MinInitialDepositThrottler.toAmino(message.minInitialDepositThrottler)
      : undefined;
    obj.burn_deposit_no_threshold =
      message.burnDepositNoThreshold === "" ? undefined : message.burnDepositNoThreshold;
    obj.quorum_range = message.quorumRange ? QuorumRange.toAmino(message.quorumRange) : undefined;
    obj.constitution_amendment_quorum_range = message.constitutionAmendmentQuorumRange
      ? QuorumRange.toAmino(message.constitutionAmendmentQuorumRange)
      : undefined;
    obj.law_quorum_range = message.lawQuorumRange ? QuorumRange.toAmino(message.lawQuorumRange) : undefined;
    obj.governor_status_change_period = message.governorStatusChangePeriod
      ? Duration.toAmino(message.governorStatusChangePeriod)
      : undefined;
    obj.min_governor_self_delegation =
      message.minGovernorSelfDelegation === "" ? undefined : message.minGovernorSelfDelegation;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.Params",
      value: Params.encode(message).finish(),
    };
  },
};
function createBaseQuorumRange(): QuorumRange {
  return {
    max: "",
    min: "",
  };
}
export const QuorumRange = {
  typeUrl: "/atomone.gov.v1.QuorumRange",
  encode(message: QuorumRange, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.max !== "") {
      writer.uint32(10).string(message.max);
    }
    if (message.min !== "") {
      writer.uint32(18).string(message.min);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QuorumRange {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuorumRange();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.max = reader.string();
          break;
        case 2:
          message.min = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuorumRange {
    const obj = createBaseQuorumRange();
    if (isSet(object.max)) obj.max = String(object.max);
    if (isSet(object.min)) obj.min = String(object.min);
    return obj;
  },
  toJSON(message: QuorumRange): JsonSafe<QuorumRange> {
    const obj: any = {};
    message.max !== undefined && (obj.max = message.max);
    message.min !== undefined && (obj.min = message.min);
    return obj;
  },
  fromPartial(object: Partial<QuorumRange>): QuorumRange {
    const message = createBaseQuorumRange();
    message.max = object.max ?? "";
    message.min = object.min ?? "";
    return message;
  },
  fromAmino(object: QuorumRangeAmino): QuorumRange {
    const message = createBaseQuorumRange();
    if (object.max !== undefined && object.max !== null) {
      message.max = object.max;
    }
    if (object.min !== undefined && object.min !== null) {
      message.min = object.min;
    }
    return message;
  },
  toAmino(message: QuorumRange): QuorumRangeAmino {
    const obj: any = {};
    obj.max = message.max === "" ? undefined : message.max;
    obj.min = message.min === "" ? undefined : message.min;
    return obj;
  },
  fromAminoMsg(object: QuorumRangeAminoMsg): QuorumRange {
    return QuorumRange.fromAmino(object.value);
  },
  fromProtoMsg(message: QuorumRangeProtoMsg): QuorumRange {
    return QuorumRange.decode(message.value);
  },
  toProto(message: QuorumRange): Uint8Array {
    return QuorumRange.encode(message).finish();
  },
  toProtoMsg(message: QuorumRange): QuorumRangeProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.QuorumRange",
      value: QuorumRange.encode(message).finish(),
    };
  },
};
function createBaseGovernor(): Governor {
  return {
    governorAddress: "",
    status: 0,
    description: GovernorDescription.fromPartial({}),
    lastStatusChangeTime: undefined,
  };
}
export const Governor = {
  typeUrl: "/atomone.gov.v1.Governor",
  encode(message: Governor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.governorAddress !== "") {
      writer.uint32(10).string(message.governorAddress);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.description !== undefined) {
      GovernorDescription.encode(message.description, writer.uint32(26).fork()).ldelim();
    }
    if (message.lastStatusChangeTime !== undefined) {
      Timestamp.encode(message.lastStatusChangeTime, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Governor {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernor();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.governorAddress = reader.string();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.description = GovernorDescription.decode(reader, reader.uint32());
          break;
        case 4:
          message.lastStatusChangeTime = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Governor {
    const obj = createBaseGovernor();
    if (isSet(object.governorAddress)) obj.governorAddress = String(object.governorAddress);
    if (isSet(object.status)) obj.status = governorStatusFromJSON(object.status);
    if (isSet(object.description)) obj.description = GovernorDescription.fromJSON(object.description);
    if (isSet(object.lastStatusChangeTime))
      obj.lastStatusChangeTime = fromJsonTimestamp(object.lastStatusChangeTime);
    return obj;
  },
  toJSON(message: Governor): JsonSafe<Governor> {
    const obj: any = {};
    message.governorAddress !== undefined && (obj.governorAddress = message.governorAddress);
    message.status !== undefined && (obj.status = governorStatusToJSON(message.status));
    message.description !== undefined &&
      (obj.description = message.description ? GovernorDescription.toJSON(message.description) : undefined);
    message.lastStatusChangeTime !== undefined &&
      (obj.lastStatusChangeTime = fromTimestamp(message.lastStatusChangeTime).toISOString());
    return obj;
  },
  fromPartial(object: Partial<Governor>): Governor {
    const message = createBaseGovernor();
    message.governorAddress = object.governorAddress ?? "";
    message.status = object.status ?? 0;
    if (object.description !== undefined && object.description !== null) {
      message.description = GovernorDescription.fromPartial(object.description);
    }
    if (object.lastStatusChangeTime !== undefined && object.lastStatusChangeTime !== null) {
      message.lastStatusChangeTime = Timestamp.fromPartial(object.lastStatusChangeTime);
    }
    return message;
  },
  fromAmino(object: GovernorAmino): Governor {
    const message = createBaseGovernor();
    if (object.governor_address !== undefined && object.governor_address !== null) {
      message.governorAddress = object.governor_address;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = GovernorDescription.fromAmino(object.description);
    }
    if (object.last_status_change_time !== undefined && object.last_status_change_time !== null) {
      message.lastStatusChangeTime = Timestamp.fromAmino(object.last_status_change_time);
    }
    return message;
  },
  toAmino(message: Governor): GovernorAmino {
    const obj: any = {};
    obj.governor_address = message.governorAddress === "" ? undefined : message.governorAddress;
    obj.status = message.status === 0 ? undefined : message.status;
    obj.description = message.description
      ? GovernorDescription.toAmino(message.description)
      : GovernorDescription.toAmino(GovernorDescription.fromPartial({}));
    obj.last_status_change_time = message.lastStatusChangeTime
      ? Timestamp.toAmino(message.lastStatusChangeTime)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: GovernorAminoMsg): Governor {
    return Governor.fromAmino(object.value);
  },
  fromProtoMsg(message: GovernorProtoMsg): Governor {
    return Governor.decode(message.value);
  },
  toProto(message: Governor): Uint8Array {
    return Governor.encode(message).finish();
  },
  toProtoMsg(message: Governor): GovernorProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.Governor",
      value: Governor.encode(message).finish(),
    };
  },
};
function createBaseGovernorDescription(): GovernorDescription {
  return {
    moniker: "",
    identity: "",
    website: "",
    securityContact: "",
    details: "",
  };
}
export const GovernorDescription = {
  typeUrl: "/atomone.gov.v1.GovernorDescription",
  encode(message: GovernorDescription, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.moniker !== "") {
      writer.uint32(10).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(18).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(26).string(message.website);
    }
    if (message.securityContact !== "") {
      writer.uint32(34).string(message.securityContact);
    }
    if (message.details !== "") {
      writer.uint32(42).string(message.details);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GovernorDescription {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernorDescription();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moniker = reader.string();
          break;
        case 2:
          message.identity = reader.string();
          break;
        case 3:
          message.website = reader.string();
          break;
        case 4:
          message.securityContact = reader.string();
          break;
        case 5:
          message.details = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GovernorDescription {
    const obj = createBaseGovernorDescription();
    if (isSet(object.moniker)) obj.moniker = String(object.moniker);
    if (isSet(object.identity)) obj.identity = String(object.identity);
    if (isSet(object.website)) obj.website = String(object.website);
    if (isSet(object.securityContact)) obj.securityContact = String(object.securityContact);
    if (isSet(object.details)) obj.details = String(object.details);
    return obj;
  },
  toJSON(message: GovernorDescription): JsonSafe<GovernorDescription> {
    const obj: any = {};
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.identity !== undefined && (obj.identity = message.identity);
    message.website !== undefined && (obj.website = message.website);
    message.securityContact !== undefined && (obj.securityContact = message.securityContact);
    message.details !== undefined && (obj.details = message.details);
    return obj;
  },
  fromPartial(object: Partial<GovernorDescription>): GovernorDescription {
    const message = createBaseGovernorDescription();
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.securityContact = object.securityContact ?? "";
    message.details = object.details ?? "";
    return message;
  },
  fromAmino(object: GovernorDescriptionAmino): GovernorDescription {
    const message = createBaseGovernorDescription();
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.security_contact !== undefined && object.security_contact !== null) {
      message.securityContact = object.security_contact;
    }
    if (object.details !== undefined && object.details !== null) {
      message.details = object.details;
    }
    return message;
  },
  toAmino(message: GovernorDescription): GovernorDescriptionAmino {
    const obj: any = {};
    obj.moniker = message.moniker === "" ? undefined : message.moniker;
    obj.identity = message.identity === "" ? undefined : message.identity;
    obj.website = message.website === "" ? undefined : message.website;
    obj.security_contact = message.securityContact === "" ? undefined : message.securityContact;
    obj.details = message.details === "" ? undefined : message.details;
    return obj;
  },
  fromAminoMsg(object: GovernorDescriptionAminoMsg): GovernorDescription {
    return GovernorDescription.fromAmino(object.value);
  },
  fromProtoMsg(message: GovernorDescriptionProtoMsg): GovernorDescription {
    return GovernorDescription.decode(message.value);
  },
  toProto(message: GovernorDescription): Uint8Array {
    return GovernorDescription.encode(message).finish();
  },
  toProtoMsg(message: GovernorDescription): GovernorDescriptionProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.GovernorDescription",
      value: GovernorDescription.encode(message).finish(),
    };
  },
};
function createBaseGovernorValShares(): GovernorValShares {
  return {
    governorAddress: "",
    validatorAddress: "",
    shares: "",
  };
}
export const GovernorValShares = {
  typeUrl: "/atomone.gov.v1.GovernorValShares",
  encode(message: GovernorValShares, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.governorAddress !== "") {
      writer.uint32(10).string(message.governorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(message.shares);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GovernorValShares {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernorValShares();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.governorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.shares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GovernorValShares {
    const obj = createBaseGovernorValShares();
    if (isSet(object.governorAddress)) obj.governorAddress = String(object.governorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.shares)) obj.shares = String(object.shares);
    return obj;
  },
  toJSON(message: GovernorValShares): JsonSafe<GovernorValShares> {
    const obj: any = {};
    message.governorAddress !== undefined && (obj.governorAddress = message.governorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.shares !== undefined && (obj.shares = message.shares);
    return obj;
  },
  fromPartial(object: Partial<GovernorValShares>): GovernorValShares {
    const message = createBaseGovernorValShares();
    message.governorAddress = object.governorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    message.shares = object.shares ?? "";
    return message;
  },
  fromAmino(object: GovernorValSharesAmino): GovernorValShares {
    const message = createBaseGovernorValShares();
    if (object.governor_address !== undefined && object.governor_address !== null) {
      message.governorAddress = object.governor_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = object.shares;
    }
    return message;
  },
  toAmino(message: GovernorValShares): GovernorValSharesAmino {
    const obj: any = {};
    obj.governor_address = message.governorAddress === "" ? undefined : message.governorAddress;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.shares = message.shares === "" ? undefined : message.shares;
    return obj;
  },
  fromAminoMsg(object: GovernorValSharesAminoMsg): GovernorValShares {
    return GovernorValShares.fromAmino(object.value);
  },
  fromProtoMsg(message: GovernorValSharesProtoMsg): GovernorValShares {
    return GovernorValShares.decode(message.value);
  },
  toProto(message: GovernorValShares): Uint8Array {
    return GovernorValShares.encode(message).finish();
  },
  toProtoMsg(message: GovernorValShares): GovernorValSharesProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.GovernorValShares",
      value: GovernorValShares.encode(message).finish(),
    };
  },
};
function createBaseGovernanceDelegation(): GovernanceDelegation {
  return {
    delegatorAddress: "",
    governorAddress: "",
  };
}
export const GovernanceDelegation = {
  typeUrl: "/atomone.gov.v1.GovernanceDelegation",
  encode(message: GovernanceDelegation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.governorAddress !== "") {
      writer.uint32(18).string(message.governorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GovernanceDelegation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGovernanceDelegation();
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
  fromJSON(object: any): GovernanceDelegation {
    const obj = createBaseGovernanceDelegation();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.governorAddress)) obj.governorAddress = String(object.governorAddress);
    return obj;
  },
  toJSON(message: GovernanceDelegation): JsonSafe<GovernanceDelegation> {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.governorAddress !== undefined && (obj.governorAddress = message.governorAddress);
    return obj;
  },
  fromPartial(object: Partial<GovernanceDelegation>): GovernanceDelegation {
    const message = createBaseGovernanceDelegation();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.governorAddress = object.governorAddress ?? "";
    return message;
  },
  fromAmino(object: GovernanceDelegationAmino): GovernanceDelegation {
    const message = createBaseGovernanceDelegation();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.governor_address !== undefined && object.governor_address !== null) {
      message.governorAddress = object.governor_address;
    }
    return message;
  },
  toAmino(message: GovernanceDelegation): GovernanceDelegationAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress === "" ? undefined : message.delegatorAddress;
    obj.governor_address = message.governorAddress === "" ? undefined : message.governorAddress;
    return obj;
  },
  fromAminoMsg(object: GovernanceDelegationAminoMsg): GovernanceDelegation {
    return GovernanceDelegation.fromAmino(object.value);
  },
  fromProtoMsg(message: GovernanceDelegationProtoMsg): GovernanceDelegation {
    return GovernanceDelegation.decode(message.value);
  },
  toProto(message: GovernanceDelegation): Uint8Array {
    return GovernanceDelegation.encode(message).finish();
  },
  toProtoMsg(message: GovernanceDelegation): GovernanceDelegationProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.GovernanceDelegation",
      value: GovernanceDelegation.encode(message).finish(),
    };
  },
};
