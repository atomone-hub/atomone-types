/* eslint-disable */
import { Params, ParamsAmino } from "./coredaos";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { TxRpc } from "../../../types";
export const protobufPackage = "atomone.coredaos.v1";
/** MsgAnnotateProposal defines a message for annotating a proposal. */
export interface MsgAnnotateProposal {
  /** annotator is the address of the dao annotating the proposal. */
  annotator: string;
  /** proposal_id is the ID of the proposal to annotate. */
  proposalId: bigint;
  /** annotation is the annotation to add to the proposal. */
  annotation: string;
  /**
   * overwrite is a boolean indicating whether to overwrite the existing annotation.
   * Must be set to true if the proposal already has an annotation.
   * Ignored if the proposal does not have yet an annotation.
   */
  overwrite: boolean;
}
export interface MsgAnnotateProposalProtoMsg {
  typeUrl: "/atomone.coredaos.v1.MsgAnnotateProposal";
  value: Uint8Array;
}
/**
 * MsgAnnotateProposal defines a message for annotating a proposal.
 * @name MsgAnnotateProposalAmino
 * @package atomone.coredaos.v1
 * @see proto type: atomone.coredaos.v1.MsgAnnotateProposal
 */
export interface MsgAnnotateProposalAmino {
  /**
   * annotator is the address of the dao annotating the proposal.
   */
  annotator?: string;
  /**
   * proposal_id is the ID of the proposal to annotate.
   */
  proposal_id?: string;
  /**
   * annotation is the annotation to add to the proposal.
   */
  annotation?: string;
  /**
   * overwrite is a boolean indicating whether to overwrite the existing annotation.
   * Must be set to true if the proposal already has an annotation.
   * Ignored if the proposal does not have yet an annotation.
   */
  overwrite?: boolean;
}
export interface MsgAnnotateProposalAminoMsg {
  type: "atomone/coredaos/v1/MsgAnnotateProposal";
  value: MsgAnnotateProposalAmino;
}
/** MsgAnnotateProposalResponse defines the response for MsgAnnotateProposal. */
export interface MsgAnnotateProposalResponse {}
export interface MsgAnnotateProposalResponseProtoMsg {
  typeUrl: "/atomone.coredaos.v1.MsgAnnotateProposalResponse";
  value: Uint8Array;
}
/**
 * MsgAnnotateProposalResponse defines the response for MsgAnnotateProposal.
 * @name MsgAnnotateProposalResponseAmino
 * @package atomone.coredaos.v1
 * @see proto type: atomone.coredaos.v1.MsgAnnotateProposalResponse
 */
export interface MsgAnnotateProposalResponseAmino {}
export interface MsgAnnotateProposalResponseAminoMsg {
  type: "/atomone.coredaos.v1.MsgAnnotateProposalResponse";
  value: MsgAnnotateProposalResponseAmino;
}
/** MsgEndorseProposal defines a message for endorsing a proposal. */
export interface MsgEndorseProposal {
  /** endorser is the address of the dao endorsing the proposal. */
  endorser: string;
  /** proposal_id is the ID of the proposal to endorse. */
  proposalId: bigint;
}
export interface MsgEndorseProposalProtoMsg {
  typeUrl: "/atomone.coredaos.v1.MsgEndorseProposal";
  value: Uint8Array;
}
/**
 * MsgEndorseProposal defines a message for endorsing a proposal.
 * @name MsgEndorseProposalAmino
 * @package atomone.coredaos.v1
 * @see proto type: atomone.coredaos.v1.MsgEndorseProposal
 */
export interface MsgEndorseProposalAmino {
  /**
   * endorser is the address of the dao endorsing the proposal.
   */
  endorser?: string;
  /**
   * proposal_id is the ID of the proposal to endorse.
   */
  proposal_id?: string;
}
export interface MsgEndorseProposalAminoMsg {
  type: "atomone/coredaos/v1/MsgEndorseProposal";
  value: MsgEndorseProposalAmino;
}
/** MsgEndorseProposalResponse defines the response for MsgEndorseProposal. */
export interface MsgEndorseProposalResponse {}
export interface MsgEndorseProposalResponseProtoMsg {
  typeUrl: "/atomone.coredaos.v1.MsgEndorseProposalResponse";
  value: Uint8Array;
}
/**
 * MsgEndorseProposalResponse defines the response for MsgEndorseProposal.
 * @name MsgEndorseProposalResponseAmino
 * @package atomone.coredaos.v1
 * @see proto type: atomone.coredaos.v1.MsgEndorseProposalResponse
 */
export interface MsgEndorseProposalResponseAmino {}
export interface MsgEndorseProposalResponseAminoMsg {
  type: "/atomone.coredaos.v1.MsgEndorseProposalResponse";
  value: MsgEndorseProposalResponseAmino;
}
/** MsgExtendVotingPeriod defines a message for extending the voting period of a proposal. */
export interface MsgExtendVotingPeriod {
  /** extender is the address of the dao extending the voting period. */
  extender: string;
  /** proposal_id is the ID of the proposal to extend. */
  proposalId: bigint;
}
export interface MsgExtendVotingPeriodProtoMsg {
  typeUrl: "/atomone.coredaos.v1.MsgExtendVotingPeriod";
  value: Uint8Array;
}
/**
 * MsgExtendVotingPeriod defines a message for extending the voting period of a proposal.
 * @name MsgExtendVotingPeriodAmino
 * @package atomone.coredaos.v1
 * @see proto type: atomone.coredaos.v1.MsgExtendVotingPeriod
 */
export interface MsgExtendVotingPeriodAmino {
  /**
   * extender is the address of the dao extending the voting period.
   */
  extender?: string;
  /**
   * proposal_id is the ID of the proposal to extend.
   */
  proposal_id?: string;
}
export interface MsgExtendVotingPeriodAminoMsg {
  type: "atomone/coredaos/v1/MsgExtendVotingPeriod";
  value: MsgExtendVotingPeriodAmino;
}
/** MsgExtendVotingPeriodResponse defines the response for MsgExtendVotingPeriod. */
export interface MsgExtendVotingPeriodResponse {}
export interface MsgExtendVotingPeriodResponseProtoMsg {
  typeUrl: "/atomone.coredaos.v1.MsgExtendVotingPeriodResponse";
  value: Uint8Array;
}
/**
 * MsgExtendVotingPeriodResponse defines the response for MsgExtendVotingPeriod.
 * @name MsgExtendVotingPeriodResponseAmino
 * @package atomone.coredaos.v1
 * @see proto type: atomone.coredaos.v1.MsgExtendVotingPeriodResponse
 */
export interface MsgExtendVotingPeriodResponseAmino {}
export interface MsgExtendVotingPeriodResponseAminoMsg {
  type: "/atomone.coredaos.v1.MsgExtendVotingPeriodResponse";
  value: MsgExtendVotingPeriodResponseAmino;
}
/** MsgVetoProposal defines a message for vetoing a proposal. */
export interface MsgVetoProposal {
  /** vetoer is the address of the dao vetoing the proposal. */
  vetoer: string;
  /** proposal_id is the ID of the proposal to veto. */
  proposalId: bigint;
  /**
   * burn_deposit is a boolean indicating whether to burn the deposit of the proposal.
   * If true, the deposit is burned and not refunded.
   */
  burnDeposit: boolean;
}
export interface MsgVetoProposalProtoMsg {
  typeUrl: "/atomone.coredaos.v1.MsgVetoProposal";
  value: Uint8Array;
}
/**
 * MsgVetoProposal defines a message for vetoing a proposal.
 * @name MsgVetoProposalAmino
 * @package atomone.coredaos.v1
 * @see proto type: atomone.coredaos.v1.MsgVetoProposal
 */
export interface MsgVetoProposalAmino {
  /**
   * vetoer is the address of the dao vetoing the proposal.
   */
  vetoer?: string;
  /**
   * proposal_id is the ID of the proposal to veto.
   */
  proposal_id?: string;
  /**
   * burn_deposit is a boolean indicating whether to burn the deposit of the proposal.
   * If true, the deposit is burned and not refunded.
   */
  burn_deposit?: boolean;
}
export interface MsgVetoProposalAminoMsg {
  type: "atomone/coredaos/v1/MsgVetoProposal";
  value: MsgVetoProposalAmino;
}
/** MsgVetoProposalResponse defines the response for MsgVetoProposal. */
export interface MsgVetoProposalResponse {}
export interface MsgVetoProposalResponseProtoMsg {
  typeUrl: "/atomone.coredaos.v1.MsgVetoProposalResponse";
  value: Uint8Array;
}
/**
 * MsgVetoProposalResponse defines the response for MsgVetoProposal.
 * @name MsgVetoProposalResponseAmino
 * @package atomone.coredaos.v1
 * @see proto type: atomone.coredaos.v1.MsgVetoProposalResponse
 */
export interface MsgVetoProposalResponseAmino {}
export interface MsgVetoProposalResponseAminoMsg {
  type: "/atomone.coredaos.v1.MsgVetoProposalResponse";
  value: MsgVetoProposalResponseAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the x/coredaos parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params | undefined;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/atomone.coredaos.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package atomone.coredaos.v1
 * @see proto type: atomone.coredaos.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /**
   * params defines the x/coredaos parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino | undefined;
}
export interface MsgUpdateParamsAminoMsg {
  type: "/atomone.coredaos.v1.MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/atomone.coredaos.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package atomone.coredaos.v1
 * @see proto type: atomone.coredaos.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/atomone.coredaos.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgAnnotateProposal(): MsgAnnotateProposal {
  return {
    annotator: "",
    proposalId: BigInt(0),
    annotation: "",
    overwrite: false,
  };
}
export const MsgAnnotateProposal = {
  typeUrl: "/atomone.coredaos.v1.MsgAnnotateProposal",
  encode(message: MsgAnnotateProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.annotator !== "") {
      writer.uint32(10).string(message.annotator);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    if (message.annotation !== "") {
      writer.uint32(26).string(message.annotation);
    }
    if (message.overwrite === true) {
      writer.uint32(32).bool(message.overwrite);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAnnotateProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnnotateProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.annotator = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        case 3:
          message.annotation = reader.string();
          break;
        case 4:
          message.overwrite = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAnnotateProposal {
    const obj = createBaseMsgAnnotateProposal();
    if (isSet(object.annotator)) obj.annotator = String(object.annotator);
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.annotation)) obj.annotation = String(object.annotation);
    if (isSet(object.overwrite)) obj.overwrite = Boolean(object.overwrite);
    return obj;
  },
  toJSON(message: MsgAnnotateProposal): JsonSafe<MsgAnnotateProposal> {
    const obj: any = {};
    message.annotator !== undefined && (obj.annotator = message.annotator);
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.annotation !== undefined && (obj.annotation = message.annotation);
    message.overwrite !== undefined && (obj.overwrite = message.overwrite);
    return obj;
  },
  fromPartial(object: Partial<MsgAnnotateProposal>): MsgAnnotateProposal {
    const message = createBaseMsgAnnotateProposal();
    message.annotator = object.annotator ?? "";
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.annotation = object.annotation ?? "";
    message.overwrite = object.overwrite ?? false;
    return message;
  },
  fromAmino(object: MsgAnnotateProposalAmino): MsgAnnotateProposal {
    const message = createBaseMsgAnnotateProposal();
    if (object.annotator !== undefined && object.annotator !== null) {
      message.annotator = object.annotator;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.annotation !== undefined && object.annotation !== null) {
      message.annotation = object.annotation;
    }
    if (object.overwrite !== undefined && object.overwrite !== null) {
      message.overwrite = object.overwrite;
    }
    return message;
  },
  toAmino(message: MsgAnnotateProposal): MsgAnnotateProposalAmino {
    const obj: any = {};
    obj.annotator = message.annotator === "" ? undefined : message.annotator;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.annotation = message.annotation === "" ? undefined : message.annotation;
    obj.overwrite = message.overwrite === false ? undefined : message.overwrite;
    return obj;
  },
  fromAminoMsg(object: MsgAnnotateProposalAminoMsg): MsgAnnotateProposal {
    return MsgAnnotateProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAnnotateProposal): MsgAnnotateProposalAminoMsg {
    return {
      type: "atomone/coredaos/v1/MsgAnnotateProposal",
      value: MsgAnnotateProposal.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgAnnotateProposalProtoMsg): MsgAnnotateProposal {
    return MsgAnnotateProposal.decode(message.value);
  },
  toProto(message: MsgAnnotateProposal): Uint8Array {
    return MsgAnnotateProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgAnnotateProposal): MsgAnnotateProposalProtoMsg {
    return {
      typeUrl: "/atomone.coredaos.v1.MsgAnnotateProposal",
      value: MsgAnnotateProposal.encode(message).finish(),
    };
  },
};
function createBaseMsgAnnotateProposalResponse(): MsgAnnotateProposalResponse {
  return {};
}
export const MsgAnnotateProposalResponse = {
  typeUrl: "/atomone.coredaos.v1.MsgAnnotateProposalResponse",
  encode(_: MsgAnnotateProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAnnotateProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnnotateProposalResponse();
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
  fromJSON(_: any): MsgAnnotateProposalResponse {
    const obj = createBaseMsgAnnotateProposalResponse();
    return obj;
  },
  toJSON(_: MsgAnnotateProposalResponse): JsonSafe<MsgAnnotateProposalResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgAnnotateProposalResponse>): MsgAnnotateProposalResponse {
    const message = createBaseMsgAnnotateProposalResponse();
    return message;
  },
  fromAmino(_: MsgAnnotateProposalResponseAmino): MsgAnnotateProposalResponse {
    const message = createBaseMsgAnnotateProposalResponse();
    return message;
  },
  toAmino(_: MsgAnnotateProposalResponse): MsgAnnotateProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgAnnotateProposalResponseAminoMsg): MsgAnnotateProposalResponse {
    return MsgAnnotateProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgAnnotateProposalResponseProtoMsg): MsgAnnotateProposalResponse {
    return MsgAnnotateProposalResponse.decode(message.value);
  },
  toProto(message: MsgAnnotateProposalResponse): Uint8Array {
    return MsgAnnotateProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAnnotateProposalResponse): MsgAnnotateProposalResponseProtoMsg {
    return {
      typeUrl: "/atomone.coredaos.v1.MsgAnnotateProposalResponse",
      value: MsgAnnotateProposalResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgEndorseProposal(): MsgEndorseProposal {
  return {
    endorser: "",
    proposalId: BigInt(0),
  };
}
export const MsgEndorseProposal = {
  typeUrl: "/atomone.coredaos.v1.MsgEndorseProposal",
  encode(message: MsgEndorseProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.endorser !== "") {
      writer.uint32(10).string(message.endorser);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEndorseProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEndorseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.endorser = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgEndorseProposal {
    const obj = createBaseMsgEndorseProposal();
    if (isSet(object.endorser)) obj.endorser = String(object.endorser);
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: MsgEndorseProposal): JsonSafe<MsgEndorseProposal> {
    const obj: any = {};
    message.endorser !== undefined && (obj.endorser = message.endorser);
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgEndorseProposal>): MsgEndorseProposal {
    const message = createBaseMsgEndorseProposal();
    message.endorser = object.endorser ?? "";
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromAmino(object: MsgEndorseProposalAmino): MsgEndorseProposal {
    const message = createBaseMsgEndorseProposal();
    if (object.endorser !== undefined && object.endorser !== null) {
      message.endorser = object.endorser;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgEndorseProposal): MsgEndorseProposalAmino {
    const obj: any = {};
    obj.endorser = message.endorser === "" ? undefined : message.endorser;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEndorseProposalAminoMsg): MsgEndorseProposal {
    return MsgEndorseProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgEndorseProposal): MsgEndorseProposalAminoMsg {
    return {
      type: "atomone/coredaos/v1/MsgEndorseProposal",
      value: MsgEndorseProposal.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgEndorseProposalProtoMsg): MsgEndorseProposal {
    return MsgEndorseProposal.decode(message.value);
  },
  toProto(message: MsgEndorseProposal): Uint8Array {
    return MsgEndorseProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgEndorseProposal): MsgEndorseProposalProtoMsg {
    return {
      typeUrl: "/atomone.coredaos.v1.MsgEndorseProposal",
      value: MsgEndorseProposal.encode(message).finish(),
    };
  },
};
function createBaseMsgEndorseProposalResponse(): MsgEndorseProposalResponse {
  return {};
}
export const MsgEndorseProposalResponse = {
  typeUrl: "/atomone.coredaos.v1.MsgEndorseProposalResponse",
  encode(_: MsgEndorseProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgEndorseProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgEndorseProposalResponse();
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
  fromJSON(_: any): MsgEndorseProposalResponse {
    const obj = createBaseMsgEndorseProposalResponse();
    return obj;
  },
  toJSON(_: MsgEndorseProposalResponse): JsonSafe<MsgEndorseProposalResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgEndorseProposalResponse>): MsgEndorseProposalResponse {
    const message = createBaseMsgEndorseProposalResponse();
    return message;
  },
  fromAmino(_: MsgEndorseProposalResponseAmino): MsgEndorseProposalResponse {
    const message = createBaseMsgEndorseProposalResponse();
    return message;
  },
  toAmino(_: MsgEndorseProposalResponse): MsgEndorseProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEndorseProposalResponseAminoMsg): MsgEndorseProposalResponse {
    return MsgEndorseProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEndorseProposalResponseProtoMsg): MsgEndorseProposalResponse {
    return MsgEndorseProposalResponse.decode(message.value);
  },
  toProto(message: MsgEndorseProposalResponse): Uint8Array {
    return MsgEndorseProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEndorseProposalResponse): MsgEndorseProposalResponseProtoMsg {
    return {
      typeUrl: "/atomone.coredaos.v1.MsgEndorseProposalResponse",
      value: MsgEndorseProposalResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgExtendVotingPeriod(): MsgExtendVotingPeriod {
  return {
    extender: "",
    proposalId: BigInt(0),
  };
}
export const MsgExtendVotingPeriod = {
  typeUrl: "/atomone.coredaos.v1.MsgExtendVotingPeriod",
  encode(message: MsgExtendVotingPeriod, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.extender !== "") {
      writer.uint32(10).string(message.extender);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendVotingPeriod {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendVotingPeriod();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.extender = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExtendVotingPeriod {
    const obj = createBaseMsgExtendVotingPeriod();
    if (isSet(object.extender)) obj.extender = String(object.extender);
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    return obj;
  },
  toJSON(message: MsgExtendVotingPeriod): JsonSafe<MsgExtendVotingPeriod> {
    const obj: any = {};
    message.extender !== undefined && (obj.extender = message.extender);
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgExtendVotingPeriod>): MsgExtendVotingPeriod {
    const message = createBaseMsgExtendVotingPeriod();
    message.extender = object.extender ?? "";
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    return message;
  },
  fromAmino(object: MsgExtendVotingPeriodAmino): MsgExtendVotingPeriod {
    const message = createBaseMsgExtendVotingPeriod();
    if (object.extender !== undefined && object.extender !== null) {
      message.extender = object.extender;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    return message;
  },
  toAmino(message: MsgExtendVotingPeriod): MsgExtendVotingPeriodAmino {
    const obj: any = {};
    obj.extender = message.extender === "" ? undefined : message.extender;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgExtendVotingPeriodAminoMsg): MsgExtendVotingPeriod {
    return MsgExtendVotingPeriod.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExtendVotingPeriod): MsgExtendVotingPeriodAminoMsg {
    return {
      type: "atomone/coredaos/v1/MsgExtendVotingPeriod",
      value: MsgExtendVotingPeriod.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgExtendVotingPeriodProtoMsg): MsgExtendVotingPeriod {
    return MsgExtendVotingPeriod.decode(message.value);
  },
  toProto(message: MsgExtendVotingPeriod): Uint8Array {
    return MsgExtendVotingPeriod.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendVotingPeriod): MsgExtendVotingPeriodProtoMsg {
    return {
      typeUrl: "/atomone.coredaos.v1.MsgExtendVotingPeriod",
      value: MsgExtendVotingPeriod.encode(message).finish(),
    };
  },
};
function createBaseMsgExtendVotingPeriodResponse(): MsgExtendVotingPeriodResponse {
  return {};
}
export const MsgExtendVotingPeriodResponse = {
  typeUrl: "/atomone.coredaos.v1.MsgExtendVotingPeriodResponse",
  encode(_: MsgExtendVotingPeriodResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExtendVotingPeriodResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExtendVotingPeriodResponse();
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
  fromJSON(_: any): MsgExtendVotingPeriodResponse {
    const obj = createBaseMsgExtendVotingPeriodResponse();
    return obj;
  },
  toJSON(_: MsgExtendVotingPeriodResponse): JsonSafe<MsgExtendVotingPeriodResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgExtendVotingPeriodResponse>): MsgExtendVotingPeriodResponse {
    const message = createBaseMsgExtendVotingPeriodResponse();
    return message;
  },
  fromAmino(_: MsgExtendVotingPeriodResponseAmino): MsgExtendVotingPeriodResponse {
    const message = createBaseMsgExtendVotingPeriodResponse();
    return message;
  },
  toAmino(_: MsgExtendVotingPeriodResponse): MsgExtendVotingPeriodResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgExtendVotingPeriodResponseAminoMsg): MsgExtendVotingPeriodResponse {
    return MsgExtendVotingPeriodResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgExtendVotingPeriodResponseProtoMsg): MsgExtendVotingPeriodResponse {
    return MsgExtendVotingPeriodResponse.decode(message.value);
  },
  toProto(message: MsgExtendVotingPeriodResponse): Uint8Array {
    return MsgExtendVotingPeriodResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExtendVotingPeriodResponse): MsgExtendVotingPeriodResponseProtoMsg {
    return {
      typeUrl: "/atomone.coredaos.v1.MsgExtendVotingPeriodResponse",
      value: MsgExtendVotingPeriodResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgVetoProposal(): MsgVetoProposal {
  return {
    vetoer: "",
    proposalId: BigInt(0),
    burnDeposit: false,
  };
}
export const MsgVetoProposal = {
  typeUrl: "/atomone.coredaos.v1.MsgVetoProposal",
  encode(message: MsgVetoProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.vetoer !== "") {
      writer.uint32(10).string(message.vetoer);
    }
    if (message.proposalId !== BigInt(0)) {
      writer.uint32(16).uint64(message.proposalId);
    }
    if (message.burnDeposit === true) {
      writer.uint32(24).bool(message.burnDeposit);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVetoProposal {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVetoProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.vetoer = reader.string();
          break;
        case 2:
          message.proposalId = reader.uint64();
          break;
        case 3:
          message.burnDeposit = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVetoProposal {
    const obj = createBaseMsgVetoProposal();
    if (isSet(object.vetoer)) obj.vetoer = String(object.vetoer);
    if (isSet(object.proposalId)) obj.proposalId = BigInt(object.proposalId.toString());
    if (isSet(object.burnDeposit)) obj.burnDeposit = Boolean(object.burnDeposit);
    return obj;
  },
  toJSON(message: MsgVetoProposal): JsonSafe<MsgVetoProposal> {
    const obj: any = {};
    message.vetoer !== undefined && (obj.vetoer = message.vetoer);
    message.proposalId !== undefined && (obj.proposalId = (message.proposalId || BigInt(0)).toString());
    message.burnDeposit !== undefined && (obj.burnDeposit = message.burnDeposit);
    return obj;
  },
  fromPartial(object: Partial<MsgVetoProposal>): MsgVetoProposal {
    const message = createBaseMsgVetoProposal();
    message.vetoer = object.vetoer ?? "";
    if (object.proposalId !== undefined && object.proposalId !== null) {
      message.proposalId = BigInt(object.proposalId.toString());
    }
    message.burnDeposit = object.burnDeposit ?? false;
    return message;
  },
  fromAmino(object: MsgVetoProposalAmino): MsgVetoProposal {
    const message = createBaseMsgVetoProposal();
    if (object.vetoer !== undefined && object.vetoer !== null) {
      message.vetoer = object.vetoer;
    }
    if (object.proposal_id !== undefined && object.proposal_id !== null) {
      message.proposalId = BigInt(object.proposal_id);
    }
    if (object.burn_deposit !== undefined && object.burn_deposit !== null) {
      message.burnDeposit = object.burn_deposit;
    }
    return message;
  },
  toAmino(message: MsgVetoProposal): MsgVetoProposalAmino {
    const obj: any = {};
    obj.vetoer = message.vetoer === "" ? undefined : message.vetoer;
    obj.proposal_id = message.proposalId !== BigInt(0) ? message.proposalId?.toString() : undefined;
    obj.burn_deposit = message.burnDeposit === false ? undefined : message.burnDeposit;
    return obj;
  },
  fromAminoMsg(object: MsgVetoProposalAminoMsg): MsgVetoProposal {
    return MsgVetoProposal.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVetoProposal): MsgVetoProposalAminoMsg {
    return {
      type: "atomone/coredaos/v1/MsgVetoProposal",
      value: MsgVetoProposal.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgVetoProposalProtoMsg): MsgVetoProposal {
    return MsgVetoProposal.decode(message.value);
  },
  toProto(message: MsgVetoProposal): Uint8Array {
    return MsgVetoProposal.encode(message).finish();
  },
  toProtoMsg(message: MsgVetoProposal): MsgVetoProposalProtoMsg {
    return {
      typeUrl: "/atomone.coredaos.v1.MsgVetoProposal",
      value: MsgVetoProposal.encode(message).finish(),
    };
  },
};
function createBaseMsgVetoProposalResponse(): MsgVetoProposalResponse {
  return {};
}
export const MsgVetoProposalResponse = {
  typeUrl: "/atomone.coredaos.v1.MsgVetoProposalResponse",
  encode(_: MsgVetoProposalResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVetoProposalResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVetoProposalResponse();
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
  fromJSON(_: any): MsgVetoProposalResponse {
    const obj = createBaseMsgVetoProposalResponse();
    return obj;
  },
  toJSON(_: MsgVetoProposalResponse): JsonSafe<MsgVetoProposalResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgVetoProposalResponse>): MsgVetoProposalResponse {
    const message = createBaseMsgVetoProposalResponse();
    return message;
  },
  fromAmino(_: MsgVetoProposalResponseAmino): MsgVetoProposalResponse {
    const message = createBaseMsgVetoProposalResponse();
    return message;
  },
  toAmino(_: MsgVetoProposalResponse): MsgVetoProposalResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVetoProposalResponseAminoMsg): MsgVetoProposalResponse {
    return MsgVetoProposalResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgVetoProposalResponseProtoMsg): MsgVetoProposalResponse {
    return MsgVetoProposalResponse.decode(message.value);
  },
  toProto(message: MsgVetoProposalResponse): Uint8Array {
    return MsgVetoProposalResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVetoProposalResponse): MsgVetoProposalResponseProtoMsg {
    return {
      typeUrl: "/atomone.coredaos.v1.MsgVetoProposalResponse",
      value: MsgVetoProposalResponse.encode(message).finish(),
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
  typeUrl: "/atomone.coredaos.v1.MsgUpdateParams",
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
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/atomone.coredaos.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/atomone.coredaos.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/atomone.coredaos.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish(),
    };
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  /**
   * AnnotateProposal defines a method to annotate a proposal with additional information.
   * It is only available to the Steering DAO.
   */
  AnnotateProposal(request: MsgAnnotateProposal): Promise<MsgAnnotateProposalResponse>;
  /**
   * EndorseProposal defines a method to endorse a proposal, and for law proposals this also
   * results in the lowering of the passing threshold to the passing threshold of regular proposals.
   * It is only available to the Steering DAO.
   */
  EndorseProposal(request: MsgEndorseProposal): Promise<MsgEndorseProposalResponse>;
  /**
   * ExtendVotingPeriod defines a method to extend the voting period of a proposal.
   * It is available to both the Steering DAO and the Oversight DAO.
   */
  ExtendVotingPeriod(request: MsgExtendVotingPeriod): Promise<MsgExtendVotingPeriodResponse>;
  /**
   * VetoProposal defines a method to veto a proposal.
   * It is only available to the Oversight DAO.
   */
  VetoProposal(request: MsgVetoProposal): Promise<MsgVetoProposalResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/coredaos
   * module parameters. The authority is defined in the keeper.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.AnnotateProposal = this.AnnotateProposal.bind(this);
    this.EndorseProposal = this.EndorseProposal.bind(this);
    this.ExtendVotingPeriod = this.ExtendVotingPeriod.bind(this);
    this.VetoProposal = this.VetoProposal.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  AnnotateProposal(request: MsgAnnotateProposal): Promise<MsgAnnotateProposalResponse> {
    const data = MsgAnnotateProposal.encode(request).finish();
    const promise = this.rpc.request("atomone.coredaos.v1.Msg", "AnnotateProposal", data);
    return promise.then((data) => MsgAnnotateProposalResponse.decode(new BinaryReader(data)));
  }
  EndorseProposal(request: MsgEndorseProposal): Promise<MsgEndorseProposalResponse> {
    const data = MsgEndorseProposal.encode(request).finish();
    const promise = this.rpc.request("atomone.coredaos.v1.Msg", "EndorseProposal", data);
    return promise.then((data) => MsgEndorseProposalResponse.decode(new BinaryReader(data)));
  }
  ExtendVotingPeriod(request: MsgExtendVotingPeriod): Promise<MsgExtendVotingPeriodResponse> {
    const data = MsgExtendVotingPeriod.encode(request).finish();
    const promise = this.rpc.request("atomone.coredaos.v1.Msg", "ExtendVotingPeriod", data);
    return promise.then((data) => MsgExtendVotingPeriodResponse.decode(new BinaryReader(data)));
  }
  VetoProposal(request: MsgVetoProposal): Promise<MsgVetoProposalResponse> {
    const data = MsgVetoProposal.encode(request).finish();
    const promise = this.rpc.request("atomone.coredaos.v1.Msg", "VetoProposal", data);
    return promise.then((data) => MsgVetoProposalResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("atomone.coredaos.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
