/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { JsonSafe } from "../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../registry";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "ibc.core.channel.v2";
/** GenesisState defines the ibc channel/v2 submodule's genesis state. */
export interface GenesisState {
  acknowledgements: PacketState[];
  commitments: PacketState[];
  receipts: PacketState[];
  asyncPackets: PacketState[];
  sendSequences: PacketSequence[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.core.channel.v2.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the ibc channel/v2 submodule's genesis state.
 * @name GenesisStateAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.GenesisState
 */
export interface GenesisStateAmino {
  acknowledgements?: PacketStateAmino[];
  commitments?: PacketStateAmino[];
  receipts?: PacketStateAmino[];
  async_packets?: PacketStateAmino[];
  send_sequences?: PacketSequenceAmino[];
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 */
export interface PacketState {
  /** client unique identifier. */
  clientId: string;
  /** packet sequence. */
  sequence: bigint;
  /** embedded data that represents packet state. */
  data: Uint8Array;
}
export interface PacketStateProtoMsg {
  typeUrl: "/ibc.core.channel.v2.PacketState";
  value: Uint8Array;
}
/**
 * PacketState defines the generic type necessary to retrieve and store
 * packet commitments, acknowledgements, and receipts.
 * Caller is responsible for knowing the context necessary to interpret this
 * state as a commitment, acknowledgement, or a receipt.
 * @name PacketStateAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.PacketState
 */
export interface PacketStateAmino {
  /**
   * client unique identifier.
   */
  client_id?: string;
  /**
   * packet sequence.
   */
  sequence?: string;
  /**
   * embedded data that represents packet state.
   */
  data?: string;
}
export interface PacketStateAminoMsg {
  type: "cosmos-sdk/PacketState";
  value: PacketStateAmino;
}
/** PacketSequence defines the genesis type necessary to retrieve and store next send sequences. */
export interface PacketSequence {
  /** client unique identifier. */
  clientId: string;
  /** packet sequence */
  sequence: bigint;
}
export interface PacketSequenceProtoMsg {
  typeUrl: "/ibc.core.channel.v2.PacketSequence";
  value: Uint8Array;
}
/**
 * PacketSequence defines the genesis type necessary to retrieve and store next send sequences.
 * @name PacketSequenceAmino
 * @package ibc.core.channel.v2
 * @see proto type: ibc.core.channel.v2.PacketSequence
 */
export interface PacketSequenceAmino {
  /**
   * client unique identifier.
   */
  client_id?: string;
  /**
   * packet sequence
   */
  sequence?: string;
}
export interface PacketSequenceAminoMsg {
  type: "cosmos-sdk/PacketSequence";
  value: PacketSequenceAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    acknowledgements: [],
    commitments: [],
    receipts: [],
    asyncPackets: [],
    sendSequences: []
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.channel.v2.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.is(o.acknowledgements[0])) && Array.isArray(o.commitments) && (!o.commitments.length || PacketState.is(o.commitments[0])) && Array.isArray(o.receipts) && (!o.receipts.length || PacketState.is(o.receipts[0])) && Array.isArray(o.asyncPackets) && (!o.asyncPackets.length || PacketState.is(o.asyncPackets[0])) && Array.isArray(o.sendSequences) && (!o.sendSequences.length || PacketSequence.is(o.sendSequences[0])));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.acknowledgements) && (!o.acknowledgements.length || PacketState.isAmino(o.acknowledgements[0])) && Array.isArray(o.commitments) && (!o.commitments.length || PacketState.isAmino(o.commitments[0])) && Array.isArray(o.receipts) && (!o.receipts.length || PacketState.isAmino(o.receipts[0])) && Array.isArray(o.async_packets) && (!o.async_packets.length || PacketState.isAmino(o.async_packets[0])) && Array.isArray(o.send_sequences) && (!o.send_sequences.length || PacketSequence.isAmino(o.send_sequences[0])));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.acknowledgements) {
      PacketState.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commitments) {
      PacketState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.receipts) {
      PacketState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.asyncPackets) {
      PacketState.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.sendSequences) {
      PacketSequence.encode(v!, writer.uint32(50).fork()).ldelim();
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
        case 2:
          message.acknowledgements.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commitments.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 4:
          message.receipts.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 5:
          message.asyncPackets.push(PacketState.decode(reader, reader.uint32()));
          break;
        case 6:
          message.sendSequences.push(PacketSequence.decode(reader, reader.uint32()));
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
    if (Array.isArray(object?.acknowledgements)) obj.acknowledgements = object.acknowledgements.map((e: any) => PacketState.fromJSON(e));
    if (Array.isArray(object?.commitments)) obj.commitments = object.commitments.map((e: any) => PacketState.fromJSON(e));
    if (Array.isArray(object?.receipts)) obj.receipts = object.receipts.map((e: any) => PacketState.fromJSON(e));
    if (Array.isArray(object?.asyncPackets)) obj.asyncPackets = object.asyncPackets.map((e: any) => PacketState.fromJSON(e));
    if (Array.isArray(object?.sendSequences)) obj.sendSequences = object.sendSequences.map((e: any) => PacketSequence.fromJSON(e));
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.acknowledgements = [];
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.commitments = [];
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.receipts = [];
    }
    if (message.asyncPackets) {
      obj.asyncPackets = message.asyncPackets.map(e => e ? PacketState.toJSON(e) : undefined);
    } else {
      obj.asyncPackets = [];
    }
    if (message.sendSequences) {
      obj.sendSequences = message.sendSequences.map(e => e ? PacketSequence.toJSON(e) : undefined);
    } else {
      obj.sendSequences = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromPartial(e)) || [];
    message.commitments = object.commitments?.map(e => PacketState.fromPartial(e)) || [];
    message.receipts = object.receipts?.map(e => PacketState.fromPartial(e)) || [];
    message.asyncPackets = object.asyncPackets?.map(e => PacketState.fromPartial(e)) || [];
    message.sendSequences = object.sendSequences?.map(e => PacketSequence.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.acknowledgements = object.acknowledgements?.map(e => PacketState.fromAmino(e)) || [];
    message.commitments = object.commitments?.map(e => PacketState.fromAmino(e)) || [];
    message.receipts = object.receipts?.map(e => PacketState.fromAmino(e)) || [];
    message.asyncPackets = object.async_packets?.map(e => PacketState.fromAmino(e)) || [];
    message.sendSequences = object.send_sequences?.map(e => PacketSequence.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.acknowledgements) {
      obj.acknowledgements = message.acknowledgements.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.acknowledgements = message.acknowledgements;
    }
    if (message.commitments) {
      obj.commitments = message.commitments.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.commitments = message.commitments;
    }
    if (message.receipts) {
      obj.receipts = message.receipts.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.receipts = message.receipts;
    }
    if (message.asyncPackets) {
      obj.async_packets = message.asyncPackets.map(e => e ? PacketState.toAmino(e) : undefined);
    } else {
      obj.async_packets = message.asyncPackets;
    }
    if (message.sendSequences) {
      obj.send_sequences = message.sendSequences.map(e => e ? PacketSequence.toAmino(e) : undefined);
    } else {
      obj.send_sequences = message.sendSequences;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBasePacketState(): PacketState {
  return {
    clientId: "",
    sequence: BigInt(0),
    data: new Uint8Array()
  };
}
export const PacketState = {
  typeUrl: "/ibc.core.channel.v2.PacketState",
  aminoType: "cosmos-sdk/PacketState",
  is(o: any): o is PacketState {
    return o && (o.$typeUrl === PacketState.typeUrl || typeof o.clientId === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isAmino(o: any): o is PacketStateAmino {
    return o && (o.$typeUrl === PacketState.typeUrl || typeof o.client_id === "string" && typeof o.sequence === "bigint" && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: PacketState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketState {
    const obj = createBasePacketState();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: PacketState): JsonSafe<PacketState> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<PacketState>): PacketState {
    const message = createBasePacketState();
    message.clientId = object.clientId ?? "";
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PacketStateAmino): PacketState {
    const message = createBasePacketState();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: PacketState): PacketStateAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketStateAminoMsg): PacketState {
    return PacketState.fromAmino(object.value);
  },
  toAminoMsg(message: PacketState): PacketStateAminoMsg {
    return {
      type: "cosmos-sdk/PacketState",
      value: PacketState.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketStateProtoMsg): PacketState {
    return PacketState.decode(message.value);
  },
  toProto(message: PacketState): Uint8Array {
    return PacketState.encode(message).finish();
  },
  toProtoMsg(message: PacketState): PacketStateProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.PacketState",
      value: PacketState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PacketState.typeUrl, PacketState);
GlobalDecoderRegistry.registerAminoProtoMapping(PacketState.aminoType, PacketState.typeUrl);
function createBasePacketSequence(): PacketSequence {
  return {
    clientId: "",
    sequence: BigInt(0)
  };
}
export const PacketSequence = {
  typeUrl: "/ibc.core.channel.v2.PacketSequence",
  aminoType: "cosmos-sdk/PacketSequence",
  is(o: any): o is PacketSequence {
    return o && (o.$typeUrl === PacketSequence.typeUrl || typeof o.clientId === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is PacketSequenceAmino {
    return o && (o.$typeUrl === PacketSequence.typeUrl || typeof o.client_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: PacketSequence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== BigInt(0)) {
      writer.uint32(16).uint64(message.sequence);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketSequence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketSequence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketSequence {
    const obj = createBasePacketSequence();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    return obj;
  },
  toJSON(message: PacketSequence): JsonSafe<PacketSequence> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<PacketSequence>): PacketSequence {
    const message = createBasePacketSequence();
    message.clientId = object.clientId ?? "";
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    return message;
  },
  fromAmino(object: PacketSequenceAmino): PacketSequence {
    const message = createBasePacketSequence();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    return message;
  },
  toAmino(message: PacketSequence): PacketSequenceAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketSequenceAminoMsg): PacketSequence {
    return PacketSequence.fromAmino(object.value);
  },
  toAminoMsg(message: PacketSequence): PacketSequenceAminoMsg {
    return {
      type: "cosmos-sdk/PacketSequence",
      value: PacketSequence.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketSequenceProtoMsg): PacketSequence {
    return PacketSequence.decode(message.value);
  },
  toProto(message: PacketSequence): Uint8Array {
    return PacketSequence.encode(message).finish();
  },
  toProtoMsg(message: PacketSequence): PacketSequenceProtoMsg {
    return {
      typeUrl: "/ibc.core.channel.v2.PacketSequence",
      value: PacketSequence.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PacketSequence.typeUrl, PacketSequence);
GlobalDecoderRegistry.registerAminoProtoMapping(PacketSequence.aminoType, PacketSequence.typeUrl);