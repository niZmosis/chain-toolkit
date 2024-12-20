import { ganacheChainId } from '@chain-toolkit/chains'
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
  symbol: 'ETH',
  logoUrl: '',
  color: 'rgb(229, 168, 105)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class GanacheNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: ganacheChainId,
    networkId: ganacheChainId,
    slip44: undefined,
    name: 'Ganache',
    shortName: 'ganache',
    uiName: 'Ganache',
    chainEnvironment: 'testnet',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [],
    nodes: {
      public: [
        {
          name: 'Ganache Localhost',
          url: 'http://127.0.0.1:8545',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: undefined,
    },
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case ganacheChainId:
        return GanacheNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
