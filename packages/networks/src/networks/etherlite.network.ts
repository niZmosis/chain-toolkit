import { etherliteChainId } from '@chain-toolkit/chains'
import type { ChainConfig, ChainId } from '@chain-toolkit/types'

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
  symbol: 'ETL',
  logoUrl: '',
  color: 'rgb(124, 124, 131)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class EtherliteNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: etherliteChainId,
    networkId: etherliteChainId,
    slip44: 111,
    name: 'EtherLite Chain',
    shortName: 'ETL',
    uiName: 'Etherlite Chain',
    chainEnvironment: 'mainnet',
    chain: 'ETL',
    nativeCurrency: {
      name: 'EtherLite',
      symbol: 'ETL',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Etherlite Explorer',
        url: 'https://etherlite.org',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Etherlite Public Node',
          url: 'https://rpc.etherlite.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0x21681750D7ddCB8d1240eD47338dC984f94AF2aC',
    },
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case etherliteChainId:
        return EtherliteNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
