import { klaytnChainId } from '@chain-toolkit/chains'
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
  symbol: 'KAIA',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/klaytn/info/logo.png',
  color: 'rgb(124, 124, 131)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class KlaytnNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: klaytnChainId,
    networkId: klaytnChainId,
    slip44: 8217,
    name: 'Kaia Mainnet',
    shortName: 'kaia-mainnet',
    uiName: 'Kaia',
    chainEnvironment: 'mainnet',
    chain: 'KAIA',
    nativeCurrency: {
      name: 'KAIA',
      symbol: 'KAIA',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Kaiascope',
        url: 'https://kaiascope.com',
        standard: 'EIP3091',
      },
      {
        name: 'Kaiascan',
        url: 'https://kaiascan.io',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Kaia Public Node',
          url: 'https://public-en.node.kaia.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    infoUrl: 'https://kaia.io',
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case klaytnChainId:
        return KlaytnNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
