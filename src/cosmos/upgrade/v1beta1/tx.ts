/* eslint-disable */
import { Plan, PlanAmino } from "./upgrade";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { TxRpc } from "../../../types";
export const protobufPackage = "cosmos.upgrade.v1beta1";
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgrade {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
  /** plan is the upgrade plan. */
  plan: Plan | undefined;
}
export interface MsgSoftwareUpgradeProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade";
  value: Uint8Array;
}
/**
 * MsgSoftwareUpgrade is the Msg/SoftwareUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
  /** plan is the upgrade plan. */
  plan: PlanAmino | undefined;
}
export interface MsgSoftwareUpgradeAminoMsg {
  type: "cosmos-sdk/MsgSoftwareUpgrade";
  value: MsgSoftwareUpgradeAmino;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponse {}
export interface MsgSoftwareUpgradeResponseProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse";
  value: Uint8Array;
}
/**
 * MsgSoftwareUpgradeResponse is the Msg/SoftwareUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgSoftwareUpgradeResponseAmino {}
export interface MsgSoftwareUpgradeResponseAminoMsg {
  type: "cosmos-sdk/MsgSoftwareUpgradeResponse";
  value: MsgSoftwareUpgradeResponseAmino;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgrade {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority: string;
}
export interface MsgCancelUpgradeProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade";
  value: Uint8Array;
}
/**
 * MsgCancelUpgrade is the Msg/CancelUpgrade request type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeAmino {
  /** authority is the address that controls the module (defaults to x/gov unless overwritten). */
  authority?: string;
}
export interface MsgCancelUpgradeAminoMsg {
  type: "cosmos-sdk/MsgCancelUpgrade";
  value: MsgCancelUpgradeAmino;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponse {}
export interface MsgCancelUpgradeResponseProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse";
  value: Uint8Array;
}
/**
 * MsgCancelUpgradeResponse is the Msg/CancelUpgrade response type.
 *
 * Since: cosmos-sdk 0.46
 */
export interface MsgCancelUpgradeResponseAmino {}
export interface MsgCancelUpgradeResponseAminoMsg {
  type: "cosmos-sdk/MsgCancelUpgradeResponse";
  value: MsgCancelUpgradeResponseAmino;
}
function createBaseMsgSoftwareUpgrade(): MsgSoftwareUpgrade {
  return {
    authority: "",
    plan: Plan.fromPartial({}),
  };
}
export const MsgSoftwareUpgrade = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
  encode(message: MsgSoftwareUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSoftwareUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSoftwareUpgrade {
    const obj = createBaseMsgSoftwareUpgrade();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    if (isSet(object.plan)) obj.plan = Plan.fromJSON(object.plan);
    return obj;
  },
  toJSON(message: MsgSoftwareUpgrade): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgSoftwareUpgrade>): MsgSoftwareUpgrade {
    const message = createBaseMsgSoftwareUpgrade();
    message.authority = object.authority ?? "";
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromPartial(object.plan);
    }
    return message;
  },
  fromAmino(object: MsgSoftwareUpgradeAmino): MsgSoftwareUpgrade {
    const message = createBaseMsgSoftwareUpgrade();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromAmino(object.plan);
    }
    return message;
  },
  toAmino(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.plan = message.plan ? Plan.toAmino(message.plan) : Plan.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: MsgSoftwareUpgradeAminoMsg): MsgSoftwareUpgrade {
    return MsgSoftwareUpgrade.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeAminoMsg {
    return {
      type: "cosmos-sdk/MsgSoftwareUpgrade",
      value: MsgSoftwareUpgrade.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgSoftwareUpgradeProtoMsg): MsgSoftwareUpgrade {
    return MsgSoftwareUpgrade.decode(message.value);
  },
  toProto(message: MsgSoftwareUpgrade): Uint8Array {
    return MsgSoftwareUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgSoftwareUpgrade): MsgSoftwareUpgradeProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade",
      value: MsgSoftwareUpgrade.encode(message).finish(),
    };
  },
};
function createBaseMsgSoftwareUpgradeResponse(): MsgSoftwareUpgradeResponse {
  return {};
}
export const MsgSoftwareUpgradeResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
  encode(_: MsgSoftwareUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgSoftwareUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSoftwareUpgradeResponse();
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
  fromJSON(_: any): MsgSoftwareUpgradeResponse {
    const obj = createBaseMsgSoftwareUpgradeResponse();
    return obj;
  },
  toJSON(_: MsgSoftwareUpgradeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgSoftwareUpgradeResponse>): MsgSoftwareUpgradeResponse {
    const message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  },
  fromAmino(_: MsgSoftwareUpgradeResponseAmino): MsgSoftwareUpgradeResponse {
    const message = createBaseMsgSoftwareUpgradeResponse();
    return message;
  },
  toAmino(_: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSoftwareUpgradeResponseAminoMsg): MsgSoftwareUpgradeResponse {
    return MsgSoftwareUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgSoftwareUpgradeResponse",
      value: MsgSoftwareUpgradeResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgSoftwareUpgradeResponseProtoMsg): MsgSoftwareUpgradeResponse {
    return MsgSoftwareUpgradeResponse.decode(message.value);
  },
  toProto(message: MsgSoftwareUpgradeResponse): Uint8Array {
    return MsgSoftwareUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSoftwareUpgradeResponse): MsgSoftwareUpgradeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse",
      value: MsgSoftwareUpgradeResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgCancelUpgrade(): MsgCancelUpgrade {
  return {
    authority: "",
  };
}
export const MsgCancelUpgrade = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
  encode(message: MsgCancelUpgrade, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUpgrade {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgrade();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgCancelUpgrade {
    const obj = createBaseMsgCancelUpgrade();
    if (isSet(object.authority)) obj.authority = String(object.authority);
    return obj;
  },
  toJSON(message: MsgCancelUpgrade): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    return obj;
  },
  fromPartial(object: Partial<MsgCancelUpgrade>): MsgCancelUpgrade {
    const message = createBaseMsgCancelUpgrade();
    message.authority = object.authority ?? "";
    return message;
  },
  fromAmino(object: MsgCancelUpgradeAmino): MsgCancelUpgrade {
    const message = createBaseMsgCancelUpgrade();
    if (object.authority !== undefined && object.authority !== null) {
      message.authority = object.authority;
    }
    return message;
  },
  toAmino(message: MsgCancelUpgrade): MsgCancelUpgradeAmino {
    const obj: any = {};
    obj.authority = message.authority;
    return obj;
  },
  fromAminoMsg(object: MsgCancelUpgradeAminoMsg): MsgCancelUpgrade {
    return MsgCancelUpgrade.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelUpgrade): MsgCancelUpgradeAminoMsg {
    return {
      type: "cosmos-sdk/MsgCancelUpgrade",
      value: MsgCancelUpgrade.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgCancelUpgradeProtoMsg): MsgCancelUpgrade {
    return MsgCancelUpgrade.decode(message.value);
  },
  toProto(message: MsgCancelUpgrade): Uint8Array {
    return MsgCancelUpgrade.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUpgrade): MsgCancelUpgradeProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade",
      value: MsgCancelUpgrade.encode(message).finish(),
    };
  },
};
function createBaseMsgCancelUpgradeResponse(): MsgCancelUpgradeResponse {
  return {};
}
export const MsgCancelUpgradeResponse = {
  typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
  encode(_: MsgCancelUpgradeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCancelUpgradeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelUpgradeResponse();
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
  fromJSON(_: any): MsgCancelUpgradeResponse {
    const obj = createBaseMsgCancelUpgradeResponse();
    return obj;
  },
  toJSON(_: MsgCancelUpgradeResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgCancelUpgradeResponse>): MsgCancelUpgradeResponse {
    const message = createBaseMsgCancelUpgradeResponse();
    return message;
  },
  fromAmino(_: MsgCancelUpgradeResponseAmino): MsgCancelUpgradeResponse {
    const message = createBaseMsgCancelUpgradeResponse();
    return message;
  },
  toAmino(_: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCancelUpgradeResponseAminoMsg): MsgCancelUpgradeResponse {
    return MsgCancelUpgradeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgCancelUpgradeResponse",
      value: MsgCancelUpgradeResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgCancelUpgradeResponseProtoMsg): MsgCancelUpgradeResponse {
    return MsgCancelUpgradeResponse.decode(message.value);
  },
  toProto(message: MsgCancelUpgradeResponse): Uint8Array {
    return MsgCancelUpgradeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCancelUpgradeResponse): MsgCancelUpgradeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse",
      value: MsgCancelUpgradeResponse.encode(message).finish(),
    };
  },
};
/** Msg defines the upgrade Msg service. */
export interface Msg {
  /**
   * SoftwareUpgrade is a governance operation for initiating a software upgrade.
   *
   * Since: cosmos-sdk 0.46
   */
  SoftwareUpgrade(request: MsgSoftwareUpgrade): Promise<MsgSoftwareUpgradeResponse>;
  /**
   * CancelUpgrade is a governance operation for cancelling a previously
   * approved software upgrade.
   *
   * Since: cosmos-sdk 0.46
   */
  CancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.SoftwareUpgrade = this.SoftwareUpgrade.bind(this);
    this.CancelUpgrade = this.CancelUpgrade.bind(this);
  }
  SoftwareUpgrade(request: MsgSoftwareUpgrade): Promise<MsgSoftwareUpgradeResponse> {
    const data = MsgSoftwareUpgrade.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "SoftwareUpgrade", data);
    return promise.then((data) => MsgSoftwareUpgradeResponse.decode(new BinaryReader(data)));
  }
  CancelUpgrade(request: MsgCancelUpgrade): Promise<MsgCancelUpgradeResponse> {
    const data = MsgCancelUpgrade.encode(request).finish();
    const promise = this.rpc.request("cosmos.upgrade.v1beta1.Msg", "CancelUpgrade", data);
    return promise.then((data) => MsgCancelUpgradeResponse.decode(new BinaryReader(data)));
  }
}
