/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../base/query/v1beta1/pagination";
import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { TxRpc } from "../../../types";
export const protobufPackage = "cosmos.evidence.v1beta1";
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequest {
  /**
   * evidence_hash defines the hash of the requested evidence.
   * Deprecated: Use hash, a HEX encoded string, instead.
   */
  /** @deprecated */
  evidenceHash: Uint8Array;
  /**
   * hash defines the evidence hash of the requested evidence.
   *
   * Since: cosmos-sdk 0.47
   */
  hash: string;
}
export interface QueryEvidenceRequestProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest";
  value: Uint8Array;
}
/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequestAmino {
  /**
   * evidence_hash defines the hash of the requested evidence.
   * Deprecated: Use hash, a HEX encoded string, instead.
   */
  /** @deprecated */
  evidence_hash?: string;
  /**
   * hash defines the evidence hash of the requested evidence.
   *
   * Since: cosmos-sdk 0.47
   */
  hash?: string;
}
export interface QueryEvidenceRequestAminoMsg {
  type: "cosmos-sdk/QueryEvidenceRequest";
  value: QueryEvidenceRequestAmino;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponse {
  /** evidence returns the requested evidence. */
  evidence?: Any | undefined;
}
export interface QueryEvidenceResponseProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse";
  value: Uint8Array;
}
/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponseAmino {
  /** evidence returns the requested evidence. */
  evidence?: AnyAmino | undefined;
}
export interface QueryEvidenceResponseAminoMsg {
  type: "cosmos-sdk/QueryEvidenceResponse";
  value: QueryEvidenceResponseAmino;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryAllEvidenceRequestProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest";
  value: Uint8Array;
}
/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAllEvidenceRequestAminoMsg {
  type: "cosmos-sdk/QueryAllEvidenceRequest";
  value: QueryAllEvidenceRequestAmino;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponse {
  /** evidence returns all evidences. */
  evidence: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryAllEvidenceResponseProtoMsg {
  typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse";
  value: Uint8Array;
}
/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponseAmino {
  /** evidence returns all evidences. */
  evidence?: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryAllEvidenceResponseAminoMsg {
  type: "cosmos-sdk/QueryAllEvidenceResponse";
  value: QueryAllEvidenceResponseAmino;
}
function createBaseQueryEvidenceRequest(): QueryEvidenceRequest {
  return {
    evidenceHash: new Uint8Array(),
    hash: "",
  };
}
export const QueryEvidenceRequest = {
  typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest",
  aminoType: "cosmos-sdk/QueryEvidenceRequest",
  is(o: any): o is QueryEvidenceRequest {
    return (
      o &&
      (o.$typeUrl === QueryEvidenceRequest.typeUrl ||
        ((o.evidenceHash instanceof Uint8Array || typeof o.evidenceHash === "string") &&
          typeof o.hash === "string"))
    );
  },
  isAmino(o: any): o is QueryEvidenceRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryEvidenceRequest.typeUrl ||
        ((o.evidence_hash instanceof Uint8Array || typeof o.evidence_hash === "string") &&
          typeof o.hash === "string"))
    );
  },
  encode(message: QueryEvidenceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evidenceHash.length !== 0) {
      writer.uint32(10).bytes(message.evidenceHash);
    }
    if (message.hash !== "") {
      writer.uint32(18).string(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidenceHash = reader.bytes();
          break;
        case 2:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEvidenceRequest {
    const obj = createBaseQueryEvidenceRequest();
    if (isSet(object.evidenceHash)) obj.evidenceHash = bytesFromBase64(object.evidenceHash);
    if (isSet(object.hash)) obj.hash = String(object.hash);
    return obj;
  },
  toJSON(message: QueryEvidenceRequest): unknown {
    const obj: any = {};
    message.evidenceHash !== undefined &&
      (obj.evidenceHash = base64FromBytes(
        message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array(),
      ));
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },
  fromPartial(object: Partial<QueryEvidenceRequest>): QueryEvidenceRequest {
    const message = createBaseQueryEvidenceRequest();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    message.hash = object.hash ?? "";
    return message;
  },
  fromAmino(object: QueryEvidenceRequestAmino): QueryEvidenceRequest {
    const message = createBaseQueryEvidenceRequest();
    if (object.evidence_hash !== undefined && object.evidence_hash !== null) {
      message.evidenceHash = bytesFromBase64(object.evidence_hash);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    }
    return message;
  },
  toAmino(message: QueryEvidenceRequest): QueryEvidenceRequestAmino {
    const obj: any = {};
    obj.evidence_hash = message.evidenceHash ? base64FromBytes(message.evidenceHash) : undefined;
    obj.hash = message.hash;
    return obj;
  },
  fromAminoMsg(object: QueryEvidenceRequestAminoMsg): QueryEvidenceRequest {
    return QueryEvidenceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryEvidenceRequest): QueryEvidenceRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryEvidenceRequest",
      value: QueryEvidenceRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryEvidenceRequestProtoMsg): QueryEvidenceRequest {
    return QueryEvidenceRequest.decode(message.value);
  },
  toProto(message: QueryEvidenceRequest): Uint8Array {
    return QueryEvidenceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryEvidenceRequest): QueryEvidenceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceRequest",
      value: QueryEvidenceRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryEvidenceRequest.typeUrl, QueryEvidenceRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryEvidenceRequest.aminoType, QueryEvidenceRequest.typeUrl);
function createBaseQueryEvidenceResponse(): QueryEvidenceResponse {
  return {
    evidence: undefined,
  };
}
export const QueryEvidenceResponse = {
  typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse",
  aminoType: "cosmos-sdk/QueryEvidenceResponse",
  is(o: any): o is QueryEvidenceResponse {
    return o && o.$typeUrl === QueryEvidenceResponse.typeUrl;
  },
  isAmino(o: any): o is QueryEvidenceResponseAmino {
    return o && o.$typeUrl === QueryEvidenceResponse.typeUrl;
  },
  encode(message: QueryEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.evidence !== undefined) {
      Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryEvidenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryEvidenceResponse {
    const obj = createBaseQueryEvidenceResponse();
    if (isSet(object.evidence)) obj.evidence = Any.fromJSON(object.evidence);
    return obj;
  },
  toJSON(message: QueryEvidenceResponse): unknown {
    const obj: any = {};
    message.evidence !== undefined &&
      (obj.evidence = message.evidence ? Any.toJSON(message.evidence) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryEvidenceResponse>): QueryEvidenceResponse {
    const message = createBaseQueryEvidenceResponse();
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = Any.fromPartial(object.evidence);
    }
    return message;
  },
  fromAmino(object: QueryEvidenceResponseAmino): QueryEvidenceResponse {
    const message = createBaseQueryEvidenceResponse();
    if (object.evidence !== undefined && object.evidence !== null) {
      message.evidence = Any.fromAmino(object.evidence);
    }
    return message;
  },
  toAmino(message: QueryEvidenceResponse): QueryEvidenceResponseAmino {
    const obj: any = {};
    obj.evidence = message.evidence ? Any.toAmino(message.evidence) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryEvidenceResponseAminoMsg): QueryEvidenceResponse {
    return QueryEvidenceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryEvidenceResponse): QueryEvidenceResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryEvidenceResponse",
      value: QueryEvidenceResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryEvidenceResponseProtoMsg): QueryEvidenceResponse {
    return QueryEvidenceResponse.decode(message.value);
  },
  toProto(message: QueryEvidenceResponse): Uint8Array {
    return QueryEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryEvidenceResponse): QueryEvidenceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.QueryEvidenceResponse",
      value: QueryEvidenceResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryEvidenceResponse.typeUrl, QueryEvidenceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryEvidenceResponse.aminoType,
  QueryEvidenceResponse.typeUrl,
);
function createBaseQueryAllEvidenceRequest(): QueryAllEvidenceRequest {
  return {
    pagination: undefined,
  };
}
export const QueryAllEvidenceRequest = {
  typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest",
  aminoType: "cosmos-sdk/QueryAllEvidenceRequest",
  is(o: any): o is QueryAllEvidenceRequest {
    return o && o.$typeUrl === QueryAllEvidenceRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAllEvidenceRequestAmino {
    return o && o.$typeUrl === QueryAllEvidenceRequest.typeUrl;
  },
  encode(message: QueryAllEvidenceRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEvidenceRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEvidenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllEvidenceRequest {
    const obj = createBaseQueryAllEvidenceRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllEvidenceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllEvidenceRequest>): QueryAllEvidenceRequest {
    const message = createBaseQueryAllEvidenceRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryAllEvidenceRequestAmino): QueryAllEvidenceRequest {
    const message = createBaseQueryAllEvidenceRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllEvidenceRequest): QueryAllEvidenceRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllEvidenceRequestAminoMsg): QueryAllEvidenceRequest {
    return QueryAllEvidenceRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllEvidenceRequest): QueryAllEvidenceRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllEvidenceRequest",
      value: QueryAllEvidenceRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAllEvidenceRequestProtoMsg): QueryAllEvidenceRequest {
    return QueryAllEvidenceRequest.decode(message.value);
  },
  toProto(message: QueryAllEvidenceRequest): Uint8Array {
    return QueryAllEvidenceRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEvidenceRequest): QueryAllEvidenceRequestProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceRequest",
      value: QueryAllEvidenceRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryAllEvidenceRequest.typeUrl, QueryAllEvidenceRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryAllEvidenceRequest.aminoType,
  QueryAllEvidenceRequest.typeUrl,
);
function createBaseQueryAllEvidenceResponse(): QueryAllEvidenceResponse {
  return {
    evidence: [],
    pagination: undefined,
  };
}
export const QueryAllEvidenceResponse = {
  typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse",
  aminoType: "cosmos-sdk/QueryAllEvidenceResponse",
  is(o: any): o is QueryAllEvidenceResponse {
    return (
      o &&
      (o.$typeUrl === QueryAllEvidenceResponse.typeUrl ||
        (Array.isArray(o.evidence) && (!o.evidence.length || Any.is(o.evidence[0]))))
    );
  },
  isAmino(o: any): o is QueryAllEvidenceResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryAllEvidenceResponse.typeUrl ||
        (Array.isArray(o.evidence) && (!o.evidence.length || Any.isAmino(o.evidence[0]))))
    );
  },
  encode(message: QueryAllEvidenceResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.evidence) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAllEvidenceResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Any.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAllEvidenceResponse {
    const obj = createBaseQueryAllEvidenceResponse();
    if (Array.isArray(object?.evidence)) obj.evidence = object.evidence.map((e: any) => Any.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAllEvidenceResponse): unknown {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) => (e ? Any.toJSON(e) : undefined));
    } else {
      obj.evidence = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllEvidenceResponse>): QueryAllEvidenceResponse {
    const message = createBaseQueryAllEvidenceResponse();
    message.evidence = object.evidence?.map((e) => Any.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryAllEvidenceResponseAmino): QueryAllEvidenceResponse {
    const message = createBaseQueryAllEvidenceResponse();
    message.evidence = object.evidence?.map((e) => Any.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAllEvidenceResponse): QueryAllEvidenceResponseAmino {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) => (e ? Any.toAmino(e) : undefined));
    } else {
      obj.evidence = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllEvidenceResponseAminoMsg): QueryAllEvidenceResponse {
    return QueryAllEvidenceResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAllEvidenceResponse): QueryAllEvidenceResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAllEvidenceResponse",
      value: QueryAllEvidenceResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAllEvidenceResponseProtoMsg): QueryAllEvidenceResponse {
    return QueryAllEvidenceResponse.decode(message.value);
  },
  toProto(message: QueryAllEvidenceResponse): Uint8Array {
    return QueryAllEvidenceResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllEvidenceResponse): QueryAllEvidenceResponseProtoMsg {
    return {
      typeUrl: "/cosmos.evidence.v1beta1.QueryAllEvidenceResponse",
      value: QueryAllEvidenceResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryAllEvidenceResponse.typeUrl, QueryAllEvidenceResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryAllEvidenceResponse.aminoType,
  QueryAllEvidenceResponse.typeUrl,
);
/** Query defines the gRPC querier service. */
export interface Query {
  /** Evidence queries evidence based on evidence hash. */
  Evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse>;
  /** AllEvidence queries all evidence. */
  AllEvidence(request?: QueryAllEvidenceRequest): Promise<QueryAllEvidenceResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.Evidence = this.Evidence.bind(this);
    this.AllEvidence = this.AllEvidence.bind(this);
  }
  Evidence(request: QueryEvidenceRequest): Promise<QueryEvidenceResponse> {
    const data = QueryEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "Evidence", data);
    return promise.then((data) => QueryEvidenceResponse.decode(new BinaryReader(data)));
  }
  AllEvidence(
    request: QueryAllEvidenceRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryAllEvidenceResponse> {
    const data = QueryAllEvidenceRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.evidence.v1beta1.Query", "AllEvidence", data);
    return promise.then((data) => QueryAllEvidenceResponse.decode(new BinaryReader(data)));
  }
}