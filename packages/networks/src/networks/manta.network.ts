import { mantaPacificChainId } from '@chain-toolkit/chains'
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
  symbol: 'ETH',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/manta/info/logo.png',
  color: 'rgb(230, 230, 230)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class MantaNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: mantaPacificChainId,
    networkId: mantaPacificChainId,
    slip44: 611,
    name: 'Manta Pacific Mainnet',
    shortName: 'manta',
    uiName: 'Manta Pacific',
    chainEnvironment: 'mainnet',
    chain: 'Manta Pacific',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Manta Pacific Explorer',
        url: 'https://pacific-explorer.manta.network',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Manta Pacific RPC (HTTP)',
          url: 'https://pacific-rpc.manta.network/http',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://manta-pacific.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://manta-pacific.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    infoUrl: 'https://pacific-info.manta.network',
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case mantaPacificChainId:
        return MantaNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
