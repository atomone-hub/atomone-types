/* eslint-disable */
import { Grant, GrantAmino } from "./authz";
import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { TxRpc } from "../../../types";
export const protobufPackage = "cosmos.authz.v1beta1";
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 */
export interface MsgGrant {
  granter: string;
  grantee: string;
  grant: Grant | undefined;
}
export interface MsgGrantProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant";
  value: Uint8Array;
}
/**
 * MsgGrant is a request type for Grant method. It declares authorization to the grantee
 * on behalf of the granter with the provided expiration time.
 * @name MsgGrantAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgGrant
 */
export interface MsgGrantAmino {
  granter?: string;
  grantee?: string;
  grant: GrantAmino | undefined;
}
export interface MsgGrantAminoMsg {
  type: "cosmos-sdk/MsgGrant";
  value: MsgGrantAmino;
}
/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponse {}
export interface MsgGrantResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse";
  value: Uint8Array;
}
/**
 * MsgGrantResponse defines the Msg/MsgGrant response type.
 * @name MsgGrantResponseAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgGrantResponse
 */
export interface MsgGrantResponseAmino {}
export interface MsgGrantResponseAminoMsg {
  type: "cosmos-sdk/MsgGrantResponse";
  value: MsgGrantResponseAmino;
}
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExec {
  grantee: string;
  /**
   * Execute Msg.
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: (Any)[] | Any[];
}
export interface MsgExecProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgExec";
  value: Uint8Array;
}
export type MsgExecEncoded = Omit<MsgExec, "msgs"> & {
  /**
   * Execute Msg.
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: (AnyProtoMsg)[];
};
/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 * @name MsgExecAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgExec
 */
export interface MsgExecAmino {
  grantee?: string;
  /**
   * Execute Msg.
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs?: AnyAmino[];
}
export interface MsgExecAminoMsg {
  type: "cosmos-sdk/MsgExec";
  value: MsgExecAmino;
}
/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponse {
  results: Uint8Array[];
}
export interface MsgExecResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse";
  value: Uint8Array;
}
/**
 * MsgExecResponse defines the Msg/MsgExecResponse response type.
 * @name MsgExecResponseAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgExecResponse
 */
export interface MsgExecResponseAmino {
  results?: string[];
}
export interface MsgExecResponseAminoMsg {
  type: "cosmos-sdk/MsgExecResponse";
  value: MsgExecResponseAmino;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevoke {
  granter: string;
  grantee: string;
  msgTypeUrl: string;
}
export interface MsgRevokeProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevoke";
  value: Uint8Array;
}
/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 * @name MsgRevokeAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgRevoke
 */
export interface MsgRevokeAmino {
  granter?: string;
  grantee?: string;
  msg_type_url?: string;
}
export interface MsgRevokeAminoMsg {
  type: "cosmos-sdk/MsgRevoke";
  value: MsgRevokeAmino;
}
/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponse {}
export interface MsgRevokeResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse";
  value: Uint8Array;
}
/**
 * MsgRevokeResponse defines the Msg/MsgRevokeResponse response type.
 * @name MsgRevokeResponseAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgRevokeResponse
 */
export interface MsgRevokeResponseAmino {}
export interface MsgRevokeResponseAminoMsg {
  type: "cosmos-sdk/MsgRevokeResponse";
  value: MsgRevokeResponseAmino;
}
/**
 * MsgPruneExpiredGrants prunes the expired grants.
 * 
 * Since cosmos-sdk 0.50.x-atomone
 */
export interface MsgPruneExpiredGrants {
  pruner: string;
}
export interface MsgPruneExpiredGrantsProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgPruneExpiredGrants";
  value: Uint8Array;
}
/**
 * MsgPruneExpiredGrants prunes the expired grants.
 * 
 * Since cosmos-sdk 0.50.x-atomone
 * @name MsgPruneExpiredGrantsAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgPruneExpiredGrants
 */
export interface MsgPruneExpiredGrantsAmino {
  pruner?: string;
}
export interface MsgPruneExpiredGrantsAminoMsg {
  type: "cosmos-sdk/MsgPruneExpiredGrants";
  value: MsgPruneExpiredGrantsAmino;
}
/**
 * MsgPruneExpiredGrantsResponse defines the Msg/MsgPruneExpiredGrantsResponse response type.
 * 
 * Since cosmos-sdk 0.50.x-atomone
 */
export interface MsgPruneExpiredGrantsResponse {}
export interface MsgPruneExpiredGrantsResponseProtoMsg {
  typeUrl: "/cosmos.authz.v1beta1.MsgPruneExpiredGrantsResponse";
  value: Uint8Array;
}
/**
 * MsgPruneExpiredGrantsResponse defines the Msg/MsgPruneExpiredGrantsResponse response type.
 * 
 * Since cosmos-sdk 0.50.x-atomone
 * @name MsgPruneExpiredGrantsResponseAmino
 * @package cosmos.authz.v1beta1
 * @see proto type: cosmos.authz.v1beta1.MsgPruneExpiredGrantsResponse
 */
export interface MsgPruneExpiredGrantsResponseAmino {}
export interface MsgPruneExpiredGrantsResponseAminoMsg {
  type: "cosmos-sdk/MsgPruneExpiredGrantsResponse";
  value: MsgPruneExpiredGrantsResponseAmino;
}
function createBaseMsgGrant(): MsgGrant {
  return {
    granter: "",
    grantee: "",
    grant: Grant.fromPartial({})
  };
}
export const MsgGrant = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
  aminoType: "cosmos-sdk/MsgGrant",
  is(o: any): o is MsgGrant {
    return o && (o.$typeUrl === MsgGrant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && Grant.is(o.grant));
  },
  isAmino(o: any): o is MsgGrantAmino {
    return o && (o.$typeUrl === MsgGrant.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && Grant.isAmino(o.grant));
  },
  encode(message: MsgGrant, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.grant !== undefined) {
      Grant.encode(message.grant, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrant {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrant();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.grant = Grant.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgGrant {
    const obj = createBaseMsgGrant();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.grant)) obj.grant = Grant.fromJSON(object.grant);
    return obj;
  },
  toJSON(message: MsgGrant): JsonSafe<MsgGrant> {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.grant !== undefined && (obj.grant = message.grant ? Grant.toJSON(message.grant) : undefined);
    return obj;
  },
  fromPartial(object: Partial<MsgGrant>): MsgGrant {
    const message = createBaseMsgGrant();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = Grant.fromPartial(object.grant);
    }
    return message;
  },
  fromAmino(object: MsgGrantAmino): MsgGrant {
    const message = createBaseMsgGrant();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.grant !== undefined && object.grant !== null) {
      message.grant = Grant.fromAmino(object.grant);
    }
    return message;
  },
  toAmino(message: MsgGrant): MsgGrantAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.grant = message.grant ? Grant.toAmino(message.grant) : Grant.toAmino(Grant.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgGrantAminoMsg): MsgGrant {
    return MsgGrant.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrant): MsgGrantAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrant",
      value: MsgGrant.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGrantProtoMsg): MsgGrant {
    return MsgGrant.decode(message.value);
  },
  toProto(message: MsgGrant): Uint8Array {
    return MsgGrant.encode(message).finish();
  },
  toProtoMsg(message: MsgGrant): MsgGrantProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrant",
      value: MsgGrant.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgGrant.typeUrl, MsgGrant);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgGrant.aminoType, MsgGrant.typeUrl);
function createBaseMsgGrantResponse(): MsgGrantResponse {
  return {};
}
export const MsgGrantResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
  aminoType: "cosmos-sdk/MsgGrantResponse",
  is(o: any): o is MsgGrantResponse {
    return o && o.$typeUrl === MsgGrantResponse.typeUrl;
  },
  isAmino(o: any): o is MsgGrantResponseAmino {
    return o && o.$typeUrl === MsgGrantResponse.typeUrl;
  },
  encode(_: MsgGrantResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgGrantResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGrantResponse();
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
  fromJSON(_: any): MsgGrantResponse {
    const obj = createBaseMsgGrantResponse();
    return obj;
  },
  toJSON(_: MsgGrantResponse): JsonSafe<MsgGrantResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgGrantResponse>): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
  fromAmino(_: MsgGrantResponseAmino): MsgGrantResponse {
    const message = createBaseMsgGrantResponse();
    return message;
  },
  toAmino(_: MsgGrantResponse): MsgGrantResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGrantResponseAminoMsg): MsgGrantResponse {
    return MsgGrantResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgGrantResponse): MsgGrantResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgGrantResponse",
      value: MsgGrantResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgGrantResponseProtoMsg): MsgGrantResponse {
    return MsgGrantResponse.decode(message.value);
  },
  toProto(message: MsgGrantResponse): Uint8Array {
    return MsgGrantResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGrantResponse): MsgGrantResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgGrantResponse",
      value: MsgGrantResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgGrantResponse.typeUrl, MsgGrantResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgGrantResponse.aminoType, MsgGrantResponse.typeUrl);
function createBaseMsgExec(): MsgExec {
  return {
    grantee: "",
    msgs: []
  };
}
export const MsgExec = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExec",
  aminoType: "cosmos-sdk/MsgExec",
  is(o: any): o is MsgExec {
    return o && (o.$typeUrl === MsgExec.typeUrl || typeof o.grantee === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.is(o.msgs[0])));
  },
  isAmino(o: any): o is MsgExecAmino {
    return o && (o.$typeUrl === MsgExec.typeUrl || typeof o.grantee === "string" && Array.isArray(o.msgs) && (!o.msgs.length || Any.isAmino(o.msgs[0])));
  },
  encode(message: MsgExec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.grantee !== "") {
      writer.uint32(10).string(message.grantee);
    }
    for (const v of message.msgs) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.msgs.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExec {
    const obj = createBaseMsgExec();
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (Array.isArray(object?.msgs)) obj.msgs = object.msgs.map((e: any) => GlobalDecoderRegistry.fromJSON(e));
    return obj;
  },
  toJSON(message: MsgExec): JsonSafe<MsgExec> {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toJSON(e) : undefined);
    } else {
      obj.msgs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgExec>): MsgExec {
    const message = createBaseMsgExec();
    message.grantee = object.grantee ?? "";
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    return message;
  },
  fromAmino(object: MsgExecAmino): MsgExec {
    const message = createBaseMsgExec();
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    message.msgs = object.msgs?.map(e => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    return message;
  },
  toAmino(message: MsgExec): MsgExecAmino {
    const obj: any = {};
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    if (message.msgs) {
      obj.msgs = message.msgs.map(e => e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined);
    } else {
      obj.msgs = message.msgs;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecAminoMsg): MsgExec {
    return MsgExec.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExec): MsgExecAminoMsg {
    return {
      type: "cosmos-sdk/MsgExec",
      value: MsgExec.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecProtoMsg): MsgExec {
    return MsgExec.decode(message.value);
  },
  toProto(message: MsgExec): Uint8Array {
    return MsgExec.encode(message).finish();
  },
  toProtoMsg(message: MsgExec): MsgExecProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgExec",
      value: MsgExec.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExec.typeUrl, MsgExec);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExec.aminoType, MsgExec.typeUrl);
function createBaseMsgExecResponse(): MsgExecResponse {
  return {
    results: []
  };
}
export const MsgExecResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
  aminoType: "cosmos-sdk/MsgExecResponse",
  is(o: any): o is MsgExecResponse {
    return o && (o.$typeUrl === MsgExecResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || o.results[0] instanceof Uint8Array || typeof o.results[0] === "string"));
  },
  isAmino(o: any): o is MsgExecResponseAmino {
    return o && (o.$typeUrl === MsgExecResponse.typeUrl || Array.isArray(o.results) && (!o.results.length || o.results[0] instanceof Uint8Array || typeof o.results[0] === "string"));
  },
  encode(message: MsgExecResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.results) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.results.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgExecResponse {
    const obj = createBaseMsgExecResponse();
    if (Array.isArray(object?.results)) obj.results = object.results.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: MsgExecResponse): JsonSafe<MsgExecResponse> {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.results = [];
    }
    return obj;
  },
  fromPartial(object: Partial<MsgExecResponse>): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map(e => e) || [];
    return message;
  },
  fromAmino(object: MsgExecResponseAmino): MsgExecResponse {
    const message = createBaseMsgExecResponse();
    message.results = object.results?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: MsgExecResponse): MsgExecResponseAmino {
    const obj: any = {};
    if (message.results) {
      obj.results = message.results.map(e => base64FromBytes(e));
    } else {
      obj.results = message.results;
    }
    return obj;
  },
  fromAminoMsg(object: MsgExecResponseAminoMsg): MsgExecResponse {
    return MsgExecResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgExecResponse): MsgExecResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgExecResponse",
      value: MsgExecResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgExecResponseProtoMsg): MsgExecResponse {
    return MsgExecResponse.decode(message.value);
  },
  toProto(message: MsgExecResponse): Uint8Array {
    return MsgExecResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgExecResponse): MsgExecResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgExecResponse",
      value: MsgExecResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgExecResponse.typeUrl, MsgExecResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgExecResponse.aminoType, MsgExecResponse.typeUrl);
function createBaseMsgRevoke(): MsgRevoke {
  return {
    granter: "",
    grantee: "",
    msgTypeUrl: ""
  };
}
export const MsgRevoke = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
  aminoType: "cosmos-sdk/MsgRevoke",
  is(o: any): o is MsgRevoke {
    return o && (o.$typeUrl === MsgRevoke.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msgTypeUrl === "string");
  },
  isAmino(o: any): o is MsgRevokeAmino {
    return o && (o.$typeUrl === MsgRevoke.typeUrl || typeof o.granter === "string" && typeof o.grantee === "string" && typeof o.msg_type_url === "string");
  },
  encode(message: MsgRevoke, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.granter !== "") {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== "") {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== "") {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevoke {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevoke();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.msgTypeUrl = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgRevoke {
    const obj = createBaseMsgRevoke();
    if (isSet(object.granter)) obj.granter = String(object.granter);
    if (isSet(object.grantee)) obj.grantee = String(object.grantee);
    if (isSet(object.msgTypeUrl)) obj.msgTypeUrl = String(object.msgTypeUrl);
    return obj;
  },
  toJSON(message: MsgRevoke): JsonSafe<MsgRevoke> {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    return obj;
  },
  fromPartial(object: Partial<MsgRevoke>): MsgRevoke {
    const message = createBaseMsgRevoke();
    message.granter = object.granter ?? "";
    message.grantee = object.grantee ?? "";
    message.msgTypeUrl = object.msgTypeUrl ?? "";
    return message;
  },
  fromAmino(object: MsgRevokeAmino): MsgRevoke {
    const message = createBaseMsgRevoke();
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter;
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee;
    }
    if (object.msg_type_url !== undefined && object.msg_type_url !== null) {
      message.msgTypeUrl = object.msg_type_url;
    }
    return message;
  },
  toAmino(message: MsgRevoke): MsgRevokeAmino {
    const obj: any = {};
    obj.granter = message.granter === "" ? undefined : message.granter;
    obj.grantee = message.grantee === "" ? undefined : message.grantee;
    obj.msg_type_url = message.msgTypeUrl === "" ? undefined : message.msgTypeUrl;
    return obj;
  },
  fromAminoMsg(object: MsgRevokeAminoMsg): MsgRevoke {
    return MsgRevoke.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevoke): MsgRevokeAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevoke",
      value: MsgRevoke.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeProtoMsg): MsgRevoke {
    return MsgRevoke.decode(message.value);
  },
  toProto(message: MsgRevoke): Uint8Array {
    return MsgRevoke.encode(message).finish();
  },
  toProtoMsg(message: MsgRevoke): MsgRevokeProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevoke",
      value: MsgRevoke.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRevoke.typeUrl, MsgRevoke);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRevoke.aminoType, MsgRevoke.typeUrl);
function createBaseMsgRevokeResponse(): MsgRevokeResponse {
  return {};
}
export const MsgRevokeResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
  aminoType: "cosmos-sdk/MsgRevokeResponse",
  is(o: any): o is MsgRevokeResponse {
    return o && o.$typeUrl === MsgRevokeResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRevokeResponseAmino {
    return o && o.$typeUrl === MsgRevokeResponse.typeUrl;
  },
  encode(_: MsgRevokeResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeResponse();
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
  fromJSON(_: any): MsgRevokeResponse {
    const obj = createBaseMsgRevokeResponse();
    return obj;
  },
  toJSON(_: MsgRevokeResponse): JsonSafe<MsgRevokeResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRevokeResponse>): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  fromAmino(_: MsgRevokeResponseAmino): MsgRevokeResponse {
    const message = createBaseMsgRevokeResponse();
    return message;
  },
  toAmino(_: MsgRevokeResponse): MsgRevokeResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeResponseAminoMsg): MsgRevokeResponse {
    return MsgRevokeResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRevokeResponse): MsgRevokeResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRevokeResponse",
      value: MsgRevokeResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgRevokeResponseProtoMsg): MsgRevokeResponse {
    return MsgRevokeResponse.decode(message.value);
  },
  toProto(message: MsgRevokeResponse): Uint8Array {
    return MsgRevokeResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeResponse): MsgRevokeResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgRevokeResponse",
      value: MsgRevokeResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRevokeResponse.typeUrl, MsgRevokeResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgRevokeResponse.aminoType, MsgRevokeResponse.typeUrl);
function createBaseMsgPruneExpiredGrants(): MsgPruneExpiredGrants {
  return {
    pruner: ""
  };
}
export const MsgPruneExpiredGrants = {
  typeUrl: "/cosmos.authz.v1beta1.MsgPruneExpiredGrants",
  aminoType: "cosmos-sdk/MsgPruneExpiredGrants",
  is(o: any): o is MsgPruneExpiredGrants {
    return o && (o.$typeUrl === MsgPruneExpiredGrants.typeUrl || typeof o.pruner === "string");
  },
  isAmino(o: any): o is MsgPruneExpiredGrantsAmino {
    return o && (o.$typeUrl === MsgPruneExpiredGrants.typeUrl || typeof o.pruner === "string");
  },
  encode(message: MsgPruneExpiredGrants, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pruner !== "") {
      writer.uint32(10).string(message.pruner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneExpiredGrants {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneExpiredGrants();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pruner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgPruneExpiredGrants {
    const obj = createBaseMsgPruneExpiredGrants();
    if (isSet(object.pruner)) obj.pruner = String(object.pruner);
    return obj;
  },
  toJSON(message: MsgPruneExpiredGrants): JsonSafe<MsgPruneExpiredGrants> {
    const obj: any = {};
    message.pruner !== undefined && (obj.pruner = message.pruner);
    return obj;
  },
  fromPartial(object: Partial<MsgPruneExpiredGrants>): MsgPruneExpiredGrants {
    const message = createBaseMsgPruneExpiredGrants();
    message.pruner = object.pruner ?? "";
    return message;
  },
  fromAmino(object: MsgPruneExpiredGrantsAmino): MsgPruneExpiredGrants {
    const message = createBaseMsgPruneExpiredGrants();
    if (object.pruner !== undefined && object.pruner !== null) {
      message.pruner = object.pruner;
    }
    return message;
  },
  toAmino(message: MsgPruneExpiredGrants): MsgPruneExpiredGrantsAmino {
    const obj: any = {};
    obj.pruner = message.pruner === "" ? undefined : message.pruner;
    return obj;
  },
  fromAminoMsg(object: MsgPruneExpiredGrantsAminoMsg): MsgPruneExpiredGrants {
    return MsgPruneExpiredGrants.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPruneExpiredGrants): MsgPruneExpiredGrantsAminoMsg {
    return {
      type: "cosmos-sdk/MsgPruneExpiredGrants",
      value: MsgPruneExpiredGrants.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPruneExpiredGrantsProtoMsg): MsgPruneExpiredGrants {
    return MsgPruneExpiredGrants.decode(message.value);
  },
  toProto(message: MsgPruneExpiredGrants): Uint8Array {
    return MsgPruneExpiredGrants.encode(message).finish();
  },
  toProtoMsg(message: MsgPruneExpiredGrants): MsgPruneExpiredGrantsProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgPruneExpiredGrants",
      value: MsgPruneExpiredGrants.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgPruneExpiredGrants.typeUrl, MsgPruneExpiredGrants);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgPruneExpiredGrants.aminoType, MsgPruneExpiredGrants.typeUrl);
function createBaseMsgPruneExpiredGrantsResponse(): MsgPruneExpiredGrantsResponse {
  return {};
}
export const MsgPruneExpiredGrantsResponse = {
  typeUrl: "/cosmos.authz.v1beta1.MsgPruneExpiredGrantsResponse",
  aminoType: "cosmos-sdk/MsgPruneExpiredGrantsResponse",
  is(o: any): o is MsgPruneExpiredGrantsResponse {
    return o && o.$typeUrl === MsgPruneExpiredGrantsResponse.typeUrl;
  },
  isAmino(o: any): o is MsgPruneExpiredGrantsResponseAmino {
    return o && o.$typeUrl === MsgPruneExpiredGrantsResponse.typeUrl;
  },
  encode(_: MsgPruneExpiredGrantsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgPruneExpiredGrantsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgPruneExpiredGrantsResponse();
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
  fromJSON(_: any): MsgPruneExpiredGrantsResponse {
    const obj = createBaseMsgPruneExpiredGrantsResponse();
    return obj;
  },
  toJSON(_: MsgPruneExpiredGrantsResponse): JsonSafe<MsgPruneExpiredGrantsResponse> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgPruneExpiredGrantsResponse>): MsgPruneExpiredGrantsResponse {
    const message = createBaseMsgPruneExpiredGrantsResponse();
    return message;
  },
  fromAmino(_: MsgPruneExpiredGrantsResponseAmino): MsgPruneExpiredGrantsResponse {
    const message = createBaseMsgPruneExpiredGrantsResponse();
    return message;
  },
  toAmino(_: MsgPruneExpiredGrantsResponse): MsgPruneExpiredGrantsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgPruneExpiredGrantsResponseAminoMsg): MsgPruneExpiredGrantsResponse {
    return MsgPruneExpiredGrantsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgPruneExpiredGrantsResponse): MsgPruneExpiredGrantsResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgPruneExpiredGrantsResponse",
      value: MsgPruneExpiredGrantsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: MsgPruneExpiredGrantsResponseProtoMsg): MsgPruneExpiredGrantsResponse {
    return MsgPruneExpiredGrantsResponse.decode(message.value);
  },
  toProto(message: MsgPruneExpiredGrantsResponse): Uint8Array {
    return MsgPruneExpiredGrantsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgPruneExpiredGrantsResponse): MsgPruneExpiredGrantsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.authz.v1beta1.MsgPruneExpiredGrantsResponse",
      value: MsgPruneExpiredGrantsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgPruneExpiredGrantsResponse.typeUrl, MsgPruneExpiredGrantsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(MsgPruneExpiredGrantsResponse.aminoType, MsgPruneExpiredGrantsResponse.typeUrl);
/** Msg defines the authz Msg service. */
export interface Msg {
  /**
   * Grant grants the provided authorization to the grantee on the granter's
   * account with the provided expiration time. If there is already a grant
   * for the given (granter, grantee, Authorization) triple, then the grant
   * will be overwritten.
   */
  Grant(request: MsgGrant): Promise<MsgGrantResponse>;
  /**
   * Exec attempts to execute the provided messages using
   * authorizations granted to the grantee. Each message should have only
   * one signer corresponding to the granter of the authorization.
   */
  Exec(request: MsgExec): Promise<MsgExecResponse>;
  /**
   * Revoke revokes any authorization corresponding to the provided method name on the
   * granter's account that has been granted to the grantee.
   */
  Revoke(request: MsgRevoke): Promise<MsgRevokeResponse>;
  /**
   * PruneExpiredGrants prunes the expired grants. Currently up to 75 at a time.
   * 
   * Since cosmos-sdk 0.50.x-atomone
   */
  PruneExpiredGrants(request: MsgPruneExpiredGrants): Promise<MsgPruneExpiredGrantsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.Grant = this.Grant.bind(this);
    this.Exec = this.Exec.bind(this);
    this.Revoke = this.Revoke.bind(this);
    this.PruneExpiredGrants = this.PruneExpiredGrants.bind(this);
  }
  Grant(request: MsgGrant): Promise<MsgGrantResponse> {
    const data = MsgGrant.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Grant", data);
    return promise.then(data => MsgGrantResponse.decode(new BinaryReader(data)));
  }
  Exec(request: MsgExec): Promise<MsgExecResponse> {
    const data = MsgExec.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Exec", data);
    return promise.then(data => MsgExecResponse.decode(new BinaryReader(data)));
  }
  Revoke(request: MsgRevoke): Promise<MsgRevokeResponse> {
    const data = MsgRevoke.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "Revoke", data);
    return promise.then(data => MsgRevokeResponse.decode(new BinaryReader(data)));
  }
  PruneExpiredGrants(request: MsgPruneExpiredGrants): Promise<MsgPruneExpiredGrantsResponse> {
    const data = MsgPruneExpiredGrants.encode(request).finish();
    const promise = this.rpc.request("cosmos.authz.v1beta1.Msg", "PruneExpiredGrants", data);
    return promise.then(data => MsgPruneExpiredGrantsResponse.decode(new BinaryReader(data)));
  }
}