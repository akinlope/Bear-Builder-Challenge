import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const [ accAlice, accBob ] =
  await stdlib.newTestAccounts(2, startingBalance);

const ctcAlice = accAlice.contract(backend);
const ctcBob = accBob.contract(backend, ctcAlice.getInfo());
const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async (Who) => fmt(await stdlib.balanceOf(Who));
const beforeAlice = await getBalance(accAlice);
const beforeBob = await getBalance(accBob);


await Promise.all([
  backend.Alice(ctcAlice, {
    ...stdlib.hasRandom,
    sendToken: stdlib.parseCurrency(50),
  }),
  backend.Bob(ctcBob, {
    ...stdlib.hasRandom,
    receiveToken: (amt) => {
      console.log(`Bob receives the sent token of ${fmt(amt)}`);
    }
  }),
]);

const afterAlice = await getBalance(accAlice);
const afterBob = await getBalance(accBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
console.log(`Bob went from ${beforeBob} to ${afterBob}.`);


