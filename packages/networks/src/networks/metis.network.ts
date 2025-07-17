import { ethMainChainId, metisChainId } from '@chain-toolkit/chains'
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
  symbol: 'METIS',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/metis/info/logo.png',
  color: 'rgb(2, 218, 202)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class MetisNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: metisChainId,
    networkId: metisChainId,
    slip44: undefined,
    name: 'Metis Andromeda Mainnet',
    shortName: 'metis-andromeda',
    uiName: 'Metis Andromeda',
    chainEnvironment: 'mainnet',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Metis',
      symbol: 'METIS',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://andromeda-explorer.metis.io',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Metis Andromeda RPC',
          url: 'https://andromeda.metis.io/?owner=1088',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://metis.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://metis.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    infoUrl: 'https://www.metis.io',
    parent: {
      type: 'L2',
      chain: `eip155-${ethMainChainId}`,
      bridges: [
        {
          name: 'Metis Bridge',
          url: 'https://bridge.metis.io',
        },
      ],
    },
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case metisChainId:
        return MetisNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
