import { okcChainId } from '@chain-toolkit/chains'
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
  chainType: 'L1',
  symbol: 'OKT',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/okc/info/logo.png',
  color: 'rgb(124, 124, 131)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class OkcNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: okcChainId,
    networkId: okcChainId,
    slip44: undefined,
    name: 'OKXChain Mainnet',
    shortName: 'okt',
    uiName: 'OKXChain',
    chainEnvironment: 'mainnet',
    chain: 'okxchain',
    nativeCurrency: {
      name: 'OKXChain Global Utility Token',
      symbol: 'OKT',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'OKLink',
        url: 'https://www.oklink.com/en/okc',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'OKC RPC',
          url: 'https://exchainrpc.okex.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Pocket Network Gateway',
          url: 'https://okc-mainnet.gateway.pokt.network/v1/lb/6275309bea1b320039c893ff',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    infoUrl: 'https://www.okex.com/okc',
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case okcChainId:
        return OkcNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
