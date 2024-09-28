/* eslint-disable */
import { Duration, DurationAmino } from "../../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "cosmos.group.module.v1";
/** Module is the config object of the group module. */
export interface Module {
  /**
   * max_execution_period defines the max duration after a proposal's voting period ends that members can send a MsgExec
   * to execute the proposal.
   */
  maxExecutionPeriod: Duration | undefined;
  /**
   * max_metadata_len defines the max length of the metadata bytes field for various entities within the group module.
   * Defaults to 255 if not explicitly set.
   */
  maxMetadataLen: bigint;
}
export interface ModuleProtoMsg {
  typeUrl: "/cosmos.group.module.v1.Module";
  value: Uint8Array;
}
/** Module is the config object of the group module. */
export interface ModuleAmino {
  /**
   * max_execution_period defines the max duration after a proposal's voting period ends that members can send a MsgExec
   * to execute the proposal.
   */
  max_execution_period: DurationAmino | undefined;
  /**
   * max_metadata_len defines the max length of the metadata bytes field for various entities within the group module.
   * Defaults to 255 if not explicitly set.
   */
  max_metadata_len?: string;
}
export interface ModuleAminoMsg {
  type: "cosmos-sdk/Module";
  value: ModuleAmino;
}
function createBaseModule(): Module {
  return {
    maxExecutionPeriod: undefined,
    maxMetadataLen: BigInt(0),
  };
}
export const Module = {
  typeUrl: "/cosmos.group.module.v1.Module",
  aminoType: "cosmos-sdk/Module",
  is(o: any): o is Module {
    return (
      o &&
      (o.$typeUrl === Module.typeUrl ||
        (Duration.is(o.maxExecutionPeriod) && typeof o.maxMetadataLen === "bigint"))
    );
  },
  isAmino(o: any): o is ModuleAmino {
    return (
      o &&
      (o.$typeUrl === Module.typeUrl ||
        (Duration.isAmino(o.max_execution_period) && typeof o.max_metadata_len === "bigint"))
    );
  },
  encode(message: Module, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxExecutionPeriod !== undefined) {
      Duration.encode(message.maxExecutionPeriod, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxMetadataLen !== BigInt(0)) {
      writer.uint32(16).uint64(message.maxMetadataLen);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Module {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxExecutionPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxMetadataLen = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Module {
    const obj = createBaseModule();
    if (isSet(object.maxExecutionPeriod))
      obj.maxExecutionPeriod = Duration.fromJSON(object.maxExecutionPeriod);
    if (isSet(object.maxMetadataLen)) obj.maxMetadataLen = BigInt(object.maxMetadataLen.toString());
    return obj;
  },
  toJSON(message: Module): unknown {
    const obj: any = {};
    message.maxExecutionPeriod !== undefined &&
      (obj.maxExecutionPeriod = message.maxExecutionPeriod
        ? Duration.toJSON(message.maxExecutionPeriod)
        : undefined);
    message.maxMetadataLen !== undefined &&
      (obj.maxMetadataLen = (message.maxMetadataLen || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Module>): Module {
    const message = createBaseModule();
    if (object.maxExecutionPeriod !== undefined && object.maxExecutionPeriod !== null) {
      message.maxExecutionPeriod = Duration.fromPartial(object.maxExecutionPeriod);
    }
    if (object.maxMetadataLen !== undefined && object.maxMetadataLen !== null) {
      message.maxMetadataLen = BigInt(object.maxMetadataLen.toString());
    }
    return message;
  },
  fromAmino(object: ModuleAmino): Module {
    const message = createBaseModule();
    if (object.max_execution_period !== undefined && object.max_execution_period !== null) {
      message.maxExecutionPeriod = Duration.fromAmino(object.max_execution_period);
    }
    if (object.max_metadata_len !== undefined && object.max_metadata_len !== null) {
      message.maxMetadataLen = BigInt(object.max_metadata_len);
    }
    return message;
  },
  toAmino(message: Module): ModuleAmino {
    const obj: any = {};
    obj.max_execution_period = message.maxExecutionPeriod
      ? Duration.toAmino(message.maxExecutionPeriod)
      : undefined;
    obj.max_metadata_len = message.maxMetadataLen ? message.maxMetadataLen.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ModuleAminoMsg): Module {
    return Module.fromAmino(object.value);
  },
  toAminoMsg(message: Module): ModuleAminoMsg {
    return {
      type: "cosmos-sdk/Module",
      value: Module.toAmino(message),
    };
  },
  fromProtoMsg(message: ModuleProtoMsg): Module {
    return Module.decode(message.value);
  },
  toProto(message: Module): Uint8Array {
    return Module.encode(message).finish();
  },
  toProtoMsg(message: Module): ModuleProtoMsg {
    return {
      typeUrl: "/cosmos.group.module.v1.Module",
      value: Module.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(Module.typeUrl, Module);
GlobalDecoderRegistry.registerAminoProtoMapping(Module.aminoType, Module.typeUrl);