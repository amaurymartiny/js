/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { messageTypeRegistry } from "../../../../typeRegistry";

export const protobufPackage = "regen.ecocredit.marketplace.v1";

/** EventSell is an event emitted when a sell order is created. */
export interface EventSell {
  $type: "regen.ecocredit.marketplace.v1.EventSell";
  /** sell_order_id is the unique identifier of the sell order that was created. */
  sellOrderId: Long;
}

/** EventBuyDirect is an event emitted when a direct buy order is processed. */
export interface EventBuyDirect {
  $type: "regen.ecocredit.marketplace.v1.EventBuyDirect";
  /**
   * sell_order_id is the unique identifier of the sell order that credits were
   * purchased from.
   */
  sellOrderId: Long;
}

/** EventUpdateSellOrder is an event emitted when a sell order is updated. */
export interface EventUpdateSellOrder {
  $type: "regen.ecocredit.marketplace.v1.EventUpdateSellOrder";
  /** sell_order_id is the unique identifier of the sell order that was updated. */
  sellOrderId: Long;
}

/** EventCancelSellOrder is an event emitted when a sell order is cancelled. */
export interface EventCancelSellOrder {
  $type: "regen.ecocredit.marketplace.v1.EventCancelSellOrder";
  /**
   * sell_order_id is the unique identifier of the sell order that was
   * cancelled.
   */
  sellOrderId: Long;
}

/**
 * EventAllowDenom is an event emitted when a new denom is added for use in the
 * marketplace.
 */
export interface EventAllowDenom {
  $type: "regen.ecocredit.marketplace.v1.EventAllowDenom";
  /**
   * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) added to the list of
   * allowed denoms for use in the marketplace.
   */
  denom: string;
}

/**
 * EventRemoveAllowedDenom is an event emitted when a denom is removed from use
 * in the marketplace.
 *
 * Since Revision 1
 */
export interface EventRemoveAllowedDenom {
  $type: "regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom";
  /**
   * denom is the bank denom (e.g. ibc/GLKHDSG423SGS) removed from the list of
   * allowed denoms for use in the marketplace.
   */
  denom: string;
}

function createBaseEventSell(): EventSell {
  return { $type: "regen.ecocredit.marketplace.v1.EventSell", sellOrderId: Long.UZERO };
}

export const EventSell = {
  $type: "regen.ecocredit.marketplace.v1.EventSell" as const,

  encode(message: EventSell, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sellOrderId.isZero()) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventSell {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventSell();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventSell {
    return {
      $type: EventSell.$type,
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO,
    };
  },

  toJSON(message: EventSell): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<EventSell>): EventSell {
    return EventSell.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventSell>): EventSell {
    const message = createBaseEventSell();
    message.sellOrderId = (object.sellOrderId !== undefined && object.sellOrderId !== null)
      ? Long.fromValue(object.sellOrderId)
      : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventSell.$type, EventSell);

function createBaseEventBuyDirect(): EventBuyDirect {
  return { $type: "regen.ecocredit.marketplace.v1.EventBuyDirect", sellOrderId: Long.UZERO };
}

export const EventBuyDirect = {
  $type: "regen.ecocredit.marketplace.v1.EventBuyDirect" as const,

  encode(message: EventBuyDirect, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sellOrderId.isZero()) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventBuyDirect {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventBuyDirect();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventBuyDirect {
    return {
      $type: EventBuyDirect.$type,
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO,
    };
  },

  toJSON(message: EventBuyDirect): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<EventBuyDirect>): EventBuyDirect {
    return EventBuyDirect.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventBuyDirect>): EventBuyDirect {
    const message = createBaseEventBuyDirect();
    message.sellOrderId = (object.sellOrderId !== undefined && object.sellOrderId !== null)
      ? Long.fromValue(object.sellOrderId)
      : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventBuyDirect.$type, EventBuyDirect);

function createBaseEventUpdateSellOrder(): EventUpdateSellOrder {
  return { $type: "regen.ecocredit.marketplace.v1.EventUpdateSellOrder", sellOrderId: Long.UZERO };
}

export const EventUpdateSellOrder = {
  $type: "regen.ecocredit.marketplace.v1.EventUpdateSellOrder" as const,

  encode(message: EventUpdateSellOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sellOrderId.isZero()) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventUpdateSellOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventUpdateSellOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventUpdateSellOrder {
    return {
      $type: EventUpdateSellOrder.$type,
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO,
    };
  },

  toJSON(message: EventUpdateSellOrder): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<EventUpdateSellOrder>): EventUpdateSellOrder {
    return EventUpdateSellOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventUpdateSellOrder>): EventUpdateSellOrder {
    const message = createBaseEventUpdateSellOrder();
    message.sellOrderId = (object.sellOrderId !== undefined && object.sellOrderId !== null)
      ? Long.fromValue(object.sellOrderId)
      : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventUpdateSellOrder.$type, EventUpdateSellOrder);

function createBaseEventCancelSellOrder(): EventCancelSellOrder {
  return { $type: "regen.ecocredit.marketplace.v1.EventCancelSellOrder", sellOrderId: Long.UZERO };
}

export const EventCancelSellOrder = {
  $type: "regen.ecocredit.marketplace.v1.EventCancelSellOrder" as const,

  encode(message: EventCancelSellOrder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sellOrderId.isZero()) {
      writer.uint32(8).uint64(message.sellOrderId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventCancelSellOrder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventCancelSellOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sellOrderId = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCancelSellOrder {
    return {
      $type: EventCancelSellOrder.$type,
      sellOrderId: isSet(object.sellOrderId) ? Long.fromValue(object.sellOrderId) : Long.UZERO,
    };
  },

  toJSON(message: EventCancelSellOrder): unknown {
    const obj: any = {};
    message.sellOrderId !== undefined && (obj.sellOrderId = (message.sellOrderId || Long.UZERO).toString());
    return obj;
  },

  create(base?: DeepPartial<EventCancelSellOrder>): EventCancelSellOrder {
    return EventCancelSellOrder.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventCancelSellOrder>): EventCancelSellOrder {
    const message = createBaseEventCancelSellOrder();
    message.sellOrderId = (object.sellOrderId !== undefined && object.sellOrderId !== null)
      ? Long.fromValue(object.sellOrderId)
      : Long.UZERO;
    return message;
  },
};

messageTypeRegistry.set(EventCancelSellOrder.$type, EventCancelSellOrder);

function createBaseEventAllowDenom(): EventAllowDenom {
  return { $type: "regen.ecocredit.marketplace.v1.EventAllowDenom", denom: "" };
}

export const EventAllowDenom = {
  $type: "regen.ecocredit.marketplace.v1.EventAllowDenom" as const,

  encode(message: EventAllowDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventAllowDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventAllowDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventAllowDenom {
    return { $type: EventAllowDenom.$type, denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: EventAllowDenom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<EventAllowDenom>): EventAllowDenom {
    return EventAllowDenom.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventAllowDenom>): EventAllowDenom {
    const message = createBaseEventAllowDenom();
    message.denom = object.denom ?? "";
    return message;
  },
};

messageTypeRegistry.set(EventAllowDenom.$type, EventAllowDenom);

function createBaseEventRemoveAllowedDenom(): EventRemoveAllowedDenom {
  return { $type: "regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom", denom: "" };
}

export const EventRemoveAllowedDenom = {
  $type: "regen.ecocredit.marketplace.v1.EventRemoveAllowedDenom" as const,

  encode(message: EventRemoveAllowedDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): EventRemoveAllowedDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventRemoveAllowedDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventRemoveAllowedDenom {
    return { $type: EventRemoveAllowedDenom.$type, denom: isSet(object.denom) ? String(object.denom) : "" };
  },

  toJSON(message: EventRemoveAllowedDenom): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  create(base?: DeepPartial<EventRemoveAllowedDenom>): EventRemoveAllowedDenom {
    return EventRemoveAllowedDenom.fromPartial(base ?? {});
  },

  fromPartial(object: DeepPartial<EventRemoveAllowedDenom>): EventRemoveAllowedDenom {
    const message = createBaseEventRemoveAllowedDenom();
    message.denom = object.denom ?? "";
    return message;
  },
};

messageTypeRegistry.set(EventRemoveAllowedDenom.$type, EventRemoveAllowedDenom);

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
