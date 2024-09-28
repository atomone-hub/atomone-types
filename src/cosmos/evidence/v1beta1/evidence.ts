/* eslint-disable */
import { Timestamp } from "../../../google/protobuf/timestamp";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.evidence.v1beta1";
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface Equivocation {
  /** height is the equivocation height. */
  height: bigint;
  /** time is the equivocation time. */
  time: Timestamp | undefined;
  /** power is the equivocation validator power. */
  power: bigint;
  /** consensus_address is the equivocation validator consensus address. */
  consensusAddress: string;
}
export interface EquivocationProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.Equivocation";
  value: Uint8Array;
}
/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 */
export interface EquivocationAmino {
  /** height is the equivocation height. */
  height?: string;
  /** time is the equivocation time. */
  time: string | undefined;
  /** power is the equivocation validator power. */
  power?: string;
  /** consensus_address is the equivocation validator consensus address. */
  consensus_address?: string;
}
export interface EquivocationAminoMsg {
  type: "cosmos-sdk/Equivocation";
  value: EquivocationAmino;
}
function createBaseEquivocation(): Equivocation {
  return {
    height: BigInt(0),
    time: undefined,
    power: BigInt(0),
    consensusAddress: "",
  };
}
export const Equivocation = {
  typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
  aminoType: "cosmos-sdk/Equivocation",
  is(o: any): o is Equivocation {
    return (
      o &&
      (o.$typeUrl === Equivocation.typeUrl ||
        (typeof o.height === "bigint" &&
          Timestamp.is(o.time) &&
          typeof o.power === "bigint" &&
          typeof o.consensusAddress === "string"))
    );
  },
  isAmino(o: any): o is EquivocationAmino {
    return (
      o &&
      (o.$typeUrl === Equivocation.typeUrl ||
        (typeof o.height === "bigint" &&
          Timestamp.isAmino(o.time) &&
          typeof o.power === "bigint" &&
          typeof o.consensus_address === "string"))
    );
  },
  encode(message: Equivocation, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.height !== BigInt(0)) {
      writer.uint32(8).int64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
    }
    if (message.power !== BigInt(0)) {
      writer.uint32(24).int64(message.power);
    }
    if (message.consensusAddress !== "") {
      writer.uint32(34).string(message.consensusAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Equivocation {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEquivocation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64();
          break;
        case 2:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 3:
          message.power = reader.int64();
          break;
        case 4:
          message.consensusAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Equivocation {
    const obj = createBaseEquivocation();
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    if (isSet(object.power)) obj.power = BigInt(object.power.toString());
    if (isSet(object.consensusAddress)) obj.consensusAddress = String(object.consensusAddress);
    return obj;
  },
  toJSON(message: Equivocation): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.power !== undefined && (obj.power = (message.power || BigInt(0)).toString());
    message.consensusAddress !== undefined && (obj.consensusAddress = message.consensusAddress);
    return obj;
  },
  fromPartial(object: Partial<Equivocation>): Equivocation {
    const message = createBaseEquivocation();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power.toString());
    }
    message.consensusAddress = object.consensusAddress ?? "";
    return message;
  },
  fromAmino(object: EquivocationAmino): Equivocation {
    const message = createBaseEquivocation();
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.power !== undefined && object.power !== null) {
      message.power = BigInt(object.power);
    }
    if (object.consensus_address !== undefined && object.consensus_address !== null) {
      message.consensusAddress = object.consensus_address;
    }
    return message;
  },
  toAmino(message: Equivocation): EquivocationAmino {
    const obj: any = {};
    obj.height = message.height ? message.height.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    obj.power = message.power ? message.power.toString() : undefined;
    obj.consensus_address = message.consensusAddress;
    return obj;
  },
  fromAminoMsg(object: EquivocationAminoMsg): Equivocation {
    return Equivocation.fromAmino(object.value);
  },
  toAminoMsg(message: Equivocation): EquivocationAminoMsg {
    return {
      type: "cosmos-sdk/Equivocation",
      value: Equivocation.toAmino(message),
    };
  },
  fromProtoMsg(message: EquivocationProtoMsg): Equivocation {
    return Equivocation.decode(message.value);
  },
  toProto(message: Equivocation): Uint8Array {
    return Equivocation.encode(message).finish();
  },
  toProtoMsg(message: Equivocation): EquivocationProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.Equivocation",
      value: Equivocation.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(Equivocation.typeUrl, Equivocation);
GlobalDecoderRegistry.registerAminoProtoMapping(Equivocation.aminoType, Equivocation.typeUrl);
