/* eslint-disable */
import {
  ProposalExecutorResult,
  ProposalStatus,
  TallyResult,
  TallyResultAmino,
  proposalExecutorResultFromJSON,
  proposalExecutorResultToJSON,
  proposalStatusFromJSON,
  proposalStatusToJSON,
} from "./types";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.group.v1";
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
export interface EventCreateGroupProtoMsg {
  typeUrl: "/cosmos.group.v1.EventCreateGroup";
  value: Uint8Array;
}
/** EventCreateGroup is an event emitted when a group is created. */
export interface EventCreateGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
}
export interface EventCreateGroupAminoMsg {
  type: "cosmos-sdk/EventCreateGroup";
  value: EventCreateGroupAmino;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
}
export interface EventUpdateGroupProtoMsg {
  typeUrl: "/cosmos.group.v1.EventUpdateGroup";
  value: Uint8Array;
}
/** EventUpdateGroup is an event emitted when a group is updated. */
export interface EventUpdateGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
}
export interface EventUpdateGroupAminoMsg {
  type: "cosmos-sdk/EventUpdateGroup";
  value: EventUpdateGroupAmino;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}
export interface EventCreateGroupPolicyProtoMsg {
  typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy";
  value: Uint8Array;
}
/** EventCreateGroupPolicy is an event emitted when a group policy is created. */
export interface EventCreateGroupPolicyAmino {
  /** address is the account address of the group policy. */
  address?: string;
}
export interface EventCreateGroupPolicyAminoMsg {
  type: "cosmos-sdk/EventCreateGroupPolicy";
  value: EventCreateGroupPolicyAmino;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicy {
  /** address is the account address of the group policy. */
  address: string;
}
export interface EventUpdateGroupPolicyProtoMsg {
  typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy";
  value: Uint8Array;
}
/** EventUpdateGroupPolicy is an event emitted when a group policy is updated. */
export interface EventUpdateGroupPolicyAmino {
  /** address is the account address of the group policy. */
  address?: string;
}
export interface EventUpdateGroupPolicyAminoMsg {
  type: "cosmos-sdk/EventUpdateGroupPolicy";
  value: EventUpdateGroupPolicyAmino;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
export interface EventSubmitProposalProtoMsg {
  typeUrl: "/cosmos.group.v1.EventSubmitProposal";
  value: Uint8Array;
}
/** EventSubmitProposal is an event emitted when a proposal is created. */
export interface EventSubmitProposalAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
}
export interface EventSubmitProposalAminoMsg {
  type: "cosmos-sdk/EventSubmitProposal";
  value: EventSubmitProposalAmino;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposal {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
export interface EventWithdrawProposalProtoMsg {
  typeUrl: "/cosmos.group.v1.EventWithdrawProposal";
  value: Uint8Array;
}
/** EventWithdrawProposal is an event emitted when a proposal is withdrawn. */
export interface EventWithdrawProposalAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
}
export interface EventWithdrawProposalAminoMsg {
  type: "cosmos-sdk/EventWithdrawProposal";
  value: EventWithdrawProposalAmino;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVote {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
}
export interface EventVoteProtoMsg {
  typeUrl: "/cosmos.group.v1.EventVote";
  value: Uint8Array;
}
/** EventVote is an event emitted when a voter votes on a proposal. */
export interface EventVoteAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
}
export interface EventVoteAminoMsg {
  type: "cosmos-sdk/EventVote";
  value: EventVoteAmino;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExec {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
  /** result is the proposal execution result. */
  result: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs: string;
}
export interface EventExecProtoMsg {
  typeUrl: "/cosmos.group.v1.EventExec";
  value: Uint8Array;
}
/** EventExec is an event emitted when a proposal is executed. */
export interface EventExecAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
  /** result is the proposal execution result. */
  result?: ProposalExecutorResult;
  /** logs contains error logs in case the execution result is FAILURE. */
  logs?: string;
}
export interface EventExecAminoMsg {
  type: "cosmos-sdk/EventExec";
  value: EventExecAmino;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroup {
  /** group_id is the unique ID of the group. */
  groupId: bigint;
  /** address is the account address of the group member. */
  address: string;
}
export interface EventLeaveGroupProtoMsg {
  typeUrl: "/cosmos.group.v1.EventLeaveGroup";
  value: Uint8Array;
}
/** EventLeaveGroup is an event emitted when group member leaves the group. */
export interface EventLeaveGroupAmino {
  /** group_id is the unique ID of the group. */
  group_id?: string;
  /** address is the account address of the group member. */
  address?: string;
}
export interface EventLeaveGroupAminoMsg {
  type: "cosmos-sdk/EventLeaveGroup";
  value: EventLeaveGroupAmino;
}
/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPruned {
  /** proposal_id is the unique ID of the proposal. */
  proposalId: bigint;
  /** status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN). */
  status: ProposalStatus;
  /** tally_result is the proposal tally result (when applicable). */
  tallyResult?: TallyResult | undefined;
}
export interface EventProposalPrunedProtoMsg {
  typeUrl: "/cosmos.group.v1.EventProposalPruned";
  value: Uint8Array;
}
/** EventProposalPruned is an event emitted when a proposal is pruned. */
export interface EventProposalPrunedAmino {
  /** proposal_id is the unique ID of the proposal. */
  proposal_id?: string;
  /** status is the proposal status (UNSPECIFIED, SUBMITTED, ACCEPTED, REJECTED, ABORTED, WITHDRAWN). */
  status?: ProposalStatus;
  /** tally_result is the proposal tally result (when applicable). */
  tally_result?: TallyResultAmino | undefined;
}
export interface EventProposalPrunedAminoMsg {
  type: "cosmos-sdk/EventProposalPruned";
  value: EventProposalPrunedAmino;
}
function createBaseEventCreateGroup(): EventCreateGroup {
  return {
    groupId: BigInt(0),
  };
}
export const EventCreateGroup = {
  typeUrl: "/cosmos.group.v1.EventCreateGroup",
  aminoType: "cosmos-sdk/EventCreateGroup",
  is(o: any): o is EventCreateGroup {
    return o && (o.$typeUrl === EventCreateGroup.typeUrl || typeof o.groupId === "bigint");
  },
  isAmino(o: any): o is EventCreateGroupAmino {
    return o && (o.$typeUrl === EventCreateGroup.typeUrl || typeof o.group_id === "bigint");
  },
  encode(message: EventCreateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateGroup {
    const obj = createBaseEventCreateGroup();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    return obj;
  },
  toJSON(message: EventCreateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventCreateGroup>): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    return message;
  },
  fromAmino(object: EventCreateGroupAmino): EventCreateGroup {
    const message = createBaseEventCreateGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: EventCreateGroup): EventCreateGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventCreateGroupAminoMsg): EventCreateGroup {
    return EventCreateGroup.fromAmino(object.value);
  },
  toAminoMsg(message: EventCreateGroup): EventCreateGroupAminoMsg {
    return {
      type: "cosmos-sdk/EventCreateGroup",
      value: EventCreateGroup.toAmino(message),
    };
  },
  fromProtoMsg(message: EventCreateGroupProtoMsg): EventCreateGroup {
    return EventCreateGroup.decode(message.value);
  },
  toProto(message: EventCreateGroup): Uint8Array {
    return EventCreateGroup.encode(message).finish();
  },
  toProtoMsg(message: EventCreateGroup): EventCreateGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventCreateGroup",
      value: EventCreateGroup.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(EventCreateGroup.typeUrl, EventCreateGroup);
GlobalDecoderRegistry.registerAminoProtoMapping(EventCreateGroup.aminoType, EventCreateGroup.typeUrl);
function createBaseEventUpdateGroup(): EventUpdateGroup {
  return {
    groupId: BigInt(0),
  };
}
export const EventUpdateGroup = {
  typeUrl: "/cosmos.group.v1.EventUpdateGroup",
  aminoType: "cosmos-sdk/EventUpdateGroup",
  is(o: any): o is EventUpdateGroup {
    return o && (o.$typeUrl === EventUpdateGroup.typeUrl || typeof o.groupId === "bigint");
  },
  isAmino(o: any): o is EventUpdateGroupAmino {
    return o && (o.$typeUrl === EventUpdateGroup.typeUrl || typeof o.group_id === "bigint");
  },
  encode(message: EventUpdateGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateGroup {
    const obj = createBaseEventUpdateGroup();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    return obj;
  },
  toJSON(message: EventUpdateGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventUpdateGroup>): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    return message;
  },
  fromAmino(object: EventUpdateGroupAmino): EventUpdateGroup {
    const message = createBaseEventUpdateGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    return message;
  },
  toAmino(message: EventUpdateGroup): EventUpdateGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventUpdateGroupAminoMsg): EventUpdateGroup {
    return EventUpdateGroup.fromAmino(object.value);
  },
  toAminoMsg(message: EventUpdateGroup): EventUpdateGroupAminoMsg {
    return {
      type: "cosmos-sdk/EventUpdateGroup",
      value: EventUpdateGroup.toAmino(message),
    };
  },
  fromProtoMsg(message: EventUpdateGroupProtoMsg): EventUpdateGroup {
    return EventUpdateGroup.decode(message.value);
  },
  toProto(message: EventUpdateGroup): Uint8Array {
    return EventUpdateGroup.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateGroup): EventUpdateGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventUpdateGroup",
      value: EventUpdateGroup.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(EventUpdateGroup.typeUrl, EventUpdateGroup);
GlobalDecoderRegistry.registerAminoProtoMapping(EventUpdateGroup.aminoType, EventUpdateGroup.typeUrl);
function createBaseEventCreateGroupPolicy(): EventCreateGroupPolicy {
  return {
    address: "",
  };
}
export const EventCreateGroupPolicy = {
  typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
  aminoType: "cosmos-sdk/EventCreateGroupPolicy",
  is(o: any): o is EventCreateGroupPolicy {
    return o && (o.$typeUrl === EventCreateGroupPolicy.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is EventCreateGroupPolicyAmino {
    return o && (o.$typeUrl === EventCreateGroupPolicy.typeUrl || typeof o.address === "string");
  },
  encode(message: EventCreateGroupPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventCreateGroupPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCreateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventCreateGroupPolicy {
    const obj = createBaseEventCreateGroupPolicy();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: EventCreateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<EventCreateGroupPolicy>): EventCreateGroupPolicy {
    const message = createBaseEventCreateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventCreateGroupPolicyAmino): EventCreateGroupPolicy {
    const message = createBaseEventCreateGroupPolicy();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventCreateGroupPolicy): EventCreateGroupPolicyAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: EventCreateGroupPolicyAminoMsg): EventCreateGroupPolicy {
    return EventCreateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: EventCreateGroupPolicy): EventCreateGroupPolicyAminoMsg {
    return {
      type: "cosmos-sdk/EventCreateGroupPolicy",
      value: EventCreateGroupPolicy.toAmino(message),
    };
  },
  fromProtoMsg(message: EventCreateGroupPolicyProtoMsg): EventCreateGroupPolicy {
    return EventCreateGroupPolicy.decode(message.value);
  },
  toProto(message: EventCreateGroupPolicy): Uint8Array {
    return EventCreateGroupPolicy.encode(message).finish();
  },
  toProtoMsg(message: EventCreateGroupPolicy): EventCreateGroupPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventCreateGroupPolicy",
      value: EventCreateGroupPolicy.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(EventCreateGroupPolicy.typeUrl, EventCreateGroupPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(
  EventCreateGroupPolicy.aminoType,
  EventCreateGroupPolicy.typeUrl,
);
function createBaseEventUpdateGroupPolicy(): EventUpdateGroupPolicy {
  return {
    address: "",
  };
}
export const EventUpdateGroupPolicy = {
  typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
  aminoType: "cosmos-sdk/EventUpdateGroupPolicy",
  is(o: any): o is EventUpdateGroupPolicy {
    return o && (o.$typeUrl === EventUpdateGroupPolicy.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is EventUpdateGroupPolicyAmino {
    return o && (o.$typeUrl === EventUpdateGroupPolicy.typeUrl || typeof o.address === "string");
  },
  encode(message: EventUpdateGroupPolicy, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventUpdateGroupPolicy {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateGroupPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventUpdateGroupPolicy {
    const obj = createBaseEventUpdateGroupPolicy();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: EventUpdateGroupPolicy): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<EventUpdateGroupPolicy>): EventUpdateGroupPolicy {
    const message = createBaseEventUpdateGroupPolicy();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventUpdateGroupPolicyAmino): EventUpdateGroupPolicy {
    const message = createBaseEventUpdateGroupPolicy();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: EventUpdateGroupPolicyAminoMsg): EventUpdateGroupPolicy {
    return EventUpdateGroupPolicy.fromAmino(object.value);
  },
  toAminoMsg(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyAminoMsg {
    return {
      type: "cosmos-sdk/EventUpdateGroupPolicy",
      value: EventUpdateGroupPolicy.toAmino(message),
    };
  },
  fromProtoMsg(message: EventUpdateGroupPolicyProtoMsg): EventUpdateGroupPolicy {
    return EventUpdateGroupPolicy.decode(message.value);
  },
  toProto(message: EventUpdateGroupPolicy): Uint8Array {
    return EventUpdateGroupPolicy.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateGroupPolicy): EventUpdateGroupPolicyProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventUpdateGroupPolicy",
      value: EventUpdateGroupPolicy.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(EventUpdateGroupPolicy.typeUrl, EventUpdateGroupPolicy);
GlobalDecoderRegistry.registerAminoProtoMapping(
  EventUpdateGroupPolicy.aminoType,
  EventUpdateGroupPolicy.typeUrl,
);
function createBaseEventSubmitProposal(): EventSubmitProposal {
  return {
    proposalId: BigInt(0),
  };
}
export const EventSubmitProposal = {
  typeUrl: "/cosmos.group.v1.EventSubmitProposal",
  aminoType: "cosmos-sdk/EventSubmitProposal",
  is(o: any): o is EventSubmitProposal {
    return o && (o.$typeUrl === EventSubmitProposal.typeUrl || typeof o.proposalId === "bigint");
  },
  isAmino(o: any): o is EventSubmitProposalAmino {
    return o && (o.$typeUrl === EventSubmitProposal.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: EventSubmitProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventSubmitProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSubmitProposal();
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
  fromJSON(object: any): EventSubmitProposal {
    const obj = createBaseEventSubmitProposal();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: EventSubmitProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventSubmitProposal>): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromAmino(object: EventSubmitProposalAmino): EventSubmitProposal {
    const message = createBaseEventSubmitProposal();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: EventSubmitProposal): EventSubmitProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventSubmitProposalAminoMsg): EventSubmitProposal {
    return EventSubmitProposal.fromAmino(object.value);
  },
  toAminoMsg(message: EventSubmitProposal): EventSubmitProposalAminoMsg {
    return {
      type: "cosmos-sdk/EventSubmitProposal",
      value: EventSubmitProposal.toAmino(message),
    };
  },
  fromProtoMsg(message: EventSubmitProposalProtoMsg): EventSubmitProposal {
    return EventSubmitProposal.decode(message.value);
  },
  toProto(message: EventSubmitProposal): Uint8Array {
    return EventSubmitProposal.encode(message).finish();
  },
  toProtoMsg(message: EventSubmitProposal): EventSubmitProposalProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventSubmitProposal",
      value: EventSubmitProposal.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(EventSubmitProposal.typeUrl, EventSubmitProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(EventSubmitProposal.aminoType, EventSubmitProposal.typeUrl);
function createBaseEventWithdrawProposal(): EventWithdrawProposal {
  return {
    proposalId: BigInt(0),
  };
}
export const EventWithdrawProposal = {
  typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
  aminoType: "cosmos-sdk/EventWithdrawProposal",
  is(o: any): o is EventWithdrawProposal {
    return o && (o.$typeUrl === EventWithdrawProposal.typeUrl || typeof o.proposalId === "bigint");
  },
  isAmino(o: any): o is EventWithdrawProposalAmino {
    return o && (o.$typeUrl === EventWithdrawProposal.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: EventWithdrawProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventWithdrawProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventWithdrawProposal();
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
  fromJSON(object: any): EventWithdrawProposal {
    const obj = createBaseEventWithdrawProposal();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: EventWithdrawProposal): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventWithdrawProposal>): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromAmino(object: EventWithdrawProposalAmino): EventWithdrawProposal {
    const message = createBaseEventWithdrawProposal();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: EventWithdrawProposal): EventWithdrawProposalAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventWithdrawProposalAminoMsg): EventWithdrawProposal {
    return EventWithdrawProposal.fromAmino(object.value);
  },
  toAminoMsg(message: EventWithdrawProposal): EventWithdrawProposalAminoMsg {
    return {
      type: "cosmos-sdk/EventWithdrawProposal",
      value: EventWithdrawProposal.toAmino(message),
    };
  },
  fromProtoMsg(message: EventWithdrawProposalProtoMsg): EventWithdrawProposal {
    return EventWithdrawProposal.decode(message.value);
  },
  toProto(message: EventWithdrawProposal): Uint8Array {
    return EventWithdrawProposal.encode(message).finish();
  },
  toProtoMsg(message: EventWithdrawProposal): EventWithdrawProposalProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventWithdrawProposal",
      value: EventWithdrawProposal.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(EventWithdrawProposal.typeUrl, EventWithdrawProposal);
GlobalDecoderRegistry.registerAminoProtoMapping(
  EventWithdrawProposal.aminoType,
  EventWithdrawProposal.typeUrl,
);
function createBaseEventVote(): EventVote {
  return {
    proposalId: BigInt(0),
  };
}
export const EventVote = {
  typeUrl: "/cosmos.group.v1.EventVote",
  aminoType: "cosmos-sdk/EventVote",
  is(o: any): o is EventVote {
    return o && (o.$typeUrl === EventVote.typeUrl || typeof o.proposalId === "bigint");
  },
  isAmino(o: any): o is EventVoteAmino {
    return o && (o.$typeUrl === EventVote.typeUrl || typeof o.proposal_id === "bigint");
  },
  encode(message: EventVote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventVote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventVote();
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
  fromJSON(object: any): EventVote {
    const obj = createBaseEventVote();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: EventVote): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<EventVote>): EventVote {
    const message = createBaseEventVote();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromAmino(object: EventVoteAmino): EventVote {
    const message = createBaseEventVote();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: EventVote): EventVoteAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: EventVoteAminoMsg): EventVote {
    return EventVote.fromAmino(object.value);
  },
  toAminoMsg(message: EventVote): EventVoteAminoMsg {
    return {
      type: "cosmos-sdk/EventVote",
      value: EventVote.toAmino(message),
    };
  },
  fromProtoMsg(message: EventVoteProtoMsg): EventVote {
    return EventVote.decode(message.value);
  },
  toProto(message: EventVote): Uint8Array {
    return EventVote.encode(message).finish();
  },
  toProtoMsg(message: EventVote): EventVoteProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventVote",
      value: EventVote.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(EventVote.typeUrl, EventVote);
GlobalDecoderRegistry.registerAminoProtoMapping(EventVote.aminoType, EventVote.typeUrl);
function createBaseEventExec(): EventExec {
  return {
    proposalId: BigInt(0),
    result: 0,
    logs: "",
  };
}
export const EventExec = {
  typeUrl: "/cosmos.group.v1.EventExec",
  aminoType: "cosmos-sdk/EventExec",
  is(o: any): o is EventExec {
    return (
      o &&
      (o.$typeUrl === EventExec.typeUrl ||
        (typeof o.proposalId === "bigint" && isSet(o.result) && typeof o.logs === "string"))
    );
  },
  isAmino(o: any): o is EventExecAmino {
    return (
      o &&
      (o.$typeUrl === EventExec.typeUrl ||
        (typeof o.proposal_id === "bigint" && isSet(o.result) && typeof o.logs === "string"))
    );
  },
  encode(message: EventExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.result !== 0) {
      writer.uint32(16).int32(message.result);
    }
    if (message.logs !== "") {
      writer.uint32(26).string(message.logs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.result = reader.int32() as any;
          break;
        case 3:
          message.logs = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventExec {
    const obj = createBaseEventExec();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.result)) obj.result = proposalExecutorResultFromJSON(object.result);
    if (isSet(object.logs)) obj.logs = String(object.logs);
    return obj;
  },
  toJSON(message: EventExec): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.result !== undefined && (obj.result = proposalExecutorResultToJSON(message.result));
    message.logs !== undefined && (obj.logs = message.logs);
    return obj;
  },
  fromPartial(object: Partial<EventExec>): EventExec {
    const message = createBaseEventExec();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.result = object.result ?? 0;
    message.logs = object.logs ?? "";
    return message;
  },
  fromAmino(object: EventExecAmino): EventExec {
    const message = createBaseEventExec();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = proposalExecutorResultFromJSON(object.result);
    }
    if (object.logs !== undefined && object.logs !== null) {
      message.logs = object.logs;
    }
    return message;
  },
  toAmino(message: EventExec): EventExecAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.result = message.result;
    obj.logs = message.logs;
    return obj;
  },
  fromAminoMsg(object: EventExecAminoMsg): EventExec {
    return EventExec.fromAmino(object.value);
  },
  toAminoMsg(message: EventExec): EventExecAminoMsg {
    return {
      type: "cosmos-sdk/EventExec",
      value: EventExec.toAmino(message),
    };
  },
  fromProtoMsg(message: EventExecProtoMsg): EventExec {
    return EventExec.decode(message.value);
  },
  toProto(message: EventExec): Uint8Array {
    return EventExec.encode(message).finish();
  },
  toProtoMsg(message: EventExec): EventExecProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventExec",
      value: EventExec.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(EventExec.typeUrl, EventExec);
GlobalDecoderRegistry.registerAminoProtoMapping(EventExec.aminoType, EventExec.typeUrl);
function createBaseEventLeaveGroup(): EventLeaveGroup {
  return {
    groupId: BigInt(0),
    address: "",
  };
}
export const EventLeaveGroup = {
  typeUrl: "/cosmos.group.v1.EventLeaveGroup",
  aminoType: "cosmos-sdk/EventLeaveGroup",
  is(o: any): o is EventLeaveGroup {
    return (
      o &&
      (o.$typeUrl === EventLeaveGroup.typeUrl ||
        (typeof o.groupId === "bigint" && typeof o.address === "string"))
    );
  },
  isAmino(o: any): o is EventLeaveGroupAmino {
    return (
      o &&
      (o.$typeUrl === EventLeaveGroup.typeUrl ||
        (typeof o.group_id === "bigint" && typeof o.address === "string"))
    );
  },
  encode(message: EventLeaveGroup, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.groupId !== BigInt(0)) {
      writer.uint32(8).uint64(message.groupId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventLeaveGroup {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLeaveGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.groupId = reader.uint64();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventLeaveGroup {
    const obj = createBaseEventLeaveGroup();
    if (isSet(object.groupId)) obj.groupId = BigInt(object.groupId.toString());
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: EventLeaveGroup): unknown {
    const obj: any = {};
    message.groupId !== undefined && (obj.groupId = (message.groupId || BigInt(0)).toString());
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<EventLeaveGroup>): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    if (object.groupId !== undefined && object.groupId !== null) {
      message.groupId = BigInt(object.groupId.toString());
    }
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: EventLeaveGroupAmino): EventLeaveGroup {
    const message = createBaseEventLeaveGroup();
    if (object.group_id !== undefined && object.group_id !== null) {
      message.groupId = BigInt(object.group_id);
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: EventLeaveGroup): EventLeaveGroupAmino {
    const obj: any = {};
    obj.group_id = message.groupId ? message.groupId.toString() : undefined;
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: EventLeaveGroupAminoMsg): EventLeaveGroup {
    return EventLeaveGroup.fromAmino(object.value);
  },
  toAminoMsg(message: EventLeaveGroup): EventLeaveGroupAminoMsg {
    return {
      type: "cosmos-sdk/EventLeaveGroup",
      value: EventLeaveGroup.toAmino(message),
    };
  },
  fromProtoMsg(message: EventLeaveGroupProtoMsg): EventLeaveGroup {
    return EventLeaveGroup.decode(message.value);
  },
  toProto(message: EventLeaveGroup): Uint8Array {
    return EventLeaveGroup.encode(message).finish();
  },
  toProtoMsg(message: EventLeaveGroup): EventLeaveGroupProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventLeaveGroup",
      value: EventLeaveGroup.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(EventLeaveGroup.typeUrl, EventLeaveGroup);
GlobalDecoderRegistry.registerAminoProtoMapping(EventLeaveGroup.aminoType, EventLeaveGroup.typeUrl);
function createBaseEventProposalPruned(): EventProposalPruned {
  return {
    proposalId: BigInt(0),
    status: 0,
    tallyResult: undefined,
  };
}
export const EventProposalPruned = {
  typeUrl: "/cosmos.group.v1.EventProposalPruned",
  aminoType: "cosmos-sdk/EventProposalPruned",
  is(o: any): o is EventProposalPruned {
    return (
      o &&
      (o.$typeUrl === EventProposalPruned.typeUrl || (typeof o.proposalId === "bigint" && isSet(o.status)))
    );
  },
  isAmino(o: any): o is EventProposalPrunedAmino {
    return (
      o &&
      (o.$typeUrl === EventProposalPruned.typeUrl || (typeof o.proposal_id === "bigint" && isSet(o.status)))
    );
  },
  encode(message: EventProposalPruned, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(8).uint64(message.proposalId);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    if (message.tallyResult !== undefined) {
      TallyResult.encode(message.tallyResult, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EventProposalPruned {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventProposalPruned();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposalId = reader.uint64();
          break;
        case 2:
          message.status = reader.int32() as any;
          break;
        case 3:
          message.tallyResult = TallyResult.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EventProposalPruned {
    const obj = createBaseEventProposalPruned();
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.status)) obj.status = proposalStatusFromJSON(object.status);
    if (isSet(object.tallyResult)) obj.tallyResult = TallyResult.fromJSON(object.tallyResult);
    return obj;
  },
  toJSON(message: EventProposalPruned): unknown {
    const obj: any = {};
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.status !== undefined && (obj.status = proposalStatusToJSON(message.status));
    message.tallyResult !== undefined &&
      (obj.tallyResult = message.tallyResult ? TallyResult.toJSON(message.tallyResult) : undefined);
    return obj;
  },
  fromPartial(object: Partial<EventProposalPruned>): EventProposalPruned {
    const message = createBaseEventProposalPruned();
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.status = object.status ?? 0;
    if (object.tallyResult !== undefined && object.tallyResult !== null) {
      message.tallyResult = TallyResult.fromPartial(object.tallyResult);
    }
    return message;
  },
  fromAmino(object: EventProposalPrunedAmino): EventProposalPruned {
    const message = createBaseEventProposalPruned();
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = proposalStatusFromJSON(object.status);
    }
    if (object.tally_result !== undefined && object.tally_result !== null) {
      message.tallyResult = TallyResult.fromAmino(object.tally_result);
    }
    return message;
  },
  toAmino(message: EventProposalPruned): EventProposalPrunedAmino {
    const obj: any = {};
    obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
    obj.status = message.status;
    obj.tally_result = message.tallyResult ? TallyResult.toAmino(message.tallyResult) : undefined;
    return obj;
  },
  fromAminoMsg(object: EventProposalPrunedAminoMsg): EventProposalPruned {
    return EventProposalPruned.fromAmino(object.value);
  },
  toAminoMsg(message: EventProposalPruned): EventProposalPrunedAminoMsg {
    return {
      type: "cosmos-sdk/EventProposalPruned",
      value: EventProposalPruned.toAmino(message),
    };
  },
  fromProtoMsg(message: EventProposalPrunedProtoMsg): EventProposalPruned {
    return EventProposalPruned.decode(message.value);
  },
  toProto(message: EventProposalPruned): Uint8Array {
    return EventProposalPruned.encode(message).finish();
  },
  toProtoMsg(message: EventProposalPruned): EventProposalPrunedProtoMsg {
    return {
      typeUrl: "/cosmos.group.v1.EventProposalPruned",
      value: EventProposalPruned.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(EventProposalPruned.typeUrl, EventProposalPruned);
GlobalDecoderRegistry.registerAminoProtoMapping(EventProposalPruned.aminoType, EventProposalPruned.typeUrl);