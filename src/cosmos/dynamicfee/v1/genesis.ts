/* eslint-disable */
import { Params, ParamsAmino } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "cosmos.dynamicfee.v1";
/** GenesisState defines the dynamicfee module's genesis state. */
export interface GenesisState {
  /**
   * Params are the parameters for the dynamicfee module. These parameters
   * can be utilized to implement both the base EIP-1559 dynamic fee pricing
   * and the AIMD EIP-1559 dynamic fee pricing.
   */
  params: Params | undefined;
  /** State contains the current state of the AIMD dynamic fee pricer. */
  state: State | undefined;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/cosmos.dynamicfee.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the dynamicfee module's genesis state.
 * @name GenesisStateAmino
 * @package cosmos.dynamicfee.v1
 * @see proto type: cosmos.dynamicfee.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * Params are the parameters for the dynamicfee module. These parameters
   * can be utilized to implement both the base EIP-1559 dynamic fee pricing
   * and the AIMD EIP-1559 dynamic fee pricing.
   */
  params?: ParamsAmino | undefined;
  /**
   * State contains the current state of the AIMD dynamic fee pricer.
   */
  state?: StateAmino | undefined;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
/**
 * State is utilized to track the current state of the dynamic fee pricer.
 * This includes the current base fee, learning rate, and block gas within the
 * specified AIMD window.
 */
export interface State {
  /**
   * BaseGasPrice is the current base fee. This is denominated in the fee per
   * gas unit.
   */
  baseGasPrice: string;
  /** LearningRate is the current learning rate. */
  learningRate: string;
  /**
   * Window contains a list of the last blocks' gas values. This is used
   * to calculate the next base fee. This stores the number of units of gas
   * consumed per block.
   */
  window: bigint[];
  /** Index is the index of the current block in the block gas window. */
  index: bigint;
}
export interface StateProtoMsg {
  typeUrl: "/cosmos.dynamicfee.v1.State";
  value: Uint8Array;
}
/**
 * State is utilized to track the current state of the dynamic fee pricer.
 * This includes the current base fee, learning rate, and block gas within the
 * specified AIMD window.
 * @name StateAmino
 * @package cosmos.dynamicfee.v1
 * @see proto type: cosmos.dynamicfee.v1.State
 */
export interface StateAmino {
  /**
   * BaseGasPrice is the current base fee. This is denominated in the fee per
   * gas unit.
   */
  base_gas_price?: string;
  /**
   * LearningRate is the current learning rate.
   */
  learning_rate?: string;
  /**
   * Window contains a list of the last blocks' gas values. This is used
   * to calculate the next base fee. This stores the number of units of gas
   * consumed per block.
   */
  window?: string[];
  /**
   * Index is the index of the current block in the block gas window.
   */
  index?: string;
}
export interface StateAminoMsg {
  type: "cosmos-sdk/State";
  value: StateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    state: State.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/cosmos.dynamicfee.v1.GenesisState",
  aminoType: "cosmos-sdk/GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || (Params.is(o.params) && State.is(o.state)));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || (Params.isAmino(o.params) && State.isAmino(o.state)));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(18).fork()).ldelim();
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
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = State.decode(reader, reader.uint32());
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
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    if (isSet(object.state)) obj.state = State.fromJSON(object.state);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.state !== undefined && (obj.state = message.state ? State.toJSON(message.state) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromPartial(object.state);
    }
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    obj.state = message.state ? State.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message),
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
      typeUrl: "/cosmos.dynamicfee.v1.GenesisState",
      value: GenesisState.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);
GlobalDecoderRegistry.registerAminoProtoMapping(GenesisState.aminoType, GenesisState.typeUrl);
function createBaseState(): State {
  return {
    baseGasPrice: "",
    learningRate: "",
    window: [],
    index: BigInt(0),
  };
}
export const State = {
  typeUrl: "/cosmos.dynamicfee.v1.State",
  aminoType: "cosmos-sdk/State",
  is(o: any): o is State {
    return (
      o &&
      (o.$typeUrl === State.typeUrl ||
        (typeof o.baseGasPrice === "string" &&
          typeof o.learningRate === "string" &&
          Array.isArray(o.window) &&
          (!o.window.length || typeof o.window[0] === "bigint") &&
          typeof o.index === "bigint"))
    );
  },
  isAmino(o: any): o is StateAmino {
    return (
      o &&
      (o.$typeUrl === State.typeUrl ||
        (typeof o.base_gas_price === "string" &&
          typeof o.learning_rate === "string" &&
          Array.isArray(o.window) &&
          (!o.window.length || typeof o.window[0] === "bigint") &&
          typeof o.index === "bigint"))
    );
  },
  encode(message: State, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseGasPrice !== "") {
      writer.uint32(10).string(message.baseGasPrice);
    }
    if (message.learningRate !== "") {
      writer.uint32(18).string(message.learningRate);
    }
    writer.uint32(26).fork();
    for (const v of message.window) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.index !== BigInt(0)) {
      writer.uint32(32).uint64(message.index);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): State {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.baseGasPrice = reader.string();
          break;
        case 2:
          message.learningRate = reader.string();
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.window.push(reader.uint64());
            }
          } else {
            message.window.push(reader.uint64());
          }
          break;
        case 4:
          message.index = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): State {
    const obj = createBaseState();
    if (isSet(object.baseGasPrice)) obj.baseGasPrice = String(object.baseGasPrice);
    if (isSet(object.learningRate)) obj.learningRate = String(object.learningRate);
    if (Array.isArray(object?.window)) obj.window = object.window.map((e: any) => BigInt(e.toString()));
    if (isSet(object.index)) obj.index = BigInt(object.index.toString());
    return obj;
  },
  toJSON(message: State): JsonSafe<State> {
    const obj: any = {};
    message.baseGasPrice !== undefined && (obj.baseGasPrice = message.baseGasPrice);
    message.learningRate !== undefined && (obj.learningRate = message.learningRate);
    if (message.window) {
      obj.window = message.window.map((e) => (e || BigInt(0)).toString());
    } else {
      obj.window = [];
    }
    message.index !== undefined && (obj.index = (message.index || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<State>): State {
    const message = createBaseState();
    message.baseGasPrice = object.baseGasPrice ?? "";
    message.learningRate = object.learningRate ?? "";
    message.window = object.window?.map((e) => BigInt(e.toString())) || [];
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index.toString());
    }
    return message;
  },
  fromAmino(object: StateAmino): State {
    const message = createBaseState();
    if (object.base_gas_price !== undefined && object.base_gas_price !== null) {
      message.baseGasPrice = object.base_gas_price;
    }
    if (object.learning_rate !== undefined && object.learning_rate !== null) {
      message.learningRate = object.learning_rate;
    }
    message.window = object.window?.map((e) => BigInt(e)) || [];
    if (object.index !== undefined && object.index !== null) {
      message.index = BigInt(object.index);
    }
    return message;
  },
  toAmino(message: State): StateAmino {
    const obj: any = {};
    obj.base_gas_price = message.baseGasPrice === "" ? undefined : message.baseGasPrice;
    obj.learning_rate = message.learningRate === "" ? undefined : message.learningRate;
    if (message.window) {
      obj.window = message.window.map((e) => e.toString());
    } else {
      obj.window = message.window;
    }
    obj.index = message.index !== BigInt(0) ? message.index?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: StateAminoMsg): State {
    return State.fromAmino(object.value);
  },
  toAminoMsg(message: State): StateAminoMsg {
    return {
      type: "cosmos-sdk/State",
      value: State.toAmino(message),
    };
  },
  fromProtoMsg(message: StateProtoMsg): State {
    return State.decode(message.value);
  },
  toProto(message: State): Uint8Array {
    return State.encode(message).finish();
  },
  toProtoMsg(message: State): StateProtoMsg {
    return {
      typeUrl: "/cosmos.dynamicfee.v1.State",
      value: State.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(State.typeUrl, State);
GlobalDecoderRegistry.registerAminoProtoMapping(State.aminoType, State.typeUrl);
