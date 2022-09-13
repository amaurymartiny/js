import { DeliverTxResponse } from '@cosmjs/stargate';
import { RegenApi } from '../src/api';
import {
  MsgCreateBatch,
  MsgCreateClass,
  MsgCreateProject,
  MsgRetire,
  MsgSend,
} from '../src/generated/regen/ecocredit/v1/tx';
import { StdFee } from '@cosmjs/amino/build/signdoc';
import { Secp256k1HdWallet } from '@cosmjs/amino/build/secp256k1hdwallet';
import {
  MsgCreate,
  MsgPut,
  MsgTake,
} from '../src/generated/regen/ecocredit/basket/v1/tx';
import {
  MsgBuyDirect,
  MsgSell,
  MsgCancelSellOrder,
} from '../src/generated/regen/ecocredit/marketplace/v1/tx';
import Long from 'long';
import * as crypto from 'crypto';
import * as ethers from 'ethers';
import { MessageClient } from '../src/tx/msg';

const TEST_ADDRESS = 'regen1m0qh5y4ejkz3l5n6jlrntxcqx9r0x9xjv4vpcp';
const TEST_BUYER_ADDRESS = 'regen13hu59094gzfcpxl58fcz294p5g5956utwlpqll';
const REDWOOD_NODE_TM_URL = 'http://redwood.regen.network:26657/';
const TEST_FEE: StdFee = {
  amount: [
    {
      denom: 'uregen',
      amount: '5000',
    },
  ],
  gas: '200000',
};
const TEST_MEMO = `regen-js v${process.env.npm_package_version} tests`;
const TEST_BATCH_DENOM = 'C01-001-20170606-20210601-007';
const TEST_CLASS_ID = 'C22';

const connect = async (): Promise<RegenApi> => {
  const mnemonic =
    'time dice choose cabbage suit panic silly cattle picture auto grab hole';

  // This is an Amino signer
  const signer = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
    prefix: 'regen',
  });

  return RegenApi.connect({
    connection: {
      type: 'tendermint',
      endpoint: REDWOOD_NODE_TM_URL,
      signer,
    },
  });
};

const runAminoTest = async (
  msgClient: MessageClient | undefined,
  testMsg: any,
): Promise<void> => {
  let txRes: DeliverTxResponse | undefined;
  const signedTxBytes = await msgClient?.sign(
    TEST_ADDRESS,
    [testMsg],
    TEST_FEE,
    TEST_MEMO,
  );

  expect(signedTxBytes).toBeTruthy();
  if (signedTxBytes) {
    txRes = await msgClient?.broadcast(signedTxBytes);
    console.log('txRes');
    expect(txRes).toBeTruthy();
    expect(txRes?.code).toBe(0);
  }
};

describe('RegenApi with tendermint connection', () => {
  // CORE MESSAGES
  describe('Signing and broadcasting Ecocredit txs using legacy amino sign mode', () => {
    it('should sign and broadcast MsgSend', async () => {
      const { msgClient } = await connect();

      const TEST_MSG_SEND = MsgSend.fromPartial({
        sender: TEST_ADDRESS,
        recipient: TEST_ADDRESS,
        credits: [
          {
            batchDenom: TEST_BATCH_DENOM,
            tradableAmount: '0.01',
          },
        ],
      });

      await runAminoTest(msgClient, TEST_MSG_SEND);
    });
    xit('should sign and broadcast MsgCreateClass', async () => {
      const { msgClient } = await connect();

      const TEST_MSG_CREATE_CLASS = MsgCreateClass.fromPartial({
        admin: TEST_ADDRESS,
        issuers: [TEST_ADDRESS],
        metadata: 'unit test metadata',
        creditTypeAbbrev: 'C',
        fee: {
          denom: 'uregen',
          amount: '20000000',
        },
      });

      await runAminoTest(msgClient, TEST_MSG_CREATE_CLASS);
    });
    it('should sign and broadcast MsgCreateProject using legacy amino sign mode', async () => {
      const { msgClient } = await connect();
      const TEST_MSG_CREATE_PROJECT = MsgCreateProject.fromPartial({
        admin: TEST_ADDRESS,
        classId: TEST_CLASS_ID,
        jurisdiction: 'US-OR',
      });

      await runAminoTest(msgClient, TEST_MSG_CREATE_PROJECT);
    });
    it('should sign and broadcast MsgCreateBatch using legacy amino sign mode', async () => {
      const { msgClient } = await connect();

      let startDate: Date = new Date('2019-01-16');
      let endDate: Date = new Date('2020-01-16');

      const TEST_MSG_CREATE_BATCH = MsgCreateBatch.fromPartial({
        issuer: TEST_ADDRESS,
        projectId: 'C22-001',
        issuance: [
          {
            recipient: TEST_ADDRESS,
            tradableAmount: '1.503',
            retiredAmount: '1.503',
            retirementJurisdiction: 'US-OR',
          },
        ],
        startDate: startDate,
        endDate: endDate,
        metadata: 'foobar',
        open: true,
        originTx: {
          id: makeEthTxHash(),
          source: 'polygon',
          contract: makeEthContract(),
          note: 'bridged from another chain',
        },
      });

      await runAminoTest(msgClient, TEST_MSG_CREATE_BATCH);
    });
    it('should sign and broadcast MsgRetire using legacy amino sign mode', async () => {
      const { msgClient } = await connect();

      const TEST_MSG_RETIRE = MsgRetire.fromPartial({
        owner: TEST_ADDRESS,
        credits: [
          {
            batchDenom: TEST_BATCH_DENOM,
            amount: '0.000001',
          },
        ],
        jurisdiction: 'US-OR',
      });

      await runAminoTest(msgClient, TEST_MSG_RETIRE);
    });
  });
  describe('Signing and broadcasting Basket txs using legacy amino sign mode', () => {
    xit('should sign and broadcast MsgCreate', async () => {
      const { msgClient } = await connect();

      const basketName = 'TEST' + (Date.now() % 1000);
      const TEST_BASKET_MSG_CREATE = MsgCreate.fromPartial({
        curator: TEST_ADDRESS,
        name: basketName,
        description: 'test description',
        exponent: 7,
        disableAutoRetire: false,
        creditTypeAbbrev: 'C',
        allowedClasses: ['C14', 'C13'],
        dateCriteria: undefined,
        fee: [
          {
            denom: 'uregen',
            amount: '20000000',
          },
        ],
      });

      await runAminoTest(msgClient, TEST_BASKET_MSG_CREATE);
    });
    xit('should sign and broadcast MsgPut', async () => {
      const { msgClient } = await connect();

      const TEST_BASKET_MSG_PUT = MsgPut.fromPartial({
        owner: TEST_ADDRESS,
        basketDenom: 'eco.uC.NCT',
        credits: [{ batchDenom: TEST_BATCH_DENOM, amount: '1' }],
      });

      await runAminoTest(msgClient, TEST_BASKET_MSG_PUT);
    });
    xit('should sign and broadcast MsgTake', async () => {
      const { msgClient } = await connect();
      const TEST_BASKET_MSG_TAKE = MsgTake.fromPartial({
        owner: TEST_ADDRESS,
        basketDenom: 'eco.uC.NCT',
        amount: '1000000',
        retirementJurisdiction: 'US-CO 98765',
        retireOnTake: true,
      });

      await runAminoTest(msgClient, TEST_BASKET_MSG_TAKE);
    });
  });
});
describe('Signing and broadcasting Marketplace txs using legacy amino sign mode', () => {
  xit('should sign and broadcast MsgSell', async () => {
    const { msgClient } = await connect();
    const sellOrder = {
      batchDenom: TEST_BATCH_DENOM,
      quantity: '1',
      askPrice: {
        denom: 'uregen',
        amount: '1000000',
      },
      disableAutoRetire: false,
      expiration: new Date('October 31, 2099'),
    };
    const TEST_MSG_SELL = MsgSell.fromPartial({
      seller: TEST_ADDRESS,
      orders: [sellOrder],
    });

    await runAminoTest(msgClient, TEST_MSG_SELL);
  });
  xit('should sign and broadcast MsgCancelSellOrder', async () => {
    // This test passes, but it needs a real sellOrderId generated by the same address.
    // If sell order 50 doesn't work, run the MsgSell test to get a new sellOrderId to cancel.
    const { msgClient } = await connect();

    const TEST_MSG_CANCEL = MsgCancelSellOrder.fromPartial({
      seller: TEST_ADDRESS,
      sellOrderId: Long.fromValue(52), // If this id doesn't work, run the MsgSell test to get a new sellOrderId to cancel
    });

    await runAminoTest(msgClient, TEST_MSG_CANCEL);
  });
  // Failing due to unsuccessful address generation? 
  xit('should sign and broadcast MsgBuyDirect', async () => {
    const connectBuyer = async (): Promise<RegenApi> => {
      // regen13hu59094gzfcpxl58fcz294p5g5956utwlpqll
      const mnemonic =
        'seminar throw sorry nerve outer lottery stuff blush couple medal wire pink';

      // code for generating an address and capturing the mnemonic:
      // const newAccount = await Secp256k1HdWallet.generate(12, {
      //   prefix: 'regen',
      // });
      // const accounts = await newAccount.getAccounts();
      // console.log('accounts', accounts);
      // console.log('newAccount', newAccount);

      const buyerSigner = await Secp256k1HdWallet.fromMnemonic(mnemonic, {
        prefix: 'regen',
      });

      return RegenApi.connect({
        connection: {
          type: 'tendermint',
          endpoint: REDWOOD_NODE_TM_URL,
          signer: buyerSigner,
        },
      });
    };
    const { msgClient } = await connectBuyer(); // TODO - Error: Failed to retrieve account from signer

    const TEST_MSG_BUY = MsgBuyDirect.fromPartial({
      buyer: TEST_BUYER_ADDRESS,
      orders: [
        {
          sellOrderId: '53',
          quantity: '1',
          bidPrice: { denom: 'uregen', amount: '1000000' },
          disableAutoRetire: false,
          retirementJurisdiction: 'US',
        },
      ],
    });

    await runAminoTest(msgClient, TEST_MSG_BUY);
  });
});

function makeEthTxHash(): string {
  return '0x' + genRandomStr(64);
}

function makeEthContract(): string {
  let key = crypto.randomBytes(32).toString('hex');
  let id = '0x' + key;
  var wallet = new ethers.Wallet(id);
  return wallet.address;
}

function genRandomStr(length: Number): string {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
