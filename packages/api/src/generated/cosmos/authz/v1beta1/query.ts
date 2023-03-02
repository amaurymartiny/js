/* eslint-disable */
import { messageTypeRegistry } from '../../../typeRegistry';
import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PageRequest, PageResponse } from '../../base/query/v1beta1/pagination';
import { Grant, GrantAuthorization } from './authz';

export const protobufPackage = 'cosmos.authz.v1beta1';

/** Since: cosmos-sdk 0.43 */

/** QueryGrantsRequest is the request type for the Query/Grants RPC method. */
export interface QueryGrantsRequest {
  $type: 'cosmos.authz.v1beta1.QueryGrantsRequest';
  granter: string;
  grantee: string;
  /** Optional, msg_type_url, when set, will query only grants matching given msg type. */
  msgTypeUrl: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGrantsResponse is the response type for the Query/Authorizations RPC method. */
export interface QueryGrantsResponse {
  $type: 'cosmos.authz.v1beta1.QueryGrantsResponse';
  /** authorizations is a list of grants granted for grantee by granter. */
  grants: Grant[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}

/** QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsRequest {
  $type: 'cosmos.authz.v1beta1.QueryGranterGrantsRequest';
  granter: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method. */
export interface QueryGranterGrantsResponse {
  $type: 'cosmos.authz.v1beta1.QueryGranterGrantsResponse';
  /** grants is a list of grants granted by the granter. */
  grants: GrantAuthorization[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}

/** QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method. */
export interface QueryGranteeGrantsRequest {
  $type: 'cosmos.authz.v1beta1.QueryGranteeGrantsRequest';
  grantee: string;
  /** pagination defines an pagination for the request. */
  pagination?: PageRequest;
}

/** QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method. */
export interface QueryGranteeGrantsResponse {
  $type: 'cosmos.authz.v1beta1.QueryGranteeGrantsResponse';
  /** grants is a list of grants granted to the grantee. */
  grants: GrantAuthorization[];
  /** pagination defines an pagination for the response. */
  pagination?: PageResponse;
}

function createBaseQueryGrantsRequest(): QueryGrantsRequest {
  return {
    $type: 'cosmos.authz.v1beta1.QueryGrantsRequest',
    granter: '',
    grantee: '',
    msgTypeUrl: '',
    pagination: undefined,
  };
}

export const QueryGrantsRequest = {
  $type: 'cosmos.authz.v1beta1.QueryGrantsRequest' as const,

  encode(
    message: QueryGrantsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.granter !== '') {
      writer.uint32(10).string(message.granter);
    }
    if (message.grantee !== '') {
      writer.uint32(18).string(message.grantee);
    }
    if (message.msgTypeUrl !== '') {
      writer.uint32(26).string(message.msgTypeUrl);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.grantee = reader.string();
          break;
        case 3:
          message.msgTypeUrl = reader.string();
          break;
        case 4:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGrantsRequest {
    return {
      $type: QueryGrantsRequest.$type,
      granter: isSet(object.granter) ? String(object.granter) : '',
      grantee: isSet(object.grantee) ? String(object.grantee) : '',
      msgTypeUrl: isSet(object.msgTypeUrl) ? String(object.msgTypeUrl) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGrantsRequest): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGrantsRequest>, I>>(
    object: I,
  ): QueryGrantsRequest {
    const message = createBaseQueryGrantsRequest();
    message.granter = object.granter ?? '';
    message.grantee = object.grantee ?? '';
    message.msgTypeUrl = object.msgTypeUrl ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryGrantsRequest.$type, QueryGrantsRequest);

function createBaseQueryGrantsResponse(): QueryGrantsResponse {
  return {
    $type: 'cosmos.authz.v1beta1.QueryGrantsResponse',
    grants: [],
    pagination: undefined,
  };
}

export const QueryGrantsResponse = {
  $type: 'cosmos.authz.v1beta1.QueryGrantsResponse' as const,

  encode(
    message: QueryGrantsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.grants) {
      Grant.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork(),
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryGrantsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(Grant.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGrantsResponse {
    return {
      $type: QueryGrantsResponse.$type,
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => Grant.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGrantsResponse): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e => (e ? Grant.toJSON(e) : undefined));
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGrantsResponse>, I>>(
    object: I,
  ): QueryGrantsResponse {
    const message = createBaseQueryGrantsResponse();
    message.grants = object.grants?.map(e => Grant.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryGrantsResponse.$type, QueryGrantsResponse);

function createBaseQueryGranterGrantsRequest(): QueryGranterGrantsRequest {
  return {
    $type: 'cosmos.authz.v1beta1.QueryGranterGrantsRequest',
    granter: '',
    pagination: undefined,
  };
}

export const QueryGranterGrantsRequest = {
  $type: 'cosmos.authz.v1beta1.QueryGranterGrantsRequest' as const,

  encode(
    message: QueryGranterGrantsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.granter !== '') {
      writer.uint32(10).string(message.granter);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGranterGrantsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranterGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGranterGrantsRequest {
    return {
      $type: QueryGranterGrantsRequest.$type,
      granter: isSet(object.granter) ? String(object.granter) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGranterGrantsRequest): unknown {
    const obj: any = {};
    message.granter !== undefined && (obj.granter = message.granter);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGranterGrantsRequest>, I>>(
    object: I,
  ): QueryGranterGrantsRequest {
    const message = createBaseQueryGranterGrantsRequest();
    message.granter = object.granter ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGranterGrantsRequest.$type,
  QueryGranterGrantsRequest,
);

function createBaseQueryGranterGrantsResponse(): QueryGranterGrantsResponse {
  return {
    $type: 'cosmos.authz.v1beta1.QueryGranterGrantsResponse',
    grants: [],
    pagination: undefined,
  };
}

export const QueryGranterGrantsResponse = {
  $type: 'cosmos.authz.v1beta1.QueryGranterGrantsResponse' as const,

  encode(
    message: QueryGranterGrantsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.grants) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGranterGrantsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranterGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(
            GrantAuthorization.decode(reader, reader.uint32()),
          );
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

  fromJSON(object: any): QueryGranterGrantsResponse {
    return {
      $type: QueryGranterGrantsResponse.$type,
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => GrantAuthorization.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGranterGrantsResponse): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e =>
        e ? GrantAuthorization.toJSON(e) : undefined,
      );
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGranterGrantsResponse>, I>>(
    object: I,
  ): QueryGranterGrantsResponse {
    const message = createBaseQueryGranterGrantsResponse();
    message.grants =
      object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGranterGrantsResponse.$type,
  QueryGranterGrantsResponse,
);

function createBaseQueryGranteeGrantsRequest(): QueryGranteeGrantsRequest {
  return {
    $type: 'cosmos.authz.v1beta1.QueryGranteeGrantsRequest',
    grantee: '',
    pagination: undefined,
  };
}

export const QueryGranteeGrantsRequest = {
  $type: 'cosmos.authz.v1beta1.QueryGranteeGrantsRequest' as const,

  encode(
    message: QueryGranteeGrantsRequest,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    if (message.grantee !== '') {
      writer.uint32(10).string(message.grantee);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number,
  ): QueryGranteeGrantsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranteeGrantsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGranteeGrantsRequest {
    return {
      $type: QueryGranteeGrantsRequest.$type,
      grantee: isSet(object.grantee) ? String(object.grantee) : '',
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGranteeGrantsRequest): unknown {
    const obj: any = {};
    message.grantee !== undefined && (obj.grantee = message.grantee);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGranteeGrantsRequest>, I>>(
    object: I,
  ): QueryGranteeGrantsRequest {
    const message = createBaseQueryGranteeGrantsRequest();
    message.grantee = object.grantee ?? '';
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGranteeGrantsRequest.$type,
  QueryGranteeGrantsRequest,
);

function createBaseQueryGranteeGrantsResponse(): QueryGranteeGrantsResponse {
  return {
    $type: 'cosmos.authz.v1beta1.QueryGranteeGrantsResponse',
    grants: [],
    pagination: undefined,
  };
}

export const QueryGranteeGrantsResponse = {
  $type: 'cosmos.authz.v1beta1.QueryGranteeGrantsResponse' as const,

  encode(
    message: QueryGranteeGrantsResponse,
    writer: _m0.Writer = _m0.Writer.create(),
  ): _m0.Writer {
    for (const v of message.grants) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGranteeGrantsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryGranteeGrantsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.grants.push(
            GrantAuthorization.decode(reader, reader.uint32()),
          );
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

  fromJSON(object: any): QueryGranteeGrantsResponse {
    return {
      $type: QueryGranteeGrantsResponse.$type,
      grants: Array.isArray(object?.grants)
        ? object.grants.map((e: any) => GrantAuthorization.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryGranteeGrantsResponse): unknown {
    const obj: any = {};
    if (message.grants) {
      obj.grants = message.grants.map(e =>
        e ? GrantAuthorization.toJSON(e) : undefined,
      );
    } else {
      obj.grants = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryGranteeGrantsResponse>, I>>(
    object: I,
  ): QueryGranteeGrantsResponse {
    const message = createBaseQueryGranteeGrantsResponse();
    message.grants =
      object.grants?.map(e => GrantAuthorization.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

messageTypeRegistry.set(
  QueryGranteeGrantsResponse.$type,
  QueryGranteeGrantsResponse,
);

/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns list of `Authorization`, granted to the grantee by the granter. */
  Grants(
    request: DeepPartial<QueryGrantsRequest>,
  ): Promise<QueryGrantsResponse>;
  /**
   * GranterGrants returns list of `GrantAuthorization`, granted by granter.
   *
   * Since: cosmos-sdk 0.46
   */
  GranterGrants(
    request: DeepPartial<QueryGranterGrantsRequest>,
  ): Promise<QueryGranterGrantsResponse>;
  /**
   * GranteeGrants returns a list of `GrantAuthorization` by grantee.
   *
   * Since: cosmos-sdk 0.46
   */
  GranteeGrants(
    request: DeepPartial<QueryGranteeGrantsRequest>,
  ): Promise<QueryGranteeGrantsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Grants = this.Grants.bind(this);
    this.GranterGrants = this.GranterGrants.bind(this);
    this.GranteeGrants = this.GranteeGrants.bind(this);
  }
  Grants(
    request: DeepPartial<QueryGrantsRequest>,
  ): Promise<QueryGrantsResponse> {
    const fromPartial = QueryGrantsRequest.fromPartial(request);
    const data = QueryGrantsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.authz.v1beta1.Query',
      'Grants',
      data,
    );
    return promise.then(data =>
      QueryGrantsResponse.decode(new _m0.Reader(data)),
    );
  }

  GranterGrants(
    request: DeepPartial<QueryGranterGrantsRequest>,
  ): Promise<QueryGranterGrantsResponse> {
    const fromPartial = QueryGranterGrantsRequest.fromPartial(request);
    const data = QueryGranterGrantsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.authz.v1beta1.Query',
      'GranterGrants',
      data,
    );
    return promise.then(data =>
      QueryGranterGrantsResponse.decode(new _m0.Reader(data)),
    );
  }

  GranteeGrants(
    request: DeepPartial<QueryGranteeGrantsRequest>,
  ): Promise<QueryGranteeGrantsResponse> {
    const fromPartial = QueryGranteeGrantsRequest.fromPartial(request);
    const data = QueryGranteeGrantsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(
      'cosmos.authz.v1beta1.Query',
      'GranteeGrants',
      data,
    );
    return promise.then(data =>
      QueryGranteeGrantsResponse.decode(new _m0.Reader(data)),
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
