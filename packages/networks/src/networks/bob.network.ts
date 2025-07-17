import {
  bobChainId,
  bobSepoliaChainId,
  ethMainChainId,
  ethSepoliaChainId,
} from '@chain-toolkit/chains'
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
  chainType: 'L2',
  symbol: 'ETH',
  logoUrl: '',
  infoUrl: 'https://gobob.xyz',
  color: 'rgb(243, 93, 1)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class BobNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: bobChainId,
    networkId: bobChainId,
    name: 'BOB',
    shortName: 'bob',
    uiName: 'BOB',
    chainEnvironment: 'mainnet',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'bobscout',
        url: 'https://explorer.gobob.xyz',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'GoBOB RPC (HTTP)',
          url: 'https://rpc.gobob.xyz',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'GoBOB RPC (WSS)',
          url: 'wss://rpc.gobob.xyz',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'BlastAPI (HTTP)',
          url: 'https://bob-mainnet.public.blastapi.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'BlastAPI (WSS)',
          url: 'wss://bob-mainnet.public.blastapi.io',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    parent: {
      type: 'L2',
      chain: `eip155-${ethMainChainId}`,
      bridges: [
        {
          name: 'BOB Bridge',
          url: 'https://app.gobob.xyz',
        },
      ],
    },
    status: 'active',
  })

  public static SEPOLIA = (): ChainConfig => ({
    ...commonProps,
    chainId: bobSepoliaChainId,
    networkId: bobSepoliaChainId,
    slip44: 1,
    name: 'BOB Sepolia',
    shortName: 'bob-sepolia',
    uiName: 'BOB Sepolia',
    chainEnvironment: 'sepolia',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Sepolia Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'bobscout',
        url: 'https://bob-sepolia.explorer.gobob.xyz',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'GoBOB Sepolia RPC (HTTP)',
          url: 'https://bob-sepolia.rpc.gobob.xyz',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'GoBOB Sepolia RPC (WSS)',
          url: 'wss://bob-sepolia.rpc.gobob.xyz',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    parent: {
      type: 'L2',
      chain: `eip155-${ethSepoliaChainId}`,
      bridges: [
        {
          name: 'BOB Bridge',
          url: 'https://bob-sepolia.gobob.xyz/',
        },
      ],
    },
    status: 'active',
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case bobChainId:
        return BobNetwork.MAINNET()
      case bobSepoliaChainId:
        return BobNetwork.SEPOLIA()
      default:
        return undefined
    }
  }
}
