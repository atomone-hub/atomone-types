/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { bytesFromBase64, isSet, base64FromBytes } from "../../../../helpers";
export const protobufPackage = "ibc.core.client.v2";
/** CounterpartyInfo defines the key that the counterparty will use to message our client */
export interface CounterpartyInfo {
  /** merkle prefix key is the prefix that ics provable keys are stored under */
  merklePrefix: Uint8Array[];
  /** client identifier is the identifier used to send packet messages to our client */
  clientId: string;
}
export interface CounterpartyInfoProtoMsg {
  typeUrl: "/ibc.core.client.v2.CounterpartyInfo";
  value: Uint8Array;
}
/** CounterpartyInfo defines the key that the counterparty will use to message our client */
export interface CounterpartyInfoAmino {
  /** merkle prefix key is the prefix that ics provable keys are stored under */
  merkle_prefix?: string[];
  /** client identifier is the identifier used to send packet messages to our client */
  client_id?: string;
}
export interface CounterpartyInfoAminoMsg {
  type: "cosmos-sdk/CounterpartyInfo";
  value: CounterpartyInfoAmino;
}
function createBaseCounterpartyInfo(): CounterpartyInfo {
  return {
    merklePrefix: [],
    clientId: "",
  };
}
export const CounterpartyInfo = {
  typeUrl: "/ibc.core.client.v2.CounterpartyInfo",
  encode(message: CounterpartyInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.merklePrefix) {
      writer.uint32(10).bytes(v!);
    }
    if (message.clientId !== "") {
      writer.uint32(18).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CounterpartyInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCounterpartyInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merklePrefix.push(reader.bytes());
          break;
        case 2:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CounterpartyInfo {
    const obj = createBaseCounterpartyInfo();
    if (Array.isArray(object?.merklePrefix))
      obj.merklePrefix = object.merklePrefix.map((e: any) => bytesFromBase64(e));
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    return obj;
  },
  toJSON(message: CounterpartyInfo): unknown {
    const obj: any = {};
    if (message.merklePrefix) {
      obj.merklePrefix = message.merklePrefix.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array()),
      );
    } else {
      obj.merklePrefix = [];
    }
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial(object: Partial<CounterpartyInfo>): CounterpartyInfo {
    const message = createBaseCounterpartyInfo();
    message.merklePrefix = object.merklePrefix?.map((e) => e) || [];
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(object: CounterpartyInfoAmino): CounterpartyInfo {
    const message = createBaseCounterpartyInfo();
    message.merklePrefix = object.merkle_prefix?.map((e) => bytesFromBase64(e)) || [];
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    return message;
  },
  toAmino(message: CounterpartyInfo): CounterpartyInfoAmino {
    const obj: any = {};
    if (message.merklePrefix) {
      obj.merkle_prefix = message.merklePrefix.map((e) => base64FromBytes(e));
    } else {
      obj.merkle_prefix = [];
    }
    obj.client_id = message.clientId;
    return obj;
  },
  fromAminoMsg(object: CounterpartyInfoAminoMsg): CounterpartyInfo {
    return CounterpartyInfo.fromAmino(object.value);
  },
  toAminoMsg(message: CounterpartyInfo): CounterpartyInfoAminoMsg {
    return {
      type: "cosmos-sdk/CounterpartyInfo",
      value: CounterpartyInfo.toAmino(message),
    };
  },
  fromProtoMsg(message: CounterpartyInfoProtoMsg): CounterpartyInfo {
    return CounterpartyInfo.decode(message.value);
  },
  toProto(message: CounterpartyInfo): Uint8Array {
    return CounterpartyInfo.encode(message).finish();
  },
  toProtoMsg(message: CounterpartyInfo): CounterpartyInfoProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v2.CounterpartyInfo",
      value: CounterpartyInfo.encode(message).finish(),
    };
  },
};
