import { DeliverTxResponse } from '@cosmjs/stargate';
import { RegenApi } from '../src/api';
import {
  MsgCancel,
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
import * as crypto from 'crypto';
import * as ethers from "ethers";
import { MessageClient } from '../src/tx/msg';

const TEST_ADDRESS = 'regen1m0qh5y4ejkz3l5n6jlrntxcqx9r0x9xjv4vpcp';
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
const MIN_CREDIT_AMOUNT = '0.000001';

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

const runAminoTest = async (msgClient: MessageClient | undefined, testMsg: any) => {
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
    expect(txRes).toBeTruthy();
    expect(txRes?.code).toBe(0);
  }
}

describe('RegenApi with tendermint connection', () => {

  // CORE MESSAGES
  describe('Signing and broadcasting Ecocredit txs', () => {
    it('should sign and broadcast MsgSend with tradable credits using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();

      const TEST_MSG_SEND = MsgSend.fromPartial({
        sender: TEST_ADDRESS,
        recipient: TEST_ADDRESS,
        credits: [
          {
            batchDenom: TEST_BATCH_DENOM,
            tradableAmount: MIN_CREDIT_AMOUNT,
          },
        ],
      });

      await runAminoTest(msgClient, TEST_MSG_SEND);
    });
    it('should sign and broadcast MsgSend with retired credits using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();

      const TEST_MSG_SEND = MsgSend.fromPartial({
        sender: TEST_ADDRESS,
        recipient: TEST_ADDRESS,
        credits: [
          {
            batchDenom: TEST_BATCH_DENOM,
            retiredAmount: MIN_CREDIT_AMOUNT,
            retirementJurisdiction: 'US-WA',
          },
        ],
      });

      await runAminoTest(msgClient, TEST_MSG_SEND);
    });
    it('should sign and broadcast MsgSend with retired and tradable credits using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();

      const TEST_MSG_SEND = MsgSend.fromPartial({
        sender: TEST_ADDRESS,
        recipient: TEST_ADDRESS,
        credits: [
          {
            batchDenom: TEST_BATCH_DENOM,
            tradableAmount: MIN_CREDIT_AMOUNT,
            retiredAmount: MIN_CREDIT_AMOUNT,
            retirementJurisdiction: 'US-WA',
          },
        ],
      });

      await runAminoTest(msgClient, TEST_MSG_SEND);
    });
    it('should sign and broadcast MsgCreateClass using legacy amino sign mode', async () => {
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
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();
      const TEST_MSG_CREATE_PROJECT = MsgCreateProject.fromPartial({
        admin: TEST_ADDRESS,
        classId: TEST_CLASS_ID,
        jurisdiction: 'US-OR',
        referenceId: genRandomStr(10),
      });

      await runAminoTest(msgClient, TEST_MSG_CREATE_PROJECT);
    });
    it('should sign and broadcast MsgCreateProject with no reference id using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();
      const TEST_MSG_CREATE_PROJECT = MsgCreateProject.fromPartial({
        admin: TEST_ADDRESS,
        classId: TEST_CLASS_ID,
        jurisdiction: 'US-OR',
        metadata: "foo",
      });

      await runAminoTest(msgClient, TEST_MSG_CREATE_PROJECT);
    });
    it('should sign and broadcast MsgCreateBatch using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();

      let startDate: Date = new Date("2019-01-16");
      let endDate: Date = new Date("2020-01-16");

      const TEST_MSG_CREATE_BATCH = MsgCreateBatch.fromPartial({
        issuer: TEST_ADDRESS,
        projectId: "C22-001",
        issuance: [
          {
            recipient: TEST_ADDRESS,
            tradableAmount: "1.503",
            retiredAmount: "1.503",
            retirementJurisdiction: "US-OR",
          },
        ],
        startDate: startDate,
        endDate: endDate,
        metadata: "foobar",
        open: true,
        originTx: {
          id: makeEthTxHash(),
          source: "polygon",
          contract: makeEthContract(),
          note: "bridged from another chain",
        },
      });

      await runAminoTest(msgClient, TEST_MSG_CREATE_BATCH);
    });
    it('should sign and broadcast MsgCreateBatch with default values using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();

      let startDate: Date = new Date("2019-01-16");
      let endDate: Date = new Date("2020-01-16");

      const TEST_MSG_CREATE_BATCH = MsgCreateBatch.fromPartial({
        issuer: TEST_ADDRESS,
        projectId: "C22-001",
        issuance: [
          {
            recipient: TEST_ADDRESS,
            tradableAmount: "1.503",
          },
        ],
        startDate: startDate,
        endDate: endDate,
        metadata: "foobar",
        open: false,
      });

      await runAminoTest(msgClient, TEST_MSG_CREATE_BATCH);
    });
    it('should sign and broadcast MsgRetire using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();

      const TEST_MSG_RETIRE = MsgRetire.fromPartial({
        owner: TEST_ADDRESS,
        credits: [
          {
            batchDenom: TEST_BATCH_DENOM,
            amount: "0.000001",
          }
        ],
        jurisdiction: "US-OR",
      });

      await runAminoTest(msgClient, TEST_MSG_RETIRE);
    });
    it('should sign and broadcast MsgCancel using legacy amino sign mode', async () => {
      let txRes: DeliverTxResponse | undefined;
      const { msgClient } = await connect();

      const TEST_MSG_CANCEL = MsgCancel.fromPartial({
        owner: TEST_ADDRESS,
        credits: [
          {
            batchDenom: TEST_BATCH_DENOM,
            amount: MIN_CREDIT_AMOUNT,
          }
        ],
        reason: "nope",
      });

      await runAminoTest(msgClient, TEST_MSG_CANCEL);
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
    it('should sign and broadcast MsgTake', async () => {
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

function makeEthTxHash() {
  return "0x" + genRandomStr(64);
}

function makeEthContract() {
  let key = crypto.randomBytes(32).toString('hex');
  let id = "0x" + key;
  var wallet = new ethers.Wallet(id);
  return wallet.address;
}

function genRandomStr(length: Number): string {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}