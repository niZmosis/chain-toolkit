import {
  ethMainChainId,
  ethSepoliaChainId,
  mantleMainnetChainId,
  mantleSepoliaChainId,
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
  symbol: 'MNT',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/mantle/info/logo.png',
  color: 'rgb(124, 124, 131)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class MantleNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: mantleMainnetChainId,
    networkId: mantleMainnetChainId,
    slip44: undefined,
    name: 'Mantle',
    shortName: 'mantle',
    uiName: 'Mantle',
    chainEnvironment: 'mainnet',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Mantle',
      symbol: 'MNT',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Mantlescan',
        url: 'https://mantlescan.xyz',
        standard: 'EIP3091',
      },
      {
        name: 'Mantle Explorer',
        url: 'https://explorer.mantle.xyz',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Mantle RPC',
          url: 'https://rpc.mantle.xyz',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://mantle-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://mantle-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    infoUrl: 'https://mantle.xyz',
    parent: {
      type: 'L2',
      chain: `eip155-${ethMainChainId}`,
      bridges: [
        {
          name: 'Mantle Bridge',
          url: 'https://bridge.mantle.xyz',
        },
      ],
    },
  })

  public static SEPOLIA = (): ChainConfig => ({
    ...commonProps,
    chainId: mantleSepoliaChainId,
    networkId: mantleSepoliaChainId,
    slip44: 1,
    name: 'Mantle Sepolia Testnet',
    shortName: 'mnt-sep',
    uiName: 'Mantle Sepolia',
    chainEnvironment: 'sepolia',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Sepolia Mantle',
      symbol: 'MNT',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer.sepolia.mantle.xyz',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Mantle Sepolia RPC',
          url: 'https://rpc.sepolia.mantle.xyz',
          isWSS: false,
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
        name: 'Mantle Sepolia Faucet',
        url: 'https://faucet.sepolia.mantle.xyz',
      },
    ],
    infoUrl: 'https://mantle.xyz',
    parent: {
      type: 'L2',
      chain: `eip155-${ethSepoliaChainId}`,
      bridges: [
        {
          name: 'Mantle Bridge',
          url: 'https://bridge.mantle.xyz',
        },
      ],
    },
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case mantleMainnetChainId:
        return MantleNetwork.MAINNET()
      case mantleSepoliaChainId:
        return MantleNetwork.SEPOLIA()
      default:
        return undefined
    }
  }
}
