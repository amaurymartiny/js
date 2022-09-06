/* eslint-disable */
import { messageTypeRegistry } from '../../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import {
  DenomTrace,
  Params,
} from '../../../../ibc/applications/transfer/v1/transfer';
import {
  PageRequest,
  PageResponse,
} from '../../../../cosmos/base/query/v1beta1/pagination';

export const protobufPackage = 'ibc.applications.transfer.v1';

/**
 * QueryDenomTraceRequest is the request type for the Query/DenomTrace RPC
 * method
 */
export interface QueryDenomTraceRequest {
  $type: 'ibc.applications.transfer.v1.QueryDenomTraceRequest';
  /** hash (in hex format) or denom (full denom with ibc prefix) of the denomination trace information. */
  hash: string;
}

/**
 * QueryDenomTraceResponse is the response type for the Query/DenomTrace RPC
 * method.
 */
export interface QueryDenomTraceResponse {
  $type: 'ibc.applications.transfer.v1.QueryDenomTraceResponse';
  /** denom_trace returns the requested denomination trace information. */
  denomTrace?: DenomTrace;
}

/**
 * QueryConnectionsRequest is the request type for the Query/DenomTraces RPC
 * method
 */
export interface QueryDenomTracesRequest {
  $type: 'ibc.applications.transfer.v1.QueryDenomTracesRequest';
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest;
}

/**
 * QueryConnectionsResponse is the response type for the Query/DenomTraces RPC
 * method.
 */
export interface QueryDenomTracesResponse {
  $type: 'ibc.applications.transfer.v1.QueryDenomTracesResponse';
  /** denom_traces returns all denominations trace information. */
  denomTraces: DenomTrace[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponse;
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
  $type: 'ibc.applications.transfer.v1.QueryParamsRequest';
}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  $type: 'ibc.applications.transfer.v1.QueryParamsResponse';
  /** params defines the parameters of the module. */
  params?: Params;
}

/**
 * QueryDenomHashRequest is the request type for the Query/DenomHash RPC
 * method
 */
export interface QueryDenomHashRequest {
  $type: 'ibc.applications.transfer.v1.QueryDenomHashRequest';
  /** The denomination trace ([port_id]/[channel_id])+/[denom] */
  trace: string;
}

/**
 * QueryDenomHashResponse is the response type for the Query/DenomHash RPC
 * method.
 */
export interface QueryDenomHashResponse {
  $type: 'ibc.applications.transfer.v1.QueryDenomHashResponse';
  /** hash (in hex format) of the denomination trace information. */
  hash: string;
}

/** QueryEscrowAddressRequest is the request type for the EscrowAddress RPC method. */
export interface QueryEscrowAddressRequest {
  $type: 'ibc.applications.transfer.v1.QueryEscrowAddressRequest';
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}

/** QueryEscrowAddressResponse is the response type of the EscrowAddress RPC method. */
export interface QueryEscrowAddressResponse {
  $type: 'ibc.applications.transfer.v1.QueryEscrowAddressResponse';
  /** the escrow account address */
  escrowAddress: string;
}

function createBaseQueryDenomTraceRequest(): QueryDenomTraceRequest {
  return {
    $type: 'ibc.applications.transfer.v1.QueryDenomTraceRequest',
    hash: '',
  };
}

export const QueryDenomTraceRequest = {
  $type: 'ibc.applications.transfer.v1.QueryDenomTraceRequest' as const,

  encode(
    message: QueryDenomTraceRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hash !== '') {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDenomTraceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomTraceRequest {
    return {
      $type: QueryDenomTraceRequest.$type,
      hash: isSet(object.hash) ? String(object.hash) : '',
    };
  },

  toJSON(message: QueryDenomTraceRequest): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomTraceRequest>, I>>(
    object: I,
  ): QueryDenomTraceRequest {
    const message = createBaseQueryDenomTraceRequest();
    message.hash = object.hash ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryDenomTraceRequest.$type, QueryDenomTraceRequest);

function createBaseQueryDenomTraceResponse(): QueryDenomTraceResponse {
  return {
    $type: 'ibc.applications.transfer.v1.QueryDenomTraceResponse',
    denomTrace: undefined,
  };
}

export const QueryDenomTraceResponse = {
  $type: 'ibc.applications.transfer.v1.QueryDenomTraceResponse' as const,

  encode(
    message: QueryDenomTraceResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.denomTrace !== undefined) {
      DenomTrace.encode(message.denomTrace, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDenomTraceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTraceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTrace = DenomTrace.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomTraceResponse {
    return {
      $type: QueryDenomTraceResponse.$type,
      denomTrace: isSet(object.denomTrace)
        ? DenomTrace.fromJSON(object.denomTrace)
        : undefined,
    };
  },

  toJSON(message: QueryDenomTraceResponse): unknown {
    const obj: any = {};
    message.denomTrace !== undefined &&
      (obj.denomTrace = message.denomTrace
        ? DenomTrace.toJSON(message.denomTrace)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomTraceResponse>, I>>(
    object: I,
  ): QueryDenomTraceResponse {
    const message = createBaseQueryDenomTraceResponse();
    message.denomTrace =
      object.denomTrace !== undefined && object.denomTrace !== null
        ? DenomTrace.fromPartial(object.denomTrace)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDenomTraceResponse.$type, QueryDenomTraceResponse);

function createBaseQueryDenomTracesRequest(): QueryDenomTracesRequest {
  return {
    $type: 'ibc.applications.transfer.v1.QueryDenomTracesRequest',
    pagination: undefined,
  };
}

export const QueryDenomTracesRequest = {
  $type: 'ibc.applications.transfer.v1.QueryDenomTracesRequest' as const,

  encode(
    message: QueryDenomTracesRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDenomTracesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesRequest();
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

  fromJSON(object: any): QueryDenomTracesRequest {
    return {
      $type: QueryDenomTracesRequest.$type,
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDenomTracesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomTracesRequest>, I>>(
    object: I,
  ): QueryDenomTracesRequest {
    const message = createBaseQueryDenomTracesRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryDenomTracesRequest.$type, QueryDenomTracesRequest);

function createBaseQueryDenomTracesResponse(): QueryDenomTracesResponse {
  return {
    $type: 'ibc.applications.transfer.v1.QueryDenomTracesResponse',
    denomTraces: [],
    pagination: undefined,
  };
}

export const QueryDenomTracesResponse = {
  $type: 'ibc.applications.transfer.v1.QueryDenomTracesResponse' as const,

  encode(
    message: QueryDenomTracesResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.denomTraces) {
      DenomTrace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDenomTracesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomTracesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomTraces.push(DenomTrace.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDenomTracesResponse {
    return {
      $type: QueryDenomTracesResponse.$type,
      denomTraces: Array.isArray(object?.denomTraces)
        ? object.denomTraces.map((e: any) => DenomTrace.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDenomTracesResponse): unknown {
    const obj: any = {};
    if (message.denomTraces) {
      obj.denomTraces = message.denomTraces.map(e =>
        e ? DenomTrace.toJSON(e) : undefined,
      );
    } else {
      obj.denomTraces = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomTracesResponse>, I>>(
    object: I,
  ): QueryDenomTracesResponse {
    const message = createBaseQueryDenomTracesResponse();
    message.denomTraces =
      object.denomTraces?.map(e => DenomTrace.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryDenomTracesResponse.$type,
  QueryDenomTracesResponse,
);

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { $type: 'ibc.applications.transfer.v1.QueryParamsRequest' };
}

export const QueryParamsRequest = {
  $type: 'ibc.applications.transfer.v1.QueryParamsRequest' as const,

  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
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

  fromJSON(_: any): QueryParamsRequest {
    return {
      $type: QueryParamsRequest.$type,
    };
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I,
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

messageTypeRegistry.set(QueryParamsRequest.$type, QueryParamsRequest);

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return {
    $type: 'ibc.applications.transfer.v1.QueryParamsResponse',
    params: undefined,
  };
}

export const QueryParamsResponse = {
  $type: 'ibc.applications.transfer.v1.QueryParamsResponse' as const,

  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      $type: QueryParamsResponse.$type,
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I,
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryParamsResponse.$type, QueryParamsResponse);

function createBaseQueryDenomHashRequest(): QueryDenomHashRequest {
  return {
    $type: 'ibc.applications.transfer.v1.QueryDenomHashRequest',
    trace: '',
  };
}

export const QueryDenomHashRequest = {
  $type: 'ibc.applications.transfer.v1.QueryDenomHashRequest' as const,

  encode(
    message: QueryDenomHashRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.trace !== '') {
      writer.uint32(10).string(message.trace);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDenomHashRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.trace = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomHashRequest {
    return {
      $type: QueryDenomHashRequest.$type,
      trace: isSet(object.trace) ? String(object.trace) : '',
    };
  },

  toJSON(message: QueryDenomHashRequest): unknown {
    const obj: any = {};
    message.trace !== undefined && (obj.trace = message.trace);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomHashRequest>, I>>(
    object: I,
  ): QueryDenomHashRequest {
    const message = createBaseQueryDenomHashRequest();
    message.trace = object.trace ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryDenomHashRequest.$type, QueryDenomHashRequest);

function createBaseQueryDenomHashResponse(): QueryDenomHashResponse {
  return {
    $type: 'ibc.applications.transfer.v1.QueryDenomHashResponse',
    hash: '',
  };
}

export const QueryDenomHashResponse = {
  $type: 'ibc.applications.transfer.v1.QueryDenomHashResponse' as const,

  encode(
    message: QueryDenomHashResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.hash !== '') {
      writer.uint32(10).string(message.hash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryDenomHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomHashResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomHashResponse {
    return {
      $type: QueryDenomHashResponse.$type,
      hash: isSet(object.hash) ? String(object.hash) : '',
    };
  },

  toJSON(message: QueryDenomHashResponse): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomHashResponse>, I>>(
    object: I,
  ): QueryDenomHashResponse {
    const message = createBaseQueryDenomHashResponse();
    message.hash = object.hash ?? '';
    return message;
  },
};

messageTypeRegistry.set(QueryDenomHashResponse.$type, QueryDenomHashResponse);

function createBaseQueryEscrowAddressRequest(): QueryEscrowAddressRequest {
  return {
    $type: 'ibc.applications.transfer.v1.QueryEscrowAddressRequest',
    portId: '',
    channelId: '',
  };
}

export const QueryEscrowAddressRequest = {
  $type: 'ibc.applications.transfer.v1.QueryEscrowAddressRequest' as const,

  encode(
    message: QueryEscrowAddressRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.portId !== '') {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== '') {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryEscrowAddressRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowAddressRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEscrowAddressRequest {
    return {
      $type: QueryEscrowAddressRequest.$type,
      portId: isSet(object.portId) ? String(object.portId) : '',
      channelId: isSet(object.channelId) ? String(object.channelId) : '',
    };
  },

  toJSON(message: QueryEscrowAddressRequest): unknown {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEscrowAddressRequest>, I>>(
    object: I,
  ): QueryEscrowAddressRequest {
    const message = createBaseQueryEscrowAddressRequest();
    message.portId = object.portId ?? '';
    message.channelId = object.channelId ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryEscrowAddressRequest.$type,
  QueryEscrowAddressRequest,
);

function createBaseQueryEscrowAddressResponse(): QueryEscrowAddressResponse {
  return {
    $type: 'ibc.applications.transfer.v1.QueryEscrowAddressResponse',
    escrowAddress: '',
  };
}

export const QueryEscrowAddressResponse = {
  $type: 'ibc.applications.transfer.v1.QueryEscrowAddressResponse' as const,

  encode(
    message: QueryEscrowAddressResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.escrowAddress !== '') {
      writer.uint32(10).string(message.escrowAddress);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryEscrowAddressResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryEscrowAddressResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.escrowAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryEscrowAddressResponse {
    return {
      $type: QueryEscrowAddressResponse.$type,
      escrowAddress: isSet(object.escrowAddress)
        ? String(object.escrowAddress)
        : '',
    };
  },

  toJSON(message: QueryEscrowAddressResponse): unknown {
    const obj: any = {};
    message.escrowAddress !== undefined &&
      (obj.escrowAddress = message.escrowAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryEscrowAddressResponse>, I>>(
    object: I,
  ): QueryEscrowAddressResponse {
    const message = createBaseQueryEscrowAddressResponse();
    message.escrowAddress = object.escrowAddress ?? '';
    return message;
  },
};

messageTypeRegistry.set(
  QueryEscrowAddressResponse.$type,
  QueryEscrowAddressResponse,
);

/** Query provides defines the gRPC querier service. */
export interface Query {
  /** DenomTrace queries a denomination trace information. */
  DenomTrace(
    request: DeepPartial<QueryDenomTraceRequest>,
  ): Promise<QueryDenomTraceResponse>;
  /** DenomTraces queries all denomination traces. */
  DenomTraces(
    request: DeepPartial<QueryDenomTracesRequest>,
  ): Promise<QueryDenomTracesResponse>;
  /** Params queries all parameters of the ibc-transfer module. */
  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse>;
  /** DenomHash queries a denomination hash information. */
  DenomHash(
    request: DeepPartial<QueryDenomHashRequest>,
  ): Promise<QueryDenomHashResponse>;
  /** EscrowAddress returns the escrow address for a particular port and channel id. */
  EscrowAddress(
    request: DeepPartial<QueryEscrowAddressRequest>,
  ): Promise<QueryEscrowAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.DenomTrace = this.DenomTrace.bind(this);
    this.DenomTraces = this.DenomTraces.bind(this);
    this.Params = this.Params.bind(this);
    this.DenomHash = this.DenomHash.bind(this);
    this.EscrowAddress = this.EscrowAddress.bind(this);
  }
  DenomTrace(
    request: DeepPartial<QueryDenomTraceRequest>,
  ): Promise<QueryDenomTraceResponse> {
    const fromPartial = QueryDenomTraceRequest.fromPartial(request);
    const data = QueryDenomTraceRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.applications.transfer.v1.Query',
      'DenomTrace',
      data,
    );
    return promise.then(data =>
      QueryDenomTraceResponse.decode(new _m0.Reader(data)),
    );
  }

  DenomTraces(
    request: DeepPartial<QueryDenomTracesRequest>,
  ): Promise<QueryDenomTracesResponse> {
    const fromPartial = QueryDenomTracesRequest.fromPartial(request);
    const data = QueryDenomTracesRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.applications.transfer.v1.Query',
      'DenomTraces',
      data,
    );
    return promise.then(data =>
      QueryDenomTracesResponse.decode(new _m0.Reader(data)),
    );
  }

  Params(
    request: DeepPartial<QueryParamsRequest>,
  ): Promise<QueryParamsResponse> {
    const fromPartial = QueryParamsRequest.fromPartial(request);
    const data = QueryParamsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.applications.transfer.v1.Query',
      'Params',
      data,
    );
    return promise.then(data =>
      QueryParamsResponse.decode(new _m0.Reader(data)),
    );
  }

  DenomHash(
    request: DeepPartial<QueryDenomHashRequest>,
  ): Promise<QueryDenomHashResponse> {
    const fromPartial = QueryDenomHashRequest.fromPartial(request);
    const data = QueryDenomHashRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.applications.transfer.v1.Query',
      'DenomHash',
      data,
    );
    return promise.then(data =>
      QueryDenomHashResponse.decode(new _m0.Reader(data)),
    );
  }

  EscrowAddress(
    request: DeepPartial<QueryEscrowAddressRequest>,
  ): Promise<QueryEscrowAddressResponse> {
    const fromPartial = QueryEscrowAddressRequest.fromPartial(request);
    const data = QueryEscrowAddressRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'ibc.applications.transfer.v1.Query',
      'EscrowAddress',
      data,
    );
    return promise.then(data =>
      QueryEscrowAddressResponse.decode(new _m0.Reader(data)),
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
