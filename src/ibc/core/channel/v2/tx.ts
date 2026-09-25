/* eslint-disable */
import { Payload, PayloadAmino, Packet, PacketAmino, Acknowledgement, AcknowledgementAmino } from "./packet";
import { Height, HeightAmino } from "../../client/v1/client";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { TxRpc } from "../../../../types";
export const protobufPackage = "ibc.core.channel.v2";
/** ResponseResultType defines the possible outcomes of the execution of a message */
export enum ResponseResultType {
  /** RESPONSE_RESULT_TYPE_UNSPECIFIED - Default zero value enumeration */
  RESPONSE_RESULT_TYPE_UNSPECIFIED = 0,
  /** RESPONSE_RESULT_TYPE_NOOP - The message did not call the IBC application callbacks (because, for example, the packet had already been relayed) */
  RESPONSE_RESULT_TYPE_NOOP = 1,
  /** RESPONSE_RESULT_TYPE_SUCCESS - The message was executed successfully */
  RESPONSE_RESULT_TYPE_SUCCESS = 2,
  /** RESPONSE_RESULT_TYPE_FAILURE - The message was executed unsuccessfully */
  RESPONSE_RESULT_TYPE_FAILURE = 3,
  UNRECOGNIZED = -1,
}
export const ResponseResultTypeAmino = ResponseResultType;
export function responseResultTypeFromJSON(object: any): ResponseResultType {
  switch (object) {
    case 0:
    case "RESPONSE_RESULT_TYPE_UNSPECIFIED":
      return ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED;
    case 1:
    case "RESPONSE_RESULT_TYPE_NOOP":
      return ResponseResultType.RESPONSE_RESULT_TYPE_NOOP;
    case 2:
    case "RESPONSE_RESULT_TYPE_SUCCESS":
      return ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS;
    case 3:
    case "RESPONSE_RESULT_TYPE_FAILURE":
      return ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ResponseResultType.UNRECOGNIZED;
  }
}
export function responseResultTypeToJSON(object: ResponseResultType): string {
  switch (object) {
    case ResponseResultType.RESPONSE_RESULT_TYPE_UNSPECIFIED:
      return "RESPONSE_RESULT_TYPE_UNSPECIFIED";
    case ResponseResultType.RESPONSE_RESULT_TYPE_NOOP:
      return "RESPONSE_RESULT_TYPE_NOOP";
    case ResponseResultType.RESPONSE_RESULT_TYPE_SUCCESS:
      return "RESPONSE_RESULT_TYPE_SUCCESS";
    case ResponseResultType.RESPONSE_RESULT_TYPE_FAILURE:
      return "RESPONSE_RESULT_TYPE_FAILURE";
    case ResponseResultType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgSendPacket sends an outgoing IBC packet. */
export interface MsgSendPacket {
  sourceClient: string;
  timeoutTimestamp: bigint;
  payloads: Payload[];
  signer: string;
}
export interface MsgSendPacketProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgSendPacket";
  value: Uint8Array;
}
/**
 * MsgSendPacket sends an outgoing IBC packet.
 * @name MsgSendPacketAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgSendPacket
 */
export interface MsgSendPacketAmino {
  source_client?: string;
  timeout_timestamp?: string;
  payloads?: PayloadAmino[];
  signer?: string;
}
export interface MsgSendPacketAminoMsg {
  type: "cosmos-sdk/MsgSendPacket";
  value: MsgSendPacketAmino;
}
/** MsgSendPacketResponse defines the Msg/SendPacket response type. */
export interface MsgSendPacketResponse {
  sequence: bigint;
}
export interface MsgSendPacketResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgSendPacketResponse";
  value: Uint8Array;
}
/**
 * MsgSendPacketResponse defines the Msg/SendPacket response type.
 * @name MsgSendPacketResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgSendPacketResponse
 */
export interface MsgSendPacketResponseAmino {
  sequence?: string;
}
export interface MsgSendPacketResponseAminoMsg {
  type: "cosmos-sdk/MsgSendPacketResponse";
  value: MsgSendPacketResponseAmino;
}
/** MsgRecvPacket receives an incoming IBC packet. */
export interface MsgRecvPacket {
  packet: Packet | undefined;
  proofCommitment: Uint8Array;
  proofHeight: Height | undefined;
  signer: string;
}
export interface MsgRecvPacketProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgRecvPacket";
  value: Uint8Array;
}
/**
 * MsgRecvPacket receives an incoming IBC packet.
 * @name MsgRecvPacketAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgRecvPacket
 */
export interface MsgRecvPacketAmino {
  packet?: PacketAmino | undefined;
  proof_commitment?: string;
  proof_height?: HeightAmino | undefined;
  signer?: string;
}
export interface MsgRecvPacketAminoMsg {
  type: "cosmos-sdk/MsgRecvPacket";
  value: MsgRecvPacketAmino;
}
/** MsgRecvPacketResponse defines the Msg/RecvPacket response type. */
export interface MsgRecvPacketResponse {
  result: ResponseResultType;
}
export interface MsgRecvPacketResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgRecvPacketResponse";
  value: Uint8Array;
}
/**
 * MsgRecvPacketResponse defines the Msg/RecvPacket response type.
 * @name MsgRecvPacketResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgRecvPacketResponse
 */
export interface MsgRecvPacketResponseAmino {
  result?: ResponseResultType;
}
export interface MsgRecvPacketResponseAminoMsg {
  type: "cosmos-sdk/MsgRecvPacketResponse";
  value: MsgRecvPacketResponseAmino;
}
/** MsgTimeout receives timed-out packet */
export interface MsgTimeout {
  packet: Packet | undefined;
  proofUnreceived: Uint8Array;
  proofHeight: Height | undefined;
  signer: string;
}
export interface MsgTimeoutProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgTimeout";
  value: Uint8Array;
}
/**
 * MsgTimeout receives timed-out packet
 * @name MsgTimeoutAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgTimeout
 */
export interface MsgTimeoutAmino {
  packet?: PacketAmino | undefined;
  proof_unreceived?: string;
  proof_height?: HeightAmino | undefined;
  signer?: string;
}
export interface MsgTimeoutAminoMsg {
  type: "cosmos-sdk/MsgTimeout";
  value: MsgTimeoutAmino;
}
/** MsgTimeoutResponse defines the Msg/Timeout response type. */
export interface MsgTimeoutResponse {
  result: ResponseResultType;
}
export interface MsgTimeoutResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgTimeoutResponse";
  value: Uint8Array;
}
/**
 * MsgTimeoutResponse defines the Msg/Timeout response type.
 * @name MsgTimeoutResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgTimeoutResponse
 */
export interface MsgTimeoutResponseAmino {
  result?: ResponseResultType;
}
export interface MsgTimeoutResponseAminoMsg {
  type: "cosmos-sdk/MsgTimeoutResponse";
  value: MsgTimeoutResponseAmino;
}
/** MsgAcknowledgement receives incoming IBC acknowledgement. */
export interface MsgAcknowledgement {
  packet: Packet | undefined;
  acknowledgement: Acknowledgement | undefined;
  proofAcked: Uint8Array;
  proofHeight: Height | undefined;
  signer: string;
}
export interface MsgAcknowledgementProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement";
  value: Uint8Array;
}
/**
 * MsgAcknowledgement receives incoming IBC acknowledgement.
 * @name MsgAcknowledgementAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgAcknowledgement
 */
export interface MsgAcknowledgementAmino {
  packet?: PacketAmino | undefined;
  acknowledgement?: AcknowledgementAmino | undefined;
  proof_acked?: string;
  proof_height?: HeightAmino | undefined;
  signer?: string;
}
export interface MsgAcknowledgementAminoMsg {
  type: "cosmos-sdk/MsgAcknowledgement";
  value: MsgAcknowledgementAmino;
}
/** MsgAcknowledgementResponse defines the Msg/Acknowledgement response type. */
export interface MsgAcknowledgementResponse {
  result: ResponseResultType;
}
export interface MsgAcknowledgementResponseProtoMsg {
  typeUrl: "/ibc.core.channel.v2.MsgAcknowledgementResponse";
  value: Uint8Array;
}
/**
 * MsgAcknowledgementResponse defines the Msg/Acknowledgement response type.
 * @name MsgAcknowledgementResponseAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.MsgAcknowledgementResponse
 */
export interface MsgAcknowledgementResponseAmino {
  result?: ResponseResultType;
}
export interface MsgAcknowledgementResponseAminoMsg {
  type: "cosmos-sdk/MsgAcknowledgementResponse";
  value: MsgAcknowledgementResponseAmino;
}
function createBaseMsgSendPacket(): MsgSendPacket {
  return {
    sourceClient: "",
    timeoutTimestamp: BigInt(0),
    payloads: [],
    signer: "",
  };
}
export const MsgSendPacket = {
  typeUrl: "/ibc.core.channel.v2.MsgSendPacket",
  encode(message: MsgSendPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sourceClient !== "") {
      writer.uint32(10).string(message.sourceClient);
    }
    if (message.timeoutTimestamp !== BigInt(0)) {
      writer.uint32(16).uint64(message.timeoutTimestamp);
    }
    for (const v of message.payloads) {
      Payload.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sourceClient = reader.string();
          break;
        case 2:
          message.timeoutTimestamp = reader.uint64();
          break;
        case 3:
          message.payloads.push(Payload.decode(reader, reader.uint32()));
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSendPacket {
    const obj = createBaseMsgSendPacket();
    if (isSet(object.sourceClient)) obj.sourceClient = String(object.sourceClient);
    if (isSet(object.timeoutTimestamp)) obj.timeoutTimestamp = BigInt(object.timeoutTimestamp.toString());
    if (Array.isArray(object?.payloads)) obj.payloads = object.payloads.map((e: any) => Payload.fromJSON(e));
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgSendPacket): JsonSafe<MsgSendPacket> {
    const obj: any = {};
    message.sourceClient !== undefined && (obj.sourceClient = message.sourceClient);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = (message.timeoutTimestamp || BigInt(0)).toString());
    if (message.payloads) {
      obj.payloads = message.payloads.map((e) => (e ? Payload.toJSON(e) : undefined));
    } else {
      obj.payloads = [];
    }
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgSendPacket>): MsgSendPacket {
    const message = createBaseMsgSendPacket();
    message.sourceClient = object.sourceClient ?? "";
    if (object.timeoutTimestamp !== undefined && object.timeoutTimestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeoutTimestamp.toString());
    }
    message.payloads = object.payloads?.map((e) => Payload.fromPartial(e)) || [];
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgSendPacketAmino): MsgSendPacket {
    const message = createBaseMsgSendPacket();
    if (object.source_client !== undefined && object.source_client !== null) {
      message.sourceClient = object.source_client;
    }
    if (object.timeout_timestamp !== undefined && object.timeout_timestamp !== null) {
      message.timeoutTimestamp = BigInt(object.timeout_timestamp);
    }
    message.payloads = object.payloads?.map((e) => Payload.fromAmino(e)) || [];
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgSendPacket): MsgSendPacketAmino {
    const obj: any = {};
    obj.source_client = message.sourceClient === "" ? undefined : message.sourceClient;
    obj.timeout_timestamp =
      message.timeoutTimestamp !== BigInt(0) ? message.timeoutTimestamp?.toString() : undefined;
    if (message.payloads) {
      obj.payloads = message.payloads.map((e) => (e ? Payload.toAmino(e) : undefined));
    } else {
      obj.payloads = message.payloads;
    }
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgSendPacketAminoMsg): MsgSendPacket {
    return MsgSendPacket.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSendPacket): MsgSendPacketAminoMsg {
    return {
      type: "cosmos-sdk/MsgSendPacket",
      value: MsgSendPacket.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgSendPacketProtoMsg): MsgSendPacket {
    return MsgSendPacket.decode(message.value);
  },
  toProto(message: MsgSendPacket): Uint8Array {
    return MsgSendPacket.encode(message).finish();
  },
  toProtoMsg(message: MsgSendPacket): MsgSendPacketProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgSendPacket",
      value: MsgSendPacket.encode(message).finish(),
    };
  },
};
function createBaseMsgSendPacketResponse(): MsgSendPacketResponse {
  return {
    sequence: BigInt(0),
  };
}
export const MsgSendPacketResponse = {
  typeUrl: "/ibc.core.channel.v2.MsgSendPacketResponse",
  encode(message: MsgSendPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== BigInt(0)) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSendPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSendPacketResponse {
    const obj = createBaseMsgSendPacketResponse();
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    return obj;
  },
  toJSON(message: MsgSendPacketResponse): JsonSafe<MsgSendPacketResponse> {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<MsgSendPacketResponse>): MsgSendPacketResponse {
    const message = createBaseMsgSendPacketResponse();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    return message;
  },
  fromAmino(object: MsgSendPacketResponseAmino): MsgSendPacketResponse {
    const message = createBaseMsgSendPacketResponse();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: MsgSendPacketResponse): MsgSendPacketResponseAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgSendPacketResponseAminoMsg): MsgSendPacketResponse {
    return MsgSendPacketResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSendPacketResponse): MsgSendPacketResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSendPacketResponse",
      value: MsgSendPacketResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgSendPacketResponseProtoMsg): MsgSendPacketResponse {
    return MsgSendPacketResponse.decode(message.value);
  },
  toProto(message: MsgSendPacketResponse): Uint8Array {
    return MsgSendPacketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSendPacketResponse): MsgSendPacketResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgSendPacketResponse",
      value: MsgSendPacketResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgRecvPacket(): MsgRecvPacket {
  return {
    packet: Packet.fromPartial({}),
    proofCommitment: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgRecvPacket = {
  typeUrl: "/ibc.core.channel.v2.MsgRecvPacket",
  encode(message: MsgRecvPacket, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofCommitment.length !== 0) {
      writer.uint32(18).bytes(message.proofCommitment);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecvPacket {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacket();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofCommitment = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecvPacket {
    const obj = createBaseMsgRecvPacket();
    if (isSet(object.packet)) obj.packet = Packet.fromJSON(object.packet);
    if (isSet(object.proofCommitment)) obj.proofCommitment = bytesFromBase64(object.proofCommitment);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgRecvPacket): JsonSafe<MsgRecvPacket> {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofCommitment !== undefined &&
      (obj.proofCommitment = base64FromBytes(
        message.proofCommitment !== undefined ? message.proofCommitment : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgRecvPacket>): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    }
    message.proofCommitment = object.proofCommitment ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgRecvPacketAmino): MsgRecvPacket {
    const message = createBaseMsgRecvPacket();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.proof_commitment !== undefined && object.proof_commitment !== null) {
      message.proofCommitment = bytesFromBase64(object.proof_commitment);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgRecvPacket): MsgRecvPacketAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.proof_commitment = message.proofCommitment ? base64FromBytes(message.proofCommitment) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRecvPacketAminoMsg): MsgRecvPacket {
    return MsgRecvPacket.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecvPacket): MsgRecvPacketAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecvPacket",
      value: MsgRecvPacket.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgRecvPacketProtoMsg): MsgRecvPacket {
    return MsgRecvPacket.decode(message.value);
  },
  toProto(message: MsgRecvPacket): Uint8Array {
    return MsgRecvPacket.encode(message).finish();
  },
  toProtoMsg(message: MsgRecvPacket): MsgRecvPacketProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgRecvPacket",
      value: MsgRecvPacket.encode(message).finish(),
    };
  },
};
function createBaseMsgRecvPacketResponse(): MsgRecvPacketResponse {
  return {
    result: 0,
  };
}
export const MsgRecvPacketResponse = {
  typeUrl: "/ibc.core.channel.v2.MsgRecvPacketResponse",
  encode(message: MsgRecvPacketResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRecvPacketResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRecvPacketResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRecvPacketResponse {
    const obj = createBaseMsgRecvPacketResponse();
    if (isSet(object.result)) obj.result = responseResultTypeFromJSON(object.result);
    return obj;
  },
  toJSON(message: MsgRecvPacketResponse): JsonSafe<MsgRecvPacketResponse> {
    const obj: any = {};
    message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial(object: Partial<MsgRecvPacketResponse>): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgRecvPacketResponseAmino): MsgRecvPacketResponse {
    const message = createBaseMsgRecvPacketResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgRecvPacketResponse): MsgRecvPacketResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgRecvPacketResponseAminoMsg): MsgRecvPacketResponse {
    return MsgRecvPacketResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRecvPacketResponse",
      value: MsgRecvPacketResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgRecvPacketResponseProtoMsg): MsgRecvPacketResponse {
    return MsgRecvPacketResponse.decode(message.value);
  },
  toProto(message: MsgRecvPacketResponse): Uint8Array {
    return MsgRecvPacketResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRecvPacketResponse): MsgRecvPacketResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgRecvPacketResponse",
      value: MsgRecvPacketResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgTimeout(): MsgTimeout {
  return {
    packet: Packet.fromPartial({}),
    proofUnreceived: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgTimeout = {
  typeUrl: "/ibc.core.channel.v2.MsgTimeout",
  encode(message: MsgTimeout, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.proofUnreceived.length !== 0) {
      writer.uint32(18).bytes(message.proofUnreceived);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeout {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeout();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.proofUnreceived = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTimeout {
    const obj = createBaseMsgTimeout();
    if (isSet(object.packet)) obj.packet = Packet.fromJSON(object.packet);
    if (isSet(object.proofUnreceived)) obj.proofUnreceived = bytesFromBase64(object.proofUnreceived);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgTimeout): JsonSafe<MsgTimeout> {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.proofUnreceived !== undefined &&
      (obj.proofUnreceived = base64FromBytes(
        message.proofUnreceived !== undefined ? message.proofUnreceived : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgTimeout>): MsgTimeout {
    const message = createBaseMsgTimeout();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    }
    message.proofUnreceived = object.proofUnreceived ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgTimeoutAmino): MsgTimeout {
    const message = createBaseMsgTimeout();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.proof_unreceived !== undefined && object.proof_unreceived !== null) {
      message.proofUnreceived = bytesFromBase64(object.proof_unreceived);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgTimeout): MsgTimeoutAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.proof_unreceived = message.proofUnreceived ? base64FromBytes(message.proofUnreceived) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutAminoMsg): MsgTimeout {
    return MsgTimeout.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeout): MsgTimeoutAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeout",
      value: MsgTimeout.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgTimeoutProtoMsg): MsgTimeout {
    return MsgTimeout.decode(message.value);
  },
  toProto(message: MsgTimeout): Uint8Array {
    return MsgTimeout.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeout): MsgTimeoutProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgTimeout",
      value: MsgTimeout.encode(message).finish(),
    };
  },
};
function createBaseMsgTimeoutResponse(): MsgTimeoutResponse {
  return {
    result: 0,
  };
}
export const MsgTimeoutResponse = {
  typeUrl: "/ibc.core.channel.v2.MsgTimeoutResponse",
  encode(message: MsgTimeoutResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgTimeoutResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTimeoutResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgTimeoutResponse {
    const obj = createBaseMsgTimeoutResponse();
    if (isSet(object.result)) obj.result = responseResultTypeFromJSON(object.result);
    return obj;
  },
  toJSON(message: MsgTimeoutResponse): JsonSafe<MsgTimeoutResponse> {
    const obj: any = {};
    message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial(object: Partial<MsgTimeoutResponse>): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgTimeoutResponseAmino): MsgTimeoutResponse {
    const message = createBaseMsgTimeoutResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgTimeoutResponse): MsgTimeoutResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgTimeoutResponseAminoMsg): MsgTimeoutResponse {
    return MsgTimeoutResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgTimeoutResponse",
      value: MsgTimeoutResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgTimeoutResponseProtoMsg): MsgTimeoutResponse {
    return MsgTimeoutResponse.decode(message.value);
  },
  toProto(message: MsgTimeoutResponse): Uint8Array {
    return MsgTimeoutResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgTimeoutResponse): MsgTimeoutResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgTimeoutResponse",
      value: MsgTimeoutResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgAcknowledgement(): MsgAcknowledgement {
  return {
    packet: Packet.fromPartial({}),
    acknowledgement: Acknowledgement.fromPartial({}),
    proofAcked: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    signer: "",
  };
}
export const MsgAcknowledgement = {
  typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement",
  encode(message: MsgAcknowledgement, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.packet !== undefined) {
      Packet.encode(message.packet, writer.uint32(10).fork()).ldelim();
    }
    if (message.acknowledgement !== undefined) {
      Acknowledgement.encode(message.acknowledgement, writer.uint32(18).fork()).ldelim();
    }
    if (message.proofAcked.length !== 0) {
      writer.uint32(26).bytes(message.proofAcked);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(34).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(42).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgement {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgement();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.packet = Packet.decode(reader, reader.uint32());
          break;
        case 2:
          message.acknowledgement = Acknowledgement.decode(reader, reader.uint32());
          break;
        case 3:
          message.proofAcked = reader.bytes();
          break;
        case 4:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAcknowledgement {
    const obj = createBaseMsgAcknowledgement();
    if (isSet(object.packet)) obj.packet = Packet.fromJSON(object.packet);
    if (isSet(object.acknowledgement)) obj.acknowledgement = Acknowledgement.fromJSON(object.acknowledgement);
    if (isSet(object.proofAcked)) obj.proofAcked = bytesFromBase64(object.proofAcked);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgAcknowledgement): JsonSafe<MsgAcknowledgement> {
    const obj: any = {};
    message.packet !== undefined && (obj.packet = message.packet ? Packet.toJSON(message.packet) : undefined);
    message.acknowledgement !== undefined &&
      (obj.acknowledgement = message.acknowledgement
        ? Acknowledgement.toJSON(message.acknowledgement)
        : undefined);
    message.proofAcked !== undefined &&
      (obj.proofAcked = base64FromBytes(
        message.proofAcked !== undefined ? message.proofAcked : new Uint8Array(),
      ));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgAcknowledgement>): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromPartial(object.packet);
    }
    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = Acknowledgement.fromPartial(object.acknowledgement);
    }
    message.proofAcked = object.proofAcked ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgAcknowledgementAmino): MsgAcknowledgement {
    const message = createBaseMsgAcknowledgement();
    if (object.packet !== undefined && object.packet !== null) {
      message.packet = Packet.fromAmino(object.packet);
    }
    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = Acknowledgement.fromAmino(object.acknowledgement);
    }
    if (object.proof_acked !== undefined && object.proof_acked !== null) {
      message.proofAcked = bytesFromBase64(object.proof_acked);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgAcknowledgement): MsgAcknowledgementAmino {
    const obj: any = {};
    obj.packet = message.packet ? Packet.toAmino(message.packet) : undefined;
    obj.acknowledgement = message.acknowledgement
      ? Acknowledgement.toAmino(message.acknowledgement)
      : undefined;
    obj.proof_acked = message.proofAcked ? base64FromBytes(message.proofAcked) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.signer = message.signer === "" ? undefined : message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgementAminoMsg): MsgAcknowledgement {
    return MsgAcknowledgement.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcknowledgement): MsgAcknowledgementAminoMsg {
    return {
      type: "cosmos-sdk/MsgAcknowledgement",
      value: MsgAcknowledgement.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgAcknowledgementProtoMsg): MsgAcknowledgement {
    return MsgAcknowledgement.decode(message.value);
  },
  toProto(message: MsgAcknowledgement): Uint8Array {
    return MsgAcknowledgement.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgement): MsgAcknowledgementProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgAcknowledgement",
      value: MsgAcknowledgement.encode(message).finish(),
    };
  },
};
function createBaseMsgAcknowledgementResponse(): MsgAcknowledgementResponse {
  return {
    result: 0,
  };
}
export const MsgAcknowledgementResponse = {
  typeUrl: "/ibc.core.channel.v2.MsgAcknowledgementResponse",
  encode(message: MsgAcknowledgementResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.result !== 0) {
      writer.uint32(8).int32(message.result);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgAcknowledgementResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAcknowledgementResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.result = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgAcknowledgementResponse {
    const obj = createBaseMsgAcknowledgementResponse();
    if (isSet(object.result)) obj.result = responseResultTypeFromJSON(object.result);
    return obj;
  },
  toJSON(message: MsgAcknowledgementResponse): JsonSafe<MsgAcknowledgementResponse> {
    const obj: any = {};
    message.result !== undefined && (obj.result = responseResultTypeToJSON(message.result));
    return obj;
  },
  fromPartial(object: Partial<MsgAcknowledgementResponse>): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    message.result = object.result ?? 0;
    return message;
  },
  fromAmino(object: MsgAcknowledgementResponseAmino): MsgAcknowledgementResponse {
    const message = createBaseMsgAcknowledgementResponse();
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result;
    }
    return message;
  },
  toAmino(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseAmino {
    const obj: any = {};
    obj.result = message.result === 0 ? undefined : message.result;
    return obj;
  },
  fromAminoMsg(object: MsgAcknowledgementResponseAminoMsg): MsgAcknowledgementResponse {
    return MsgAcknowledgementResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgAcknowledgementResponse",
      value: MsgAcknowledgementResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgAcknowledgementResponseProtoMsg): MsgAcknowledgementResponse {
    return MsgAcknowledgementResponse.decode(message.value);
  },
  toProto(message: MsgAcknowledgementResponse): Uint8Array {
    return MsgAcknowledgementResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgAcknowledgementResponse): MsgAcknowledgementResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.MsgAcknowledgementResponse",
      value: MsgAcknowledgementResponse.encode(message).finish(),
    };
  },
};
/** Msg defines the ibc/channel/v2 Msg service. */
export interface Msg {
  /** SendPacket defines a rpc handler method for MsgSendPacket. */
  SendPacket(request: MsgSendPacket): Promise<MsgSendPacketResponse>;
  /** RecvPacket defines a rpc handler method for MsgRecvPacket. */
  RecvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse>;
  /** Timeout defines a rpc handler method for MsgTimeout. */
  Timeout(request: MsgTimeout): Promise<MsgTimeoutResponse>;
  /** Acknowledgement defines a rpc handler method for MsgAcknowledgement. */
  Acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.SendPacket = this.SendPacket.bind(this);
    this.RecvPacket = this.RecvPacket.bind(this);
    this.Timeout = this.Timeout.bind(this);
    this.Acknowledgement = this.Acknowledgement.bind(this);
  }
  SendPacket(request: MsgSendPacket): Promise<MsgSendPacketResponse> {
    const data = MsgSendPacket.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v2.Msg", "SendPacket", data);
    return promise.then((data) => MsgSendPacketResponse.decode(new BinaryReader(data)));
  }
  RecvPacket(request: MsgRecvPacket): Promise<MsgRecvPacketResponse> {
    const data = MsgRecvPacket.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v2.Msg", "RecvPacket", data);
    return promise.then((data) => MsgRecvPacketResponse.decode(new BinaryReader(data)));
  }
  Timeout(request: MsgTimeout): Promise<MsgTimeoutResponse> {
    const data = MsgTimeout.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v2.Msg", "Timeout", data);
    return promise.then((data) => MsgTimeoutResponse.decode(new BinaryReader(data)));
  }
  Acknowledgement(request: MsgAcknowledgement): Promise<MsgAcknowledgementResponse> {
    const data = MsgAcknowledgement.encode(request).finish();
    const promise = this.rpc.request("ibc.core.channel.v2.Msg", "Acknowledgement", data);
    return promise.then((data) => MsgAcknowledgementResponse.decode(new BinaryReader(data)));
  }
}
