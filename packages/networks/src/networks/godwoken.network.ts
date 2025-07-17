import {
  godwokenMainnetChainId,
  godwokenTestnetChainId,
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
  symbol: 'pCKB',
  logoUrl: 'https://avatars.githubusercontent.com/u/113917011?s=280&v=4',
  color: 'rgb(8, 207, 159)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class GodwokenNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: godwokenMainnetChainId,
    networkId: godwokenMainnetChainId,
    slip44: undefined,
    name: 'Godwoken Mainnet',
    shortName: 'gw-mainnet-v1',
    uiName: 'Godwoken',
    chainEnvironment: 'mainnet',
    chain: 'GWT',
    nativeCurrency: {
      name: 'pCKB',
      symbol: 'pCKB',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'GWScan Block Explorer',
        url: 'https://v1.gwscan.com',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Godwoken RPC',
          url: 'https://v1.mainnet.godwoken.io/rpc',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
  })

  public static TESTNET = (): ChainConfig => ({
    ...commonProps,
    chainId: godwokenTestnetChainId,
    networkId: godwokenTestnetChainId,
    slip44: 1,
    name: 'Godwoken Testnet v1',
    shortName: 'gw-testnet-v1',
    uiName: 'Godwoken Testnet v1',
    chainEnvironment: 'testnet',
    chain: 'GWT',
    nativeCurrency: {
      name: 'pCKB',
      symbol: 'pCKB',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'GWScan Block Explorer',
        url: 'https://v1.testnet.gwscan.com',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Godwoken Testnet RPC 1',
          url: 'https://godwoken-testnet-v1.ckbapp.dev',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Godwoken Testnet RPC 2',
          url: 'https://v1.testnet.godwoken.io/rpc',
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
        name: 'Godwoken Bridge',
        url: 'https://testnet.bridge.godwoken.io',
      },
    ],
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case godwokenMainnetChainId:
        return GodwokenNetwork.MAINNET()
      case godwokenTestnetChainId:
        return GodwokenNetwork.TESTNET()
      default:
        return undefined
    }
  }
}
