import { evmosMainnetChainId, evmosTestnetChainId } from '@chain-toolkit/chains'
import type { ChainId, ChainConfig } from '@chain-toolkit/types'

const commonProps: Omit<
  ChainConfig,
  | 'chainId'
  | 'networkId'
  | 'name'
  | 'shortName'
  | 'uiName'
  | 'chainEnvironment'
  | 'chain'
  | 'nodes'
  | 'gasUrls'
  | 'explorers'
  | 'contracts'
  | 'nativeCurrency'
> = {
  chainType: 'L1',
  symbol: 'EVMOS',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/evmos/info/logo.png',
  color: 'rgb(45, 41, 37)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class EvmosNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: evmosMainnetChainId,
    networkId: evmosMainnetChainId,
    slip44: undefined,
    name: 'Evmos',
    shortName: 'evmos',
    uiName: 'Evmos',
    chainEnvironment: 'mainnet',
    chain: 'Evmos',
    nativeCurrency: {
      name: 'Evmos',
      symbol: 'EVMOS',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Evmos Explorer (Escan)',
        url: 'https://escan.live',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Lava Build',
          url: 'https://evmos.lava.build',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Lava Build WSS',
          url: 'wss://evmos.lava.build/websocket',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Public Node (HTTP)',
          url: 'https://evmos-evm-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Public Node (WSS)',
          url: 'wss://evmos-evm-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0x13aD51a6664973EbD0749a7c84939d973F247921',
    },
  })

  public static TESTNET = (): ChainConfig => ({
    ...commonProps,
    chainId: evmosTestnetChainId,
    networkId: evmosTestnetChainId,
    slip44: 1,
    name: 'Evmos Testnet',
    shortName: 'evmos-testnet',
    uiName: 'Evmos Testnet',
    chainEnvironment: 'testnet',
    chain: 'Evmos',
    nativeCurrency: {
      name: 'test-Evmos',
      symbol: 'tEVMOS',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Evmos Explorer (Escan)',
        url: 'https://testnet.escan.live',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Lava Build',
          url: 'https://evmos-testnet.lava.build',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Evmos Public Node',
          url: 'https://eth.bd.evmos.dev:8545',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Public Node (HTTP)',
          url: 'https://evmos-testnet-evm-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Public Node (WSS)',
          url: 'wss://evmos-testnet-evm-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
    },
    faucets: [
      {
        name: 'Evmos Faucet',
        url: 'https://faucet.evmos.dev',
      },
    ],
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case evmosMainnetChainId:
        return EvmosNetwork.MAINNET()
      case evmosTestnetChainId:
        return EvmosNetwork.TESTNET()
      default:
        return undefined
    }
  }
}
