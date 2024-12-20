import {
  thundercoreChainId,
  thundercoreTestnetChainId,
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
  chainType: 'L1',
  symbol: 'TT',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/thundertoken/info/logo.png',
  color: 'rgb(0, 240, 213)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class ThundercoreNetwork {
  public static MAINNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: thundercoreChainId,
      networkId: thundercoreChainId,
      slip44: 1001,
      name: 'ThunderCore Mainnet',
      shortName: 'TT',
      uiName: 'ThunderCore',
      chainEnvironment: 'mainnet',
      chain: 'TT',
      nativeCurrency: {
        name: 'ThunderCore Token',
        symbol: 'TT',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Thundercore Explorer',
          url: 'https://viewblock.io/thundercore',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'ThunderCore RPC 1',
            url: 'https://mainnet-rpc.thundercore.com',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'ThunderCore RPC 2',
            url: 'https://mainnet-rpc.thundertoken.net',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'ThunderCore RPC 3',
            url: 'https://mainnet-rpc.thundercore.io',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      infoUrl: 'https://thundercore.com',
    }
  }

  public static TESTNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: thundercoreTestnetChainId,
      networkId: thundercoreTestnetChainId,
      slip44: 1,
      name: 'ThunderCore Testnet',
      shortName: 'TST',
      uiName: 'ThunderCore Testnet',
      chainEnvironment: 'testnet',
      chain: 'TST',
      nativeCurrency: {
        name: 'ThunderCore Testnet Token',
        symbol: 'TST',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Thundercore Testnet Explorer',
          url: 'https://explorer-testnet.thundercore.com',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'ThunderCore Testnet RPC',
            url: 'https://testnet-rpc.thundercore.com',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'DRPC (HTTP)',
            url: 'https://thundercore-testnet.drpc.org',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'DRPC (WSS)',
            url: 'wss://thundercore-testnet.drpc.org',
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
          name: 'ThunderCore Faucet',
          url: 'https://faucet-testnet.thundercore.com',
        },
      ],
      infoUrl: 'https://thundercore.com',
    }
  }

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case thundercoreChainId:
        return ThundercoreNetwork.MAINNET()
      case thundercoreTestnetChainId:
        return ThundercoreNetwork.TESTNET()
      default:
        return undefined
    }
  }
}
