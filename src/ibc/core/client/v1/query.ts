/* eslint-disable */
import { PageRequest, PageRequestAmino, PageResponse, PageResponseAmino } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Height, HeightAmino, IdentifiedClientState, IdentifiedClientStateAmino, ConsensusStateWithHeight, ConsensusStateWithHeightAmino, Params, ParamsAmino } from "./client";
import { MerklePath, MerklePathAmino } from "../../commitment/v2/commitment";
import { Any, AnyAmino } from "../../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../registry";
import { TxRpc } from "../../../../types";
export const protobufPackage = "ibc.core.client.v1";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequest {
  /** client state unique identifier */
  clientId: string;
}
export interface QueryClientStateRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStateRequest";
  value: Uint8Array;
}
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 * @name QueryClientStateRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStateRequest
 */
export interface QueryClientStateRequestAmino {
  /**
   * client state unique identifier
   */
  client_id?: string;
}
export interface QueryClientStateRequestAminoMsg {
  type: "cosmos-sdk/QueryClientStateRequest";
  value: QueryClientStateRequestAmino;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponse {
  /** client state associated with the request identifier */
  clientState?: Any | undefined;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}
export interface QueryClientStateResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStateResponse";
  value: Uint8Array;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 * @name QueryClientStateResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStateResponse
 */
export interface QueryClientStateResponseAmino {
  /**
   * client state associated with the request identifier
   */
  client_state?: AnyAmino | undefined;
  /**
   * merkle proof of existence
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   */
  proof_height?: HeightAmino | undefined;
}
export interface QueryClientStateResponseAminoMsg {
  type: "cosmos-sdk/QueryClientStateResponse";
  value: QueryClientStateResponseAmino;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequest {
  /** pagination request */
  pagination?: PageRequest | undefined;
}
export interface QueryClientStatesRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest";
  value: Uint8Array;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 * @name QueryClientStatesRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatesRequest
 */
export interface QueryClientStatesRequestAmino {
  /**
   * pagination request
   */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryClientStatesRequestAminoMsg {
  type: "cosmos-sdk/QueryClientStatesRequest";
  value: QueryClientStatesRequestAmino;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponse {
  /** list of stored ClientStates of the chain. */
  clientStates: IdentifiedClientState[];
  /** pagination response */
  pagination?: PageResponse | undefined;
}
export interface QueryClientStatesResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse";
  value: Uint8Array;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 * @name QueryClientStatesResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatesResponse
 */
export interface QueryClientStatesResponseAmino {
  /**
   * list of stored ClientStates of the chain.
   */
  client_states?: IdentifiedClientStateAmino[];
  /**
   * pagination response
   */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryClientStatesResponseAminoMsg {
  type: "cosmos-sdk/QueryClientStatesResponse";
  value: QueryClientStatesResponseAmino;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequest {
  /** client identifier */
  clientId: string;
  /** consensus state revision number */
  revisionNumber: bigint;
  /** consensus state revision height */
  revisionHeight: bigint;
  /**
   * latest_height overrides the height field and queries the latest stored
   * ConsensusState
   */
  latestHeight: boolean;
}
export interface QueryConsensusStateRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest";
  value: Uint8Array;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 * @name QueryConsensusStateRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStateRequest
 */
export interface QueryConsensusStateRequestAmino {
  /**
   * client identifier
   */
  client_id?: string;
  /**
   * consensus state revision number
   */
  revision_number?: string;
  /**
   * consensus state revision height
   */
  revision_height?: string;
  /**
   * latest_height overrides the height field and queries the latest stored
   * ConsensusState
   */
  latest_height?: boolean;
}
export interface QueryConsensusStateRequestAminoMsg {
  type: "cosmos-sdk/QueryConsensusStateRequest";
  value: QueryConsensusStateRequestAmino;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponse {
  /** consensus state associated with the client identifier at the given height */
  consensusState?: Any | undefined;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height | undefined;
}
export interface QueryConsensusStateResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse";
  value: Uint8Array;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 * @name QueryConsensusStateResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStateResponse
 */
export interface QueryConsensusStateResponseAmino {
  /**
   * consensus state associated with the client identifier at the given height
   */
  consensus_state?: AnyAmino | undefined;
  /**
   * merkle proof of existence
   */
  proof?: string;
  /**
   * height at which the proof was retrieved
   */
  proof_height?: HeightAmino | undefined;
}
export interface QueryConsensusStateResponseAminoMsg {
  type: "cosmos-sdk/QueryConsensusStateResponse";
  value: QueryConsensusStateResponseAmino;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequest {
  /** client identifier */
  clientId: string;
  /** pagination request */
  pagination?: PageRequest | undefined;
}
export interface QueryConsensusStatesRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest";
  value: Uint8Array;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 * @name QueryConsensusStatesRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStatesRequest
 */
export interface QueryConsensusStatesRequestAmino {
  /**
   * client identifier
   */
  client_id?: string;
  /**
   * pagination request
   */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryConsensusStatesRequestAminoMsg {
  type: "cosmos-sdk/QueryConsensusStatesRequest";
  value: QueryConsensusStatesRequestAmino;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponse {
  /** consensus states associated with the identifier */
  consensusStates: ConsensusStateWithHeight[];
  /** pagination response */
  pagination?: PageResponse | undefined;
}
export interface QueryConsensusStatesResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse";
  value: Uint8Array;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 * @name QueryConsensusStatesResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStatesResponse
 */
export interface QueryConsensusStatesResponseAmino {
  /**
   * consensus states associated with the identifier
   */
  consensus_states?: ConsensusStateWithHeightAmino[];
  /**
   * pagination response
   */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryConsensusStatesResponseAminoMsg {
  type: "cosmos-sdk/QueryConsensusStatesResponse";
  value: QueryConsensusStatesResponseAmino;
}
/**
 * QueryConsensusStateHeightsRequest is the request type for Query/ConsensusStateHeights
 * RPC method.
 */
export interface QueryConsensusStateHeightsRequest {
  /** client identifier */
  clientId: string;
  /** pagination request */
  pagination?: PageRequest | undefined;
}
export interface QueryConsensusStateHeightsRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsRequest";
  value: Uint8Array;
}
/**
 * QueryConsensusStateHeightsRequest is the request type for Query/ConsensusStateHeights
 * RPC method.
 * @name QueryConsensusStateHeightsRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStateHeightsRequest
 */
export interface QueryConsensusStateHeightsRequestAmino {
  /**
   * client identifier
   */
  client_id?: string;
  /**
   * pagination request
   */
  pagination?: PageRequestAmino | undefined;
}
export interface QueryConsensusStateHeightsRequestAminoMsg {
  type: "cosmos-sdk/QueryConsensusStateHeightsRequest";
  value: QueryConsensusStateHeightsRequestAmino;
}
/**
 * QueryConsensusStateHeightsResponse is the response type for the
 * Query/ConsensusStateHeights RPC method
 */
export interface QueryConsensusStateHeightsResponse {
  /** consensus state heights */
  consensusStateHeights: Height[];
  /** pagination response */
  pagination?: PageResponse | undefined;
}
export interface QueryConsensusStateHeightsResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsResponse";
  value: Uint8Array;
}
/**
 * QueryConsensusStateHeightsResponse is the response type for the
 * Query/ConsensusStateHeights RPC method
 * @name QueryConsensusStateHeightsResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryConsensusStateHeightsResponse
 */
export interface QueryConsensusStateHeightsResponseAmino {
  /**
   * consensus state heights
   */
  consensus_state_heights?: HeightAmino[];
  /**
   * pagination response
   */
  pagination?: PageResponseAmino | undefined;
}
export interface QueryConsensusStateHeightsResponseAminoMsg {
  type: "cosmos-sdk/QueryConsensusStateHeightsResponse";
  value: QueryConsensusStateHeightsResponseAmino;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequest {
  /** client unique identifier */
  clientId: string;
}
export interface QueryClientStatusRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest";
  value: Uint8Array;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 * @name QueryClientStatusRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatusRequest
 */
export interface QueryClientStatusRequestAmino {
  /**
   * client unique identifier
   */
  client_id?: string;
}
export interface QueryClientStatusRequestAminoMsg {
  type: "cosmos-sdk/QueryClientStatusRequest";
  value: QueryClientStatusRequestAmino;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponse {
  status: string;
}
export interface QueryClientStatusResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse";
  value: Uint8Array;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 * @name QueryClientStatusResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientStatusResponse
 */
export interface QueryClientStatusResponseAmino {
  status?: string;
}
export interface QueryClientStatusResponseAminoMsg {
  type: "cosmos-sdk/QueryClientStatusResponse";
  value: QueryClientStatusResponseAmino;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequest {}
export interface QueryClientParamsRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest";
  value: Uint8Array;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 * @name QueryClientParamsRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientParamsRequest
 */
export interface QueryClientParamsRequestAmino {}
export interface QueryClientParamsRequestAminoMsg {
  type: "cosmos-sdk/QueryClientParamsRequest";
  value: QueryClientParamsRequestAmino;
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponse {
  /** params defines the parameters of the module. */
  params?: Params | undefined;
}
export interface QueryClientParamsResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse";
  value: Uint8Array;
}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 * @name QueryClientParamsResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientParamsResponse
 */
export interface QueryClientParamsResponseAmino {
  /**
   * params defines the parameters of the module.
   */
  params?: ParamsAmino | undefined;
}
export interface QueryClientParamsResponseAminoMsg {
  type: "cosmos-sdk/QueryClientParamsResponse";
  value: QueryClientParamsResponseAmino;
}
/**
 * QueryClientCreatorRequest is the request type for the Query/ClientCreator RPC
 * method.
 */
export interface QueryClientCreatorRequest {
  /** client unique identifier */
  clientId: string;
}
export interface QueryClientCreatorRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientCreatorRequest";
  value: Uint8Array;
}
/**
 * QueryClientCreatorRequest is the request type for the Query/ClientCreator RPC
 * method.
 * @name QueryClientCreatorRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientCreatorRequest
 */
export interface QueryClientCreatorRequestAmino {
  /**
   * client unique identifier
   */
  client_id?: string;
}
export interface QueryClientCreatorRequestAminoMsg {
  type: "cosmos-sdk/QueryClientCreatorRequest";
  value: QueryClientCreatorRequestAmino;
}
/**
 * QueryClientCreatorResponse is the response type for the Query/ClientCreator RPC
 * method.
 */
export interface QueryClientCreatorResponse {
  /** creator of the client */
  creator: string;
}
export interface QueryClientCreatorResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryClientCreatorResponse";
  value: Uint8Array;
}
/**
 * QueryClientCreatorResponse is the response type for the Query/ClientCreator RPC
 * method.
 * @name QueryClientCreatorResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryClientCreatorResponse
 */
export interface QueryClientCreatorResponseAmino {
  /**
   * creator of the client
   */
  creator?: string;
}
export interface QueryClientCreatorResponseAminoMsg {
  type: "cosmos-sdk/QueryClientCreatorResponse";
  value: QueryClientCreatorResponseAmino;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequest {}
export interface QueryUpgradedClientStateRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest";
  value: Uint8Array;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 * @name QueryUpgradedClientStateRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedClientStateRequest
 */
export interface QueryUpgradedClientStateRequestAmino {}
export interface QueryUpgradedClientStateRequestAminoMsg {
  type: "cosmos-sdk/QueryUpgradedClientStateRequest";
  value: QueryUpgradedClientStateRequestAmino;
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponse {
  /** client state associated with the request identifier */
  upgradedClientState?: Any | undefined;
}
export interface QueryUpgradedClientStateResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse";
  value: Uint8Array;
}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 * @name QueryUpgradedClientStateResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedClientStateResponse
 */
export interface QueryUpgradedClientStateResponseAmino {
  /**
   * client state associated with the request identifier
   */
  upgraded_client_state?: AnyAmino | undefined;
}
export interface QueryUpgradedClientStateResponseAminoMsg {
  type: "cosmos-sdk/QueryUpgradedClientStateResponse";
  value: QueryUpgradedClientStateResponseAmino;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequest {}
export interface QueryUpgradedConsensusStateRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest";
  value: Uint8Array;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 * @name QueryUpgradedConsensusStateRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedConsensusStateRequest
 */
export interface QueryUpgradedConsensusStateRequestAmino {}
export interface QueryUpgradedConsensusStateRequestAminoMsg {
  type: "cosmos-sdk/QueryUpgradedConsensusStateRequest";
  value: QueryUpgradedConsensusStateRequestAmino;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
  /** Consensus state associated with the request identifier */
  upgradedConsensusState?: Any | undefined;
}
export interface QueryUpgradedConsensusStateResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse";
  value: Uint8Array;
}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 * @name QueryUpgradedConsensusStateResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryUpgradedConsensusStateResponse
 */
export interface QueryUpgradedConsensusStateResponseAmino {
  /**
   * Consensus state associated with the request identifier
   */
  upgraded_consensus_state?: AnyAmino | undefined;
}
export interface QueryUpgradedConsensusStateResponseAminoMsg {
  type: "cosmos-sdk/QueryUpgradedConsensusStateResponse";
  value: QueryUpgradedConsensusStateResponseAmino;
}
/** QueryVerifyMembershipRequest is the request type for the Query/VerifyMembership RPC method */
export interface QueryVerifyMembershipRequest {
  /** client unique identifier. */
  clientId: string;
  /** the proof to be verified by the client. */
  proof: Uint8Array;
  /** the height of the commitment root at which the proof is verified. */
  proofHeight: Height | undefined;
  /** the value which is proven. */
  value: Uint8Array;
  /** optional time delay */
  timeDelay: bigint;
  /** optional block delay */
  blockDelay: bigint;
  /** the commitment key path. */
  merklePath: MerklePath | undefined;
}
export interface QueryVerifyMembershipRequestProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryVerifyMembershipRequest";
  value: Uint8Array;
}
/**
 * QueryVerifyMembershipRequest is the request type for the Query/VerifyMembership RPC method
 * @name QueryVerifyMembershipRequestAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryVerifyMembershipRequest
 */
export interface QueryVerifyMembershipRequestAmino {
  /**
   * client unique identifier.
   */
  client_id?: string;
  /**
   * the proof to be verified by the client.
   */
  proof?: string;
  /**
   * the height of the commitment root at which the proof is verified.
   */
  proof_height?: HeightAmino | undefined;
  /**
   * the value which is proven.
   */
  value?: string;
  /**
   * optional time delay
   */
  time_delay?: string;
  /**
   * optional block delay
   */
  block_delay?: string;
  /**
   * the commitment key path.
   */
  merkle_path?: MerklePathAmino | undefined;
}
export interface QueryVerifyMembershipRequestAminoMsg {
  type: "cosmos-sdk/QueryVerifyMembershipRequest";
  value: QueryVerifyMembershipRequestAmino;
}
/** QueryVerifyMembershipResponse is the response type for the Query/VerifyMembership RPC method */
export interface QueryVerifyMembershipResponse {
  /** boolean indicating success or failure of proof verification. */
  success: boolean;
}
export interface QueryVerifyMembershipResponseProtoMsg {
  typeUrl: "/ibc.core.client.v1.QueryVerifyMembershipResponse";
  value: Uint8Array;
}
/**
 * QueryVerifyMembershipResponse is the response type for the Query/VerifyMembership RPC method
 * @name QueryVerifyMembershipResponseAmino
 * @package ibc.core.client.v1
 * @see proto type: ibc.core.client.v1.QueryVerifyMembershipResponse
 */
export interface QueryVerifyMembershipResponseAmino {
  /**
   * boolean indicating success or failure of proof verification.
   */
  success?: boolean;
}
export interface QueryVerifyMembershipResponseAminoMsg {
  type: "cosmos-sdk/QueryVerifyMembershipResponse";
  value: QueryVerifyMembershipResponseAmino;
}
function createBaseQueryClientStateRequest(): QueryClientStateRequest {
  return {
    clientId: ""
  };
}
export const QueryClientStateRequest = {
  typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
  aminoType: "cosmos-sdk/QueryClientStateRequest",
  is(o: any): o is QueryClientStateRequest {
    return o && (o.$typeUrl === QueryClientStateRequest.typeUrl || typeof o.clientId === "string");
  },
  isAmino(o: any): o is QueryClientStateRequestAmino {
    return o && (o.$typeUrl === QueryClientStateRequest.typeUrl || typeof o.client_id === "string");
  },
  encode(message: QueryClientStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClientStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStateRequest {
    const obj = createBaseQueryClientStateRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    return obj;
  },
  toJSON(message: QueryClientStateRequest): JsonSafe<QueryClientStateRequest> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial(object: Partial<QueryClientStateRequest>): QueryClientStateRequest {
    const message = createBaseQueryClientStateRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(object: QueryClientStateRequestAmino): QueryClientStateRequest {
    const message = createBaseQueryClientStateRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    return message;
  },
  toAmino(message: QueryClientStateRequest): QueryClientStateRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    return obj;
  },
  fromAminoMsg(object: QueryClientStateRequestAminoMsg): QueryClientStateRequest {
    return QueryClientStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientStateRequest): QueryClientStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientStateRequest",
      value: QueryClientStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientStateRequestProtoMsg): QueryClientStateRequest {
    return QueryClientStateRequest.decode(message.value);
  },
  toProto(message: QueryClientStateRequest): Uint8Array {
    return QueryClientStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStateRequest): QueryClientStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStateRequest",
      value: QueryClientStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClientStateRequest.typeUrl, QueryClientStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClientStateRequest.aminoType, QueryClientStateRequest.typeUrl);
function createBaseQueryClientStateResponse(): QueryClientStateResponse {
  return {
    clientState: undefined,
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({})
  };
}
export const QueryClientStateResponse = {
  typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
  aminoType: "cosmos-sdk/QueryClientStateResponse",
  is(o: any): o is QueryClientStateResponse {
    return o && (o.$typeUrl === QueryClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proofHeight));
  },
  isAmino(o: any): o is QueryClientStateResponseAmino {
    return o && (o.$typeUrl === QueryClientStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryClientStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClientStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStateResponse {
    const obj = createBaseQueryClientStateResponse();
    if (isSet(object.clientState)) obj.clientState = Any.fromJSON(object.clientState);
    if (isSet(object.proof)) obj.proof = bytesFromBase64(object.proof);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    return obj;
  },
  toJSON(message: QueryClientStateResponse): JsonSafe<QueryClientStateResponse> {
    const obj: any = {};
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClientStateResponse>): QueryClientStateResponse {
    const message = createBaseQueryClientStateResponse();
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    }
    message.proof = object.proof ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    return message;
  },
  fromAmino(object: QueryClientStateResponseAmino): QueryClientStateResponse {
    const message = createBaseQueryClientStateResponse();
    if (object.client_state !== undefined && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryClientStateResponse): QueryClientStateResponseAmino {
    const obj: any = {};
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object: QueryClientStateResponseAminoMsg): QueryClientStateResponse {
    return QueryClientStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientStateResponse): QueryClientStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientStateResponse",
      value: QueryClientStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientStateResponseProtoMsg): QueryClientStateResponse {
    return QueryClientStateResponse.decode(message.value);
  },
  toProto(message: QueryClientStateResponse): Uint8Array {
    return QueryClientStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStateResponse): QueryClientStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStateResponse",
      value: QueryClientStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClientStateResponse.typeUrl, QueryClientStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClientStateResponse.aminoType, QueryClientStateResponse.typeUrl);
function createBaseQueryClientStatesRequest(): QueryClientStatesRequest {
  return {
    pagination: undefined
  };
}
export const QueryClientStatesRequest = {
  typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
  aminoType: "cosmos-sdk/QueryClientStatesRequest",
  is(o: any): o is QueryClientStatesRequest {
    return o && o.$typeUrl === QueryClientStatesRequest.typeUrl;
  },
  isAmino(o: any): o is QueryClientStatesRequestAmino {
    return o && o.$typeUrl === QueryClientStatesRequest.typeUrl;
  },
  encode(message: QueryClientStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClientStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesRequest();
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
  fromJSON(object: any): QueryClientStatesRequest {
    const obj = createBaseQueryClientStatesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryClientStatesRequest): JsonSafe<QueryClientStatesRequest> {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClientStatesRequest>): QueryClientStatesRequest {
    const message = createBaseQueryClientStatesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryClientStatesRequestAmino): QueryClientStatesRequest {
    const message = createBaseQueryClientStatesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClientStatesRequest): QueryClientStatesRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClientStatesRequestAminoMsg): QueryClientStatesRequest {
    return QueryClientStatesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientStatesRequest): QueryClientStatesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientStatesRequest",
      value: QueryClientStatesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientStatesRequestProtoMsg): QueryClientStatesRequest {
    return QueryClientStatesRequest.decode(message.value);
  },
  toProto(message: QueryClientStatesRequest): Uint8Array {
    return QueryClientStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStatesRequest): QueryClientStatesRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStatesRequest",
      value: QueryClientStatesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClientStatesRequest.typeUrl, QueryClientStatesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClientStatesRequest.aminoType, QueryClientStatesRequest.typeUrl);
function createBaseQueryClientStatesResponse(): QueryClientStatesResponse {
  return {
    clientStates: [],
    pagination: undefined
  };
}
export const QueryClientStatesResponse = {
  typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
  aminoType: "cosmos-sdk/QueryClientStatesResponse",
  is(o: any): o is QueryClientStatesResponse {
    return o && (o.$typeUrl === QueryClientStatesResponse.typeUrl || Array.isArray(o.clientStates) && (!o.clientStates.length || IdentifiedClientState.is(o.clientStates[0])));
  },
  isAmino(o: any): o is QueryClientStatesResponseAmino {
    return o && (o.$typeUrl === QueryClientStatesResponse.typeUrl || Array.isArray(o.client_states) && (!o.client_states.length || IdentifiedClientState.isAmino(o.client_states[0])));
  },
  encode(message: QueryClientStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.clientStates) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClientStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientStates.push(IdentifiedClientState.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryClientStatesResponse {
    const obj = createBaseQueryClientStatesResponse();
    if (Array.isArray(object?.clientStates)) obj.clientStates = object.clientStates.map((e: any) => IdentifiedClientState.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryClientStatesResponse): JsonSafe<QueryClientStatesResponse> {
    const obj: any = {};
    if (message.clientStates) {
      obj.clientStates = message.clientStates.map(e => e ? IdentifiedClientState.toJSON(e) : undefined);
    } else {
      obj.clientStates = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClientStatesResponse>): QueryClientStatesResponse {
    const message = createBaseQueryClientStatesResponse();
    message.clientStates = object.clientStates?.map(e => IdentifiedClientState.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryClientStatesResponseAmino): QueryClientStatesResponse {
    const message = createBaseQueryClientStatesResponse();
    message.clientStates = object.client_states?.map(e => IdentifiedClientState.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryClientStatesResponse): QueryClientStatesResponseAmino {
    const obj: any = {};
    if (message.clientStates) {
      obj.client_states = message.clientStates.map(e => e ? IdentifiedClientState.toAmino(e) : undefined);
    } else {
      obj.client_states = message.clientStates;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClientStatesResponseAminoMsg): QueryClientStatesResponse {
    return QueryClientStatesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientStatesResponse): QueryClientStatesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientStatesResponse",
      value: QueryClientStatesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientStatesResponseProtoMsg): QueryClientStatesResponse {
    return QueryClientStatesResponse.decode(message.value);
  },
  toProto(message: QueryClientStatesResponse): Uint8Array {
    return QueryClientStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStatesResponse): QueryClientStatesResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStatesResponse",
      value: QueryClientStatesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClientStatesResponse.typeUrl, QueryClientStatesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClientStatesResponse.aminoType, QueryClientStatesResponse.typeUrl);
function createBaseQueryConsensusStateRequest(): QueryConsensusStateRequest {
  return {
    clientId: "",
    revisionNumber: BigInt(0),
    revisionHeight: BigInt(0),
    latestHeight: false
  };
}
export const QueryConsensusStateRequest = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
  aminoType: "cosmos-sdk/QueryConsensusStateRequest",
  is(o: any): o is QueryConsensusStateRequest {
    return o && (o.$typeUrl === QueryConsensusStateRequest.typeUrl || typeof o.clientId === "string" && typeof o.revisionNumber === "bigint" && typeof o.revisionHeight === "bigint" && typeof o.latestHeight === "boolean");
  },
  isAmino(o: any): o is QueryConsensusStateRequestAmino {
    return o && (o.$typeUrl === QueryConsensusStateRequest.typeUrl || typeof o.client_id === "string" && typeof o.revision_number === "bigint" && typeof o.revision_height === "bigint" && typeof o.latest_height === "boolean");
  },
  encode(message: QueryConsensusStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.revisionNumber !== BigInt(0)) {
      writer.uint32(16).uint64(message.revisionNumber);
    }
    if (message.revisionHeight !== BigInt(0)) {
      writer.uint32(24).uint64(message.revisionHeight);
    }
    if (message.latestHeight === true) {
      writer.uint32(32).bool(message.latestHeight);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.revisionNumber = reader.uint64();
          break;
        case 3:
          message.revisionHeight = reader.uint64();
          break;
        case 4:
          message.latestHeight = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStateRequest {
    const obj = createBaseQueryConsensusStateRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.revisionNumber)) obj.revisionNumber = BigInt(object.revisionNumber.toString());
    if (isSet(object.revisionHeight)) obj.revisionHeight = BigInt(object.revisionHeight.toString());
    if (isSet(object.latestHeight)) obj.latestHeight = Boolean(object.latestHeight);
    return obj;
  },
  toJSON(message: QueryConsensusStateRequest): JsonSafe<QueryConsensusStateRequest> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.revisionNumber !== undefined && (obj.revisionNumber = (message.revisionNumber || BigInt(0)).toString());
    message.revisionHeight !== undefined && (obj.revisionHeight = (message.revisionHeight || BigInt(0)).toString());
    message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight);
    return obj;
  },
  fromPartial(object: Partial<QueryConsensusStateRequest>): QueryConsensusStateRequest {
    const message = createBaseQueryConsensusStateRequest();
    message.clientId = object.clientId ?? "";
    if (object.revisionNumber !== undefined && object.revisionNumber !== null) {
      message.revisionNumber = BigInt(object.revisionNumber.toString());
    }
    if (object.revisionHeight !== undefined && object.revisionHeight !== null) {
      message.revisionHeight = BigInt(object.revisionHeight.toString());
    }
    message.latestHeight = object.latestHeight ?? false;
    return message;
  },
  fromAmino(object: QueryConsensusStateRequestAmino): QueryConsensusStateRequest {
    const message = createBaseQueryConsensusStateRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.revision_number !== undefined && object.revision_number !== null) {
      message.revisionNumber = BigInt(object.revision_number);
    }
    if (object.revision_height !== undefined && object.revision_height !== null) {
      message.revisionHeight = BigInt(object.revision_height);
    }
    if (object.latest_height !== undefined && object.latest_height !== null) {
      message.latestHeight = object.latest_height;
    }
    return message;
  },
  toAmino(message: QueryConsensusStateRequest): QueryConsensusStateRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.revision_number = message.revisionNumber !== BigInt(0) ? message.revisionNumber?.toString() : undefined;
    obj.revision_height = message.revisionHeight !== BigInt(0) ? message.revisionHeight?.toString() : undefined;
    obj.latest_height = message.latestHeight === false ? undefined : message.latestHeight;
    return obj;
  },
  fromAminoMsg(object: QueryConsensusStateRequestAminoMsg): QueryConsensusStateRequest {
    return QueryConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConsensusStateRequest): QueryConsensusStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConsensusStateRequest",
      value: QueryConsensusStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConsensusStateRequestProtoMsg): QueryConsensusStateRequest {
    return QueryConsensusStateRequest.decode(message.value);
  },
  toProto(message: QueryConsensusStateRequest): Uint8Array {
    return QueryConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStateRequest): QueryConsensusStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStateRequest",
      value: QueryConsensusStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConsensusStateRequest.typeUrl, QueryConsensusStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryConsensusStateRequest.aminoType, QueryConsensusStateRequest.typeUrl);
function createBaseQueryConsensusStateResponse(): QueryConsensusStateResponse {
  return {
    consensusState: undefined,
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({})
  };
}
export const QueryConsensusStateResponse = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
  aminoType: "cosmos-sdk/QueryConsensusStateResponse",
  is(o: any): o is QueryConsensusStateResponse {
    return o && (o.$typeUrl === QueryConsensusStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proofHeight));
  },
  isAmino(o: any): o is QueryConsensusStateResponseAmino {
    return o && (o.$typeUrl === QueryConsensusStateResponse.typeUrl || (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height));
  },
  encode(message: QueryConsensusStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStateResponse {
    const obj = createBaseQueryConsensusStateResponse();
    if (isSet(object.consensusState)) obj.consensusState = Any.fromJSON(object.consensusState);
    if (isSet(object.proof)) obj.proof = bytesFromBase64(object.proof);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    return obj;
  },
  toJSON(message: QueryConsensusStateResponse): JsonSafe<QueryConsensusStateResponse> {
    const obj: any = {};
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryConsensusStateResponse>): QueryConsensusStateResponse {
    const message = createBaseQueryConsensusStateResponse();
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromPartial(object.consensusState);
    }
    message.proof = object.proof ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    return message;
  },
  fromAmino(object: QueryConsensusStateResponseAmino): QueryConsensusStateResponse {
    const message = createBaseQueryConsensusStateResponse();
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensusState = Any.fromAmino(object.consensus_state);
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    return message;
  },
  toAmino(message: QueryConsensusStateResponse): QueryConsensusStateResponseAmino {
    const obj: any = {};
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    return obj;
  },
  fromAminoMsg(object: QueryConsensusStateResponseAminoMsg): QueryConsensusStateResponse {
    return QueryConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConsensusStateResponse): QueryConsensusStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConsensusStateResponse",
      value: QueryConsensusStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConsensusStateResponseProtoMsg): QueryConsensusStateResponse {
    return QueryConsensusStateResponse.decode(message.value);
  },
  toProto(message: QueryConsensusStateResponse): Uint8Array {
    return QueryConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStateResponse): QueryConsensusStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStateResponse",
      value: QueryConsensusStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConsensusStateResponse.typeUrl, QueryConsensusStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryConsensusStateResponse.aminoType, QueryConsensusStateResponse.typeUrl);
function createBaseQueryConsensusStatesRequest(): QueryConsensusStatesRequest {
  return {
    clientId: "",
    pagination: undefined
  };
}
export const QueryConsensusStatesRequest = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
  aminoType: "cosmos-sdk/QueryConsensusStatesRequest",
  is(o: any): o is QueryConsensusStatesRequest {
    return o && (o.$typeUrl === QueryConsensusStatesRequest.typeUrl || typeof o.clientId === "string");
  },
  isAmino(o: any): o is QueryConsensusStatesRequestAmino {
    return o && (o.$typeUrl === QueryConsensusStatesRequest.typeUrl || typeof o.client_id === "string");
  },
  encode(message: QueryConsensusStatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStatesRequest {
    const obj = createBaseQueryConsensusStatesRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryConsensusStatesRequest): JsonSafe<QueryConsensusStatesRequest> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryConsensusStatesRequest>): QueryConsensusStatesRequest {
    const message = createBaseQueryConsensusStatesRequest();
    message.clientId = object.clientId ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryConsensusStatesRequestAmino): QueryConsensusStatesRequest {
    const message = createBaseQueryConsensusStatesRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConsensusStatesRequestAminoMsg): QueryConsensusStatesRequest {
    return QueryConsensusStatesRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConsensusStatesRequest",
      value: QueryConsensusStatesRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConsensusStatesRequestProtoMsg): QueryConsensusStatesRequest {
    return QueryConsensusStatesRequest.decode(message.value);
  },
  toProto(message: QueryConsensusStatesRequest): Uint8Array {
    return QueryConsensusStatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStatesRequest): QueryConsensusStatesRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStatesRequest",
      value: QueryConsensusStatesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConsensusStatesRequest.typeUrl, QueryConsensusStatesRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryConsensusStatesRequest.aminoType, QueryConsensusStatesRequest.typeUrl);
function createBaseQueryConsensusStatesResponse(): QueryConsensusStatesResponse {
  return {
    consensusStates: [],
    pagination: undefined
  };
}
export const QueryConsensusStatesResponse = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
  aminoType: "cosmos-sdk/QueryConsensusStatesResponse",
  is(o: any): o is QueryConsensusStatesResponse {
    return o && (o.$typeUrl === QueryConsensusStatesResponse.typeUrl || Array.isArray(o.consensusStates) && (!o.consensusStates.length || ConsensusStateWithHeight.is(o.consensusStates[0])));
  },
  isAmino(o: any): o is QueryConsensusStatesResponseAmino {
    return o && (o.$typeUrl === QueryConsensusStatesResponse.typeUrl || Array.isArray(o.consensus_states) && (!o.consensus_states.length || ConsensusStateWithHeight.isAmino(o.consensus_states[0])));
  },
  encode(message: QueryConsensusStatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryConsensusStatesResponse {
    const obj = createBaseQueryConsensusStatesResponse();
    if (Array.isArray(object?.consensusStates)) obj.consensusStates = object.consensusStates.map((e: any) => ConsensusStateWithHeight.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryConsensusStatesResponse): JsonSafe<QueryConsensusStatesResponse> {
    const obj: any = {};
    if (message.consensusStates) {
      obj.consensusStates = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toJSON(e) : undefined);
    } else {
      obj.consensusStates = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryConsensusStatesResponse>): QueryConsensusStatesResponse {
    const message = createBaseQueryConsensusStatesResponse();
    message.consensusStates = object.consensusStates?.map(e => ConsensusStateWithHeight.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryConsensusStatesResponseAmino): QueryConsensusStatesResponse {
    const message = createBaseQueryConsensusStatesResponse();
    message.consensusStates = object.consensus_states?.map(e => ConsensusStateWithHeight.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseAmino {
    const obj: any = {};
    if (message.consensusStates) {
      obj.consensus_states = message.consensusStates.map(e => e ? ConsensusStateWithHeight.toAmino(e) : undefined);
    } else {
      obj.consensus_states = message.consensusStates;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConsensusStatesResponseAminoMsg): QueryConsensusStatesResponse {
    return QueryConsensusStatesResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConsensusStatesResponse",
      value: QueryConsensusStatesResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConsensusStatesResponseProtoMsg): QueryConsensusStatesResponse {
    return QueryConsensusStatesResponse.decode(message.value);
  },
  toProto(message: QueryConsensusStatesResponse): Uint8Array {
    return QueryConsensusStatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStatesResponse): QueryConsensusStatesResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStatesResponse",
      value: QueryConsensusStatesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConsensusStatesResponse.typeUrl, QueryConsensusStatesResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryConsensusStatesResponse.aminoType, QueryConsensusStatesResponse.typeUrl);
function createBaseQueryConsensusStateHeightsRequest(): QueryConsensusStateHeightsRequest {
  return {
    clientId: "",
    pagination: undefined
  };
}
export const QueryConsensusStateHeightsRequest = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsRequest",
  aminoType: "cosmos-sdk/QueryConsensusStateHeightsRequest",
  is(o: any): o is QueryConsensusStateHeightsRequest {
    return o && (o.$typeUrl === QueryConsensusStateHeightsRequest.typeUrl || typeof o.clientId === "string");
  },
  isAmino(o: any): o is QueryConsensusStateHeightsRequestAmino {
    return o && (o.$typeUrl === QueryConsensusStateHeightsRequest.typeUrl || typeof o.client_id === "string");
  },
  encode(message: QueryConsensusStateHeightsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStateHeightsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateHeightsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStateHeightsRequest {
    const obj = createBaseQueryConsensusStateHeightsRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryConsensusStateHeightsRequest): JsonSafe<QueryConsensusStateHeightsRequest> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryConsensusStateHeightsRequest>): QueryConsensusStateHeightsRequest {
    const message = createBaseQueryConsensusStateHeightsRequest();
    message.clientId = object.clientId ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryConsensusStateHeightsRequestAmino): QueryConsensusStateHeightsRequest {
    const message = createBaseQueryConsensusStateHeightsRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryConsensusStateHeightsRequest): QueryConsensusStateHeightsRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConsensusStateHeightsRequestAminoMsg): QueryConsensusStateHeightsRequest {
    return QueryConsensusStateHeightsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConsensusStateHeightsRequest): QueryConsensusStateHeightsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryConsensusStateHeightsRequest",
      value: QueryConsensusStateHeightsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConsensusStateHeightsRequestProtoMsg): QueryConsensusStateHeightsRequest {
    return QueryConsensusStateHeightsRequest.decode(message.value);
  },
  toProto(message: QueryConsensusStateHeightsRequest): Uint8Array {
    return QueryConsensusStateHeightsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStateHeightsRequest): QueryConsensusStateHeightsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsRequest",
      value: QueryConsensusStateHeightsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConsensusStateHeightsRequest.typeUrl, QueryConsensusStateHeightsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryConsensusStateHeightsRequest.aminoType, QueryConsensusStateHeightsRequest.typeUrl);
function createBaseQueryConsensusStateHeightsResponse(): QueryConsensusStateHeightsResponse {
  return {
    consensusStateHeights: [],
    pagination: undefined
  };
}
export const QueryConsensusStateHeightsResponse = {
  typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsResponse",
  aminoType: "cosmos-sdk/QueryConsensusStateHeightsResponse",
  is(o: any): o is QueryConsensusStateHeightsResponse {
    return o && (o.$typeUrl === QueryConsensusStateHeightsResponse.typeUrl || Array.isArray(o.consensusStateHeights) && (!o.consensusStateHeights.length || Height.is(o.consensusStateHeights[0])));
  },
  isAmino(o: any): o is QueryConsensusStateHeightsResponseAmino {
    return o && (o.$typeUrl === QueryConsensusStateHeightsResponse.typeUrl || Array.isArray(o.consensus_state_heights) && (!o.consensus_state_heights.length || Height.isAmino(o.consensus_state_heights[0])));
  },
  encode(message: QueryConsensusStateHeightsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.consensusStateHeights) {
      Height.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryConsensusStateHeightsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateHeightsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusStateHeights.push(Height.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryConsensusStateHeightsResponse {
    const obj = createBaseQueryConsensusStateHeightsResponse();
    if (Array.isArray(object?.consensusStateHeights)) obj.consensusStateHeights = object.consensusStateHeights.map((e: any) => Height.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryConsensusStateHeightsResponse): JsonSafe<QueryConsensusStateHeightsResponse> {
    const obj: any = {};
    if (message.consensusStateHeights) {
      obj.consensusStateHeights = message.consensusStateHeights.map(e => e ? Height.toJSON(e) : undefined);
    } else {
      obj.consensusStateHeights = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryConsensusStateHeightsResponse>): QueryConsensusStateHeightsResponse {
    const message = createBaseQueryConsensusStateHeightsResponse();
    message.consensusStateHeights = object.consensusStateHeights?.map(e => Height.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
  fromAmino(object: QueryConsensusStateHeightsResponseAmino): QueryConsensusStateHeightsResponse {
    const message = createBaseQueryConsensusStateHeightsResponse();
    message.consensusStateHeights = object.consensus_state_heights?.map(e => Height.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryConsensusStateHeightsResponse): QueryConsensusStateHeightsResponseAmino {
    const obj: any = {};
    if (message.consensusStateHeights) {
      obj.consensus_state_heights = message.consensusStateHeights.map(e => e ? Height.toAmino(e) : undefined);
    } else {
      obj.consensus_state_heights = message.consensusStateHeights;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryConsensusStateHeightsResponseAminoMsg): QueryConsensusStateHeightsResponse {
    return QueryConsensusStateHeightsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryConsensusStateHeightsResponse): QueryConsensusStateHeightsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryConsensusStateHeightsResponse",
      value: QueryConsensusStateHeightsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryConsensusStateHeightsResponseProtoMsg): QueryConsensusStateHeightsResponse {
    return QueryConsensusStateHeightsResponse.decode(message.value);
  },
  toProto(message: QueryConsensusStateHeightsResponse): Uint8Array {
    return QueryConsensusStateHeightsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryConsensusStateHeightsResponse): QueryConsensusStateHeightsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryConsensusStateHeightsResponse",
      value: QueryConsensusStateHeightsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryConsensusStateHeightsResponse.typeUrl, QueryConsensusStateHeightsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryConsensusStateHeightsResponse.aminoType, QueryConsensusStateHeightsResponse.typeUrl);
function createBaseQueryClientStatusRequest(): QueryClientStatusRequest {
  return {
    clientId: ""
  };
}
export const QueryClientStatusRequest = {
  typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
  aminoType: "cosmos-sdk/QueryClientStatusRequest",
  is(o: any): o is QueryClientStatusRequest {
    return o && (o.$typeUrl === QueryClientStatusRequest.typeUrl || typeof o.clientId === "string");
  },
  isAmino(o: any): o is QueryClientStatusRequestAmino {
    return o && (o.$typeUrl === QueryClientStatusRequest.typeUrl || typeof o.client_id === "string");
  },
  encode(message: QueryClientStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClientStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStatusRequest {
    const obj = createBaseQueryClientStatusRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    return obj;
  },
  toJSON(message: QueryClientStatusRequest): JsonSafe<QueryClientStatusRequest> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial(object: Partial<QueryClientStatusRequest>): QueryClientStatusRequest {
    const message = createBaseQueryClientStatusRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(object: QueryClientStatusRequestAmino): QueryClientStatusRequest {
    const message = createBaseQueryClientStatusRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    return message;
  },
  toAmino(message: QueryClientStatusRequest): QueryClientStatusRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    return obj;
  },
  fromAminoMsg(object: QueryClientStatusRequestAminoMsg): QueryClientStatusRequest {
    return QueryClientStatusRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientStatusRequest): QueryClientStatusRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientStatusRequest",
      value: QueryClientStatusRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientStatusRequestProtoMsg): QueryClientStatusRequest {
    return QueryClientStatusRequest.decode(message.value);
  },
  toProto(message: QueryClientStatusRequest): Uint8Array {
    return QueryClientStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStatusRequest): QueryClientStatusRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStatusRequest",
      value: QueryClientStatusRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClientStatusRequest.typeUrl, QueryClientStatusRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClientStatusRequest.aminoType, QueryClientStatusRequest.typeUrl);
function createBaseQueryClientStatusResponse(): QueryClientStatusResponse {
  return {
    status: ""
  };
}
export const QueryClientStatusResponse = {
  typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
  aminoType: "cosmos-sdk/QueryClientStatusResponse",
  is(o: any): o is QueryClientStatusResponse {
    return o && (o.$typeUrl === QueryClientStatusResponse.typeUrl || typeof o.status === "string");
  },
  isAmino(o: any): o is QueryClientStatusResponseAmino {
    return o && (o.$typeUrl === QueryClientStatusResponse.typeUrl || typeof o.status === "string");
  },
  encode(message: QueryClientStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClientStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStatusResponse {
    const obj = createBaseQueryClientStatusResponse();
    if (isSet(object.status)) obj.status = String(object.status);
    return obj;
  },
  toJSON(message: QueryClientStatusResponse): JsonSafe<QueryClientStatusResponse> {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },
  fromPartial(object: Partial<QueryClientStatusResponse>): QueryClientStatusResponse {
    const message = createBaseQueryClientStatusResponse();
    message.status = object.status ?? "";
    return message;
  },
  fromAmino(object: QueryClientStatusResponseAmino): QueryClientStatusResponse {
    const message = createBaseQueryClientStatusResponse();
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    }
    return message;
  },
  toAmino(message: QueryClientStatusResponse): QueryClientStatusResponseAmino {
    const obj: any = {};
    obj.status = message.status === "" ? undefined : message.status;
    return obj;
  },
  fromAminoMsg(object: QueryClientStatusResponseAminoMsg): QueryClientStatusResponse {
    return QueryClientStatusResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientStatusResponse): QueryClientStatusResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientStatusResponse",
      value: QueryClientStatusResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientStatusResponseProtoMsg): QueryClientStatusResponse {
    return QueryClientStatusResponse.decode(message.value);
  },
  toProto(message: QueryClientStatusResponse): Uint8Array {
    return QueryClientStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientStatusResponse): QueryClientStatusResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientStatusResponse",
      value: QueryClientStatusResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClientStatusResponse.typeUrl, QueryClientStatusResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClientStatusResponse.aminoType, QueryClientStatusResponse.typeUrl);
function createBaseQueryClientParamsRequest(): QueryClientParamsRequest {
  return {};
}
export const QueryClientParamsRequest = {
  typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
  aminoType: "cosmos-sdk/QueryClientParamsRequest",
  is(o: any): o is QueryClientParamsRequest {
    return o && o.$typeUrl === QueryClientParamsRequest.typeUrl;
  },
  isAmino(o: any): o is QueryClientParamsRequestAmino {
    return o && o.$typeUrl === QueryClientParamsRequest.typeUrl;
  },
  encode(_: QueryClientParamsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClientParamsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsRequest();
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
  fromJSON(_: any): QueryClientParamsRequest {
    const obj = createBaseQueryClientParamsRequest();
    return obj;
  },
  toJSON(_: QueryClientParamsRequest): JsonSafe<QueryClientParamsRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryClientParamsRequest>): QueryClientParamsRequest {
    const message = createBaseQueryClientParamsRequest();
    return message;
  },
  fromAmino(_: QueryClientParamsRequestAmino): QueryClientParamsRequest {
    const message = createBaseQueryClientParamsRequest();
    return message;
  },
  toAmino(_: QueryClientParamsRequest): QueryClientParamsRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryClientParamsRequestAminoMsg): QueryClientParamsRequest {
    return QueryClientParamsRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientParamsRequest): QueryClientParamsRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientParamsRequest",
      value: QueryClientParamsRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientParamsRequestProtoMsg): QueryClientParamsRequest {
    return QueryClientParamsRequest.decode(message.value);
  },
  toProto(message: QueryClientParamsRequest): Uint8Array {
    return QueryClientParamsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientParamsRequest): QueryClientParamsRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientParamsRequest",
      value: QueryClientParamsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClientParamsRequest.typeUrl, QueryClientParamsRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClientParamsRequest.aminoType, QueryClientParamsRequest.typeUrl);
function createBaseQueryClientParamsResponse(): QueryClientParamsResponse {
  return {
    params: undefined
  };
}
export const QueryClientParamsResponse = {
  typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
  aminoType: "cosmos-sdk/QueryClientParamsResponse",
  is(o: any): o is QueryClientParamsResponse {
    return o && o.$typeUrl === QueryClientParamsResponse.typeUrl;
  },
  isAmino(o: any): o is QueryClientParamsResponseAmino {
    return o && o.$typeUrl === QueryClientParamsResponse.typeUrl;
  },
  encode(message: QueryClientParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClientParamsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsResponse();
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
  fromJSON(object: any): QueryClientParamsResponse {
    const obj = createBaseQueryClientParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryClientParamsResponse): JsonSafe<QueryClientParamsResponse> {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryClientParamsResponse>): QueryClientParamsResponse {
    const message = createBaseQueryClientParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
  fromAmino(object: QueryClientParamsResponseAmino): QueryClientParamsResponse {
    const message = createBaseQueryClientParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: QueryClientParamsResponse): QueryClientParamsResponseAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryClientParamsResponseAminoMsg): QueryClientParamsResponse {
    return QueryClientParamsResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientParamsResponse): QueryClientParamsResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientParamsResponse",
      value: QueryClientParamsResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientParamsResponseProtoMsg): QueryClientParamsResponse {
    return QueryClientParamsResponse.decode(message.value);
  },
  toProto(message: QueryClientParamsResponse): Uint8Array {
    return QueryClientParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientParamsResponse): QueryClientParamsResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientParamsResponse",
      value: QueryClientParamsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClientParamsResponse.typeUrl, QueryClientParamsResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClientParamsResponse.aminoType, QueryClientParamsResponse.typeUrl);
function createBaseQueryClientCreatorRequest(): QueryClientCreatorRequest {
  return {
    clientId: ""
  };
}
export const QueryClientCreatorRequest = {
  typeUrl: "/ibc.core.client.v1.QueryClientCreatorRequest",
  aminoType: "cosmos-sdk/QueryClientCreatorRequest",
  is(o: any): o is QueryClientCreatorRequest {
    return o && (o.$typeUrl === QueryClientCreatorRequest.typeUrl || typeof o.clientId === "string");
  },
  isAmino(o: any): o is QueryClientCreatorRequestAmino {
    return o && (o.$typeUrl === QueryClientCreatorRequest.typeUrl || typeof o.client_id === "string");
  },
  encode(message: QueryClientCreatorRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClientCreatorRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientCreatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientCreatorRequest {
    const obj = createBaseQueryClientCreatorRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    return obj;
  },
  toJSON(message: QueryClientCreatorRequest): JsonSafe<QueryClientCreatorRequest> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial(object: Partial<QueryClientCreatorRequest>): QueryClientCreatorRequest {
    const message = createBaseQueryClientCreatorRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
  fromAmino(object: QueryClientCreatorRequestAmino): QueryClientCreatorRequest {
    const message = createBaseQueryClientCreatorRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    return message;
  },
  toAmino(message: QueryClientCreatorRequest): QueryClientCreatorRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    return obj;
  },
  fromAminoMsg(object: QueryClientCreatorRequestAminoMsg): QueryClientCreatorRequest {
    return QueryClientCreatorRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientCreatorRequest): QueryClientCreatorRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientCreatorRequest",
      value: QueryClientCreatorRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientCreatorRequestProtoMsg): QueryClientCreatorRequest {
    return QueryClientCreatorRequest.decode(message.value);
  },
  toProto(message: QueryClientCreatorRequest): Uint8Array {
    return QueryClientCreatorRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryClientCreatorRequest): QueryClientCreatorRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientCreatorRequest",
      value: QueryClientCreatorRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClientCreatorRequest.typeUrl, QueryClientCreatorRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClientCreatorRequest.aminoType, QueryClientCreatorRequest.typeUrl);
function createBaseQueryClientCreatorResponse(): QueryClientCreatorResponse {
  return {
    creator: ""
  };
}
export const QueryClientCreatorResponse = {
  typeUrl: "/ibc.core.client.v1.QueryClientCreatorResponse",
  aminoType: "cosmos-sdk/QueryClientCreatorResponse",
  is(o: any): o is QueryClientCreatorResponse {
    return o && (o.$typeUrl === QueryClientCreatorResponse.typeUrl || typeof o.creator === "string");
  },
  isAmino(o: any): o is QueryClientCreatorResponseAmino {
    return o && (o.$typeUrl === QueryClientCreatorResponse.typeUrl || typeof o.creator === "string");
  },
  encode(message: QueryClientCreatorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryClientCreatorResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientCreatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientCreatorResponse {
    const obj = createBaseQueryClientCreatorResponse();
    if (isSet(object.creator)) obj.creator = String(object.creator);
    return obj;
  },
  toJSON(message: QueryClientCreatorResponse): JsonSafe<QueryClientCreatorResponse> {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },
  fromPartial(object: Partial<QueryClientCreatorResponse>): QueryClientCreatorResponse {
    const message = createBaseQueryClientCreatorResponse();
    message.creator = object.creator ?? "";
    return message;
  },
  fromAmino(object: QueryClientCreatorResponseAmino): QueryClientCreatorResponse {
    const message = createBaseQueryClientCreatorResponse();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    }
    return message;
  },
  toAmino(message: QueryClientCreatorResponse): QueryClientCreatorResponseAmino {
    const obj: any = {};
    obj.creator = message.creator === "" ? undefined : message.creator;
    return obj;
  },
  fromAminoMsg(object: QueryClientCreatorResponseAminoMsg): QueryClientCreatorResponse {
    return QueryClientCreatorResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryClientCreatorResponse): QueryClientCreatorResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryClientCreatorResponse",
      value: QueryClientCreatorResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryClientCreatorResponseProtoMsg): QueryClientCreatorResponse {
    return QueryClientCreatorResponse.decode(message.value);
  },
  toProto(message: QueryClientCreatorResponse): Uint8Array {
    return QueryClientCreatorResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryClientCreatorResponse): QueryClientCreatorResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryClientCreatorResponse",
      value: QueryClientCreatorResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryClientCreatorResponse.typeUrl, QueryClientCreatorResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryClientCreatorResponse.aminoType, QueryClientCreatorResponse.typeUrl);
function createBaseQueryUpgradedClientStateRequest(): QueryUpgradedClientStateRequest {
  return {};
}
export const QueryUpgradedClientStateRequest = {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
  aminoType: "cosmos-sdk/QueryUpgradedClientStateRequest",
  is(o: any): o is QueryUpgradedClientStateRequest {
    return o && o.$typeUrl === QueryUpgradedClientStateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryUpgradedClientStateRequestAmino {
    return o && o.$typeUrl === QueryUpgradedClientStateRequest.typeUrl;
  },
  encode(_: QueryUpgradedClientStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedClientStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateRequest();
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
  fromJSON(_: any): QueryUpgradedClientStateRequest {
    const obj = createBaseQueryUpgradedClientStateRequest();
    return obj;
  },
  toJSON(_: QueryUpgradedClientStateRequest): JsonSafe<QueryUpgradedClientStateRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryUpgradedClientStateRequest>): QueryUpgradedClientStateRequest {
    const message = createBaseQueryUpgradedClientStateRequest();
    return message;
  },
  fromAmino(_: QueryUpgradedClientStateRequestAmino): QueryUpgradedClientStateRequest {
    const message = createBaseQueryUpgradedClientStateRequest();
    return message;
  },
  toAmino(_: QueryUpgradedClientStateRequest): QueryUpgradedClientStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryUpgradedClientStateRequestAminoMsg): QueryUpgradedClientStateRequest {
    return QueryUpgradedClientStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradedClientStateRequest): QueryUpgradedClientStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradedClientStateRequest",
      value: QueryUpgradedClientStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradedClientStateRequestProtoMsg): QueryUpgradedClientStateRequest {
    return QueryUpgradedClientStateRequest.decode(message.value);
  },
  toProto(message: QueryUpgradedClientStateRequest): Uint8Array {
    return QueryUpgradedClientStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedClientStateRequest): QueryUpgradedClientStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateRequest",
      value: QueryUpgradedClientStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUpgradedClientStateRequest.typeUrl, QueryUpgradedClientStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUpgradedClientStateRequest.aminoType, QueryUpgradedClientStateRequest.typeUrl);
function createBaseQueryUpgradedClientStateResponse(): QueryUpgradedClientStateResponse {
  return {
    upgradedClientState: undefined
  };
}
export const QueryUpgradedClientStateResponse = {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
  aminoType: "cosmos-sdk/QueryUpgradedClientStateResponse",
  is(o: any): o is QueryUpgradedClientStateResponse {
    return o && o.$typeUrl === QueryUpgradedClientStateResponse.typeUrl;
  },
  isAmino(o: any): o is QueryUpgradedClientStateResponseAmino {
    return o && o.$typeUrl === QueryUpgradedClientStateResponse.typeUrl;
  },
  encode(message: QueryUpgradedClientStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.upgradedClientState !== undefined) {
      Any.encode(message.upgradedClientState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedClientStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUpgradedClientStateResponse {
    const obj = createBaseQueryUpgradedClientStateResponse();
    if (isSet(object.upgradedClientState)) obj.upgradedClientState = Any.fromJSON(object.upgradedClientState);
    return obj;
  },
  toJSON(message: QueryUpgradedClientStateResponse): JsonSafe<QueryUpgradedClientStateResponse> {
    const obj: any = {};
    message.upgradedClientState !== undefined && (obj.upgradedClientState = message.upgradedClientState ? Any.toJSON(message.upgradedClientState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryUpgradedClientStateResponse>): QueryUpgradedClientStateResponse {
    const message = createBaseQueryUpgradedClientStateResponse();
    if (object.upgradedClientState !== undefined && object.upgradedClientState !== null) {
      message.upgradedClientState = Any.fromPartial(object.upgradedClientState);
    }
    return message;
  },
  fromAmino(object: QueryUpgradedClientStateResponseAmino): QueryUpgradedClientStateResponse {
    const message = createBaseQueryUpgradedClientStateResponse();
    if (object.upgraded_client_state !== undefined && object.upgraded_client_state !== null) {
      message.upgradedClientState = Any.fromAmino(object.upgraded_client_state);
    }
    return message;
  },
  toAmino(message: QueryUpgradedClientStateResponse): QueryUpgradedClientStateResponseAmino {
    const obj: any = {};
    obj.upgraded_client_state = message.upgradedClientState ? Any.toAmino(message.upgradedClientState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUpgradedClientStateResponseAminoMsg): QueryUpgradedClientStateResponse {
    return QueryUpgradedClientStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradedClientStateResponse): QueryUpgradedClientStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradedClientStateResponse",
      value: QueryUpgradedClientStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradedClientStateResponseProtoMsg): QueryUpgradedClientStateResponse {
    return QueryUpgradedClientStateResponse.decode(message.value);
  },
  toProto(message: QueryUpgradedClientStateResponse): Uint8Array {
    return QueryUpgradedClientStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedClientStateResponse): QueryUpgradedClientStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryUpgradedClientStateResponse",
      value: QueryUpgradedClientStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUpgradedClientStateResponse.typeUrl, QueryUpgradedClientStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUpgradedClientStateResponse.aminoType, QueryUpgradedClientStateResponse.typeUrl);
function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
  return {};
}
export const QueryUpgradedConsensusStateRequest = {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
  aminoType: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
  is(o: any): o is QueryUpgradedConsensusStateRequest {
    return o && o.$typeUrl === QueryUpgradedConsensusStateRequest.typeUrl;
  },
  isAmino(o: any): o is QueryUpgradedConsensusStateRequestAmino {
    return o && o.$typeUrl === QueryUpgradedConsensusStateRequest.typeUrl;
  },
  encode(_: QueryUpgradedConsensusStateRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();
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
  fromJSON(_: any): QueryUpgradedConsensusStateRequest {
    const obj = createBaseQueryUpgradedConsensusStateRequest();
    return obj;
  },
  toJSON(_: QueryUpgradedConsensusStateRequest): JsonSafe<QueryUpgradedConsensusStateRequest> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    return message;
  },
  fromAmino(_: QueryUpgradedConsensusStateRequestAmino): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    return message;
  },
  toAmino(_: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: QueryUpgradedConsensusStateRequestAminoMsg): QueryUpgradedConsensusStateRequest {
    return QueryUpgradedConsensusStateRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradedConsensusStateRequest",
      value: QueryUpgradedConsensusStateRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradedConsensusStateRequestProtoMsg): QueryUpgradedConsensusStateRequest {
    return QueryUpgradedConsensusStateRequest.decode(message.value);
  },
  toProto(message: QueryUpgradedConsensusStateRequest): Uint8Array {
    return QueryUpgradedConsensusStateRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedConsensusStateRequest): QueryUpgradedConsensusStateRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateRequest",
      value: QueryUpgradedConsensusStateRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUpgradedConsensusStateRequest.typeUrl, QueryUpgradedConsensusStateRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUpgradedConsensusStateRequest.aminoType, QueryUpgradedConsensusStateRequest.typeUrl);
function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
  return {
    upgradedConsensusState: undefined
  };
}
export const QueryUpgradedConsensusStateResponse = {
  typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
  aminoType: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
  is(o: any): o is QueryUpgradedConsensusStateResponse {
    return o && o.$typeUrl === QueryUpgradedConsensusStateResponse.typeUrl;
  },
  isAmino(o: any): o is QueryUpgradedConsensusStateResponseAmino {
    return o && o.$typeUrl === QueryUpgradedConsensusStateResponse.typeUrl;
  },
  encode(message: QueryUpgradedConsensusStateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.upgradedConsensusState !== undefined) {
      Any.encode(message.upgradedConsensusState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedConsensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUpgradedConsensusStateResponse {
    const obj = createBaseQueryUpgradedConsensusStateResponse();
    if (isSet(object.upgradedConsensusState)) obj.upgradedConsensusState = Any.fromJSON(object.upgradedConsensusState);
    return obj;
  },
  toJSON(message: QueryUpgradedConsensusStateResponse): JsonSafe<QueryUpgradedConsensusStateResponse> {
    const obj: any = {};
    message.upgradedConsensusState !== undefined && (obj.upgradedConsensusState = message.upgradedConsensusState ? Any.toJSON(message.upgradedConsensusState) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    if (object.upgradedConsensusState !== undefined && object.upgradedConsensusState !== null) {
      message.upgradedConsensusState = Any.fromPartial(object.upgradedConsensusState);
    }
    return message;
  },
  fromAmino(object: QueryUpgradedConsensusStateResponseAmino): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    if (object.upgraded_consensus_state !== undefined && object.upgraded_consensus_state !== null) {
      message.upgradedConsensusState = Any.fromAmino(object.upgraded_consensus_state);
    }
    return message;
  },
  toAmino(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAmino {
    const obj: any = {};
    obj.upgraded_consensus_state = message.upgradedConsensusState ? Any.toAmino(message.upgradedConsensusState) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryUpgradedConsensusStateResponseAminoMsg): QueryUpgradedConsensusStateResponse {
    return QueryUpgradedConsensusStateResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryUpgradedConsensusStateResponse",
      value: QueryUpgradedConsensusStateResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryUpgradedConsensusStateResponseProtoMsg): QueryUpgradedConsensusStateResponse {
    return QueryUpgradedConsensusStateResponse.decode(message.value);
  },
  toProto(message: QueryUpgradedConsensusStateResponse): Uint8Array {
    return QueryUpgradedConsensusStateResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryUpgradedConsensusStateResponse): QueryUpgradedConsensusStateResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryUpgradedConsensusStateResponse",
      value: QueryUpgradedConsensusStateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryUpgradedConsensusStateResponse.typeUrl, QueryUpgradedConsensusStateResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryUpgradedConsensusStateResponse.aminoType, QueryUpgradedConsensusStateResponse.typeUrl);
function createBaseQueryVerifyMembershipRequest(): QueryVerifyMembershipRequest {
  return {
    clientId: "",
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
    value: new Uint8Array(),
    timeDelay: BigInt(0),
    blockDelay: BigInt(0),
    merklePath: MerklePath.fromPartial({})
  };
}
export const QueryVerifyMembershipRequest = {
  typeUrl: "/ibc.core.client.v1.QueryVerifyMembershipRequest",
  aminoType: "cosmos-sdk/QueryVerifyMembershipRequest",
  is(o: any): o is QueryVerifyMembershipRequest {
    return o && (o.$typeUrl === QueryVerifyMembershipRequest.typeUrl || typeof o.clientId === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.is(o.proofHeight) && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.timeDelay === "bigint" && typeof o.blockDelay === "bigint" && MerklePath.is(o.merklePath));
  },
  isAmino(o: any): o is QueryVerifyMembershipRequestAmino {
    return o && (o.$typeUrl === QueryVerifyMembershipRequest.typeUrl || typeof o.client_id === "string" && (o.proof instanceof Uint8Array || typeof o.proof === "string") && Height.isAmino(o.proof_height) && (o.value instanceof Uint8Array || typeof o.value === "string") && typeof o.time_delay === "bigint" && typeof o.block_delay === "bigint" && MerklePath.isAmino(o.merkle_path));
  },
  encode(message: QueryVerifyMembershipRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.value.length !== 0) {
      writer.uint32(42).bytes(message.value);
    }
    if (message.timeDelay !== BigInt(0)) {
      writer.uint32(48).uint64(message.timeDelay);
    }
    if (message.blockDelay !== BigInt(0)) {
      writer.uint32(56).uint64(message.blockDelay);
    }
    if (message.merklePath !== undefined) {
      MerklePath.encode(message.merklePath, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifyMembershipRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyMembershipRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        case 5:
          message.value = reader.bytes();
          break;
        case 6:
          message.timeDelay = reader.uint64();
          break;
        case 7:
          message.blockDelay = reader.uint64();
          break;
        case 8:
          message.merklePath = MerklePath.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVerifyMembershipRequest {
    const obj = createBaseQueryVerifyMembershipRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.proof)) obj.proof = bytesFromBase64(object.proof);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    if (isSet(object.value)) obj.value = bytesFromBase64(object.value);
    if (isSet(object.timeDelay)) obj.timeDelay = BigInt(object.timeDelay.toString());
    if (isSet(object.blockDelay)) obj.blockDelay = BigInt(object.blockDelay.toString());
    if (isSet(object.merklePath)) obj.merklePath = MerklePath.fromJSON(object.merklePath);
    return obj;
  },
  toJSON(message: QueryVerifyMembershipRequest): JsonSafe<QueryVerifyMembershipRequest> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.proof !== undefined && (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined && (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    message.value !== undefined && (obj.value = base64FromBytes(message.value !== undefined ? message.value : new Uint8Array()));
    message.timeDelay !== undefined && (obj.timeDelay = (message.timeDelay || BigInt(0)).toString());
    message.blockDelay !== undefined && (obj.blockDelay = (message.blockDelay || BigInt(0)).toString());
    message.merklePath !== undefined && (obj.merklePath = message.merklePath ? MerklePath.toJSON(message.merklePath) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryVerifyMembershipRequest>): QueryVerifyMembershipRequest {
    const message = createBaseQueryVerifyMembershipRequest();
    message.clientId = object.clientId ?? "";
    message.proof = object.proof ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    message.value = object.value ?? new Uint8Array();
    if (object.timeDelay !== undefined && object.timeDelay !== null) {
      message.timeDelay = BigInt(object.timeDelay.toString());
    }
    if (object.blockDelay !== undefined && object.blockDelay !== null) {
      message.blockDelay = BigInt(object.blockDelay.toString());
    }
    if (object.merklePath !== undefined && object.merklePath !== null) {
      message.merklePath = MerklePath.fromPartial(object.merklePath);
    }
    return message;
  },
  fromAmino(object: QueryVerifyMembershipRequestAmino): QueryVerifyMembershipRequest {
    const message = createBaseQueryVerifyMembershipRequest();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.proof !== undefined && object.proof !== null) {
      message.proof = bytesFromBase64(object.proof);
    }
    if (object.proof_height !== undefined && object.proof_height !== null) {
      message.proofHeight = Height.fromAmino(object.proof_height);
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.time_delay !== undefined && object.time_delay !== null) {
      message.timeDelay = BigInt(object.time_delay);
    }
    if (object.block_delay !== undefined && object.block_delay !== null) {
      message.blockDelay = BigInt(object.block_delay);
    }
    if (object.merkle_path !== undefined && object.merkle_path !== null) {
      message.merklePath = MerklePath.fromAmino(object.merkle_path);
    }
    return message;
  },
  toAmino(message: QueryVerifyMembershipRequest): QueryVerifyMembershipRequestAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.proof = message.proof ? base64FromBytes(message.proof) : undefined;
    obj.proof_height = message.proofHeight ? Height.toAmino(message.proofHeight) : {};
    obj.value = message.value ? base64FromBytes(message.value) : undefined;
    obj.time_delay = message.timeDelay !== BigInt(0) ? message.timeDelay?.toString() : undefined;
    obj.block_delay = message.blockDelay !== BigInt(0) ? message.blockDelay?.toString() : undefined;
    obj.merkle_path = message.merklePath ? MerklePath.toAmino(message.merklePath) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryVerifyMembershipRequestAminoMsg): QueryVerifyMembershipRequest {
    return QueryVerifyMembershipRequest.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVerifyMembershipRequest): QueryVerifyMembershipRequestAminoMsg {
    return {
      type: "cosmos-sdk/QueryVerifyMembershipRequest",
      value: QueryVerifyMembershipRequest.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVerifyMembershipRequestProtoMsg): QueryVerifyMembershipRequest {
    return QueryVerifyMembershipRequest.decode(message.value);
  },
  toProto(message: QueryVerifyMembershipRequest): Uint8Array {
    return QueryVerifyMembershipRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryVerifyMembershipRequest): QueryVerifyMembershipRequestProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryVerifyMembershipRequest",
      value: QueryVerifyMembershipRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVerifyMembershipRequest.typeUrl, QueryVerifyMembershipRequest);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVerifyMembershipRequest.aminoType, QueryVerifyMembershipRequest.typeUrl);
function createBaseQueryVerifyMembershipResponse(): QueryVerifyMembershipResponse {
  return {
    success: false
  };
}
export const QueryVerifyMembershipResponse = {
  typeUrl: "/ibc.core.client.v1.QueryVerifyMembershipResponse",
  aminoType: "cosmos-sdk/QueryVerifyMembershipResponse",
  is(o: any): o is QueryVerifyMembershipResponse {
    return o && (o.$typeUrl === QueryVerifyMembershipResponse.typeUrl || typeof o.success === "boolean");
  },
  isAmino(o: any): o is QueryVerifyMembershipResponseAmino {
    return o && (o.$typeUrl === QueryVerifyMembershipResponse.typeUrl || typeof o.success === "boolean");
  },
  encode(message: QueryVerifyMembershipResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.success === true) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryVerifyMembershipResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryVerifyMembershipResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.success = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryVerifyMembershipResponse {
    const obj = createBaseQueryVerifyMembershipResponse();
    if (isSet(object.success)) obj.success = Boolean(object.success);
    return obj;
  },
  toJSON(message: QueryVerifyMembershipResponse): JsonSafe<QueryVerifyMembershipResponse> {
    const obj: any = {};
    message.success !== undefined && (obj.success = message.success);
    return obj;
  },
  fromPartial(object: Partial<QueryVerifyMembershipResponse>): QueryVerifyMembershipResponse {
    const message = createBaseQueryVerifyMembershipResponse();
    message.success = object.success ?? false;
    return message;
  },
  fromAmino(object: QueryVerifyMembershipResponseAmino): QueryVerifyMembershipResponse {
    const message = createBaseQueryVerifyMembershipResponse();
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    }
    return message;
  },
  toAmino(message: QueryVerifyMembershipResponse): QueryVerifyMembershipResponseAmino {
    const obj: any = {};
    obj.success = message.success === false ? undefined : message.success;
    return obj;
  },
  fromAminoMsg(object: QueryVerifyMembershipResponseAminoMsg): QueryVerifyMembershipResponse {
    return QueryVerifyMembershipResponse.fromAmino(object.value);
  },
  toAminoMsg(message: QueryVerifyMembershipResponse): QueryVerifyMembershipResponseAminoMsg {
    return {
      type: "cosmos-sdk/QueryVerifyMembershipResponse",
      value: QueryVerifyMembershipResponse.toAmino(message)
    };
  },
  fromProtoMsg(message: QueryVerifyMembershipResponseProtoMsg): QueryVerifyMembershipResponse {
    return QueryVerifyMembershipResponse.decode(message.value);
  },
  toProto(message: QueryVerifyMembershipResponse): Uint8Array {
    return QueryVerifyMembershipResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryVerifyMembershipResponse): QueryVerifyMembershipResponseProtoMsg {
    return {
      typeUrl: "/ibc.core.client.v1.QueryVerifyMembershipResponse",
      value: QueryVerifyMembershipResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryVerifyMembershipResponse.typeUrl, QueryVerifyMembershipResponse);
GlobalDecoderRegistry.registerAminoProtoMapping(QueryVerifyMembershipResponse.aminoType, QueryVerifyMembershipResponse.typeUrl);
/** Query provides defines the gRPC querier service */
export interface Query {
  /** ClientState queries an IBC light client. */
  ClientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
  /** ClientStates queries all the IBC light clients of a chain. */
  ClientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
  /**
   * ConsensusState queries a consensus state associated with a client state at
   * a given height.
   */
  ConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
  /**
   * ConsensusStates queries all the consensus state associated with a given
   * client.
   */
  ConsensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
  /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
  ConsensusStateHeights(request: QueryConsensusStateHeightsRequest): Promise<QueryConsensusStateHeightsResponse>;
  /** Status queries the status of an IBC client. */
  ClientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
  /** ClientParams queries all parameters of the ibc client submodule. */
  ClientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
  /** ClientCreator queries the creator of a given client. */
  ClientCreator(request: QueryClientCreatorRequest): Promise<QueryClientCreatorResponse>;
  /** UpgradedClientState queries an Upgraded IBC light client. */
  UpgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
  /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
  UpgradedConsensusState(request?: QueryUpgradedConsensusStateRequest): Promise<QueryUpgradedConsensusStateResponse>;
  /** VerifyMembership queries an IBC light client for proof verification of a value at a given key path. */
  VerifyMembership(request: QueryVerifyMembershipRequest): Promise<QueryVerifyMembershipResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
    this.ClientState = this.ClientState.bind(this);
    this.ClientStates = this.ClientStates.bind(this);
    this.ConsensusState = this.ConsensusState.bind(this);
    this.ConsensusStates = this.ConsensusStates.bind(this);
    this.ConsensusStateHeights = this.ConsensusStateHeights.bind(this);
    this.ClientStatus = this.ClientStatus.bind(this);
    this.ClientParams = this.ClientParams.bind(this);
    this.ClientCreator = this.ClientCreator.bind(this);
    this.UpgradedClientState = this.UpgradedClientState.bind(this);
    this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
    this.VerifyMembership = this.VerifyMembership.bind(this);
  }
  ClientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse> {
    const data = QueryClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
    return promise.then(data => QueryClientStateResponse.decode(new BinaryReader(data)));
  }
  ClientStates(request: QueryClientStatesRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryClientStatesResponse> {
    const data = QueryClientStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
    return promise.then(data => QueryClientStatesResponse.decode(new BinaryReader(data)));
  }
  ConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse> {
    const data = QueryConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
    return promise.then(data => QueryConsensusStateResponse.decode(new BinaryReader(data)));
  }
  ConsensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse> {
    const data = QueryConsensusStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
    return promise.then(data => QueryConsensusStatesResponse.decode(new BinaryReader(data)));
  }
  ConsensusStateHeights(request: QueryConsensusStateHeightsRequest): Promise<QueryConsensusStateHeightsResponse> {
    const data = QueryConsensusStateHeightsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStateHeights", data);
    return promise.then(data => QueryConsensusStateHeightsResponse.decode(new BinaryReader(data)));
  }
  ClientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse> {
    const data = QueryClientStatusRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
    return promise.then(data => QueryClientStatusResponse.decode(new BinaryReader(data)));
  }
  ClientParams(request: QueryClientParamsRequest = {}): Promise<QueryClientParamsResponse> {
    const data = QueryClientParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
    return promise.then(data => QueryClientParamsResponse.decode(new BinaryReader(data)));
  }
  ClientCreator(request: QueryClientCreatorRequest): Promise<QueryClientCreatorResponse> {
    const data = QueryClientCreatorRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientCreator", data);
    return promise.then(data => QueryClientCreatorResponse.decode(new BinaryReader(data)));
  }
  UpgradedClientState(request: QueryUpgradedClientStateRequest = {}): Promise<QueryUpgradedClientStateResponse> {
    const data = QueryUpgradedClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
    return promise.then(data => QueryUpgradedClientStateResponse.decode(new BinaryReader(data)));
  }
  UpgradedConsensusState(request: QueryUpgradedConsensusStateRequest = {}): Promise<QueryUpgradedConsensusStateResponse> {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
    return promise.then(data => QueryUpgradedConsensusStateResponse.decode(new BinaryReader(data)));
  }
  VerifyMembership(request: QueryVerifyMembershipRequest): Promise<QueryVerifyMembershipResponse> {
    const data = QueryVerifyMembershipRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "VerifyMembership", data);
    return promise.then(data => QueryVerifyMembershipResponse.decode(new BinaryReader(data)));
  }
}