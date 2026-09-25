/* eslint-disable */
import { Coin, CoinAmino } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino } from "./photon";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { TxRpc } from "../../../types";
export const protobufPackage = "atomone.photon.v1";
/** MsgMintPhoton defines an sdk.Msg for burning atone and minting photons. */
export interface MsgMintPhoton {
  toAddress: string;
  amount: Coin | undefined;
}
export interface MsgMintPhotonProtoMsg {
  typeUrl: "/atomone.photon.v1.MsgMintPhoton";
  value: Uint8Array;
}
/**
 * MsgMintPhoton defines an sdk.Msg for burning atone and minting photons.
 * @name MsgMintPhotonAmino
 * @package atomone.photon.v1
 * @see proto type: atomone.photon.v1.MsgMintPhoton
 */
export interface MsgMintPhotonAmino {
  to_address?: string;
  amount: CoinAmino | undefined;
}
export interface MsgMintPhotonAminoMsg {
  type: "atomone/photon/v1/MsgMintPhoton";
  value: MsgMintPhotonAmino;
}
/**
 * MsgMintPhotonResponse defines the response structure for executing a
 * MsgMintPhoton message.
 */
export interface MsgMintPhotonResponse {
  minted: Coin | undefined;
  /** conversion_rate represents the factor used to convert atone to photon. */
  conversionRate: string;
}
export interface MsgMintPhotonResponseProtoMsg {
  typeUrl: "/atomone.photon.v1.MsgMintPhotonResponse";
  value: Uint8Array;
}
/**
 * MsgMintPhotonResponse defines the response structure for executing a
 * MsgMintPhoton message.
 * @name MsgMintPhotonResponseAmino
 * @package atomone.photon.v1
 * @see proto type: atomone.photon.v1.MsgMintPhotonResponse
 */
export interface MsgMintPhotonResponseAmino {
  minted: CoinAmino | undefined;
  /**
   * conversion_rate represents the factor used to convert atone to photon.
   */
  conversion_rate?: string;
}
export interface MsgMintPhotonResponseAminoMsg {
  type: "/atomone.photon.v1.MsgMintPhotonResponse";
  value: MsgMintPhotonResponseAmino;
}
/** MsgUpdateParams is the Msg/UpdateParams request type. */
export interface MsgUpdateParams {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority: string;
  /**
   * params defines the x/gov parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: Params | undefined;
}
export interface MsgUpdateParamsProtoMsg {
  typeUrl: "/atomone.photon.v1.MsgUpdateParams";
  value: Uint8Array;
}
/**
 * MsgUpdateParams is the Msg/UpdateParams request type.
 * @name MsgUpdateParamsAmino
 * @package atomone.photon.v1
 * @see proto type: atomone.photon.v1.MsgUpdateParams
 */
export interface MsgUpdateParamsAmino {
  /**
   * authority is the address that controls the module (defaults to x/gov unless
   * overwritten).
   */
  authority?: string;
  /**
   * params defines the x/gov parameters to update.
   *
   * NOTE: All parameters must be supplied.
   */
  params: ParamsAmino | undefined;
}
export interface MsgUpdateParamsAminoMsg {
  type: "atomone/x/photon/v1/MsgUpdateParams";
  value: MsgUpdateParamsAmino;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 */
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseProtoMsg {
  typeUrl: "/atomone.photon.v1.MsgUpdateParamsResponse";
  value: Uint8Array;
}
/**
 * MsgUpdateParamsResponse defines the response structure for executing a
 * MsgUpdateParams message.
 * @name MsgUpdateParamsResponseAmino
 * @package atomone.photon.v1
 * @see proto type: atomone.photon.v1.MsgUpdateParamsResponse
 */
export interface MsgUpdateParamsResponseAmino {}
export interface MsgUpdateParamsResponseAminoMsg {
  type: "/atomone.photon.v1.MsgUpdateParamsResponse";
  value: MsgUpdateParamsResponseAmino;
}
function createBaseMsgMintPhoton(): MsgMintPhoton {
  return {
    toAddress: "",
    amount: undefined,
  };
}
export const MsgMintPhoton = {
  typeUrl: "/atomone.photon.v1.MsgMintPhoton",
  encode(message: MsgMintPhoton, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.toAddress !== "") {
      writer.uint32(10).string(message.toAddress);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintPhoton {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintPhoton();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.toAddress = reader.string();
          break;
        case 2:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMintPhoton {
    const obj = createBaseMsgMintPhoton();
    if (isSet(object.toAddress)) obj.toAddress = String(object.toAddress);
    if (isSet(object.amount)) obj.amount = Coin.fromJSON(object.amount);
    return obj;
  },
  toJSON(message: MsgMintPhoton): JsonSafe<MsgMintPhoton> {
    const obj: any = {};
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgMintPhoton>): MsgMintPhoton {
    const message = createBaseMsgMintPhoton();
    message.toAddress = object.toAddress ?? "";
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    }
    return message;
  },
  fromAmino(object: MsgMintPhotonAmino): MsgMintPhoton {
    const message = createBaseMsgMintPhoton();
    if (object.to_address !== undefined && object.to_address !== null) {
      message.toAddress = object.to_address;
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromAmino(object.amount);
    }
    return message;
  },
  toAmino(message: MsgMintPhoton): MsgMintPhotonAmino {
    const obj: any = {};
    obj.to_address = message.toAddress === "" ? undefined : message.toAddress;
    obj.amount = message.amount ? Coin.toAmino(message.amount) : Coin.toAmino(Coin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgMintPhotonAminoMsg): MsgMintPhoton {
    return MsgMintPhoton.fromAmino(object.value);
  },
  toAminoMsg(message: MsgMintPhoton): MsgMintPhotonAminoMsg {
    return {
      type: "atomone/photon/v1/MsgMintPhoton",
      value: MsgMintPhoton.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgMintPhotonProtoMsg): MsgMintPhoton {
    return MsgMintPhoton.decode(message.value);
  },
  toProto(message: MsgMintPhoton): Uint8Array {
    return MsgMintPhoton.encode(message).finish();
  },
  toProtoMsg(message: MsgMintPhoton): MsgMintPhotonProtoMsg {
    return {
      typeUrl: "/atomone.photon.v1.MsgMintPhoton",
      value: MsgMintPhoton.encode(message).finish(),
    };
  },
};
function createBaseMsgMintPhotonResponse(): MsgMintPhotonResponse {
  return {
    minted: undefined,
    conversionRate: "",
  };
}
export const MsgMintPhotonResponse = {
  typeUrl: "/atomone.photon.v1.MsgMintPhotonResponse",
  encode(message: MsgMintPhotonResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minted !== undefined) {
      Coin.encode(message.minted, writer.uint32(10).fork()).ldelim();
    }
    if (message.conversionRate !== "") {
      writer.uint32(18).string(message.conversionRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgMintPhotonResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintPhotonResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minted = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.conversionRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgMintPhotonResponse {
    const obj = createBaseMsgMintPhotonResponse();
    if (isSet(object.minted)) obj.minted = Coin.fromJSON(object.minted);
    if (isSet(object.conversionRate)) obj.conversionRate = String(object.conversionRate);
    return obj;
  },
  toJSON(message: MsgMintPhotonResponse): JsonSafe<MsgMintPhotonResponse> {
    const obj: any = {};
    message.minted !== undefined && (obj.minted = message.minted ? Coin.toJSON(message.minted) : undefined);
    message.conversionRate !== undefined && (obj.conversionRate = message.conversionRate);
    return obj;
  },
  fromPartial(object: Partial<MsgMintPhotonResponse>): MsgMintPhotonResponse {
    const message = createBaseMsgMintPhotonResponse();
    if (object.minted !== undefined && object.minted !== null) {
      message.minted = Coin.fromPartial(object.minted);
    }
    message.conversionRate = object.conversionRate ?? "";
    return message;
  },
  fromAmino(object: MsgMintPhotonResponseAmino): MsgMintPhotonResponse {
    const message = createBaseMsgMintPhotonResponse();
    if (object.minted !== undefined && object.minted !== null) {
      message.minted = Coin.fromAmino(object.minted);
    }
    if (object.conversion_rate !== undefined && object.conversion_rate !== null) {
      message.conversionRate = object.conversion_rate;
    }
    return message;
  },
  toAmino(message: MsgMintPhotonResponse): MsgMintPhotonResponseAmino {
    const obj: any = {};
    obj.minted = message.minted ? Coin.toAmino(message.minted) : Coin.toAmino(Coin.fromPartial({}));
    obj.conversion_rate = message.conversionRate === "" ? undefined : message.conversionRate;
    return obj;
  },
  fromAminoMsg(object: MsgMintPhotonResponseAminoMsg): MsgMintPhotonResponse {
    return MsgMintPhotonResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgMintPhotonResponseProtoMsg): MsgMintPhotonResponse {
    return MsgMintPhotonResponse.decode(message.value);
  },
  toProto(message: MsgMintPhotonResponse): Uint8Array {
    return MsgMintPhotonResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgMintPhotonResponse): MsgMintPhotonResponseProtoMsg {
    return {
      typeUrl: "/atomone.photon.v1.MsgMintPhotonResponse",
      value: MsgMintPhotonResponse.encode(message).finish(),
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
  typeUrl: "/atomone.photon.v1.MsgUpdateParams",
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
  toAminoMsg(message: MsgUpdateParams): MsgUpdateParamsAminoMsg {
    return {
      type: "atomone/x/photon/v1/MsgUpdateParams",
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
      typeUrl: "/atomone.photon.v1.MsgUpdateParams",
      value: MsgUpdateParams.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  typeUrl: "/atomone.photon.v1.MsgUpdateParamsResponse",
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
      typeUrl: "/atomone.photon.v1.MsgUpdateParamsResponse",
      value: MsgUpdateParamsResponse.encode(message).finish(),
    };
  },
};
/** Msg defines the Msg service. */
export interface Msg {
  /** MintPhoton defines a method to burn atone and mint photons. */
  MintPhoton(request: MsgMintPhoton): Promise<MsgMintPhotonResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/photon
   * module parameters. The authority is defined in the keeper.
   */
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.MintPhoton = this.MintPhoton.bind(this);
    this.UpdateParams = this.UpdateParams.bind(this);
  }
  MintPhoton(request: MsgMintPhoton): Promise<MsgMintPhotonResponse> {
    const data = MsgMintPhoton.encode(request).finish();
    const promise = this.rpc.request("atomone.photon.v1.Msg", "MintPhoton", data);
    return promise.then((data) => MsgMintPhotonResponse.decode(new BinaryReader(data)));
  }
  UpdateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("atomone.photon.v1.Msg", "UpdateParams", data);
    return promise.then((data) => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}
