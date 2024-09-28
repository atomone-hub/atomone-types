/* eslint-disable */
import { Coin, CoinAmino } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { TxRpc } from "../../../types";
export const protobufPackage = "cosmos.crisis.v1beta1";
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariant {
  /** sender is the account address of private key to send coins to fee collector account. */
  sender: string;
  /** name of the invariant module. */
  invariantModuleName: string;
  /** invariant_route is the msg's invariant route. */
  invariantRoute: string;
}
export interface MsgVerifyInvariantProtoMsg {
  typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant";
  value: Uint8Array;
}
/** MsgVerifyInvariant represents a message to verify a particular invariance. */
export interface MsgVerifyInvariantAmino {
  /** sender is the account address of private key to send coins to fee collector account. */
  sender?: string;
  /** name of the invariant module. */
  invariant_module_name?: string;
  /** invariant_route is the msg's invariant route. */
  invariant_route?: string;
}
export interface MsgVerifyInvariantAminoMsg {
  type: "cosmos-sdk/MsgVerifyInvariant";
  value: MsgVerifyInvariantAmino;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponse {}
export interface MsgVerifyInvariantResponseProtoMsg {
  typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse";
  value: Uint8Array;
}
/** MsgVerifyInvariantResponse defines the Msg/VerifyInvariant response type. */
export interface MsgVerifyInvariantResponseAmino {}
export interface MsgVerifyInvariantResponseAminoMsg {
  type: "cosmos-sdk/MsgVerifyInvariantResponse";
  value: MsgVerifyInvariantResponseAmino;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParams {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** constant_fee defines the x/crisis parameter. */
  constantFee: Coin | undefined;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /** constant_fee defines the x/crisis parameter. */
  constant_fee: CoinAmino | undefined;
}
export interface MsgUpdateParamsAminoMsg {
  type: "cosmos-sdk/x/crisis/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 *
 * Since: cosmos-sdk 0.47
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgVerifyInvariant(): MsgVerifyInvariant {
  return {
    sender: "",
    invariantModuleName: "",
    invariantRoute: "",
  };
}
export const MsgVerifyInvariant = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
  aminoType: "cosmos-sdk/MsgVerifyInvariant",
  is(o: any): o is MsgVerifyInvariant {
    return (
      o &&
      (o.$typeUrl === MsgVerifyInvariant.typeUrl ||
        (typeof o.sender === "string" &&
          typeof o.invariantModuleName === "string" &&
          typeof o.invariantRoute === "string"))
    );
  },
  isAmino(o: any): o is MsgVerifyInvariantAmino {
    return (
      o &&
      (o.$typeUrl === MsgVerifyInvariant.typeUrl ||
        (typeof o.sender === "string" &&
          typeof o.invariant_module_name === "string" &&
          typeof o.invariant_route === "string"))
    );
  },
  encode(message: MsgVerifyInvariant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.invariantModuleName !== "") {
      writer.uint32(18).string(message.invariantModuleName);
    }
    if (message.invariantRoute !== "") {
      writer.uint32(26).string(message.invariantRoute);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVerifyInvariant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.invariantModuleName = reader.string();
          break;
        case 3:
          message.invariantRoute = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgVerifyInvariant {
    const obj = createBaseMsgVerifyInvariant();
    if (isSet(object.sender)) obj.sender = String(object.sender);
    if (isSet(object.invariantModuleName)) obj.invariantModuleName = String(object.invariantModuleName);
    if (isSet(object.invariantRoute)) obj.invariantRoute = String(object.invariantRoute);
    return obj;
  },
  toJSON(message: MsgVerifyInvariant): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.invariantModuleName !== undefined && (obj.invariantModuleName = message.invariantModuleName);
    message.invariantRoute !== undefined && (obj.invariantRoute = message.invariantRoute);
    return obj;
  },
  fromPartial(object: Partial<MsgVerifyInvariant>): MsgVerifyInvariant {
    const message = createBaseMsgVerifyInvariant();
    message.sender = object.sender ?? "";
    message.invariantModuleName = object.invariantModuleName ?? "";
    message.invariantRoute = object.invariantRoute ?? "";
    return message;
  },
  fromAmino(object: MsgVerifyInvariantAmino): MsgVerifyInvariant {
    const message = createBaseMsgVerifyInvariant();
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    }
    if (object.invariant_module_name !== undefined && object.invariant_module_name !== null) {
      message.invariantModuleName = object.invariant_module_name;
    }
    if (object.invariant_route !== undefined && object.invariant_route !== null) {
      message.invariantRoute = object.invariant_route;
    }
    return message;
  },
  toAmino(message: MsgVerifyInvariant): MsgVerifyInvariantAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.invariant_module_name = message.invariantModuleName;
    obj.invariant_route = message.invariantRoute;
    return obj;
  },
  fromAminoMsg(object: MsgVerifyInvariantAminoMsg): MsgVerifyInvariant {
    return MsgVerifyInvariant.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVerifyInvariant): MsgVerifyInvariantAminoMsg {
    return {
      type: "cosmos-sdk/MsgVerifyInvariant",
      value: MsgVerifyInvariant.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgVerifyInvariantProtoMsg): MsgVerifyInvariant {
    return MsgVerifyInvariant.decode(message.value);
  },
  toProto(message: MsgVerifyInvariant): Uint8Array {
    return MsgVerifyInvariant.encode(message).finish();
  },
  toProtoMsg(message: MsgVerifyInvariant): MsgVerifyInvariantProtoMsg {
    return {
      typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariant",
      value: MsgVerifyInvariant.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(MsgVerifyInvariant.typeUrl, MsgVerifyInvariant);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgVerifyInvariant.aminoType, MsgVerifyInvariant.typeUrl);
function createBaseMsgVerifyInvariantResponse(): MsgVerifyInvariantResponse {
  return {};
}
export const MsgVerifyInvariantResponse = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
  aminoType: "cosmos-sdk/MsgVerifyInvariantResponse",
  is(o: any): o is MsgVerifyInvariantResponse {
    return o && o.$typeUrl === MsgVerifyInvariantResponse.typeUrl;
  },
  isAmino(o: any): o is MsgVerifyInvariantResponseAmino {
    return o && o.$typeUrl === MsgVerifyInvariantResponse.typeUrl;
  },
  encode(_: MsgVerifyInvariantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgVerifyInvariantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVerifyInvariantResponse();
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
  fromJSON(_: any): MsgVerifyInvariantResponse {
    const obj = createBaseMsgVerifyInvariantResponse();
    return obj;
  },
  toJSON(_: MsgVerifyInvariantResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgVerifyInvariantResponse>): MsgVerifyInvariantResponse {
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  },
  fromAmino(_: MsgVerifyInvariantResponseAmino): MsgVerifyInvariantResponse {
    const message = createBaseMsgVerifyInvariantResponse();
    return message;
  },
  toAmino(_: MsgVerifyInvariantResponse): MsgVerifyInvariantResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgVerifyInvariantResponseAminoMsg): MsgVerifyInvariantResponse {
    return MsgVerifyInvariantResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgVerifyInvariantResponse): MsgVerifyInvariantResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgVerifyInvariantResponse",
      value: MsgVerifyInvariantResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgVerifyInvariantResponseProtoMsg): MsgVerifyInvariantResponse {
    return MsgVerifyInvariantResponse.decode(message.value);
  },
  toProto(message: MsgVerifyInvariantResponse): Uint8Array {
    return MsgVerifyInvariantResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgVerifyInvariantResponse): MsgVerifyInvariantResponseProtoMsg {
    return {
      typeUrl: "/cosmos.crisis.v1beta1.MsgVerifyInvariantResponse",
      value: MsgVerifyInvariantResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(MsgVerifyInvariantResponse.typeUrl, MsgVerifyInvariantResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  MsgVerifyInvariantResponse.aminoType,
  MsgVerifyInvariantResponse.typeUrl,
);
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    authority: "",
    constantFee: undefined,
  };
}
export const MsgUpdateParams = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams",
  aminoType: "cosmos-sdk/x/crisis/MsgUpdateParams",
  is(o: any): o is MsgUpdateParams {
    return (
      o &&
      (o.$typeUrl === MsgUpdateParams.typeUrl || (typeof o.authority === "string" && Coin.is(o.constantFee)))
    );
  },
  isAmino(o: any): o is MsgUpdateParamsAmino {
    return (
      o &&
      (o.$typeUrl === MsgUpdateParams.typeUrl ||
        (typeof o.authority === "string" && Coin.isAmino(o.constant_fee)))
    );
  },
  encode(message: MsgUpdateParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.constantFee !== undefined) {
      Coin.encode(message.constantFee, writer.uint32(18).fork()).ldelim();
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
          message.constantFee = Coin.decode(reader, reader.uint32());
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
    if (isSet(object.constantFee)) obj.constantFee = Coin.fromJSON(object.constantFee);
    return obj;
  },
  toJSON(message: MsgUpdateParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.constantFee !== undefined &&
      (obj.constantFee = message.constantFee ? Coin.toJSON(message.constantFee) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.authority = object.authority ?? "";
    if (object.constantFee !== undefined && object.constantFee !== null) {
      message.constantFee = Coin.fromPartial(object.constantFee);
    }
    return message;
  },
  fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.constant_fee !== undefined && object.constant_fee !== null) {
      message.constantFee = Coin.fromAmino(object.constant_fee);
    }
    return message;
  },
  toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.constant_fee = message.constantFee ? Coin.toAmino(message.constantFee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams {
    return MsgUpdateParams.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "cosmos-sdk/x/crisis/MsgUpdateParams",
      value: MsgUpdateParams.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams {
    return MsgUpdateParams.decode(message.value);
  },
  toProto(message: MsgUpdateParams): Uint8Array {
    return MsgUpdateParams.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg {
    return {
      typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(MsgUpdateParams.typeUrl, MsgUpdateParams);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgUpdateParams.aminoType, MsgUpdateParams.typeUrl);
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParamsResponse",
  aminoType: "cosmos-sdk/MsgUpdateParamsResponse",
  is(o: any): o is MsgUpdateParamsResponse {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateParamsResponseAmino {
    return o && o.$typeUrl === MsgUpdateParamsResponse.typeUrl;
  },
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
  toJSON(_: MsgUpdateParamsResponse): unknown {
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
  toAminoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse {
    return MsgUpdateParamsResponse.decode(message.value);
  },
  toProto(message: MsgUpdateParamsResponse): Uint8Array {
    return MsgUpdateParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.crisis.v1beta1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(MsgUpdateParamsResponse.typeUrl, MsgUpdateParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  MsgUpdateParamsResponse.aminoType,
  MsgUpdateParamsResponse.typeUrl,
);
/** Msg defines the bank Msg service. */
export interface Msg {
  /** VerifyInvariant defines a method to verify a particular invariant. */
  VerifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/crisis module
   * parameters. The authority is defined in the keeper.
   *
   * Since: cosmos-sdk 0.47
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.VerifyInvariant = this.VerifyInvariant.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  VerifyInvariant(request: MsgVerifyInvariant): Promise<MsgVerifyInvariantResponse> {
    const data = MsgVerifyInvariant.encode(request).finish();
    const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "VerifyInvariant", data);
    return promise.then((data) => MsgVerifyInvariantResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("cosmos.crisis.v1beta1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}