/* eslint-disable */
import { EpochInfo, EpochInfoAmino } from "./genesis";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { TxRpc } from "../../../types";
export const protobufPackage = "cosmos.epochs.v1beta1";
/**
 * QueryEpochInfosRequest defines the gRPC request structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosRequest {}
export interface QueryEpochInfosRequestProtoMsg {
  typeUrl: "/cosmos.epochs.v1beta1.QueryEpochInfosRequest";
  value: Uint8Array;
}
/**
 * QueryEpochInfosRequest defines the gRPC request structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosRequestAmino {}
export interface QueryEpochInfosRequestAminoMsg {
  type: "cosmos-sdk/QueryEpochInfosRequest";
  value: QueryEpochInfosRequestAmino;
}
/**
 * QueryEpochInfosRequest defines the gRPC response structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosResponse {
  epochs: EpochInfo[];
}
export interface QueryEpochInfosResponseProtoMsg {
  typeUrl: "/cosmos.epochs.v1beta1.QueryEpochInfosResponse";
  value: Uint8Array;
}
/**
 * QueryEpochInfosRequest defines the gRPC response structure for
 * querying all epoch info.
 */
export interface QueryEpochInfosResponseAmino {
  epochs?: EpochInfoAmino[];
}
export interface QueryEpochInfosResponseAminoMsg {
  type: "cosmos-sdk/QueryEpochInfosResponse";
  value: QueryEpochInfosResponseAmino;
}
/**
 * QueryCurrentEpochRequest defines the gRPC request structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochRequest {
  identifier: string;
}
export interface QueryCurrentEpochRequestProtoMsg {
  typeUrl: "/cosmos.epochs.v1beta1.QueryCurrentEpochRequest";
  value: Uint8Array;
}
/**
 * QueryCurrentEpochRequest defines the gRPC request structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochRequestAmino {
  identifier?: string;
}
export interface QueryCurrentEpochRequestAminoMsg {
  type: "cosmos-sdk/QueryCurrentEpochRequest";
  value: QueryCurrentEpochRequestAmino;
}
/**
 * QueryCurrentEpochResponse defines the gRPC response structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochResponse {
  currentEpoch: bigint;
}
export interface QueryCurrentEpochResponseProtoMsg {
  typeUrl: "/cosmos.epochs.v1beta1.QueryCurrentEpochResponse";
  value: Uint8Array;
}
/**
 * QueryCurrentEpochResponse defines the gRPC response structure for
 * querying an epoch by its identifier.
 */
export interface QueryCurrentEpochResponseAmino {
  current_epoch?: string;
}
export interface QueryCurrentEpochResponseAminoMsg {
  type: "cosmos-sdk/QueryCurrentEpochResponse";
  value: QueryCurrentEpochResponseAmino;
}
function createBaseQueryEpochInfosRequest(): QueryEpochInfosRequest {
  return {};
}
export const QueryEpochInfosRequest = {
  typeUrl: "/cosmos.epochs.v1beta1.QueryEpochInfosRequest",
  encode(_: QueryEpochInfosRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochInfosRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfosRequest();
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
  fromJSON(_: any): QueryEpochInfosRequest {
    const obj = createBaseQueryEpochInfosRequest();
    return obj;
  },
  toJSON(_: QueryEpochInfosRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryEpochInfosRequest>): QueryEpochInfosRequest {
    const message = createBaseQueryEpochInfosRequest();
    return message;
  },
  fromAmino(_: QueryEpochInfosRequestAmino): QueryEpochInfosRequest {
    const message = createBaseQueryEpochInfosRequest();
    return message;
  },
  toAmino(_: QueryEpochInfosRequest): QueryEpochInfosRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryEpochInfosRequestAminoMsg): QueryEpochInfosRequest {
    return QueryEpochInfosRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryEpochInfosRequest): QueryEpochInfosRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryEpochInfosRequest",
      value: QueryEpochInfosRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryEpochInfosRequestProtoMsg): QueryEpochInfosRequest {
    return QueryEpochInfosRequest.decode(message.value);
  },
  toProto(message: QueryEpochInfosRequest): Uint8Array {
    return QueryEpochInfosRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochInfosRequest): QueryEpochInfosRequestProtoMsg {
    return {
      typeUrl: "/cosmos.epochs.v1beta1.QueryEpochInfosRequest",
      value: QueryEpochInfosRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryEpochInfosResponse(): QueryEpochInfosResponse {
  return {
    epochs: [],
  };
}
export const QueryEpochInfosResponse = {
  typeUrl: "/cosmos.epochs.v1beta1.QueryEpochInfosResponse",
  encode(message: QueryEpochInfosResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.epochs) {
      EpochInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEpochInfosResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEpochInfosResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.epochs.push(EpochInfo.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEpochInfosResponse {
    const obj = createBaseQueryEpochInfosResponse();
    if (Array.isArray(object?.epochs)) obj.epochs = object.epochs.map((e: any) => EpochInfo.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryEpochInfosResponse): unknown {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map((e) => (e ? EpochInfo.toJSON(e) : undefined));
    } else {
      obj.epochs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryEpochInfosResponse>): QueryEpochInfosResponse {
    const message = createBaseQueryEpochInfosResponse();
    message.epochs = object.epochs?.map((e) => EpochInfo.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryEpochInfosResponseAmino): QueryEpochInfosResponse {
    const message = createBaseQueryEpochInfosResponse();
    message.epochs = object.epochs?.map((e) => EpochInfo.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryEpochInfosResponse): QueryEpochInfosResponseAmino {
    const obj: any = {};
    if (message.epochs) {
      obj.epochs = message.epochs.map((e) => (e ? EpochInfo.toAmino(e) : undefined));
    } else {
      obj.epochs = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryEpochInfosResponseAminoMsg): QueryEpochInfosResponse {
    return QueryEpochInfosResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryEpochInfosResponse): QueryEpochInfosResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryEpochInfosResponse",
      value: QueryEpochInfosResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryEpochInfosResponseProtoMsg): QueryEpochInfosResponse {
    return QueryEpochInfosResponse.decode(message.value);
  },
  toProto(message: QueryEpochInfosResponse): Uint8Array {
    return QueryEpochInfosResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEpochInfosResponse): QueryEpochInfosResponseProtoMsg {
    return {
      typeUrl: "/cosmos.epochs.v1beta1.QueryEpochInfosResponse",
      value: QueryEpochInfosResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryCurrentEpochRequest(): QueryCurrentEpochRequest {
  return {
    identifier: "",
  };
}
export const QueryCurrentEpochRequest = {
  typeUrl: "/cosmos.epochs.v1beta1.QueryCurrentEpochRequest",
  encode(message: QueryCurrentEpochRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.identifier !== "") {
      writer.uint32(10).string(message.identifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.identifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentEpochRequest {
    const obj = createBaseQueryCurrentEpochRequest();
    if (isSet(object.identifier)) obj.identifier = String(object.identifier);
    return obj;
  },
  toJSON(message: QueryCurrentEpochRequest): unknown {
    const obj: any = {};
    message.identifier !== undefined && (obj.identifier = message.identifier);
    return obj;
  },
  fromPartial(object: Partial<QueryCurrentEpochRequest>): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    message.identifier = object.identifier ?? "";
    return message;
  },
  fromAmino(object: QueryCurrentEpochRequestAmino): QueryCurrentEpochRequest {
    const message = createBaseQueryCurrentEpochRequest();
    if (object.identifier !== undefined && object.identifier !== null) {
      message.identifier = object.identifier;
    }
    return message;
  },
  toAmino(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestAmino {
    const obj: any = {};
    obj.identifier = message.identifier;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochRequestAminoMsg): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCurrentEpochRequest",
      value: QueryCurrentEpochRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryCurrentEpochRequestProtoMsg): QueryCurrentEpochRequest {
    return QueryCurrentEpochRequest.decode(message.value);
  },
  toProto(message: QueryCurrentEpochRequest): Uint8Array {
    return QueryCurrentEpochRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochRequest): QueryCurrentEpochRequestProtoMsg {
    return {
      typeUrl: "/cosmos.epochs.v1beta1.QueryCurrentEpochRequest",
      value: QueryCurrentEpochRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryCurrentEpochResponse(): QueryCurrentEpochResponse {
  return {
    currentEpoch: BigInt(0),
  };
}
export const QueryCurrentEpochResponse = {
  typeUrl: "/cosmos.epochs.v1beta1.QueryCurrentEpochResponse",
  encode(message: QueryCurrentEpochResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.currentEpoch !== BigInt(0)) {
      writer.uint32(8).int64(message.currentEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCurrentEpochResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentEpochResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.currentEpoch = reader.int64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCurrentEpochResponse {
    const obj = createBaseQueryCurrentEpochResponse();
    if (isSet(object.currentEpoch)) obj.currentEpoch = BigInt(object.currentEpoch.toString());
    return obj;
  },
  toJSON(message: QueryCurrentEpochResponse): unknown {
    const obj: any = {};
    message.currentEpoch !== undefined && (obj.currentEpoch = (message.currentEpoch || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryCurrentEpochResponse>): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    if (object.currentEpoch !== undefined && object.currentEpoch !== null) {
      message.currentEpoch = BigInt(object.currentEpoch.toString());
    }
    return message;
  },
  fromAmino(object: QueryCurrentEpochResponseAmino): QueryCurrentEpochResponse {
    const message = createBaseQueryCurrentEpochResponse();
    if (object.current_epoch !== undefined && object.current_epoch !== null) {
      message.currentEpoch = BigInt(object.current_epoch);
    }
    return message;
  },
  toAmino(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseAmino {
    const obj: any = {};
    obj.current_epoch = message.currentEpoch ? message.currentEpoch.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCurrentEpochResponseAminoMsg): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCurrentEpochResponse",
      value: QueryCurrentEpochResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryCurrentEpochResponseProtoMsg): QueryCurrentEpochResponse {
    return QueryCurrentEpochResponse.decode(message.value);
  },
  toProto(message: QueryCurrentEpochResponse): Uint8Array {
    return QueryCurrentEpochResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCurrentEpochResponse): QueryCurrentEpochResponseProtoMsg {
    return {
      typeUrl: "/cosmos.epochs.v1beta1.QueryCurrentEpochResponse",
      value: QueryCurrentEpochResponse.encode(message).finish(),
    };
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** EpochInfos provide running epochInfos */
  EpochInfos(request?: QueryEpochInfosRequest): Promise<QueryEpochInfosResponse>;
  /** CurrentEpoch provide current epoch of specified identifier */
  CurrentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.EpochInfos = this.EpochInfos.bind(this);
    this.CurrentEpoch = this.CurrentEpoch.bind(this);
  }
  EpochInfos(request: QueryEpochInfosRequest = {}): Promise<QueryEpochInfosResponse> {
    const data = QueryEpochInfosRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.epochs.v1beta1.Query", "EpochInfos", data);
    return promise.then((data) => QueryEpochInfosResponse.decode(new BinaryReader(data)));
  }
  CurrentEpoch(request: QueryCurrentEpochRequest): Promise<QueryCurrentEpochResponse> {
    const data = QueryCurrentEpochRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.epochs.v1beta1.Query", "CurrentEpoch", data);
    return promise.then((data) => QueryCurrentEpochResponse.decode(new BinaryReader(data)));
  }
}
