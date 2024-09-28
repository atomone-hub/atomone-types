/* eslint-disable */
import { Vote, VoteAmino, LightBlock, LightBlockAmino } from "./types";
import { Timestamp } from "../../google/protobuf/timestamp";
import { Validator, ValidatorAmino } from "./validator";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet, fromJsonTimestamp, fromTimestamp } from "../../helpers";
import { GlobalDecoderRegistry } from "../../registry";
export const protobufPackage = "tendermint.types";
export interface Evidence {
  duplicateVoteEvidence?: DuplicateVoteEvidence | undefined;
  lightClientAttackEvidence?: LightClientAttackEvidence | undefined;
}
export interface EvidenceProtoMsg {
  typeUrl: "/tendermint.types.Evidence";
  value: Uint8Array;
}
export interface EvidenceAmino {
  duplicate_vote_evidence?: DuplicateVoteEvidenceAmino | undefined;
  light_client_attack_evidence?: LightClientAttackEvidenceAmino | undefined;
}
export interface EvidenceAminoMsg {
  type: "/tendermint.types.Evidence";
  value: EvidenceAmino;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidence {
  voteA?: Vote | undefined;
  voteB?: Vote | undefined;
  totalVotingPower: bigint;
  validatorPower: bigint;
  timestamp: Timestamp | undefined;
}
export interface DuplicateVoteEvidenceProtoMsg {
  typeUrl: "/tendermint.types.DuplicateVoteEvidence";
  value: Uint8Array;
}
/** DuplicateVoteEvidence contains evidence of a validator signed two conflicting votes. */
export interface DuplicateVoteEvidenceAmino {
  vote_a?: VoteAmino | undefined;
  vote_b?: VoteAmino | undefined;
  total_voting_power?: string;
  validator_power?: string;
  timestamp?: string | undefined;
}
export interface DuplicateVoteEvidenceAminoMsg {
  type: "/tendermint.types.DuplicateVoteEvidence";
  value: DuplicateVoteEvidenceAmino;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidence {
  conflictingBlock?: LightBlock | undefined;
  commonHeight: bigint;
  byzantineValidators: Validator[];
  totalVotingPower: bigint;
  timestamp: Timestamp | undefined;
}
export interface LightClientAttackEvidenceProtoMsg {
  typeUrl: "/tendermint.types.LightClientAttackEvidence";
  value: Uint8Array;
}
/** LightClientAttackEvidence contains evidence of a set of validators attempting to mislead a light client. */
export interface LightClientAttackEvidenceAmino {
  conflicting_block?: LightBlockAmino | undefined;
  common_height?: string;
  byzantine_validators?: ValidatorAmino[];
  total_voting_power?: string;
  timestamp?: string | undefined;
}
export interface LightClientAttackEvidenceAminoMsg {
  type: "/tendermint.types.LightClientAttackEvidence";
  value: LightClientAttackEvidenceAmino;
}
export interface EvidenceList {
  evidence: Evidence[];
}
export interface EvidenceListProtoMsg {
  typeUrl: "/tendermint.types.EvidenceList";
  value: Uint8Array;
}
export interface EvidenceListAmino {
  evidence?: EvidenceAmino[];
}
export interface EvidenceListAminoMsg {
  type: "/tendermint.types.EvidenceList";
  value: EvidenceListAmino;
}
function createBaseEvidence(): Evidence {
  return {
    duplicateVoteEvidence: undefined,
    lightClientAttackEvidence: undefined,
  };
}
export const Evidence = {
  typeUrl: "/tendermint.types.Evidence",
  is(o: any): o is Evidence {
    return o && o.$typeUrl === Evidence.typeUrl;
  },
  isAmino(o: any): o is EvidenceAmino {
    return o && o.$typeUrl === Evidence.typeUrl;
  },
  encode(message: Evidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.duplicateVoteEvidence !== undefined) {
      DuplicateVoteEvidence.encode(message.duplicateVoteEvidence, writer.uint32(10).fork()).ldelim();
    }
    if (message.lightClientAttackEvidence !== undefined) {
      LightClientAttackEvidence.encode(message.lightClientAttackEvidence, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Evidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.duplicateVoteEvidence = DuplicateVoteEvidence.decode(reader, reader.uint32());
          break;
        case 2:
          message.lightClientAttackEvidence = LightClientAttackEvidence.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Evidence {
    const obj = createBaseEvidence();
    if (isSet(object.duplicateVoteEvidence))
      obj.duplicateVoteEvidence = DuplicateVoteEvidence.fromJSON(object.duplicateVoteEvidence);
    if (isSet(object.lightClientAttackEvidence))
      obj.lightClientAttackEvidence = LightClientAttackEvidence.fromJSON(object.lightClientAttackEvidence);
    return obj;
  },
  toJSON(message: Evidence): unknown {
    const obj: any = {};
    message.duplicateVoteEvidence !== undefined &&
      (obj.duplicateVoteEvidence = message.duplicateVoteEvidence
        ? DuplicateVoteEvidence.toJSON(message.duplicateVoteEvidence)
        : undefined);
    message.lightClientAttackEvidence !== undefined &&
      (obj.lightClientAttackEvidence = message.lightClientAttackEvidence
        ? LightClientAttackEvidence.toJSON(message.lightClientAttackEvidence)
        : undefined);
    return obj;
  },
  fromPartial(object: Partial<Evidence>): Evidence {
    const message = createBaseEvidence();
    if (object.duplicateVoteEvidence !== undefined && object.duplicateVoteEvidence !== null) {
      message.duplicateVoteEvidence = DuplicateVoteEvidence.fromPartial(object.duplicateVoteEvidence);
    }
    if (object.lightClientAttackEvidence !== undefined && object.lightClientAttackEvidence !== null) {
      message.lightClientAttackEvidence = LightClientAttackEvidence.fromPartial(
        object.lightClientAttackEvidence,
      );
    }
    return message;
  },
  fromAmino(object: EvidenceAmino): Evidence {
    const message = createBaseEvidence();
    if (object.duplicate_vote_evidence !== undefined && object.duplicate_vote_evidence !== null) {
      message.duplicateVoteEvidence = DuplicateVoteEvidence.fromAmino(object.duplicate_vote_evidence);
    }
    if (object.light_client_attack_evidence !== undefined && object.light_client_attack_evidence !== null) {
      message.lightClientAttackEvidence = LightClientAttackEvidence.fromAmino(
        object.light_client_attack_evidence,
      );
    }
    return message;
  },
  toAmino(message: Evidence): EvidenceAmino {
    const obj: any = {};
    obj.duplicate_vote_evidence = message.duplicateVoteEvidence
      ? DuplicateVoteEvidence.toAmino(message.duplicateVoteEvidence)
      : undefined;
    obj.light_client_attack_evidence = message.lightClientAttackEvidence
      ? LightClientAttackEvidence.toAmino(message.lightClientAttackEvidence)
      : undefined;
    return obj;
  },
  fromAminoMsg(object: EvidenceAminoMsg): Evidence {
    return Evidence.fromAmino(object.value);
  },
  fromProtoMsg(message: EvidenceProtoMsg): Evidence {
    return Evidence.decode(message.value);
  },
  toProto(message: Evidence): Uint8Array {
    return Evidence.encode(message).finish();
  },
  toProtoMsg(message: Evidence): EvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.Evidence",
      value: Evidence.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(Evidence.typeUrl, Evidence);
function createBaseDuplicateVoteEvidence(): DuplicateVoteEvidence {
  return {
    voteA: undefined,
    voteB: undefined,
    totalVotingPower: BigInt(0),
    validatorPower: BigInt(0),
    timestamp: undefined,
  };
}
export const DuplicateVoteEvidence = {
  typeUrl: "/tendermint.types.DuplicateVoteEvidence",
  is(o: any): o is DuplicateVoteEvidence {
    return (
      o &&
      (o.$typeUrl === DuplicateVoteEvidence.typeUrl ||
        (typeof o.totalVotingPower === "bigint" &&
          typeof o.validatorPower === "bigint" &&
          Timestamp.is(o.timestamp)))
    );
  },
  isAmino(o: any): o is DuplicateVoteEvidenceAmino {
    return (
      o &&
      (o.$typeUrl === DuplicateVoteEvidence.typeUrl ||
        (typeof o.total_voting_power === "bigint" &&
          typeof o.validator_power === "bigint" &&
          Timestamp.isAmino(o.timestamp)))
    );
  },
  encode(message: DuplicateVoteEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.voteA !== undefined) {
      Vote.encode(message.voteA, writer.uint32(10).fork()).ldelim();
    }
    if (message.voteB !== undefined) {
      Vote.encode(message.voteB, writer.uint32(18).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(24).int64(message.totalVotingPower);
    }
    if (message.validatorPower !== BigInt(0)) {
      writer.uint32(32).int64(message.validatorPower);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DuplicateVoteEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDuplicateVoteEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteA = Vote.decode(reader, reader.uint32());
          break;
        case 2:
          message.voteB = Vote.decode(reader, reader.uint32());
          break;
        case 3:
          message.totalVotingPower = reader.int64();
          break;
        case 4:
          message.validatorPower = reader.int64();
          break;
        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): DuplicateVoteEvidence {
    const obj = createBaseDuplicateVoteEvidence();
    if (isSet(object.voteA)) obj.voteA = Vote.fromJSON(object.voteA);
    if (isSet(object.voteB)) obj.voteB = Vote.fromJSON(object.voteB);
    if (isSet(object.totalVotingPower)) obj.totalVotingPower = BigInt(object.totalVotingPower.toString());
    if (isSet(object.validatorPower)) obj.validatorPower = BigInt(object.validatorPower.toString());
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    return obj;
  },
  toJSON(message: DuplicateVoteEvidence): unknown {
    const obj: any = {};
    message.voteA !== undefined && (obj.voteA = message.voteA ? Vote.toJSON(message.voteA) : undefined);
    message.voteB !== undefined && (obj.voteB = message.voteB ? Vote.toJSON(message.voteB) : undefined);
    message.totalVotingPower !== undefined &&
      (obj.totalVotingPower = (message.totalVotingPower || BigInt(0)).toString());
    message.validatorPower !== undefined &&
      (obj.validatorPower = (message.validatorPower || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial(object: Partial<DuplicateVoteEvidence>): DuplicateVoteEvidence {
    const message = createBaseDuplicateVoteEvidence();
    if (object.voteA !== undefined && object.voteA !== null) {
      message.voteA = Vote.fromPartial(object.voteA);
    }
    if (object.voteB !== undefined && object.voteB !== null) {
      message.voteB = Vote.fromPartial(object.voteB);
    }
    if (object.totalVotingPower !== undefined && object.totalVotingPower !== null) {
      message.totalVotingPower = BigInt(object.totalVotingPower.toString());
    }
    if (object.validatorPower !== undefined && object.validatorPower !== null) {
      message.validatorPower = BigInt(object.validatorPower.toString());
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    return message;
  },
  fromAmino(object: DuplicateVoteEvidenceAmino): DuplicateVoteEvidence {
    const message = createBaseDuplicateVoteEvidence();
    if (object.vote_a !== undefined && object.vote_a !== null) {
      message.voteA = Vote.fromAmino(object.vote_a);
    }
    if (object.vote_b !== undefined && object.vote_b !== null) {
      message.voteB = Vote.fromAmino(object.vote_b);
    }
    if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
      message.totalVotingPower = BigInt(object.total_voting_power);
    }
    if (object.validator_power !== undefined && object.validator_power !== null) {
      message.validatorPower = BigInt(object.validator_power);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromAmino(object.timestamp);
    }
    return message;
  },
  toAmino(message: DuplicateVoteEvidence): DuplicateVoteEvidenceAmino {
    const obj: any = {};
    obj.vote_a = message.voteA ? Vote.toAmino(message.voteA) : undefined;
    obj.vote_b = message.voteB ? Vote.toAmino(message.voteB) : undefined;
    obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
    obj.validator_power = message.validatorPower ? message.validatorPower.toString() : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    return obj;
  },
  fromAminoMsg(object: DuplicateVoteEvidenceAminoMsg): DuplicateVoteEvidence {
    return DuplicateVoteEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: DuplicateVoteEvidenceProtoMsg): DuplicateVoteEvidence {
    return DuplicateVoteEvidence.decode(message.value);
  },
  toProto(message: DuplicateVoteEvidence): Uint8Array {
    return DuplicateVoteEvidence.encode(message).finish();
  },
  toProtoMsg(message: DuplicateVoteEvidence): DuplicateVoteEvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.DuplicateVoteEvidence",
      value: DuplicateVoteEvidence.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(DuplicateVoteEvidence.typeUrl, DuplicateVoteEvidence);
function createBaseLightClientAttackEvidence(): LightClientAttackEvidence {
  return {
    conflictingBlock: undefined,
    commonHeight: BigInt(0),
    byzantineValidators: [],
    totalVotingPower: BigInt(0),
    timestamp: undefined,
  };
}
export const LightClientAttackEvidence = {
  typeUrl: "/tendermint.types.LightClientAttackEvidence",
  is(o: any): o is LightClientAttackEvidence {
    return (
      o &&
      (o.$typeUrl === LightClientAttackEvidence.typeUrl ||
        (typeof o.commonHeight === "bigint" &&
          Array.isArray(o.byzantineValidators) &&
          (!o.byzantineValidators.length || Validator.is(o.byzantineValidators[0])) &&
          typeof o.totalVotingPower === "bigint" &&
          Timestamp.is(o.timestamp)))
    );
  },
  isAmino(o: any): o is LightClientAttackEvidenceAmino {
    return (
      o &&
      (o.$typeUrl === LightClientAttackEvidence.typeUrl ||
        (typeof o.common_height === "bigint" &&
          Array.isArray(o.byzantine_validators) &&
          (!o.byzantine_validators.length || Validator.isAmino(o.byzantine_validators[0])) &&
          typeof o.total_voting_power === "bigint" &&
          Timestamp.isAmino(o.timestamp)))
    );
  },
  encode(message: LightClientAttackEvidence, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.conflictingBlock !== undefined) {
      LightBlock.encode(message.conflictingBlock, writer.uint32(10).fork()).ldelim();
    }
    if (message.commonHeight !== BigInt(0)) {
      writer.uint32(16).int64(message.commonHeight);
    }
    for (const v of message.byzantineValidators) {
      Validator.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.totalVotingPower !== BigInt(0)) {
      writer.uint32(32).int64(message.totalVotingPower);
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LightClientAttackEvidence {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightClientAttackEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.conflictingBlock = LightBlock.decode(reader, reader.uint32());
          break;
        case 2:
          message.commonHeight = reader.int64();
          break;
        case 3:
          message.byzantineValidators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 4:
          message.totalVotingPower = reader.int64();
          break;
        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LightClientAttackEvidence {
    const obj = createBaseLightClientAttackEvidence();
    if (isSet(object.conflictingBlock)) obj.conflictingBlock = LightBlock.fromJSON(object.conflictingBlock);
    if (isSet(object.commonHeight)) obj.commonHeight = BigInt(object.commonHeight.toString());
    if (Array.isArray(object?.byzantineValidators))
      obj.byzantineValidators = object.byzantineValidators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.totalVotingPower)) obj.totalVotingPower = BigInt(object.totalVotingPower.toString());
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    return obj;
  },
  toJSON(message: LightClientAttackEvidence): unknown {
    const obj: any = {};
    message.conflictingBlock !== undefined &&
      (obj.conflictingBlock = message.conflictingBlock
        ? LightBlock.toJSON(message.conflictingBlock)
        : undefined);
    message.commonHeight !== undefined && (obj.commonHeight = (message.commonHeight || BigInt(0)).toString());
    if (message.byzantineValidators) {
      obj.byzantineValidators = message.byzantineValidators.map((e) => (e ? Validator.toJSON(e) : undefined));
    } else {
      obj.byzantineValidators = [];
    }
    message.totalVotingPower !== undefined &&
      (obj.totalVotingPower = (message.totalVotingPower || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    return obj;
  },
  fromPartial(object: Partial<LightClientAttackEvidence>): LightClientAttackEvidence {
    const message = createBaseLightClientAttackEvidence();
    if (object.conflictingBlock !== undefined && object.conflictingBlock !== null) {
      message.conflictingBlock = LightBlock.fromPartial(object.conflictingBlock);
    }
    if (object.commonHeight !== undefined && object.commonHeight !== null) {
      message.commonHeight = BigInt(object.commonHeight.toString());
    }
    message.byzantineValidators = object.byzantineValidators?.map((e) => Validator.fromPartial(e)) || [];
    if (object.totalVotingPower !== undefined && object.totalVotingPower !== null) {
      message.totalVotingPower = BigInt(object.totalVotingPower.toString());
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    return message;
  },
  fromAmino(object: LightClientAttackEvidenceAmino): LightClientAttackEvidence {
    const message = createBaseLightClientAttackEvidence();
    if (object.conflicting_block !== undefined && object.conflicting_block !== null) {
      message.conflictingBlock = LightBlock.fromAmino(object.conflicting_block);
    }
    if (object.common_height !== undefined && object.common_height !== null) {
      message.commonHeight = BigInt(object.common_height);
    }
    message.byzantineValidators = object.byzantine_validators?.map((e) => Validator.fromAmino(e)) || [];
    if (object.total_voting_power !== undefined && object.total_voting_power !== null) {
      message.totalVotingPower = BigInt(object.total_voting_power);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromAmino(object.timestamp);
    }
    return message;
  },
  toAmino(message: LightClientAttackEvidence): LightClientAttackEvidenceAmino {
    const obj: any = {};
    obj.conflicting_block = message.conflictingBlock
      ? LightBlock.toAmino(message.conflictingBlock)
      : undefined;
    obj.common_height = message.commonHeight ? message.commonHeight.toString() : undefined;
    if (message.byzantineValidators) {
      obj.byzantine_validators = message.byzantineValidators.map((e) =>
        e ? Validator.toAmino(e) : undefined,
      );
    } else {
      obj.byzantine_validators = [];
    }
    obj.total_voting_power = message.totalVotingPower ? message.totalVotingPower.toString() : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    return obj;
  },
  fromAminoMsg(object: LightClientAttackEvidenceAminoMsg): LightClientAttackEvidence {
    return LightClientAttackEvidence.fromAmino(object.value);
  },
  fromProtoMsg(message: LightClientAttackEvidenceProtoMsg): LightClientAttackEvidence {
    return LightClientAttackEvidence.decode(message.value);
  },
  toProto(message: LightClientAttackEvidence): Uint8Array {
    return LightClientAttackEvidence.encode(message).finish();
  },
  toProtoMsg(message: LightClientAttackEvidence): LightClientAttackEvidenceProtoMsg {
    return {
      typeUrl: "/tendermint.types.LightClientAttackEvidence",
      value: LightClientAttackEvidence.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(LightClientAttackEvidence.typeUrl, LightClientAttackEvidence);
function createBaseEvidenceList(): EvidenceList {
  return {
    evidence: [],
  };
}
export const EvidenceList = {
  typeUrl: "/tendermint.types.EvidenceList",
  is(o: any): o is EvidenceList {
    return (
      o &&
      (o.$typeUrl === EvidenceList.typeUrl ||
        (Array.isArray(o.evidence) && (!o.evidence.length || Evidence.is(o.evidence[0]))))
    );
  },
  isAmino(o: any): o is EvidenceListAmino {
    return (
      o &&
      (o.$typeUrl === EvidenceList.typeUrl ||
        (Array.isArray(o.evidence) && (!o.evidence.length || Evidence.isAmino(o.evidence[0]))))
    );
  },
  encode(message: EvidenceList, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.evidence) {
      Evidence.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): EvidenceList {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEvidenceList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Evidence.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): EvidenceList {
    const obj = createBaseEvidenceList();
    if (Array.isArray(object?.evidence)) obj.evidence = object.evidence.map((e: any) => Evidence.fromJSON(e));
    return obj;
  },
  toJSON(message: EvidenceList): unknown {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) => (e ? Evidence.toJSON(e) : undefined));
    } else {
      obj.evidence = [];
    }
    return obj;
  },
  fromPartial(object: Partial<EvidenceList>): EvidenceList {
    const message = createBaseEvidenceList();
    message.evidence = object.evidence?.map((e) => Evidence.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: EvidenceListAmino): EvidenceList {
    const message = createBaseEvidenceList();
    message.evidence = object.evidence?.map((e) => Evidence.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: EvidenceList): EvidenceListAmino {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) => (e ? Evidence.toAmino(e) : undefined));
    } else {
      obj.evidence = [];
    }
    return obj;
  },
  fromAminoMsg(object: EvidenceListAminoMsg): EvidenceList {
    return EvidenceList.fromAmino(object.value);
  },
  fromProtoMsg(message: EvidenceListProtoMsg): EvidenceList {
    return EvidenceList.decode(message.value);
  },
  toProto(message: EvidenceList): Uint8Array {
    return EvidenceList.encode(message).finish();
  },
  toProtoMsg(message: EvidenceList): EvidenceListProtoMsg {
    return {
      typeUrl: "/tendermint.types.EvidenceList",
      value: EvidenceList.encode(message).finish(),
    };
  },
};
GlobalDecoderRegistry.register(EvidenceList.typeUrl, EvidenceList);
