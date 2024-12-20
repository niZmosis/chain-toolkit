import { energiMainChainId, energiTestChainId } from '@chain-toolkit/chains'
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
  chainType: 'L1',
  symbol: 'NRG',
  logoUrl: '',
  infoUrl: 'https://www.energi.world/',
  color: 'rgb(0, 231, 119)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class EnergiNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: energiMainChainId,
    networkId: energiMainChainId,
    slip44: 39797,
    name: 'Energi Mainnet',
    shortName: 'nrg',
    uiName: 'Energi',
    chainEnvironment: 'mainnet',
    chain: 'NRG',
    nativeCurrency: {
      name: 'Energi',
      symbol: 'NRG',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Energi Explorer',
        url: 'https://explorer.energi.network',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Energi Node API',
          url: 'https://nodeapi.energi.network',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xbD6706747a7B6C8868Cf48735f48C341ea386d07',
    },
  })

  public static TESTNET = (): ChainConfig => ({
    ...commonProps,
    chainId: energiTestChainId,
    networkId: energiTestChainId,
    slip44: 1,
    name: 'Energi Testnet',
    shortName: 'tnrg',
    uiName: 'Energi Testnet',
    chainEnvironment: 'testnet',
    chain: 'NRG',
    nativeCurrency: {
      name: 'Energi',
      symbol: 'NRG',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Energi Testnet Explorer',
        url: 'https://explorer.test.energi.network',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Energi Test Node API',
          url: 'https://nodeapi.test.energi.network',
          isWSS: false,
          chunkLimit: 5_000,
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
      case energiMainChainId:
        return EnergiNetwork.MAINNET()
      case energiTestChainId:
        return EnergiNetwork.TESTNET()
      default:
        return undefined
    }
  }
}
