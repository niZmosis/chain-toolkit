import {
  ethMainChainId,
  ethSepoliaChainId,
  optimismMainChainId,
  optimismSepoliaChainId,
} from '@chain-toolkit/chains'
import type { ChainId, ChainConfig } from '@chain-toolkit/schemas'

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
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/optimism/info/logo.png',
  color: 'rgb(255, 4, 32)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class OptimismNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: optimismMainChainId,
    networkId: optimismMainChainId,
    slip44: undefined,
    name: 'OP Mainnet',
    shortName: 'oeth',
    uiName: 'Optimism',
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
        name: 'Etherscan',
        url: 'https://optimistic.etherscan.io',
        standard: 'EIP3091',
      },
      {
        name: 'Blockscout',
        url: 'https://optimism.blockscout.com',
        standard: 'EIP3091',
      },
      {
        name: 'Dex Guru',
        url: 'https://optimism.dex.guru',
        standard: 'EIP3091',
      },
      {
        name: 'Routescan',
        url: 'https://mainnet.superscan.network',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Optimism RPC',
          url: 'https://mainnet.optimism.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://optimism-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://optimism-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tenderly Gateway (HTTP)',
          url: 'https://optimism.gateway.tenderly.co',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tenderly Gateway (WSS)',
          url: 'wss://optimism.gateway.tenderly.co',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://optimism.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://optimism.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    infoUrl: 'https://optimism.io',
    parent: {
      type: 'L2',
      chain: `eip155-${ethMainChainId}`,
      bridges: [
        {
          name: 'Optimism Bridge',
          url: 'https://app.optimism.io/bridge',
        },
      ],
    },
  })

  public static SEPOLIA = (): ChainConfig => ({
    ...commonProps,
    chainId: optimismSepoliaChainId,
    networkId: optimismSepoliaChainId,
    slip44: 1,
    name: 'OP Sepolia Testnet',
    shortName: 'opsep',
    uiName: 'Optimism Sepolia',
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
        name: 'Etherscan',
        url: 'https://sepolia-optimism.etherscan.io',
        standard: 'EIP3091',
      },
      {
        name: 'Blockscout',
        url: 'https://optimism-sepolia.blockscout.com',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Optimism Sepolia RPC',
          url: 'https://sepolia.optimism.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://optimism-sepolia.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://optimism-sepolia.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    faucets: [
      {
        name: 'Optimism Faucet',
        url: 'https://app.optimism.io/faucet',
      },
    ],
    infoUrl: 'https://optimism.io',
    parent: {
      type: 'L2',
      chain: `eip155-${ethSepoliaChainId}`,
      bridges: [
        {
          name: 'Optimism Bridge',
          url: 'https://app.optimism.io/bridge',
        },
      ],
    },
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case optimismMainChainId:
        return OptimismNetwork.MAINNET()
      case optimismSepoliaChainId:
        return OptimismNetwork.SEPOLIA()
      default:
        return undefined
    }
  }
}
