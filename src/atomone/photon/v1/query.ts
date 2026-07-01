/* eslint-disable */
import { Params, ParamsAmino } from "./photon";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { TxRpc } from "../../../types";
export const protobufPackage = "atomone.photon.v1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/atomone.photon.v1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "/atomone.photon.v1.QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/atomone.photon.v1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params holds all the parameters of this module. */
  params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "/atomone.photon.v1.QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryConversionRateRequest is request type for the Query/ConversionRate RPC method. */
export interface QueryConversionRateRequest {}
export interface QueryConversionRateRequestProtoMsg {
  typeUrl: "/atomone.photon.v1.QueryConversionRateRequest";
  value: Uint8Array;
}
/** QueryConversionRateRequest is request type for the Query/ConversionRate RPC method. */
export interface QueryConversionRateRequestAmino {}
export interface QueryConversionRateRequestAminoMsg {
  type: "/atomone.photon.v1.QueryConversionRateRequest";
  value: QueryConversionRateRequestAmino;
}
/** QueryConversionRateResponse is response type for the Query/ConversionRate RPC method. */
export interface QueryConversionRateResponse {
  /** conversion_rate represents the factor used to convert atone to photon. */
  conversionRate: string;
}
export interface QueryConversionRateResponseProtoMsg {
  typeUrl: "/atomone.photon.v1.QueryConversionRateResponse";
  value: Uint8Array;
}
/** QueryConversionRateResponse is response type for the Query/ConversionRate RPC method. */
export interface QueryConversionRateResponseAmino {
  /** conversion_rate represents the factor used to convert atone to photon. */
  conversion_rate?: string;
}
export interface QueryConversionRateResponseAminoMsg {
  type: "/atomone.photon.v1.QueryConversionRateResponse";
  value: QueryConversionRateResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/atomone.photon.v1.QueryParamsRequest",
  encode(_: QueryParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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
  fromJSON(_: any): QueryParamsRequest {
    const obj = createBaseQueryParamsRequest();
    return obj;
  },
  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryParamsRequest>): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  fromAmino(_: QueryParamsRequestAmino): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
  toAmino(_: QueryParamsRequest): QueryParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryParamsRequestAminoMsg): QueryParamsRequest {
    return QueryParamsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/atomone.photon.v1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/atomone.photon.v1.QueryParamsResponse",
  encode(message: QueryParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
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
  fromJSON(object: any): QueryParamsResponse {
    const obj = createBaseQueryParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryParamsResponse>): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: QueryParamsResponseAmino): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryParamsResponse): QueryParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryParamsResponseAminoMsg): QueryParamsResponse {
    return QueryParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/atomone.photon.v1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
function createBaseQueryConversionRateRequest(): QueryConversionRateRequest {
  return {};
}
export const QueryConversionRateRequest = {
  typeUrl: "/atomone.photon.v1.QueryConversionRateRequest",
  encode(_: QueryConversionRateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConversionRateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConversionRateRequest();
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
  fromJSON(_: any): QueryConversionRateRequest {
    const obj = createBaseQueryConversionRateRequest();
    return obj;
  },
  toJSON(_: QueryConversionRateRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryConversionRateRequest>): QueryConversionRateRequest {
    const message = createBaseQueryConversionRateRequest();
    return message;
  },
  fromAmino(_: QueryConversionRateRequestAmino): QueryConversionRateRequest {
    const message = createBaseQueryConversionRateRequest();
    return message;
  },
  toAmino(_: QueryConversionRateRequest): QueryConversionRateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryConversionRateRequestAminoMsg): QueryConversionRateRequest {
    return QueryConversionRateRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConversionRateRequestProtoMsg): QueryConversionRateRequest {
    return QueryConversionRateRequest.decode(message.value);
  },
  toProto(message: QueryConversionRateRequest): Uint8Array {
    return QueryConversionRateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConversionRateRequest): QueryConversionRateRequestProtoMsg {
    return {
      typeUrl: "/atomone.photon.v1.QueryConversionRateRequest",
      value: QueryConversionRateRequest.encode(message).finish(),
    };
  },
};
function createBaseQueryConversionRateResponse(): QueryConversionRateResponse {
  return {
    conversionRate: "",
  };
}
export const QueryConversionRateResponse = {
  typeUrl: "/atomone.photon.v1.QueryConversionRateResponse",
  encode(message: QueryConversionRateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.conversionRate !== "") {
      writer.uint32(10).string(message.conversionRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConversionRateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConversionRateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conversionRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConversionRateResponse {
    const obj = createBaseQueryConversionRateResponse();
    if (isSet(object.conversionRate)) obj.conversionRate = String(object.conversionRate);
    return obj;
  },
  toJSON(message: QueryConversionRateResponse): unknown {
    const obj: any = {};
    message.conversionRate !== undefined && (obj.conversionRate = message.conversionRate);
    return obj;
  },
  fromPartial(object: Partial<QueryConversionRateResponse>): QueryConversionRateResponse {
    const message = createBaseQueryConversionRateResponse();
    message.conversionRate = object.conversionRate ?? "";
    return message;
  },
  fromAmino(object: QueryConversionRateResponseAmino): QueryConversionRateResponse {
    const message = createBaseQueryConversionRateResponse();
    if (object.conversion_rate !== undefined && object.conversion_rate !== null) {
      message.conversionRate = object.conversion_rate;
    }
    return message;
  },
  toAmino(message: QueryConversionRateResponse): QueryConversionRateResponseAmino {
    const obj: any = {};
    obj.conversion_rate = message.conversionRate;
    return obj;
  },
  fromAminoMsg(object: QueryConversionRateResponseAminoMsg): QueryConversionRateResponse {
    return QueryConversionRateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryConversionRateResponseProtoMsg): QueryConversionRateResponse {
    return QueryConversionRateResponse.decode(message.value);
  },
  toProto(message: QueryConversionRateResponse): Uint8Array {
    return QueryConversionRateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConversionRateResponse): QueryConversionRateResponseProtoMsg {
    return {
      typeUrl: "/atomone.photon.v1.QueryConversionRateResponse",
      value: QueryConversionRateResponse.encode(message).finish(),
    };
  },
};
/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ConversionRate queries the photon's conversion rate */
  ConversionRate(request?: QueryConversionRateRequest): Promise<QueryConversionRateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ConversionRate = this.ConversionRate.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.photon.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  ConversionRate(request: QueryConversionRateRequest = {}): Promise<QueryConversionRateResponse> {
    const data = QueryConversionRateRequest.encode(request).finish();
    const promise = this.rpc.request("atomone.photon.v1.Query", "ConversionRate", data);
    return promise.then((data) => QueryConversionRateResponse.decode(new BinaryReader(data)));
  }
}
