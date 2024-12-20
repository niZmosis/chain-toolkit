import { hecoChainId } from '@chain-toolkit/chains'
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
  symbol: 'HT',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/heco/info/logo.png',
  color: 'rgb(0, 133, 215)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class HecoNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: hecoChainId,
    networkId: hecoChainId,
    slip44: 1010,
    name: 'Huobi ECO Chain Mainnet',
    shortName: 'heco',
    uiName: 'Huobi ECO Chain',
    chainEnvironment: 'mainnet',
    chain: 'Heco',
    nativeCurrency: {
      name: 'Huobi ECO Chain Native Token',
      symbol: 'HT',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Hecoinfo',
        url: 'https://hecoinfo.com',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Heco RPC (HTTP)',
          url: 'https://http-mainnet.hecochain.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Heco RPC (WSS)',
          url: 'wss://ws-mainnet.hecochain.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    infoUrl: 'https://www.hecochain.com',
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case hecoChainId:
        return HecoNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
