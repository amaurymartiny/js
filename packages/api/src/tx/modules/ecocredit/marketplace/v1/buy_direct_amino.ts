import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import {
  MsgBuyDirect,
  MsgBuyDirect_Order,
} from '../../../../../generated/regen/ecocredit/marketplace/v1/tx';
import { AminoCoin } from './sell_amino';

const msgBuyDirectAmnioType = 'regen.marketplace/MsgBuyDirect';

export const buyDirectTypeUrl = '/' + MsgBuyDirect.$type;

interface AminoBuyDirect_Order {
  sell_order_id: Long;
  quantity?: string;
  bid_price?: AminoCoin;
  disable_auto_retire?: boolean;
  retirement_jurisdiction?: string;
}

export interface AminoMsgBuyDirect extends AminoMsg {
  readonly type: typeof msgBuyDirectAmnioType;
  readonly value: {
    readonly buyer: string;
    readonly orders: AminoBuyDirect_Order[];
  };
}

export function isAminoMsgBuyDirect(msg: AminoMsg): msg is AminoMsgBuyDirect {
  return msg.type === msgBuyDirectAmnioType;
}

export function buyDirectConverter(): AminoConverter {
  return {
    aminoType: msgBuyDirectAmnioType,
    toAmino: ({ buyer, orders }: MsgBuyDirect): AminoMsgBuyDirect['value'] => {
      return {
        buyer,
        orders: orders.map(b => {
          return {
            sell_order_id: b.sellOrderId || undefined,
            quantity: b.quantity || undefined,
            bid_price: {
              denom: b.bidPrice?.denom || undefined,
              amount: b.bidPrice?.amount || undefined,
            },
            disable_auto_retire: b.disableAutoRetire || undefined,
            retirement_jurisdiction: b.retirementJurisdiction || undefined,
          };
        }),
      };
    },
    fromAmino: ({
      buyer,
      orders,
    }: AminoMsgBuyDirect['value']): Partial<MsgBuyDirect> => {
      return {
        buyer,
        orders: orders.map(b => {
          return {
            $type: MsgBuyDirect_Order.$type,
            sellOrderId: b.sell_order_id,
            quantity: b.quantity || '0',
            bidPrice: b.bid_price && {
              $type: 'cosmos.base.v1beta1.Coin',
              amount: b.bid_price?.amount || '0',
              denom: b.bid_price?.denom || '',
            },
            disableAutoRetire: Boolean(b.disable_auto_retire),
            retirementJurisdiction: b.retirement_jurisdiction || '',
          };
        }),
      };
    },
  };
}
