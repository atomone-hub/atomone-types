/* eslint-disable */
import { Duration, DurationAmino } from "../../../google/protobuf/duration";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
export const protobufPackage = "atomone.coredaos.v1";
/** Params defines the parameters for the x/coredaos module. */
export interface Params {
  /**
   * steering_dao_address defines the address which has authority
   * to execute messages as Steering DAO.
   */
  steeringDaoAddress: string;
  /**
   * oversight_dao_address defines the address which has authority
   * to execute messages as Oversight DAO.
   */
  oversightDaoAddress: string;
  /**
   * voting_period_extensions_limit defines the maximum number of times
   * a proposal's voting period can be extended.
   */
  votingPeriodExtensionsLimit: number;
  /**
   * voting_period_extension_duration defines the duration for which
   * a proposal's voting period can be extended.
   */
  votingPeriodExtensionDuration?: Duration | undefined;
}
export interface ParamsProtoMsg {
  typeUrl: "/atomone.coredaos.v1.Params";
  value: Uint8Array;
}
/**
 * Params defines the parameters for the x/coredaos module.
 * @name ParamsAmino
 * @package atomone.coredaos.v1
 * @see proto type: atomone.coredaos.v1.Params
 */
export interface ParamsAmino {
  /**
   * steering_dao_address defines the address which has authority
   * to execute messages as Steering DAO.
   */
  steering_dao_address?: string;
  /**
   * oversight_dao_address defines the address which has authority
   * to execute messages as Oversight DAO.
   */
  oversight_dao_address?: string;
  /**
   * voting_period_extensions_limit defines the maximum number of times
   * a proposal's voting period can be extended.
   */
  voting_period_extensions_limit?: number;
  /**
   * voting_period_extension_duration defines the duration for which
   * a proposal's voting period can be extended.
   */
  voting_period_extension_duration?: DurationAmino | undefined;
}
export interface ParamsAminoMsg {
  type: "/atomone.coredaos.v1.Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    steeringDaoAddress: "",
    oversightDaoAddress: "",
    votingPeriodExtensionsLimit: 0,
    votingPeriodExtensionDuration: undefined,
  };
}
export const Params = {
  typeUrl: "/atomone.coredaos.v1.Params",
  is(o: any): o is Params {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        (typeof o.steeringDaoAddress === "string" &&
          typeof o.oversightDaoAddress === "string" &&
          typeof o.votingPeriodExtensionsLimit === "number"))
    );
  },
  isAmino(o: any): o is ParamsAmino {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        (typeof o.steering_dao_address === "string" &&
          typeof o.oversight_dao_address === "string" &&
          typeof o.voting_period_extensions_limit === "number"))
    );
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.steeringDaoAddress !== "") {
      writer.uint32(10).string(message.steeringDaoAddress);
    }
    if (message.oversightDaoAddress !== "") {
      writer.uint32(18).string(message.oversightDaoAddress);
    }
    if (message.votingPeriodExtensionsLimit !== 0) {
      writer.uint32(24).uint32(message.votingPeriodExtensionsLimit);
    }
    if (message.votingPeriodExtensionDuration !== undefined) {
      Duration.encode(message.votingPeriodExtensionDuration, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Params {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.steeringDaoAddress = reader.string();
          break;
        case 2:
          message.oversightDaoAddress = reader.string();
          break;
        case 3:
          message.votingPeriodExtensionsLimit = reader.uint32();
          break;
        case 4:
          message.votingPeriodExtensionDuration = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Params {
    const obj = createBaseParams();
    if (isSet(object.steeringDaoAddress)) obj.steeringDaoAddress = String(object.steeringDaoAddress);
    if (isSet(object.oversightDaoAddress)) obj.oversightDaoAddress = String(object.oversightDaoAddress);
    if (isSet(object.votingPeriodExtensionsLimit))
      obj.votingPeriodExtensionsLimit = Number(object.votingPeriodExtensionsLimit);
    if (isSet(object.votingPeriodExtensionDuration))
      obj.votingPeriodExtensionDuration = Duration.fromJSON(object.votingPeriodExtensionDuration);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.steeringDaoAddress !== undefined && (obj.steeringDaoAddress = message.steeringDaoAddress);
    message.oversightDaoAddress !== undefined && (obj.oversightDaoAddress = message.oversightDaoAddress);
    message.votingPeriodExtensionsLimit !== undefined &&
      (obj.votingPeriodExtensionsLimit = Math.round(message.votingPeriodExtensionsLimit));
    message.votingPeriodExtensionDuration !== undefined &&
      (obj.votingPeriodExtensionDuration = message.votingPeriodExtensionDuration
        ? Duration.toJSON(message.votingPeriodExtensionDuration)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.steeringDaoAddress = object.steeringDaoAddress ?? "";
    message.oversightDaoAddress = object.oversightDaoAddress ?? "";
    message.votingPeriodExtensionsLimit = object.votingPeriodExtensionsLimit ?? 0;
    if (object.votingPeriodExtensionDuration !== undefined && object.votingPeriodExtensionDuration !== null) {
      message.votingPeriodExtensionDuration = Duration.fromPartial(object.votingPeriodExtensionDuration);
    }
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.steering_dao_address !== undefined && object.steering_dao_address !== null) {
      message.steeringDaoAddress = object.steering_dao_address;
    }
    if (object.oversight_dao_address !== undefined && object.oversight_dao_address !== null) {
      message.oversightDaoAddress = object.oversight_dao_address;
    }
    if (
      object.voting_period_extensions_limit !== undefined &&
      object.voting_period_extensions_limit !== null
    ) {
      message.votingPeriodExtensionsLimit = object.voting_period_extensions_limit;
    }
    if (
      object.voting_period_extension_duration !== undefined &&
      object.voting_period_extension_duration !== null
    ) {
      message.votingPeriodExtensionDuration = Duration.fromAmino(object.voting_period_extension_duration);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.steering_dao_address = message.steeringDaoAddress === "" ? undefined : message.steeringDaoAddress;
    obj.oversight_dao_address = message.oversightDaoAddress === "" ? undefined : message.oversightDaoAddress;
    obj.voting_period_extensions_limit =
      message.votingPeriodExtensionsLimit === 0 ? undefined : message.votingPeriodExtensionsLimit;
    obj.voting_period_extension_duration = message.votingPeriodExtensionDuration
      ? Duration.toAmino(message.votingPeriodExtensionDuration)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/atomone.coredaos.v1.Params",
      value: Params.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
