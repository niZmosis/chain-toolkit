import {
  baseMainChainId,
  baseSepoliaChainId,
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
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/base/info/logo.png',
  infoUrl: 'https://base.org',
  color: 'rgb(0, 82, 255)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class BaseNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: baseMainChainId,
    networkId: baseMainChainId,
    slip44: 8453,
    name: 'Base',
    shortName: 'base',
    uiName: 'Base Mainnet',
    chainEnvironment: 'mainnet',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      { name: 'Basescan', url: 'https://basescan.org', standard: 'EIP3091' },
      {
        name: 'Blockscout',
        url: 'https://base.blockscout.com',
        standard: 'EIP3091',
      },
      { name: 'Dex Guru', url: 'https://base.dex.guru', standard: 'EIP3091' },
      {
        name: 'Superscan',
        url: 'https://base.superscan.network',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      authenticated: {
        infura: {
          name: 'Infura',
          url: `https://base-mainnet.infura.io/v3/`,
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
          requiresAuth: true,
        },
        infuraWSS: {
          name: 'Infura WSS',
          url: `wss://base-mainnet.infura.io/ws/v3/`,
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
          requiresAuth: true,
        },
      },
      public: [
        {
          name: 'Public Node',
          url: 'https://base.llamarpc.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tenderly',
          url: 'https://base.gateway.tenderly.co',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'BlastAPI',
          url: 'https://base-mainnet.public.blastapi.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Base RPC',
          url: 'https://mainnet.base.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Base Dev RPC',
          url: 'https://developer-access-mainnet.base.org',
          isWSS: false,
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
      chain: `eip155-${ethMainChainId}}`,
      bridges: [
        {
          name: 'Base Bridge',
          url: 'https://bridge.base.org',
        },
      ],
    },
    status: 'active',
  })

  public static SEPOLIA = (): ChainConfig => ({
    ...commonProps,
    chainId: baseSepoliaChainId,
    networkId: baseSepoliaChainId,
    slip44: 1,
    name: 'Base Sepolia',
    shortName: 'base-sepolia',
    uiName: 'Base Sepolia',
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
        name: 'Basescan',
        url: 'https://sepolia.basescan.org',
        standard: 'EIP3091',
      },
      {
        name: 'Blockscout',
        url: 'https://base-sepolia.blockscout.com',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'PublicNode',
          url: 'https://base-sepolia-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'BlockPi',
          url: 'https://base-sepolia.blockpi.network/v1/rpc/public',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Base Sepolia RPC',
          url: 'https://sepolia.base.org',
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
        name: 'Coinbase Developer Platform',
        url: 'https://portal.cdp.coinbase.com/products/faucet',
      },
      { name: 'Superchain Faucet', url: 'https://app.optimism.io/faucet' },
      { name: 'Alchemy Faucet', url: 'https://basefaucet.com/' },
      { name: 'Bware Labs Faucet', url: 'https://bwarelabs.com/faucets' },
      { name: 'QuickNode Faucet', url: 'https://faucet.quicknode.com/drip' },
      {
        name: 'LearnWeb3 Faucet',
        url: 'https://learnweb3.io/faucets/base_sepolia',
      },
    ],
    parent: {
      type: 'L2',
      chain: `eip155-${ethSepoliaChainId}`,
      bridges: [
        {
          name: 'Base Bridge',
          url: 'https://bridge.base.org',
        },
      ],
    },
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case baseMainChainId:
        return BaseNetwork.MAINNET()
      case baseSepoliaChainId:
        return BaseNetwork.SEPOLIA()
      default:
        return undefined
    }
  }
}
