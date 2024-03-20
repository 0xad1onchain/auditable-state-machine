/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  SchemaRegistry,
  SchemaRegistryInterface,
} from "../../contracts/SchemaRegistry";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyExists",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "uid",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "registerer",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
          {
            internalType: "contract ISchemaResolver",
            name: "resolver",
            type: "address",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "string",
            name: "schema",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct SchemaRecord",
        name: "schema",
        type: "tuple",
      },
    ],
    name: "Registered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "uid",
        type: "bytes32",
      },
    ],
    name: "getSchema",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "uid",
            type: "bytes32",
          },
          {
            internalType: "contract ISchemaResolver",
            name: "resolver",
            type: "address",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "string",
            name: "schema",
            type: "string",
          },
        ],
        internalType: "struct SchemaRecord",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "schema",
        type: "string",
      },
      {
        internalType: "contract ISchemaResolver",
        name: "resolver",
        type: "address",
      },
      {
        internalType: "bool",
        name: "revocable",
        type: "bool",
      },
    ],
    name: "register",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e060405234801561001057600080fd5b506001608052600260a052600060c05260805160a05160c051610a8461004c600039600060fe0152600060d50152600060ac0152610a846000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806354fd4d501461004657806360d7a27814610064578063a2ea7c6e14610085575b600080fd5b61004e6100a5565b60405161005b9190610683565b60405180910390f35b61007761007236600461069d565b610148565b60405190815260200161005b565b61009861009336600461074f565b61030c565b60405161005b9190610768565b60606100d07f0000000000000000000000000000000000000000000000000000000000000000610434565b6100f97f0000000000000000000000000000000000000000000000000000000000000000610434565b6101227f0000000000000000000000000000000000000000000000000000000000000000610434565b604051602001610134939291906107c1565b604051602081830303815290604052905090565b60008060405180608001604052806000801b81526020018573ffffffffffffffffffffffffffffffffffffffff168152602001841515815260200187878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250939094525092935091506101ca9050826104f2565b60008181526020819052604090205490915015610213576040517f23369fa600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80825260008181526020818152604091829020845181559084015160018201805493860151151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00000000000000000000000000000000000000000090941673ffffffffffffffffffffffffffffffffffffffff9092169190911792909217909155606083015183919060028201906102af9082610908565b509050503373ffffffffffffffffffffffffffffffffffffffff16817fd0b86852e21f9e5fa4bc3b0cff9757ffe243d50c4b43968a42202153d651ea5e846040516102fa9190610768565b60405180910390a39695505050505050565b604080516080810182526000808252602082018190529181019190915260608082015260008281526020818152604091829020825160808101845281548152600182015473ffffffffffffffffffffffffffffffffffffffff8116938201939093527401000000000000000000000000000000000000000090920460ff161515928201929092526002820180549192916060840191906103ab90610866565b80601f01602080910402602001604051908101604052809291908181526020018280546103d790610866565b80156104245780601f106103f957610100808354040283529160200191610424565b820191906000526020600020905b81548152906001019060200180831161040757829003601f168201915b5050505050815250509050919050565b6060600061044183610532565b600101905060008167ffffffffffffffff81111561046157610461610837565b6040519080825280601f01601f19166020018201604052801561048b576020820181803683370190505b5090508181016020015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461049557509392505050565b600081606001518260200151836040015160405160200161051593929190610a22565b604051602081830303815290604052805190602001209050919050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000831061057b577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106105a7576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc1000083106105c557662386f26fc10000830492506010015b6305f5e10083106105dd576305f5e100830492506008015b61271083106105f157612710830492506004015b60648310610603576064830492506002015b600a831061060f576001015b92915050565b60005b83811015610630578181015183820152602001610618565b50506000910152565b60008151808452610651816020860160208601610615565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006106966020830184610639565b9392505050565b600080600080606085870312156106b357600080fd5b843567ffffffffffffffff808211156106cb57600080fd5b818701915087601f8301126106df57600080fd5b8135818111156106ee57600080fd5b88602082850101111561070057600080fd5b6020928301965094505085013573ffffffffffffffffffffffffffffffffffffffff8116811461072f57600080fd5b91506040850135801515811461074457600080fd5b939692955090935050565b60006020828403121561076157600080fd5b5035919050565b602081528151602082015273ffffffffffffffffffffffffffffffffffffffff6020830151166040820152604082015115156060820152600060608301516080808401526107b960a0840182610639565b949350505050565b600084516107d3818460208901610615565b80830190507f2e00000000000000000000000000000000000000000000000000000000000000808252855161080f816001850160208a01610615565b6001920191820152835161082a816002840160208801610615565b0160020195945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600181811c9082168061087a57607f821691505b6020821081036108b3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561090357600081815260208120601f850160051c810160208610156108e05750805b601f850160051c820191505b818110156108ff578281556001016108ec565b5050505b505050565b815167ffffffffffffffff81111561092257610922610837565b610936816109308454610866565b846108b9565b602080601f83116001811461098957600084156109535750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b1785556108ff565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b828110156109d6578886015182559484019460019091019084016109b7565b5085821015610a1257878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60008451610a34818460208901610615565b60609490941b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169190930190815290151560f81b60148201526015019291505056fea164736f6c6343000813000a";

type SchemaRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SchemaRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SchemaRegistry__factory extends ContractFactory {
  constructor(...args: SchemaRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      SchemaRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SchemaRegistry__factory {
    return super.connect(runner) as SchemaRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SchemaRegistryInterface {
    return new Interface(_abi) as SchemaRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SchemaRegistry {
    return new Contract(address, _abi, runner) as unknown as SchemaRegistry;
  }
}
