// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  
  
  const v53 = stdlib.protect(ctc0, interact.sendToken, 'for Alice\'s interact field sendToken');
  
  const txn1 = await (ctc.sendrecv({
    args: [v53],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:21:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v53, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v57], secs: v59, time: v58, didSend: v30, from: v56 } = txn1;
      
      sim_r.txns.push({
        amt: v57,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v57], secs: v59, time: v58, didSend: v30, from: v56 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v66, time: v65, didSend: v37, from: v64 } = txn2;
  ;
  ;
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v57], secs: v59, time: v58, didSend: v30, from: v56 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.receiveToken(v57), {
    at: './index.rsh:26:26:application',
    fs: ['at ./index.rsh:25:11:application call to [unknown function] (defined at: ./index.rsh:25:14:function exp)'],
    msg: 'receiveToken',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v57],
    evt_cnt: 0,
    funcNum: 1,
    lct: v58,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v66, time: v65, didSend: v37, from: v64 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v64,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v66, time: v65, didSend: v37, from: v64 } = txn2;
  ;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAgABACI1ADEYQQDzKGRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kjDEAAMiMSRCM0ARJENARJIhJMNAISEUQpZDUDgASai5F0sLEisgE0AxeyCCOyEDEAsgezQgBDSIGgjQaIAKkiNAESRDQESSISTDQCEhFESTUFFzX/gASCxGH+NP8WULA0/4gAgzT/FilLAVcACGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCg0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAjE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 8,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v57",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T1",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T3",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161071d38038061071d8339810160408190526100229161019c565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a160208101515161008390341460076100da565b60408051602080820183526000808352848201515180845260019182905543909155835191820152909101604051602081830303815290604052600290805190602001906100d2929190610103565b505050610275565b816100ff5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461010f9061023a565b90600052602060002090601f0160209004810192826101315760008555610177565b82601f1061014a57805160ff1916838001178555610177565b82800160010185558215610177579182015b8281111561017757825182559160200191906001019061015c565b50610183929150610187565b5090565b5b808211156101835760008155600101610188565b60008183036040808212156101b057600080fd5b80518082016001600160401b0380821183831017156101df57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101f857600080fd5b83519450602085019150848210818311171561022457634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061024e57607f821691505b6020821081141561026f57634e487b7160e01b600052602260045260246000fd5b50919050565b610499806102846000396000f3fe6080604052600436106100405760003560e01c80631e93b0f1146100495780632c10a1591461006d5780638323075714610080578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b61004761007b36600461032c565b6100b8565b34801561008c57600080fd5b5060015461005a565b3480156100a157600080fd5b506100aa610214565b604051610064929190610344565b6100c860016000541460096102b1565b6100e2813515806100db57506001548235145b600a6102b1565b6000808055600280546100f4906103a1565b80601f0160208091040260200160405190810160405280929190818152602001828054610120906103a1565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b505050505080602001905181019061018591906103d6565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101b8929190610426565b60405180910390a16101cc341560086102b1565b8051604051339180156108fc02916000818181858888f193505050501580156101f9573d6000803e3d6000fd5b5060008080556001819055610210906002906102d6565b5050565b600060606000546002808054610229906103a1565b80601f0160208091040260200160405190810160405280929190818152602001828054610255906103a1565b80156102a25780601f10610277576101008083540402835291602001916102a2565b820191906000526020600020905b81548152906001019060200180831161028557829003601f168201915b50505050509050915091509091565b816102105760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102e2906103a1565b6000825580601f106102f2575050565b601f0160209004906000526020600020908101906103109190610313565b50565b5b808211156103285760008155600101610314565b5090565b60006040828403121561033e57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156103785785810183015185820160600152820161035c565b8181111561038a576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806103b557607f821691505b6020821081141561033e57634e487b7160e01b600052602260045260246000fd5b6000602082840312156103e857600080fd5b6040516020810181811067ffffffffffffffff8211171561041957634e487b7160e01b600052604160045260246000fd5b6040529151825250919050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461045457600080fd5b8060408501525050939250505056fea264697066735822122046a8a1f90c19f7ce1e718294208b104e2bbb2ee2d49356d577b883b4d85ff89f64736f6c634300080c0033`,
  BytecodeLen: 1821,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:23:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:30:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
