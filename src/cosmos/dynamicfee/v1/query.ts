/* eslint-disable */
import { Params, ParamsAmino } from "./params";
import { State, StateAmino } from "./genesis";
import { DecCoin, DecCoinAmino } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { TxRpc } from "../../../types";
export const protobufPackage = "cosmos.dynamicfee.v1";
/** ParamsRequest is the request type for the Query/Params RPC method. */
export interface ParamsRequest {}
export interface ParamsRequestProtoMsg {
  typeUrl: "/cosmos.dynamicfee.v1.ParamsRequest";
  value: Uint8Array;
}
/**
 * ParamsRequest is the request type for the Query/Params RPC method.
 * @name ParamsRequestAmino
 * @package cosmos.dynamicfee.v1
 * @see proto type: cosmos.dynamicfee.v1.ParamsRequest
 */
export interface ParamsRequestAmino {}
export interface ParamsRequestAminoMsg {
  type: "cosmos-sdk/ParamsRequest";
  value: ParamsRequestAmino;
}
/** ParamsResponse is the response type for the Query/Params RPC method. */
export interface ParamsResponse {
  params: Params | undefined;
}
export interface ParamsResponseProtoMsg {
  typeUrl: "/cosmos.dynamicfee.v1.ParamsResponse";
  value: Uint8Array;
}
/**
 * ParamsResponse is the response type for the Query/Params RPC method.
 * @name ParamsResponseAmino
 * @package cosmos.dynamicfee.v1
 * @see proto type: cosmos.dynamicfee.v1.ParamsResponse
 */
export interface ParamsResponseAmino {
  params?: ParamsAmino | undefined;
}
export interface ParamsResponseAminoMsg {
  type: "cosmos-sdk/ParamsResponse";
  value: ParamsResponseAmino;
}
/** StateRequest is the request type for the Query/State RPC method. */
export interface StateRequest {}
export interface StateRequestProtoMsg {
  typeUrl: "/cosmos.dynamicfee.v1.StateRequest";
  value: Uint8Array;
}
/**
 * StateRequest is the request type for the Query/State RPC method.
 * @name StateRequestAmino
 * @package cosmos.dynamicfee.v1
 * @see proto type: cosmos.dynamicfee.v1.StateRequest
 */
export interface StateRequestAmino {}
export interface StateRequestAminoMsg {
  type: "cosmos-sdk/StateRequest";
  value: StateRequestAmino;
}
/** StateResponse is the response type for the Query/State RPC method. */
export interface StateResponse {
  state: State | undefined;
}
export interface StateResponseProtoMsg {
  typeUrl: "/cosmos.dynamicfee.v1.StateResponse";
  value: Uint8Array;
}
/**
 * StateResponse is the response type for the Query/State RPC method.
 * @name StateResponseAmino
 * @package cosmos.dynamicfee.v1
 * @see proto type: cosmos.dynamicfee.v1.StateResponse
 */
export interface StateResponseAmino {
  state?: StateAmino | undefined;
}
export interface StateResponseAminoMsg {
  type: "cosmos-sdk/StateResponse";
  value: StateResponseAmino;
}
/** GasPriceRequest is the request type for the Query/GasPrice RPC method. */
export interface GasPriceRequest {
  /** denom we are querying gas price in */
  denom: string;
}
export interface GasPriceRequestProtoMsg {
  typeUrl: "/cosmos.dynamicfee.v1.GasPriceRequest";
  value: Uint8Array;
}
/**
 * GasPriceRequest is the request type for the Query/GasPrice RPC method.
 * @name GasPriceRequestAmino
 * @package cosmos.dynamicfee.v1
 * @see proto type: cosmos.dynamicfee.v1.GasPriceRequest
 */
export interface GasPriceRequestAmino {
  /**
   * denom we are querying gas price in
   */
  denom?: string;
}
export interface GasPriceRequestAminoMsg {
  type: "cosmos-sdk/GasPriceRequest";
  value: GasPriceRequestAmino;
}
/**
 * GasPriceResponse is the response type for the Query/GasPrice RPC method.
 * Returns a gas price in specified denom.
 */
export interface GasPriceResponse {
  price: DecCoin | undefined;
}
export interface GasPriceResponseProtoMsg {
  typeUrl: "/cosmos.dynamicfee.v1.GasPriceResponse";
  value: Uint8Array;
}
/**
 * GasPriceResponse is the response type for the Query/GasPrice RPC method.
 * Returns a gas price in specified denom.
 * @name GasPriceResponseAmino
 * @package cosmos.dynamicfee.v1
 * @see proto type: cosmos.dynamicfee.v1.GasPriceResponse
 */
export interface GasPriceResponseAmino {
  price: DecCoinAmino | undefined;
}
export interface GasPriceResponseAminoMsg {
  type: "cosmos-sdk/GasPriceResponse";
  value: GasPriceResponseAmino;
}
/** GasPriceRequest is the request type for the Query/GasPrices RPC method. */
export interface GasPricesRequest {}
export interface GasPricesRequestProtoMsg {
  typeUrl: "/cosmos.dynamicfee.v1.GasPricesRequest";
  value: Uint8Array;
}
/**
 * GasPriceRequest is the request type for the Query/GasPrices RPC method.
 * @name GasPricesRequestAmino
 * @package cosmos.dynamicfee.v1
 * @see proto type: cosmos.dynamicfee.v1.GasPricesRequest
 */
export interface GasPricesRequestAmino {}
export interface GasPricesRequestAminoMsg {
  type: "cosmos-sdk/GasPricesRequest";
  value: GasPricesRequestAmino;
}
/**
 * GasPricesResponse is the response type for the Query/GasPrices RPC method.
 * Returns a gas price in all available denoms.
 */
export interface GasPricesResponse {
  prices: DecCoin[];
}
export interface GasPricesResponseProtoMsg {
  typeUrl: "/cosmos.dynamicfee.v1.GasPricesResponse";
  value: Uint8Array;
}
/**
 * GasPricesResponse is the response type for the Query/GasPrices RPC method.
 * Returns a gas price in all available denoms.
 * @name GasPricesResponseAmino
 * @package cosmos.dynamicfee.v1
 * @see proto type: cosmos.dynamicfee.v1.GasPricesResponse
 */
export interface GasPricesResponseAmino {
  prices: DecCoinAmino[];
}
export interface GasPricesResponseAminoMsg {
  type: "cosmos-sdk/GasPricesResponse";
  value: GasPricesResponseAmino;
}
function createBaseParamsRequest(): ParamsRequest {
  return {};
}
export const ParamsRequest = {
  typeUrl: "/cosmos.dynamicfee.v1.ParamsRequest",
  aminoType: "cosmos-sdk/ParamsRequest",
  is(o: any): o is ParamsRequest {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  isAmino(o: any): o is ParamsRequestAmino {
    return o && o.$typeUrl === ParamsRequest.typeUrl;
  },
  encode(_: ParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsRequest();
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
  fromJSON(_: any): ParamsRequest {
    const obj = createBaseParamsRequest();
    return obj;
  },
  toJSON(_: ParamsRequest): JsonSafe<ParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<ParamsRequest>): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  fromAmino(_: ParamsRequestAmino): ParamsRequest {
    const message = createBaseParamsRequest();
    return message;
  },
  toAmino(_: ParamsRequest): ParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: ParamsRequestAminoMsg): ParamsRequest {
    return ParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsRequest): ParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/ParamsRequest",
      value: ParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsRequestProtoMsg): ParamsRequest {
    return ParamsRequest.decode(message.value);
  },
  toProto(message: ParamsRequest): Uint8Array {
    return ParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: ParamsRequest): ParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.dynamicfee.v1.ParamsRequest",
      value: ParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParamsRequest.typeUrl, ParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsRequest.aminoType, ParamsRequest.typeUrl);
function createBaseParamsResponse(): ParamsResponse {
  return {
    params: Params.fromPartial({})
  };
}
export const ParamsResponse = {
  typeUrl: "/cosmos.dynamicfee.v1.ParamsResponse",
  aminoType: "cosmos-sdk/ParamsResponse",
  is(o: any): o is ParamsResponse {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is ParamsResponseAmino {
    return o && (o.$typeUrl === ParamsResponse.typeUrl || Params.isAmino(o.params));
  },
  encode(message: ParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ParamsResponse {
    const obj = createBaseParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: ParamsResponse): JsonSafe<ParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ParamsResponse>): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: ParamsResponseAmino): ParamsResponse {
    const message = createBaseParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: ParamsResponse): ParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsResponseAminoMsg): ParamsResponse {
    return ParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: ParamsResponse): ParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/ParamsResponse",
      value: ParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsResponseProtoMsg): ParamsResponse {
    return ParamsResponse.decode(message.value);
  },
  toProto(message: ParamsResponse): Uint8Array {
    return ParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: ParamsResponse): ParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.dynamicfee.v1.ParamsResponse",
      value: ParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ParamsResponse.typeUrl, ParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(ParamsResponse.aminoType, ParamsResponse.typeUrl);
function createBaseStateRequest(): StateRequest {
  return {};
}
export const StateRequest = {
  typeUrl: "/cosmos.dynamicfee.v1.StateRequest",
  aminoType: "cosmos-sdk/StateRequest",
  is(o: any): o is StateRequest {
    return o && o.$typeUrl === StateRequest.typeUrl;
  },
  isAmino(o: any): o is StateRequestAmino {
    return o && o.$typeUrl === StateRequest.typeUrl;
  },
  encode(_: StateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateRequest();
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
  fromJSON(_: any): StateRequest {
    const obj = createBaseStateRequest();
    return obj;
  },
  toJSON(_: StateRequest): JsonSafe<StateRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<StateRequest>): StateRequest {
    const message = createBaseStateRequest();
    return message;
  },
  fromAmino(_: StateRequestAmino): StateRequest {
    const message = createBaseStateRequest();
    return message;
  },
  toAmino(_: StateRequest): StateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: StateRequestAminoMsg): StateRequest {
    return StateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: StateRequest): StateRequestAminoMsg {
    return {
      type: "cosmos-sdk/StateRequest",
      value: StateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: StateRequestProtoMsg): StateRequest {
    return StateRequest.decode(message.value);
  },
  toProto(message: StateRequest): Uint8Array {
    return StateRequest.encode(message).finish();
  },
  toProtoMsg(message: StateRequest): StateRequestProtoMsg {
    return {
      typeUrl: "/cosmos.dynamicfee.v1.StateRequest",
      value: StateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StateRequest.typeUrl, StateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(StateRequest.aminoType, StateRequest.typeUrl);
function createBaseStateResponse(): StateResponse {
  return {
    state: State.fromPartial({})
  };
}
export const StateResponse = {
  typeUrl: "/cosmos.dynamicfee.v1.StateResponse",
  aminoType: "cosmos-sdk/StateResponse",
  is(o: any): o is StateResponse {
    return o && (o.$typeUrl === StateResponse.typeUrl || State.is(o.state));
  },
  isAmino(o: any): o is StateResponseAmino {
    return o && (o.$typeUrl === StateResponse.typeUrl || State.isAmino(o.state));
  },
  encode(message: StateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== undefined) {
      State.encode(message.state, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.state = State.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): StateResponse {
    const obj = createBaseStateResponse();
    if (isSet(object.state)) obj.state = State.fromJSON(object.state);
    return obj;
  },
  toJSON(message: StateResponse): JsonSafe<StateResponse> {
    const obj: any = {};
    message.state !== undefined && (obj.state = message.state ? State.toJSON(message.state) : undefined);
    return obj;
  },
  fromPartial(object: Partial<StateResponse>): StateResponse {
    const message = createBaseStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromPartial(object.state);
    }
    return message;
  },
  fromAmino(object: StateResponseAmino): StateResponse {
    const message = createBaseStateResponse();
    if (object.state !== undefined && object.state !== null) {
      message.state = State.fromAmino(object.state);
    }
    return message;
  },
  toAmino(message: StateResponse): StateResponseAmino {
    const obj: any = {};
    obj.state = message.state ? State.toAmino(message.state) : undefined;
    return obj;
  },
  fromAminoMsg(object: StateResponseAminoMsg): StateResponse {
    return StateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: StateResponse): StateResponseAminoMsg {
    return {
      type: "cosmos-sdk/StateResponse",
      value: StateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: StateResponseProtoMsg): StateResponse {
    return StateResponse.decode(message.value);
  },
  toProto(message: StateResponse): Uint8Array {
    return StateResponse.encode(message).finish();
  },
  toProtoMsg(message: StateResponse): StateResponseProtoMsg {
    return {
      typeUrl: "/cosmos.dynamicfee.v1.StateResponse",
      value: StateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StateResponse.typeUrl, StateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(StateResponse.aminoType, StateResponse.typeUrl);
function createBaseGasPriceRequest(): GasPriceRequest {
  return {
    denom: ""
  };
}
export const GasPriceRequest = {
  typeUrl: "/cosmos.dynamicfee.v1.GasPriceRequest",
  aminoType: "cosmos-sdk/GasPriceRequest",
  is(o: any): o is GasPriceRequest {
    return o && (o.$typeUrl === GasPriceRequest.typeUrl || typeof o.denom === "string");
  },
  isAmino(o: any): o is GasPriceRequestAmino {
    return o && (o.$typeUrl === GasPriceRequest.typeUrl || typeof o.denom === "string");
  },
  encode(message: GasPriceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasPriceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPriceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GasPriceRequest {
    const obj = createBaseGasPriceRequest();
    if (isSet(object.denom)) obj.denom = String(object.denom);
    return obj;
  },
  toJSON(message: GasPriceRequest): JsonSafe<GasPriceRequest> {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },
  fromPartial(object: Partial<GasPriceRequest>): GasPriceRequest {
    const message = createBaseGasPriceRequest();
    message.denom = object.denom ?? "";
    return message;
  },
  fromAmino(object: GasPriceRequestAmino): GasPriceRequest {
    const message = createBaseGasPriceRequest();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    return message;
  },
  toAmino(message: GasPriceRequest): GasPriceRequestAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    return obj;
  },
  fromAminoMsg(object: GasPriceRequestAminoMsg): GasPriceRequest {
    return GasPriceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GasPriceRequest): GasPriceRequestAminoMsg {
    return {
      type: "cosmos-sdk/GasPriceRequest",
      value: GasPriceRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GasPriceRequestProtoMsg): GasPriceRequest {
    return GasPriceRequest.decode(message.value);
  },
  toProto(message: GasPriceRequest): Uint8Array {
    return GasPriceRequest.encode(message).finish();
  },
  toProtoMsg(message: GasPriceRequest): GasPriceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.dynamicfee.v1.GasPriceRequest",
      value: GasPriceRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GasPriceRequest.typeUrl, GasPriceRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GasPriceRequest.aminoType, GasPriceRequest.typeUrl);
function createBaseGasPriceResponse(): GasPriceResponse {
  return {
    price: DecCoin.fromPartial({})
  };
}
export const GasPriceResponse = {
  typeUrl: "/cosmos.dynamicfee.v1.GasPriceResponse",
  aminoType: "cosmos-sdk/GasPriceResponse",
  is(o: any): o is GasPriceResponse {
    return o && (o.$typeUrl === GasPriceResponse.typeUrl || DecCoin.is(o.price));
  },
  isAmino(o: any): o is GasPriceResponseAmino {
    return o && (o.$typeUrl === GasPriceResponse.typeUrl || DecCoin.isAmino(o.price));
  },
  encode(message: GasPriceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasPriceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPriceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GasPriceResponse {
    const obj = createBaseGasPriceResponse();
    if (isSet(object.price)) obj.price = DecCoin.fromJSON(object.price);
    return obj;
  },
  toJSON(message: GasPriceResponse): JsonSafe<GasPriceResponse> {
    const obj: any = {};
    message.price !== undefined && (obj.price = message.price ? DecCoin.toJSON(message.price) : undefined);
    return obj;
  },
  fromPartial(object: Partial<GasPriceResponse>): GasPriceResponse {
    const message = createBaseGasPriceResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromPartial(object.price);
    }
    return message;
  },
  fromAmino(object: GasPriceResponseAmino): GasPriceResponse {
    const message = createBaseGasPriceResponse();
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: GasPriceResponse): GasPriceResponseAmino {
    const obj: any = {};
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: GasPriceResponseAminoMsg): GasPriceResponse {
    return GasPriceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GasPriceResponse): GasPriceResponseAminoMsg {
    return {
      type: "cosmos-sdk/GasPriceResponse",
      value: GasPriceResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GasPriceResponseProtoMsg): GasPriceResponse {
    return GasPriceResponse.decode(message.value);
  },
  toProto(message: GasPriceResponse): Uint8Array {
    return GasPriceResponse.encode(message).finish();
  },
  toProtoMsg(message: GasPriceResponse): GasPriceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.dynamicfee.v1.GasPriceResponse",
      value: GasPriceResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GasPriceResponse.typeUrl, GasPriceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GasPriceResponse.aminoType, GasPriceResponse.typeUrl);
function createBaseGasPricesRequest(): GasPricesRequest {
  return {};
}
export const GasPricesRequest = {
  typeUrl: "/cosmos.dynamicfee.v1.GasPricesRequest",
  aminoType: "cosmos-sdk/GasPricesRequest",
  is(o: any): o is GasPricesRequest {
    return o && o.$typeUrl === GasPricesRequest.typeUrl;
  },
  isAmino(o: any): o is GasPricesRequestAmino {
    return o && o.$typeUrl === GasPricesRequest.typeUrl;
  },
  encode(_: GasPricesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasPricesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPricesRequest();
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
  fromJSON(_: any): GasPricesRequest {
    const obj = createBaseGasPricesRequest();
    return obj;
  },
  toJSON(_: GasPricesRequest): JsonSafe<GasPricesRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<GasPricesRequest>): GasPricesRequest {
    const message = createBaseGasPricesRequest();
    return message;
  },
  fromAmino(_: GasPricesRequestAmino): GasPricesRequest {
    const message = createBaseGasPricesRequest();
    return message;
  },
  toAmino(_: GasPricesRequest): GasPricesRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: GasPricesRequestAminoMsg): GasPricesRequest {
    return GasPricesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: GasPricesRequest): GasPricesRequestAminoMsg {
    return {
      type: "cosmos-sdk/GasPricesRequest",
      value: GasPricesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: GasPricesRequestProtoMsg): GasPricesRequest {
    return GasPricesRequest.decode(message.value);
  },
  toProto(message: GasPricesRequest): Uint8Array {
    return GasPricesRequest.encode(message).finish();
  },
  toProtoMsg(message: GasPricesRequest): GasPricesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.dynamicfee.v1.GasPricesRequest",
      value: GasPricesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GasPricesRequest.typeUrl, GasPricesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(GasPricesRequest.aminoType, GasPricesRequest.typeUrl);
function createBaseGasPricesResponse(): GasPricesResponse {
  return {
    prices: []
  };
}
export const GasPricesResponse = {
  typeUrl: "/cosmos.dynamicfee.v1.GasPricesResponse",
  aminoType: "cosmos-sdk/GasPricesResponse",
  is(o: any): o is GasPricesResponse {
    return o && (o.$typeUrl === GasPricesResponse.typeUrl || Array.isArray(o.prices) && (!o.prices.length || DecCoin.is(o.prices[0])));
  },
  isAmino(o: any): o is GasPricesResponseAmino {
    return o && (o.$typeUrl === GasPricesResponse.typeUrl || Array.isArray(o.prices) && (!o.prices.length || DecCoin.isAmino(o.prices[0])));
  },
  encode(message: GasPricesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.prices) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GasPricesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGasPricesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.prices.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GasPricesResponse {
    const obj = createBaseGasPricesResponse();
    if (Array.isArray(object?.prices)) obj.prices = object.prices.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: GasPricesResponse): JsonSafe<GasPricesResponse> {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? DecCoin.toJSON(e) : undefined);
    } else {
      obj.prices = [];
    }
    return obj;
  },
  fromPartial(object: Partial<GasPricesResponse>): GasPricesResponse {
    const message = createBaseGasPricesResponse();
    message.prices = object.prices?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GasPricesResponseAmino): GasPricesResponse {
    const message = createBaseGasPricesResponse();
    message.prices = object.prices?.map(e => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GasPricesResponse): GasPricesResponseAmino {
    const obj: any = {};
    if (message.prices) {
      obj.prices = message.prices.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.prices = message.prices;
    }
    return obj;
  },
  fromAminoMsg(object: GasPricesResponseAminoMsg): GasPricesResponse {
    return GasPricesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: GasPricesResponse): GasPricesResponseAminoMsg {
    return {
      type: "cosmos-sdk/GasPricesResponse",
      value: GasPricesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: GasPricesResponseProtoMsg): GasPricesResponse {
    return GasPricesResponse.decode(message.value);
  },
  toProto(message: GasPricesResponse): Uint8Array {
    return GasPricesResponse.encode(message).finish();
  },
  toProtoMsg(message: GasPricesResponse): GasPricesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.dynamicfee.v1.GasPricesResponse",
      value: GasPricesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GasPricesResponse.typeUrl, GasPricesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(GasPricesResponse.aminoType, GasPricesResponse.typeUrl);
/** Query Service for the dynamicfee module. */
export interface Query {
  /** Params returns the current dynamicfee module parameters. */
  Params(request?: ParamsRequest): Promise<ParamsResponse>;
  /** State returns the current dynamicfee module state. */
  State(request?: StateRequest): Promise<StateResponse>;
  /**
   * GasPrice returns the current dynamicfee module gas price
   * for specified denom.
   */
  GasPrice(request: GasPriceRequest): Promise<GasPriceResponse>;
  /**
   * GasPrices returns the current dynamicfee module list of gas prices
   * in all available denoms.
   */
  GasPrices(request?: GasPricesRequest): Promise<GasPricesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.State = this.State.bind(this);
    this.GasPrice = this.GasPrice.bind(this);
    this.GasPrices = this.GasPrices.bind(this);
  }
  Params(request: ParamsRequest = {}): Promise<ParamsResponse> {
    const data = ParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.dynamicfee.v1.Query", "Params", data);
    return promise.then(data => ParamsResponse.decode(new BinaryReader(data)));
  }
  State(request: StateRequest = {}): Promise<StateResponse> {
    const data = StateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.dynamicfee.v1.Query", "State", data);
    return promise.then(data => StateResponse.decode(new BinaryReader(data)));
  }
  GasPrice(request: GasPriceRequest): Promise<GasPriceResponse> {
    const data = GasPriceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.dynamicfee.v1.Query", "GasPrice", data);
    return promise.then(data => GasPriceResponse.decode(new BinaryReader(data)));
  }
  GasPrices(request: GasPricesRequest = {}): Promise<GasPricesResponse> {
    const data = GasPricesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.dynamicfee.v1.Query", "GasPrices", data);
    return promise.then(data => GasPricesResponse.decode(new BinaryReader(data)));
  }
}