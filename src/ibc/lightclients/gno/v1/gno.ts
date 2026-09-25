/* eslint-disable */
import { Duration, DurationAmino } from "../../../../google/protobuf/duration";
import { Height, HeightAmino } from "../../../core/client/v1/client";
import { ProofSpec, ProofSpecAmino } from "../../../../cosmos/ics23/v1/proofs";
import { Timestamp } from "../../../../google/protobuf/timestamp";
import { MerkleRoot, MerkleRootAmino } from "../../../core/commitment/v1/commitment";
import { PublicKey, PublicKeyAmino } from "../../../../tendermint/crypto/keys";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { isSet, fromJsonTimestamp, bytesFromBase64, fromTimestamp, base64FromBytes } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
export const protobufPackage = "ibc.lightclients.gno.v1";
/**
 * ClientState from Gno tracks the current validator set, latest height,
 * and a possible frozen height.
 */
export interface ClientState {
  chainId: string;
  trustLevel: Fraction | undefined;
  /**
   * duration of the period since the LatestTimestamp during which the
   * submitted headers are valid for upgrade
   */
  trustingPeriod: Duration | undefined;
  /** duration of the staking unbonding period */
  unbondingPeriod: Duration | undefined;
  /** defines how much new (untrusted) header's Time can drift into the future. */
  maxClockDrift: Duration | undefined;
  /** Block height when the client was frozen due to a misbehaviour */
  frozenHeight: Height | undefined;
  /** Latest height the client was updated to */
  latestHeight: Height | undefined;
  /** Proof specifications used in verifying counterparty state */
  proofSpecs: ProofSpec[];
  /**
   * Path at which next upgraded client will be committed.
   * Each element corresponds to the key for a single CommitmentProof in the
   * chained proof. NOTE: ClientState must stored under
   * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
   * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
   * the default upgrade module, upgrade_path should be []string{"upgrade",
   * "upgradedIBCState"}`
   */
  upgradePath: string[];
  /** allow_update_after_expiry is deprecated */
  /** @deprecated */
  allowUpdateAfterExpiry: boolean;
  /** allow_update_after_misbehaviour is deprecated */
  /** @deprecated */
  allowUpdateAfterMisbehaviour: boolean;
  /**
   * In order to distinguish between Gno and Tendermint light clients
   * we add a client type field. This is useful for clients that
   * may support multiple light client types.
   */
  lcType: string;
}
export interface ClientStateProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.ClientState";
  value: Uint8Array;
}
/**
 * ClientState from Gno tracks the current validator set, latest height,
 * and a possible frozen height.
 * @name ClientStateAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.ClientState
 */
export interface ClientStateAmino {
  chain_id?: string;
  trust_level?: FractionAmino | undefined;
  /**
   * duration of the period since the LatestTimestamp during which the
   * submitted headers are valid for upgrade
   */
  trusting_period?: DurationAmino | undefined;
  /**
   * duration of the staking unbonding period
   */
  unbonding_period?: DurationAmino | undefined;
  /**
   * defines how much new (untrusted) header's Time can drift into the future.
   */
  max_clock_drift?: DurationAmino | undefined;
  /**
   * Block height when the client was frozen due to a misbehaviour
   */
  frozen_height?: HeightAmino | undefined;
  /**
   * Latest height the client was updated to
   */
  latest_height?: HeightAmino | undefined;
  /**
   * Proof specifications used in verifying counterparty state
   */
  proof_specs?: ProofSpecAmino[];
  /**
   * Path at which next upgraded client will be committed.
   * Each element corresponds to the key for a single CommitmentProof in the
   * chained proof. NOTE: ClientState must stored under
   * `{upgradePath}/{upgradeHeight}/clientState` ConsensusState must be stored
   * under `{upgradepath}/{upgradeHeight}/consensusState` For SDK chains using
   * the default upgrade module, upgrade_path should be []string{"upgrade",
   * "upgradedIBCState"}`
   */
  upgrade_path?: string[];
  /**
   * allow_update_after_expiry is deprecated
   * @deprecated
   */
  allow_update_after_expiry?: boolean;
  /**
   * allow_update_after_misbehaviour is deprecated
   * @deprecated
   */
  allow_update_after_misbehaviour?: boolean;
  /**
   * In order to distinguish between Gno and Tendermint light clients
   * we add a client type field. This is useful for clients that
   * may support multiple light client types.
   */
  lc_type?: string;
}
export interface ClientStateAminoMsg {
  type: "cosmos-sdk/ClientState";
  value: ClientStateAmino;
}
/** ConsensusState defines the consensus state from Gno. */
export interface ConsensusState {
  /**
   * timestamp that corresponds to the block height in which the ConsensusState
   * was stored.
   */
  timestamp: Timestamp | undefined;
  /** commitment root (i.e app hash) */
  root: MerkleRoot | undefined;
  nextValidatorsHash: Uint8Array;
  /**
   * In order to distinguish between Gno and Tendermint light clients
   * we add a client type field. This is useful for clients that
   * may support multiple light client types.
   */
  lcType: string;
}
export interface ConsensusStateProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.ConsensusState";
  value: Uint8Array;
}
/**
 * ConsensusState defines the consensus state from Gno.
 * @name ConsensusStateAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.ConsensusState
 */
export interface ConsensusStateAmino {
  /**
   * timestamp that corresponds to the block height in which the ConsensusState
   * was stored.
   */
  timestamp?: string | undefined;
  /**
   * commitment root (i.e app hash)
   */
  root?: MerkleRootAmino | undefined;
  next_validators_hash?: string;
  /**
   * In order to distinguish between Gno and Tendermint light clients
   * we add a client type field. This is useful for clients that
   * may support multiple light client types.
   */
  lc_type?: string;
}
export interface ConsensusStateAminoMsg {
  type: "cosmos-sdk/ConsensusState";
  value: ConsensusStateAmino;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 */
export interface Misbehaviour {
  /** ClientID is deprecated */
  /** @deprecated */
  clientId: string;
  header1?: Header | undefined;
  header2?: Header | undefined;
}
export interface MisbehaviourProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.Misbehaviour";
  value: Uint8Array;
}
/**
 * Misbehaviour is a wrapper over two conflicting Headers
 * that implements Misbehaviour interface expected by ICS-02
 * @name MisbehaviourAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.Misbehaviour
 */
export interface MisbehaviourAmino {
  /**
   * ClientID is deprecated
   * @deprecated
   */
  client_id?: string;
  header_1?: HeaderAmino | undefined;
  header_2?: HeaderAmino | undefined;
}
export interface MisbehaviourAminoMsg {
  type: "cosmos-sdk/Misbehaviour";
  value: MisbehaviourAmino;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 */
export interface Header {
  signedHeader?: SignedHeader | undefined;
  validatorSet?: ValidatorSet | undefined;
  trustedHeight: Height | undefined;
  trustedValidators?: ValidatorSet | undefined;
}
export interface HeaderProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.Header";
  value: Uint8Array;
}
/**
 * Header defines the Tendermint client consensus Header.
 * It encapsulates all the information necessary to update from a trusted
 * Tendermint ConsensusState. The inclusion of TrustedHeight and
 * TrustedValidators allows this update to process correctly, so long as the
 * ConsensusState for the TrustedHeight exists, this removes race conditions
 * among relayers The SignedHeader and ValidatorSet are the new untrusted update
 * fields for the client. The TrustedHeight is the height of a stored
 * ConsensusState on the client that will be used to verify the new untrusted
 * header. The Trusted ConsensusState must be within the unbonding period of
 * current time in order to correctly verify, and the TrustedValidators must
 * hash to TrustedConsensusState.NextValidatorsHash since that is the last
 * trusted validator set at the TrustedHeight.
 * @name HeaderAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.Header
 */
export interface HeaderAmino {
  signed_header?: SignedHeaderAmino | undefined;
  validator_set?: ValidatorSetAmino | undefined;
  trusted_height?: HeightAmino | undefined;
  trusted_validators?: ValidatorSetAmino | undefined;
}
export interface HeaderAminoMsg {
  type: "cosmos-sdk/Header";
  value: HeaderAmino;
}
export interface Block {
  header?: GnoHeader | undefined;
  data?: Data | undefined;
  lastCommit?: Commit | undefined;
}
export interface BlockProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.Block";
  value: Uint8Array;
}
/**
 * @name BlockAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.Block
 */
export interface BlockAmino {
  header?: GnoHeaderAmino | undefined;
  data?: DataAmino | undefined;
  last_commit?: CommitAmino | undefined;
}
export interface BlockAminoMsg {
  type: "cosmos-sdk/Block";
  value: BlockAmino;
}
export interface GnoHeader {
  version: string;
  chainId: string;
  height: bigint;
  time: Timestamp | undefined;
  numTxs: bigint;
  totalTxs: bigint;
  appVersion: string;
  lastBlockId?: BlockID | undefined;
  lastCommitHash: Uint8Array;
  dataHash: Uint8Array;
  validatorsHash: Uint8Array;
  nextValidatorsHash: Uint8Array;
  consensusHash: Uint8Array;
  appHash: Uint8Array;
  lastResultsHash: Uint8Array;
  proposerAddress: string;
}
export interface GnoHeaderProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.GnoHeader";
  value: Uint8Array;
}
/**
 * @name GnoHeaderAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.GnoHeader
 */
export interface GnoHeaderAmino {
  version?: string;
  chain_id?: string;
  height?: string;
  time?: string | undefined;
  num_txs?: string;
  total_txs?: string;
  app_version?: string;
  last_block_id?: BlockIDAmino | undefined;
  last_commit_hash?: string;
  data_hash?: string;
  validators_hash?: string;
  next_validators_hash?: string;
  consensus_hash?: string;
  app_hash?: string;
  last_results_hash?: string;
  proposer_address?: string;
}
export interface GnoHeaderAminoMsg {
  type: "cosmos-sdk/GnoHeader";
  value: GnoHeaderAmino;
}
export interface Data {
  txs: Uint8Array[];
}
export interface DataProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.Data";
  value: Uint8Array;
}
/**
 * @name DataAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.Data
 */
export interface DataAmino {
  txs?: string[];
}
export interface DataAminoMsg {
  type: "cosmos-sdk/Data";
  value: DataAmino;
}
export interface Commit {
  blockId?: BlockID | undefined;
  precommits: CommitSig[];
}
export interface CommitProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.Commit";
  value: Uint8Array;
}
/**
 * @name CommitAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.Commit
 */
export interface CommitAmino {
  block_id?: BlockIDAmino | undefined;
  precommits?: CommitSigAmino[];
}
export interface CommitAminoMsg {
  type: "cosmos-sdk/Commit";
  value: CommitAmino;
}
export interface BlockID {
  hash: Uint8Array;
  partsHeader?: PartSetHeader | undefined;
}
export interface BlockIDProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.BlockID";
  value: Uint8Array;
}
/**
 * @name BlockIDAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.BlockID
 */
export interface BlockIDAmino {
  hash?: string;
  parts_header?: PartSetHeaderAmino | undefined;
}
export interface BlockIDAminoMsg {
  type: "cosmos-sdk/BlockID";
  value: BlockIDAmino;
}
export interface SignedHeader {
  header?: GnoHeader | undefined;
  commit?: Commit | undefined;
}
export interface SignedHeaderProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.SignedHeader";
  value: Uint8Array;
}
/**
 * @name SignedHeaderAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.SignedHeader
 */
export interface SignedHeaderAmino {
  header?: GnoHeaderAmino | undefined;
  commit?: CommitAmino | undefined;
}
export interface SignedHeaderAminoMsg {
  type: "cosmos-sdk/SignedHeader";
  value: SignedHeaderAmino;
}
export interface LightBlock {
  signedHeader?: SignedHeader | undefined;
  validatorSet?: ValidatorSet | undefined;
}
export interface LightBlockProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.LightBlock";
  value: Uint8Array;
}
/**
 * @name LightBlockAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.LightBlock
 */
export interface LightBlockAmino {
  signed_header?: SignedHeaderAmino | undefined;
  validator_set?: ValidatorSetAmino | undefined;
}
export interface LightBlockAminoMsg {
  type: "cosmos-sdk/LightBlock";
  value: LightBlockAmino;
}
export interface CommitSig {
  type: number;
  height: bigint;
  round: bigint;
  blockId?: BlockID | undefined;
  timestamp: Timestamp | undefined;
  validatorAddress: string;
  validatorIndex: bigint;
  signature: Uint8Array;
}
export interface CommitSigProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.CommitSig";
  value: Uint8Array;
}
/**
 * @name CommitSigAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.CommitSig
 */
export interface CommitSigAmino {
  type?: number;
  height?: string;
  round?: string;
  block_id?: BlockIDAmino | undefined;
  timestamp?: string | undefined;
  validator_address?: string;
  validator_index?: string;
  signature?: string;
}
export interface CommitSigAminoMsg {
  type: "cosmos-sdk/CommitSig";
  value: CommitSigAmino;
}
export interface Vote {
  type: number;
  height: bigint;
  round: bigint;
  blockId?: BlockID | undefined;
  timestamp: Timestamp | undefined;
  validatorAddress: string;
  validatorIndex: bigint;
  signature: Uint8Array;
}
export interface VoteProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.Vote";
  value: Uint8Array;
}
/**
 * @name VoteAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.Vote
 */
export interface VoteAmino {
  type?: number;
  height?: string;
  round?: string;
  block_id?: BlockIDAmino | undefined;
  timestamp?: string | undefined;
  validator_address?: string;
  validator_index?: string;
  signature?: string;
}
export interface VoteAminoMsg {
  type: "cosmos-sdk/Vote";
  value: VoteAmino;
}
export interface PartSet {}
export interface PartSetProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.PartSet";
  value: Uint8Array;
}
/**
 * @name PartSetAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.PartSet
 */
export interface PartSetAmino {}
export interface PartSetAminoMsg {
  type: "cosmos-sdk/PartSet";
  value: PartSetAmino;
}
export interface PartSetHeader {
  total: bigint;
  hash: Uint8Array;
}
export interface PartSetHeaderProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.PartSetHeader";
  value: Uint8Array;
}
/**
 * @name PartSetHeaderAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.PartSetHeader
 */
export interface PartSetHeaderAmino {
  total?: string;
  hash?: string;
}
export interface PartSetHeaderAminoMsg {
  type: "cosmos-sdk/PartSetHeader";
  value: PartSetHeaderAmino;
}
export interface Validator {
  address: string;
  pubKey?: PublicKey | undefined;
  votingPower: bigint;
  proposerPriority: bigint;
}
export interface ValidatorProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.Validator";
  value: Uint8Array;
}
/**
 * @name ValidatorAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.Validator
 */
export interface ValidatorAmino {
  address?: string;
  pub_key?: PublicKeyAmino | undefined;
  voting_power?: string;
  proposer_priority?: string;
}
export interface ValidatorAminoMsg {
  type: "cosmos-sdk/Validator";
  value: ValidatorAmino;
}
export interface ValidatorSet {
  validators: Validator[];
  proposer?: Validator | undefined;
}
export interface ValidatorSetProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.ValidatorSet";
  value: Uint8Array;
}
/**
 * @name ValidatorSetAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.ValidatorSet
 */
export interface ValidatorSetAmino {
  validators?: ValidatorAmino[];
  proposer?: ValidatorAmino | undefined;
}
export interface ValidatorSetAminoMsg {
  type: "cosmos-sdk/ValidatorSet";
  value: ValidatorSetAmino;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 */
export interface Fraction {
  numerator: bigint;
  denominator: bigint;
}
export interface FractionProtoMsg {
  typeUrl: "/ibc.lightclients.gno.v1.Fraction";
  value: Uint8Array;
}
/**
 * Fraction defines the protobuf message type for tmmath.Fraction that only
 * supports positive values.
 * @name FractionAmino
 * @package ibc.lightclients.gno.v1
 * @see proto type: ibc.lightclients.gno.v1.Fraction
 */
export interface FractionAmino {
  numerator?: string;
  denominator?: string;
}
export interface FractionAminoMsg {
  type: "cosmos-sdk/Fraction";
  value: FractionAmino;
}
function createBaseClientState(): ClientState {
  return {
    chainId: "",
    trustLevel: Fraction.fromPartial({}),
    trustingPeriod: undefined,
    unbondingPeriod: undefined,
    maxClockDrift: undefined,
    frozenHeight: Height.fromPartial({}),
    latestHeight: Height.fromPartial({}),
    proofSpecs: [],
    upgradePath: [],
    allowUpdateAfterExpiry: false,
    allowUpdateAfterMisbehaviour: false,
    lcType: ""
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.gno.v1.ClientState",
  aminoType: "cosmos-sdk/ClientState",
  is(o: any): o is ClientState {
    return o && (o.$typeUrl === ClientState.typeUrl || typeof o.chainId === "string" && Fraction.is(o.trustLevel) && Duration.is(o.trustingPeriod) && Duration.is(o.unbondingPeriod) && Duration.is(o.maxClockDrift) && Height.is(o.frozenHeight) && Height.is(o.latestHeight) && Array.isArray(o.proofSpecs) && (!o.proofSpecs.length || ProofSpec.is(o.proofSpecs[0])) && Array.isArray(o.upgradePath) && (!o.upgradePath.length || typeof o.upgradePath[0] === "string") && typeof o.allowUpdateAfterExpiry === "boolean" && typeof o.allowUpdateAfterMisbehaviour === "boolean" && typeof o.lcType === "string");
  },
  isAmino(o: any): o is ClientStateAmino {
    return o && (o.$typeUrl === ClientState.typeUrl || typeof o.chain_id === "string" && Fraction.isAmino(o.trust_level) && Duration.isAmino(o.trusting_period) && Duration.isAmino(o.unbonding_period) && Duration.isAmino(o.max_clock_drift) && Height.isAmino(o.frozen_height) && Height.isAmino(o.latest_height) && Array.isArray(o.proof_specs) && (!o.proof_specs.length || ProofSpec.isAmino(o.proof_specs[0])) && Array.isArray(o.upgrade_path) && (!o.upgrade_path.length || typeof o.upgrade_path[0] === "string") && typeof o.allow_update_after_expiry === "boolean" && typeof o.allow_update_after_misbehaviour === "boolean" && typeof o.lc_type === "string");
  },
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.chainId !== "") {
      writer.uint32(10).string(message.chainId);
    }
    if (message.trustLevel !== undefined) {
      Fraction.encode(message.trustLevel, writer.uint32(18).fork()).ldelim();
    }
    if (message.trustingPeriod !== undefined) {
      Duration.encode(message.trustingPeriod, writer.uint32(26).fork()).ldelim();
    }
    if (message.unbondingPeriod !== undefined) {
      Duration.encode(message.unbondingPeriod, writer.uint32(34).fork()).ldelim();
    }
    if (message.maxClockDrift !== undefined) {
      Duration.encode(message.maxClockDrift, writer.uint32(42).fork()).ldelim();
    }
    if (message.frozenHeight !== undefined) {
      Height.encode(message.frozenHeight, writer.uint32(50).fork()).ldelim();
    }
    if (message.latestHeight !== undefined) {
      Height.encode(message.latestHeight, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.proofSpecs) {
      ProofSpec.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.upgradePath) {
      writer.uint32(74).string(v!);
    }
    if (message.allowUpdateAfterExpiry === true) {
      writer.uint32(80).bool(message.allowUpdateAfterExpiry);
    }
    if (message.allowUpdateAfterMisbehaviour === true) {
      writer.uint32(88).bool(message.allowUpdateAfterMisbehaviour);
    }
    if (message.lcType !== "") {
      writer.uint32(98).string(message.lcType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainId = reader.string();
          break;
        case 2:
          message.trustLevel = Fraction.decode(reader, reader.uint32());
          break;
        case 3:
          message.trustingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 4:
          message.unbondingPeriod = Duration.decode(reader, reader.uint32());
          break;
        case 5:
          message.maxClockDrift = Duration.decode(reader, reader.uint32());
          break;
        case 6:
          message.frozenHeight = Height.decode(reader, reader.uint32());
          break;
        case 7:
          message.latestHeight = Height.decode(reader, reader.uint32());
          break;
        case 8:
          message.proofSpecs.push(ProofSpec.decode(reader, reader.uint32()));
          break;
        case 9:
          message.upgradePath.push(reader.string());
          break;
        case 10:
          message.allowUpdateAfterExpiry = reader.bool();
          break;
        case 11:
          message.allowUpdateAfterMisbehaviour = reader.bool();
          break;
        case 12:
          message.lcType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    const obj = createBaseClientState();
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.trustLevel)) obj.trustLevel = Fraction.fromJSON(object.trustLevel);
    if (isSet(object.trustingPeriod)) obj.trustingPeriod = Duration.fromJSON(object.trustingPeriod);
    if (isSet(object.unbondingPeriod)) obj.unbondingPeriod = Duration.fromJSON(object.unbondingPeriod);
    if (isSet(object.maxClockDrift)) obj.maxClockDrift = Duration.fromJSON(object.maxClockDrift);
    if (isSet(object.frozenHeight)) obj.frozenHeight = Height.fromJSON(object.frozenHeight);
    if (isSet(object.latestHeight)) obj.latestHeight = Height.fromJSON(object.latestHeight);
    if (Array.isArray(object?.proofSpecs)) obj.proofSpecs = object.proofSpecs.map((e: any) => ProofSpec.fromJSON(e));
    if (Array.isArray(object?.upgradePath)) obj.upgradePath = object.upgradePath.map((e: any) => String(e));
    if (isSet(object.allowUpdateAfterExpiry)) obj.allowUpdateAfterExpiry = Boolean(object.allowUpdateAfterExpiry);
    if (isSet(object.allowUpdateAfterMisbehaviour)) obj.allowUpdateAfterMisbehaviour = Boolean(object.allowUpdateAfterMisbehaviour);
    if (isSet(object.lcType)) obj.lcType = String(object.lcType);
    return obj;
  },
  toJSON(message: ClientState): JsonSafe<ClientState> {
    const obj: any = {};
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.trustLevel !== undefined && (obj.trustLevel = message.trustLevel ? Fraction.toJSON(message.trustLevel) : undefined);
    message.trustingPeriod !== undefined && (obj.trustingPeriod = message.trustingPeriod ? Duration.toJSON(message.trustingPeriod) : undefined);
    message.unbondingPeriod !== undefined && (obj.unbondingPeriod = message.unbondingPeriod ? Duration.toJSON(message.unbondingPeriod) : undefined);
    message.maxClockDrift !== undefined && (obj.maxClockDrift = message.maxClockDrift ? Duration.toJSON(message.maxClockDrift) : undefined);
    message.frozenHeight !== undefined && (obj.frozenHeight = message.frozenHeight ? Height.toJSON(message.frozenHeight) : undefined);
    message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight ? Height.toJSON(message.latestHeight) : undefined);
    if (message.proofSpecs) {
      obj.proofSpecs = message.proofSpecs.map(e => e ? ProofSpec.toJSON(e) : undefined);
    } else {
      obj.proofSpecs = [];
    }
    if (message.upgradePath) {
      obj.upgradePath = message.upgradePath.map(e => e);
    } else {
      obj.upgradePath = [];
    }
    message.allowUpdateAfterExpiry !== undefined && (obj.allowUpdateAfterExpiry = message.allowUpdateAfterExpiry);
    message.allowUpdateAfterMisbehaviour !== undefined && (obj.allowUpdateAfterMisbehaviour = message.allowUpdateAfterMisbehaviour);
    message.lcType !== undefined && (obj.lcType = message.lcType);
    return obj;
  },
  fromPartial(object: Partial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.chainId = object.chainId ?? "";
    if (object.trustLevel !== undefined && object.trustLevel !== null) {
      message.trustLevel = Fraction.fromPartial(object.trustLevel);
    }
    if (object.trustingPeriod !== undefined && object.trustingPeriod !== null) {
      message.trustingPeriod = Duration.fromPartial(object.trustingPeriod);
    }
    if (object.unbondingPeriod !== undefined && object.unbondingPeriod !== null) {
      message.unbondingPeriod = Duration.fromPartial(object.unbondingPeriod);
    }
    if (object.maxClockDrift !== undefined && object.maxClockDrift !== null) {
      message.maxClockDrift = Duration.fromPartial(object.maxClockDrift);
    }
    if (object.frozenHeight !== undefined && object.frozenHeight !== null) {
      message.frozenHeight = Height.fromPartial(object.frozenHeight);
    }
    if (object.latestHeight !== undefined && object.latestHeight !== null) {
      message.latestHeight = Height.fromPartial(object.latestHeight);
    }
    message.proofSpecs = object.proofSpecs?.map(e => ProofSpec.fromPartial(e)) || [];
    message.upgradePath = object.upgradePath?.map(e => e) || [];
    message.allowUpdateAfterExpiry = object.allowUpdateAfterExpiry ?? false;
    message.allowUpdateAfterMisbehaviour = object.allowUpdateAfterMisbehaviour ?? false;
    message.lcType = object.lcType ?? "";
    return message;
  },
  fromAmino(object: ClientStateAmino): ClientState {
    const message = createBaseClientState();
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.trust_level !== undefined && object.trust_level !== null) {
      message.trustLevel = Fraction.fromAmino(object.trust_level);
    }
    if (object.trusting_period !== undefined && object.trusting_period !== null) {
      message.trustingPeriod = Duration.fromAmino(object.trusting_period);
    }
    if (object.unbonding_period !== undefined && object.unbonding_period !== null) {
      message.unbondingPeriod = Duration.fromAmino(object.unbonding_period);
    }
    if (object.max_clock_drift !== undefined && object.max_clock_drift !== null) {
      message.maxClockDrift = Duration.fromAmino(object.max_clock_drift);
    }
    if (object.frozen_height !== undefined && object.frozen_height !== null) {
      message.frozenHeight = Height.fromAmino(object.frozen_height);
    }
    if (object.latest_height !== undefined && object.latest_height !== null) {
      message.latestHeight = Height.fromAmino(object.latest_height);
    }
    message.proofSpecs = object.proof_specs?.map(e => ProofSpec.fromAmino(e)) || [];
    message.upgradePath = object.upgrade_path?.map(e => e) || [];
    if (object.allow_update_after_expiry !== undefined && object.allow_update_after_expiry !== null) {
      message.allowUpdateAfterExpiry = object.allow_update_after_expiry;
    }
    if (object.allow_update_after_misbehaviour !== undefined && object.allow_update_after_misbehaviour !== null) {
      message.allowUpdateAfterMisbehaviour = object.allow_update_after_misbehaviour;
    }
    if (object.lc_type !== undefined && object.lc_type !== null) {
      message.lcType = object.lc_type;
    }
    return message;
  },
  toAmino(message: ClientState): ClientStateAmino {
    const obj: any = {};
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.trust_level = message.trustLevel ? Fraction.toAmino(message.trustLevel) : undefined;
    obj.trusting_period = message.trustingPeriod ? Duration.toAmino(message.trustingPeriod) : undefined;
    obj.unbonding_period = message.unbondingPeriod ? Duration.toAmino(message.unbondingPeriod) : undefined;
    obj.max_clock_drift = message.maxClockDrift ? Duration.toAmino(message.maxClockDrift) : undefined;
    obj.frozen_height = message.frozenHeight ? Height.toAmino(message.frozenHeight) : {};
    obj.latest_height = message.latestHeight ? Height.toAmino(message.latestHeight) : {};
    if (message.proofSpecs) {
      obj.proof_specs = message.proofSpecs.map(e => e ? ProofSpec.toAmino(e) : undefined);
    } else {
      obj.proof_specs = message.proofSpecs;
    }
    if (message.upgradePath) {
      obj.upgrade_path = message.upgradePath.map(e => e);
    } else {
      obj.upgrade_path = message.upgradePath;
    }
    obj.allow_update_after_expiry = message.allowUpdateAfterExpiry === false ? undefined : message.allowUpdateAfterExpiry;
    obj.allow_update_after_misbehaviour = message.allowUpdateAfterMisbehaviour === false ? undefined : message.allowUpdateAfterMisbehaviour;
    obj.lc_type = message.lcType === "" ? undefined : message.lcType;
    return obj;
  },
  fromAminoMsg(object: ClientStateAminoMsg): ClientState {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message: ClientState): ClientStateAminoMsg {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateProtoMsg): ClientState {
    return ClientState.decode(message.value);
  },
  toProto(message: ClientState): Uint8Array {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message: ClientState): ClientStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClientState.typeUrl, ClientState);
GlobalDecoderRegistry.registerAminoProtoMapping(ClientState.aminoType, ClientState.typeUrl);
function createBaseConsensusState(): ConsensusState {
  return {
    timestamp: undefined,
    root: MerkleRoot.fromPartial({}),
    nextValidatorsHash: new Uint8Array(),
    lcType: ""
  };
}
export const ConsensusState = {
  typeUrl: "/ibc.lightclients.gno.v1.ConsensusState",
  aminoType: "cosmos-sdk/ConsensusState",
  is(o: any): o is ConsensusState {
    return o && (o.$typeUrl === ConsensusState.typeUrl || Timestamp.is(o.timestamp) && MerkleRoot.is(o.root) && (o.nextValidatorsHash instanceof Uint8Array || typeof o.nextValidatorsHash === "string") && typeof o.lcType === "string");
  },
  isAmino(o: any): o is ConsensusStateAmino {
    return o && (o.$typeUrl === ConsensusState.typeUrl || Timestamp.isAmino(o.timestamp) && MerkleRoot.isAmino(o.root) && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && typeof o.lc_type === "string");
  },
  encode(message: ConsensusState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(10).fork()).ldelim();
    }
    if (message.root !== undefined) {
      MerkleRoot.encode(message.root, writer.uint32(18).fork()).ldelim();
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(26).bytes(message.nextValidatorsHash);
    }
    if (message.lcType !== "") {
      writer.uint32(34).string(message.lcType);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 2:
          message.root = MerkleRoot.decode(reader, reader.uint32());
          break;
        case 3:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 4:
          message.lcType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusState {
    const obj = createBaseConsensusState();
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    if (isSet(object.root)) obj.root = MerkleRoot.fromJSON(object.root);
    if (isSet(object.nextValidatorsHash)) obj.nextValidatorsHash = bytesFromBase64(object.nextValidatorsHash);
    if (isSet(object.lcType)) obj.lcType = String(object.lcType);
    return obj;
  },
  toJSON(message: ConsensusState): JsonSafe<ConsensusState> {
    const obj: any = {};
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.root !== undefined && (obj.root = message.root ? MerkleRoot.toJSON(message.root) : undefined);
    message.nextValidatorsHash !== undefined && (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array()));
    message.lcType !== undefined && (obj.lcType = message.lcType);
    return obj;
  },
  fromPartial(object: Partial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    if (object.root !== undefined && object.root !== null) {
      message.root = MerkleRoot.fromPartial(object.root);
    }
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.lcType = object.lcType ?? "";
    return message;
  },
  fromAmino(object: ConsensusStateAmino): ConsensusState {
    const message = createBaseConsensusState();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromAmino(object.timestamp);
    }
    if (object.root !== undefined && object.root !== null) {
      message.root = MerkleRoot.fromAmino(object.root);
    }
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.lc_type !== undefined && object.lc_type !== null) {
      message.lcType = object.lc_type;
    }
    return message;
  },
  toAmino(message: ConsensusState): ConsensusStateAmino {
    const obj: any = {};
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    obj.root = message.root ? MerkleRoot.toAmino(message.root) : undefined;
    obj.next_validators_hash = message.nextValidatorsHash ? base64FromBytes(message.nextValidatorsHash) : undefined;
    obj.lc_type = message.lcType === "" ? undefined : message.lcType;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateAminoMsg): ConsensusState {
    return ConsensusState.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusState): ConsensusStateAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusState",
      value: ConsensusState.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateProtoMsg): ConsensusState {
    return ConsensusState.decode(message.value);
  },
  toProto(message: ConsensusState): Uint8Array {
    return ConsensusState.encode(message).finish();
  },
  toProtoMsg(message: ConsensusState): ConsensusStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConsensusState.typeUrl, ConsensusState);
GlobalDecoderRegistry.registerAminoProtoMapping(ConsensusState.aminoType, ConsensusState.typeUrl);
function createBaseMisbehaviour(): Misbehaviour {
  return {
    clientId: "",
    header1: undefined,
    header2: undefined
  };
}
export const Misbehaviour = {
  typeUrl: "/ibc.lightclients.gno.v1.Misbehaviour",
  aminoType: "cosmos-sdk/Misbehaviour",
  is(o: any): o is Misbehaviour {
    return o && (o.$typeUrl === Misbehaviour.typeUrl || typeof o.clientId === "string");
  },
  isAmino(o: any): o is MisbehaviourAmino {
    return o && (o.$typeUrl === Misbehaviour.typeUrl || typeof o.client_id === "string");
  },
  encode(message: Misbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.header1 !== undefined) {
      Header.encode(message.header1, writer.uint32(18).fork()).ldelim();
    }
    if (message.header2 !== undefined) {
      Header.encode(message.header2, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.header1 = Header.decode(reader, reader.uint32());
          break;
        case 3:
          message.header2 = Header.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Misbehaviour {
    const obj = createBaseMisbehaviour();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.header1)) obj.header1 = Header.fromJSON(object.header1);
    if (isSet(object.header2)) obj.header2 = Header.fromJSON(object.header2);
    return obj;
  },
  toJSON(message: Misbehaviour): JsonSafe<Misbehaviour> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.header1 !== undefined && (obj.header1 = message.header1 ? Header.toJSON(message.header1) : undefined);
    message.header2 !== undefined && (obj.header2 = message.header2 ? Header.toJSON(message.header2) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Misbehaviour>): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.clientId = object.clientId ?? "";
    if (object.header1 !== undefined && object.header1 !== null) {
      message.header1 = Header.fromPartial(object.header1);
    }
    if (object.header2 !== undefined && object.header2 !== null) {
      message.header2 = Header.fromPartial(object.header2);
    }
    return message;
  },
  fromAmino(object: MisbehaviourAmino): Misbehaviour {
    const message = createBaseMisbehaviour();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.header_1 !== undefined && object.header_1 !== null) {
      message.header1 = Header.fromAmino(object.header_1);
    }
    if (object.header_2 !== undefined && object.header_2 !== null) {
      message.header2 = Header.fromAmino(object.header_2);
    }
    return message;
  },
  toAmino(message: Misbehaviour): MisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.header_1 = message.header1 ? Header.toAmino(message.header1) : undefined;
    obj.header_2 = message.header2 ? Header.toAmino(message.header2) : undefined;
    return obj;
  },
  fromAminoMsg(object: MisbehaviourAminoMsg): Misbehaviour {
    return Misbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message: Misbehaviour): MisbehaviourAminoMsg {
    return {
      type: "cosmos-sdk/Misbehaviour",
      value: Misbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message: MisbehaviourProtoMsg): Misbehaviour {
    return Misbehaviour.decode(message.value);
  },
  toProto(message: Misbehaviour): Uint8Array {
    return Misbehaviour.encode(message).finish();
  },
  toProtoMsg(message: Misbehaviour): MisbehaviourProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.Misbehaviour",
      value: Misbehaviour.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Misbehaviour.typeUrl, Misbehaviour);
GlobalDecoderRegistry.registerAminoProtoMapping(Misbehaviour.aminoType, Misbehaviour.typeUrl);
function createBaseHeader(): Header {
  return {
    signedHeader: undefined,
    validatorSet: undefined,
    trustedHeight: Height.fromPartial({}),
    trustedValidators: undefined
  };
}
export const Header = {
  typeUrl: "/ibc.lightclients.gno.v1.Header",
  aminoType: "cosmos-sdk/Header",
  is(o: any): o is Header {
    return o && (o.$typeUrl === Header.typeUrl || Height.is(o.trustedHeight));
  },
  isAmino(o: any): o is HeaderAmino {
    return o && (o.$typeUrl === Header.typeUrl || Height.isAmino(o.trusted_height));
  },
  encode(message: Header, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signedHeader !== undefined) {
      SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }
    if (message.trustedHeight !== undefined) {
      Height.encode(message.trustedHeight, writer.uint32(26).fork()).ldelim();
    }
    if (message.trustedValidators !== undefined) {
      ValidatorSet.encode(message.trustedValidators, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedHeader = SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          break;
        case 3:
          message.trustedHeight = Height.decode(reader, reader.uint32());
          break;
        case 4:
          message.trustedValidators = ValidatorSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Header {
    const obj = createBaseHeader();
    if (isSet(object.signedHeader)) obj.signedHeader = SignedHeader.fromJSON(object.signedHeader);
    if (isSet(object.validatorSet)) obj.validatorSet = ValidatorSet.fromJSON(object.validatorSet);
    if (isSet(object.trustedHeight)) obj.trustedHeight = Height.fromJSON(object.trustedHeight);
    if (isSet(object.trustedValidators)) obj.trustedValidators = ValidatorSet.fromJSON(object.trustedValidators);
    return obj;
  },
  toJSON(message: Header): JsonSafe<Header> {
    const obj: any = {};
    message.signedHeader !== undefined && (obj.signedHeader = message.signedHeader ? SignedHeader.toJSON(message.signedHeader) : undefined);
    message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? ValidatorSet.toJSON(message.validatorSet) : undefined);
    message.trustedHeight !== undefined && (obj.trustedHeight = message.trustedHeight ? Height.toJSON(message.trustedHeight) : undefined);
    message.trustedValidators !== undefined && (obj.trustedValidators = message.trustedValidators ? ValidatorSet.toJSON(message.trustedValidators) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Header>): Header {
    const message = createBaseHeader();
    if (object.signedHeader !== undefined && object.signedHeader !== null) {
      message.signedHeader = SignedHeader.fromPartial(object.signedHeader);
    }
    if (object.validatorSet !== undefined && object.validatorSet !== null) {
      message.validatorSet = ValidatorSet.fromPartial(object.validatorSet);
    }
    if (object.trustedHeight !== undefined && object.trustedHeight !== null) {
      message.trustedHeight = Height.fromPartial(object.trustedHeight);
    }
    if (object.trustedValidators !== undefined && object.trustedValidators !== null) {
      message.trustedValidators = ValidatorSet.fromPartial(object.trustedValidators);
    }
    return message;
  },
  fromAmino(object: HeaderAmino): Header {
    const message = createBaseHeader();
    if (object.signed_header !== undefined && object.signed_header !== null) {
      message.signedHeader = SignedHeader.fromAmino(object.signed_header);
    }
    if (object.validator_set !== undefined && object.validator_set !== null) {
      message.validatorSet = ValidatorSet.fromAmino(object.validator_set);
    }
    if (object.trusted_height !== undefined && object.trusted_height !== null) {
      message.trustedHeight = Height.fromAmino(object.trusted_height);
    }
    if (object.trusted_validators !== undefined && object.trusted_validators !== null) {
      message.trustedValidators = ValidatorSet.fromAmino(object.trusted_validators);
    }
    return message;
  },
  toAmino(message: Header): HeaderAmino {
    const obj: any = {};
    obj.signed_header = message.signedHeader ? SignedHeader.toAmino(message.signedHeader) : undefined;
    obj.validator_set = message.validatorSet ? ValidatorSet.toAmino(message.validatorSet) : undefined;
    obj.trusted_height = message.trustedHeight ? Height.toAmino(message.trustedHeight) : {};
    obj.trusted_validators = message.trustedValidators ? ValidatorSet.toAmino(message.trustedValidators) : undefined;
    return obj;
  },
  fromAminoMsg(object: HeaderAminoMsg): Header {
    return Header.fromAmino(object.value);
  },
  toAminoMsg(message: Header): HeaderAminoMsg {
    return {
      type: "cosmos-sdk/Header",
      value: Header.toAmino(message)
    };
  },
  fromProtoMsg(message: HeaderProtoMsg): Header {
    return Header.decode(message.value);
  },
  toProto(message: Header): Uint8Array {
    return Header.encode(message).finish();
  },
  toProtoMsg(message: Header): HeaderProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.Header",
      value: Header.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Header.typeUrl, Header);
GlobalDecoderRegistry.registerAminoProtoMapping(Header.aminoType, Header.typeUrl);
function createBaseBlock(): Block {
  return {
    header: undefined,
    data: undefined,
    lastCommit: undefined
  };
}
export const Block = {
  typeUrl: "/ibc.lightclients.gno.v1.Block",
  aminoType: "cosmos-sdk/Block",
  is(o: any): o is Block {
    return o && o.$typeUrl === Block.typeUrl;
  },
  isAmino(o: any): o is BlockAmino {
    return o && o.$typeUrl === Block.typeUrl;
  },
  encode(message: Block, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      GnoHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.data !== undefined) {
      Data.encode(message.data, writer.uint32(18).fork()).ldelim();
    }
    if (message.lastCommit !== undefined) {
      Commit.encode(message.lastCommit, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Block {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = GnoHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.data = Data.decode(reader, reader.uint32());
          break;
        case 3:
          message.lastCommit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Block {
    const obj = createBaseBlock();
    if (isSet(object.header)) obj.header = GnoHeader.fromJSON(object.header);
    if (isSet(object.data)) obj.data = Data.fromJSON(object.data);
    if (isSet(object.lastCommit)) obj.lastCommit = Commit.fromJSON(object.lastCommit);
    return obj;
  },
  toJSON(message: Block): JsonSafe<Block> {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? GnoHeader.toJSON(message.header) : undefined);
    message.data !== undefined && (obj.data = message.data ? Data.toJSON(message.data) : undefined);
    message.lastCommit !== undefined && (obj.lastCommit = message.lastCommit ? Commit.toJSON(message.lastCommit) : undefined);
    return obj;
  },
  fromPartial(object: Partial<Block>): Block {
    const message = createBaseBlock();
    if (object.header !== undefined && object.header !== null) {
      message.header = GnoHeader.fromPartial(object.header);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Data.fromPartial(object.data);
    }
    if (object.lastCommit !== undefined && object.lastCommit !== null) {
      message.lastCommit = Commit.fromPartial(object.lastCommit);
    }
    return message;
  },
  fromAmino(object: BlockAmino): Block {
    const message = createBaseBlock();
    if (object.header !== undefined && object.header !== null) {
      message.header = GnoHeader.fromAmino(object.header);
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = Data.fromAmino(object.data);
    }
    if (object.last_commit !== undefined && object.last_commit !== null) {
      message.lastCommit = Commit.fromAmino(object.last_commit);
    }
    return message;
  },
  toAmino(message: Block): BlockAmino {
    const obj: any = {};
    obj.header = message.header ? GnoHeader.toAmino(message.header) : undefined;
    obj.data = message.data ? Data.toAmino(message.data) : undefined;
    obj.last_commit = message.lastCommit ? Commit.toAmino(message.lastCommit) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockAminoMsg): Block {
    return Block.fromAmino(object.value);
  },
  toAminoMsg(message: Block): BlockAminoMsg {
    return {
      type: "cosmos-sdk/Block",
      value: Block.toAmino(message)
    };
  },
  fromProtoMsg(message: BlockProtoMsg): Block {
    return Block.decode(message.value);
  },
  toProto(message: Block): Uint8Array {
    return Block.encode(message).finish();
  },
  toProtoMsg(message: Block): BlockProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.Block",
      value: Block.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Block.typeUrl, Block);
GlobalDecoderRegistry.registerAminoProtoMapping(Block.aminoType, Block.typeUrl);
function createBaseGnoHeader(): GnoHeader {
  return {
    version: "",
    chainId: "",
    height: BigInt(0),
    time: undefined,
    numTxs: BigInt(0),
    totalTxs: BigInt(0),
    appVersion: "",
    lastBlockId: undefined,
    lastCommitHash: new Uint8Array(),
    dataHash: new Uint8Array(),
    validatorsHash: new Uint8Array(),
    nextValidatorsHash: new Uint8Array(),
    consensusHash: new Uint8Array(),
    appHash: new Uint8Array(),
    lastResultsHash: new Uint8Array(),
    proposerAddress: ""
  };
}
export const GnoHeader = {
  typeUrl: "/ibc.lightclients.gno.v1.GnoHeader",
  aminoType: "cosmos-sdk/GnoHeader",
  is(o: any): o is GnoHeader {
    return o && (o.$typeUrl === GnoHeader.typeUrl || typeof o.version === "string" && typeof o.chainId === "string" && typeof o.height === "bigint" && Timestamp.is(o.time) && typeof o.numTxs === "bigint" && typeof o.totalTxs === "bigint" && typeof o.appVersion === "string" && (o.lastCommitHash instanceof Uint8Array || typeof o.lastCommitHash === "string") && (o.dataHash instanceof Uint8Array || typeof o.dataHash === "string") && (o.validatorsHash instanceof Uint8Array || typeof o.validatorsHash === "string") && (o.nextValidatorsHash instanceof Uint8Array || typeof o.nextValidatorsHash === "string") && (o.consensusHash instanceof Uint8Array || typeof o.consensusHash === "string") && (o.appHash instanceof Uint8Array || typeof o.appHash === "string") && (o.lastResultsHash instanceof Uint8Array || typeof o.lastResultsHash === "string") && typeof o.proposerAddress === "string");
  },
  isAmino(o: any): o is GnoHeaderAmino {
    return o && (o.$typeUrl === GnoHeader.typeUrl || typeof o.version === "string" && typeof o.chain_id === "string" && typeof o.height === "bigint" && Timestamp.isAmino(o.time) && typeof o.num_txs === "bigint" && typeof o.total_txs === "bigint" && typeof o.app_version === "string" && (o.last_commit_hash instanceof Uint8Array || typeof o.last_commit_hash === "string") && (o.data_hash instanceof Uint8Array || typeof o.data_hash === "string") && (o.validators_hash instanceof Uint8Array || typeof o.validators_hash === "string") && (o.next_validators_hash instanceof Uint8Array || typeof o.next_validators_hash === "string") && (o.consensus_hash instanceof Uint8Array || typeof o.consensus_hash === "string") && (o.app_hash instanceof Uint8Array || typeof o.app_hash === "string") && (o.last_results_hash instanceof Uint8Array || typeof o.last_results_hash === "string") && typeof o.proposer_address === "string");
  },
  encode(message: GnoHeader, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(24).sint64(message.height);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(34).fork()).ldelim();
    }
    if (message.numTxs !== BigInt(0)) {
      writer.uint32(40).sint64(message.numTxs);
    }
    if (message.totalTxs !== BigInt(0)) {
      writer.uint32(48).sint64(message.totalTxs);
    }
    if (message.appVersion !== "") {
      writer.uint32(58).string(message.appVersion);
    }
    if (message.lastBlockId !== undefined) {
      BlockID.encode(message.lastBlockId, writer.uint32(66).fork()).ldelim();
    }
    if (message.lastCommitHash.length !== 0) {
      writer.uint32(74).bytes(message.lastCommitHash);
    }
    if (message.dataHash.length !== 0) {
      writer.uint32(82).bytes(message.dataHash);
    }
    if (message.validatorsHash.length !== 0) {
      writer.uint32(90).bytes(message.validatorsHash);
    }
    if (message.nextValidatorsHash.length !== 0) {
      writer.uint32(98).bytes(message.nextValidatorsHash);
    }
    if (message.consensusHash.length !== 0) {
      writer.uint32(106).bytes(message.consensusHash);
    }
    if (message.appHash.length !== 0) {
      writer.uint32(114).bytes(message.appHash);
    }
    if (message.lastResultsHash.length !== 0) {
      writer.uint32(122).bytes(message.lastResultsHash);
    }
    if (message.proposerAddress !== "") {
      writer.uint32(130).string(message.proposerAddress);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GnoHeader {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGnoHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.height = reader.sint64();
          break;
        case 4:
          message.time = Timestamp.decode(reader, reader.uint32());
          break;
        case 5:
          message.numTxs = reader.sint64();
          break;
        case 6:
          message.totalTxs = reader.sint64();
          break;
        case 7:
          message.appVersion = reader.string();
          break;
        case 8:
          message.lastBlockId = BlockID.decode(reader, reader.uint32());
          break;
        case 9:
          message.lastCommitHash = reader.bytes();
          break;
        case 10:
          message.dataHash = reader.bytes();
          break;
        case 11:
          message.validatorsHash = reader.bytes();
          break;
        case 12:
          message.nextValidatorsHash = reader.bytes();
          break;
        case 13:
          message.consensusHash = reader.bytes();
          break;
        case 14:
          message.appHash = reader.bytes();
          break;
        case 15:
          message.lastResultsHash = reader.bytes();
          break;
        case 16:
          message.proposerAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GnoHeader {
    const obj = createBaseGnoHeader();
    if (isSet(object.version)) obj.version = String(object.version);
    if (isSet(object.chainId)) obj.chainId = String(object.chainId);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.time)) obj.time = fromJsonTimestamp(object.time);
    if (isSet(object.numTxs)) obj.numTxs = BigInt(object.numTxs.toString());
    if (isSet(object.totalTxs)) obj.totalTxs = BigInt(object.totalTxs.toString());
    if (isSet(object.appVersion)) obj.appVersion = String(object.appVersion);
    if (isSet(object.lastBlockId)) obj.lastBlockId = BlockID.fromJSON(object.lastBlockId);
    if (isSet(object.lastCommitHash)) obj.lastCommitHash = bytesFromBase64(object.lastCommitHash);
    if (isSet(object.dataHash)) obj.dataHash = bytesFromBase64(object.dataHash);
    if (isSet(object.validatorsHash)) obj.validatorsHash = bytesFromBase64(object.validatorsHash);
    if (isSet(object.nextValidatorsHash)) obj.nextValidatorsHash = bytesFromBase64(object.nextValidatorsHash);
    if (isSet(object.consensusHash)) obj.consensusHash = bytesFromBase64(object.consensusHash);
    if (isSet(object.appHash)) obj.appHash = bytesFromBase64(object.appHash);
    if (isSet(object.lastResultsHash)) obj.lastResultsHash = bytesFromBase64(object.lastResultsHash);
    if (isSet(object.proposerAddress)) obj.proposerAddress = String(object.proposerAddress);
    return obj;
  },
  toJSON(message: GnoHeader): JsonSafe<GnoHeader> {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.time !== undefined && (obj.time = fromTimestamp(message.time).toISOString());
    message.numTxs !== undefined && (obj.numTxs = (message.numTxs || BigInt(0)).toString());
    message.totalTxs !== undefined && (obj.totalTxs = (message.totalTxs || BigInt(0)).toString());
    message.appVersion !== undefined && (obj.appVersion = message.appVersion);
    message.lastBlockId !== undefined && (obj.lastBlockId = message.lastBlockId ? BlockID.toJSON(message.lastBlockId) : undefined);
    message.lastCommitHash !== undefined && (obj.lastCommitHash = base64FromBytes(message.lastCommitHash !== undefined ? message.lastCommitHash : new Uint8Array()));
    message.dataHash !== undefined && (obj.dataHash = base64FromBytes(message.dataHash !== undefined ? message.dataHash : new Uint8Array()));
    message.validatorsHash !== undefined && (obj.validatorsHash = base64FromBytes(message.validatorsHash !== undefined ? message.validatorsHash : new Uint8Array()));
    message.nextValidatorsHash !== undefined && (obj.nextValidatorsHash = base64FromBytes(message.nextValidatorsHash !== undefined ? message.nextValidatorsHash : new Uint8Array()));
    message.consensusHash !== undefined && (obj.consensusHash = base64FromBytes(message.consensusHash !== undefined ? message.consensusHash : new Uint8Array()));
    message.appHash !== undefined && (obj.appHash = base64FromBytes(message.appHash !== undefined ? message.appHash : new Uint8Array()));
    message.lastResultsHash !== undefined && (obj.lastResultsHash = base64FromBytes(message.lastResultsHash !== undefined ? message.lastResultsHash : new Uint8Array()));
    message.proposerAddress !== undefined && (obj.proposerAddress = message.proposerAddress);
    return obj;
  },
  fromPartial(object: Partial<GnoHeader>): GnoHeader {
    const message = createBaseGnoHeader();
    message.version = object.version ?? "";
    message.chainId = object.chainId ?? "";
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromPartial(object.time);
    }
    if (object.numTxs !== undefined && object.numTxs !== null) {
      message.numTxs = BigInt(object.numTxs.toString());
    }
    if (object.totalTxs !== undefined && object.totalTxs !== null) {
      message.totalTxs = BigInt(object.totalTxs.toString());
    }
    message.appVersion = object.appVersion ?? "";
    if (object.lastBlockId !== undefined && object.lastBlockId !== null) {
      message.lastBlockId = BlockID.fromPartial(object.lastBlockId);
    }
    message.lastCommitHash = object.lastCommitHash ?? new Uint8Array();
    message.dataHash = object.dataHash ?? new Uint8Array();
    message.validatorsHash = object.validatorsHash ?? new Uint8Array();
    message.nextValidatorsHash = object.nextValidatorsHash ?? new Uint8Array();
    message.consensusHash = object.consensusHash ?? new Uint8Array();
    message.appHash = object.appHash ?? new Uint8Array();
    message.lastResultsHash = object.lastResultsHash ?? new Uint8Array();
    message.proposerAddress = object.proposerAddress ?? "";
    return message;
  },
  fromAmino(object: GnoHeaderAmino): GnoHeader {
    const message = createBaseGnoHeader();
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version;
    }
    if (object.chain_id !== undefined && object.chain_id !== null) {
      message.chainId = object.chain_id;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.time !== undefined && object.time !== null) {
      message.time = Timestamp.fromAmino(object.time);
    }
    if (object.num_txs !== undefined && object.num_txs !== null) {
      message.numTxs = BigInt(object.num_txs);
    }
    if (object.total_txs !== undefined && object.total_txs !== null) {
      message.totalTxs = BigInt(object.total_txs);
    }
    if (object.app_version !== undefined && object.app_version !== null) {
      message.appVersion = object.app_version;
    }
    if (object.last_block_id !== undefined && object.last_block_id !== null) {
      message.lastBlockId = BlockID.fromAmino(object.last_block_id);
    }
    if (object.last_commit_hash !== undefined && object.last_commit_hash !== null) {
      message.lastCommitHash = bytesFromBase64(object.last_commit_hash);
    }
    if (object.data_hash !== undefined && object.data_hash !== null) {
      message.dataHash = bytesFromBase64(object.data_hash);
    }
    if (object.validators_hash !== undefined && object.validators_hash !== null) {
      message.validatorsHash = bytesFromBase64(object.validators_hash);
    }
    if (object.next_validators_hash !== undefined && object.next_validators_hash !== null) {
      message.nextValidatorsHash = bytesFromBase64(object.next_validators_hash);
    }
    if (object.consensus_hash !== undefined && object.consensus_hash !== null) {
      message.consensusHash = bytesFromBase64(object.consensus_hash);
    }
    if (object.app_hash !== undefined && object.app_hash !== null) {
      message.appHash = bytesFromBase64(object.app_hash);
    }
    if (object.last_results_hash !== undefined && object.last_results_hash !== null) {
      message.lastResultsHash = bytesFromBase64(object.last_results_hash);
    }
    if (object.proposer_address !== undefined && object.proposer_address !== null) {
      message.proposerAddress = object.proposer_address;
    }
    return message;
  },
  toAmino(message: GnoHeader): GnoHeaderAmino {
    const obj: any = {};
    obj.version = message.version === "" ? undefined : message.version;
    obj.chain_id = message.chainId === "" ? undefined : message.chainId;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.time = message.time ? Timestamp.toAmino(message.time) : undefined;
    obj.num_txs = message.numTxs !== BigInt(0) ? message.numTxs?.toString() : undefined;
    obj.total_txs = message.totalTxs !== BigInt(0) ? message.totalTxs?.toString() : undefined;
    obj.app_version = message.appVersion === "" ? undefined : message.appVersion;
    obj.last_block_id = message.lastBlockId ? BlockID.toAmino(message.lastBlockId) : undefined;
    obj.last_commit_hash = message.lastCommitHash ? base64FromBytes(message.lastCommitHash) : undefined;
    obj.data_hash = message.dataHash ? base64FromBytes(message.dataHash) : undefined;
    obj.validators_hash = message.validatorsHash ? base64FromBytes(message.validatorsHash) : undefined;
    obj.next_validators_hash = message.nextValidatorsHash ? base64FromBytes(message.nextValidatorsHash) : undefined;
    obj.consensus_hash = message.consensusHash ? base64FromBytes(message.consensusHash) : undefined;
    obj.app_hash = message.appHash ? base64FromBytes(message.appHash) : undefined;
    obj.last_results_hash = message.lastResultsHash ? base64FromBytes(message.lastResultsHash) : undefined;
    obj.proposer_address = message.proposerAddress === "" ? undefined : message.proposerAddress;
    return obj;
  },
  fromAminoMsg(object: GnoHeaderAminoMsg): GnoHeader {
    return GnoHeader.fromAmino(object.value);
  },
  toAminoMsg(message: GnoHeader): GnoHeaderAminoMsg {
    return {
      type: "cosmos-sdk/GnoHeader",
      value: GnoHeader.toAmino(message)
    };
  },
  fromProtoMsg(message: GnoHeaderProtoMsg): GnoHeader {
    return GnoHeader.decode(message.value);
  },
  toProto(message: GnoHeader): Uint8Array {
    return GnoHeader.encode(message).finish();
  },
  toProtoMsg(message: GnoHeader): GnoHeaderProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.GnoHeader",
      value: GnoHeader.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GnoHeader.typeUrl, GnoHeader);
GlobalDecoderRegistry.registerAminoProtoMapping(GnoHeader.aminoType, GnoHeader.typeUrl);
function createBaseData(): Data {
  return {
    txs: []
  };
}
export const Data = {
  typeUrl: "/ibc.lightclients.gno.v1.Data",
  aminoType: "cosmos-sdk/Data",
  is(o: any): o is Data {
    return o && (o.$typeUrl === Data.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
  },
  isAmino(o: any): o is DataAmino {
    return o && (o.$typeUrl === Data.typeUrl || Array.isArray(o.txs) && (!o.txs.length || o.txs[0] instanceof Uint8Array || typeof o.txs[0] === "string"));
  },
  encode(message: Data, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.txs) {
      writer.uint32(10).bytes(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Data {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txs.push(reader.bytes());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Data {
    const obj = createBaseData();
    if (Array.isArray(object?.txs)) obj.txs = object.txs.map((e: any) => bytesFromBase64(e));
    return obj;
  },
  toJSON(message: Data): JsonSafe<Data> {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e !== undefined ? e : new Uint8Array()));
    } else {
      obj.txs = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Data>): Data {
    const message = createBaseData();
    message.txs = object.txs?.map(e => e) || [];
    return message;
  },
  fromAmino(object: DataAmino): Data {
    const message = createBaseData();
    message.txs = object.txs?.map(e => bytesFromBase64(e)) || [];
    return message;
  },
  toAmino(message: Data): DataAmino {
    const obj: any = {};
    if (message.txs) {
      obj.txs = message.txs.map(e => base64FromBytes(e));
    } else {
      obj.txs = message.txs;
    }
    return obj;
  },
  fromAminoMsg(object: DataAminoMsg): Data {
    return Data.fromAmino(object.value);
  },
  toAminoMsg(message: Data): DataAminoMsg {
    return {
      type: "cosmos-sdk/Data",
      value: Data.toAmino(message)
    };
  },
  fromProtoMsg(message: DataProtoMsg): Data {
    return Data.decode(message.value);
  },
  toProto(message: Data): Uint8Array {
    return Data.encode(message).finish();
  },
  toProtoMsg(message: Data): DataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.Data",
      value: Data.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Data.typeUrl, Data);
GlobalDecoderRegistry.registerAminoProtoMapping(Data.aminoType, Data.typeUrl);
function createBaseCommit(): Commit {
  return {
    blockId: undefined,
    precommits: []
  };
}
export const Commit = {
  typeUrl: "/ibc.lightclients.gno.v1.Commit",
  aminoType: "cosmos-sdk/Commit",
  is(o: any): o is Commit {
    return o && (o.$typeUrl === Commit.typeUrl || Array.isArray(o.precommits) && (!o.precommits.length || CommitSig.is(o.precommits[0])));
  },
  isAmino(o: any): o is CommitAmino {
    return o && (o.$typeUrl === Commit.typeUrl || Array.isArray(o.precommits) && (!o.precommits.length || CommitSig.isAmino(o.precommits[0])));
  },
  encode(message: Commit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.precommits) {
      CommitSig.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Commit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 2:
          message.precommits.push(CommitSig.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Commit {
    const obj = createBaseCommit();
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (Array.isArray(object?.precommits)) obj.precommits = object.precommits.map((e: any) => CommitSig.fromJSON(e));
    return obj;
  },
  toJSON(message: Commit): JsonSafe<Commit> {
    const obj: any = {};
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    if (message.precommits) {
      obj.precommits = message.precommits.map(e => e ? CommitSig.toJSON(e) : undefined);
    } else {
      obj.precommits = [];
    }
    return obj;
  },
  fromPartial(object: Partial<Commit>): Commit {
    const message = createBaseCommit();
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    message.precommits = object.precommits?.map(e => CommitSig.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CommitAmino): Commit {
    const message = createBaseCommit();
    if (object.block_id !== undefined && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    message.precommits = object.precommits?.map(e => CommitSig.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Commit): CommitAmino {
    const obj: any = {};
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    if (message.precommits) {
      obj.precommits = message.precommits.map(e => e ? CommitSig.toAmino(e) : undefined);
    } else {
      obj.precommits = message.precommits;
    }
    return obj;
  },
  fromAminoMsg(object: CommitAminoMsg): Commit {
    return Commit.fromAmino(object.value);
  },
  toAminoMsg(message: Commit): CommitAminoMsg {
    return {
      type: "cosmos-sdk/Commit",
      value: Commit.toAmino(message)
    };
  },
  fromProtoMsg(message: CommitProtoMsg): Commit {
    return Commit.decode(message.value);
  },
  toProto(message: Commit): Uint8Array {
    return Commit.encode(message).finish();
  },
  toProtoMsg(message: Commit): CommitProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.Commit",
      value: Commit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Commit.typeUrl, Commit);
GlobalDecoderRegistry.registerAminoProtoMapping(Commit.aminoType, Commit.typeUrl);
function createBaseBlockID(): BlockID {
  return {
    hash: new Uint8Array(),
    partsHeader: undefined
  };
}
export const BlockID = {
  typeUrl: "/ibc.lightclients.gno.v1.BlockID",
  aminoType: "cosmos-sdk/BlockID",
  is(o: any): o is BlockID {
    return o && (o.$typeUrl === BlockID.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
  },
  isAmino(o: any): o is BlockIDAmino {
    return o && (o.$typeUrl === BlockID.typeUrl || o.hash instanceof Uint8Array || typeof o.hash === "string");
  },
  encode(message: BlockID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.hash.length !== 0) {
      writer.uint32(10).bytes(message.hash);
    }
    if (message.partsHeader !== undefined) {
      PartSetHeader.encode(message.partsHeader, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BlockID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBlockID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.bytes();
          break;
        case 2:
          message.partsHeader = PartSetHeader.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): BlockID {
    const obj = createBaseBlockID();
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    if (isSet(object.parts)) obj.partsHeader = PartSetHeader.fromJSON(object.parts);
    return obj;
  },
  toJSON(message: BlockID): JsonSafe<BlockID> {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    message.partsHeader !== undefined && (obj.parts = message.partsHeader ? PartSetHeader.toJSON(message.partsHeader) : undefined);
    return obj;
  },
  fromPartial(object: Partial<BlockID>): BlockID {
    const message = createBaseBlockID();
    message.hash = object.hash ?? new Uint8Array();
    if (object.partsHeader !== undefined && object.partsHeader !== null) {
      message.partsHeader = PartSetHeader.fromPartial(object.partsHeader);
    }
    return message;
  },
  fromAmino(object: BlockIDAmino): BlockID {
    const message = createBaseBlockID();
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    if (object.parts_header !== undefined && object.parts_header !== null) {
      message.partsHeader = PartSetHeader.fromAmino(object.parts_header);
    }
    return message;
  },
  toAmino(message: BlockID): BlockIDAmino {
    const obj: any = {};
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    obj.parts_header = message.partsHeader ? PartSetHeader.toAmino(message.partsHeader) : undefined;
    return obj;
  },
  fromAminoMsg(object: BlockIDAminoMsg): BlockID {
    return BlockID.fromAmino(object.value);
  },
  toAminoMsg(message: BlockID): BlockIDAminoMsg {
    return {
      type: "cosmos-sdk/BlockID",
      value: BlockID.toAmino(message)
    };
  },
  fromProtoMsg(message: BlockIDProtoMsg): BlockID {
    return BlockID.decode(message.value);
  },
  toProto(message: BlockID): Uint8Array {
    return BlockID.encode(message).finish();
  },
  toProtoMsg(message: BlockID): BlockIDProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.BlockID",
      value: BlockID.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BlockID.typeUrl, BlockID);
GlobalDecoderRegistry.registerAminoProtoMapping(BlockID.aminoType, BlockID.typeUrl);
function createBaseSignedHeader(): SignedHeader {
  return {
    header: undefined,
    commit: undefined
  };
}
export const SignedHeader = {
  typeUrl: "/ibc.lightclients.gno.v1.SignedHeader",
  aminoType: "cosmos-sdk/SignedHeader",
  is(o: any): o is SignedHeader {
    return o && o.$typeUrl === SignedHeader.typeUrl;
  },
  isAmino(o: any): o is SignedHeaderAmino {
    return o && o.$typeUrl === SignedHeader.typeUrl;
  },
  encode(message: SignedHeader, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.header !== undefined) {
      GnoHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
    }
    if (message.commit !== undefined) {
      Commit.encode(message.commit, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignedHeader {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignedHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.header = GnoHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.commit = Commit.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignedHeader {
    const obj = createBaseSignedHeader();
    if (isSet(object.header)) obj.header = GnoHeader.fromJSON(object.header);
    if (isSet(object.commit)) obj.commit = Commit.fromJSON(object.commit);
    return obj;
  },
  toJSON(message: SignedHeader): JsonSafe<SignedHeader> {
    const obj: any = {};
    message.header !== undefined && (obj.header = message.header ? GnoHeader.toJSON(message.header) : undefined);
    message.commit !== undefined && (obj.commit = message.commit ? Commit.toJSON(message.commit) : undefined);
    return obj;
  },
  fromPartial(object: Partial<SignedHeader>): SignedHeader {
    const message = createBaseSignedHeader();
    if (object.header !== undefined && object.header !== null) {
      message.header = GnoHeader.fromPartial(object.header);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = Commit.fromPartial(object.commit);
    }
    return message;
  },
  fromAmino(object: SignedHeaderAmino): SignedHeader {
    const message = createBaseSignedHeader();
    if (object.header !== undefined && object.header !== null) {
      message.header = GnoHeader.fromAmino(object.header);
    }
    if (object.commit !== undefined && object.commit !== null) {
      message.commit = Commit.fromAmino(object.commit);
    }
    return message;
  },
  toAmino(message: SignedHeader): SignedHeaderAmino {
    const obj: any = {};
    obj.header = message.header ? GnoHeader.toAmino(message.header) : undefined;
    obj.commit = message.commit ? Commit.toAmino(message.commit) : undefined;
    return obj;
  },
  fromAminoMsg(object: SignedHeaderAminoMsg): SignedHeader {
    return SignedHeader.fromAmino(object.value);
  },
  toAminoMsg(message: SignedHeader): SignedHeaderAminoMsg {
    return {
      type: "cosmos-sdk/SignedHeader",
      value: SignedHeader.toAmino(message)
    };
  },
  fromProtoMsg(message: SignedHeaderProtoMsg): SignedHeader {
    return SignedHeader.decode(message.value);
  },
  toProto(message: SignedHeader): Uint8Array {
    return SignedHeader.encode(message).finish();
  },
  toProtoMsg(message: SignedHeader): SignedHeaderProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.SignedHeader",
      value: SignedHeader.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SignedHeader.typeUrl, SignedHeader);
GlobalDecoderRegistry.registerAminoProtoMapping(SignedHeader.aminoType, SignedHeader.typeUrl);
function createBaseLightBlock(): LightBlock {
  return {
    signedHeader: undefined,
    validatorSet: undefined
  };
}
export const LightBlock = {
  typeUrl: "/ibc.lightclients.gno.v1.LightBlock",
  aminoType: "cosmos-sdk/LightBlock",
  is(o: any): o is LightBlock {
    return o && o.$typeUrl === LightBlock.typeUrl;
  },
  isAmino(o: any): o is LightBlockAmino {
    return o && o.$typeUrl === LightBlock.typeUrl;
  },
  encode(message: LightBlock, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signedHeader !== undefined) {
      SignedHeader.encode(message.signedHeader, writer.uint32(10).fork()).ldelim();
    }
    if (message.validatorSet !== undefined) {
      ValidatorSet.encode(message.validatorSet, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LightBlock {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLightBlock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signedHeader = SignedHeader.decode(reader, reader.uint32());
          break;
        case 2:
          message.validatorSet = ValidatorSet.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): LightBlock {
    const obj = createBaseLightBlock();
    if (isSet(object.signedHeader)) obj.signedHeader = SignedHeader.fromJSON(object.signedHeader);
    if (isSet(object.validatorSet)) obj.validatorSet = ValidatorSet.fromJSON(object.validatorSet);
    return obj;
  },
  toJSON(message: LightBlock): JsonSafe<LightBlock> {
    const obj: any = {};
    message.signedHeader !== undefined && (obj.signedHeader = message.signedHeader ? SignedHeader.toJSON(message.signedHeader) : undefined);
    message.validatorSet !== undefined && (obj.validatorSet = message.validatorSet ? ValidatorSet.toJSON(message.validatorSet) : undefined);
    return obj;
  },
  fromPartial(object: Partial<LightBlock>): LightBlock {
    const message = createBaseLightBlock();
    if (object.signedHeader !== undefined && object.signedHeader !== null) {
      message.signedHeader = SignedHeader.fromPartial(object.signedHeader);
    }
    if (object.validatorSet !== undefined && object.validatorSet !== null) {
      message.validatorSet = ValidatorSet.fromPartial(object.validatorSet);
    }
    return message;
  },
  fromAmino(object: LightBlockAmino): LightBlock {
    const message = createBaseLightBlock();
    if (object.signed_header !== undefined && object.signed_header !== null) {
      message.signedHeader = SignedHeader.fromAmino(object.signed_header);
    }
    if (object.validator_set !== undefined && object.validator_set !== null) {
      message.validatorSet = ValidatorSet.fromAmino(object.validator_set);
    }
    return message;
  },
  toAmino(message: LightBlock): LightBlockAmino {
    const obj: any = {};
    obj.signed_header = message.signedHeader ? SignedHeader.toAmino(message.signedHeader) : undefined;
    obj.validator_set = message.validatorSet ? ValidatorSet.toAmino(message.validatorSet) : undefined;
    return obj;
  },
  fromAminoMsg(object: LightBlockAminoMsg): LightBlock {
    return LightBlock.fromAmino(object.value);
  },
  toAminoMsg(message: LightBlock): LightBlockAminoMsg {
    return {
      type: "cosmos-sdk/LightBlock",
      value: LightBlock.toAmino(message)
    };
  },
  fromProtoMsg(message: LightBlockProtoMsg): LightBlock {
    return LightBlock.decode(message.value);
  },
  toProto(message: LightBlock): Uint8Array {
    return LightBlock.encode(message).finish();
  },
  toProtoMsg(message: LightBlock): LightBlockProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.LightBlock",
      value: LightBlock.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LightBlock.typeUrl, LightBlock);
GlobalDecoderRegistry.registerAminoProtoMapping(LightBlock.aminoType, LightBlock.typeUrl);
function createBaseCommitSig(): CommitSig {
  return {
    type: 0,
    height: BigInt(0),
    round: BigInt(0),
    blockId: undefined,
    timestamp: undefined,
    validatorAddress: "",
    validatorIndex: BigInt(0),
    signature: new Uint8Array()
  };
}
export const CommitSig = {
  typeUrl: "/ibc.lightclients.gno.v1.CommitSig",
  aminoType: "cosmos-sdk/CommitSig",
  is(o: any): o is CommitSig {
    return o && (o.$typeUrl === CommitSig.typeUrl || typeof o.type === "number" && typeof o.height === "bigint" && typeof o.round === "bigint" && Timestamp.is(o.timestamp) && typeof o.validatorAddress === "string" && typeof o.validatorIndex === "bigint" && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
  },
  isAmino(o: any): o is CommitSigAmino {
    return o && (o.$typeUrl === CommitSig.typeUrl || typeof o.type === "number" && typeof o.height === "bigint" && typeof o.round === "bigint" && Timestamp.isAmino(o.timestamp) && typeof o.validator_address === "string" && typeof o.validator_index === "bigint" && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
  },
  encode(message: CommitSig, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).uint32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).sint64(message.height);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(24).sint64(message.round);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    if (message.validatorAddress !== "") {
      writer.uint32(50).string(message.validatorAddress);
    }
    if (message.validatorIndex !== BigInt(0)) {
      writer.uint32(56).sint64(message.validatorIndex);
    }
    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CommitSig {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommitSig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.uint32();
          break;
        case 2:
          message.height = reader.sint64();
          break;
        case 3:
          message.round = reader.sint64();
          break;
        case 4:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.validatorAddress = reader.string();
          break;
        case 7:
          message.validatorIndex = reader.sint64();
          break;
        case 8:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): CommitSig {
    const obj = createBaseCommitSig();
    if (isSet(object.type)) obj.type = Number(object.type);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.round)) obj.round = BigInt(object.round.toString());
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.validatorIndex)) obj.validatorIndex = BigInt(object.validatorIndex.toString());
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    return obj;
  },
  toJSON(message: CommitSig): JsonSafe<CommitSig> {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.round !== undefined && (obj.round = (message.round || BigInt(0)).toString());
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.validatorIndex !== undefined && (obj.validatorIndex = (message.validatorIndex || BigInt(0)).toString());
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<CommitSig>): CommitSig {
    const message = createBaseCommitSig();
    message.type = object.type ?? 0;
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round.toString());
    }
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.validatorIndex !== undefined && object.validatorIndex !== null) {
      message.validatorIndex = BigInt(object.validatorIndex.toString());
    }
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CommitSigAmino): CommitSig {
    const message = createBaseCommitSig();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    if (object.block_id !== undefined && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromAmino(object.timestamp);
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.validator_index !== undefined && object.validator_index !== null) {
      message.validatorIndex = BigInt(object.validator_index);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },
  toAmino(message: CommitSig): CommitSigAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.round = message.round !== BigInt(0) ? message.round?.toString() : undefined;
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.validator_index = message.validatorIndex !== BigInt(0) ? message.validatorIndex?.toString() : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: CommitSigAminoMsg): CommitSig {
    return CommitSig.fromAmino(object.value);
  },
  toAminoMsg(message: CommitSig): CommitSigAminoMsg {
    return {
      type: "cosmos-sdk/CommitSig",
      value: CommitSig.toAmino(message)
    };
  },
  fromProtoMsg(message: CommitSigProtoMsg): CommitSig {
    return CommitSig.decode(message.value);
  },
  toProto(message: CommitSig): Uint8Array {
    return CommitSig.encode(message).finish();
  },
  toProtoMsg(message: CommitSig): CommitSigProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.CommitSig",
      value: CommitSig.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CommitSig.typeUrl, CommitSig);
GlobalDecoderRegistry.registerAminoProtoMapping(CommitSig.aminoType, CommitSig.typeUrl);
function createBaseVote(): Vote {
  return {
    type: 0,
    height: BigInt(0),
    round: BigInt(0),
    blockId: undefined,
    timestamp: undefined,
    validatorAddress: "",
    validatorIndex: BigInt(0),
    signature: new Uint8Array()
  };
}
export const Vote = {
  typeUrl: "/ibc.lightclients.gno.v1.Vote",
  aminoType: "cosmos-sdk/Vote",
  is(o: any): o is Vote {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.type === "number" && typeof o.height === "bigint" && typeof o.round === "bigint" && Timestamp.is(o.timestamp) && typeof o.validatorAddress === "string" && typeof o.validatorIndex === "bigint" && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
  },
  isAmino(o: any): o is VoteAmino {
    return o && (o.$typeUrl === Vote.typeUrl || typeof o.type === "number" && typeof o.height === "bigint" && typeof o.round === "bigint" && Timestamp.isAmino(o.timestamp) && typeof o.validator_address === "string" && typeof o.validator_index === "bigint" && (o.signature instanceof Uint8Array || typeof o.signature === "string"));
  },
  encode(message: Vote, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.type !== 0) {
      writer.uint32(8).uint32(message.type);
    }
    if (message.height !== BigInt(0)) {
      writer.uint32(16).sint64(message.height);
    }
    if (message.round !== BigInt(0)) {
      writer.uint32(24).sint64(message.round);
    }
    if (message.blockId !== undefined) {
      BlockID.encode(message.blockId, writer.uint32(34).fork()).ldelim();
    }
    if (message.timestamp !== undefined) {
      Timestamp.encode(message.timestamp, writer.uint32(42).fork()).ldelim();
    }
    if (message.validatorAddress !== "") {
      writer.uint32(50).string(message.validatorAddress);
    }
    if (message.validatorIndex !== BigInt(0)) {
      writer.uint32(56).sint64(message.validatorIndex);
    }
    if (message.signature.length !== 0) {
      writer.uint32(66).bytes(message.signature);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Vote {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseVote();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.type = reader.uint32();
          break;
        case 2:
          message.height = reader.sint64();
          break;
        case 3:
          message.round = reader.sint64();
          break;
        case 4:
          message.blockId = BlockID.decode(reader, reader.uint32());
          break;
        case 5:
          message.timestamp = Timestamp.decode(reader, reader.uint32());
          break;
        case 6:
          message.validatorAddress = reader.string();
          break;
        case 7:
          message.validatorIndex = reader.sint64();
          break;
        case 8:
          message.signature = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Vote {
    const obj = createBaseVote();
    if (isSet(object.type)) obj.type = Number(object.type);
    if (isSet(object.height)) obj.height = BigInt(object.height.toString());
    if (isSet(object.round)) obj.round = BigInt(object.round.toString());
    if (isSet(object.blockId)) obj.blockId = BlockID.fromJSON(object.blockId);
    if (isSet(object.timestamp)) obj.timestamp = fromJsonTimestamp(object.timestamp);
    if (isSet(object.validatorAddress)) obj.validatorAddress = String(object.validatorAddress);
    if (isSet(object.validatorIndex)) obj.validatorIndex = BigInt(object.validatorIndex.toString());
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    return obj;
  },
  toJSON(message: Vote): JsonSafe<Vote> {
    const obj: any = {};
    message.type !== undefined && (obj.type = Math.round(message.type));
    message.height !== undefined && (obj.height = (message.height || BigInt(0)).toString());
    message.round !== undefined && (obj.round = (message.round || BigInt(0)).toString());
    message.blockId !== undefined && (obj.blockId = message.blockId ? BlockID.toJSON(message.blockId) : undefined);
    message.timestamp !== undefined && (obj.timestamp = fromTimestamp(message.timestamp).toISOString());
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    message.validatorIndex !== undefined && (obj.validatorIndex = (message.validatorIndex || BigInt(0)).toString());
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<Vote>): Vote {
    const message = createBaseVote();
    message.type = object.type ?? 0;
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height.toString());
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round.toString());
    }
    if (object.blockId !== undefined && object.blockId !== null) {
      message.blockId = BlockID.fromPartial(object.blockId);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromPartial(object.timestamp);
    }
    message.validatorAddress = object.validatorAddress ?? "";
    if (object.validatorIndex !== undefined && object.validatorIndex !== null) {
      message.validatorIndex = BigInt(object.validatorIndex.toString());
    }
    message.signature = object.signature ?? new Uint8Array();
    return message;
  },
  fromAmino(object: VoteAmino): Vote {
    const message = createBaseVote();
    if (object.type !== undefined && object.type !== null) {
      message.type = object.type;
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = BigInt(object.height);
    }
    if (object.round !== undefined && object.round !== null) {
      message.round = BigInt(object.round);
    }
    if (object.block_id !== undefined && object.block_id !== null) {
      message.blockId = BlockID.fromAmino(object.block_id);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = Timestamp.fromAmino(object.timestamp);
    }
    if (object.validator_address !== undefined && object.validator_address !== null) {
      message.validatorAddress = object.validator_address;
    }
    if (object.validator_index !== undefined && object.validator_index !== null) {
      message.validatorIndex = BigInt(object.validator_index);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    return message;
  },
  toAmino(message: Vote): VoteAmino {
    const obj: any = {};
    obj.type = message.type === 0 ? undefined : message.type;
    obj.height = message.height !== BigInt(0) ? message.height?.toString() : undefined;
    obj.round = message.round !== BigInt(0) ? message.round?.toString() : undefined;
    obj.block_id = message.blockId ? BlockID.toAmino(message.blockId) : undefined;
    obj.timestamp = message.timestamp ? Timestamp.toAmino(message.timestamp) : undefined;
    obj.validator_address = message.validatorAddress === "" ? undefined : message.validatorAddress;
    obj.validator_index = message.validatorIndex !== BigInt(0) ? message.validatorIndex?.toString() : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    return obj;
  },
  fromAminoMsg(object: VoteAminoMsg): Vote {
    return Vote.fromAmino(object.value);
  },
  toAminoMsg(message: Vote): VoteAminoMsg {
    return {
      type: "cosmos-sdk/Vote",
      value: Vote.toAmino(message)
    };
  },
  fromProtoMsg(message: VoteProtoMsg): Vote {
    return Vote.decode(message.value);
  },
  toProto(message: Vote): Uint8Array {
    return Vote.encode(message).finish();
  },
  toProtoMsg(message: Vote): VoteProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.Vote",
      value: Vote.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Vote.typeUrl, Vote);
GlobalDecoderRegistry.registerAminoProtoMapping(Vote.aminoType, Vote.typeUrl);
function createBasePartSet(): PartSet {
  return {};
}
export const PartSet = {
  typeUrl: "/ibc.lightclients.gno.v1.PartSet",
  aminoType: "cosmos-sdk/PartSet",
  is(o: any): o is PartSet {
    return o && o.$typeUrl === PartSet.typeUrl;
  },
  isAmino(o: any): o is PartSetAmino {
    return o && o.$typeUrl === PartSet.typeUrl;
  },
  encode(_: PartSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PartSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartSet();
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
  fromJSON(_: any): PartSet {
    const obj = createBasePartSet();
    return obj;
  },
  toJSON(_: PartSet): JsonSafe<PartSet> {
    const obj: any = {};
    return obj;
  },
  fromPartial(_: Partial<PartSet>): PartSet {
    const message = createBasePartSet();
    return message;
  },
  fromAmino(_: PartSetAmino): PartSet {
    const message = createBasePartSet();
    return message;
  },
  toAmino(_: PartSet): PartSetAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: PartSetAminoMsg): PartSet {
    return PartSet.fromAmino(object.value);
  },
  toAminoMsg(message: PartSet): PartSetAminoMsg {
    return {
      type: "cosmos-sdk/PartSet",
      value: PartSet.toAmino(message)
    };
  },
  fromProtoMsg(message: PartSetProtoMsg): PartSet {
    return PartSet.decode(message.value);
  },
  toProto(message: PartSet): Uint8Array {
    return PartSet.encode(message).finish();
  },
  toProtoMsg(message: PartSet): PartSetProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.PartSet",
      value: PartSet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PartSet.typeUrl, PartSet);
GlobalDecoderRegistry.registerAminoProtoMapping(PartSet.aminoType, PartSet.typeUrl);
function createBasePartSetHeader(): PartSetHeader {
  return {
    total: BigInt(0),
    hash: new Uint8Array()
  };
}
export const PartSetHeader = {
  typeUrl: "/ibc.lightclients.gno.v1.PartSetHeader",
  aminoType: "cosmos-sdk/PartSetHeader",
  is(o: any): o is PartSetHeader {
    return o && (o.$typeUrl === PartSetHeader.typeUrl || typeof o.total === "bigint" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
  },
  isAmino(o: any): o is PartSetHeaderAmino {
    return o && (o.$typeUrl === PartSetHeader.typeUrl || typeof o.total === "bigint" && (o.hash instanceof Uint8Array || typeof o.hash === "string"));
  },
  encode(message: PartSetHeader, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.total !== BigInt(0)) {
      writer.uint32(8).sint64(message.total);
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PartSetHeader {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePartSetHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.total = reader.sint64();
          break;
        case 2:
          message.hash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PartSetHeader {
    const obj = createBasePartSetHeader();
    if (isSet(object.total)) obj.total = BigInt(object.total.toString());
    if (isSet(object.hash)) obj.hash = bytesFromBase64(object.hash);
    return obj;
  },
  toJSON(message: PartSetHeader): JsonSafe<PartSetHeader> {
    const obj: any = {};
    message.total !== undefined && (obj.total = (message.total || BigInt(0)).toString());
    message.hash !== undefined && (obj.hash = base64FromBytes(message.hash !== undefined ? message.hash : new Uint8Array()));
    return obj;
  },
  fromPartial(object: Partial<PartSetHeader>): PartSetHeader {
    const message = createBasePartSetHeader();
    if (object.total !== undefined && object.total !== null) {
      message.total = BigInt(object.total.toString());
    }
    message.hash = object.hash ?? new Uint8Array();
    return message;
  },
  fromAmino(object: PartSetHeaderAmino): PartSetHeader {
    const message = createBasePartSetHeader();
    if (object.total !== undefined && object.total !== null) {
      message.total = BigInt(object.total);
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash);
    }
    return message;
  },
  toAmino(message: PartSetHeader): PartSetHeaderAmino {
    const obj: any = {};
    obj.total = message.total !== BigInt(0) ? message.total?.toString() : undefined;
    obj.hash = message.hash ? base64FromBytes(message.hash) : undefined;
    return obj;
  },
  fromAminoMsg(object: PartSetHeaderAminoMsg): PartSetHeader {
    return PartSetHeader.fromAmino(object.value);
  },
  toAminoMsg(message: PartSetHeader): PartSetHeaderAminoMsg {
    return {
      type: "cosmos-sdk/PartSetHeader",
      value: PartSetHeader.toAmino(message)
    };
  },
  fromProtoMsg(message: PartSetHeaderProtoMsg): PartSetHeader {
    return PartSetHeader.decode(message.value);
  },
  toProto(message: PartSetHeader): Uint8Array {
    return PartSetHeader.encode(message).finish();
  },
  toProtoMsg(message: PartSetHeader): PartSetHeaderProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.PartSetHeader",
      value: PartSetHeader.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PartSetHeader.typeUrl, PartSetHeader);
GlobalDecoderRegistry.registerAminoProtoMapping(PartSetHeader.aminoType, PartSetHeader.typeUrl);
function createBaseValidator(): Validator {
  return {
    address: "",
    pubKey: undefined,
    votingPower: BigInt(0),
    proposerPriority: BigInt(0)
  };
}
export const Validator = {
  typeUrl: "/ibc.lightclients.gno.v1.Validator",
  aminoType: "cosmos-sdk/Validator",
  is(o: any): o is Validator {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.address === "string" && typeof o.votingPower === "bigint" && typeof o.proposerPriority === "bigint");
  },
  isAmino(o: any): o is ValidatorAmino {
    return o && (o.$typeUrl === Validator.typeUrl || typeof o.address === "string" && typeof o.voting_power === "bigint" && typeof o.proposer_priority === "bigint");
  },
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pubKey !== undefined) {
      PublicKey.encode(message.pubKey, writer.uint32(18).fork()).ldelim();
    }
    if (message.votingPower !== BigInt(0)) {
      writer.uint32(24).sint64(message.votingPower);
    }
    if (message.proposerPriority !== BigInt(0)) {
      writer.uint32(32).sint64(message.proposerPriority);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Validator {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pubKey = PublicKey.decode(reader, reader.uint32());
          break;
        case 3:
          message.votingPower = reader.sint64();
          break;
        case 4:
          message.proposerPriority = reader.sint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Validator {
    const obj = createBaseValidator();
    if (isSet(object.address)) obj.address = String(object.address);
    if (isSet(object.pubKey)) obj.pubKey = PublicKey.fromJSON(object.pubKey);
    if (isSet(object.votingPower)) obj.votingPower = BigInt(object.votingPower.toString());
    if (isSet(object.proposerPriority)) obj.proposerPriority = BigInt(object.proposerPriority.toString());
    return obj;
  },
  toJSON(message: Validator): JsonSafe<Validator> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey ? PublicKey.toJSON(message.pubKey) : undefined);
    message.votingPower !== undefined && (obj.votingPower = (message.votingPower || BigInt(0)).toString());
    message.proposerPriority !== undefined && (obj.proposerPriority = (message.proposerPriority || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.address = object.address ?? "";
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = PublicKey.fromPartial(object.pubKey);
    }
    if (object.votingPower !== undefined && object.votingPower !== null) {
      message.votingPower = BigInt(object.votingPower.toString());
    }
    if (object.proposerPriority !== undefined && object.proposerPriority !== null) {
      message.proposerPriority = BigInt(object.proposerPriority.toString());
    }
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.pub_key !== undefined && object.pub_key !== null) {
      message.pubKey = PublicKey.fromAmino(object.pub_key);
    }
    if (object.voting_power !== undefined && object.voting_power !== null) {
      message.votingPower = BigInt(object.voting_power);
    }
    if (object.proposer_priority !== undefined && object.proposer_priority !== null) {
      message.proposerPriority = BigInt(object.proposer_priority);
    }
    return message;
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    obj.pub_key = message.pubKey ? PublicKey.toAmino(message.pubKey) : undefined;
    obj.voting_power = message.votingPower !== BigInt(0) ? message.votingPower?.toString() : undefined;
    obj.proposer_priority = message.proposerPriority !== BigInt(0) ? message.proposerPriority?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  toAminoMsg(message: Validator): ValidatorAminoMsg {
    return {
      type: "cosmos-sdk/Validator",
      value: Validator.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.Validator",
      value: Validator.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Validator.typeUrl, Validator);
GlobalDecoderRegistry.registerAminoProtoMapping(Validator.aminoType, Validator.typeUrl);
function createBaseValidatorSet(): ValidatorSet {
  return {
    validators: [],
    proposer: undefined
  };
}
export const ValidatorSet = {
  typeUrl: "/ibc.lightclients.gno.v1.ValidatorSet",
  aminoType: "cosmos-sdk/ValidatorSet",
  is(o: any): o is ValidatorSet {
    return o && (o.$typeUrl === ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.is(o.validators[0])));
  },
  isAmino(o: any): o is ValidatorSetAmino {
    return o && (o.$typeUrl === ValidatorSet.typeUrl || Array.isArray(o.validators) && (!o.validators.length || Validator.isAmino(o.validators[0])));
  },
  encode(message: ValidatorSet, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.validators) {
      Validator.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.proposer !== undefined) {
      Validator.encode(message.proposer, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ValidatorSet {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValidatorSet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validators.push(Validator.decode(reader, reader.uint32()));
          break;
        case 2:
          message.proposer = Validator.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ValidatorSet {
    const obj = createBaseValidatorSet();
    if (Array.isArray(object?.validators)) obj.validators = object.validators.map((e: any) => Validator.fromJSON(e));
    if (isSet(object.proposer)) obj.proposer = Validator.fromJSON(object.proposer);
    return obj;
  },
  toJSON(message: ValidatorSet): JsonSafe<ValidatorSet> {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toJSON(e) : undefined);
    } else {
      obj.validators = [];
    }
    message.proposer !== undefined && (obj.proposer = message.proposer ? Validator.toJSON(message.proposer) : undefined);
    return obj;
  },
  fromPartial(object: Partial<ValidatorSet>): ValidatorSet {
    const message = createBaseValidatorSet();
    message.validators = object.validators?.map(e => Validator.fromPartial(e)) || [];
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = Validator.fromPartial(object.proposer);
    }
    return message;
  },
  fromAmino(object: ValidatorSetAmino): ValidatorSet {
    const message = createBaseValidatorSet();
    message.validators = object.validators?.map(e => Validator.fromAmino(e)) || [];
    if (object.proposer !== undefined && object.proposer !== null) {
      message.proposer = Validator.fromAmino(object.proposer);
    }
    return message;
  },
  toAmino(message: ValidatorSet): ValidatorSetAmino {
    const obj: any = {};
    if (message.validators) {
      obj.validators = message.validators.map(e => e ? Validator.toAmino(e) : undefined);
    } else {
      obj.validators = message.validators;
    }
    obj.proposer = message.proposer ? Validator.toAmino(message.proposer) : undefined;
    return obj;
  },
  fromAminoMsg(object: ValidatorSetAminoMsg): ValidatorSet {
    return ValidatorSet.fromAmino(object.value);
  },
  toAminoMsg(message: ValidatorSet): ValidatorSetAminoMsg {
    return {
      type: "cosmos-sdk/ValidatorSet",
      value: ValidatorSet.toAmino(message)
    };
  },
  fromProtoMsg(message: ValidatorSetProtoMsg): ValidatorSet {
    return ValidatorSet.decode(message.value);
  },
  toProto(message: ValidatorSet): Uint8Array {
    return ValidatorSet.encode(message).finish();
  },
  toProtoMsg(message: ValidatorSet): ValidatorSetProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.ValidatorSet",
      value: ValidatorSet.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ValidatorSet.typeUrl, ValidatorSet);
GlobalDecoderRegistry.registerAminoProtoMapping(ValidatorSet.aminoType, ValidatorSet.typeUrl);
function createBaseFraction(): Fraction {
  return {
    numerator: BigInt(0),
    denominator: BigInt(0)
  };
}
export const Fraction = {
  typeUrl: "/ibc.lightclients.gno.v1.Fraction",
  aminoType: "cosmos-sdk/Fraction",
  is(o: any): o is Fraction {
    return o && (o.$typeUrl === Fraction.typeUrl || typeof o.numerator === "bigint" && typeof o.denominator === "bigint");
  },
  isAmino(o: any): o is FractionAmino {
    return o && (o.$typeUrl === Fraction.typeUrl || typeof o.numerator === "bigint" && typeof o.denominator === "bigint");
  },
  encode(message: Fraction, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.numerator !== BigInt(0)) {
      writer.uint32(8).uint64(message.numerator);
    }
    if (message.denominator !== BigInt(0)) {
      writer.uint32(16).uint64(message.denominator);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Fraction {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFraction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.numerator = reader.uint64();
          break;
        case 2:
          message.denominator = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Fraction {
    const obj = createBaseFraction();
    if (isSet(object.numerator)) obj.numerator = BigInt(object.numerator.toString());
    if (isSet(object.denominator)) obj.denominator = BigInt(object.denominator.toString());
    return obj;
  },
  toJSON(message: Fraction): JsonSafe<Fraction> {
    const obj: any = {};
    message.numerator !== undefined && (obj.numerator = (message.numerator || BigInt(0)).toString());
    message.denominator !== undefined && (obj.denominator = (message.denominator || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: Partial<Fraction>): Fraction {
    const message = createBaseFraction();
    if (object.numerator !== undefined && object.numerator !== null) {
      message.numerator = BigInt(object.numerator.toString());
    }
    if (object.denominator !== undefined && object.denominator !== null) {
      message.denominator = BigInt(object.denominator.toString());
    }
    return message;
  },
  fromAmino(object: FractionAmino): Fraction {
    const message = createBaseFraction();
    if (object.numerator !== undefined && object.numerator !== null) {
      message.numerator = BigInt(object.numerator);
    }
    if (object.denominator !== undefined && object.denominator !== null) {
      message.denominator = BigInt(object.denominator);
    }
    return message;
  },
  toAmino(message: Fraction): FractionAmino {
    const obj: any = {};
    obj.numerator = message.numerator !== BigInt(0) ? message.numerator?.toString() : undefined;
    obj.denominator = message.denominator !== BigInt(0) ? message.denominator?.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FractionAminoMsg): Fraction {
    return Fraction.fromAmino(object.value);
  },
  toAminoMsg(message: Fraction): FractionAminoMsg {
    return {
      type: "cosmos-sdk/Fraction",
      value: Fraction.toAmino(message)
    };
  },
  fromProtoMsg(message: FractionProtoMsg): Fraction {
    return Fraction.decode(message.value);
  },
  toProto(message: Fraction): Uint8Array {
    return Fraction.encode(message).finish();
  },
  toProtoMsg(message: Fraction): FractionProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.gno.v1.Fraction",
      value: Fraction.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Fraction.typeUrl, Fraction);
GlobalDecoderRegistry.registerAminoProtoMapping(Fraction.aminoType, Fraction.typeUrl);