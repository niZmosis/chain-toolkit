import {
  arbitrumMainChainId,
  arbitrumSepoliaChainId,
  ethMainChainId,
  ethSepoliaChainId,
} from '@chain-toolkit/chains'
import type { ChainConfig, ChainId } from '@chain-toolkit/types'

const commonProps: Omit<
  ChainConfig,
  | 'name'
  | 'shortName'
  | 'uiName'
  | 'chainEnvironment'
  | 'chain'
  | 'chainId'
  | 'networkId'
  | 'nativeCurrency'
  | 'gasUrls'
  | 'explorers'
  | 'nodes'
  | 'contracts'
> = {
  chainType: 'L2',
  symbol: 'ETH',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png',
  infoUrl: 'https://arbitrum.io',
  color: 'rgb(40, 161, 241)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class ArbitrumNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: arbitrumMainChainId,
    networkId: arbitrumMainChainId,
    slip44: 9001,
    name: 'Arbitrum One',
    shortName: 'arb1',
    uiName: 'Arbitrum One',
    chainEnvironment: 'mainnet',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [
      { name: 'Arbitrum Gas Station', url: 'https://gasstation.arbitrum.io/' },
    ],
    explorers: [
      { name: 'Arbiscan', url: 'https://arbiscan.io', standard: 'EIP3091' },
      { name: 'Arbitrum Explorer', url: 'https://explorer.arbitrum.io' },
      {
        name: 'Dexguru',
        url: 'https://arbitrum.dex.guru',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      authenticated: {
        infura: {
          name: 'Infura',
          url: `https://arbitrum-mainnet.infura.io/v3/`,
          isWSS: false,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
        infuraWSS: {
          name: 'Infura WSS',
          url: `wss://arbitrum-mainnet.infura.io/ws/v3/`,
          isWSS: true,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
        alchemy: {
          name: 'Alchemy',
          url: `https://arb-mainnet.g.alchemy.com/v2/`,
          isWSS: false,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
        alchemyWSS: {
          name: 'Alchemy WSS',
          url: `wss://arb-mainnet.g.alchemy.com/v2/`,
          isWSS: true,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
      },
      public: [
        {
          name: 'Arbitrum RPC',
          url: 'https://arb1.arbitrum.io/rpc',
          isWSS: false,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://arbitrum-one.publicnode.com',
          isWSS: false,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://arbitrum-one.publicnode.com',
          isWSS: true,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
        {
          name: 'Cloudflare',
          url: 'https://cloudflare-eth.com',
          isWSS: false,
          chunkLimit: 3_500,
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
          name: 'Arbitrum Bridge',
          url: 'https://bridge.arbitrum.io',
        },
      ],
    },
  })

  public static SEPOLIA = (): ChainConfig => ({
    ...commonProps,
    chainId: arbitrumSepoliaChainId,
    networkId: arbitrumSepoliaChainId,
    slip44: 1,
    name: 'Arbitrum Sepolia',
    shortName: 'arb-sep',
    uiName: 'Arbitrum Sepolia',
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
        name: 'Arbitrum Sepolia Explorer',
        url: 'https://sepolia-explorer.arbitrum.io',
        standard: 'EIP3091',
      },
      {
        name: 'Arbiscan Sepolia',
        url: 'https://sepolia.arbiscan.io',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      authenticated: {
        infura: {
          name: 'Infura',
          url: `https://arbitrum-sepolia.infura.io/v3/`,
          isWSS: false,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
        alchemy: {
          name: 'Alchemy',
          url: `https://arb-sepolia.g.alchemy.com/v2/`,
          isWSS: false,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
      },
      public: [
        {
          name: 'Arbitrum Sepolia RPC',
          url: 'https://sepolia-rollup.arbitrum.io/rpc',
          isWSS: false,
          chunkLimit: 3_500,
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
          name: 'Arbitrum Bridge',
          url: 'https://bridge.arbitrum.io',
        },
      ],
    },
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case arbitrumMainChainId:
        return ArbitrumNetwork.MAINNET()
      case arbitrumSepoliaChainId:
        return ArbitrumNetwork.SEPOLIA()
      default:
        return undefined
    }
  }
}
