import { AminoMsg } from '@cosmjs/amino';
import { AminoConverter } from '@cosmjs/stargate';
import { MsgCancel } from '../../../../generated/regen/ecocredit/v1/tx';
import { Credits } from '../../../../generated/regen/ecocredit/v1/types';

const msgCancelAminoType = 'regen.core/MsgCancel';

export const cancelTypeUrl = '/' + MsgCancel.$type;

export interface AminoCredits {
  batch_denom: string;
  amount: string;
}

export interface AminoMsgCancel extends AminoMsg {
  readonly type: typeof msgCancelAminoType;
  readonly value: {
    readonly owner: string;
    readonly credits: AminoCredits[];
    readonly reason: string;
  };
}

export function isAminoMsgCancel(msg: AminoMsg): msg is AminoMsgCancel {
  return msg.type === msgCancelAminoType;
}

export function cancelConverter(): AminoConverter {
  return {
    aminoType: msgCancelAminoType,
    toAmino: ({
      owner,
      credits,
      reason,
    }: MsgCancel): AminoMsgCancel['value'] => {
      return {
        owner,
        credits: credits.map(credit => {
          return {
            batch_denom: credit.batchDenom,
            amount: credit.amount,
          };
        }),
        reason,
      };
    },
    fromAmino: ({
      owner,
      credits,
      reason,
    }: AminoMsgCancel['value']): Partial<MsgCancel> => {
      return {
        owner,
        credits: credits.map(credit => {
          return {
            $type: Credits.$type,
            batchDenom: credit.batch_denom,
            amount: credit.amount,
          };
        }),
        reason,
      };
    },
  };
}
