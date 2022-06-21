/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  ContentHash,
  ContentHash_Graph,
  ContentHash_Raw,
} from '../../../regen/data/v1alpha2/types';
import { Timestamp } from '../../../google/protobuf/timestamp';

export const protobufPackage = 'regen.data.v1alpha2';

/** MsgAnchorData is the Msg/AnchorData request type. */
export interface MsgAnchorData {
  $type: 'regen.data.v1alpha2.MsgAnchorData';
  /**
   * sender is the address of the sender of the transaction.
   * The sender in StoreData is not attesting to the veracity of the underlying
   * data. They can simply be a intermediary providing services.
   */
  sender: string;
  /** hash is the hash-based identifier for the anchored content. */
  hash?: ContentHash;
}

/** MsgAnchorData is the Msg/AnchorData response type. */
export interface MsgAnchorDataResponse {
  $type: 'regen.data.v1alpha2.MsgAnchorDataResponse';
  /** timestamp is the timestamp of the block at which the data was anchored. */
  timestamp?: Date;
}

/** MsgSignData is the Msg/SignData request type. */
export interface MsgSignData {
  $type: 'regen.data.v1alpha2.MsgSignData';
  /**
   * signers are the addresses of the accounts signing the data.
   * By making a SignData request, the signers are attesting to the veracity
   * of the data referenced by the cid. The precise meaning of this may vary
   * depending on the underlying data.
   */
  signers: string[];
  /**
   * hash is the hash-based identifier for the anchored content. Only RDF graph
   * data can be signed as its data model is intended to specifically convey
   * semantic meaning.
   */
  hash?: ContentHash_Graph;
}

/** MsgSignDataResponse is the Msg/SignData response type. */
export interface MsgSignDataResponse {
  $type: 'regen.data.v1alpha2.MsgSignDataResponse';
}

/** MsgStoreRawData is the Msg/StoreRawData request type. */
export interface MsgStoreRawData {
  $type: 'regen.data.v1alpha2.MsgStoreRawData';
  /**
   * sender is the address of the sender of the transaction.
   * The sender in StoreData is not attesting to the veracity of the underlying
   * data. They can simply be a intermediary providing services.
   */
  sender: string;
  /** content_hash is the hash-based identifier for the anchored content. */
  contentHash?: ContentHash_Raw;
  /**
   * content is the content of the raw data corresponding to the provided
   * content hash.
   */
  content: Uint8Array;
}

/** MsgStoreRawData is the Msg/StoreRawData response type. */
export interface MsgStoreRawDataResponse {
  $type: 'regen.data.v1alpha2.MsgStoreRawDataResponse';
}

function createBaseMsgAnchorData(): MsgAnchorData {
  return {
    $type: 'regen.data.v1alpha2.MsgAnchorData',
    sender: '',
    hash: undefined,
  };
}

export const MsgAnchorData = {
  $type: 'regen.data.v1alpha2.MsgAnchorData' as const,

  encode(
    message: MsgAnchorData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.hash !== undefined) {
      ContentHash.encode(message.hash, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAnchorData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnchorData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.hash = ContentHash.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAnchorData {
    return {
      $type: MsgAnchorData.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      hash: isSet(object.hash) ? ContentHash.fromJSON(object.hash) : undefined,
    };
  },

  toJSON(message: MsgAnchorData): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.hash !== undefined &&
      (obj.hash = message.hash ? ContentHash.toJSON(message.hash) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAnchorData>, I>>(
    object: I,
  ): MsgAnchorData {
    const message = createBaseMsgAnchorData();
    message.sender = object.sender ?? '';
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? ContentHash.fromPartial(object.hash)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgAnchorData.$type, MsgAnchorData);

function createBaseMsgAnchorDataResponse(): MsgAnchorDataResponse {
  return {
    $type: 'regen.data.v1alpha2.MsgAnchorDataResponse',
    timestamp: undefined,
  };
}

export const MsgAnchorDataResponse = {
  $type: 'regen.data.v1alpha2.MsgAnchorDataResponse' as const,

  encode(
    message: MsgAnchorDataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.timestamp !== undefined) {
      Timestamp.encode(
        toTimestamp(message.timestamp),
        writer.uint32(10).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgAnchorDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAnchorDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.timestamp = fromTimestamp(
            Timestamp.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAnchorDataResponse {
    return {
      $type: MsgAnchorDataResponse.$type,
      timestamp: isSet(object.timestamp)
        ? fromJsonTimestamp(object.timestamp)
        : undefined,
    };
  },

  toJSON(message: MsgAnchorDataResponse): unknown {
    const obj: any = {};
    message.timestamp !== undefined &&
      (obj.timestamp = message.timestamp.toISOString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAnchorDataResponse>, I>>(
    object: I,
  ): MsgAnchorDataResponse {
    const message = createBaseMsgAnchorDataResponse();
    message.timestamp = object.timestamp ?? undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgAnchorDataResponse.$type, MsgAnchorDataResponse);

function createBaseMsgSignData(): MsgSignData {
  return {
    $type: 'regen.data.v1alpha2.MsgSignData',
    signers: [],
    hash: undefined,
  };
}

export const MsgSignData = {
  $type: 'regen.data.v1alpha2.MsgSignData' as const,

  encode(
    message: MsgSignData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.signers) {
      writer.uint32(10).string(v!);
    }
    if (message.hash !== undefined) {
      ContentHash_Graph.encode(message.hash, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signers.push(reader.string());
          break;
        case 2:
          message.hash = ContentHash_Graph.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSignData {
    return {
      $type: MsgSignData.$type,
      signers: Array.isArray(object?.signers)
        ? object.signers.map((e: any) => String(e))
        : [],
      hash: isSet(object.hash)
        ? ContentHash_Graph.fromJSON(object.hash)
        : undefined,
    };
  },

  toJSON(message: MsgSignData): unknown {
    const obj: any = {};
    if (message.signers) {
      obj.signers = message.signers.map(e => e);
    } else {
      obj.signers = [];
    }
    message.hash !== undefined &&
      (obj.hash = message.hash
        ? ContentHash_Graph.toJSON(message.hash)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignData>, I>>(
    object: I,
  ): MsgSignData {
    const message = createBaseMsgSignData();
    message.signers = object.signers?.map(e => e) || [];
    message.hash =
      object.hash !== undefined && object.hash !== null
        ? ContentHash_Graph.fromPartial(object.hash)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(MsgSignData.$type, MsgSignData);

function createBaseMsgSignDataResponse(): MsgSignDataResponse {
  return { $type: 'regen.data.v1alpha2.MsgSignDataResponse' };
}

export const MsgSignDataResponse = {
  $type: 'regen.data.v1alpha2.MsgSignDataResponse' as const,

  encode(
    _: MsgSignDataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignDataResponse();
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

  fromJSON(_: any): MsgSignDataResponse {
    return {
      $type: MsgSignDataResponse.$type,
    };
  },

  toJSON(_: MsgSignDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignDataResponse>, I>>(
    _: I,
  ): MsgSignDataResponse {
    const message = createBaseMsgSignDataResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgSignDataResponse.$type, MsgSignDataResponse);

function createBaseMsgStoreRawData(): MsgStoreRawData {
  return {
    $type: 'regen.data.v1alpha2.MsgStoreRawData',
    sender: '',
    contentHash: undefined,
    content: new Uint8Array(),
  };
}

export const MsgStoreRawData = {
  $type: 'regen.data.v1alpha2.MsgStoreRawData' as const,

  encode(
    message: MsgStoreRawData,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender);
    }
    if (message.contentHash !== undefined) {
      ContentHash_Raw.encode(
        message.contentHash,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    if (message.content.length !== 0) {
      writer.uint32(26).bytes(message.content);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStoreRawData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreRawData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.contentHash = ContentHash_Raw.decode(reader, reader.uint32());
          break;
        case 3:
          message.content = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStoreRawData {
    return {
      $type: MsgStoreRawData.$type,
      sender: isSet(object.sender) ? String(object.sender) : '',
      contentHash: isSet(object.contentHash)
        ? ContentHash_Raw.fromJSON(object.contentHash)
        : undefined,
      content: isSet(object.content)
        ? bytesFromBase64(object.content)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgStoreRawData): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.contentHash !== undefined &&
      (obj.contentHash = message.contentHash
        ? ContentHash_Raw.toJSON(message.contentHash)
        : undefined);
    message.content !== undefined &&
      (obj.content = base64FromBytes(
        message.content !== undefined ? message.content : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStoreRawData>, I>>(
    object: I,
  ): MsgStoreRawData {
    const message = createBaseMsgStoreRawData();
    message.sender = object.sender ?? '';
    message.contentHash =
      object.contentHash !== undefined && object.contentHash !== null
        ? ContentHash_Raw.fromPartial(object.contentHash)
        : undefined;
    message.content = object.content ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(MsgStoreRawData.$type, MsgStoreRawData);

function createBaseMsgStoreRawDataResponse(): MsgStoreRawDataResponse {
  return { $type: 'regen.data.v1alpha2.MsgStoreRawDataResponse' };
}

export const MsgStoreRawDataResponse = {
  $type: 'regen.data.v1alpha2.MsgStoreRawDataResponse' as const,

  encode(
    _: MsgStoreRawDataResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): MsgStoreRawDataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStoreRawDataResponse();
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

  fromJSON(_: any): MsgStoreRawDataResponse {
    return {
      $type: MsgStoreRawDataResponse.$type,
    };
  },

  toJSON(_: MsgStoreRawDataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStoreRawDataResponse>, I>>(
    _: I,
  ): MsgStoreRawDataResponse {
    const message = createBaseMsgStoreRawDataResponse();
    return message;
  },
};

messageTypeRegistry.set(MsgStoreRawDataResponse.$type, MsgStoreRawDataResponse);

/** Msg is the regen.data.v1alpha1 Msg service */
export interface Msg {
  /**
   * AnchorData "anchors" a piece of data to the blockchain based on its secure
   * hash, effectively providing a tamper resistant timestamp.
   *
   * The sender in AnchorData is not attesting to the veracity of the underlying
   * data. They can simply be a intermediary providing timestamp services.
   * SignData should be used to create a digital signature attesting to the
   * veracity of some piece of data.
   */
  AnchorData(
    request: DeepPartial<MsgAnchorData>,
  ): Promise<MsgAnchorDataResponse>;
  /**
   * SignData allows for signing of an arbitrary piece of data on the
   * blockchain. By "signing" data the signers are making a statement about the
   * veracity of the data itself. It is like signing a legal document, meaning
   * that I agree to all conditions and to the best of my knowledge everything
   * is true. When anchoring data, the sender is not attesting to the veracity
   * of the data, they are simply communicating that it exists.
   *
   * On-chain signatures have the following benefits:
   * - on-chain identities can be managed using different cryptographic keys
   *   that change over time through key rotation practices
   * - an on-chain identity may represent an organization and through delegation
   *   individual members may sign on behalf of the group
   * - the blockchain transaction envelope provides built-in replay protection
   *   and timestamping
   *
   * SignData implicitly calls AnchorData if the data was not already anchored.
   *
   * SignData can be called multiple times for the same content hash with
   * different signers and those signers will be appended to the list of
   * signers.
   */
  SignData(request: DeepPartial<MsgSignData>): Promise<MsgSignDataResponse>;
  /**
   * StoreRawData stores a piece of raw data corresponding to an ContentHash.Raw
   * on the blockchain.
   *
   * StoreRawData implicitly calls AnchorData if the data was not already
   * anchored.
   *
   * The sender in StoreRawData is not attesting to the veracity of the
   * underlying data. They can simply be a intermediary providing storage
   * services. SignData should be used to create a digital signature attesting
   * to the veracity of some piece of data.
   */
  StoreRawData(
    request: DeepPartial<MsgStoreRawData>,
  ): Promise<MsgStoreRawDataResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AnchorData = this.AnchorData.bind(this);
    this.SignData = this.SignData.bind(this);
    this.StoreRawData = this.StoreRawData.bind(this);
  }
  AnchorData(
    request: DeepPartial<MsgAnchorData>,
  ): Promise<MsgAnchorDataResponse> {
    const fromPartial = MsgAnchorData.fromPartial(request);
    const data = MsgAnchorData.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha2.Msg',
      'AnchorData',
      data,
    );
    return promise.then(data =>
      MsgAnchorDataResponse.decode(new _m0.Reader(data)),
    );
  }

  SignData(request: DeepPartial<MsgSignData>): Promise<MsgSignDataResponse> {
    const fromPartial = MsgSignData.fromPartial(request);
    const data = MsgSignData.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha2.Msg',
      'SignData',
      data,
    );
    return promise.then(data =>
      MsgSignDataResponse.decode(new _m0.Reader(data)),
    );
  }

  StoreRawData(
    request: DeepPartial<MsgStoreRawData>,
  ): Promise<MsgStoreRawDataResponse> {
    const fromPartial = MsgStoreRawData.fromPartial(request);
    const data = MsgStoreRawData.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'regen.data.v1alpha2.Msg',
      'StoreRawData',
      data,
    );
    return promise.then(data =>
      MsgStoreRawDataResponse.decode(new _m0.Reader(data)),
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array,
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis;
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw 'Unable to locate global object';
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  (b64 => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  (bin => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte));
  }
  return btoa(bin.join(''));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Long
  ? string | number | Long
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in Exclude<keyof T, '$type'>]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P> | '$type'>,
        never
      >;

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { $type: 'google.protobuf.Timestamp', seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === 'string') {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
