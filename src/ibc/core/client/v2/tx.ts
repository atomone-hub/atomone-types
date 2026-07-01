/* eslint-disable */
import { Config, ConfigAmino } from "./config";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { TxRpc } from "../../../../types";
export const protobufPackage = "ibc.core.client.v2";
/** MsgRegisterCounterparty defines a message to register a counterparty on a client */
export interface MsgRegisterCounterparty {
  /** client identifier */
  clientId: string;
  /** counterparty merkle prefix */
  counterpartyMerklePrefix: Uint8Array[];
  /** counterparty client identifier */
  counterpartyClientId: string;
  /** signer address */
  signer: string;
}
export interface MsgRegisterCounterpartyProtoMsg {
  typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty";
  value: Uint8Array;
}
/** MsgRegisterCounterparty defines a message to register a counterparty on a client */
export interface MsgRegisterCounterpartyAmino {
  /** client identifier */
  client_id?: string;
  /** counterparty merkle prefix */
  counterparty_merkle_prefix?: string[];
  /** counterparty client identifier */
  counterparty_client_id?: string;
  /** signer address */
  signer?: string;
}
export interface MsgRegisterCounterpartyAminoMsg {
  type: "cosmos-sdk/MsgRegisterCounterparty";
  value: MsgRegisterCounterpartyAmino;
}
/** MsgRegisterCounterpartyResponse defines the Msg/RegisterCounterparty response type. */
export interface MsgRegisterCounterpartyResponse {}
export interface MsgRegisterCounterpartyResponseProtoMsg {
  typeUrl: "/ibc.core.client.v2.MsgRegisterCounterpartyResponse";
  value: Uint8Array;
}
/** MsgRegisterCounterpartyResponse defines the Msg/RegisterCounterparty response type. */
export interface MsgRegisterCounterpartyResponseAmino {}
export interface MsgRegisterCounterpartyResponseAminoMsg {
  type: "cosmos-sdk/MsgRegisterCounterpartyResponse";
  value: MsgRegisterCounterpartyResponseAmino;
}
/** MsgUpdateClientConfig defines the sdk.Msg type to update the configuration for a given client */
export interface MsgUpdateClientConfig {
  /** client identifier */
  clientId: string;
  /**
   * allowed relayers
   *
   * NOTE: All fields in the config must be supplied.
   */
  config: Config | undefined;
  /** signer address */
  signer: string;
}
export interface MsgUpdateClientConfigProtoMsg {
  typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig";
  value: Uint8Array;
}
/** MsgUpdateClientConfig defines the sdk.Msg type to update the configuration for a given client */
export interface MsgUpdateClientConfigAmino {
  /** client identifier */
  client_id?: string;
  /**
   * allowed relayers
   *
   * NOTE: All fields in the config must be supplied.
   */
  config?: ConfigAmino | undefined;
  /** signer address */
  signer?: string;
}
export interface MsgUpdateClientConfigAminoMsg {
  type: "cosmos-sdk/MsgUpdateClientConfig";
  value: MsgUpdateClientConfigAmino;
}
/** MsgUpdateClientConfigResponse defines the MsgUpdateClientConfig response type. */
export interface MsgUpdateClientConfigResponse {}
export interface MsgUpdateClientConfigResponseProtoMsg {
  typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfigResponse";
  value: Uint8Array;
}
/** MsgUpdateClientConfigResponse defines the MsgUpdateClientConfig response type. */
export interface MsgUpdateClientConfigResponseAmino {}
export interface MsgUpdateClientConfigResponseAminoMsg {
  type: "cosmos-sdk/MsgUpdateClientConfigResponse";
  value: MsgUpdateClientConfigResponseAmino;
}
function createBaseMsgRegisterCounterparty(): MsgRegisterCounterparty {
  return {
    clientId: "",
    counterpartyMerklePrefix: [],
    counterpartyClientId: "",
    signer: "",
  };
}
export const MsgRegisterCounterparty = {
  typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty",
  encode(message: MsgRegisterCounterparty, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.counterpartyMerklePrefix) {
      writer.uint32(18).bytes(v!);
    }
    if (message.counterpartyClientId !== "") {
      writer.uint32(26).string(message.counterpartyClientId);
    }
    if (message.signer !== "") {
      writer.uint32(34).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterparty {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterparty();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.counterpartyMerklePrefix.push(reader.bytes());
          break;
        case 3:
          message.counterpartyClientId = reader.string();
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
  fromJSON(object: any): MsgRegisterCounterparty {
    const obj = createBaseMsgRegisterCounterparty();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (Array.isArray(object?.counterpartyMerklePrefix))
      obj.counterpartyMerklePrefix = object.counterpartyMerklePrefix.map((e: any) => bytesFromBase64(e));
    if (isSet(object.counterpartyClientId)) obj.counterpartyClientId = String(object.counterpartyClientId);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgRegisterCounterparty): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.counterpartyMerklePrefix) {
      obj.counterpartyMerklePrefix = message.counterpartyMerklePrefix.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.counterpartyMerklePrefix = [];
    }
    message.counterpartyClientId !== undefined && (obj.counterpartyClientId = message.counterpartyClientId);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgRegisterCounterparty>): MsgRegisterCounterparty {
    const message = createBaseMsgRegisterCounterparty();
    message.clientId = object.clientId ?? "";
    message.counterpartyMerklePrefix = object.counterpartyMerklePrefix?.map((e) => e) || [];
    message.counterpartyClientId = object.counterpartyClientId ?? "";
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgRegisterCounterpartyAmino): MsgRegisterCounterparty {
    const message = createBaseMsgRegisterCounterparty();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    message.counterpartyMerklePrefix =
      object.counterparty_merkle_prefix?.map((e) => bytesFromBase64(e)) || [];
    if (object.counterparty_client_id !== undefined && object.counterparty_client_id !== null) {
      message.counterpartyClientId = object.counterparty_client_id;
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgRegisterCounterparty): MsgRegisterCounterpartyAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    if (message.counterpartyMerklePrefix) {
      obj.counterparty_merkle_prefix = message.counterpartyMerklePrefix.map((e) => base64FromBytes(e));
    } else {
      obj.counterparty_merkle_prefix = [];
    }
    obj.counterparty_client_id = message.counterpartyClientId;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyAminoMsg): MsgRegisterCounterparty {
    return MsgRegisterCounterparty.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterparty): MsgRegisterCounterpartyAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterparty",
      value: MsgRegisterCounterparty.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgRegisterCounterpartyProtoMsg): MsgRegisterCounterparty {
    return MsgRegisterCounterparty.decode(message.value);
  },
  toProto(message: MsgRegisterCounterparty): Uint8Array {
    return MsgRegisterCounterparty.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCounterparty): MsgRegisterCounterpartyProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.MsgRegisterCounterparty",
      value: MsgRegisterCounterparty.encode(message).finish(),
    };
  },
};
function createBaseMsgRegisterCounterpartyResponse(): MsgRegisterCounterpartyResponse {
  return {};
}
export const MsgRegisterCounterpartyResponse = {
  typeUrl: "/ibc.core.client.v2.MsgRegisterCounterpartyResponse",
  encode(_: MsgRegisterCounterpartyResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRegisterCounterpartyResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRegisterCounterpartyResponse();
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
  fromJSON(_: any): MsgRegisterCounterpartyResponse {
    const obj = createBaseMsgRegisterCounterpartyResponse();
    return obj;
  },
  toJSON(_: MsgRegisterCounterpartyResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgRegisterCounterpartyResponse>): MsgRegisterCounterpartyResponse {
    const message = createBaseMsgRegisterCounterpartyResponse();
    return message;
  },
  fromAmino(_: MsgRegisterCounterpartyResponseAmino): MsgRegisterCounterpartyResponse {
    const message = createBaseMsgRegisterCounterpartyResponse();
    return message;
  },
  toAmino(_: MsgRegisterCounterpartyResponse): MsgRegisterCounterpartyResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRegisterCounterpartyResponseAminoMsg): MsgRegisterCounterpartyResponse {
    return MsgRegisterCounterpartyResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgRegisterCounterpartyResponse): MsgRegisterCounterpartyResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgRegisterCounterpartyResponse",
      value: MsgRegisterCounterpartyResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgRegisterCounterpartyResponseProtoMsg): MsgRegisterCounterpartyResponse {
    return MsgRegisterCounterpartyResponse.decode(message.value);
  },
  toProto(message: MsgRegisterCounterpartyResponse): Uint8Array {
    return MsgRegisterCounterpartyResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRegisterCounterpartyResponse): MsgRegisterCounterpartyResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.MsgRegisterCounterpartyResponse",
      value: MsgRegisterCounterpartyResponse.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateClientConfig(): MsgUpdateClientConfig {
  return {
    clientId: "",
    config: Config.fromPartial({}),
    signer: "",
  };
}
export const MsgUpdateClientConfig = {
  typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig",
  encode(message: MsgUpdateClientConfig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.config !== undefined) {
      Config.encode(message.config, writer.uint32(18).fork()).ldelim();
    }
    if (message.signer !== "") {
      writer.uint32(26).string(message.signer);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientConfig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.config = Config.decode(reader, reader.uint32());
          break;
        case 3:
          message.signer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgUpdateClientConfig {
    const obj = createBaseMsgUpdateClientConfig();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.config)) obj.config = Config.fromJSON(object.config);
    if (isSet(object.signer)) obj.signer = String(object.signer);
    return obj;
  },
  toJSON(message: MsgUpdateClientConfig): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.config !== undefined && (obj.config = message.config ? Config.toJSON(message.config) : undefined);
    message.signer !== undefined && (obj.signer = message.signer);
    return obj;
  },
  fromPartial(object: Partial<MsgUpdateClientConfig>): MsgUpdateClientConfig {
    const message = createBaseMsgUpdateClientConfig();
    message.clientId = object.clientId ?? "";
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromPartial(object.config);
    }
    message.signer = object.signer ?? "";
    return message;
  },
  fromAmino(object: MsgUpdateClientConfigAmino): MsgUpdateClientConfig {
    const message = createBaseMsgUpdateClientConfig();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.config !== undefined && object.config !== null) {
      message.config = Config.fromAmino(object.config);
    }
    if (object.signer !== undefined && object.signer !== null) {
      message.signer = object.signer;
    }
    return message;
  },
  toAmino(message: MsgUpdateClientConfig): MsgUpdateClientConfigAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.config = message.config ? Config.toAmino(message.config) : undefined;
    obj.signer = message.signer;
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientConfigAminoMsg): MsgUpdateClientConfig {
    return MsgUpdateClientConfig.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClientConfig): MsgUpdateClientConfigAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClientConfig",
      value: MsgUpdateClientConfig.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgUpdateClientConfigProtoMsg): MsgUpdateClientConfig {
    return MsgUpdateClientConfig.decode(message.value);
  },
  toProto(message: MsgUpdateClientConfig): Uint8Array {
    return MsgUpdateClientConfig.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClientConfig): MsgUpdateClientConfigProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfig",
      value: MsgUpdateClientConfig.encode(message).finish(),
    };
  },
};
function createBaseMsgUpdateClientConfigResponse(): MsgUpdateClientConfigResponse {
  return {};
}
export const MsgUpdateClientConfigResponse = {
  typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfigResponse",
  encode(_: MsgUpdateClientConfigResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateClientConfigResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateClientConfigResponse();
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
  fromJSON(_: any): MsgUpdateClientConfigResponse {
    const obj = createBaseMsgUpdateClientConfigResponse();
    return obj;
  },
  toJSON(_: MsgUpdateClientConfigResponse): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<MsgUpdateClientConfigResponse>): MsgUpdateClientConfigResponse {
    const message = createBaseMsgUpdateClientConfigResponse();
    return message;
  },
  fromAmino(_: MsgUpdateClientConfigResponseAmino): MsgUpdateClientConfigResponse {
    const message = createBaseMsgUpdateClientConfigResponse();
    return message;
  },
  toAmino(_: MsgUpdateClientConfigResponse): MsgUpdateClientConfigResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateClientConfigResponseAminoMsg): MsgUpdateClientConfigResponse {
    return MsgUpdateClientConfigResponse.fromAmino(object.value);
  },
  toAminoMsg(message: MsgUpdateClientConfigResponse): MsgUpdateClientConfigResponseAminoMsg {
    return {
      type: "cosmos-sdk/MsgUpdateClientConfigResponse",
      value: MsgUpdateClientConfigResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: MsgUpdateClientConfigResponseProtoMsg): MsgUpdateClientConfigResponse {
    return MsgUpdateClientConfigResponse.decode(message.value);
  },
  toProto(message: MsgUpdateClientConfigResponse): Uint8Array {
    return MsgUpdateClientConfigResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateClientConfigResponse): MsgUpdateClientConfigResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.MsgUpdateClientConfigResponse",
      value: MsgUpdateClientConfigResponse.encode(message).finish(),
    };
  },
};
/** Msg defines the ibc/client/v2 Msg service. */
export interface Msg {
  /** RegisterCounterparty defines a rpc handler method for MsgRegisterCounterparty. */
  RegisterCounterparty(request: MsgRegisterCounterparty): Promise<MsgRegisterCounterpartyResponse>;
  /** UpdateClientConfig defines a rpc handler method for MsgUpdateClientConfig. */
  UpdateClientConfig(request: MsgUpdateClientConfig): Promise<MsgUpdateClientConfigResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.RegisterCounterparty = this.RegisterCounterparty.bind(this);
    this.UpdateClientConfig = this.UpdateClientConfig.bind(this);
  }
  RegisterCounterparty(request: MsgRegisterCounterparty): Promise<MsgRegisterCounterpartyResponse> {
    const data = MsgRegisterCounterparty.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v2.Msg", "RegisterCounterparty", data);
    return promise.then((data) => MsgRegisterCounterpartyResponse.decode(new BinaryReader(data)));
  }
  UpdateClientConfig(request: MsgUpdateClientConfig): Promise<MsgUpdateClientConfigResponse> {
    const data = MsgUpdateClientConfig.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v2.Msg", "UpdateClientConfig", data);
    return promise.then((data) => MsgUpdateClientConfigResponse.decode(new BinaryReader(data)));
  }
}
