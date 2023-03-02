/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { Params, IdentifiedClientState, ClientConsensusStates } from './client';

export const protobufPackage = 'ibc.core.client.v1';

/** GenesisState defines the ibc client submodule's genesis state. */
export interface GenesisState {
  $type: 'ibc.core.client.v1.GenesisState';
  /** client states with their corresponding identifiers */
  clients: IdentifiedClientState[];
  /** consensus states from each client */
  clientsConsensus: ClientConsensusStates[];
  /** metadata from each client */
  clientsMetadata: IdentifiedGenesisMetadata[];
  params?: Params;
  /** create localhost on initialization */
  createLocalhost: boolean;
  /** the sequence for the next generated client identifier */
  nextClientSequence: Long;
}

/**
 * GenesisMetadata defines the genesis type for metadata that clients may return
 * with ExportMetadata
 */
export interface GenesisMetadata {
  $type: 'ibc.core.client.v1.GenesisMetadata';
  /** store key of metadata without clientID-prefix */
  key: Uint8Array;
  /** metadata value */
  value: Uint8Array;
}

/**
 * IdentifiedGenesisMetadata has the client metadata with the corresponding
 * client id.
 */
export interface IdentifiedGenesisMetadata {
  $type: 'ibc.core.client.v1.IdentifiedGenesisMetadata';
  clientId: string;
  clientMetadata: GenesisMetadata[];
}

function createBaseGenesisState(): GenesisState {
  return {
    $type: 'ibc.core.client.v1.GenesisState',
    clients: [],
    clientsConsensus: [],
    clientsMetadata: [],
    params: undefined,
    createLocalhost: false,
    nextClientSequence: Long.UZERO,
  };
}

export const GenesisState = {
  $type: 'ibc.core.client.v1.GenesisState' as const,

  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.clients) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.clientsConsensus) {
      ClientConsensusStates.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.clientsMetadata) {
      IdentifiedGenesisMetadata.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim();
    }
    if (message.createLocalhost === true) {
      writer.uint32(40).bool(message.createLocalhost);
    }
    if (!message.nextClientSequence.isZero()) {
      writer.uint32(48).uint64(message.nextClientSequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clients.push(
            IdentifiedClientState.decode(reader, reader.uint32()),
          );
          break;
        case 2:
          message.clientsConsensus.push(
            ClientConsensusStates.decode(reader, reader.uint32()),
          );
          break;
        case 3:
          message.clientsMetadata.push(
            IdentifiedGenesisMetadata.decode(reader, reader.uint32()),
          );
          break;
        case 4:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 5:
          message.createLocalhost = reader.bool();
          break;
        case 6:
          message.nextClientSequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      $type: GenesisState.$type,
      clients: Array.isArray(object?.clients)
        ? object.clients.map((e: any) => IdentifiedClientState.fromJSON(e))
        : [],
      clientsConsensus: Array.isArray(object?.clientsConsensus)
        ? object.clientsConsensus.map((e: any) =>
            ClientConsensusStates.fromJSON(e),
          )
        : [],
      clientsMetadata: Array.isArray(object?.clientsMetadata)
        ? object.clientsMetadata.map((e: any) =>
            IdentifiedGenesisMetadata.fromJSON(e),
          )
        : [],
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      createLocalhost: isSet(object.createLocalhost)
        ? Boolean(object.createLocalhost)
        : false,
      nextClientSequence: isSet(object.nextClientSequence)
        ? Long.fromString(object.nextClientSequence)
        : Long.UZERO,
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    if (message.clients) {
      obj.clients = message.clients.map(e =>
        e ? IdentifiedClientState.toJSON(e) : undefined,
      );
    } else {
      obj.clients = [];
    }
    if (message.clientsConsensus) {
      obj.clientsConsensus = message.clientsConsensus.map(e =>
        e ? ClientConsensusStates.toJSON(e) : undefined,
      );
    } else {
      obj.clientsConsensus = [];
    }
    if (message.clientsMetadata) {
      obj.clientsMetadata = message.clientsMetadata.map(e =>
        e ? IdentifiedGenesisMetadata.toJSON(e) : undefined,
      );
    } else {
      obj.clientsMetadata = [];
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.createLocalhost !== undefined &&
      (obj.createLocalhost = message.createLocalhost);
    message.nextClientSequence !== undefined &&
      (obj.nextClientSequence = (
        message.nextClientSequence || Long.UZERO
      ).toString());
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I,
  ): GenesisState {
    const message = createBaseGenesisState();
    message.clients =
      object.clients?.map(e => IdentifiedClientState.fromPartial(e)) || [];
    message.clientsConsensus =
      object.clientsConsensus?.map(e => ClientConsensusStates.fromPartial(e)) ||
      [];
    message.clientsMetadata =
      object.clientsMetadata?.map(e =>
        IdentifiedGenesisMetadata.fromPartial(e),
      ) || [];
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.createLocalhost = object.createLocalhost ?? false;
    message.nextClientSequence =
      object.nextClientSequence !== undefined &&
      object.nextClientSequence !== null
        ? Long.fromValue(object.nextClientSequence)
        : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(GenesisState.$type, GenesisState);

function createBaseGenesisMetadata(): GenesisMetadata {
  return {
    $type: 'ibc.core.client.v1.GenesisMetadata',
    key: new Uint8Array(),
    value: new Uint8Array(),
  };
}

export const GenesisMetadata = {
  $type: 'ibc.core.client.v1.GenesisMetadata' as const,

  encode(
    message: GenesisMetadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(18).bytes(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        case 2:
          message.value = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisMetadata {
    return {
      $type: GenesisMetadata.$type,
      key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
      value: isSet(object.value)
        ? bytesFromBase64(object.value)
        : new Uint8Array(),
    };
  },

  toJSON(message: GenesisMetadata): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array(),
      ));
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisMetadata>, I>>(
    object: I,
  ): GenesisMetadata {
    const message = createBaseGenesisMetadata();
    message.key = object.key ?? new Uint8Array();
    message.value = object.value ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(GenesisMetadata.$type, GenesisMetadata);

function createBaseIdentifiedGenesisMetadata(): IdentifiedGenesisMetadata {
  return {
    $type: 'ibc.core.client.v1.IdentifiedGenesisMetadata',
    clientId: '',
    clientMetadata: [],
  };
}

export const IdentifiedGenesisMetadata = {
  $type: 'ibc.core.client.v1.IdentifiedGenesisMetadata' as const,

  encode(
    message: IdentifiedGenesisMetadata,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.clientId !== '') {
      writer.uint32(10).string(message.clientId);
    }
    for (const v of message.clientMetadata) {
      GenesisMetadata.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): IdentifiedGenesisMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIdentifiedGenesisMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.clientMetadata.push(
            GenesisMetadata.decode(reader, reader.uint32()),
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IdentifiedGenesisMetadata {
    return {
      $type: IdentifiedGenesisMetadata.$type,
      clientId: isSet(object.clientId) ? String(object.clientId) : '',
      clientMetadata: Array.isArray(object?.clientMetadata)
        ? object.clientMetadata.map((e: any) => GenesisMetadata.fromJSON(e))
        : [],
    };
  },

  toJSON(message: IdentifiedGenesisMetadata): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    if (message.clientMetadata) {
      obj.clientMetadata = message.clientMetadata.map(e =>
        e ? GenesisMetadata.toJSON(e) : undefined,
      );
    } else {
      obj.clientMetadata = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IdentifiedGenesisMetadata>, I>>(
    object: I,
  ): IdentifiedGenesisMetadata {
    const message = createBaseIdentifiedGenesisMetadata();
    message.clientId = object.clientId ?? '';
    message.clientMetadata =
      object.clientMetadata?.map(e => GenesisMetadata.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(
  IdentifiedGenesisMetadata.$type,
  IdentifiedGenesisMetadata,
);

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

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
