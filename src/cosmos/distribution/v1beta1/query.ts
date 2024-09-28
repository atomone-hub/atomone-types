/* eslint-disable */
import {
  PageRequest,
  PageRequestAmino,
  PageResponse,
  PageResponseAmino,
} from "../../base/query/v1beta1/pagination";
import {
  Params,
  ParamsAmino,
  ValidatorOutstandingRewards,
  ValidatorOutstandingRewardsAmino,
  ValidatorAccumulatedCommission,
  ValidatorAccumulatedCommissionAmino,
  ValidatorSlashEvent,
  ValidatorSlashEventAmino,
  DelegationDelegatorReward,
  DelegationDelegatorRewardAmino,
} from "./distribution";
import { DecCoin, DecCoinAmino } from "../../base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { TxRpc } from "../../../types";
export const protobufPackage = "cosmos.distribution.v1beta1";
/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}
export interface QueryParamsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest";
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
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse";
  value: Uint8Array;
}
/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponseAmino {
  /** params defines the parameters of the module. */
  params: ParamsAmino | undefined;
}
export interface QueryParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryParamsResponse";
  value: QueryParamsResponseAmino;
}
/** QueryValidatorDistributionInfoRequest is the request type for the Query/ValidatorDistributionInfo RPC method. */
export interface QueryValidatorDistributionInfoRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
export interface QueryValidatorDistributionInfoRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest";
  value: Uint8Array;
}
/** QueryValidatorDistributionInfoRequest is the request type for the Query/ValidatorDistributionInfo RPC method. */
export interface QueryValidatorDistributionInfoRequestAmino {
  /** validator_address defines the validator address to query for. */
  validator_address?: string;
}
export interface QueryValidatorDistributionInfoRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorDistributionInfoRequest";
  value: QueryValidatorDistributionInfoRequestAmino;
}
/** QueryValidatorDistributionInfoResponse is the response type for the Query/ValidatorDistributionInfo RPC method. */
export interface QueryValidatorDistributionInfoResponse {
  /** operator_address defines the validator operator address. */
  operatorAddress: string;
  /** self_bond_rewards defines the self delegations rewards. */
  selfBondRewards: DecCoin[];
  /** commission defines the commission the validator received. */
  commission: DecCoin[];
}
export interface QueryValidatorDistributionInfoResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse";
  value: Uint8Array;
}
/** QueryValidatorDistributionInfoResponse is the response type for the Query/ValidatorDistributionInfo RPC method. */
export interface QueryValidatorDistributionInfoResponseAmino {
  /** operator_address defines the validator operator address. */
  operator_address?: string;
  /** self_bond_rewards defines the self delegations rewards. */
  self_bond_rewards: DecCoinAmino[];
  /** commission defines the commission the validator received. */
  commission?: DecCoinAmino[];
}
export interface QueryValidatorDistributionInfoResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorDistributionInfoResponse";
  value: QueryValidatorDistributionInfoResponseAmino;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
export interface QueryValidatorOutstandingRewardsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorOutstandingRewardsRequest is the request type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsRequestAmino {
  /** validator_address defines the validator address to query for. */
  validator_address?: string;
}
export interface QueryValidatorOutstandingRewardsRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest";
  value: QueryValidatorOutstandingRewardsRequestAmino;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponse {
  rewards: ValidatorOutstandingRewards | undefined;
}
export interface QueryValidatorOutstandingRewardsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorOutstandingRewardsResponse is the response type for the
 * Query/ValidatorOutstandingRewards RPC method.
 */
export interface QueryValidatorOutstandingRewardsResponseAmino {
  rewards: ValidatorOutstandingRewardsAmino | undefined;
}
export interface QueryValidatorOutstandingRewardsResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse";
  value: QueryValidatorOutstandingRewardsResponseAmino;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
export interface QueryValidatorCommissionRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorCommissionRequest is the request type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionRequestAmino {
  /** validator_address defines the validator address to query for. */
  validator_address?: string;
}
export interface QueryValidatorCommissionRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorCommissionRequest";
  value: QueryValidatorCommissionRequestAmino;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponse {
  /** commission defines the commission the validator received. */
  commission: ValidatorAccumulatedCommission | undefined;
}
export interface QueryValidatorCommissionResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorCommissionResponse is the response type for the
 * Query/ValidatorCommission RPC method
 */
export interface QueryValidatorCommissionResponseAmino {
  /** commission defines the commission the validator received. */
  commission: ValidatorAccumulatedCommissionAmino | undefined;
}
export interface QueryValidatorCommissionResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorCommissionResponse";
  value: QueryValidatorCommissionResponseAmino;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequest {
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
  /** starting_height defines the optional starting height to query the slashes. */
  startingHeight: bigint;
  /** starting_height defines the optional ending height to query the slashes. */
  endingHeight: bigint;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest | undefined;
}
export interface QueryValidatorSlashesRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest";
  value: Uint8Array;
}
/**
 * QueryValidatorSlashesRequest is the request type for the
 * Query/ValidatorSlashes RPC method
 */
export interface QueryValidatorSlashesRequestAmino {
  /** validator_address defines the validator address to query for. */
  validator_address?: string;
  /** starting_height defines the optional starting height to query the slashes. */
  starting_height?: string;
  /** starting_height defines the optional ending height to query the slashes. */
  ending_height?: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryValidatorSlashesRequestAminoMsg {
  type: "cosmos-sdk/QueryValidatorSlashesRequest";
  value: QueryValidatorSlashesRequestAmino;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponse {
  /** slashes defines the slashes the validator received. */
  slashes: ValidatorSlashEvent[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse | undefined;
}
export interface QueryValidatorSlashesResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse";
  value: Uint8Array;
}
/**
 * QueryValidatorSlashesResponse is the response type for the
 * Query/ValidatorSlashes RPC method.
 */
export interface QueryValidatorSlashesResponseAmino {
  /** slashes defines the slashes the validator received. */
  slashes: ValidatorSlashEventAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryValidatorSlashesResponseAminoMsg {
  type: "cosmos-sdk/QueryValidatorSlashesResponse";
  value: QueryValidatorSlashesResponseAmino;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
  /** validator_address defines the validator address to query for. */
  validatorAddress: string;
}
export interface QueryDelegationRewardsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegationRewardsRequest is the request type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsRequestAmino {
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
  /** validator_address defines the validator address to query for. */
  validator_address?: string;
}
export interface QueryDelegationRewardsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegationRewardsRequest";
  value: QueryDelegationRewardsRequestAmino;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponse {
  /** rewards defines the rewards accrued by a delegation. */
  rewards: DecCoin[];
}
export interface QueryDelegationRewardsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegationRewardsResponse is the response type for the
 * Query/DelegationRewards RPC method.
 */
export interface QueryDelegationRewardsResponseAmino {
  /** rewards defines the rewards accrued by a delegation. */
  rewards: DecCoinAmino[];
}
export interface QueryDelegationRewardsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegationRewardsResponse";
  value: QueryDelegationRewardsResponseAmino;
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
export interface QueryDelegationTotalRewardsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegationTotalRewardsRequest is the request type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsRequestAmino {
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
}
export interface QueryDelegationTotalRewardsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegationTotalRewardsRequest";
  value: QueryDelegationTotalRewardsRequestAmino;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponse {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: DelegationDelegatorReward[];
  /** total defines the sum of all the rewards. */
  total: DecCoin[];
}
export interface QueryDelegationTotalRewardsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegationTotalRewardsResponse is the response type for the
 * Query/DelegationTotalRewards RPC method.
 */
export interface QueryDelegationTotalRewardsResponseAmino {
  /** rewards defines all the rewards accrued by a delegator. */
  rewards: DelegationDelegatorRewardAmino[];
  /** total defines the sum of all the rewards. */
  total: DecCoinAmino[];
}
export interface QueryDelegationTotalRewardsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegationTotalRewardsResponse";
  value: QueryDelegationTotalRewardsResponseAmino;
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
export interface QueryDelegatorValidatorsRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsRequest is the request type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsRequestAmino {
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
}
export interface QueryDelegatorValidatorsRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorsRequest";
  value: QueryDelegatorValidatorsRequestAmino;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponse {
  /** validators defines the validators a delegator is delegating for. */
  validators: string[];
}
export interface QueryDelegatorValidatorsResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorValidatorsResponse is the response type for the
 * Query/DelegatorValidators RPC method.
 */
export interface QueryDelegatorValidatorsResponseAmino {
  /** validators defines the validators a delegator is delegating for. */
  validators?: string[];
}
export interface QueryDelegatorValidatorsResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorValidatorsResponse";
  value: QueryDelegatorValidatorsResponseAmino;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequest {
  /** delegator_address defines the delegator address to query for. */
  delegatorAddress: string;
}
export interface QueryDelegatorWithdrawAddressRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest";
  value: Uint8Array;
}
/**
 * QueryDelegatorWithdrawAddressRequest is the request type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressRequestAmino {
  /** delegator_address defines the delegator address to query for. */
  delegator_address?: string;
}
export interface QueryDelegatorWithdrawAddressRequestAminoMsg {
  type: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest";
  value: QueryDelegatorWithdrawAddressRequestAmino;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponse {
  /** withdraw_address defines the delegator address to query for. */
  withdrawAddress: string;
}
export interface QueryDelegatorWithdrawAddressResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse";
  value: Uint8Array;
}
/**
 * QueryDelegatorWithdrawAddressResponse is the response type for the
 * Query/DelegatorWithdrawAddress RPC method.
 */
export interface QueryDelegatorWithdrawAddressResponseAmino {
  /** withdraw_address defines the delegator address to query for. */
  withdraw_address?: string;
}
export interface QueryDelegatorWithdrawAddressResponseAminoMsg {
  type: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse";
  value: QueryDelegatorWithdrawAddressResponseAmino;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequest {}
export interface QueryCommunityPoolRequestProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest";
  value: Uint8Array;
}
/**
 * QueryCommunityPoolRequest is the request type for the Query/CommunityPool RPC
 * method.
 */
export interface QueryCommunityPoolRequestAmino {}
export interface QueryCommunityPoolRequestAminoMsg {
  type: "cosmos-sdk/QueryCommunityPoolRequest";
  value: QueryCommunityPoolRequestAmino;
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponse {
  /** pool defines community pool's coins. */
  pool: DecCoin[];
}
export interface QueryCommunityPoolResponseProtoMsg {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse";
  value: Uint8Array;
}
/**
 * QueryCommunityPoolResponse is the response type for the Query/CommunityPool
 * RPC method.
 */
export interface QueryCommunityPoolResponseAmino {
  /** pool defines community pool's coins. */
  pool: DecCoinAmino[];
}
export interface QueryCommunityPoolResponseAminoMsg {
  type: "cosmos-sdk/QueryCommunityPoolResponse";
  value: QueryCommunityPoolResponseAmino;
}
function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}
export const QueryParamsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
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
      typeUrl: "/cosmos.distribution.v1beta1.QueryParamsRequest",
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
  typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
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
    obj.params = message.params ? Params.toAmino(message.params) : Params.fromPartial({});
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
      typeUrl: "/cosmos.distribution.v1beta1.QueryParamsResponse",
      value: QueryParamsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryParamsResponse.typeUrl, QueryParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryParamsResponse.aminoType, QueryParamsResponse.typeUrl);
function createBaseQueryValidatorDistributionInfoRequest(): QueryValidatorDistributionInfoRequest {
  return {
    validatorAddress: "",
  };
}
export const QueryValidatorDistributionInfoRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest",
  aminoType: "cosmos-sdk/QueryValidatorDistributionInfoRequest",
  is(o: any): o is QueryValidatorDistributionInfoRequest {
    return (
      o &&
      (o.$typeUrl === QueryValidatorDistributionInfoRequest.typeUrl || typeof o.validatorAddress === "string")
    );
  },
  isAmino(o: any): o is QueryValidatorDistributionInfoRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryValidatorDistributionInfoRequest.typeUrl ||
        typeof o.validator_address === "string")
    );
  },
  encode(
    message: QueryValidatorDistributionInfoRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDistributionInfoRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorDistributionInfoRequest {
    const obj = createBaseQueryValidatorDistributionInfoRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: QueryValidatorDistributionInfoRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorDistributionInfoRequest>): QueryValidatorDistributionInfoRequest {
    const message = createBaseQueryValidatorDistributionInfoRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryValidatorDistributionInfoRequestAmino): QueryValidatorDistributionInfoRequest {
    const message = createBaseQueryValidatorDistributionInfoRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryValidatorDistributionInfoRequest): QueryValidatorDistributionInfoRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorDistributionInfoRequestAminoMsg): QueryValidatorDistributionInfoRequest {
    return QueryValidatorDistributionInfoRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorDistributionInfoRequest): QueryValidatorDistributionInfoRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorDistributionInfoRequest",
      value: QueryValidatorDistributionInfoRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryValidatorDistributionInfoRequestProtoMsg,
  ): QueryValidatorDistributionInfoRequest {
    return QueryValidatorDistributionInfoRequest.decode(message.value);
  },
  toProto(message: QueryValidatorDistributionInfoRequest): Uint8Array {
    return QueryValidatorDistributionInfoRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorDistributionInfoRequest): QueryValidatorDistributionInfoRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoRequest",
      value: QueryValidatorDistributionInfoRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryValidatorDistributionInfoRequest.typeUrl,
  QueryValidatorDistributionInfoRequest,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryValidatorDistributionInfoRequest.aminoType,
  QueryValidatorDistributionInfoRequest.typeUrl,
);
function createBaseQueryValidatorDistributionInfoResponse(): QueryValidatorDistributionInfoResponse {
  return {
    operatorAddress: "",
    selfBondRewards: [],
    commission: [],
  };
}
export const QueryValidatorDistributionInfoResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse",
  aminoType: "cosmos-sdk/QueryValidatorDistributionInfoResponse",
  is(o: any): o is QueryValidatorDistributionInfoResponse {
    return (
      o &&
      (o.$typeUrl === QueryValidatorDistributionInfoResponse.typeUrl ||
        (typeof o.operatorAddress === "string" &&
          Array.isArray(o.selfBondRewards) &&
          (!o.selfBondRewards.length || DecCoin.is(o.selfBondRewards[0])) &&
          Array.isArray(o.commission) &&
          (!o.commission.length || DecCoin.is(o.commission[0]))))
    );
  },
  isAmino(o: any): o is QueryValidatorDistributionInfoResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryValidatorDistributionInfoResponse.typeUrl ||
        (typeof o.operator_address === "string" &&
          Array.isArray(o.self_bond_rewards) &&
          (!o.self_bond_rewards.length || DecCoin.isAmino(o.self_bond_rewards[0])) &&
          Array.isArray(o.commission) &&
          (!o.commission.length || DecCoin.isAmino(o.commission[0]))))
    );
  },
  encode(
    message: QueryValidatorDistributionInfoResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    for (const v of message.selfBondRewards) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.commission) {
      DecCoin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorDistributionInfoResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorDistributionInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.selfBondRewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.commission.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorDistributionInfoResponse {
    const obj = createBaseQueryValidatorDistributionInfoResponse();
    if (isSet(object.operatorAddress)) obj.operatorAddress = String(object.operatorAddress);
    if (Array.isArray(object?.selfBondRewards))
      obj.selfBondRewards = object.selfBondRewards.map((e: any) => DecCoin.fromJSON(e));
    if (Array.isArray(object?.commission))
      obj.commission = object.commission.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryValidatorDistributionInfoResponse): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined && (obj.operatorAddress = message.operatorAddress);
    if (message.selfBondRewards) {
      obj.selfBondRewards = message.selfBondRewards.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.selfBondRewards = [];
    }
    if (message.commission) {
      obj.commission = message.commission.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.commission = [];
    }
    return obj;
  },
  fromPartial(
    object: Partial<QueryValidatorDistributionInfoResponse>,
  ): QueryValidatorDistributionInfoResponse {
    const message = createBaseQueryValidatorDistributionInfoResponse();
    message.operatorAddress = object.operatorAddress ?? "";
    message.selfBondRewards = object.selfBondRewards?.map((e) => DecCoin.fromPartial(e)) || [];
    message.commission = object.commission?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryValidatorDistributionInfoResponseAmino): QueryValidatorDistributionInfoResponse {
    const message = createBaseQueryValidatorDistributionInfoResponse();
    if (object.operator_address !== undefined && object.operator_address !== null) {
      message.operatorAddress = object.operator_address;
    }
    message.selfBondRewards = object.self_bond_rewards?.map((e) => DecCoin.fromAmino(e)) || [];
    message.commission = object.commission?.map((e) => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryValidatorDistributionInfoResponse): QueryValidatorDistributionInfoResponseAmino {
    const obj: any = {};
    obj.operator_address = message.operatorAddress;
    if (message.selfBondRewards) {
      obj.self_bond_rewards = message.selfBondRewards.map((e) => (e ? DecCoin.toAmino(e) : undefined));
    } else {
      obj.self_bond_rewards = [];
    }
    if (message.commission) {
      obj.commission = message.commission.map((e) => (e ? DecCoin.toAmino(e) : undefined));
    } else {
      obj.commission = [];
    }
    return obj;
  },
  fromAminoMsg(
    object: QueryValidatorDistributionInfoResponseAminoMsg,
  ): QueryValidatorDistributionInfoResponse {
    return QueryValidatorDistributionInfoResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryValidatorDistributionInfoResponse,
  ): QueryValidatorDistributionInfoResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorDistributionInfoResponse",
      value: QueryValidatorDistributionInfoResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryValidatorDistributionInfoResponseProtoMsg,
  ): QueryValidatorDistributionInfoResponse {
    return QueryValidatorDistributionInfoResponse.decode(message.value);
  },
  toProto(message: QueryValidatorDistributionInfoResponse): Uint8Array {
    return QueryValidatorDistributionInfoResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryValidatorDistributionInfoResponse,
  ): QueryValidatorDistributionInfoResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorDistributionInfoResponse",
      value: QueryValidatorDistributionInfoResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryValidatorDistributionInfoResponse.typeUrl,
  QueryValidatorDistributionInfoResponse,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryValidatorDistributionInfoResponse.aminoType,
  QueryValidatorDistributionInfoResponse.typeUrl,
);
function createBaseQueryValidatorOutstandingRewardsRequest(): QueryValidatorOutstandingRewardsRequest {
  return {
    validatorAddress: "",
  };
}
export const QueryValidatorOutstandingRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
  aminoType: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest",
  is(o: any): o is QueryValidatorOutstandingRewardsRequest {
    return (
      o &&
      (o.$typeUrl === QueryValidatorOutstandingRewardsRequest.typeUrl ||
        typeof o.validatorAddress === "string")
    );
  },
  isAmino(o: any): o is QueryValidatorOutstandingRewardsRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryValidatorOutstandingRewardsRequest.typeUrl ||
        typeof o.validator_address === "string")
    );
  },
  encode(
    message: QueryValidatorOutstandingRewardsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorOutstandingRewardsRequest {
    const obj = createBaseQueryValidatorOutstandingRewardsRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: QueryValidatorOutstandingRewardsRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(
    object: Partial<QueryValidatorOutstandingRewardsRequest>,
  ): QueryValidatorOutstandingRewardsRequest {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryValidatorOutstandingRewardsRequestAmino): QueryValidatorOutstandingRewardsRequest {
    const message = createBaseQueryValidatorOutstandingRewardsRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryValidatorOutstandingRewardsRequest): QueryValidatorOutstandingRewardsRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(
    object: QueryValidatorOutstandingRewardsRequestAminoMsg,
  ): QueryValidatorOutstandingRewardsRequest {
    return QueryValidatorOutstandingRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryValidatorOutstandingRewardsRequest,
  ): QueryValidatorOutstandingRewardsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorOutstandingRewardsRequest",
      value: QueryValidatorOutstandingRewardsRequest.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryValidatorOutstandingRewardsRequestProtoMsg,
  ): QueryValidatorOutstandingRewardsRequest {
    return QueryValidatorOutstandingRewardsRequest.decode(message.value);
  },
  toProto(message: QueryValidatorOutstandingRewardsRequest): Uint8Array {
    return QueryValidatorOutstandingRewardsRequest.encode(message).finish();
  },
  toProtoMsg(
    message: QueryValidatorOutstandingRewardsRequest,
  ): QueryValidatorOutstandingRewardsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsRequest",
      value: QueryValidatorOutstandingRewardsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryValidatorOutstandingRewardsRequest.typeUrl,
  QueryValidatorOutstandingRewardsRequest,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryValidatorOutstandingRewardsRequest.aminoType,
  QueryValidatorOutstandingRewardsRequest.typeUrl,
);
function createBaseQueryValidatorOutstandingRewardsResponse(): QueryValidatorOutstandingRewardsResponse {
  return {
    rewards: ValidatorOutstandingRewards.fromPartial({}),
  };
}
export const QueryValidatorOutstandingRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
  aminoType: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse",
  is(o: any): o is QueryValidatorOutstandingRewardsResponse {
    return (
      o &&
      (o.$typeUrl === QueryValidatorOutstandingRewardsResponse.typeUrl ||
        ValidatorOutstandingRewards.is(o.rewards))
    );
  },
  isAmino(o: any): o is QueryValidatorOutstandingRewardsResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryValidatorOutstandingRewardsResponse.typeUrl ||
        ValidatorOutstandingRewards.isAmino(o.rewards))
    );
  },
  encode(
    message: QueryValidatorOutstandingRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.rewards !== undefined) {
      ValidatorOutstandingRewards.encode(message.rewards, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorOutstandingRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards = ValidatorOutstandingRewards.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorOutstandingRewardsResponse {
    const obj = createBaseQueryValidatorOutstandingRewardsResponse();
    if (isSet(object.rewards)) obj.rewards = ValidatorOutstandingRewards.fromJSON(object.rewards);
    return obj;
  },
  toJSON(message: QueryValidatorOutstandingRewardsResponse): unknown {
    const obj: any = {};
    message.rewards !== undefined &&
      (obj.rewards = message.rewards ? ValidatorOutstandingRewards.toJSON(message.rewards) : undefined);
    return obj;
  },
  fromPartial(
    object: Partial<QueryValidatorOutstandingRewardsResponse>,
  ): QueryValidatorOutstandingRewardsResponse {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorOutstandingRewards.fromPartial(object.rewards);
    }
    return message;
  },
  fromAmino(object: QueryValidatorOutstandingRewardsResponseAmino): QueryValidatorOutstandingRewardsResponse {
    const message = createBaseQueryValidatorOutstandingRewardsResponse();
    if (object.rewards !== undefined && object.rewards !== null) {
      message.rewards = ValidatorOutstandingRewards.fromAmino(object.rewards);
    }
    return message;
  },
  toAmino(message: QueryValidatorOutstandingRewardsResponse): QueryValidatorOutstandingRewardsResponseAmino {
    const obj: any = {};
    obj.rewards = message.rewards
      ? ValidatorOutstandingRewards.toAmino(message.rewards)
      : ValidatorOutstandingRewards.fromPartial({});
    return obj;
  },
  fromAminoMsg(
    object: QueryValidatorOutstandingRewardsResponseAminoMsg,
  ): QueryValidatorOutstandingRewardsResponse {
    return QueryValidatorOutstandingRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(
    message: QueryValidatorOutstandingRewardsResponse,
  ): QueryValidatorOutstandingRewardsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorOutstandingRewardsResponse",
      value: QueryValidatorOutstandingRewardsResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryValidatorOutstandingRewardsResponseProtoMsg,
  ): QueryValidatorOutstandingRewardsResponse {
    return QueryValidatorOutstandingRewardsResponse.decode(message.value);
  },
  toProto(message: QueryValidatorOutstandingRewardsResponse): Uint8Array {
    return QueryValidatorOutstandingRewardsResponse.encode(message).finish();
  },
  toProtoMsg(
    message: QueryValidatorOutstandingRewardsResponse,
  ): QueryValidatorOutstandingRewardsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorOutstandingRewardsResponse",
      value: QueryValidatorOutstandingRewardsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryValidatorOutstandingRewardsResponse.typeUrl,
  QueryValidatorOutstandingRewardsResponse,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryValidatorOutstandingRewardsResponse.aminoType,
  QueryValidatorOutstandingRewardsResponse.typeUrl,
);
function createBaseQueryValidatorCommissionRequest(): QueryValidatorCommissionRequest {
  return {
    validatorAddress: "",
  };
}
export const QueryValidatorCommissionRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
  aminoType: "cosmos-sdk/QueryValidatorCommissionRequest",
  is(o: any): o is QueryValidatorCommissionRequest {
    return (
      o && (o.$typeUrl === QueryValidatorCommissionRequest.typeUrl || typeof o.validatorAddress === "string")
    );
  },
  isAmino(o: any): o is QueryValidatorCommissionRequestAmino {
    return (
      o && (o.$typeUrl === QueryValidatorCommissionRequest.typeUrl || typeof o.validator_address === "string")
    );
  },
  encode(
    message: QueryValidatorCommissionRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorCommissionRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorCommissionRequest {
    const obj = createBaseQueryValidatorCommissionRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: QueryValidatorCommissionRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorCommissionRequest>): QueryValidatorCommissionRequest {
    const message = createBaseQueryValidatorCommissionRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryValidatorCommissionRequestAmino): QueryValidatorCommissionRequest {
    const message = createBaseQueryValidatorCommissionRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryValidatorCommissionRequest): QueryValidatorCommissionRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorCommissionRequestAminoMsg): QueryValidatorCommissionRequest {
    return QueryValidatorCommissionRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorCommissionRequest): QueryValidatorCommissionRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorCommissionRequest",
      value: QueryValidatorCommissionRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryValidatorCommissionRequestProtoMsg): QueryValidatorCommissionRequest {
    return QueryValidatorCommissionRequest.decode(message.value);
  },
  toProto(message: QueryValidatorCommissionRequest): Uint8Array {
    return QueryValidatorCommissionRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorCommissionRequest): QueryValidatorCommissionRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionRequest",
      value: QueryValidatorCommissionRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryValidatorCommissionRequest.typeUrl, QueryValidatorCommissionRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryValidatorCommissionRequest.aminoType,
  QueryValidatorCommissionRequest.typeUrl,
);
function createBaseQueryValidatorCommissionResponse(): QueryValidatorCommissionResponse {
  return {
    commission: ValidatorAccumulatedCommission.fromPartial({}),
  };
}
export const QueryValidatorCommissionResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
  aminoType: "cosmos-sdk/QueryValidatorCommissionResponse",
  is(o: any): o is QueryValidatorCommissionResponse {
    return (
      o &&
      (o.$typeUrl === QueryValidatorCommissionResponse.typeUrl ||
        ValidatorAccumulatedCommission.is(o.commission))
    );
  },
  isAmino(o: any): o is QueryValidatorCommissionResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryValidatorCommissionResponse.typeUrl ||
        ValidatorAccumulatedCommission.isAmino(o.commission))
    );
  },
  encode(
    message: QueryValidatorCommissionResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.commission !== undefined) {
      ValidatorAccumulatedCommission.encode(message.commission, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorCommissionResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorCommissionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.commission = ValidatorAccumulatedCommission.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorCommissionResponse {
    const obj = createBaseQueryValidatorCommissionResponse();
    if (isSet(object.commission)) obj.commission = ValidatorAccumulatedCommission.fromJSON(object.commission);
    return obj;
  },
  toJSON(message: QueryValidatorCommissionResponse): unknown {
    const obj: any = {};
    message.commission !== undefined &&
      (obj.commission = message.commission
        ? ValidatorAccumulatedCommission.toJSON(message.commission)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorCommissionResponse>): QueryValidatorCommissionResponse {
    const message = createBaseQueryValidatorCommissionResponse();
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = ValidatorAccumulatedCommission.fromPartial(object.commission);
    }
    return message;
  },
  fromAmino(object: QueryValidatorCommissionResponseAmino): QueryValidatorCommissionResponse {
    const message = createBaseQueryValidatorCommissionResponse();
    if (object.commission !== undefined && object.commission !== null) {
      message.commission = ValidatorAccumulatedCommission.fromAmino(object.commission);
    }
    return message;
  },
  toAmino(message: QueryValidatorCommissionResponse): QueryValidatorCommissionResponseAmino {
    const obj: any = {};
    obj.commission = message.commission
      ? ValidatorAccumulatedCommission.toAmino(message.commission)
      : ValidatorAccumulatedCommission.fromPartial({});
    return obj;
  },
  fromAminoMsg(object: QueryValidatorCommissionResponseAminoMsg): QueryValidatorCommissionResponse {
    return QueryValidatorCommissionResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorCommissionResponse): QueryValidatorCommissionResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorCommissionResponse",
      value: QueryValidatorCommissionResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryValidatorCommissionResponseProtoMsg): QueryValidatorCommissionResponse {
    return QueryValidatorCommissionResponse.decode(message.value);
  },
  toProto(message: QueryValidatorCommissionResponse): Uint8Array {
    return QueryValidatorCommissionResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorCommissionResponse): QueryValidatorCommissionResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorCommissionResponse",
      value: QueryValidatorCommissionResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryValidatorCommissionResponse.typeUrl, QueryValidatorCommissionResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryValidatorCommissionResponse.aminoType,
  QueryValidatorCommissionResponse.typeUrl,
);
function createBaseQueryValidatorSlashesRequest(): QueryValidatorSlashesRequest {
  return {
    validatorAddress: "",
    startingHeight: BigInt(0),
    endingHeight: BigInt(0),
    pagination: undefined,
  };
}
export const QueryValidatorSlashesRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
  aminoType: "cosmos-sdk/QueryValidatorSlashesRequest",
  is(o: any): o is QueryValidatorSlashesRequest {
    return (
      o &&
      (o.$typeUrl === QueryValidatorSlashesRequest.typeUrl ||
        (typeof o.validatorAddress === "string" &&
          typeof o.startingHeight === "bigint" &&
          typeof o.endingHeight === "bigint"))
    );
  },
  isAmino(o: any): o is QueryValidatorSlashesRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryValidatorSlashesRequest.typeUrl ||
        (typeof o.validator_address === "string" &&
          typeof o.starting_height === "bigint" &&
          typeof o.ending_height === "bigint"))
    );
  },
  encode(message: QueryValidatorSlashesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.validatorAddress !== "") {
      writer.uint32(10).string(message.validatorAddress);
    }
    if (message.startingHeight !== BigInt(0)) {
      writer.uint32(16).uint64(message.startingHeight);
    }
    if (message.endingHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.endingHeight);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorSlashesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddress = reader.string();
          break;
        case 2:
          message.startingHeight = reader.uint64();
          break;
        case 3:
          message.endingHeight = reader.uint64();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryValidatorSlashesRequest {
    const obj = createBaseQueryValidatorSlashesRequest();
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.startingHeight)) obj.startingHeight = BigInt(object.startingHeight.toString());
    if (isSet(object.endingHeight)) obj.endingHeight = BigInt(object.endingHeight.toString());
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorSlashesRequest): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.startingHeight !== undefined &&
      (obj.startingHeight = (message.startingHeight || BigInt(0)).toString());
    message.endingHeight !== undefined && (obj.endingHeight = (message.endingHeight || BigInt(0)).toString());
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorSlashesRequest>): QueryValidatorSlashesRequest {
    const message = createBaseQueryValidatorSlashesRequest();
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.startingHeight !== undefined && object.startingHeight !== null) {
      message.startingHeight = BigInt(object.startingHeight.toString());
    }
    if (object.endingHeight !== undefined && object.endingHeight !== null) {
      message.endingHeight = BigInt(object.endingHeight.toString());
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryValidatorSlashesRequestAmino): QueryValidatorSlashesRequest {
    const message = createBaseQueryValidatorSlashesRequest();
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.starting_height !== undefined && object.starting_height !== null) {
      message.startingHeight = BigInt(object.starting_height);
    }
    if (object.ending_height !== undefined && object.ending_height !== null) {
      message.endingHeight = BigInt(object.ending_height);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorSlashesRequest): QueryValidatorSlashesRequestAmino {
    const obj: any = {};
    obj.validator_address = message.validatorAddress;
    obj.starting_height = message.startingHeight ? message.startingHeight.toString() : undefined;
    obj.ending_height = message.endingHeight ? message.endingHeight.toString() : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorSlashesRequestAminoMsg): QueryValidatorSlashesRequest {
    return QueryValidatorSlashesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorSlashesRequest): QueryValidatorSlashesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorSlashesRequest",
      value: QueryValidatorSlashesRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryValidatorSlashesRequestProtoMsg): QueryValidatorSlashesRequest {
    return QueryValidatorSlashesRequest.decode(message.value);
  },
  toProto(message: QueryValidatorSlashesRequest): Uint8Array {
    return QueryValidatorSlashesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorSlashesRequest): QueryValidatorSlashesRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesRequest",
      value: QueryValidatorSlashesRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryValidatorSlashesRequest.typeUrl, QueryValidatorSlashesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryValidatorSlashesRequest.aminoType,
  QueryValidatorSlashesRequest.typeUrl,
);
function createBaseQueryValidatorSlashesResponse(): QueryValidatorSlashesResponse {
  return {
    slashes: [],
    pagination: undefined,
  };
}
export const QueryValidatorSlashesResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
  aminoType: "cosmos-sdk/QueryValidatorSlashesResponse",
  is(o: any): o is QueryValidatorSlashesResponse {
    return (
      o &&
      (o.$typeUrl === QueryValidatorSlashesResponse.typeUrl ||
        (Array.isArray(o.slashes) && (!o.slashes.length || ValidatorSlashEvent.is(o.slashes[0]))))
    );
  },
  isAmino(o: any): o is QueryValidatorSlashesResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryValidatorSlashesResponse.typeUrl ||
        (Array.isArray(o.slashes) && (!o.slashes.length || ValidatorSlashEvent.isAmino(o.slashes[0]))))
    );
  },
  encode(message: QueryValidatorSlashesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.slashes) {
      ValidatorSlashEvent.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryValidatorSlashesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValidatorSlashesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.slashes.push(ValidatorSlashEvent.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryValidatorSlashesResponse {
    const obj = createBaseQueryValidatorSlashesResponse();
    if (Array.isArray(object?.slashes))
      obj.slashes = object.slashes.map((e: any) => ValidatorSlashEvent.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryValidatorSlashesResponse): unknown {
    const obj: any = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map((e) => (e ? ValidatorSlashEvent.toJSON(e) : undefined));
    } else {
      obj.slashes = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryValidatorSlashesResponse>): QueryValidatorSlashesResponse {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map((e) => ValidatorSlashEvent.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryValidatorSlashesResponseAmino): QueryValidatorSlashesResponse {
    const message = createBaseQueryValidatorSlashesResponse();
    message.slashes = object.slashes?.map((e) => ValidatorSlashEvent.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryValidatorSlashesResponse): QueryValidatorSlashesResponseAmino {
    const obj: any = {};
    if (message.slashes) {
      obj.slashes = message.slashes.map((e) => (e ? ValidatorSlashEvent.toAmino(e) : undefined));
    } else {
      obj.slashes = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryValidatorSlashesResponseAminoMsg): QueryValidatorSlashesResponse {
    return QueryValidatorSlashesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryValidatorSlashesResponse): QueryValidatorSlashesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryValidatorSlashesResponse",
      value: QueryValidatorSlashesResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryValidatorSlashesResponseProtoMsg): QueryValidatorSlashesResponse {
    return QueryValidatorSlashesResponse.decode(message.value);
  },
  toProto(message: QueryValidatorSlashesResponse): Uint8Array {
    return QueryValidatorSlashesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryValidatorSlashesResponse): QueryValidatorSlashesResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryValidatorSlashesResponse",
      value: QueryValidatorSlashesResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryValidatorSlashesResponse.typeUrl, QueryValidatorSlashesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryValidatorSlashesResponse.aminoType,
  QueryValidatorSlashesResponse.typeUrl,
);
function createBaseQueryDelegationRewardsRequest(): QueryDelegationRewardsRequest {
  return {
    delegatorAddress: "",
    validatorAddress: "",
  };
}
export const QueryDelegationRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
  aminoType: "cosmos-sdk/QueryDelegationRewardsRequest",
  is(o: any): o is QueryDelegationRewardsRequest {
    return (
      o &&
      (o.$typeUrl === QueryDelegationRewardsRequest.typeUrl ||
        (typeof o.delegatorAddress === "string" && typeof o.validatorAddress === "string"))
    );
  },
  isAmino(o: any): o is QueryDelegationRewardsRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryDelegationRewardsRequest.typeUrl ||
        (typeof o.delegator_address === "string" && typeof o.validator_address === "string"))
    );
  },
  encode(message: QueryDelegationRewardsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationRewardsRequest {
    const obj = createBaseQueryDelegationRewardsRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    return obj;
  },
  toJSON(message: QueryDelegationRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegationRewardsRequest>): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    message.validatorAddress = object.validatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegationRewardsRequestAmino): QueryDelegationRewardsRequest {
    const message = createBaseQueryDelegationRewardsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    obj.validator_address = message.validatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationRewardsRequestAminoMsg): QueryDelegationRewardsRequest {
    return QueryDelegationRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationRewardsRequest",
      value: QueryDelegationRewardsRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryDelegationRewardsRequestProtoMsg): QueryDelegationRewardsRequest {
    return QueryDelegationRewardsRequest.decode(message.value);
  },
  toProto(message: QueryDelegationRewardsRequest): Uint8Array {
    return QueryDelegationRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationRewardsRequest): QueryDelegationRewardsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsRequest",
      value: QueryDelegationRewardsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryDelegationRewardsRequest.typeUrl, QueryDelegationRewardsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryDelegationRewardsRequest.aminoType,
  QueryDelegationRewardsRequest.typeUrl,
);
function createBaseQueryDelegationRewardsResponse(): QueryDelegationRewardsResponse {
  return {
    rewards: [],
  };
}
export const QueryDelegationRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
  aminoType: "cosmos-sdk/QueryDelegationRewardsResponse",
  is(o: any): o is QueryDelegationRewardsResponse {
    return (
      o &&
      (o.$typeUrl === QueryDelegationRewardsResponse.typeUrl ||
        (Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.is(o.rewards[0]))))
    );
  },
  isAmino(o: any): o is QueryDelegationRewardsResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryDelegationRewardsResponse.typeUrl ||
        (Array.isArray(o.rewards) && (!o.rewards.length || DecCoin.isAmino(o.rewards[0]))))
    );
  },
  encode(
    message: QueryDelegationRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.rewards) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationRewardsResponse {
    const obj = createBaseQueryDelegationRewardsResponse();
    if (Array.isArray(object?.rewards)) obj.rewards = object.rewards.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryDelegationRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryDelegationRewardsResponse>): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegationRewardsResponseAmino): QueryDelegationRewardsResponse {
    const message = createBaseQueryDelegationRewardsResponse();
    message.rewards = object.rewards?.map((e) => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? DecCoin.toAmino(e) : undefined));
    } else {
      obj.rewards = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegationRewardsResponseAminoMsg): QueryDelegationRewardsResponse {
    return QueryDelegationRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationRewardsResponse",
      value: QueryDelegationRewardsResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryDelegationRewardsResponseProtoMsg): QueryDelegationRewardsResponse {
    return QueryDelegationRewardsResponse.decode(message.value);
  },
  toProto(message: QueryDelegationRewardsResponse): Uint8Array {
    return QueryDelegationRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationRewardsResponse): QueryDelegationRewardsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationRewardsResponse",
      value: QueryDelegationRewardsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryDelegationRewardsResponse.typeUrl, QueryDelegationRewardsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryDelegationRewardsResponse.aminoType,
  QueryDelegationRewardsResponse.typeUrl,
);
function createBaseQueryDelegationTotalRewardsRequest(): QueryDelegationTotalRewardsRequest {
  return {
    delegatorAddress: "",
  };
}
export const QueryDelegationTotalRewardsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
  aminoType: "cosmos-sdk/QueryDelegationTotalRewardsRequest",
  is(o: any): o is QueryDelegationTotalRewardsRequest {
    return (
      o &&
      (o.$typeUrl === QueryDelegationTotalRewardsRequest.typeUrl || typeof o.delegatorAddress === "string")
    );
  },
  isAmino(o: any): o is QueryDelegationTotalRewardsRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryDelegationTotalRewardsRequest.typeUrl || typeof o.delegator_address === "string")
    );
  },
  encode(
    message: QueryDelegationTotalRewardsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationTotalRewardsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationTotalRewardsRequest {
    const obj = createBaseQueryDelegationTotalRewardsRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryDelegationTotalRewardsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegationTotalRewardsRequest>): QueryDelegationTotalRewardsRequest {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegationTotalRewardsRequestAmino): QueryDelegationTotalRewardsRequest {
    const message = createBaseQueryDelegationTotalRewardsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegationTotalRewardsRequestAminoMsg): QueryDelegationTotalRewardsRequest {
    return QueryDelegationTotalRewardsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationTotalRewardsRequest",
      value: QueryDelegationTotalRewardsRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryDelegationTotalRewardsRequestProtoMsg): QueryDelegationTotalRewardsRequest {
    return QueryDelegationTotalRewardsRequest.decode(message.value);
  },
  toProto(message: QueryDelegationTotalRewardsRequest): Uint8Array {
    return QueryDelegationTotalRewardsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationTotalRewardsRequest): QueryDelegationTotalRewardsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsRequest",
      value: QueryDelegationTotalRewardsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryDelegationTotalRewardsRequest.typeUrl,
  QueryDelegationTotalRewardsRequest,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryDelegationTotalRewardsRequest.aminoType,
  QueryDelegationTotalRewardsRequest.typeUrl,
);
function createBaseQueryDelegationTotalRewardsResponse(): QueryDelegationTotalRewardsResponse {
  return {
    rewards: [],
    total: [],
  };
}
export const QueryDelegationTotalRewardsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
  aminoType: "cosmos-sdk/QueryDelegationTotalRewardsResponse",
  is(o: any): o is QueryDelegationTotalRewardsResponse {
    return (
      o &&
      (o.$typeUrl === QueryDelegationTotalRewardsResponse.typeUrl ||
        (Array.isArray(o.rewards) &&
          (!o.rewards.length || DelegationDelegatorReward.is(o.rewards[0])) &&
          Array.isArray(o.total) &&
          (!o.total.length || DecCoin.is(o.total[0]))))
    );
  },
  isAmino(o: any): o is QueryDelegationTotalRewardsResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryDelegationTotalRewardsResponse.typeUrl ||
        (Array.isArray(o.rewards) &&
          (!o.rewards.length || DelegationDelegatorReward.isAmino(o.rewards[0])) &&
          Array.isArray(o.total) &&
          (!o.total.length || DecCoin.isAmino(o.total[0]))))
    );
  },
  encode(
    message: QueryDelegationTotalRewardsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.rewards) {
      DelegationDelegatorReward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.total) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegationTotalRewardsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegationTotalRewardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.rewards.push(DelegationDelegatorReward.decode(reader, reader.uint32()));
          break;
        case 2:
          message.total.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegationTotalRewardsResponse {
    const obj = createBaseQueryDelegationTotalRewardsResponse();
    if (Array.isArray(object?.rewards))
      obj.rewards = object.rewards.map((e: any) => DelegationDelegatorReward.fromJSON(e));
    if (Array.isArray(object?.total)) obj.total = object.total.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryDelegationTotalRewardsResponse): unknown {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? DelegationDelegatorReward.toJSON(e) : undefined));
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryDelegationTotalRewardsResponse>): QueryDelegationTotalRewardsResponse {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map((e) => DelegationDelegatorReward.fromPartial(e)) || [];
    message.total = object.total?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryDelegationTotalRewardsResponseAmino): QueryDelegationTotalRewardsResponse {
    const message = createBaseQueryDelegationTotalRewardsResponse();
    message.rewards = object.rewards?.map((e) => DelegationDelegatorReward.fromAmino(e)) || [];
    message.total = object.total?.map((e) => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponseAmino {
    const obj: any = {};
    if (message.rewards) {
      obj.rewards = message.rewards.map((e) => (e ? DelegationDelegatorReward.toAmino(e) : undefined));
    } else {
      obj.rewards = [];
    }
    if (message.total) {
      obj.total = message.total.map((e) => (e ? DecCoin.toAmino(e) : undefined));
    } else {
      obj.total = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegationTotalRewardsResponseAminoMsg): QueryDelegationTotalRewardsResponse {
    return QueryDelegationTotalRewardsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegationTotalRewardsResponse",
      value: QueryDelegationTotalRewardsResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryDelegationTotalRewardsResponseProtoMsg): QueryDelegationTotalRewardsResponse {
    return QueryDelegationTotalRewardsResponse.decode(message.value);
  },
  toProto(message: QueryDelegationTotalRewardsResponse): Uint8Array {
    return QueryDelegationTotalRewardsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegationTotalRewardsResponse): QueryDelegationTotalRewardsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegationTotalRewardsResponse",
      value: QueryDelegationTotalRewardsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryDelegationTotalRewardsResponse.typeUrl,
  QueryDelegationTotalRewardsResponse,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryDelegationTotalRewardsResponse.aminoType,
  QueryDelegationTotalRewardsResponse.typeUrl,
);
function createBaseQueryDelegatorValidatorsRequest(): QueryDelegatorValidatorsRequest {
  return {
    delegatorAddress: "",
  };
}
export const QueryDelegatorValidatorsRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
  aminoType: "cosmos-sdk/QueryDelegatorValidatorsRequest",
  is(o: any): o is QueryDelegatorValidatorsRequest {
    return (
      o && (o.$typeUrl === QueryDelegatorValidatorsRequest.typeUrl || typeof o.delegatorAddress === "string")
    );
  },
  isAmino(o: any): o is QueryDelegatorValidatorsRequestAmino {
    return (
      o && (o.$typeUrl === QueryDelegatorValidatorsRequest.typeUrl || typeof o.delegator_address === "string")
    );
  },
  encode(
    message: QueryDelegatorValidatorsRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorsRequest {
    const obj = createBaseQueryDelegatorValidatorsRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorsRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorsRequest>): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorValidatorsRequestAmino): QueryDelegatorValidatorsRequest {
    const message = createBaseQueryDelegatorValidatorsRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorsRequestAminoMsg): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorsRequestProtoMsg): QueryDelegatorValidatorsRequest {
    return QueryDelegatorValidatorsRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorValidatorsRequest): Uint8Array {
    return QueryDelegatorValidatorsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorsRequest): QueryDelegatorValidatorsRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsRequest",
      value: QueryDelegatorValidatorsRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryDelegatorValidatorsRequest.typeUrl, QueryDelegatorValidatorsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryDelegatorValidatorsRequest.aminoType,
  QueryDelegatorValidatorsRequest.typeUrl,
);
function createBaseQueryDelegatorValidatorsResponse(): QueryDelegatorValidatorsResponse {
  return {
    validators: [],
  };
}
export const QueryDelegatorValidatorsResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
  aminoType: "cosmos-sdk/QueryDelegatorValidatorsResponse",
  is(o: any): o is QueryDelegatorValidatorsResponse {
    return (
      o &&
      (o.$typeUrl === QueryDelegatorValidatorsResponse.typeUrl ||
        (Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string")))
    );
  },
  isAmino(o: any): o is QueryDelegatorValidatorsResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryDelegatorValidatorsResponse.typeUrl ||
        (Array.isArray(o.validators) && (!o.validators.length || typeof o.validators[0] === "string")))
    );
  },
  encode(
    message: QueryDelegatorValidatorsResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    for (const v of message.validators) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorValidatorsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorValidatorsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorValidatorsResponse {
    const obj = createBaseQueryDelegatorValidatorsResponse();
    if (Array.isArray(object?.validators)) obj.validators = object.validators.map((e: any) => String(e));
    return obj;
  },
  toJSON(message: QueryDelegatorValidatorsResponse): unknown {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryDelegatorValidatorsResponse>): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => e) || [];
    return message;
  },
  fromAmino(object: QueryDelegatorValidatorsResponseAmino): QueryDelegatorValidatorsResponse {
    const message = createBaseQueryDelegatorValidatorsResponse();
    message.validators = object.validators?.map((e) => e) || [];
    return message;
  },
  toAmino(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map((e) => e);
    } else {
      obj.validators = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorValidatorsResponseAminoMsg): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryDelegatorValidatorsResponseProtoMsg): QueryDelegatorValidatorsResponse {
    return QueryDelegatorValidatorsResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorValidatorsResponse): Uint8Array {
    return QueryDelegatorValidatorsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorValidatorsResponse): QueryDelegatorValidatorsResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorValidatorsResponse",
      value: QueryDelegatorValidatorsResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryDelegatorValidatorsResponse.typeUrl, QueryDelegatorValidatorsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryDelegatorValidatorsResponse.aminoType,
  QueryDelegatorValidatorsResponse.typeUrl,
);
function createBaseQueryDelegatorWithdrawAddressRequest(): QueryDelegatorWithdrawAddressRequest {
  return {
    delegatorAddress: "",
  };
}
export const QueryDelegatorWithdrawAddressRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
  aminoType: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest",
  is(o: any): o is QueryDelegatorWithdrawAddressRequest {
    return (
      o &&
      (o.$typeUrl === QueryDelegatorWithdrawAddressRequest.typeUrl || typeof o.delegatorAddress === "string")
    );
  },
  isAmino(o: any): o is QueryDelegatorWithdrawAddressRequestAmino {
    return (
      o &&
      (o.$typeUrl === QueryDelegatorWithdrawAddressRequest.typeUrl || typeof o.delegator_address === "string")
    );
  },
  encode(
    message: QueryDelegatorWithdrawAddressRequest,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorWithdrawAddressRequest {
    const obj = createBaseQueryDelegatorWithdrawAddressRequest();
    if (isSet(object.delegatorAddress)) obj.delegatorAddress = String(object.delegatorAddress);
    return obj;
  },
  toJSON(message: QueryDelegatorWithdrawAddressRequest): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegatorWithdrawAddressRequest>): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    message.delegatorAddress = object.delegatorAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorWithdrawAddressRequestAmino): QueryDelegatorWithdrawAddressRequest {
    const message = createBaseQueryDelegatorWithdrawAddressRequest();
    if (object.delegator_address !== undefined && object.delegator_address !== null) {
      message.delegatorAddress = object.delegator_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestAmino {
    const obj: any = {};
    obj.delegator_address = message.delegatorAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorWithdrawAddressRequestAminoMsg): QueryDelegatorWithdrawAddressRequest {
    return QueryDelegatorWithdrawAddressRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorWithdrawAddressRequest",
      value: QueryDelegatorWithdrawAddressRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryDelegatorWithdrawAddressRequestProtoMsg): QueryDelegatorWithdrawAddressRequest {
    return QueryDelegatorWithdrawAddressRequest.decode(message.value);
  },
  toProto(message: QueryDelegatorWithdrawAddressRequest): Uint8Array {
    return QueryDelegatorWithdrawAddressRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorWithdrawAddressRequest): QueryDelegatorWithdrawAddressRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressRequest",
      value: QueryDelegatorWithdrawAddressRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryDelegatorWithdrawAddressRequest.typeUrl,
  QueryDelegatorWithdrawAddressRequest,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryDelegatorWithdrawAddressRequest.aminoType,
  QueryDelegatorWithdrawAddressRequest.typeUrl,
);
function createBaseQueryDelegatorWithdrawAddressResponse(): QueryDelegatorWithdrawAddressResponse {
  return {
    withdrawAddress: "",
  };
}
export const QueryDelegatorWithdrawAddressResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
  aminoType: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse",
  is(o: any): o is QueryDelegatorWithdrawAddressResponse {
    return (
      o &&
      (o.$typeUrl === QueryDelegatorWithdrawAddressResponse.typeUrl || typeof o.withdrawAddress === "string")
    );
  },
  isAmino(o: any): o is QueryDelegatorWithdrawAddressResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryDelegatorWithdrawAddressResponse.typeUrl || typeof o.withdraw_address === "string")
    );
  },
  encode(
    message: QueryDelegatorWithdrawAddressResponse,
    writer: BinaryWriter = BinaryWriter.create(),
  ): BinaryWriter {
    if (message.withdrawAddress !== "") {
      writer.uint32(10).string(message.withdrawAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryDelegatorWithdrawAddressResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryDelegatorWithdrawAddressResponse {
    const obj = createBaseQueryDelegatorWithdrawAddressResponse();
    if (isSet(object.withdrawAddress)) obj.withdrawAddress = String(object.withdrawAddress);
    return obj;
  },
  toJSON(message: QueryDelegatorWithdrawAddressResponse): unknown {
    const obj: any = {};
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
  fromPartial(object: Partial<QueryDelegatorWithdrawAddressResponse>): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    message.withdrawAddress = object.withdrawAddress ?? "";
    return message;
  },
  fromAmino(object: QueryDelegatorWithdrawAddressResponseAmino): QueryDelegatorWithdrawAddressResponse {
    const message = createBaseQueryDelegatorWithdrawAddressResponse();
    if (object.withdraw_address !== undefined && object.withdraw_address !== null) {
      message.withdrawAddress = object.withdraw_address;
    }
    return message;
  },
  toAmino(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseAmino {
    const obj: any = {};
    obj.withdraw_address = message.withdrawAddress;
    return obj;
  },
  fromAminoMsg(object: QueryDelegatorWithdrawAddressResponseAminoMsg): QueryDelegatorWithdrawAddressResponse {
    return QueryDelegatorWithdrawAddressResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryDelegatorWithdrawAddressResponse",
      value: QueryDelegatorWithdrawAddressResponse.toAmino(message),
    };
  },
  fromProtoMsg(
    message: QueryDelegatorWithdrawAddressResponseProtoMsg,
  ): QueryDelegatorWithdrawAddressResponse {
    return QueryDelegatorWithdrawAddressResponse.decode(message.value);
  },
  toProto(message: QueryDelegatorWithdrawAddressResponse): Uint8Array {
    return QueryDelegatorWithdrawAddressResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryDelegatorWithdrawAddressResponse): QueryDelegatorWithdrawAddressResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryDelegatorWithdrawAddressResponse",
      value: QueryDelegatorWithdrawAddressResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(
  QueryDelegatorWithdrawAddressResponse.typeUrl,
  QueryDelegatorWithdrawAddressResponse,
);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryDelegatorWithdrawAddressResponse.aminoType,
  QueryDelegatorWithdrawAddressResponse.typeUrl,
);
function createBaseQueryCommunityPoolRequest(): QueryCommunityPoolRequest {
  return {};
}
export const QueryCommunityPoolRequest = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
  aminoType: "cosmos-sdk/QueryCommunityPoolRequest",
  is(o: any): o is QueryCommunityPoolRequest {
    return o && o.$typeUrl === QueryCommunityPoolRequest.typeUrl;
  },
  isAmino(o: any): o is QueryCommunityPoolRequestAmino {
    return o && o.$typeUrl === QueryCommunityPoolRequest.typeUrl;
  },
  encode(_: QueryCommunityPoolRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolRequest();
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
  fromJSON(_: any): QueryCommunityPoolRequest {
    const obj = createBaseQueryCommunityPoolRequest();
    return obj;
  },
  toJSON(_: QueryCommunityPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryCommunityPoolRequest>): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
  fromAmino(_: QueryCommunityPoolRequestAmino): QueryCommunityPoolRequest {
    const message = createBaseQueryCommunityPoolRequest();
    return message;
  },
  toAmino(_: QueryCommunityPoolRequest): QueryCommunityPoolRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryCommunityPoolRequestAminoMsg): QueryCommunityPoolRequest {
    return QueryCommunityPoolRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCommunityPoolRequest): QueryCommunityPoolRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryCommunityPoolRequest",
      value: QueryCommunityPoolRequest.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryCommunityPoolRequestProtoMsg): QueryCommunityPoolRequest {
    return QueryCommunityPoolRequest.decode(message.value);
  },
  toProto(message: QueryCommunityPoolRequest): Uint8Array {
    return QueryCommunityPoolRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCommunityPoolRequest): QueryCommunityPoolRequestProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolRequest",
      value: QueryCommunityPoolRequest.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryCommunityPoolRequest.typeUrl, QueryCommunityPoolRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryCommunityPoolRequest.aminoType,
  QueryCommunityPoolRequest.typeUrl,
);
function createBaseQueryCommunityPoolResponse(): QueryCommunityPoolResponse {
  return {
    pool: [],
  };
}
export const QueryCommunityPoolResponse = {
  typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
  aminoType: "cosmos-sdk/QueryCommunityPoolResponse",
  is(o: any): o is QueryCommunityPoolResponse {
    return (
      o &&
      (o.$typeUrl === QueryCommunityPoolResponse.typeUrl ||
        (Array.isArray(o.pool) && (!o.pool.length || DecCoin.is(o.pool[0]))))
    );
  },
  isAmino(o: any): o is QueryCommunityPoolResponseAmino {
    return (
      o &&
      (o.$typeUrl === QueryCommunityPoolResponse.typeUrl ||
        (Array.isArray(o.pool) && (!o.pool.length || DecCoin.isAmino(o.pool[0]))))
    );
  },
  encode(message: QueryCommunityPoolResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.pool) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCommunityPoolResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryCommunityPoolResponse {
    const obj = createBaseQueryCommunityPoolResponse();
    if (Array.isArray(object?.pool)) obj.pool = object.pool.map((e: any) => DecCoin.fromJSON(e));
    return obj;
  },
  toJSON(message: QueryCommunityPoolResponse): unknown {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => (e ? DecCoin.toJSON(e) : undefined));
    } else {
      obj.pool = [];
    }
    return obj;
  },
  fromPartial(object: Partial<QueryCommunityPoolResponse>): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map((e) => DecCoin.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: QueryCommunityPoolResponseAmino): QueryCommunityPoolResponse {
    const message = createBaseQueryCommunityPoolResponse();
    message.pool = object.pool?.map((e) => DecCoin.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseAmino {
    const obj: any = {};
    if (message.pool) {
      obj.pool = message.pool.map((e) => (e ? DecCoin.toAmino(e) : undefined));
    } else {
      obj.pool = [];
    }
    return obj;
  },
  fromAminoMsg(object: QueryCommunityPoolResponseAminoMsg): QueryCommunityPoolResponse {
    return QueryCommunityPoolResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryCommunityPoolResponse",
      value: QueryCommunityPoolResponse.toAmino(message),
    };
  },
  fromProtoMsg(message: QueryCommunityPoolResponseProtoMsg): QueryCommunityPoolResponse {
    return QueryCommunityPoolResponse.decode(message.value);
  },
  toProto(message: QueryCommunityPoolResponse): Uint8Array {
    return QueryCommunityPoolResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCommunityPoolResponse): QueryCommunityPoolResponseProtoMsg {
    return {
      typeUrl: "/cosmos.distribution.v1beta1.QueryCommunityPoolResponse",
      value: QueryCommunityPoolResponse.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(QueryCommunityPoolResponse.typeUrl, QueryCommunityPoolResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(
  QueryCommunityPoolResponse.aminoType,
  QueryCommunityPoolResponse.typeUrl,
);
/** Query defines the gRPC querier service for distribution module. */
export interface Query {
  /** Params queries params of the distribution module. */
  Params(request?: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** ValidatorDistributionInfo queries validator commission and self-delegation rewards for validator */
  ValidatorDistributionInfo(
    request: QueryValidatorDistributionInfoRequest,
  ): Promise<QueryValidatorDistributionInfoResponse>;
  /** ValidatorOutstandingRewards queries rewards of a validator address. */
  ValidatorOutstandingRewards(
    request: QueryValidatorOutstandingRewardsRequest,
  ): Promise<QueryValidatorOutstandingRewardsResponse>;
  /** ValidatorCommission queries accumulated commission for a validator. */
  ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse>;
  /** ValidatorSlashes queries slash events of a validator. */
  ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse>;
  /** DelegationRewards queries the total rewards accrued by a delegation. */
  DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse>;
  /**
   * DelegationTotalRewards queries the total rewards accrued by a each
   * validator.
   */
  DelegationTotalRewards(
    request: QueryDelegationTotalRewardsRequest,
  ): Promise<QueryDelegationTotalRewardsResponse>;
  /** DelegatorValidators queries the validators of a delegator. */
  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse>;
  /** DelegatorWithdrawAddress queries withdraw address of a delegator. */
  DelegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
  ): Promise<QueryDelegatorWithdrawAddressResponse>;
  /** CommunityPool queries the community pool coins. */
  CommunityPool(request?: QueryCommunityPoolRequest): Promise<QueryCommunityPoolResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.ValidatorDistributionInfo = this.ValidatorDistributionInfo.bind(this);
    this.ValidatorOutstandingRewards = this.ValidatorOutstandingRewards.bind(this);
    this.ValidatorCommission = this.ValidatorCommission.bind(this);
    this.ValidatorSlashes = this.ValidatorSlashes.bind(this);
    this.DelegationRewards = this.DelegationRewards.bind(this);
    this.DelegationTotalRewards = this.DelegationTotalRewards.bind(this);
    this.DelegatorValidators = this.DelegatorValidators.bind(this);
    this.DelegatorWithdrawAddress = this.DelegatorWithdrawAddress.bind(this);
    this.CommunityPool = this.CommunityPool.bind(this);
  }
  Params(request: QueryParamsRequest = {}): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new BinaryReader(data)));
  }
  ValidatorDistributionInfo(
    request: QueryValidatorDistributionInfoRequest,
  ): Promise<QueryValidatorDistributionInfoResponse> {
    const data = QueryValidatorDistributionInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorDistributionInfo", data);
    return promise.then((data) => QueryValidatorDistributionInfoResponse.decode(new BinaryReader(data)));
  }
  ValidatorOutstandingRewards(
    request: QueryValidatorOutstandingRewardsRequest,
  ): Promise<QueryValidatorOutstandingRewardsResponse> {
    const data = QueryValidatorOutstandingRewardsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "cosmos.distribution.v1beta1.Query",
      "ValidatorOutstandingRewards",
      data,
    );
    return promise.then((data) => QueryValidatorOutstandingRewardsResponse.decode(new BinaryReader(data)));
  }
  ValidatorCommission(request: QueryValidatorCommissionRequest): Promise<QueryValidatorCommissionResponse> {
    const data = QueryValidatorCommissionRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorCommission", data);
    return promise.then((data) => QueryValidatorCommissionResponse.decode(new BinaryReader(data)));
  }
  ValidatorSlashes(request: QueryValidatorSlashesRequest): Promise<QueryValidatorSlashesResponse> {
    const data = QueryValidatorSlashesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "ValidatorSlashes", data);
    return promise.then((data) => QueryValidatorSlashesResponse.decode(new BinaryReader(data)));
  }
  DelegationRewards(request: QueryDelegationRewardsRequest): Promise<QueryDelegationRewardsResponse> {
    const data = QueryDelegationRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationRewards", data);
    return promise.then((data) => QueryDelegationRewardsResponse.decode(new BinaryReader(data)));
  }
  DelegationTotalRewards(
    request: QueryDelegationTotalRewardsRequest,
  ): Promise<QueryDelegationTotalRewardsResponse> {
    const data = QueryDelegationTotalRewardsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegationTotalRewards", data);
    return promise.then((data) => QueryDelegationTotalRewardsResponse.decode(new BinaryReader(data)));
  }
  DelegatorValidators(request: QueryDelegatorValidatorsRequest): Promise<QueryDelegatorValidatorsResponse> {
    const data = QueryDelegatorValidatorsRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorValidators", data);
    return promise.then((data) => QueryDelegatorValidatorsResponse.decode(new BinaryReader(data)));
  }
  DelegatorWithdrawAddress(
    request: QueryDelegatorWithdrawAddressRequest,
  ): Promise<QueryDelegatorWithdrawAddressResponse> {
    const data = QueryDelegatorWithdrawAddressRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "DelegatorWithdrawAddress", data);
    return promise.then((data) => QueryDelegatorWithdrawAddressResponse.decode(new BinaryReader(data)));
  }
  CommunityPool(request: QueryCommunityPoolRequest = {}): Promise<QueryCommunityPoolResponse> {
    const data = QueryCommunityPoolRequest.encode(request).finish();
    const promise = this.rpc.request("cosmos.distribution.v1beta1.Query", "CommunityPool", data);
    return promise.then((data) => QueryCommunityPoolResponse.decode(new BinaryReader(data)));
  }
}