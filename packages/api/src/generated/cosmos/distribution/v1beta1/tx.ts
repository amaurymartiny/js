/* eslint-disable */
import { Coin } from '../../../cosmos/base/v1beta1/coin';
import { SigningStargateClient } from '@cosmjs/stargate';
import { Writer, Reader } from 'protobufjs/minimal';


/**
 *  MsgSetWithdrawAddress sets the withdraw address for
 *  a delegator (or validator self-delegation).
 */
export interface MsgSetWithdrawAddress {
  delegatorAddress: string;
  withdrawAddress: string;
}

/**
 *  MsgSetWithdrawAddressResponse defines the Msg/SetWithdrawAddress response type.
 */
export interface MsgSetWithdrawAddressResponse {
}

/**
 *  MsgWithdrawDelegatorReward represents delegation withdrawal to a delegator
 *  from a single validator.
 */
export interface MsgWithdrawDelegatorReward {
  delegatorAddress: string;
  validatorAddress: string;
}

/**
 *  MsgWithdrawDelegatorRewardResponse defines the Msg/WithdrawDelegatorReward response type.
 */
export interface MsgWithdrawDelegatorRewardResponse {
}

/**
 *  MsgWithdrawValidatorCommission withdraws the full commission to the validator
 *  address.
 */
export interface MsgWithdrawValidatorCommission {
  validatorAddress: string;
}

/**
 *  MsgWithdrawValidatorCommissionResponse defines the Msg/WithdrawValidatorCommission response type.
 */
export interface MsgWithdrawValidatorCommissionResponse {
}

/**
 *  MsgFundCommunityPool allows an account to directly
 *  fund the community pool.
 */
export interface MsgFundCommunityPool {
  amount: Coin[];
  depositor: string;
}

/**
 *  MsgFundCommunityPoolResponse defines the Msg/FundCommunityPool response type.
 */
export interface MsgFundCommunityPoolResponse {
}

const baseMsgSetWithdrawAddress: object = {
  delegatorAddress: "",
  withdrawAddress: "",
};

const baseMsgSetWithdrawAddressResponse: object = {
};

const baseMsgWithdrawDelegatorReward: object = {
  delegatorAddress: "",
  validatorAddress: "",
};

const baseMsgWithdrawDelegatorRewardResponse: object = {
};

const baseMsgWithdrawValidatorCommission: object = {
  validatorAddress: "",
};

const baseMsgWithdrawValidatorCommissionResponse: object = {
};

const baseMsgFundCommunityPool: object = {
  depositor: "",
};

const baseMsgFundCommunityPoolResponse: object = {
};

/**
 *  Msg defines the distribution Msg service.
 */
export interface Msg {

  /**
   *  SetWithdrawAddress defines a method to change the withdraw address
   *  for a delegator (or validator self-delegation).
   */
  SetWithdrawAddress(request: MsgSetWithdrawAddress): Promise<MsgSetWithdrawAddressResponse>;

  /**
   *  WithdrawDelegatorReward defines a method to withdraw rewards of delegator
   *  from a single validator.
   */
  WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward): Promise<MsgWithdrawDelegatorRewardResponse>;

  /**
   *  WithdrawValidatorCommission defines a method to withdraw the
   *  full commission to the validator address.
   */
  WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission): Promise<MsgWithdrawValidatorCommissionResponse>;

  /**
   *  FundCommunityPool defines a method to allow an account to directly
   *  fund the community pool.
   */
  FundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;

}

export class MsgClientImpl implements Msg {

  private readonly signingClient: SigningStargateClient;

  constructor(signingClient: SigningStargateClient) {
    this.signingClient = signingClient;
  }

  SetWithdrawAddress(request: MsgSetWithdrawAddress, callback?: function (response: MsgSetWithdrawAddressResponse): void | Promise<void>): void {
    const data = MsgSetWithdrawAddress.encode(request).finish();
    this.signingClient.addMsg({
      typeUrl: "cosmos.distribution.v1beta1.Msg/SetWithdrawAddress",
      value: data
    }, callback);
  }

  WithdrawDelegatorReward(request: MsgWithdrawDelegatorReward, callback?: function (response: MsgWithdrawDelegatorRewardResponse): void | Promise<void>): void {
    const data = MsgWithdrawDelegatorReward.encode(request).finish();
    this.signingClient.addMsg({
      typeUrl: "cosmos.distribution.v1beta1.Msg/WithdrawDelegatorReward",
      value: data
    }, callback);
  }

  WithdrawValidatorCommission(request: MsgWithdrawValidatorCommission, callback?: function (response: MsgWithdrawValidatorCommissionResponse): void | Promise<void>): void {
    const data = MsgWithdrawValidatorCommission.encode(request).finish();
    this.signingClient.addMsg({
      typeUrl: "cosmos.distribution.v1beta1.Msg/WithdrawValidatorCommission",
      value: data
    }, callback);
  }

  FundCommunityPool(request: MsgFundCommunityPool, callback?: function (response: MsgFundCommunityPoolResponse): void | Promise<void>): void {
    const data = MsgFundCommunityPool.encode(request).finish();
    this.signingClient.addMsg({
      typeUrl: "cosmos.distribution.v1beta1.Msg/FundCommunityPool",
      value: data
    }, callback);
  }

}

interface Rpc {

  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;

}

export const protobufPackage = 'cosmos.distribution.v1beta1'

export const MsgSetWithdrawAddress = {
  encode(message: MsgSetWithdrawAddress, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddress);
    writer.uint32(18).string(message.withdrawAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSetWithdrawAddress {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetWithdrawAddress } as MsgSetWithdrawAddress;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.withdrawAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgSetWithdrawAddress {
    const message = { ...baseMsgSetWithdrawAddress } as MsgSetWithdrawAddress;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.withdrawAddress !== undefined && object.withdrawAddress !== null) {
      message.withdrawAddress = String(object.withdrawAddress);
    } else {
      message.withdrawAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgSetWithdrawAddress>): MsgSetWithdrawAddress {
    const message = { ...baseMsgSetWithdrawAddress } as MsgSetWithdrawAddress;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.withdrawAddress !== undefined && object.withdrawAddress !== null) {
      message.withdrawAddress = object.withdrawAddress;
    } else {
      message.withdrawAddress = "";
    }
    return message;
  },
  toJSON(message: MsgSetWithdrawAddress): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.withdrawAddress !== undefined && (obj.withdrawAddress = message.withdrawAddress);
    return obj;
  },
};

export const MsgSetWithdrawAddressResponse = {
  encode(_: MsgSetWithdrawAddressResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgSetWithdrawAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetWithdrawAddressResponse } as MsgSetWithdrawAddressResponse;
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
  fromJSON(_: any): MsgSetWithdrawAddressResponse {
    const message = { ...baseMsgSetWithdrawAddressResponse } as MsgSetWithdrawAddressResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgSetWithdrawAddressResponse>): MsgSetWithdrawAddressResponse {
    const message = { ...baseMsgSetWithdrawAddressResponse } as MsgSetWithdrawAddressResponse;
    return message;
  },
  toJSON(_: MsgSetWithdrawAddressResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const MsgWithdrawDelegatorReward = {
  encode(message: MsgWithdrawDelegatorReward, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.delegatorAddress);
    writer.uint32(18).string(message.validatorAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgWithdrawDelegatorReward {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawDelegatorReward } as MsgWithdrawDelegatorReward;
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
  fromJSON(object: any): MsgWithdrawDelegatorReward {
    const message = { ...baseMsgWithdrawDelegatorReward } as MsgWithdrawDelegatorReward;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdrawDelegatorReward>): MsgWithdrawDelegatorReward {
    const message = { ...baseMsgWithdrawDelegatorReward } as MsgWithdrawDelegatorReward;
    if (object.delegatorAddress !== undefined && object.delegatorAddress !== null) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
  toJSON(message: MsgWithdrawDelegatorReward): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined && (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
};

export const MsgWithdrawDelegatorRewardResponse = {
  encode(_: MsgWithdrawDelegatorRewardResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgWithdrawDelegatorRewardResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawDelegatorRewardResponse } as MsgWithdrawDelegatorRewardResponse;
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
  fromJSON(_: any): MsgWithdrawDelegatorRewardResponse {
    const message = { ...baseMsgWithdrawDelegatorRewardResponse } as MsgWithdrawDelegatorRewardResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgWithdrawDelegatorRewardResponse>): MsgWithdrawDelegatorRewardResponse {
    const message = { ...baseMsgWithdrawDelegatorRewardResponse } as MsgWithdrawDelegatorRewardResponse;
    return message;
  },
  toJSON(_: MsgWithdrawDelegatorRewardResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const MsgWithdrawValidatorCommission = {
  encode(message: MsgWithdrawValidatorCommission, writer: Writer = Writer.create()): Writer {
    writer.uint32(10).string(message.validatorAddress);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgWithdrawValidatorCommission {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawValidatorCommission } as MsgWithdrawValidatorCommission;
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
  fromJSON(object: any): MsgWithdrawValidatorCommission {
    const message = { ...baseMsgWithdrawValidatorCommission } as MsgWithdrawValidatorCommission;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgWithdrawValidatorCommission>): MsgWithdrawValidatorCommission {
    const message = { ...baseMsgWithdrawValidatorCommission } as MsgWithdrawValidatorCommission;
    if (object.validatorAddress !== undefined && object.validatorAddress !== null) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    return message;
  },
  toJSON(message: MsgWithdrawValidatorCommission): unknown {
    const obj: any = {};
    message.validatorAddress !== undefined && (obj.validatorAddress = message.validatorAddress);
    return obj;
  },
};

export const MsgWithdrawValidatorCommissionResponse = {
  encode(_: MsgWithdrawValidatorCommissionResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgWithdrawValidatorCommissionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawValidatorCommissionResponse } as MsgWithdrawValidatorCommissionResponse;
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
  fromJSON(_: any): MsgWithdrawValidatorCommissionResponse {
    const message = { ...baseMsgWithdrawValidatorCommissionResponse } as MsgWithdrawValidatorCommissionResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgWithdrawValidatorCommissionResponse>): MsgWithdrawValidatorCommissionResponse {
    const message = { ...baseMsgWithdrawValidatorCommissionResponse } as MsgWithdrawValidatorCommissionResponse;
    return message;
  },
  toJSON(_: MsgWithdrawValidatorCommissionResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

export const MsgFundCommunityPool = {
  encode(message: MsgFundCommunityPool, writer: Writer = Writer.create()): Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    writer.uint32(18).string(message.depositor);
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgFundCommunityPool {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFundCommunityPool } as MsgFundCommunityPool;
    message.amount = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        case 2:
          message.depositor = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): MsgFundCommunityPool {
    const message = { ...baseMsgFundCommunityPool } as MsgFundCommunityPool;
    message.amount = [];
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromJSON(e));
      }
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = String(object.depositor);
    } else {
      message.depositor = "";
    }
    return message;
  },
  fromPartial(object: DeepPartial<MsgFundCommunityPool>): MsgFundCommunityPool {
    const message = { ...baseMsgFundCommunityPool } as MsgFundCommunityPool;
    message.amount = [];
    if (object.amount !== undefined && object.amount !== null) {
      for (const e of object.amount) {
        message.amount.push(Coin.fromPartial(e));
      }
    }
    if (object.depositor !== undefined && object.depositor !== null) {
      message.depositor = object.depositor;
    } else {
      message.depositor = "";
    }
    return message;
  },
  toJSON(message: MsgFundCommunityPool): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toJSON(e) : undefined);
    } else {
      obj.amount = [];
    }
    message.depositor !== undefined && (obj.depositor = message.depositor);
    return obj;
  },
};

export const MsgFundCommunityPoolResponse = {
  encode(_: MsgFundCommunityPoolResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },
  decode(input: Uint8Array | Reader, length?: number): MsgFundCommunityPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFundCommunityPoolResponse } as MsgFundCommunityPoolResponse;
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
  fromJSON(_: any): MsgFundCommunityPoolResponse {
    const message = { ...baseMsgFundCommunityPoolResponse } as MsgFundCommunityPoolResponse;
    return message;
  },
  fromPartial(_: DeepPartial<MsgFundCommunityPoolResponse>): MsgFundCommunityPoolResponse {
    const message = { ...baseMsgFundCommunityPoolResponse } as MsgFundCommunityPoolResponse;
    return message;
  },
  toJSON(_: MsgFundCommunityPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;