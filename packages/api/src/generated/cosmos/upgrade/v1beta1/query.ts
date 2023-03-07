/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../typeRegistry";
import { ModuleVersion, Plan } from "./upgrade";

export const protobufPackage = "cosmos.upgrade.v1beta1";

/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequest {
  $type: "cosmos.upgrade.v1beta1.QueryCurrentPlanRequest";
}

/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponse {
  $type: "cosmos.upgrade.v1beta1.QueryCurrentPlanResponse";
  /** plan is the current upgrade plan. */
  plan?: Plan;
}

/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequest {
  $type: "cosmos.upgrade.v1beta1.QueryAppliedPlanRequest";
  /** name is the name of the applied plan to query for. */
  name: string;
}

/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponse {
  $type: "cosmos.upgrade.v1beta1.QueryAppliedPlanResponse";
  /** height is the block height at which the plan was applied. */
  height: Long;
}

/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @deprecated
 */
export interface QueryUpgradedConsensusStateRequest {
  $type: "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest";
  /**
   * last height of the current chain must be sent in request
   * as this is the height under which next consensus state is stored
   */
  lastHeight: Long;
}

/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 *
 * @deprecated
 */
export interface QueryUpgradedConsensusStateResponse {
  $type: "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse";
  /** Since: cosmos-sdk 0.43 */
  upgradedConsensusState: Uint8Array;
}

/**
 * QueryModuleVersionsRequest is the request type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsRequest {
  $type: "cosmos.upgrade.v1beta1.QueryModuleVersionsRequest";
  /**
   * module_name is a field to query a specific module
   * consensus version from state. Leaving this empty will
   * fetch the full list of module versions from state
   */
  moduleName: string;
}

/**
 * QueryModuleVersionsResponse is the response type for the Query/ModuleVersions
 * RPC method.
 *
 * Since: cosmos-sdk 0.43
 */
export interface QueryModuleVersionsResponse {
  $type: "cosmos.upgrade.v1beta1.QueryModuleVersionsResponse";
  /** module_versions is a list of module names with their consensus versions. */
  moduleVersions: ModuleVersion[];
}

/**
 * QueryAuthorityRequest is the request type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityRequest {
  $type: "cosmos.upgrade.v1beta1.QueryAuthorityRequest";
}

/**
 * QueryAuthorityResponse is the response type for Query/Authority
 *
 * Since: cosmos-sdk 0.46
 */
export interface QueryAuthorityResponse {
  $type: "cosmos.upgrade.v1beta1.QueryAuthorityResponse";
  address: string;
}

function createBaseQueryCurrentPlanRequest(): QueryCurrentPlanRequest {
  return { $type: "cosmos.upgrade.v1beta1.QueryCurrentPlanRequest" };
}

export const QueryCurrentPlanRequest = {
  $type: "cosmos.upgrade.v1beta1.QueryCurrentPlanRequest" as const,

  encode(_: QueryCurrentPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanRequest();
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

  fromJSON(_: any): QueryCurrentPlanRequest {
    return { $type: QueryCurrentPlanRequest.$type };
  },

  toJSON(_: QueryCurrentPlanRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryCurrentPlanRequest>): QueryCurrentPlanRequest {
    return QueryCurrentPlanRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryCurrentPlanRequest>): QueryCurrentPlanRequest {
    const message = createBaseQueryCurrentPlanRequest();
    return message;
  },
};

messageTypeRegistry.set(QueryCurrentPlanRequest.$type, QueryCurrentPlanRequest);

function createBaseQueryCurrentPlanResponse(): QueryCurrentPlanResponse {
  return { $type: "cosmos.upgrade.v1beta1.QueryCurrentPlanResponse", plan: undefined };
}

export const QueryCurrentPlanResponse = {
  $type: "cosmos.upgrade.v1beta1.QueryCurrentPlanResponse" as const,

  encode(message: QueryCurrentPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentPlanResponse {
    return { $type: QueryCurrentPlanResponse.$type, plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined };
  },

  toJSON(message: QueryCurrentPlanResponse): unknown {
    const obj: any = {};
    message.plan !== undefined && (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined);
    return obj;
  },

  create(base?: DeepPartial<QueryCurrentPlanResponse>): QueryCurrentPlanResponse {
    return QueryCurrentPlanResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryCurrentPlanResponse>): QueryCurrentPlanResponse {
    const message = createBaseQueryCurrentPlanResponse();
    message.plan = (object.plan !== undefined && object.plan !== null) ? Plan.fromPartial(object.plan) : undefined;
    return message;
  },
};

messageTypeRegistry.set(QueryCurrentPlanResponse.$type, QueryCurrentPlanResponse);

function createBaseQueryAppliedPlanRequest(): QueryAppliedPlanRequest {
  return { $type: "cosmos.upgrade.v1beta1.QueryAppliedPlanRequest", name: "" };
}

export const QueryAppliedPlanRequest = {
  $type: "cosmos.upgrade.v1beta1.QueryAppliedPlanRequest" as const,

  encode(message: QueryAppliedPlanRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppliedPlanRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAppliedPlanRequest {
    return { $type: QueryAppliedPlanRequest.$type, name: isSet(object.name) ? String(object.name) : "" };
  },

  toJSON(message: QueryAppliedPlanRequest): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  create(base?: DeepPartial<QueryAppliedPlanRequest>): QueryAppliedPlanRequest {
    return QueryAppliedPlanRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAppliedPlanRequest>): QueryAppliedPlanRequest {
    const message = createBaseQueryAppliedPlanRequest();
    message.name = object.name ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryAppliedPlanRequest.$type, QueryAppliedPlanRequest);

function createBaseQueryAppliedPlanResponse(): QueryAppliedPlanResponse {
  return { $type: "cosmos.upgrade.v1beta1.QueryAppliedPlanResponse", height: Long.ZERO };
}

export const QueryAppliedPlanResponse = {
  $type: "cosmos.upgrade.v1beta1.QueryAppliedPlanResponse" as const,

  encode(message: QueryAppliedPlanResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.height.isZero()) {
      writer.uint32(8).int64(message.height);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAppliedPlanResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAppliedPlanResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.height = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAppliedPlanResponse {
    return {
      $type: QueryAppliedPlanResponse.$type,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
    };
  },

  toJSON(message: QueryAppliedPlanResponse): unknown {
    const obj: any = {};
    message.height !== undefined && (obj.height = (message.height || Long.ZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryAppliedPlanResponse>): QueryAppliedPlanResponse {
    return QueryAppliedPlanResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAppliedPlanResponse>): QueryAppliedPlanResponse {
    const message = createBaseQueryAppliedPlanResponse();
    message.height = (object.height !== undefined && object.height !== null)
      ? Long.fromValue(object.height)
      : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(QueryAppliedPlanResponse.$type, QueryAppliedPlanResponse);

function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
  return { $type: "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest", lastHeight: Long.ZERO };
}

export const QueryUpgradedConsensusStateRequest = {
  $type: "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest" as const,

  encode(message: QueryUpgradedConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.lastHeight.isZero()) {
      writer.uint32(8).int64(message.lastHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lastHeight = reader.int64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUpgradedConsensusStateRequest {
    return {
      $type: QueryUpgradedConsensusStateRequest.$type,
      lastHeight: isSet(object.lastHeight) ? Long.fromValue(object.lastHeight) : Long.ZERO,
    };
  },

  toJSON(message: QueryUpgradedConsensusStateRequest): unknown {
    const obj: any = {};
    message.lastHeight !== undefined && (obj.lastHeight = (message.lastHeight || Long.ZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest {
    return QueryUpgradedConsensusStateRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUpgradedConsensusStateRequest>): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    message.lastHeight = (object.lastHeight !== undefined && object.lastHeight !== null)
      ? Long.fromValue(object.lastHeight)
      : Long.ZERO;
    return message;
  },
};

messageTypeRegistry.set(QueryUpgradedConsensusStateRequest.$type, QueryUpgradedConsensusStateRequest);

function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
  return {
    $type: "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse",
    upgradedConsensusState: new Uint8Array(),
  };
}

export const QueryUpgradedConsensusStateResponse = {
  $type: "cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse" as const,

  encode(message: QueryUpgradedConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgradedConsensusState.length !== 0) {
      writer.uint32(18).bytes(message.upgradedConsensusState);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.upgradedConsensusState = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryUpgradedConsensusStateResponse {
    return {
      $type: QueryUpgradedConsensusStateResponse.$type,
      upgradedConsensusState: isSet(object.upgradedConsensusState)
        ? bytesFromBase64(object.upgradedConsensusState)
        : new Uint8Array(),
    };
  },

  toJSON(message: QueryUpgradedConsensusStateResponse): unknown {
    const obj: any = {};
    message.upgradedConsensusState !== undefined &&
      (obj.upgradedConsensusState = base64FromBytes(
        message.upgradedConsensusState !== undefined ? message.upgradedConsensusState : new Uint8Array(),
      ));
    return obj;
  },

  create(base?: DeepPartial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse {
    return QueryUpgradedConsensusStateResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryUpgradedConsensusStateResponse>): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    message.upgradedConsensusState = object.upgradedConsensusState ?? new Uint8Array();
    return message;
  },
};

messageTypeRegistry.set(QueryUpgradedConsensusStateResponse.$type, QueryUpgradedConsensusStateResponse);

function createBaseQueryModuleVersionsRequest(): QueryModuleVersionsRequest {
  return { $type: "cosmos.upgrade.v1beta1.QueryModuleVersionsRequest", moduleName: "" };
}

export const QueryModuleVersionsRequest = {
  $type: "cosmos.upgrade.v1beta1.QueryModuleVersionsRequest" as const,

  encode(message: QueryModuleVersionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleName !== "") {
      writer.uint32(10).string(message.moduleName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleVersionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryModuleVersionsRequest {
    return {
      $type: QueryModuleVersionsRequest.$type,
      moduleName: isSet(object.moduleName) ? String(object.moduleName) : "",
    };
  },

  toJSON(message: QueryModuleVersionsRequest): unknown {
    const obj: any = {};
    message.moduleName !== undefined && (obj.moduleName = message.moduleName);
    return obj;
  },

  create(base?: DeepPartial<QueryModuleVersionsRequest>): QueryModuleVersionsRequest {
    return QueryModuleVersionsRequest.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryModuleVersionsRequest>): QueryModuleVersionsRequest {
    const message = createBaseQueryModuleVersionsRequest();
    message.moduleName = object.moduleName ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryModuleVersionsRequest.$type, QueryModuleVersionsRequest);

function createBaseQueryModuleVersionsResponse(): QueryModuleVersionsResponse {
  return { $type: "cosmos.upgrade.v1beta1.QueryModuleVersionsResponse", moduleVersions: [] };
}

export const QueryModuleVersionsResponse = {
  $type: "cosmos.upgrade.v1beta1.QueryModuleVersionsResponse" as const,

  encode(message: QueryModuleVersionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.moduleVersions) {
      ModuleVersion.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryModuleVersionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryModuleVersionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.moduleVersions.push(ModuleVersion.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryModuleVersionsResponse {
    return {
      $type: QueryModuleVersionsResponse.$type,
      moduleVersions: Array.isArray(object?.moduleVersions)
        ? object.moduleVersions.map((e: any) => ModuleVersion.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryModuleVersionsResponse): unknown {
    const obj: any = {};
    if (message.moduleVersions) {
      obj.moduleVersions = message.moduleVersions.map((e) => e ? ModuleVersion.toJSON(e) : undefined);
    } else {
      obj.moduleVersions = [];
    }
    return obj;
  },

  create(base?: DeepPartial<QueryModuleVersionsResponse>): QueryModuleVersionsResponse {
    return QueryModuleVersionsResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryModuleVersionsResponse>): QueryModuleVersionsResponse {
    const message = createBaseQueryModuleVersionsResponse();
    message.moduleVersions = object.moduleVersions?.map((e) => ModuleVersion.fromPartial(e)) || [];
    return message;
  },
};

messageTypeRegistry.set(QueryModuleVersionsResponse.$type, QueryModuleVersionsResponse);

function createBaseQueryAuthorityRequest(): QueryAuthorityRequest {
  return { $type: "cosmos.upgrade.v1beta1.QueryAuthorityRequest" };
}

export const QueryAuthorityRequest = {
  $type: "cosmos.upgrade.v1beta1.QueryAuthorityRequest" as const,

  encode(_: QueryAuthorityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityRequest();
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

  fromJSON(_: any): QueryAuthorityRequest {
    return { $type: QueryAuthorityRequest.$type };
  },

  toJSON(_: QueryAuthorityRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<QueryAuthorityRequest>): QueryAuthorityRequest {
    return QueryAuthorityRequest.fromPartial(base ?? {});
  },

  fromPartial(_: DeepPartial<QueryAuthorityRequest>): QueryAuthorityRequest {
    const message = createBaseQueryAuthorityRequest();
    return message;
  },
};

messageTypeRegistry.set(QueryAuthorityRequest.$type, QueryAuthorityRequest);

function createBaseQueryAuthorityResponse(): QueryAuthorityResponse {
  return { $type: "cosmos.upgrade.v1beta1.QueryAuthorityResponse", address: "" };
}

export const QueryAuthorityResponse = {
  $type: "cosmos.upgrade.v1beta1.QueryAuthorityResponse" as const,

  encode(message: QueryAuthorityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAuthorityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAuthorityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAuthorityResponse {
    return { $type: QueryAuthorityResponse.$type, address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryAuthorityResponse): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  create(base?: DeepPartial<QueryAuthorityResponse>): QueryAuthorityResponse {
    return QueryAuthorityResponse.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<QueryAuthorityResponse>): QueryAuthorityResponse {
    const message = createBaseQueryAuthorityResponse();
    message.address = object.address ?? "";
    return message;
  },
};

messageTypeRegistry.set(QueryAuthorityResponse.$type, QueryAuthorityResponse);

/** Query defines the gRPC upgrade querier service. */
export interface Query {
  /** CurrentPlan queries the current upgrade plan. */
  CurrentPlan(request: DeepPartial<QueryCurrentPlanRequest>): Promise<QueryCurrentPlanResponse>;
  /** AppliedPlan queries a previously applied upgrade plan by its name. */
  AppliedPlan(request: DeepPartial<QueryAppliedPlanRequest>): Promise<QueryAppliedPlanResponse>;
  /**
   * UpgradedConsensusState queries the consensus state that will serve
   * as a trusted kernel for the next version of this chain. It will only be
   * stored at the last height of this chain.
   * UpgradedConsensusState RPC not supported with legacy querier
   * This rpc is deprecated now that IBC has its own replacement
   * (https://github.com/cosmos/ibc-go/blob/2c880a22e9f9cc75f62b527ca94aa75ce1106001/proto/ibc/core/client/v1/query.proto#L54)
   *
   * @deprecated
   */
  UpgradedConsensusState(
    request: DeepPartial<QueryUpgradedConsensusStateRequest>,
  ): Promise<QueryUpgradedConsensusStateResponse>;
  /**
   * ModuleVersions queries the list of module versions from state.
   *
   * Since: cosmos-sdk 0.43
   */
  ModuleVersions(request: DeepPartial<QueryModuleVersionsRequest>): Promise<QueryModuleVersionsResponse>;
  /**
   * Returns the account with authority to conduct upgrades
   *
   * Since: cosmos-sdk 0.46
   */
  Authority(request: DeepPartial<QueryAuthorityRequest>): Promise<QueryAuthorityResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || "cosmos.upgrade.v1beta1.Query";
    this.rpc = rpc;
    this.CurrentPlan = this.CurrentPlan.bind(this);
    this.AppliedPlan = this.AppliedPlan.bind(this);
    this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
    this.ModuleVersions = this.ModuleVersions.bind(this);
    this.Authority = this.Authority.bind(this);
  }
  CurrentPlan(request: DeepPartial<QueryCurrentPlanRequest>): Promise<QueryCurrentPlanResponse> {
    const fromPartial = QueryCurrentPlanRequest.fromPartial(request);
    const data = QueryCurrentPlanRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "CurrentPlan", data);
    return promise.then((data) => QueryCurrentPlanResponse.decode(new _m0.Reader(data)));
  }

  AppliedPlan(request: DeepPartial<QueryAppliedPlanRequest>): Promise<QueryAppliedPlanResponse> {
    const fromPartial = QueryAppliedPlanRequest.fromPartial(request);
    const data = QueryAppliedPlanRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "AppliedPlan", data);
    return promise.then((data) => QueryAppliedPlanResponse.decode(new _m0.Reader(data)));
  }

  UpgradedConsensusState(
    request: DeepPartial<QueryUpgradedConsensusStateRequest>,
  ): Promise<QueryUpgradedConsensusStateResponse> {
    const fromPartial = QueryUpgradedConsensusStateRequest.fromPartial(request);
    const data = QueryUpgradedConsensusStateRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "UpgradedConsensusState", data);
    return promise.then((data) => QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)));
  }

  ModuleVersions(request: DeepPartial<QueryModuleVersionsRequest>): Promise<QueryModuleVersionsResponse> {
    const fromPartial = QueryModuleVersionsRequest.fromPartial(request);
    const data = QueryModuleVersionsRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "ModuleVersions", data);
    return promise.then((data) => QueryModuleVersionsResponse.decode(new _m0.Reader(data)));
  }

  Authority(request: DeepPartial<QueryAuthorityRequest>): Promise<QueryAuthorityResponse> {
    const fromPartial = QueryAuthorityRequest.fromPartial(request);
    const data = QueryAuthorityRequest.encode(fromPartial).finish();
    const promise = this.rpc.request(this.service, "Authority", data);
    return promise.then((data) => QueryAuthorityResponse.decode(new _m0.Reader(data)));
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
