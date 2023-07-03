import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../../cosmos/base/query/v1beta1/pagination";
import { AllowedDenom, AllowedDenomAmino, AllowedDenomSDKType } from "./state";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../../google/protobuf/timestamp";
import { Long, isSet, fromJsonTimestamp, fromTimestamp } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequest {
  /** sell_order_id is the id of the requested sell order. */
  sellOrderId: Long;
}
export interface QuerySellOrderRequestProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderRequest";
  value: Uint8Array;
}
/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequestAmino {
  /** sell_order_id is the id of the requested sell order. */
  sell_order_id: string;
}
export interface QuerySellOrderRequestAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrderRequest";
  value: QuerySellOrderRequestAmino;
}
/** QuerySellOrderRequest is the Query/SellOrder request type. */
export interface QuerySellOrderRequestSDKType {
  sell_order_id: Long;
}
/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponse {
  /** sell_order contains all information related to a sell order. */
  sellOrder: SellOrderInfo;
}
export interface QuerySellOrderResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderResponse";
  value: Uint8Array;
}
/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponseAmino {
  /** sell_order contains all information related to a sell order. */
  sell_order?: SellOrderInfoAmino;
}
export interface QuerySellOrderResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrderResponse";
  value: QuerySellOrderResponseAmino;
}
/** QuerySellOrderResponse is the Query/SellOrder response type. */
export interface QuerySellOrderResponseSDKType {
  sell_order: SellOrderInfoSDKType;
}
/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QuerySellOrdersRequestProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersRequest";
  value: Uint8Array;
}
/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QuerySellOrdersRequestAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersRequest";
  value: QuerySellOrdersRequestAmino;
}
/** QuerySellOrdersRequest is the Query/SellOrders request type. */
export interface QuerySellOrdersRequestSDKType {
  pagination: PageRequestSDKType;
}
/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponse {
  /** sell_orders is a list of sell orders. */
  sellOrders: SellOrderInfo[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse;
}
export interface QuerySellOrdersResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersResponse";
  value: Uint8Array;
}
/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponseAmino {
  /** sell_orders is a list of sell orders. */
  sell_orders: SellOrderInfoAmino[];
  /** pagination defines the pagination in the response. */
  pagination?: PageResponseAmino;
}
export interface QuerySellOrdersResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersResponse";
  value: QuerySellOrdersResponseAmino;
}
/** QuerySellOrdersResponse is the Query/SellOrders response type. */
export interface QuerySellOrdersResponseSDKType {
  sell_orders: SellOrderInfoSDKType[];
  pagination: PageResponseSDKType;
}
/**
 * QuerySellOrdersByBatchRequest is the Query/SellOrdersByBatch
 * request type.
 */
export interface QuerySellOrdersByBatchRequest {
  /** batch_denom is an ecocredit denom */
  batchDenom: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QuerySellOrdersByBatchRequestProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchRequest";
  value: Uint8Array;
}
/**
 * QuerySellOrdersByBatchRequest is the Query/SellOrdersByBatch
 * request type.
 */
export interface QuerySellOrdersByBatchRequestAmino {
  /** batch_denom is an ecocredit denom */
  batch_denom: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QuerySellOrdersByBatchRequestAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchRequest";
  value: QuerySellOrdersByBatchRequestAmino;
}
/**
 * QuerySellOrdersByBatchRequest is the Query/SellOrdersByBatch
 * request type.
 */
export interface QuerySellOrdersByBatchRequestSDKType {
  batch_denom: string;
  pagination: PageRequestSDKType;
}
/**
 * QuerySellOrdersByBatchResponse is the Query/SellOrdersByBatch
 * response type.
 */
export interface QuerySellOrdersByBatchResponse {
  /** sell_orders is a list of sell orders. */
  sellOrders: SellOrderInfo[];
  /** pagination defines an optional pagination for the response. */
  pagination: PageResponse;
}
export interface QuerySellOrdersByBatchResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchResponse";
  value: Uint8Array;
}
/**
 * QuerySellOrdersByBatchResponse is the Query/SellOrdersByBatch
 * response type.
 */
export interface QuerySellOrdersByBatchResponseAmino {
  /** sell_orders is a list of sell orders. */
  sell_orders: SellOrderInfoAmino[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface QuerySellOrdersByBatchResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchResponse";
  value: QuerySellOrdersByBatchResponseAmino;
}
/**
 * QuerySellOrdersByBatchResponse is the Query/SellOrdersByBatch
 * response type.
 */
export interface QuerySellOrdersByBatchResponseSDKType {
  sell_orders: SellOrderInfoSDKType[];
  pagination: PageResponseSDKType;
}
/**
 * QuerySellOrdersBySellerRequest is the Query/SellOrdersBySeller request
 * type.
 */
export interface QuerySellOrdersBySellerRequest {
  /** seller is the address of the account that is selling credits. */
  seller: string;
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QuerySellOrdersBySellerRequestProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerRequest";
  value: Uint8Array;
}
/**
 * QuerySellOrdersBySellerRequest is the Query/SellOrdersBySeller request
 * type.
 */
export interface QuerySellOrdersBySellerRequestAmino {
  /** seller is the address of the account that is selling credits. */
  seller: string;
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QuerySellOrdersBySellerRequestAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerRequest";
  value: QuerySellOrdersBySellerRequestAmino;
}
/**
 * QuerySellOrdersBySellerRequest is the Query/SellOrdersBySeller request
 * type.
 */
export interface QuerySellOrdersBySellerRequestSDKType {
  seller: string;
  pagination: PageRequestSDKType;
}
/**
 * QuerySellOrdersBySellerResponse is the Query/SellOrdersBySellerResponse
 * response type.
 */
export interface QuerySellOrdersBySellerResponse {
  /** sell_orders is a list of sell orders. */
  sellOrders: SellOrderInfo[];
  /** pagination defines an optional pagination for the response. */
  pagination: PageResponse;
}
export interface QuerySellOrdersBySellerResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerResponse";
  value: Uint8Array;
}
/**
 * QuerySellOrdersBySellerResponse is the Query/SellOrdersBySellerResponse
 * response type.
 */
export interface QuerySellOrdersBySellerResponseAmino {
  /** sell_orders is a list of sell orders. */
  sell_orders: SellOrderInfoAmino[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface QuerySellOrdersBySellerResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerResponse";
  value: QuerySellOrdersBySellerResponseAmino;
}
/**
 * QuerySellOrdersBySellerResponse is the Query/SellOrdersBySellerResponse
 * response type.
 */
export interface QuerySellOrdersBySellerResponseSDKType {
  sell_orders: SellOrderInfoSDKType[];
  pagination: PageResponseSDKType;
}
/** QueryAllowedDenomsRequest is the Query/AllowedDenoms request type. */
export interface QueryAllowedDenomsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest;
}
export interface QueryAllowedDenomsRequestProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest";
  value: Uint8Array;
}
/** QueryAllowedDenomsRequest is the Query/AllowedDenoms request type. */
export interface QueryAllowedDenomsRequestAmino {
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequestAmino;
}
export interface QueryAllowedDenomsRequestAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest";
  value: QueryAllowedDenomsRequestAmino;
}
/** QueryAllowedDenomsRequest is the Query/AllowedDenoms request type. */
export interface QueryAllowedDenomsRequestSDKType {
  pagination: PageRequestSDKType;
}
/** QueryAllowedDenomsResponse is the Query/AllowedDenoms response type. */
export interface QueryAllowedDenomsResponse {
  /**
   * allowed_denoms is a list of coin denoms allowed to use in the ask price of
   * sell orders.
   */
  allowedDenoms: AllowedDenom[];
  /** pagination defines an optional pagination for the response. */
  pagination: PageResponse;
}
export interface QueryAllowedDenomsResponseProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse";
  value: Uint8Array;
}
/** QueryAllowedDenomsResponse is the Query/AllowedDenoms response type. */
export interface QueryAllowedDenomsResponseAmino {
  /**
   * allowed_denoms is a list of coin denoms allowed to use in the ask price of
   * sell orders.
   */
  allowed_denoms: AllowedDenomAmino[];
  /** pagination defines an optional pagination for the response. */
  pagination?: PageResponseAmino;
}
export interface QueryAllowedDenomsResponseAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse";
  value: QueryAllowedDenomsResponseAmino;
}
/** QueryAllowedDenomsResponse is the Query/AllowedDenoms response type. */
export interface QueryAllowedDenomsResponseSDKType {
  allowed_denoms: AllowedDenomSDKType[];
  pagination: PageResponseSDKType;
}
/** SellOrderInfo is the human-readable sell order information. */
export interface SellOrderInfo {
  /** id is the unique ID of sell order. */
  id: Long;
  /** seller is the address of the account that is selling credits. */
  seller: string;
  /** batch_denom is denom of the credit batch being sold. */
  batchDenom: string;
  /** quantity is the decimal quantity of credits being sold. */
  quantity: string;
  /** ask_denom is the denom used in the ask price of the sell order. */
  askDenom: string;
  /**
   * ask_amount is the amount that the seller is asking for each credit unit of
   * the batch. Each credit unit of the batch will be sold for at least the
   * ask_amount.
   */
  askAmount: string;
  /**
   * disable_auto_retire disables auto-retirement of credits which allows a
   * buyer to disable auto-retirement in their buy order enabling them to
   * resell the credits to another buyer.
   */
  disableAutoRetire: boolean;
  /**
   * expiration is an optional timestamp when the sell order expires. When the
   * expiration time is reached, the sell order is removed from state.
   */
  expiration: Timestamp;
}
export interface SellOrderInfoProtoMsg {
  typeUrl: "/regen.ecocredit.marketplace.v1.SellOrderInfo";
  value: Uint8Array;
}
/** SellOrderInfo is the human-readable sell order information. */
export interface SellOrderInfoAmino {
  /** id is the unique ID of sell order. */
  id: string;
  /** seller is the address of the account that is selling credits. */
  seller: string;
  /** batch_denom is denom of the credit batch being sold. */
  batch_denom: string;
  /** quantity is the decimal quantity of credits being sold. */
  quantity: string;
  /** ask_denom is the denom used in the ask price of the sell order. */
  ask_denom: string;
  /**
   * ask_amount is the amount that the seller is asking for each credit unit of
   * the batch. Each credit unit of the batch will be sold for at least the
   * ask_amount.
   */
  ask_amount: string;
  /**
   * disable_auto_retire disables auto-retirement of credits which allows a
   * buyer to disable auto-retirement in their buy order enabling them to
   * resell the credits to another buyer.
   */
  disable_auto_retire: boolean;
  /**
   * expiration is an optional timestamp when the sell order expires. When the
   * expiration time is reached, the sell order is removed from state.
   */
  expiration?: TimestampAmino;
}
export interface SellOrderInfoAminoMsg {
  type: "/regen.ecocredit.marketplace.v1.SellOrderInfo";
  value: SellOrderInfoAmino;
}
/** SellOrderInfo is the human-readable sell order information. */
export interface SellOrderInfoSDKType {
  id: Long;
  seller: string;
  batch_denom: string;
  quantity: string;
  ask_denom: string;
  ask_amount: string;
  disable_auto_retire: boolean;
  expiration: TimestampSDKType;
}
function createBaseQuerySellOrderRequest(): QuerySellOrderRequest {
  return {
    sellOrderId: Long.UZERO
  };
}
export const QuerySellOrderRequest = {
  encode(message: QuerySellOrderRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sellOrderId.isZero()) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySellOrderRequest {
    return {
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO
    };
  },
  toJSON(message: QuerySellOrderRequest): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: Partial<QuerySellOrderRequest>): QuerySellOrderRequest {
    const message = createBaseQuerySellOrderRequest();
    message.sellOrderId = object.sellOrderId !== undefined && object.sellOrderId !== null ? Long.fromValue(object.sellOrderId) : Long.UZERO;
    return message;
  },
  fromAmino(object: QuerySellOrderRequestAmino): QuerySellOrderRequest {
    return {
      sellOrderId: Long.fromString(object.sell_order_id)
    };
  },
  toAmino(message: QuerySellOrderRequest): QuerySellOrderRequestAmino {
    const obj: any = {};
    obj.sell_order_id = message.sellOrderId ? message.sellOrderId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrderRequestAminoMsg): QuerySellOrderRequest {
    return QuerySellOrderRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrderRequestProtoMsg): QuerySellOrderRequest {
    return QuerySellOrderRequest.decode(message.value);
  },
  toProto(message: QuerySellOrderRequest): Uint8Array {
    return QuerySellOrderRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrderRequest): QuerySellOrderRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderRequest",
      value: QuerySellOrderRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrderResponse(): QuerySellOrderResponse {
  return {
    sellOrder: SellOrderInfo.fromPartial({})
  };
}
export const QuerySellOrderResponse = {
  encode(message: QuerySellOrderResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sellOrder !== undefined) {
      SellOrderInfo.encode(message.sellOrder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrder = SellOrderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QuerySellOrderResponse {
    return {
      sellOrder: isSet(object.sellOrder) ? SellOrderInfo.fromJSON(object.sellOrder) : undefined
    };
  },
  toJSON(message: QuerySellOrderResponse): unknown {
    const obj: any = {};
    message.sellOrder !== undefined && (obj.sellOrder = message.sellOrder ? SellOrderInfo.toJSON(message.sellOrder) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySellOrderResponse>): QuerySellOrderResponse {
    const message = createBaseQuerySellOrderResponse();
    message.sellOrder = object.sellOrder !== undefined && object.sellOrder !== null ? SellOrderInfo.fromPartial(object.sellOrder) : undefined;
    return message;
  },
  fromAmino(object: QuerySellOrderResponseAmino): QuerySellOrderResponse {
    return {
      sellOrder: object?.sell_order ? SellOrderInfo.fromAmino(object.sell_order) : undefined
    };
  },
  toAmino(message: QuerySellOrderResponse): QuerySellOrderResponseAmino {
    const obj: any = {};
    obj.sell_order = message.sellOrder ? SellOrderInfo.toAmino(message.sellOrder) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrderResponseAminoMsg): QuerySellOrderResponse {
    return QuerySellOrderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrderResponseProtoMsg): QuerySellOrderResponse {
    return QuerySellOrderResponse.decode(message.value);
  },
  toProto(message: QuerySellOrderResponse): Uint8Array {
    return QuerySellOrderResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrderResponse): QuerySellOrderResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrderResponse",
      value: QuerySellOrderResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrdersRequest(): QuerySellOrdersRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QuerySellOrdersRequest = {
  encode(message: QuerySellOrdersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersRequest();
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
  fromJSON(object: any): QuerySellOrdersRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySellOrdersRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySellOrdersRequest>): QuerySellOrdersRequest {
    const message = createBaseQuerySellOrdersRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySellOrdersRequestAmino): QuerySellOrdersRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QuerySellOrdersRequest): QuerySellOrdersRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrdersRequestAminoMsg): QuerySellOrdersRequest {
    return QuerySellOrdersRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrdersRequestProtoMsg): QuerySellOrdersRequest {
    return QuerySellOrdersRequest.decode(message.value);
  },
  toProto(message: QuerySellOrdersRequest): Uint8Array {
    return QuerySellOrdersRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrdersRequest): QuerySellOrdersRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersRequest",
      value: QuerySellOrdersRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrdersResponse(): QuerySellOrdersResponse {
  return {
    sellOrders: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QuerySellOrdersResponse = {
  encode(message: QuerySellOrdersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sellOrders) {
      SellOrderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrders.push(SellOrderInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QuerySellOrdersResponse {
    return {
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => SellOrderInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySellOrdersResponse): unknown {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? SellOrderInfo.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySellOrdersResponse>): QuerySellOrdersResponse {
    const message = createBaseQuerySellOrdersResponse();
    message.sellOrders = object.sellOrders?.map(e => SellOrderInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySellOrdersResponseAmino): QuerySellOrdersResponse {
    return {
      sellOrders: Array.isArray(object?.sell_orders) ? object.sell_orders.map((e: any) => SellOrderInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QuerySellOrdersResponse): QuerySellOrdersResponseAmino {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SellOrderInfo.toAmino(e) : undefined);
    } else {
      obj.sell_orders = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrdersResponseAminoMsg): QuerySellOrdersResponse {
    return QuerySellOrdersResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrdersResponseProtoMsg): QuerySellOrdersResponse {
    return QuerySellOrdersResponse.decode(message.value);
  },
  toProto(message: QuerySellOrdersResponse): Uint8Array {
    return QuerySellOrdersResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrdersResponse): QuerySellOrdersResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersResponse",
      value: QuerySellOrdersResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrdersByBatchRequest(): QuerySellOrdersByBatchRequest {
  return {
    batchDenom: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QuerySellOrdersByBatchRequest = {
  encode(message: QuerySellOrdersByBatchRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batchDenom !== "") {
      writer.uint32(10).string(message.batchDenom);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByBatchRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersByBatchRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchDenom = reader.string();
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
  fromJSON(object: any): QuerySellOrdersByBatchRequest {
    return {
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySellOrdersByBatchRequest): unknown {
    const obj: any = {};
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySellOrdersByBatchRequest>): QuerySellOrdersByBatchRequest {
    const message = createBaseQuerySellOrdersByBatchRequest();
    message.batchDenom = object.batchDenom ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySellOrdersByBatchRequestAmino): QuerySellOrdersByBatchRequest {
    return {
      batchDenom: object.batch_denom,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QuerySellOrdersByBatchRequest): QuerySellOrdersByBatchRequestAmino {
    const obj: any = {};
    obj.batch_denom = message.batchDenom;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrdersByBatchRequestAminoMsg): QuerySellOrdersByBatchRequest {
    return QuerySellOrdersByBatchRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrdersByBatchRequestProtoMsg): QuerySellOrdersByBatchRequest {
    return QuerySellOrdersByBatchRequest.decode(message.value);
  },
  toProto(message: QuerySellOrdersByBatchRequest): Uint8Array {
    return QuerySellOrdersByBatchRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrdersByBatchRequest): QuerySellOrdersByBatchRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchRequest",
      value: QuerySellOrdersByBatchRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrdersByBatchResponse(): QuerySellOrdersByBatchResponse {
  return {
    sellOrders: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QuerySellOrdersByBatchResponse = {
  encode(message: QuerySellOrdersByBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sellOrders) {
      SellOrderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersByBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersByBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrders.push(SellOrderInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QuerySellOrdersByBatchResponse {
    return {
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => SellOrderInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySellOrdersByBatchResponse): unknown {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? SellOrderInfo.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySellOrdersByBatchResponse>): QuerySellOrdersByBatchResponse {
    const message = createBaseQuerySellOrdersByBatchResponse();
    message.sellOrders = object.sellOrders?.map(e => SellOrderInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySellOrdersByBatchResponseAmino): QuerySellOrdersByBatchResponse {
    return {
      sellOrders: Array.isArray(object?.sell_orders) ? object.sell_orders.map((e: any) => SellOrderInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QuerySellOrdersByBatchResponse): QuerySellOrdersByBatchResponseAmino {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SellOrderInfo.toAmino(e) : undefined);
    } else {
      obj.sell_orders = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrdersByBatchResponseAminoMsg): QuerySellOrdersByBatchResponse {
    return QuerySellOrdersByBatchResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrdersByBatchResponseProtoMsg): QuerySellOrdersByBatchResponse {
    return QuerySellOrdersByBatchResponse.decode(message.value);
  },
  toProto(message: QuerySellOrdersByBatchResponse): Uint8Array {
    return QuerySellOrdersByBatchResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrdersByBatchResponse): QuerySellOrdersByBatchResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersByBatchResponse",
      value: QuerySellOrdersByBatchResponse.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrdersBySellerRequest(): QuerySellOrdersBySellerRequest {
  return {
    seller: "",
    pagination: PageRequest.fromPartial({})
  };
}
export const QuerySellOrdersBySellerRequest = {
  encode(message: QuerySellOrdersBySellerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.seller !== "") {
      writer.uint32(10).string(message.seller);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersBySellerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersBySellerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.seller = reader.string();
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
  fromJSON(object: any): QuerySellOrdersBySellerRequest {
    return {
      seller: isSet(object.seller) ? String(object.seller) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySellOrdersBySellerRequest): unknown {
    const obj: any = {};
    message.seller !== undefined && (obj.seller = message.seller);
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySellOrdersBySellerRequest>): QuerySellOrdersBySellerRequest {
    const message = createBaseQuerySellOrdersBySellerRequest();
    message.seller = object.seller ?? "";
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySellOrdersBySellerRequestAmino): QuerySellOrdersBySellerRequest {
    return {
      seller: object.seller,
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QuerySellOrdersBySellerRequest): QuerySellOrdersBySellerRequestAmino {
    const obj: any = {};
    obj.seller = message.seller;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrdersBySellerRequestAminoMsg): QuerySellOrdersBySellerRequest {
    return QuerySellOrdersBySellerRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrdersBySellerRequestProtoMsg): QuerySellOrdersBySellerRequest {
    return QuerySellOrdersBySellerRequest.decode(message.value);
  },
  toProto(message: QuerySellOrdersBySellerRequest): Uint8Array {
    return QuerySellOrdersBySellerRequest.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrdersBySellerRequest): QuerySellOrdersBySellerRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerRequest",
      value: QuerySellOrdersBySellerRequest.encode(message).finish()
    };
  }
};
function createBaseQuerySellOrdersBySellerResponse(): QuerySellOrdersBySellerResponse {
  return {
    sellOrders: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QuerySellOrdersBySellerResponse = {
  encode(message: QuerySellOrdersBySellerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.sellOrders) {
      SellOrderInfo.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySellOrdersBySellerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySellOrdersBySellerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrders.push(SellOrderInfo.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QuerySellOrdersBySellerResponse {
    return {
      sellOrders: Array.isArray(object?.sellOrders) ? object.sellOrders.map((e: any) => SellOrderInfo.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QuerySellOrdersBySellerResponse): unknown {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sellOrders = message.sellOrders.map(e => e ? SellOrderInfo.toJSON(e) : undefined);
    } else {
      obj.sellOrders = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QuerySellOrdersBySellerResponse>): QuerySellOrdersBySellerResponse {
    const message = createBaseQuerySellOrdersBySellerResponse();
    message.sellOrders = object.sellOrders?.map(e => SellOrderInfo.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QuerySellOrdersBySellerResponseAmino): QuerySellOrdersBySellerResponse {
    return {
      sellOrders: Array.isArray(object?.sell_orders) ? object.sell_orders.map((e: any) => SellOrderInfo.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QuerySellOrdersBySellerResponse): QuerySellOrdersBySellerResponseAmino {
    const obj: any = {};
    if (message.sellOrders) {
      obj.sell_orders = message.sellOrders.map(e => e ? SellOrderInfo.toAmino(e) : undefined);
    } else {
      obj.sell_orders = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QuerySellOrdersBySellerResponseAminoMsg): QuerySellOrdersBySellerResponse {
    return QuerySellOrdersBySellerResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QuerySellOrdersBySellerResponseProtoMsg): QuerySellOrdersBySellerResponse {
    return QuerySellOrdersBySellerResponse.decode(message.value);
  },
  toProto(message: QuerySellOrdersBySellerResponse): Uint8Array {
    return QuerySellOrdersBySellerResponse.encode(message).finish();
  },
  toProtoMsg(message: QuerySellOrdersBySellerResponse): QuerySellOrdersBySellerResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QuerySellOrdersBySellerResponse",
      value: QuerySellOrdersBySellerResponse.encode(message).finish()
    };
  }
};
function createBaseQueryAllowedDenomsRequest(): QueryAllowedDenomsRequest {
  return {
    pagination: PageRequest.fromPartial({})
  };
}
export const QueryAllowedDenomsRequest = {
  encode(message: QueryAllowedDenomsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedDenomsRequest();
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
  fromJSON(object: any): QueryAllowedDenomsRequest {
    return {
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllowedDenomsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllowedDenomsRequest>): QueryAllowedDenomsRequest {
    const message = createBaseQueryAllowedDenomsRequest();
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllowedDenomsRequestAmino): QueryAllowedDenomsRequest {
    return {
      pagination: object?.pagination ? PageRequest.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllowedDenomsRequest): QueryAllowedDenomsRequestAmino {
    const obj: any = {};
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllowedDenomsRequestAminoMsg): QueryAllowedDenomsRequest {
    return QueryAllowedDenomsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllowedDenomsRequestProtoMsg): QueryAllowedDenomsRequest {
    return QueryAllowedDenomsRequest.decode(message.value);
  },
  toProto(message: QueryAllowedDenomsRequest): Uint8Array {
    return QueryAllowedDenomsRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowedDenomsRequest): QueryAllowedDenomsRequestProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsRequest",
      value: QueryAllowedDenomsRequest.encode(message).finish()
    };
  }
};
function createBaseQueryAllowedDenomsResponse(): QueryAllowedDenomsResponse {
  return {
    allowedDenoms: [],
    pagination: PageResponse.fromPartial({})
  };
}
export const QueryAllowedDenomsResponse = {
  encode(message: QueryAllowedDenomsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.allowedDenoms) {
      AllowedDenom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllowedDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllowedDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.allowedDenoms.push(AllowedDenom.decode(reader, reader.uint32()));
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
  fromJSON(object: any): QueryAllowedDenomsResponse {
    return {
      allowedDenoms: Array.isArray(object?.allowedDenoms) ? object.allowedDenoms.map((e: any) => AllowedDenom.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined
    };
  },
  toJSON(message: QueryAllowedDenomsResponse): unknown {
    const obj: any = {};
    if (message.allowedDenoms) {
      obj.allowedDenoms = message.allowedDenoms.map(e => e ? AllowedDenom.toJSON(e) : undefined);
    } else {
      obj.allowedDenoms = [];
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object: Partial<QueryAllowedDenomsResponse>): QueryAllowedDenomsResponse {
    const message = createBaseQueryAllowedDenomsResponse();
    message.allowedDenoms = object.allowedDenoms?.map(e => AllowedDenom.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryAllowedDenomsResponseAmino): QueryAllowedDenomsResponse {
    return {
      allowedDenoms: Array.isArray(object?.allowed_denoms) ? object.allowed_denoms.map((e: any) => AllowedDenom.fromAmino(e)) : [],
      pagination: object?.pagination ? PageResponse.fromAmino(object.pagination) : undefined
    };
  },
  toAmino(message: QueryAllowedDenomsResponse): QueryAllowedDenomsResponseAmino {
    const obj: any = {};
    if (message.allowedDenoms) {
      obj.allowed_denoms = message.allowedDenoms.map(e => e ? AllowedDenom.toAmino(e) : undefined);
    } else {
      obj.allowed_denoms = [];
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryAllowedDenomsResponseAminoMsg): QueryAllowedDenomsResponse {
    return QueryAllowedDenomsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryAllowedDenomsResponseProtoMsg): QueryAllowedDenomsResponse {
    return QueryAllowedDenomsResponse.decode(message.value);
  },
  toProto(message: QueryAllowedDenomsResponse): Uint8Array {
    return QueryAllowedDenomsResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryAllowedDenomsResponse): QueryAllowedDenomsResponseProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.QueryAllowedDenomsResponse",
      value: QueryAllowedDenomsResponse.encode(message).finish()
    };
  }
};
function createBaseSellOrderInfo(): SellOrderInfo {
  return {
    id: Long.UZERO,
    seller: "",
    batchDenom: "",
    quantity: "",
    askDenom: "",
    askAmount: "",
    disableAutoRetire: false,
    expiration: undefined
  };
}
export const SellOrderInfo = {
  encode(message: SellOrderInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.seller !== "") {
      writer.uint32(18).string(message.seller);
    }
    if (message.batchDenom !== "") {
      writer.uint32(26).string(message.batchDenom);
    }
    if (message.quantity !== "") {
      writer.uint32(34).string(message.quantity);
    }
    if (message.askDenom !== "") {
      writer.uint32(42).string(message.askDenom);
    }
    if (message.askAmount !== "") {
      writer.uint32(50).string(message.askAmount);
    }
    if (message.disableAutoRetire === true) {
      writer.uint32(56).bool(message.disableAutoRetire);
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(message.expiration, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SellOrderInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSellOrderInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = (reader.uint64() as Long);
          break;
        case 2:
          message.seller = reader.string();
          break;
        case 3:
          message.batchDenom = reader.string();
          break;
        case 4:
          message.quantity = reader.string();
          break;
        case 5:
          message.askDenom = reader.string();
          break;
        case 6:
          message.askAmount = reader.string();
          break;
        case 7:
          message.disableAutoRetire = reader.bool();
          break;
        case 9:
          message.expiration = Timestamp.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SellOrderInfo {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      seller: isSet(object.seller) ? String(object.seller) : "",
      batchDenom: isSet(object.batchDenom) ? String(object.batchDenom) : "",
      quantity: isSet(object.quantity) ? String(object.quantity) : "",
      askDenom: isSet(object.askDenom) ? String(object.askDenom) : "",
      askAmount: isSet(object.askAmount) ? String(object.askAmount) : "",
      disableAutoRetire: isSet(object.disableAutoRetire) ? Boolean(object.disableAutoRetire) : false,
      expiration: isSet(object.expiration) ? fromJsonTimestamp(object.expiration) : undefined
    };
  },
  toJSON(message: SellOrderInfo): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.seller !== undefined && (obj.seller = message.seller);
    message.batchDenom !== undefined && (obj.batchDenom = message.batchDenom);
    message.quantity !== undefined && (obj.quantity = message.quantity);
    message.askDenom !== undefined && (obj.askDenom = message.askDenom);
    message.askAmount !== undefined && (obj.askAmount = message.askAmount);
    message.disableAutoRetire !== undefined && (obj.disableAutoRetire = message.disableAutoRetire);
    message.expiration !== undefined && (obj.expiration = fromTimestamp(message.expiration).toISOString());
    return obj;
  },
  fromPartial(object: Partial<SellOrderInfo>): SellOrderInfo {
    const message = createBaseSellOrderInfo();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.seller = object.seller ?? "";
    message.batchDenom = object.batchDenom ?? "";
    message.quantity = object.quantity ?? "";
    message.askDenom = object.askDenom ?? "";
    message.askAmount = object.askAmount ?? "";
    message.disableAutoRetire = object.disableAutoRetire ?? false;
    message.expiration = object.expiration !== undefined && object.expiration !== null ? Timestamp.fromPartial(object.expiration) : undefined;
    return message;
  },
  fromAmino(object: SellOrderInfoAmino): SellOrderInfo {
    return {
      id: Long.fromString(object.id),
      seller: object.seller,
      batchDenom: object.batch_denom,
      quantity: object.quantity,
      askDenom: object.ask_denom,
      askAmount: object.ask_amount,
      disableAutoRetire: object.disable_auto_retire,
      expiration: object?.expiration ? Timestamp.fromAmino(object.expiration) : undefined
    };
  },
  toAmino(message: SellOrderInfo): SellOrderInfoAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.seller = message.seller;
    obj.batch_denom = message.batchDenom;
    obj.quantity = message.quantity;
    obj.ask_denom = message.askDenom;
    obj.ask_amount = message.askAmount;
    obj.disable_auto_retire = message.disableAutoRetire;
    obj.expiration = message.expiration ? Timestamp.toAmino(message.expiration) : undefined;
    return obj;
  },
  fromAminoMsg(object: SellOrderInfoAminoMsg): SellOrderInfo {
    return SellOrderInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: SellOrderInfoProtoMsg): SellOrderInfo {
    return SellOrderInfo.decode(message.value);
  },
  toProto(message: SellOrderInfo): Uint8Array {
    return SellOrderInfo.encode(message).finish();
  },
  toProtoMsg(message: SellOrderInfo): SellOrderInfoProtoMsg {
    return {
      typeUrl: "/regen.ecocredit.marketplace.v1.SellOrderInfo",
      value: SellOrderInfo.encode(message).finish()
    };
  }
};