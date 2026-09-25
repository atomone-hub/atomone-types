/* eslint-disable */
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { JsonSafe } from "../../../json-safe";
import { GlobalDecoderRegistry } from "../../../registry";
export const protobufPackage = "cosmos.dynamicfee.v1";
/**
 * Params contains the required set of parameters for the EIP1559 dynamic fee
 * pricing implementation.
 */
export interface Params {
  /**
   * Alpha is the amount we additively increase the learning rate
   * when it is above or below the target +/- threshold.
   *
   * Must be > 0.
   */
  alpha: string;
  /**
   * Beta is the amount we multiplicatively decrease the learning rate
   * when it is within the target +/- threshold.
   *
   * Must be [0, 1].
   */
  beta: string;
  /**
   * Gamma is the threshold for the learning rate. If the learning rate is
   * above or below the target +/- threshold, we additively increase the
   * learning rate by Alpha. Otherwise, we multiplicatively decrease the
   * learning rate by Beta.
   *
   * Must be [0, 0.5].
   */
  gamma: string;
  /**
   * MinBaseGasPrice determines the initial gas price of the module and the
   * global minimum for the network.
   */
  minBaseGasPrice: string;
  /**
   * TargetBlockUtilization is the target block utilization expressed as a
   * decimal value between 0 and 1. It is the target percentage utilization
   * of the block in relation to the consensus_params.block.max_gas parameter.
   */
  targetBlockUtilization: string;
  /**
   * DefaultMaxBlockGas is the default max block gas.
   * This parameter is used by the dynamicfee module
   * in the case consensus_params.block.max_gas returns 0 or -1.
   */
  defaultMaxBlockGas: bigint;
  /** MinLearningRate is the lower bound for the learning rate. */
  minLearningRate: string;
  /** MaxLearningRate is the upper bound for the learning rate. */
  maxLearningRate: string;
  /**
   * Window defines the window size for calculating an adaptive learning rate
   * over a moving window of blocks.
   */
  window: bigint;
  /** FeeDenom is the denom that will be used for all fee payments. */
  feeDenom: string;
  /**
   * Enabled is a boolean that determines whether the EIP1559 dynamic fee
   * pricing is enabled.
   */
  enabled: boolean;
}
export interface ParamsProtoMsg {
  typeUrl: "/cosmos.dynamicfee.v1.Params";
  value: Uint8Array;
}
/**
 * Params contains the required set of parameters for the EIP1559 dynamic fee
 * pricing implementation.
 * @name ParamsAmino
 * @package cosmos.dynamicfee.v1
 * @see proto type: cosmos.dynamicfee.v1.Params
 */
export interface ParamsAmino {
  /**
   * Alpha is the amount we additively increase the learning rate
   * when it is above or below the target +/- threshold.
   *
   * Must be > 0.
   */
  alpha?: string;
  /**
   * Beta is the amount we multiplicatively decrease the learning rate
   * when it is within the target +/- threshold.
   *
   * Must be [0, 1].
   */
  beta?: string;
  /**
   * Gamma is the threshold for the learning rate. If the learning rate is
   * above or below the target +/- threshold, we additively increase the
   * learning rate by Alpha. Otherwise, we multiplicatively decrease the
   * learning rate by Beta.
   *
   * Must be [0, 0.5].
   */
  gamma?: string;
  /**
   * MinBaseGasPrice determines the initial gas price of the module and the
   * global minimum for the network.
   */
  min_base_gas_price?: string;
  /**
   * TargetBlockUtilization is the target block utilization expressed as a
   * decimal value between 0 and 1. It is the target percentage utilization
   * of the block in relation to the consensus_params.block.max_gas parameter.
   */
  target_block_utilization?: string;
  /**
   * DefaultMaxBlockGas is the default max block gas.
   * This parameter is used by the dynamicfee module
   * in the case consensus_params.block.max_gas returns 0 or -1.
   */
  default_max_block_gas?: string;
  /**
   * MinLearningRate is the lower bound for the learning rate.
   */
  min_learning_rate?: string;
  /**
   * MaxLearningRate is the upper bound for the learning rate.
   */
  max_learning_rate?: string;
  /**
   * Window defines the window size for calculating an adaptive learning rate
   * over a moving window of blocks.
   */
  window?: string;
  /**
   * FeeDenom is the denom that will be used for all fee payments.
   */
  fee_denom?: string;
  /**
   * Enabled is a boolean that determines whether the EIP1559 dynamic fee
   * pricing is enabled.
   */
  enabled?: boolean;
}
export interface ParamsAminoMsg {
  type: "cosmos-sdk/Params";
  value: ParamsAmino;
}
function createBaseParams(): Params {
  return {
    alpha: "",
    beta: "",
    gamma: "",
    minBaseGasPrice: "",
    targetBlockUtilization: "",
    defaultMaxBlockGas: BigInt(0),
    minLearningRate: "",
    maxLearningRate: "",
    window: BigInt(0),
    feeDenom: "",
    enabled: false,
  };
}
export const Params = {
  typeUrl: "/cosmos.dynamicfee.v1.Params",
  aminoType: "cosmos-sdk/Params",
  is(o: any): o is Params {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        (typeof o.alpha === "string" &&
          typeof o.beta === "string" &&
          typeof o.gamma === "string" &&
          typeof o.minBaseGasPrice === "string" &&
          typeof o.targetBlockUtilization === "string" &&
          typeof o.defaultMaxBlockGas === "bigint" &&
          typeof o.minLearningRate === "string" &&
          typeof o.maxLearningRate === "string" &&
          typeof o.window === "bigint" &&
          typeof o.feeDenom === "string" &&
          typeof o.enabled === "boolean"))
    );
  },
  isAmino(o: any): o is ParamsAmino {
    return (
      o &&
      (o.$typeUrl === Params.typeUrl ||
        (typeof o.alpha === "string" &&
          typeof o.beta === "string" &&
          typeof o.gamma === "string" &&
          typeof o.min_base_gas_price === "string" &&
          typeof o.target_block_utilization === "string" &&
          typeof o.default_max_block_gas === "bigint" &&
          typeof o.min_learning_rate === "string" &&
          typeof o.max_learning_rate === "string" &&
          typeof o.window === "bigint" &&
          typeof o.fee_denom === "string" &&
          typeof o.enabled === "boolean"))
    );
  },
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.alpha !== "") {
      writer.uint32(10).string(message.alpha);
    }
    if (message.beta !== "") {
      writer.uint32(18).string(message.beta);
    }
    if (message.gamma !== "") {
      writer.uint32(26).string(message.gamma);
    }
    if (message.minBaseGasPrice !== "") {
      writer.uint32(42).string(message.minBaseGasPrice);
    }
    if (message.targetBlockUtilization !== "") {
      writer.uint32(50).string(message.targetBlockUtilization);
    }
    if (message.defaultMaxBlockGas !== BigInt(0)) {
      writer.uint32(56).uint64(message.defaultMaxBlockGas);
    }
    if (message.minLearningRate !== "") {
      writer.uint32(66).string(message.minLearningRate);
    }
    if (message.maxLearningRate !== "") {
      writer.uint32(74).string(message.maxLearningRate);
    }
    if (message.window !== BigInt(0)) {
      writer.uint32(80).uint64(message.window);
    }
    if (message.feeDenom !== "") {
      writer.uint32(90).string(message.feeDenom);
    }
    if (message.enabled === true) {
      writer.uint32(96).bool(message.enabled);
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
          message.alpha = reader.string();
          break;
        case 2:
          message.beta = reader.string();
          break;
        case 3:
          message.gamma = reader.string();
          break;
        case 5:
          message.minBaseGasPrice = reader.string();
          break;
        case 6:
          message.targetBlockUtilization = reader.string();
          break;
        case 7:
          message.defaultMaxBlockGas = reader.uint64();
          break;
        case 8:
          message.minLearningRate = reader.string();
          break;
        case 9:
          message.maxLearningRate = reader.string();
          break;
        case 10:
          message.window = reader.uint64();
          break;
        case 11:
          message.feeDenom = reader.string();
          break;
        case 12:
          message.enabled = reader.bool();
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
    if (isSet(object.alpha)) obj.alpha = String(object.alpha);
    if (isSet(object.beta)) obj.beta = String(object.beta);
    if (isSet(object.gamma)) obj.gamma = String(object.gamma);
    if (isSet(object.minBaseGasPrice)) obj.minBaseGasPrice = String(object.minBaseGasPrice);
    if (isSet(object.targetBlockUtilization))
      obj.targetBlockUtilization = String(object.targetBlockUtilization);
    if (isSet(object.defaultMaxBlockGas))
      obj.defaultMaxBlockGas = BigInt(object.defaultMaxBlockGas.toString());
    if (isSet(object.minLearningRate)) obj.minLearningRate = String(object.minLearningRate);
    if (isSet(object.maxLearningRate)) obj.maxLearningRate = String(object.maxLearningRate);
    if (isSet(object.window)) obj.window = BigInt(object.window.toString());
    if (isSet(object.feeDenom)) obj.feeDenom = String(object.feeDenom);
    if (isSet(object.enabled)) obj.enabled = Boolean(object.enabled);
    return obj;
  },
  toJSON(message: Params): JsonSafe<Params> {
    const obj: any = {};
    message.alpha !== undefined && (obj.alpha = message.alpha);
    message.beta !== undefined && (obj.beta = message.beta);
    message.gamma !== undefined && (obj.gamma = message.gamma);
    message.minBaseGasPrice !== undefined && (obj.minBaseGasPrice = message.minBaseGasPrice);
    message.targetBlockUtilization !== undefined &&
      (obj.targetBlockUtilization = message.targetBlockUtilization);
    message.defaultMaxBlockGas !== undefined &&
      (obj.defaultMaxBlockGas = (message.defaultMaxBlockGas || BigInt(0)).toString());
    message.minLearningRate !== undefined && (obj.minLearningRate = message.minLearningRate);
    message.maxLearningRate !== undefined && (obj.maxLearningRate = message.maxLearningRate);
    message.window !== undefined && (obj.window = (message.window || BigInt(0)).toString());
    message.feeDenom !== undefined && (obj.feeDenom = message.feeDenom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    return obj;
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.alpha = object.alpha ?? "";
    message.beta = object.beta ?? "";
    message.gamma = object.gamma ?? "";
    message.minBaseGasPrice = object.minBaseGasPrice ?? "";
    message.targetBlockUtilization = object.targetBlockUtilization ?? "";
    if (object.defaultMaxBlockGas !== undefined && object.defaultMaxBlockGas !== null) {
      message.defaultMaxBlockGas = BigInt(object.defaultMaxBlockGas.toString());
    }
    message.minLearningRate = object.minLearningRate ?? "";
    message.maxLearningRate = object.maxLearningRate ?? "";
    if (object.window !== undefined && object.window !== null) {
      message.window = BigInt(object.window.toString());
    }
    message.feeDenom = object.feeDenom ?? "";
    message.enabled = object.enabled ?? false;
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    if (object.alpha !== undefined && object.alpha !== null) {
      message.alpha = object.alpha;
    }
    if (object.beta !== undefined && object.beta !== null) {
      message.beta = object.beta;
    }
    if (object.gamma !== undefined && object.gamma !== null) {
      message.gamma = object.gamma;
    }
    if (object.min_base_gas_price !== undefined && object.min_base_gas_price !== null) {
      message.minBaseGasPrice = object.min_base_gas_price;
    }
    if (object.target_block_utilization !== undefined && object.target_block_utilization !== null) {
      message.targetBlockUtilization = object.target_block_utilization;
    }
    if (object.default_max_block_gas !== undefined && object.default_max_block_gas !== null) {
      message.defaultMaxBlockGas = BigInt(object.default_max_block_gas);
    }
    if (object.min_learning_rate !== undefined && object.min_learning_rate !== null) {
      message.minLearningRate = object.min_learning_rate;
    }
    if (object.max_learning_rate !== undefined && object.max_learning_rate !== null) {
      message.maxLearningRate = object.max_learning_rate;
    }
    if (object.window !== undefined && object.window !== null) {
      message.window = BigInt(object.window);
    }
    if (object.fee_denom !== undefined && object.fee_denom !== null) {
      message.feeDenom = object.fee_denom;
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    obj.alpha = message.alpha === "" ? undefined : message.alpha;
    obj.beta = message.beta === "" ? undefined : message.beta;
    obj.gamma = message.gamma === "" ? undefined : message.gamma;
    obj.min_base_gas_price = message.minBaseGasPrice === "" ? undefined : message.minBaseGasPrice;
    obj.target_block_utilization =
      message.targetBlockUtilization === "" ? undefined : message.targetBlockUtilization;
    obj.default_max_block_gas =
      message.defaultMaxBlockGas !== BigInt(0) ? message.defaultMaxBlockGas?.toString() : undefined;
    obj.min_learning_rate = message.minLearningRate === "" ? undefined : message.minLearningRate;
    obj.max_learning_rate = message.maxLearningRate === "" ? undefined : message.maxLearningRate;
    obj.window = message.window !== BigInt(0) ? message.window?.toString() : undefined;
    obj.fee_denom = message.feeDenom === "" ? undefined : message.feeDenom;
    obj.enabled = message.enabled === false ? undefined : message.enabled;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "cosmos-sdk/Params",
      value: Params.toAmino(message),
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/cosmos.dynamicfee.v1.Params",
      value: Params.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(Params.typeUrl, Params);
GlobalDecoderRegistry.registerAminoProtoMapping(Params.aminoType, Params.typeUrl);
