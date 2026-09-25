/* eslint-disable */
import {
  Deposit,
  DepositAmino,
  Vote,
  VoteAmino,
  Proposal,
  ProposalAmino,
  DepositParams,
  DepositParamsAmino,
  VotingParams,
  VotingParamsAmino,
  TallyParams,
  TallyParamsAmino,
  Params,
  ParamsAmino,
  LastMinDeposit,
  LastMinDepositAmino,
  Governor,
  GovernorAmino,
  GovernanceDelegation,
  GovernanceDelegationAmino,
} from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "atomone.gov.v1";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
  /** starting_proposal_id is the ID of the starting proposal. */
  startingProposalId: bigint;
  /** deposits defines all the deposits present at genesis. */
  deposits: Deposit[];
  /** votes defines all the votes present at genesis. */
  votes: Vote[];
  /** proposals defines all the proposals present at genesis. */
  proposals: Proposal[];
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines all the paramaters of related to deposit.
   */
  /** @deprecated */
  depositParams?: DepositParams | undefined;
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines all the paramaters of related to voting.
   */
  /** @deprecated */
  votingParams?: VotingParams | undefined;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines all the paramaters of related to tally.
   */
  /** @deprecated */
  tallyParams?: TallyParams | undefined;
  /**
   * params defines all the paramaters of x/gov module.
   *
   * Since: cosmos-sdk 0.47
   */
  params?: Params | undefined;
  /**
   * The constitution allows builders to lay a foundation and define purpose.
   *
   * Since: cosmos-sdk 0.48
   */
  constitution: string;
  /** last updated value for the dynamic min deposit */
  lastMinDeposit?: LastMinDeposit | undefined;
  /** last updated value for the dynamic min initial deposit */
  lastMinInitialDeposit?: LastMinDeposit | undefined;
  /**
   * governance participation EMA
   * If unset or set to 0, the quorum for the next proposal will be set to the
   * params.MinQuorum value.
   */
  participationEma: string;
  /**
   * governance participation EMA for constitution amendment proposals.
   * If unset or set to 0, the quorum for the next constitution amendment
   * proposal will be set to the params.MinConstitutionAmendmentQuorum value.
   */
  constitutionAmendmentParticipationEma: string;
  /**
   * governance participation EMA for law proposals.
   * If unset or set to 0, the quorum for the next law proposal will be set to
   * the params.LawMinQuorum value.
   */
  lawParticipationEma: string;
  /** governors defines all the governors present at genesis. */
  governors: Governor[];
  /** governance_delegations defines all the governance delegations present at genesis. */
  governanceDelegations: GovernanceDelegation[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/atomone.gov.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the gov module's genesis state.
 * @name GenesisStateAmino
 * @package atomone.gov.v1
 * @see proto type: atomone.gov.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * starting_proposal_id is the ID of the starting proposal.
   */
  starting_proposal_id?: string;
  /**
   * deposits defines all the deposits present at genesis.
   */
  deposits?: DepositAmino[];
  /**
   * votes defines all the votes present at genesis.
   */
  votes?: VoteAmino[];
  /**
   * proposals defines all the proposals present at genesis.
   */
  proposals?: ProposalAmino[];
  /**
   * Deprecated: Prefer to use `params` instead.
   * deposit_params defines all the paramaters of related to deposit.
   * @deprecated
   */
  deposit_params?: DepositParamsAmino | undefined;
  /**
   * Deprecated: Prefer to use `params` instead.
   * voting_params defines all the paramaters of related to voting.
   * @deprecated
   */
  voting_params?: VotingParamsAmino | undefined;
  /**
   * Deprecated: Prefer to use `params` instead.
   * tally_params defines all the paramaters of related to tally.
   * @deprecated
   */
  tally_params?: TallyParamsAmino | undefined;
  /**
   * params defines all the paramaters of x/gov module.
   *
   * Since: cosmos-sdk 0.47
   */
  params?: ParamsAmino | undefined;
  /**
   * The constitution allows builders to lay a foundation and define purpose.
   *
   * Since: cosmos-sdk 0.48
   */
  constitution?: string;
  /**
   * last updated value for the dynamic min deposit
   */
  last_min_deposit?: LastMinDepositAmino | undefined;
  /**
   * last updated value for the dynamic min initial deposit
   */
  last_min_initial_deposit?: LastMinDepositAmino | undefined;
  /**
   * governance participation EMA
   * If unset or set to 0, the quorum for the next proposal will be set to the
   * params.MinQuorum value.
   */
  participation_ema?: string;
  /**
   * governance participation EMA for constitution amendment proposals.
   * If unset or set to 0, the quorum for the next constitution amendment
   * proposal will be set to the params.MinConstitutionAmendmentQuorum value.
   */
  constitution_amendment_participation_ema?: string;
  /**
   * governance participation EMA for law proposals.
   * If unset or set to 0, the quorum for the next law proposal will be set to
   * the params.LawMinQuorum value.
   */
  law_participation_ema?: string;
  /**
   * governors defines all the governors present at genesis.
   */
  governors?: GovernorAmino[];
  /**
   * governance_delegations defines all the governance delegations present at genesis.
   */
  governance_delegations?: GovernanceDelegationAmino[];
}
export interface GenesisStateAminoMsg {
  type: "/atomone.gov.v1.GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    startingProposalId: BigInt(0),
    deposits: [],
    votes: [],
    proposals: [],
    depositParams: undefined,
    votingParams: undefined,
    tallyParams: undefined,
    params: undefined,
    constitution: "",
    lastMinDeposit: undefined,
    lastMinInitialDeposit: undefined,
    participationEma: "",
    constitutionAmendmentParticipationEma: "",
    lawParticipationEma: "",
    governors: [],
    governanceDelegations: [],
  };
}
export const GenesisState = {
  typeUrl: "/atomone.gov.v1.GenesisState",
  is(o: any): o is GenesisState {
    return (
      o &&
      (o.$typeUrl === GenesisState.typeUrl ||
        (typeof o.startingProposalId === "bigint" &&
          Array.isArray(o.deposits) &&
          (!o.deposits.length || Deposit.is(o.deposits[0])) &&
          Array.isArray(o.votes) &&
          (!o.votes.length || Vote.is(o.votes[0])) &&
          Array.isArray(o.proposals) &&
          (!o.proposals.length || Proposal.is(o.proposals[0])) &&
          typeof o.constitution === "string" &&
          typeof o.participationEma === "string" &&
          typeof o.constitutionAmendmentParticipationEma === "string" &&
          typeof o.lawParticipationEma === "string" &&
          Array.isArray(o.governors) &&
          (!o.governors.length || Governor.is(o.governors[0])) &&
          Array.isArray(o.governanceDelegations) &&
          (!o.governanceDelegations.length || GovernanceDelegation.is(o.governanceDelegations[0]))))
    );
  },
  isAmino(o: any): o is GenesisStateAmino {
    return (
      o &&
      (o.$typeUrl === GenesisState.typeUrl ||
        (typeof o.starting_proposal_id === "bigint" &&
          Array.isArray(o.deposits) &&
          (!o.deposits.length || Deposit.isAmino(o.deposits[0])) &&
          Array.isArray(o.votes) &&
          (!o.votes.length || Vote.isAmino(o.votes[0])) &&
          Array.isArray(o.proposals) &&
          (!o.proposals.length || Proposal.isAmino(o.proposals[0])) &&
          typeof o.constitution === "string" &&
          typeof o.participation_ema === "string" &&
          typeof o.constitution_amendment_participation_ema === "string" &&
          typeof o.law_participation_ema === "string" &&
          Array.isArray(o.governors) &&
          (!o.governors.length || Governor.isAmino(o.governors[0])) &&
          Array.isArray(o.governance_delegations) &&
          (!o.governance_delegations.length || GovernanceDelegation.isAmino(o.governance_delegations[0]))))
    );
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startingProposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.startingProposalId);
    }
    for (const v of message.deposits) {
      Deposit.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.votes) {
      Vote.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(42).fork()).ldelim();
    }
    if (message.votingParams !== undefined) {
      VotingParams.encode(message.votingParams, writer.uint32(50).fork()).ldelim();
    }
    if (message.tallyParams !== undefined) {
      TallyParams.encode(message.tallyParams, writer.uint32(58).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(66).fork()).ldelim();
    }
    if (message.constitution !== "") {
      writer.uint32(74).string(message.constitution);
    }
    if (message.lastMinDeposit !== undefined) {
      LastMinDeposit.encode(message.lastMinDeposit, writer.uint32(82).fork()).ldelim();
    }
    if (message.lastMinInitialDeposit !== undefined) {
      LastMinDeposit.encode(message.lastMinInitialDeposit, writer.uint32(90).fork()).ldelim();
    }
    if (message.participationEma !== "") {
      writer.uint32(98).string(message.participationEma);
    }
    if (message.constitutionAmendmentParticipationEma !== "") {
      writer.uint32(106).string(message.constitutionAmendmentParticipationEma);
    }
    if (message.lawParticipationEma !== "") {
      writer.uint32(114).string(message.lawParticipationEma);
    }
    for (const v of message.governors) {
      Governor.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    for (const v of message.governanceDelegations) {
      GovernanceDelegation.encode(v!, writer.uint32(130).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.startingProposalId = reader.uint64();
          break;
        case 2:
          message.deposits.push(Deposit.decode(reader, reader.uint32()));
          break;
        case 3:
          message.votes.push(Vote.decode(reader, reader.uint32()));
          break;
        case 4:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 5:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;
        case 6:
          message.votingParams = VotingParams.decode(reader, reader.uint32());
          break;
        case 7:
          message.tallyParams = TallyParams.decode(reader, reader.uint32());
          break;
        case 8:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 9:
          message.constitution = reader.string();
          break;
        case 10:
          message.lastMinDeposit = LastMinDeposit.decode(reader, reader.uint32());
          break;
        case 11:
          message.lastMinInitialDeposit = LastMinDeposit.decode(reader, reader.uint32());
          break;
        case 12:
          message.participationEma = reader.string();
          break;
        case 13:
          message.constitutionAmendmentParticipationEma = reader.string();
          break;
        case 14:
          message.lawParticipationEma = reader.string();
          break;
        case 15:
          message.governors.push(Governor.decode(reader, reader.uint32()));
          break;
        case 16:
          message.governanceDelegations.push(GovernanceDelegation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.startingProposalId))
      obj.startingProposalId = BigInt(object.startingProposalId.toString());
    if (Array.isArray(object?.deposits)) obj.deposits = object.deposits.map((e: any) => Deposit.fromJSON(e));
    if (Array.isArray(object?.votes)) obj.votes = object.votes.map((e: any) => Vote.fromJSON(e));
    if (Array.isArray(object?.proposals))
      obj.proposals = object.proposals.map((e: any) => Proposal.fromJSON(e));
    if (isSet(object.depositParams)) obj.depositParams = DepositParams.fromJSON(object.depositParams);
    if (isSet(object.votingParams)) obj.votingParams = VotingParams.fromJSON(object.votingParams);
    if (isSet(object.tallyParams)) obj.tallyParams = TallyParams.fromJSON(object.tallyParams);
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.constitution)) obj.constitution = String(object.constitution);
    if (isSet(object.lastMinDeposit)) obj.lastMinDeposit = LastMinDeposit.fromJSON(object.lastMinDeposit);
    if (isSet(object.lastMinInitialDeposit))
      obj.lastMinInitialDeposit = LastMinDeposit.fromJSON(object.lastMinInitialDeposit);
    if (isSet(object.participationEma)) obj.participationEma = String(object.participationEma);
    if (isSet(object.constitutionAmendmentParticipationEma))
      obj.constitutionAmendmentParticipationEma = String(object.constitutionAmendmentParticipationEma);
    if (isSet(object.lawParticipationEma)) obj.lawParticipationEma = String(object.lawParticipationEma);
    if (Array.isArray(object?.governors))
      obj.governors = object.governors.map((e: any) => Governor.fromJSON(e));
    if (Array.isArray(object?.governanceDelegations))
      obj.governanceDelegations = object.governanceDelegations.map((e: any) =>
        GovernanceDelegation.fromJSON(e),
      );
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.startingProposalId !== undefined &&
      (obj.startingProposalId = (message.startingProposalId || BigInt(0)).toString());
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => (e ? Deposit.toJSON(e) : undefined));
    } else {
      obj.deposits = [];
    }
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toJSON(e) : undefined));
    } else {
      obj.votes = [];
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => (e ? Proposal.toJSON(e) : undefined));
    } else {
      obj.proposals = [];
    }
    message.depositParams !== undefined &&
      (obj.depositParams = message.depositParams ? DepositParams.toJSON(message.depositParams) : undefined);
    message.votingParams !== undefined &&
      (obj.votingParams = message.votingParams ? VotingParams.toJSON(message.votingParams) : undefined);
    message.tallyParams !== undefined &&
      (obj.tallyParams = message.tallyParams ? TallyParams.toJSON(message.tallyParams) : undefined);
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.constitution !== undefined && (obj.constitution = message.constitution);
    message.lastMinDeposit !== undefined &&
      (obj.lastMinDeposit = message.lastMinDeposit
        ? LastMinDeposit.toJSON(message.lastMinDeposit)
        : undefined);
    message.lastMinInitialDeposit !== undefined &&
      (obj.lastMinInitialDeposit = message.lastMinInitialDeposit
        ? LastMinDeposit.toJSON(message.lastMinInitialDeposit)
        : undefined);
    message.participationEma !== undefined && (obj.participationEma = message.participationEma);
    message.constitutionAmendmentParticipationEma !== undefined &&
      (obj.constitutionAmendmentParticipationEma = message.constitutionAmendmentParticipationEma);
    message.lawParticipationEma !== undefined && (obj.lawParticipationEma = message.lawParticipationEma);
    if (message.governors) {
      obj.governors = message.governors.map((e) => (e ? Governor.toJSON(e) : undefined));
    } else {
      obj.governors = [];
    }
    if (message.governanceDelegations) {
      obj.governanceDelegations = message.governanceDelegations.map((e) =>
        e ? GovernanceDelegation.toJSON(e) : undefined,
      );
    } else {
      obj.governanceDelegations = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.startingProposalId !== undefined && object.startingProposalId !== null) {
      message.startingProposalId = BigInt(object.startingProposalId.toString());
    }
    message.deposits = object.deposits?.map((e) => Deposit.fromPartial(e)) || [];
    message.votes = object.votes?.map((e) => Vote.fromPartial(e)) || [];
    message.proposals = object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
    if (object.depositParams !== undefined && object.depositParams !== null) {
      message.depositParams = DepositParams.fromPartial(object.depositParams);
    }
    if (object.votingParams !== undefined && object.votingParams !== null) {
      message.votingParams = VotingParams.fromPartial(object.votingParams);
    }
    if (object.tallyParams !== undefined && object.tallyParams !== null) {
      message.tallyParams = TallyParams.fromPartial(object.tallyParams);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    message.constitution = object.constitution ?? "";
    if (object.lastMinDeposit !== undefined && object.lastMinDeposit !== null) {
      message.lastMinDeposit = LastMinDeposit.fromPartial(object.lastMinDeposit);
    }
    if (object.lastMinInitialDeposit !== undefined && object.lastMinInitialDeposit !== null) {
      message.lastMinInitialDeposit = LastMinDeposit.fromPartial(object.lastMinInitialDeposit);
    }
    message.participationEma = object.participationEma ?? "";
    message.constitutionAmendmentParticipationEma = object.constitutionAmendmentParticipationEma ?? "";
    message.lawParticipationEma = object.lawParticipationEma ?? "";
    message.governors = object.governors?.map((e) => Governor.fromPartial(e)) || [];
    message.governanceDelegations =
      object.governanceDelegations?.map((e) => GovernanceDelegation.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.starting_proposal_id !== undefined && object.starting_proposal_id !== null) {
      message.startingProposalId = BigInt(object.starting_proposal_id);
    }
    message.deposits = object.deposits?.map((e) => Deposit.fromAmino(e)) || [];
    message.votes = object.votes?.map((e) => Vote.fromAmino(e)) || [];
    message.proposals = object.proposals?.map((e) => Proposal.fromAmino(e)) || [];
    if (object.deposit_params !== undefined && object.deposit_params !== null) {
      message.depositParams = DepositParams.fromAmino(object.deposit_params);
    }
    if (object.voting_params !== undefined && object.voting_params !== null) {
      message.votingParams = VotingParams.fromAmino(object.voting_params);
    }
    if (object.tally_params !== undefined && object.tally_params !== null) {
      message.tallyParams = TallyParams.fromAmino(object.tally_params);
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.constitution !== undefined && object.constitution !== null) {
      message.constitution = object.constitution;
    }
    if (object.last_min_deposit !== undefined && object.last_min_deposit !== null) {
      message.lastMinDeposit = LastMinDeposit.fromAmino(object.last_min_deposit);
    }
    if (object.last_min_initial_deposit !== undefined && object.last_min_initial_deposit !== null) {
      message.lastMinInitialDeposit = LastMinDeposit.fromAmino(object.last_min_initial_deposit);
    }
    if (object.participation_ema !== undefined && object.participation_ema !== null) {
      message.participationEma = object.participation_ema;
    }
    if (
      object.constitution_amendment_participation_ema !== undefined &&
      object.constitution_amendment_participation_ema !== null
    ) {
      message.constitutionAmendmentParticipationEma = object.constitution_amendment_participation_ema;
    }
    if (object.law_participation_ema !== undefined && object.law_participation_ema !== null) {
      message.lawParticipationEma = object.law_participation_ema;
    }
    message.governors = object.governors?.map((e) => Governor.fromAmino(e)) || [];
    message.governanceDelegations =
      object.governance_delegations?.map((e) => GovernanceDelegation.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.starting_proposal_id =
      message.startingProposalId !== BigInt(0) ? message.startingProposalId?.toString() : undefined;
    if (message.deposits) {
      obj.deposits = message.deposits.map((e) => (e ? Deposit.toAmino(e) : undefined));
    } else {
      obj.deposits = message.deposits;
    }
    if (message.votes) {
      obj.votes = message.votes.map((e) => (e ? Vote.toAmino(e) : undefined));
    } else {
      obj.votes = message.votes;
    }
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) => (e ? Proposal.toAmino(e) : undefined));
    } else {
      obj.proposals = message.proposals;
    }
    obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : undefined;
    obj.voting_params = message.votingParams ? VotingParams.toAmino(message.votingParams) : undefined;
    obj.tally_params = message.tallyParams ? TallyParams.toAmino(message.tallyParams) : undefined;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.constitution = message.constitution === "" ? undefined : message.constitution;
    obj.last_min_deposit = message.lastMinDeposit
      ? LastMinDeposit.toAmino(message.lastMinDeposit)
      : undefined;
    obj.last_min_initial_deposit = message.lastMinInitialDeposit
      ? LastMinDeposit.toAmino(message.lastMinInitialDeposit)
      : undefined;
    obj.participation_ema = message.participationEma === "" ? undefined : message.participationEma;
    obj.constitution_amendment_participation_ema =
      message.constitutionAmendmentParticipationEma === ""
        ? undefined
        : message.constitutionAmendmentParticipationEma;
    obj.law_participation_ema = message.lawParticipationEma === "" ? undefined : message.lawParticipationEma;
    if (message.governors) {
      obj.governors = message.governors.map((e) => (e ? Governor.toAmino(e) : undefined));
    } else {
      obj.governors = message.governors;
    }
    if (message.governanceDelegations) {
      obj.governance_delegations = message.governanceDelegations.map((e) =>
        e ? GovernanceDelegation.toAmino(e) : undefined,
      );
    } else {
      obj.governance_delegations = message.governanceDelegations;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/atomone.gov.v1.GenesisState",
      value: GenesisState.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
