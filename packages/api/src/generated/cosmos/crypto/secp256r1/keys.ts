/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";

export const protobufPackage = "cosmos.crypto.secp256r1";

/** Since: cosmos-sdk 0.43 */

/** PubKey defines a secp256r1 ECDSA public key. */
export interface PubKey {
  $type: "cosmos.crypto.secp256r1.PubKey";
  /**
   * Point on secp256r1 curve in a compressed representation as specified in section
   * 4.3.6 of ANSI X9.62: https://webstore.ansi.org/standards/ascx9/ansix9621998
   */
  key: Uint8Array;
}

/** PrivKey defines a secp256r1 ECDSA private key. */
export interface PrivKey {
  $type: "cosmos.crypto.secp256r1.PrivKey";
  /** secret number serialized using big-endian encoding */
  secret: Uint8Array;
}

function createBasePubKey(): PubKey {
  return { $type: "cosmos.crypto.secp256r1.PubKey", key: new Uint8Array() };
}

export const PubKey = {
  $type: "cosmos.crypto.secp256r1.PubKey" as const,

  encode(message: PubKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PubKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePubKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PubKey {
    return { $type: PubKey.$type, key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array() };
  },

  toJSON(message: PubKey): unknown {
    const obj: any = {};
    message.key !== undefined &&
      (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<PubKey>): PubKey {
    return PubKey.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PubKey>): PubKey {
    const message = createBasePubKey();
    message.key = object.key ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(PubKey.$type, PubKey);

function createBasePrivKey(): PrivKey {
  return { $type: "cosmos.crypto.secp256r1.PrivKey", secret: new Uint8Array() };
}

export const PrivKey = {
  $type: "cosmos.crypto.secp256r1.PrivKey" as const,

  encode(message: PrivKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.secret.length !== 0) {
      writer.uint32(10).bytes(message.secret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PrivKey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePrivKey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.secret = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PrivKey {
    return { $type: PrivKey.$type, secret: isSet(object.secret) ? bytesFromBase64(object.secret) : new Uint8Array() };
  },

  toJSON(message: PrivKey): unknown {
    const obj: any = {};
    message.secret !== undefined &&
      (obj.secret = base64FromBytes(message.secret !== undefined ? message.secret : new Uint8Array()));
    return obj;
  },

  create(base?: DeepPartial<PrivKey>): PrivKey {
    return PrivKey.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<PrivKey>): PrivKey {
    const message = createBasePrivKey();
    message.secret = object.secret ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(PrivKey.$type, PrivKey);

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (tsProtoGlobalThis.Buffer) {
    return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = tsProtoGlobalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (tsProtoGlobalThis.Buffer) {
    return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return tsProtoGlobalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in Exclude<keyof T, "$type">]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}