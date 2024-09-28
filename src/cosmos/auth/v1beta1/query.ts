/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../base/query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino } from "../../../google/protobuf/any";
import {
  Params,
  ParamsAmino,
  BaseAccount,
  BaseAccountProtoMsg,
  BaseAccountAmino,
  ModuleAccount,
  ModuleAccountProtoMsg,
} from "./auth";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
import { TxRpc } from "../../../types";
export const protobufPackage = "cosmos.auth.v1beta1";
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryAccountsRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest";
  value: Uint8Array;
}
/**
 * QueryAccountsRequest is the request type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryAccountsRequestAminoMsg {
  type: "cosmos-sdk/QueryAccountsRequest";
  value: QueryAccountsRequestAmino;
}
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponse {
  /** accounts are the existing accounts */
  accounts: (BaseAccount | Any)[] | Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryAccountsResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse";
  value: Uint8Array;
}
export type QueryAccountsResponseEncoded = Omit<QueryAccountsResponse, "accounts"> & {
  /** accounts are the existing accounts */ accounts: (BaseAccountProtoMsg | AnyProtoMsg)[];
};
/**
 * QueryAccountsResponse is the response type for the Query/Accounts RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryAccountsResponseAmino {
  /** accounts are the existing accounts */
  accounts?: AnyAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryAccountsResponseAminoMsg {
  type: "cosmos-sdk/QueryAccountsResponse";
  value: QueryAccountsResponseAmino;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequest {
  /** address defines the address to query for. */
  address: string;
}
export interface QueryAccountRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest";
  value: Uint8Array;
}
/** QueryAccountRequest is the request type for the Query/Account RPC method. */
export interface QueryAccountRequestAmino {
  /** address defines the address to query for. */
  address?: string;
}
export interface QueryAccountRequestAminoMsg {
  type: "cosmos-sdk/QueryAccountRequest";
  value: QueryAccountRequestAmino;
}
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponse {
  /** account defines the account of the corresponding address. */
  account?: BaseAccount | Any | undefined;
}
export interface QueryAccountResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse";
  value: Uint8Array;
}
export type QueryAccountResponseEncoded = Omit<QueryAccountResponse, "account"> & {
  /** account defines the account of the corresponding address. */ account?:
    | BaseAccountProtoMsg
    | AnyProtoMsg
    | undefined;
};
/** QueryAccountResponse is the response type for the Query/Account RPC method. */
export interface QueryAccountResponseAmino {
  /** account defines the account of the corresponding address. */
  account?: AnyAmino | undefined;
}
export interface QueryAccountResponseAminoMsg {
  type: "cosmos-sdk/QueryAccountResponse";
  value: QueryAccountResponseAmino;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest";
  value: Uint8Array;
}
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequestAmino {}
export interface QueryParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryParamsRequest";
  value: QueryParamsRequestAmino;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params defines the parameters of the module. */
  params: Params | undefined;
}
export interface QueryParamsResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params?: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsRequest {}
export interface QueryModuleAccountsRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest";
  value: Uint8Array;
}
/**
 * QueryModuleAccountsRequest is the request type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsRequestAmino {}
export interface QueryModuleAccountsRequestAminoMsg {
  type: "cosmos-sdk/QueryModuleAccountsRequest";
  value: QueryModuleAccountsRequestAmino;
}
/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsResponse {
  accounts: (ModuleAccount | Any)[] | Any[];
}
export interface QueryModuleAccountsResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse";
  value: Uint8Array;
}
export type QueryModuleAccountsResponseEncoded = Omit<QueryModuleAccountsResponse, "accounts"> & {
  accounts: (ModuleAccountProtoMsg | AnyProtoMsg)[];
};
/**
 * QueryModuleAccountsResponse is the response type for the Query/ModuleAccounts RPC method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryModuleAccountsResponseAmino {
  accounts?: AnyAmino[];
}
export interface QueryModuleAccountsResponseAminoMsg {
  type: "cosmos-sdk/QueryModuleAccountsResponse";
  value: QueryModuleAccountsResponseAmino;
}
/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameRequest {
  name: string;
}
export interface QueryModuleAccountByNameRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest";
  value: Uint8Array;
}
/** QueryModuleAccountByNameRequest is the request type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameRequestAmino {
  name?: string;
}
export interface QueryModuleAccountByNameRequestAminoMsg {
  type: "cosmos-sdk/QueryModuleAccountByNameRequest";
  value: QueryModuleAccountByNameRequestAmino;
}
/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameResponse {
  account?: ModuleAccount | Any | undefined;
}
export interface QueryModuleAccountByNameResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse";
  value: Uint8Array;
}
export type QueryModuleAccountByNameResponseEncoded = Omit<QueryModuleAccountByNameResponse, "account"> & {
  account?: ModuleAccountProtoMsg | AnyProtoMsg | undefined;
};
/** QueryModuleAccountByNameResponse is the response type for the Query/ModuleAccountByName RPC method. */
export interface QueryModuleAccountByNameResponseAmino {
  account?: AnyAmino | undefined;
}
export interface QueryModuleAccountByNameResponseAminoMsg {
  type: "cosmos-sdk/QueryModuleAccountByNameResponse";
  value: QueryModuleAccountByNameResponseAmino;
}
/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixRequest {}
export interface Bech32PrefixRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest";
  value: Uint8Array;
}
/**
 * Bech32PrefixRequest is the request type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixRequestAmino {}
export interface Bech32PrefixRequestAminoMsg {
  type: "cosmos-sdk/Bech32PrefixRequest";
  value: Bech32PrefixRequestAmino;
}
/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixResponse {
  bech32Prefix: string;
}
export interface Bech32PrefixResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse";
  value: Uint8Array;
}
/**
 * Bech32PrefixResponse is the response type for Bech32Prefix rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface Bech32PrefixResponseAmino {
  bech32_prefix?: string;
}
export interface Bech32PrefixResponseAminoMsg {
  type: "cosmos-sdk/Bech32PrefixResponse";
  value: Bech32PrefixResponseAmino;
}
/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringRequest {
  addressBytes: Uint8Array;
}
export interface AddressBytesToStringRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest";
  value: Uint8Array;
}
/**
 * AddressBytesToStringRequest is the request type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringRequestAmino {
  address_bytes?: string;
}
export interface AddressBytesToStringRequestAminoMsg {
  type: "cosmos-sdk/AddressBytesToStringRequest";
  value: AddressBytesToStringRequestAmino;
}
/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringResponse {
  addressString: string;
}
export interface AddressBytesToStringResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse";
  value: Uint8Array;
}
/**
 * AddressBytesToStringResponse is the response type for AddressString rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressBytesToStringResponseAmino {
  address_string?: string;
}
export interface AddressBytesToStringResponseAminoMsg {
  type: "cosmos-sdk/AddressBytesToStringResponse";
  value: AddressBytesToStringResponseAmino;
}
/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesRequest {
  addressString: string;
}
export interface AddressStringToBytesRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest";
  value: Uint8Array;
}
/**
 * AddressStringToBytesRequest is the request type for AccountBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesRequestAmino {
  address_string?: string;
}
export interface AddressStringToBytesRequestAminoMsg {
  type: "cosmos-sdk/AddressStringToBytesRequest";
  value: AddressStringToBytesRequestAmino;
}
/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesResponse {
  addressBytes: Uint8Array;
}
export interface AddressStringToBytesResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse";
  value: Uint8Array;
}
/**
 * AddressStringToBytesResponse is the response type for AddressBytes rpc method.
 *
 * Since: cosmos-sdk 0.46
 */
export interface AddressStringToBytesResponseAmino {
  address_bytes?: string;
}
export interface AddressStringToBytesResponseAminoMsg {
  type: "cosmos-sdk/AddressStringToBytesResponse";
  value: AddressStringToBytesResponseAmino;
}
/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDRequest {
  /**
   * Deprecated, use account_id instead
   *
   * id is the account number of the address to be queried. This field
   * should have been an uint64 (like all account numbers), and will be
   * updated to uint64 in a future version of the auth query.
   */
  /** @deprecated */
  id: bigint;
  /**
   * account_id is the account number of the address to be queried.
   *
   * Since: cosmos-sdk 0.47
   */
  accountId: bigint;
}
export interface QueryAccountAddressByIDRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest";
  value: Uint8Array;
}
/**
 * QueryAccountAddressByIDRequest is the request type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDRequestAmino {
  /**
   * Deprecated, use account_id instead
   *
   * id is the account number of the address to be queried. This field
   * should have been an uint64 (like all account numbers), and will be
   * updated to uint64 in a future version of the auth query.
   */
  /** @deprecated */
  id?: string;
  /**
   * account_id is the account number of the address to be queried.
   *
   * Since: cosmos-sdk 0.47
   */
  account_id?: string;
}
export interface QueryAccountAddressByIDRequestAminoMsg {
  type: "cosmos-sdk/QueryAccountAddressByIDRequest";
  value: QueryAccountAddressByIDRequestAmino;
}
/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDResponse {
  accountAddress: string;
}
export interface QueryAccountAddressByIDResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse";
  value: Uint8Array;
}
/**
 * QueryAccountAddressByIDResponse is the response type for AccountAddressByID rpc method
 *
 * Since: cosmos-sdk 0.46.2
 */
export interface QueryAccountAddressByIDResponseAmino {
  account_address?: string;
}
export interface QueryAccountAddressByIDResponseAminoMsg {
  type: "cosmos-sdk/QueryAccountAddressByIDResponse";
  value: QueryAccountAddressByIDResponseAmino;
}
/**
 * QueryAccountInfoRequest is the Query/AccountInfo request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoRequest {
  /** address is the account address string. */
  address: string;
}
export interface QueryAccountInfoRequestProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoRequest";
  value: Uint8Array;
}
/**
 * QueryAccountInfoRequest is the Query/AccountInfo request type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoRequestAmino {
  /** address is the account address string. */
  address?: string;
}
export interface QueryAccountInfoRequestAminoMsg {
  type: "cosmos-sdk/QueryAccountInfoRequest";
  value: QueryAccountInfoRequestAmino;
}
/**
 * QueryAccountInfoResponse is the Query/AccountInfo response type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoResponse {
  /** info is the account info which is represented by BaseAccount. */
  info?: BaseAccount | undefined;
}
export interface QueryAccountInfoResponseProtoMsg {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoResponse";
  value: Uint8Array;
}
/**
 * QueryAccountInfoResponse is the Query/AccountInfo response type.
 *
 * Since: cosmos-sdk 0.47
 */
export interface QueryAccountInfoResponseAmino {
  /** info is the account info which is represented by BaseAccount. */
  info?: BaseAccountAmino | undefined;
}
export interface QueryAccountInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryAccountInfoResponse";
  value: QueryAccountInfoResponseAmino;
}
function createBaseQueryAccountsRequest(): QueryAccountsRequest {
  return {
    pagination: undefined,
  };
}
export const QueryAccountsRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
  aminoType: "cosmos-sdk/QueryAccountsRequest",
  is(o: any): o is QueryAccountsRequest {
    return o && o.$typeUrl === QueryAccountsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryAccountsRequestAmino {
    return o && o.$typeUrl === QueryAccountsRequest.typeUrl;
  },
  encode(message: QueryAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsRequest();
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
  fromJSON(object: any): QueryAccountsRequest {
    const obj = createBaseQueryAccountsRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAccountsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAccountsRequest>): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryAccountsRequestAmino): QueryAccountsRequest {
    const message = createBaseQueryAccountsRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAccountsRequest): QueryAccountsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountsRequestAminoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountsRequest): QueryAccountsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountsRequest",
      value: QueryAccountsRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAccountsRequestProtoMsg): QueryAccountsRequest {
    return QueryAccountsRequest.decode(message.value);
  },
  toProto(message: QueryAccountsRequest): Uint8Array {
    return QueryAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsRequest): QueryAccountsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountsRequest",
      value: QueryAccountsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryAccountsRequest.typeUrl, QueryAccountsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAccountsRequest.aminoType, QueryAccountsRequest.typeUrl);
function createBaseQueryAccountsResponse(): QueryAccountsResponse {
  return {
    accounts: [],
    pagination: undefined,
  };
}
export const QueryAccountsResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
  aminoType: "cosmos-sdk/QueryAccountsResponse",
  is(o: any): o is QueryAccountsResponse {
    return (
      o &&
      (o.$typeUrl === QueryAccountsResponse.typeUrl ||
        (Array.isArray(o.accounts) &&
          (!o.accounts.length || BaseAccount.is(o.accounts[0]) || Any.is(o.accounts[0]))))
    );
  },
  isAmino(o: any): o is QueryAccountsResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryAccountsResponse.typeUrl ||
        (Array.isArray(o.accounts) &&
          (!o.accounts.length || BaseAccount.isAmino(o.accounts[0]) || Any.isAmino(o.accounts[0]))))
    );
  },
  encode(message: QueryAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(GlobalDecoderRegistry.unwrapAny(reader));
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
  fromJSON(object: any): QueryAccountsResponse {
    const obj = createBaseQueryAccountsResponse();
    if (Array.isArray(object?.accounts))
      obj.accounts = object.accounts.map((e: any) => GlobalDecoderRegistry.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => (e ? GlobalDecoderRegistry.toJSON(e) : undefined));
    } else {
      obj.accounts = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAccountsResponse>): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map((e) => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryAccountsResponseAmino): QueryAccountsResponse {
    const message = createBaseQueryAccountsResponse();
    message.accounts = object.accounts?.map((e) => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryAccountsResponse): QueryAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => (e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined));
    } else {
      obj.accounts = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountsResponseAminoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountsResponse): QueryAccountsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountsResponse",
      value: QueryAccountsResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAccountsResponseProtoMsg): QueryAccountsResponse {
    return QueryAccountsResponse.decode(message.value);
  },
  toProto(message: QueryAccountsResponse): Uint8Array {
    return QueryAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountsResponse): QueryAccountsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountsResponse",
      value: QueryAccountsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryAccountsResponse.typeUrl, QueryAccountsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryAccountsResponse.aminoType,
  QueryAccountsResponse.typeUrl,
);
function createBaseQueryAccountRequest(): QueryAccountRequest {
  return {
    address: "",
  };
}
export const QueryAccountRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
  aminoType: "cosmos-sdk/QueryAccountRequest",
  is(o: any): o is QueryAccountRequest {
    return o && (o.$typeUrl === QueryAccountRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryAccountRequestAmino {
    return o && (o.$typeUrl === QueryAccountRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryAccountRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountRequest {
    const obj = createBaseQueryAccountRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QueryAccountRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryAccountRequest>): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAccountRequestAmino): QueryAccountRequest {
    const message = createBaseQueryAccountRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountRequest): QueryAccountRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountRequestAminoMsg): QueryAccountRequest {
    return QueryAccountRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountRequest): QueryAccountRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountRequest",
      value: QueryAccountRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAccountRequestProtoMsg): QueryAccountRequest {
    return QueryAccountRequest.decode(message.value);
  },
  toProto(message: QueryAccountRequest): Uint8Array {
    return QueryAccountRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountRequest): QueryAccountRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountRequest",
      value: QueryAccountRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryAccountRequest.typeUrl, QueryAccountRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAccountRequest.aminoType, QueryAccountRequest.typeUrl);
function createBaseQueryAccountResponse(): QueryAccountResponse {
  return {
    account: undefined,
  };
}
export const QueryAccountResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
  aminoType: "cosmos-sdk/QueryAccountResponse",
  is(o: any): o is QueryAccountResponse {
    return o && o.$typeUrl === QueryAccountResponse.typeUrl;
  },
  isAmino(o: any): o is QueryAccountResponseAmino {
    return o && o.$typeUrl === QueryAccountResponse.typeUrl;
  },
  encode(message: QueryAccountResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.account !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.account), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountResponse {
    const obj = createBaseQueryAccountResponse();
    if (isSet(object.account)) obj.account = GlobalDecoderRegistry.fromJSON(object.account);
    return obj;
  },
  toJSON(message: QueryAccountResponse): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account ? GlobalDecoderRegistry.toJSON(message.account) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAccountResponse>): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    if (object.account !== undefined && object.account !== null) {
      message.account = GlobalDecoderRegistry.fromPartial(object.account);
    }
    return message;
  },
  fromAmino(object: QueryAccountResponseAmino): QueryAccountResponse {
    const message = createBaseQueryAccountResponse();
    if (object.account !== undefined && object.account !== null) {
      message.account = GlobalDecoderRegistry.fromAminoMsg(object.account);
    }
    return message;
  },
  toAmino(message: QueryAccountResponse): QueryAccountResponseAmino {
    const obj: any = {};
    obj.account = message.account ? GlobalDecoderRegistry.toAminoMsg(message.account) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountResponseAminoMsg): QueryAccountResponse {
    return QueryAccountResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountResponse): QueryAccountResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountResponse",
      value: QueryAccountResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAccountResponseProtoMsg): QueryAccountResponse {
    return QueryAccountResponse.decode(message.value);
  },
  toProto(message: QueryAccountResponse): Uint8Array {
    return QueryAccountResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountResponse): QueryAccountResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountResponse",
      value: QueryAccountResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryAccountResponse.typeUrl, QueryAccountResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryAccountResponse.aminoType, QueryAccountResponse.typeUrl);
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
  aminoType: "cosmos-sdk/QueryParamsRequest",
  is(o: any): o is QueryParamsRequest {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryParamsRequestAmino {
    return o && o.$typeUrl === QueryParamsRequest.typeUrl;
  },
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
  toAminoMsg(message: QueryParamsRequest): QueryParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsRequest",
      value: QueryParamsRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryParamsRequestProtoMsg): QueryParamsRequest {
    return QueryParamsRequest.decode(message.value);
  },
  toProto(message: QueryParamsRequest): Uint8Array {
    return QueryParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsRequest): QueryParamsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryParamsRequest",
      value: QueryParamsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryParamsRequest.typeUrl, QueryParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsRequest.aminoType, QueryParamsRequest.typeUrl);
function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryParamsResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
  aminoType: "cosmos-sdk/QueryParamsResponse",
  is(o: any): o is QueryParamsResponse {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.is(o.params));
  },
  isAmino(o: any): o is QueryParamsResponseAmino {
    return o && (o.$typeUrl === QueryParamsResponse.typeUrl || Params.isAmino(o.params));
  },
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
  toAminoMsg(message: QueryParamsResponse): QueryParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryParamsResponse",
      value: QueryParamsResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryParamsResponseProtoMsg): QueryParamsResponse {
    return QueryParamsResponse.decode(message.value);
  },
  toProto(message: QueryParamsResponse): Uint8Array {
    return QueryParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryParamsResponse): QueryParamsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryModuleAccountsRequest(): QueryModuleAccountsRequest {
  return {};
}
export const QueryModuleAccountsRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
  aminoType: "cosmos-sdk/QueryModuleAccountsRequest",
  is(o: any): o is QueryModuleAccountsRequest {
    return o && o.$typeUrl === QueryModuleAccountsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryModuleAccountsRequestAmino {
    return o && o.$typeUrl === QueryModuleAccountsRequest.typeUrl;
  },
  encode(_: QueryModuleAccountsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsRequest();
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
  fromJSON(_: any): QueryModuleAccountsRequest {
    const obj = createBaseQueryModuleAccountsRequest();
    return obj;
  },
  toJSON(_: QueryModuleAccountsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryModuleAccountsRequest>): QueryModuleAccountsRequest {
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  },
  fromAmino(_: QueryModuleAccountsRequestAmino): QueryModuleAccountsRequest {
    const message = createBaseQueryModuleAccountsRequest();
    return message;
  },
  toAmino(_: QueryModuleAccountsRequest): QueryModuleAccountsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountsRequestAminoMsg): QueryModuleAccountsRequest {
    return QueryModuleAccountsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryModuleAccountsRequest",
      value: QueryModuleAccountsRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryModuleAccountsRequestProtoMsg): QueryModuleAccountsRequest {
    return QueryModuleAccountsRequest.decode(message.value);
  },
  toProto(message: QueryModuleAccountsRequest): Uint8Array {
    return QueryModuleAccountsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountsRequest): QueryModuleAccountsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsRequest",
      value: QueryModuleAccountsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryModuleAccountsRequest.typeUrl, QueryModuleAccountsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryModuleAccountsRequest.aminoType,
  QueryModuleAccountsRequest.typeUrl,
);
function createBaseQueryModuleAccountsResponse(): QueryModuleAccountsResponse {
  return {
    accounts: [],
  };
}
export const QueryModuleAccountsResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
  aminoType: "cosmos-sdk/QueryModuleAccountsResponse",
  is(o: any): o is QueryModuleAccountsResponse {
    return (
      o &&
      (o.$typeUrl === QueryModuleAccountsResponse.typeUrl ||
        (Array.isArray(o.accounts) &&
          (!o.accounts.length || ModuleAccount.is(o.accounts[0]) || Any.is(o.accounts[0]))))
    );
  },
  isAmino(o: any): o is QueryModuleAccountsResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryModuleAccountsResponse.typeUrl ||
        (Array.isArray(o.accounts) &&
          (!o.accounts.length || ModuleAccount.isAmino(o.accounts[0]) || Any.isAmino(o.accounts[0]))))
    );
  },
  encode(message: QueryModuleAccountsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.accounts) {
      Any.encode(GlobalDecoderRegistry.wrapAny(v!), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accounts.push(GlobalDecoderRegistry.unwrapAny(reader));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModuleAccountsResponse {
    const obj = createBaseQueryModuleAccountsResponse();
    if (Array.isArray(object?.accounts))
      obj.accounts = object.accounts.map((e: any) => GlobalDecoderRegistry.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryModuleAccountsResponse): unknown {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => (e ? GlobalDecoderRegistry.toJSON(e) : undefined));
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryModuleAccountsResponse>): QueryModuleAccountsResponse {
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = object.accounts?.map((e) => GlobalDecoderRegistry.fromPartial(e) as any) || [];
    return message;
  },
  fromAmino(object: QueryModuleAccountsResponseAmino): QueryModuleAccountsResponse {
    const message = createBaseQueryModuleAccountsResponse();
    message.accounts = object.accounts?.map((e) => GlobalDecoderRegistry.fromAminoMsg(e)) || [];
    return message;
  },
  toAmino(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAmino {
    const obj: any = {};
    if (message.accounts) {
      obj.accounts = message.accounts.map((e) => (e ? GlobalDecoderRegistry.toAminoMsg(e) : undefined));
    } else {
      obj.accounts = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountsResponseAminoMsg): QueryModuleAccountsResponse {
    return QueryModuleAccountsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryModuleAccountsResponse",
      value: QueryModuleAccountsResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryModuleAccountsResponseProtoMsg): QueryModuleAccountsResponse {
    return QueryModuleAccountsResponse.decode(message.value);
  },
  toProto(message: QueryModuleAccountsResponse): Uint8Array {
    return QueryModuleAccountsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountsResponse): QueryModuleAccountsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountsResponse",
      value: QueryModuleAccountsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryModuleAccountsResponse.typeUrl, QueryModuleAccountsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryModuleAccountsResponse.aminoType,
  QueryModuleAccountsResponse.typeUrl,
);
function createBaseQueryModuleAccountByNameRequest(): QueryModuleAccountByNameRequest {
  return {
    name: "",
  };
}
export const QueryModuleAccountByNameRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest",
  aminoType: "cosmos-sdk/QueryModuleAccountByNameRequest",
  is(o: any): o is QueryModuleAccountByNameRequest {
    return o && (o.$typeUrl === QueryModuleAccountByNameRequest.typeUrl || typeof o.name === "string");
  },
  isAmino(o: any): o is QueryModuleAccountByNameRequestAmino {
    return o && (o.$typeUrl === QueryModuleAccountByNameRequest.typeUrl || typeof o.name === "string");
  },
  encode(
    message: QueryModuleAccountByNameRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountByNameRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModuleAccountByNameRequest {
    const obj = createBaseQueryModuleAccountByNameRequest();
    if (isSet(object.name)) obj.name = String(object.name);
    return obj;
  },
  toJSON(message: QueryModuleAccountByNameRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },
  fromPartial(object: Partial<QueryModuleAccountByNameRequest>): QueryModuleAccountByNameRequest {
    const message = createBaseQueryModuleAccountByNameRequest();
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: QueryModuleAccountByNameRequestAmino): QueryModuleAccountByNameRequest {
    const message = createBaseQueryModuleAccountByNameRequest();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: QueryModuleAccountByNameRequest): QueryModuleAccountByNameRequestAmino {
    const obj: any = {};
    obj.name = message.name;
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountByNameRequestAminoMsg): QueryModuleAccountByNameRequest {
    return QueryModuleAccountByNameRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryModuleAccountByNameRequest): QueryModuleAccountByNameRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryModuleAccountByNameRequest",
      value: QueryModuleAccountByNameRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryModuleAccountByNameRequestProtoMsg): QueryModuleAccountByNameRequest {
    return QueryModuleAccountByNameRequest.decode(message.value);
  },
  toProto(message: QueryModuleAccountByNameRequest): Uint8Array {
    return QueryModuleAccountByNameRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountByNameRequest): QueryModuleAccountByNameRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameRequest",
      value: QueryModuleAccountByNameRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryModuleAccountByNameRequest.typeUrl, QueryModuleAccountByNameRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryModuleAccountByNameRequest.aminoType,
  QueryModuleAccountByNameRequest.typeUrl,
);
function createBaseQueryModuleAccountByNameResponse(): QueryModuleAccountByNameResponse {
  return {
    account: undefined,
  };
}
export const QueryModuleAccountByNameResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse",
  aminoType: "cosmos-sdk/QueryModuleAccountByNameResponse",
  is(o: any): o is QueryModuleAccountByNameResponse {
    return o && o.$typeUrl === QueryModuleAccountByNameResponse.typeUrl;
  },
  isAmino(o: any): o is QueryModuleAccountByNameResponseAmino {
    return o && o.$typeUrl === QueryModuleAccountByNameResponse.typeUrl;
  },
  encode(
    message: QueryModuleAccountByNameResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.account !== undefined) {
      Any.encode(GlobalDecoderRegistry.wrapAny(message.account), writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryModuleAccountByNameResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleAccountByNameResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = GlobalDecoderRegistry.unwrapAny(reader);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryModuleAccountByNameResponse {
    const obj = createBaseQueryModuleAccountByNameResponse();
    if (isSet(object.account)) obj.account = GlobalDecoderRegistry.fromJSON(object.account);
    return obj;
  },
  toJSON(message: QueryModuleAccountByNameResponse): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account ? GlobalDecoderRegistry.toJSON(message.account) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryModuleAccountByNameResponse>): QueryModuleAccountByNameResponse {
    const message = createBaseQueryModuleAccountByNameResponse();
    if (object.account !== undefined && object.account !== null) {
      message.account = GlobalDecoderRegistry.fromPartial(object.account);
    }
    return message;
  },
  fromAmino(object: QueryModuleAccountByNameResponseAmino): QueryModuleAccountByNameResponse {
    const message = createBaseQueryModuleAccountByNameResponse();
    if (object.account !== undefined && object.account !== null) {
      message.account = GlobalDecoderRegistry.fromAminoMsg(object.account);
    }
    return message;
  },
  toAmino(message: QueryModuleAccountByNameResponse): QueryModuleAccountByNameResponseAmino {
    const obj: any = {};
    obj.account = message.account ? GlobalDecoderRegistry.toAminoMsg(message.account) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryModuleAccountByNameResponseAminoMsg): QueryModuleAccountByNameResponse {
    return QueryModuleAccountByNameResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryModuleAccountByNameResponse): QueryModuleAccountByNameResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryModuleAccountByNameResponse",
      value: QueryModuleAccountByNameResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryModuleAccountByNameResponseProtoMsg): QueryModuleAccountByNameResponse {
    return QueryModuleAccountByNameResponse.decode(message.value);
  },
  toProto(message: QueryModuleAccountByNameResponse): Uint8Array {
    return QueryModuleAccountByNameResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryModuleAccountByNameResponse): QueryModuleAccountByNameResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryModuleAccountByNameResponse",
      value: QueryModuleAccountByNameResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryModuleAccountByNameResponse.typeUrl, QueryModuleAccountByNameResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryModuleAccountByNameResponse.aminoType,
  QueryModuleAccountByNameResponse.typeUrl,
);
function createBaseBech32PrefixRequest(): Bech32PrefixRequest {
  return {};
}
export const Bech32PrefixRequest = {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
  aminoType: "cosmos-sdk/Bech32PrefixRequest",
  is(o: any): o is Bech32PrefixRequest {
    return o && o.$typeUrl === Bech32PrefixRequest.typeUrl;
  },
  isAmino(o: any): o is Bech32PrefixRequestAmino {
    return o && o.$typeUrl === Bech32PrefixRequest.typeUrl;
  },
  encode(_: Bech32PrefixRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bech32PrefixRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixRequest();
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
  fromJSON(_: any): Bech32PrefixRequest {
    const obj = createBaseBech32PrefixRequest();
    return obj;
  },
  toJSON(_: Bech32PrefixRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<Bech32PrefixRequest>): Bech32PrefixRequest {
    const message = createBaseBech32PrefixRequest();
    return message;
  },
  fromAmino(_: Bech32PrefixRequestAmino): Bech32PrefixRequest {
    const message = createBaseBech32PrefixRequest();
    return message;
  },
  toAmino(_: Bech32PrefixRequest): Bech32PrefixRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: Bech32PrefixRequestAminoMsg): Bech32PrefixRequest {
    return Bech32PrefixRequest.fromAmino(object.value);
  },
  toAminoMsg(message: Bech32PrefixRequest): Bech32PrefixRequestAminoMsg {
    return {
      type: "cosmos-sdk/Bech32PrefixRequest",
      value: Bech32PrefixRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: Bech32PrefixRequestProtoMsg): Bech32PrefixRequest {
    return Bech32PrefixRequest.decode(message.value);
  },
  toProto(message: Bech32PrefixRequest): Uint8Array {
    return Bech32PrefixRequest.encode(message).finish();
  },
  toProtoMsg(message: Bech32PrefixRequest): Bech32PrefixRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixRequest",
      value: Bech32PrefixRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(Bech32PrefixRequest.typeUrl, Bech32PrefixRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(Bech32PrefixRequest.aminoType, Bech32PrefixRequest.typeUrl);
function createBaseBech32PrefixResponse(): Bech32PrefixResponse {
  return {
    bech32Prefix: "",
  };
}
export const Bech32PrefixResponse = {
  typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
  aminoType: "cosmos-sdk/Bech32PrefixResponse",
  is(o: any): o is Bech32PrefixResponse {
    return o && (o.$typeUrl === Bech32PrefixResponse.typeUrl || typeof o.bech32Prefix === "string");
  },
  isAmino(o: any): o is Bech32PrefixResponseAmino {
    return o && (o.$typeUrl === Bech32PrefixResponse.typeUrl || typeof o.bech32_prefix === "string");
  },
  encode(message: Bech32PrefixResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bech32Prefix !== "") {
      writer.uint32(10).string(message.bech32Prefix);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bech32PrefixResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBech32PrefixResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bech32Prefix = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Bech32PrefixResponse {
    const obj = createBaseBech32PrefixResponse();
    if (isSet(object.bech32Prefix)) obj.bech32Prefix = String(object.bech32Prefix);
    return obj;
  },
  toJSON(message: Bech32PrefixResponse): unknown {
    const obj: any = {};
    message.bech32Prefix !== undefined && (obj.bech32Prefix = message.bech32Prefix);
    return obj;
  },
  fromPartial(object: Partial<Bech32PrefixResponse>): Bech32PrefixResponse {
    const message = createBaseBech32PrefixResponse();
    message.bech32Prefix = object.bech32Prefix ?? "";
    return message;
  },
  fromAmino(object: Bech32PrefixResponseAmino): Bech32PrefixResponse {
    const message = createBaseBech32PrefixResponse();
    if (object.bech32_prefix !== undefined && object.bech32_prefix !== null) {
      message.bech32Prefix = object.bech32_prefix;
    }
    return message;
  },
  toAmino(message: Bech32PrefixResponse): Bech32PrefixResponseAmino {
    const obj: any = {};
    obj.bech32_prefix = message.bech32Prefix;
    return obj;
  },
  fromAminoMsg(object: Bech32PrefixResponseAminoMsg): Bech32PrefixResponse {
    return Bech32PrefixResponse.fromAmino(object.value);
  },
  toAminoMsg(message: Bech32PrefixResponse): Bech32PrefixResponseAminoMsg {
    return {
      type: "cosmos-sdk/Bech32PrefixResponse",
      value: Bech32PrefixResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: Bech32PrefixResponseProtoMsg): Bech32PrefixResponse {
    return Bech32PrefixResponse.decode(message.value);
  },
  toProto(message: Bech32PrefixResponse): Uint8Array {
    return Bech32PrefixResponse.encode(message).finish();
  },
  toProtoMsg(message: Bech32PrefixResponse): Bech32PrefixResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.Bech32PrefixResponse",
      value: Bech32PrefixResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(Bech32PrefixResponse.typeUrl, Bech32PrefixResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(Bech32PrefixResponse.aminoType, Bech32PrefixResponse.typeUrl);
function createBaseAddressBytesToStringRequest(): AddressBytesToStringRequest {
  return {
    addressBytes: new Uint8Array(),
  };
}
export const AddressBytesToStringRequest = {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
  aminoType: "cosmos-sdk/AddressBytesToStringRequest",
  is(o: any): o is AddressBytesToStringRequest {
    return (
      o &&
      (o.$typeUrl === AddressBytesToStringRequest.typeUrl ||
        o.addressBytes instanceof Uint8Array ||
        typeof o.addressBytes === "string")
    );
  },
  isAmino(o: any): o is AddressBytesToStringRequestAmino {
    return (
      o &&
      (o.$typeUrl === AddressBytesToStringRequest.typeUrl ||
        o.address_bytes instanceof Uint8Array ||
        typeof o.address_bytes === "string")
    );
  },
  encode(message: AddressBytesToStringRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressBytesToStringRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AddressBytesToStringRequest {
    const obj = createBaseAddressBytesToStringRequest();
    if (isSet(object.addressBytes)) obj.addressBytes = bytesFromBase64(object.addressBytes);
    return obj;
  },
  toJSON(message: AddressBytesToStringRequest): unknown {
    const obj: any = {};
    message.addressBytes !== undefined &&
      (obj.addressBytes = base64FromBytes(
        message.addressBytes !== undefined ? message.addressBytes : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial(object: Partial<AddressBytesToStringRequest>): AddressBytesToStringRequest {
    const message = createBaseAddressBytesToStringRequest();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AddressBytesToStringRequestAmino): AddressBytesToStringRequest {
    const message = createBaseAddressBytesToStringRequest();
    if (object.address_bytes !== undefined && object.address_bytes !== null) {
      message.addressBytes = bytesFromBase64(object.address_bytes);
    }
    return message;
  },
  toAmino(message: AddressBytesToStringRequest): AddressBytesToStringRequestAmino {
    const obj: any = {};
    obj.address_bytes = message.addressBytes ? base64FromBytes(message.addressBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: AddressBytesToStringRequestAminoMsg): AddressBytesToStringRequest {
    return AddressBytesToStringRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AddressBytesToStringRequest): AddressBytesToStringRequestAminoMsg {
    return {
      type: "cosmos-sdk/AddressBytesToStringRequest",
      value: AddressBytesToStringRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: AddressBytesToStringRequestProtoMsg): AddressBytesToStringRequest {
    return AddressBytesToStringRequest.decode(message.value);
  },
  toProto(message: AddressBytesToStringRequest): Uint8Array {
    return AddressBytesToStringRequest.encode(message).finish();
  },
  toProtoMsg(message: AddressBytesToStringRequest): AddressBytesToStringRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringRequest",
      value: AddressBytesToStringRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(AddressBytesToStringRequest.typeUrl, AddressBytesToStringRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(
  AddressBytesToStringRequest.aminoType,
  AddressBytesToStringRequest.typeUrl,
);
function createBaseAddressBytesToStringResponse(): AddressBytesToStringResponse {
  return {
    addressString: "",
  };
}
export const AddressBytesToStringResponse = {
  typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
  aminoType: "cosmos-sdk/AddressBytesToStringResponse",
  is(o: any): o is AddressBytesToStringResponse {
    return o && (o.$typeUrl === AddressBytesToStringResponse.typeUrl || typeof o.addressString === "string");
  },
  isAmino(o: any): o is AddressBytesToStringResponseAmino {
    return o && (o.$typeUrl === AddressBytesToStringResponse.typeUrl || typeof o.address_string === "string");
  },
  encode(message: AddressBytesToStringResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressBytesToStringResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressBytesToStringResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AddressBytesToStringResponse {
    const obj = createBaseAddressBytesToStringResponse();
    if (isSet(object.addressString)) obj.addressString = String(object.addressString);
    return obj;
  },
  toJSON(message: AddressBytesToStringResponse): unknown {
    const obj: any = {};
    message.addressString !== undefined && (obj.addressString = message.addressString);
    return obj;
  },
  fromPartial(object: Partial<AddressBytesToStringResponse>): AddressBytesToStringResponse {
    const message = createBaseAddressBytesToStringResponse();
    message.addressString = object.addressString ?? "";
    return message;
  },
  fromAmino(object: AddressBytesToStringResponseAmino): AddressBytesToStringResponse {
    const message = createBaseAddressBytesToStringResponse();
    if (object.address_string !== undefined && object.address_string !== null) {
      message.addressString = object.address_string;
    }
    return message;
  },
  toAmino(message: AddressBytesToStringResponse): AddressBytesToStringResponseAmino {
    const obj: any = {};
    obj.address_string = message.addressString;
    return obj;
  },
  fromAminoMsg(object: AddressBytesToStringResponseAminoMsg): AddressBytesToStringResponse {
    return AddressBytesToStringResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AddressBytesToStringResponse): AddressBytesToStringResponseAminoMsg {
    return {
      type: "cosmos-sdk/AddressBytesToStringResponse",
      value: AddressBytesToStringResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: AddressBytesToStringResponseProtoMsg): AddressBytesToStringResponse {
    return AddressBytesToStringResponse.decode(message.value);
  },
  toProto(message: AddressBytesToStringResponse): Uint8Array {
    return AddressBytesToStringResponse.encode(message).finish();
  },
  toProtoMsg(message: AddressBytesToStringResponse): AddressBytesToStringResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressBytesToStringResponse",
      value: AddressBytesToStringResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(AddressBytesToStringResponse.typeUrl, AddressBytesToStringResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  AddressBytesToStringResponse.aminoType,
  AddressBytesToStringResponse.typeUrl,
);
function createBaseAddressStringToBytesRequest(): AddressStringToBytesRequest {
  return {
    addressString: "",
  };
}
export const AddressStringToBytesRequest = {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
  aminoType: "cosmos-sdk/AddressStringToBytesRequest",
  is(o: any): o is AddressStringToBytesRequest {
    return o && (o.$typeUrl === AddressStringToBytesRequest.typeUrl || typeof o.addressString === "string");
  },
  isAmino(o: any): o is AddressStringToBytesRequestAmino {
    return o && (o.$typeUrl === AddressStringToBytesRequest.typeUrl || typeof o.address_string === "string");
  },
  encode(message: AddressStringToBytesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addressString !== "") {
      writer.uint32(10).string(message.addressString);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressStringToBytesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressString = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AddressStringToBytesRequest {
    const obj = createBaseAddressStringToBytesRequest();
    if (isSet(object.addressString)) obj.addressString = String(object.addressString);
    return obj;
  },
  toJSON(message: AddressStringToBytesRequest): unknown {
    const obj: any = {};
    message.addressString !== undefined && (obj.addressString = message.addressString);
    return obj;
  },
  fromPartial(object: Partial<AddressStringToBytesRequest>): AddressStringToBytesRequest {
    const message = createBaseAddressStringToBytesRequest();
    message.addressString = object.addressString ?? "";
    return message;
  },
  fromAmino(object: AddressStringToBytesRequestAmino): AddressStringToBytesRequest {
    const message = createBaseAddressStringToBytesRequest();
    if (object.address_string !== undefined && object.address_string !== null) {
      message.addressString = object.address_string;
    }
    return message;
  },
  toAmino(message: AddressStringToBytesRequest): AddressStringToBytesRequestAmino {
    const obj: any = {};
    obj.address_string = message.addressString;
    return obj;
  },
  fromAminoMsg(object: AddressStringToBytesRequestAminoMsg): AddressStringToBytesRequest {
    return AddressStringToBytesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: AddressStringToBytesRequest): AddressStringToBytesRequestAminoMsg {
    return {
      type: "cosmos-sdk/AddressStringToBytesRequest",
      value: AddressStringToBytesRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: AddressStringToBytesRequestProtoMsg): AddressStringToBytesRequest {
    return AddressStringToBytesRequest.decode(message.value);
  },
  toProto(message: AddressStringToBytesRequest): Uint8Array {
    return AddressStringToBytesRequest.encode(message).finish();
  },
  toProtoMsg(message: AddressStringToBytesRequest): AddressStringToBytesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesRequest",
      value: AddressStringToBytesRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(AddressStringToBytesRequest.typeUrl, AddressStringToBytesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(
  AddressStringToBytesRequest.aminoType,
  AddressStringToBytesRequest.typeUrl,
);
function createBaseAddressStringToBytesResponse(): AddressStringToBytesResponse {
  return {
    addressBytes: new Uint8Array(),
  };
}
export const AddressStringToBytesResponse = {
  typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
  aminoType: "cosmos-sdk/AddressStringToBytesResponse",
  is(o: any): o is AddressStringToBytesResponse {
    return (
      o &&
      (o.$typeUrl === AddressStringToBytesResponse.typeUrl ||
        o.addressBytes instanceof Uint8Array ||
        typeof o.addressBytes === "string")
    );
  },
  isAmino(o: any): o is AddressStringToBytesResponseAmino {
    return (
      o &&
      (o.$typeUrl === AddressStringToBytesResponse.typeUrl ||
        o.address_bytes instanceof Uint8Array ||
        typeof o.address_bytes === "string")
    );
  },
  encode(message: AddressStringToBytesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.addressBytes.length !== 0) {
      writer.uint32(10).bytes(message.addressBytes);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): AddressStringToBytesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAddressStringToBytesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.addressBytes = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): AddressStringToBytesResponse {
    const obj = createBaseAddressStringToBytesResponse();
    if (isSet(object.addressBytes)) obj.addressBytes = bytesFromBase64(object.addressBytes);
    return obj;
  },
  toJSON(message: AddressStringToBytesResponse): unknown {
    const obj: any = {};
    message.addressBytes !== undefined &&
      (obj.addressBytes = base64FromBytes(
        message.addressBytes !== undefined ? message.addressBytes : new Uint8Array(),
      ));
    return obj;
  },
  fromPartial(object: Partial<AddressStringToBytesResponse>): AddressStringToBytesResponse {
    const message = createBaseAddressStringToBytesResponse();
    message.addressBytes = object.addressBytes ?? new Uint8Array();
    return message;
  },
  fromAmino(object: AddressStringToBytesResponseAmino): AddressStringToBytesResponse {
    const message = createBaseAddressStringToBytesResponse();
    if (object.address_bytes !== undefined && object.address_bytes !== null) {
      message.addressBytes = bytesFromBase64(object.address_bytes);
    }
    return message;
  },
  toAmino(message: AddressStringToBytesResponse): AddressStringToBytesResponseAmino {
    const obj: any = {};
    obj.address_bytes = message.addressBytes ? base64FromBytes(message.addressBytes) : undefined;
    return obj;
  },
  fromAminoMsg(object: AddressStringToBytesResponseAminoMsg): AddressStringToBytesResponse {
    return AddressStringToBytesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: AddressStringToBytesResponse): AddressStringToBytesResponseAminoMsg {
    return {
      type: "cosmos-sdk/AddressStringToBytesResponse",
      value: AddressStringToBytesResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: AddressStringToBytesResponseProtoMsg): AddressStringToBytesResponse {
    return AddressStringToBytesResponse.decode(message.value);
  },
  toProto(message: AddressStringToBytesResponse): Uint8Array {
    return AddressStringToBytesResponse.encode(message).finish();
  },
  toProtoMsg(message: AddressStringToBytesResponse): AddressStringToBytesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.AddressStringToBytesResponse",
      value: AddressStringToBytesResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(AddressStringToBytesResponse.typeUrl, AddressStringToBytesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  AddressStringToBytesResponse.aminoType,
  AddressStringToBytesResponse.typeUrl,
);
function createBaseQueryAccountAddressByIDRequest(): QueryAccountAddressByIDRequest {
  return {
    id: BigInt(0),
    accountId: BigInt(0),
  };
}
export const QueryAccountAddressByIDRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest",
  aminoType: "cosmos-sdk/QueryAccountAddressByIDRequest",
  is(o: any): o is QueryAccountAddressByIDRequest {
    return (
      o &&
      (o.$typeUrl === QueryAccountAddressByIDRequest.typeUrl ||
        (typeof o.id === "bigint" && typeof o.accountId === "bigint"))
    );
  },
  isAmino(o: any): o is QueryAccountAddressByIDRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryAccountAddressByIDRequest.typeUrl ||
        (typeof o.id === "bigint" && typeof o.account_id === "bigint"))
    );
  },
  encode(
    message: QueryAccountAddressByIDRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).int64(message.id);
    }
    if (message.accountId !== BigInt(0)) {
      writer.uint32(16).uint64(message.accountId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressByIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.int64();
          break;
        case 2:
          message.accountId = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountAddressByIDRequest {
    const obj = createBaseQueryAccountAddressByIDRequest();
    if (isSet(object.id)) obj.id = BigInt(object.id.toString());
    if (isSet(object.accountId)) obj.accountId = BigInt(object.accountId.toString());
    return obj;
  },
  toJSON(message: QueryAccountAddressByIDRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || BigInt(0)).toString());
    message.accountId !== undefined && (obj.accountId = (message.accountId || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<QueryAccountAddressByIDRequest>): QueryAccountAddressByIDRequest {
    const message = createBaseQueryAccountAddressByIDRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id.toString());
    }
    if (object.accountId !== undefined && object.accountId !== null) {
      message.accountId = BigInt(object.accountId.toString());
    }
    return message;
  },
  fromAmino(object: QueryAccountAddressByIDRequestAmino): QueryAccountAddressByIDRequest {
    const message = createBaseQueryAccountAddressByIDRequest();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.account_id !== undefined && object.account_id !== null) {
      message.accountId = BigInt(object.account_id);
    }
    return message;
  },
  toAmino(message: QueryAccountAddressByIDRequest): QueryAccountAddressByIDRequestAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.account_id = message.accountId ? message.accountId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountAddressByIDRequestAminoMsg): QueryAccountAddressByIDRequest {
    return QueryAccountAddressByIDRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountAddressByIDRequest): QueryAccountAddressByIDRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountAddressByIDRequest",
      value: QueryAccountAddressByIDRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAccountAddressByIDRequestProtoMsg): QueryAccountAddressByIDRequest {
    return QueryAccountAddressByIDRequest.decode(message.value);
  },
  toProto(message: QueryAccountAddressByIDRequest): Uint8Array {
    return QueryAccountAddressByIDRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAddressByIDRequest): QueryAccountAddressByIDRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDRequest",
      value: QueryAccountAddressByIDRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryAccountAddressByIDRequest.typeUrl, QueryAccountAddressByIDRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryAccountAddressByIDRequest.aminoType,
  QueryAccountAddressByIDRequest.typeUrl,
);
function createBaseQueryAccountAddressByIDResponse(): QueryAccountAddressByIDResponse {
  return {
    accountAddress: "",
  };
}
export const QueryAccountAddressByIDResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse",
  aminoType: "cosmos-sdk/QueryAccountAddressByIDResponse",
  is(o: any): o is QueryAccountAddressByIDResponse {
    return (
      o && (o.$typeUrl === QueryAccountAddressByIDResponse.typeUrl || typeof o.accountAddress === "string")
    );
  },
  isAmino(o: any): o is QueryAccountAddressByIDResponseAmino {
    return (
      o && (o.$typeUrl === QueryAccountAddressByIDResponse.typeUrl || typeof o.account_address === "string")
    );
  },
  encode(
    message: QueryAccountAddressByIDResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.accountAddress !== "") {
      writer.uint32(10).string(message.accountAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountAddressByIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAddressByIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountAddressByIDResponse {
    const obj = createBaseQueryAccountAddressByIDResponse();
    if (isSet(object.accountAddress)) obj.accountAddress = String(object.accountAddress);
    return obj;
  },
  toJSON(message: QueryAccountAddressByIDResponse): unknown {
    const obj: any = {};
    message.accountAddress !== undefined && (obj.accountAddress = message.accountAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryAccountAddressByIDResponse>): QueryAccountAddressByIDResponse {
    const message = createBaseQueryAccountAddressByIDResponse();
    message.accountAddress = object.accountAddress ?? "";
    return message;
  },
  fromAmino(object: QueryAccountAddressByIDResponseAmino): QueryAccountAddressByIDResponse {
    const message = createBaseQueryAccountAddressByIDResponse();
    if (object.account_address !== undefined && object.account_address !== null) {
      message.accountAddress = object.account_address;
    }
    return message;
  },
  toAmino(message: QueryAccountAddressByIDResponse): QueryAccountAddressByIDResponseAmino {
    const obj: any = {};
    obj.account_address = message.accountAddress;
    return obj;
  },
  fromAminoMsg(object: QueryAccountAddressByIDResponseAminoMsg): QueryAccountAddressByIDResponse {
    return QueryAccountAddressByIDResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountAddressByIDResponse): QueryAccountAddressByIDResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountAddressByIDResponse",
      value: QueryAccountAddressByIDResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAccountAddressByIDResponseProtoMsg): QueryAccountAddressByIDResponse {
    return QueryAccountAddressByIDResponse.decode(message.value);
  },
  toProto(message: QueryAccountAddressByIDResponse): Uint8Array {
    return QueryAccountAddressByIDResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountAddressByIDResponse): QueryAccountAddressByIDResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountAddressByIDResponse",
      value: QueryAccountAddressByIDResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryAccountAddressByIDResponse.typeUrl, QueryAccountAddressByIDResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryAccountAddressByIDResponse.aminoType,
  QueryAccountAddressByIDResponse.typeUrl,
);
function createBaseQueryAccountInfoRequest(): QueryAccountInfoRequest {
  return {
    address: "",
  };
}
export const QueryAccountInfoRequest = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoRequest",
  aminoType: "cosmos-sdk/QueryAccountInfoRequest",
  is(o: any): o is QueryAccountInfoRequest {
    return o && (o.$typeUrl === QueryAccountInfoRequest.typeUrl || typeof o.address === "string");
  },
  isAmino(o: any): o is QueryAccountInfoRequestAmino {
    return o && (o.$typeUrl === QueryAccountInfoRequest.typeUrl || typeof o.address === "string");
  },
  encode(message: QueryAccountInfoRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountInfoRequest {
    const obj = createBaseQueryAccountInfoRequest();
    if (isSet(object.address)) obj.address = String(object.address);
    return obj;
  },
  toJSON(message: QueryAccountInfoRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: Partial<QueryAccountInfoRequest>): QueryAccountInfoRequest {
    const message = createBaseQueryAccountInfoRequest();
    message.address = object.address ?? "";
    return message;
  },
  fromAmino(object: QueryAccountInfoRequestAmino): QueryAccountInfoRequest {
    const message = createBaseQueryAccountInfoRequest();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: QueryAccountInfoRequest): QueryAccountInfoRequestAmino {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAminoMsg(object: QueryAccountInfoRequestAminoMsg): QueryAccountInfoRequest {
    return QueryAccountInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountInfoRequest): QueryAccountInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountInfoRequest",
      value: QueryAccountInfoRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAccountInfoRequestProtoMsg): QueryAccountInfoRequest {
    return QueryAccountInfoRequest.decode(message.value);
  },
  toProto(message: QueryAccountInfoRequest): Uint8Array {
    return QueryAccountInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountInfoRequest): QueryAccountInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoRequest",
      value: QueryAccountInfoRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryAccountInfoRequest.typeUrl, QueryAccountInfoRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryAccountInfoRequest.aminoType,
  QueryAccountInfoRequest.typeUrl,
);
function createBaseQueryAccountInfoResponse(): QueryAccountInfoResponse {
  return {
    info: undefined,
  };
}
export const QueryAccountInfoResponse = {
  typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoResponse",
  aminoType: "cosmos-sdk/QueryAccountInfoResponse",
  is(o: any): o is QueryAccountInfoResponse {
    return o && o.$typeUrl === QueryAccountInfoResponse.typeUrl;
  },
  isAmino(o: any): o is QueryAccountInfoResponseAmino {
    return o && o.$typeUrl === QueryAccountInfoResponse.typeUrl;
  },
  encode(message: QueryAccountInfoResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.info !== undefined) {
      BaseAccount.encode(message.info, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryAccountInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.info = BaseAccount.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryAccountInfoResponse {
    const obj = createBaseQueryAccountInfoResponse();
    if (isSet(object.info)) obj.info = BaseAccount.fromJSON(object.info);
    return obj;
  },
  toJSON(message: QueryAccountInfoResponse): unknown {
    const obj: any = {};
    message.info !== undefined && (obj.info = message.info ? BaseAccount.toJSON(message.info) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAccountInfoResponse>): QueryAccountInfoResponse {
    const message = createBaseQueryAccountInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = BaseAccount.fromPartial(object.info);
    }
    return message;
  },
  fromAmino(object: QueryAccountInfoResponseAmino): QueryAccountInfoResponse {
    const message = createBaseQueryAccountInfoResponse();
    if (object.info !== undefined && object.info !== null) {
      message.info = BaseAccount.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: QueryAccountInfoResponse): QueryAccountInfoResponseAmino {
    const obj: any = {};
    obj.info = message.info ? BaseAccount.toAmino(message.info) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAccountInfoResponseAminoMsg): QueryAccountInfoResponse {
    return QueryAccountInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryAccountInfoResponse): QueryAccountInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryAccountInfoResponse",
      value: QueryAccountInfoResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryAccountInfoResponseProtoMsg): QueryAccountInfoResponse {
    return QueryAccountInfoResponse.decode(message.value);
  },
  toProto(message: QueryAccountInfoResponse): Uint8Array {
    return QueryAccountInfoResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAccountInfoResponse): QueryAccountInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.auth.v1beta1.QueryAccountInfoResponse",
      value: QueryAccountInfoResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryAccountInfoResponse.typeUrl, QueryAccountInfoResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryAccountInfoResponse.aminoType,
  QueryAccountInfoResponse.typeUrl,
);
/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Accounts returns all the existing accounts.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * Since: cosmos-sdk 0.43
   */
  Accounts(request?: QueryAccountsRequest): Promise<QueryAccountsResponse>;
  /** Account returns account details based on address. */
  Account(request: QueryAccountRequest): Promise<QueryAccountResponse>;
  /**
   * AccountAddressByID returns account address based on account number.
   *
   * Since: cosmos-sdk 0.46.2
   */
  AccountAddressByID(request: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse>;
  /** Params queries all parameters. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /**
   * ModuleAccounts returns all the existing module accounts.
   *
   * Since: cosmos-sdk 0.46
   */
  ModuleAccounts(request?: QueryModuleAccountsRequest): Promise<QueryModuleAccountsResponse>;
  /** ModuleAccountByName returns the module account info by module name */
  ModuleAccountByName(request: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse>;
  /**
   * Bech32Prefix queries bech32Prefix
   *
   * Since: cosmos-sdk 0.46
   */
  Bech32Prefix(request?: Bech32PrefixRequest): Promise<Bech32PrefixResponse>;
  /**
   * AddressBytesToString converts Account Address bytes to string
   *
   * Since: cosmos-sdk 0.46
   */
  AddressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse>;
  /**
   * AddressStringToBytes converts Address string to bytes
   *
   * Since: cosmos-sdk 0.46
   */
  AddressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse>;
  /**
   * AccountInfo queries account info which is common to all account types.
   *
   * Since: cosmos-sdk 0.47
   */
  AccountInfo(request: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.Accounts = this.Accounts.bind(this);
    this.Account = this.Account.bind(this);
    this.AccountAddressByID = this.AccountAddressByID.bind(this);
    this.Params = this.Params.bind(this);
    this.ModuleAccounts = this.ModuleAccounts.bind(this);
    this.ModuleAccountByName = this.ModuleAccountByName.bind(this);
    this.Bech32Prefix = this.Bech32Prefix.bind(this);
    this.AddressBytesToString = this.AddressBytesToString.bind(this);
    this.AddressStringToBytes = this.AddressStringToBytes.bind(this);
    this.AccountInfo = this.AccountInfo.bind(this);
  }
  Accounts(
    request: QueryAccountsRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryAccountsResponse> {
    const data = QueryAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Accounts", data);
    return promise.then((data) => QueryAccountsResponse.decode(new BinaryReader(data)));
  }
  Account(request: QueryAccountRequest): Promise<QueryAccountResponse> {
    const data = QueryAccountRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Account", data);
    return promise.then((data) => QueryAccountResponse.decode(new BinaryReader(data)));
  }
  AccountAddressByID(request: QueryAccountAddressByIDRequest): Promise<QueryAccountAddressByIDResponse> {
    const data = QueryAccountAddressByIDRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountAddressByID", data);
    return promise.then((data) => QueryAccountAddressByIDResponse.decode(new BinaryReader(data)));
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  ModuleAccounts(request: QueryModuleAccountsRequest = {}): Promise<QueryModuleAccountsResponse> {
    const data = QueryModuleAccountsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccounts", data);
    return promise.then((data) => QueryModuleAccountsResponse.decode(new BinaryReader(data)));
  }
  ModuleAccountByName(request: QueryModuleAccountByNameRequest): Promise<QueryModuleAccountByNameResponse> {
    const data = QueryModuleAccountByNameRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "ModuleAccountByName", data);
    return promise.then((data) => QueryModuleAccountByNameResponse.decode(new BinaryReader(data)));
  }
  Bech32Prefix(request: Bech32PrefixRequest = {}): Promise<Bech32PrefixResponse> {
    const data = Bech32PrefixRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "Bech32Prefix", data);
    return promise.then((data) => Bech32PrefixResponse.decode(new BinaryReader(data)));
  }
  AddressBytesToString(request: AddressBytesToStringRequest): Promise<AddressBytesToStringResponse> {
    const data = AddressBytesToStringRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressBytesToString", data);
    return promise.then((data) => AddressBytesToStringResponse.decode(new BinaryReader(data)));
  }
  AddressStringToBytes(request: AddressStringToBytesRequest): Promise<AddressStringToBytesResponse> {
    const data = AddressStringToBytesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AddressStringToBytes", data);
    return promise.then((data) => AddressStringToBytesResponse.decode(new BinaryReader(data)));
  }
  AccountInfo(request: QueryAccountInfoRequest): Promise<QueryAccountInfoResponse> {
    const data = QueryAccountInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.auth.v1beta1.Query", "AccountInfo", data);
    return promise.then((data) => QueryAccountInfoResponse.decode(new BinaryReader(data)));
  }
}