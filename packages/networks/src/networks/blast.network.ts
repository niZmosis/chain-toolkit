import {
  blastMainChainId,
  blastSepoliaChainId,
  ethMainChainId,
  ethSepoliaChainId,
} from '@chain-toolkit/chains'
import type { ChainConfig, ChainId } from '@chain-toolkit/schemas'

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
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/blast/info/logo.png',
  infoUrl: 'https://blast.io/',
  color: 'rgb(250, 248, 13)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class BlastNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: blastMainChainId,
    networkId: blastMainChainId,
    slip44: 342,
    name: 'Blast',
    shortName: 'blast',
    uiName: 'Blast Mainnet',
    chainEnvironment: 'mainnet',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      { name: 'Blastscan', url: 'https://blastscan.io', standard: 'EIP3091' },
      {
        name: 'Blast Explorer',
        url: 'https://blastexplorer.io',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Blast RPC',
          url: 'https://rpc.blast.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Ankr',
          url: 'https://rpc.ankr.com/blast',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Blast L2',
          url: 'https://blastl2-mainnet.public.blastapi.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'BlockPi',
          url: 'https://blast.blockpi.network/v1/rpc/public',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://blast-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://blast-rpc.publicnode.com',
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
          name: 'Blast Bridge',
          url: 'https://blast.io/bridge',
        },
      ],
    },
    status: 'active',
  })

  public static SEPOLIA = (): ChainConfig => ({
    ...commonProps,
    chainId: blastSepoliaChainId,
    networkId: blastSepoliaChainId,
    slip44: 1,
    name: 'Blast Sepolia',
    shortName: 'blast-sepolia',
    uiName: 'Blast Sepolia',
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
        name: 'Blastscan Sepolia',
        url: 'https://testnet.blastscan.io',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Blast Sepolia RPC',
          url: 'https://sepolia.blast.io',
          isWSS: false,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC',
          url: 'https://blast-sepolia.drpc.org',
          isWSS: false,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC WSS',
          url: 'wss://blast-sepolia.drpc.org',
          isWSS: true,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    faucets: [
      {
        name: 'QuickNode Faucet',
        url: 'https://faucet.quicknode.com/blast/sepolia',
      },
    ],
    parent: {
      type: 'L2',
      chain: `eip155-${ethSepoliaChainId}`,
      bridges: [
        {
          name: 'Blast Bridge',
          url: 'https://blast.io/bridge',
        },
      ],
    },
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case blastMainChainId:
        return BlastNetwork.MAINNET()
      case blastSepoliaChainId:
        return BlastNetwork.SEPOLIA()
      default:
        return undefined
    }
  }
}
