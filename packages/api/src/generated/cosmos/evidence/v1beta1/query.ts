/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Any } from "../../../google/protobuf/any";
import { messageTypeRegistry } from "../../../typeRegistry";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination";

export const protobufPackage = "cosmos.evidence.v1beta1";

/** QueryEvidenceRequest is the request type for the Query/Evidence RPC method. */
export interface QueryEvidenceRequest {
  $type: "cosmos.evidence.v1beta1.QueryEvidenceRequest";
  /** evidence_hash defines the hash of the requested evidence. */
  evidenceHash: Uint8Array;
}

/** QueryEvidenceResponse is the response type for the Query/Evidence RPC method. */
export interface QueryEvidenceResponse {
  $type: "cosmos.evidence.v1beta1.QueryEvidenceResponse";
  /** evidence returns the requested evidence. */
  evidence?: Any;
}

/**
 * QueryEvidenceRequest is the request type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceRequest {
  $type: "cosmos.evidence.v1beta1.QueryAllEvidenceRequest";
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryAllEvidenceResponse is the response type for the Query/AllEvidence RPC
 * method.
 */
export interface QueryAllEvidenceResponse {
  $type: "cosmos.evidence.v1beta1.QueryAllEvidenceResponse";
  /** evidence returns all evidences. */
  evidence: Any[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

function createBaseQueryEvidenceRequest(): QueryEvidenceRequest {
  return { $type: "cosmos.evidence.v1beta1.QueryEvidenceRequest", evidenceHash: new Uint8Array() };
}

export const QueryEvidenceRequest = {
  $type: "cosmos.evidence.v1beta1.QueryEvidenceRequest" as const,

  encode(message: QueryEvidenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.evidenceHash.length !== 0) {
      writer.uint32(10).bytes(message.evidenceHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEvidenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidenceHash = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEvidenceRequest {
    return {
      $type: QueryEvidenceRequest.$type,
      evidenceHash: isSet(object.evidenceHash) ? bytesFromBase64(object.evidenceHash) : new Uint8Array(),
    };
  },

  toJSON(message: QueryEvidenceRequest): unknown {
    const obj: any = {};
    message.evidenceHash !== undefined &&
      (obj.evidenceHash = base64FromBytes(
        message.evidenceHash !== undefined ? message.evidenceHash : new Uint8Array(),
      ));
    return obj;
  },

  create(base?: DeepPartial<QueryEvidenceRequest>): QueryEvidenceRequest {
    return QueryEvidenceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryEvidenceRequest>): QueryEvidenceRequest {
    const message = createBaseQueryEvidenceRequest();
    message.evidenceHash = object.evidenceHash ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(QueryEvidenceRequest.$type, QueryEvidenceRequest);

function createBaseQueryEvidenceResponse(): QueryEvidenceResponse {
  return { $type: "cosmos.evidence.v1beta1.QueryEvidenceResponse", evidence: undefined };
}

export const QueryEvidenceResponse = {
  $type: "cosmos.evidence.v1beta1.QueryEvidenceResponse" as const,

  encode(message: QueryEvidenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.evidence !== undefined) {
      Any.encode(message.evidence, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryEvidenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEvidenceResponse {
    return {
      $type: QueryEvidenceResponse.$type,
      evidence: isSet(object.evidence) ? Any.fromJSON(object.evidence) : undefined,
    };
  },

  toJSON(message: QueryEvidenceResponse): unknown {
    const obj: any = {};
    message.evidence !== undefined && (obj.evidence = message.evidence ? Any.toJSON(message.evidence) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryEvidenceResponse>): QueryEvidenceResponse {
    return QueryEvidenceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryEvidenceResponse>): QueryEvidenceResponse {
    const message = createBaseQueryEvidenceResponse();
    message.evidence = (object.evidence !== undefined && object.evidence !== null)
      ? Any.fromPartial(object.evidence)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryEvidenceResponse.$type, QueryEvidenceResponse);

function createBaseQueryAllEvidenceRequest(): QueryAllEvidenceRequest {
  return { $type: "cosmos.evidence.v1beta1.QueryAllEvidenceRequest", pagination: undefined };
}

export const QueryAllEvidenceRequest = {
  $type: "cosmos.evidence.v1beta1.QueryAllEvidenceRequest" as const,

  encode(message: QueryAllEvidenceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEvidenceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEvidenceRequest();
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

  fromJSON(object: any): QueryAllEvidenceRequest {
    return {
      $type: QueryAllEvidenceRequest.$type,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllEvidenceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllEvidenceRequest>): QueryAllEvidenceRequest {
    return QueryAllEvidenceRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllEvidenceRequest>): QueryAllEvidenceRequest {
    const message = createBaseQueryAllEvidenceRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAllEvidenceRequest.$type, QueryAllEvidenceRequest);

function createBaseQueryAllEvidenceResponse(): QueryAllEvidenceResponse {
  return { $type: "cosmos.evidence.v1beta1.QueryAllEvidenceResponse", evidence: [], pagination: undefined };
}

export const QueryAllEvidenceResponse = {
  $type: "cosmos.evidence.v1beta1.QueryAllEvidenceResponse" as const,

  encode(message: QueryAllEvidenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.evidence) {
      Any.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllEvidenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.evidence.push(Any.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryAllEvidenceResponse {
    return {
      $type: QueryAllEvidenceResponse.$type,
      evidence: Array.isArray(object?.evidence) ? object.evidence.map((e: any) => Any.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryAllEvidenceResponse): unknown {
    const obj: any = {};
    if (message.evidence) {
      obj.evidence = message.evidence.map((e) => e ? Any.toJSON(e) : undefined);
    } else {
      obj.evidence = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryAllEvidenceResponse>): QueryAllEvidenceResponse {
    return QueryAllEvidenceResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAllEvidenceResponse>): QueryAllEvidenceResponse {
    const message = createBaseQueryAllEvidenceResponse();
    message.evidence = object.evidence?.map((e) => Any.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryAllEvidenceResponse.$type, QueryAllEvidenceResponse);

/** Query defines the gRPC querier service. */
export interface Query {
  /** Evidence queries evidence based on evidence hash. */
  Evidence(request: DeepPartial<QueryEvidenceRequest>): Promise<QueryEvidenceResponse>;
  /** AllEvidence queries all evidence. */
  AllEvidence(request: DeepPartial<QueryAllEvidenceRequest>): Promise<QueryAllEvidenceResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.evidence.v1beta1.Query";
    this.rpc = rpc;
    this.Evidence = this.Evidence.bind(this);
    this.AllEvidence = this.AllEvidence.bind(this);
  }
  Evidence(request: DeepPartial<QueryEvidenceRequest>): Promise<QueryEvidenceResponse> {
    const fromPartial = QueryEvidenceRequest.fromPartial(request);
    const data = QueryEvidenceRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Evidence", data);
    return promise.then((data) => QueryEvidenceResponse.decode(new _m0.Reader(data)));
  }

  AllEvidence(request: DeepPartial<QueryAllEvidenceRequest>): Promise<QueryAllEvidenceResponse> {
    const fromPartial = QueryAllEvidenceRequest.fromPartial(request);
    const data = QueryAllEvidenceRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "AllEvidence", data);
    return promise.then((data) => QueryAllEvidenceResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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