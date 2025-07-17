import {
  moonbaseAlphaChainId,
  moonbeamChainId,
  moonriverChainId,
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
  | 'color'
  | 'symbol'
  | 'nodes'
  | 'gasUrls'
  | 'explorers'
  | 'contracts'
  | 'nativeCurrency'
> = {
  chainType: 'L1',
  logoUrl: '',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class MoonNetwork {
  public static MOONBEAM = (): ChainConfig => ({
    ...commonProps,
    chainId: moonbeamChainId,
    networkId: moonbeamChainId,
    slip44: 1284,
    name: 'Moonbeam',
    shortName: 'mbeam',
    uiName: 'Moonbeam',
    chainEnvironment: 'mainnet',
    chain: 'MOON',
    logoUrl:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/moonbeam/info/logo.png',
    color: 'rgb(149, 143, 220)',
    symbol: 'GLMR',
    nativeCurrency: {
      name: 'Glimmer',
      symbol: 'GLMR',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Moonscan',
        url: 'https://moonbeam.moonscan.io',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Moonbeam RPC',
          url: 'https://rpc.api.moonbeam.network',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Moonbeam WSS',
          url: 'wss://wss.api.moonbeam.network',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Blast API (HTTP)',
          url: 'https://moonbeam.public.blastapi.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Blast API (WSS)',
          url: 'wss://moonbeam.public.blastapi.io',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Dwellir (HTTP)',
          url: 'https://moonbeam-rpc.dwellir.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Dwellir (WSS)',
          url: 'wss://moonbeam-rpc.dwellir.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'OnFinality (HTTP)',
          url: 'https://moonbeam.api.onfinality.io/public',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'OnFinality (WSS)',
          url: 'wss://moonbeam.api.onfinality.io/public-ws',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'UnitedBloc (HTTP)',
          url: 'https://moonbeam.unitedbloc.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'UnitedBloc (WSS)',
          url: 'wss://moonbeam.unitedbloc.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://moonbeam-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://moonbeam-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://moonbeam.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://moonbeam.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    infoUrl: 'https://moonbeam.network/networks/moonbeam/',
  })

  public static MOONRIVER = (): ChainConfig => ({
    ...commonProps,
    chainId: moonriverChainId,
    networkId: moonriverChainId,
    slip44: 1285,
    name: 'Moonriver',
    shortName: 'mriver',
    uiName: 'Moonriver',
    chainEnvironment: 'mainnet',
    chain: 'MOON',
    logoUrl:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/moonriver/info/logo.png',
    color: 'rgb(149, 249 ,33)',
    symbol: 'MOVR',
    nativeCurrency: {
      name: 'Moonriver',
      symbol: 'MOVR',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Moonscan',
        url: 'https://moonriver.moonscan.io',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Moonriver RPC',
          url: 'https://rpc.api.moonriver.moonbeam.network',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Moonriver WSS',
          url: 'wss://wss.api.moonriver.moonbeam.network',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Blast API (HTTP)',
          url: 'https://moonriver.public.blastapi.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Blast API (WSS)',
          url: 'wss://moonriver.public.blastapi.io',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Dwellir (HTTP)',
          url: 'https://moonriver-rpc.dwellir.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Dwellir (WSS)',
          url: 'wss://moonriver-rpc.dwellir.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'OnFinality (HTTP)',
          url: 'https://moonriver.api.onfinality.io/public',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'OnFinality (WSS)',
          url: 'wss://moonriver.api.onfinality.io/public-ws',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'UnitedBloc (HTTP)',
          url: 'https://moonriver.unitedbloc.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'UnitedBloc (WSS)',
          url: 'wss://moonriver.unitedbloc.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://moonriver-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://moonriver-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://moonriver.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://moonriver.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    infoUrl: 'https://moonbeam.network/networks/moonriver/',
  })

  public static MOONBASE_ALPHA = (): ChainConfig => ({
    ...commonProps,
    chainId: moonbaseAlphaChainId,
    networkId: moonbaseAlphaChainId,
    slip44: 1,
    name: 'Moonbase Alpha',
    shortName: 'mbase',
    uiName: 'Moonbase Alpha',
    chainEnvironment: 'testnet',
    chain: 'MOON',
    logoUrl:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/moonbasealpha/info/logo.png',
    color: 'rgb(124, 124, 131)',
    symbol: 'DEV',
    nativeCurrency: {
      name: 'Dev',
      symbol: 'DEV',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Moonscan',
        url: 'https://moonbase.moonscan.io',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Moonbase Alpha RPC',
          url: 'https://rpc.api.moonbase.moonbeam.network',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Moonbase Alpha WSS',
          url: 'wss://wss.api.moonbase.moonbeam.network',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Blast API (HTTP)',
          url: 'https://moonbase-alpha.public.blastapi.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Blast API (WSS)',
          url: 'wss://moonbase-alpha.public.blastapi.io',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Dwellir (HTTP)',
          url: 'https://moonbase-rpc.dwellir.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Dwellir (WSS)',
          url: 'wss://moonbase-rpc.dwellir.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'OnFinality (HTTP)',
          url: 'https://moonbeam-alpha.api.onfinality.io/public',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'OnFinality (WSS)',
          url: 'wss://moonbeam-alpha.api.onfinality.io/public-ws',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'UnitedBloc (HTTP)',
          url: 'https://moonbase.unitedbloc.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'UnitedBloc (WSS)',
          url: 'wss://moonbase.unitedbloc.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://moonbase-alpha.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://moonbase-alpha.drpc.org',
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
        name: 'Moonbeam Faucet',
        url: 'https://faucet.moonbeam.network/',
      },
    ],
    infoUrl: 'https://docs.moonbeam.network/learn/platform/networks/moonbase/',
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case moonbeamChainId:
        return MoonNetwork.MOONBEAM()
      case moonriverChainId:
        return MoonNetwork.MOONRIVER()
      case moonbaseAlphaChainId:
        return MoonNetwork.MOONBASE_ALPHA()
      default:
        return undefined
    }
  }
}
