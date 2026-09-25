/* eslint-disable */
import { GenesisState as GenesisState1 } from "../../client/v1/genesis";
import { GenesisStateAmino as GenesisState1Amino } from "../../client/v1/genesis";
import { GenesisState as GenesisState2 } from "../../connection/v1/genesis";
import { GenesisStateAmino as GenesisState2Amino } from "../../connection/v1/genesis";
import { GenesisState as GenesisState3 } from "../../channel/v1/genesis";
import { GenesisStateAmino as GenesisState3Amino } from "../../channel/v1/genesis";
import { GenesisState as GenesisState4 } from "../../client/v2/genesis";
import { GenesisStateAmino as GenesisState4Amino } from "../../client/v2/genesis";
import { GenesisState as GenesisState5 } from "../../channel/v2/genesis";
import { GenesisStateAmino as GenesisState5Amino } from "../../channel/v2/genesis";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.core.types.v1";
/** GenesisState defines the ibc module's genesis state. */
export interface GenesisState {
  /** ICS002 - Clients genesis state */
  clientGenesis: GenesisState1 | undefined;
  /** ICS003 - Connections genesis state */
  connectionGenesis: GenesisState2 | undefined;
  /** ICS004 - Channel genesis state */
  channelGenesis: GenesisState3 | undefined;
  /** ICS002 - Clients/v2 genesis state */
  clientV2Genesis: GenesisState4 | undefined;
  /** ICS004 - Channel/v2 genesis state */
  channelV2Genesis: GenesisState5 | undefined;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.core.types.v1.GenesisState";
  value: Uint8Array;
}
/**
 * GenesisState defines the ibc module's genesis state.
 * @name GenesisStateAmino
 * @package ibc.core.types.v1
 * @see proto type: ibc.core.types.v1.GenesisState
 */
export interface GenesisStateAmino {
  /**
   * ICS002 - Clients genesis state
   */
  client_genesis?: GenesisState1Amino | undefined;
  /**
   * ICS003 - Connections genesis state
   */
  connection_genesis?: GenesisState2Amino | undefined;
  /**
   * ICS004 - Channel genesis state
   */
  channel_genesis?: GenesisState3Amino | undefined;
  /**
   * ICS002 - Clients/v2 genesis state
   */
  client_v2_genesis?: GenesisState4Amino | undefined;
  /**
   * ICS004 - Channel/v2 genesis state
   */
  channel_v2_genesis?: GenesisState5Amino | undefined;
}
export interface GenesisStateAminoMsg {
  type: "cosmos-sdk/GenesisState";
  value: GenesisStateAmino;
}
function createBaseGenesisState(): GenesisState {
  return {
    clientGenesis: GenesisState1.fromPartial({}),
    connectionGenesis: GenesisState2.fromPartial({}),
    channelGenesis: GenesisState3.fromPartial({}),
    clientV2Genesis: GenesisState4.fromPartial({}),
    channelV2Genesis: GenesisState5.fromPartial({}),
  };
}
export const GenesisState = {
  typeUrl: "/ibc.core.types.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientGenesis !== undefined) {
      GenesisState1.encode(message.clientGenesis, writer.uint32(10).fork()).ldelim();
    }
    if (message.connectionGenesis !== undefined) {
      GenesisState2.encode(message.connectionGenesis, writer.uint32(18).fork()).ldelim();
    }
    if (message.channelGenesis !== undefined) {
      GenesisState3.encode(message.channelGenesis, writer.uint32(26).fork()).ldelim();
    }
    if (message.clientV2Genesis !== undefined) {
      GenesisState4.encode(message.clientV2Genesis, writer.uint32(34).fork()).ldelim();
    }
    if (message.channelV2Genesis !== undefined) {
      GenesisState5.encode(message.channelV2Genesis, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientGenesis = GenesisState1.decode(reader, reader.uint32());
          break;
        case 2:
          message.connectionGenesis = GenesisState2.decode(reader, reader.uint32());
          break;
        case 3:
          message.channelGenesis = GenesisState3.decode(reader, reader.uint32());
          break;
        case 4:
          message.clientV2Genesis = GenesisState4.decode(reader, reader.uint32());
          break;
        case 5:
          message.channelV2Genesis = GenesisState5.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    const obj = createBaseGenesisState();
    if (isSet(object.clientGenesis)) obj.clientGenesis = GenesisState1.fromJSON(object.clientGenesis);
    if (isSet(object.connectionGenesis))
      obj.connectionGenesis = GenesisState2.fromJSON(object.connectionGenesis);
    if (isSet(object.channelGenesis)) obj.channelGenesis = GenesisState3.fromJSON(object.channelGenesis);
    if (isSet(object.clientV2Genesis)) obj.clientV2Genesis = GenesisState4.fromJSON(object.clientV2Genesis);
    if (isSet(object.channelV2Genesis))
      obj.channelV2Genesis = GenesisState5.fromJSON(object.channelV2Genesis);
    return obj;
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    message.clientGenesis !== undefined &&
      (obj.clientGenesis = message.clientGenesis ? GenesisState1.toJSON(message.clientGenesis) : undefined);
    message.connectionGenesis !== undefined &&
      (obj.connectionGenesis = message.connectionGenesis
        ? GenesisState2.toJSON(message.connectionGenesis)
        : undefined);
    message.channelGenesis !== undefined &&
      (obj.channelGenesis = message.channelGenesis
        ? GenesisState3.toJSON(message.channelGenesis)
        : undefined);
    message.clientV2Genesis !== undefined &&
      (obj.clientV2Genesis = message.clientV2Genesis
        ? GenesisState4.toJSON(message.clientV2Genesis)
        : undefined);
    message.channelV2Genesis !== undefined &&
      (obj.channelV2Genesis = message.channelV2Genesis
        ? GenesisState5.toJSON(message.channelV2Genesis)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    if (object.clientGenesis !== undefined && object.clientGenesis !== null) {
      message.clientGenesis = GenesisState1.fromPartial(object.clientGenesis);
    }
    if (object.connectionGenesis !== undefined && object.connectionGenesis !== null) {
      message.connectionGenesis = GenesisState2.fromPartial(object.connectionGenesis);
    }
    if (object.channelGenesis !== undefined && object.channelGenesis !== null) {
      message.channelGenesis = GenesisState3.fromPartial(object.channelGenesis);
    }
    if (object.clientV2Genesis !== undefined && object.clientV2Genesis !== null) {
      message.clientV2Genesis = GenesisState4.fromPartial(object.clientV2Genesis);
    }
    if (object.channelV2Genesis !== undefined && object.channelV2Genesis !== null) {
      message.channelV2Genesis = GenesisState5.fromPartial(object.channelV2Genesis);
    }
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.client_genesis !== undefined && object.client_genesis !== null) {
      message.clientGenesis = GenesisState1.fromAmino(object.client_genesis);
    }
    if (object.connection_genesis !== undefined && object.connection_genesis !== null) {
      message.connectionGenesis = GenesisState2.fromAmino(object.connection_genesis);
    }
    if (object.channel_genesis !== undefined && object.channel_genesis !== null) {
      message.channelGenesis = GenesisState3.fromAmino(object.channel_genesis);
    }
    if (object.client_v2_genesis !== undefined && object.client_v2_genesis !== null) {
      message.clientV2Genesis = GenesisState4.fromAmino(object.client_v2_genesis);
    }
    if (object.channel_v2_genesis !== undefined && object.channel_v2_genesis !== null) {
      message.channelV2Genesis = GenesisState5.fromAmino(object.channel_v2_genesis);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.client_genesis = message.clientGenesis ? GenesisState1.toAmino(message.clientGenesis) : undefined;
    obj.connection_genesis = message.connectionGenesis
      ? GenesisState2.toAmino(message.connectionGenesis)
      : undefined;
    obj.channel_genesis = message.channelGenesis ? GenesisState3.toAmino(message.channelGenesis) : undefined;
    obj.client_v2_genesis = message.clientV2Genesis
      ? GenesisState4.toAmino(message.clientV2Genesis)
      : undefined;
    obj.channel_v2_genesis = message.channelV2Genesis
      ? GenesisState5.toAmino(message.channelV2Genesis)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message),
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.core.types.v1.GenesisState",
      value: GenesisState.encode(message).finish(),
    };
  },
};
