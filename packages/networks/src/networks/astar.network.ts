import { astarChainId } from '@chain-toolkit/chains'
import type { ChainId, ChainConfig } from '@chain-toolkit/types'

const commonProps: Omit<
  ChainConfig,
  | 'name'
  | 'shortName'
  | 'uiName'
  | 'chainEnvironment'
  | 'chain'
  | 'chainId'
  | 'networkId'
  | 'nativeCurrency'
  | 'gasUrls'
  | 'explorers'
  | 'nodes'
  | 'contracts'
> = {
  chainType: 'L1',
  symbol: 'ASTR',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/astar/info/logo.png',
  infoUrl: 'https://astar.network/',
  color: 'rgb(11, 196, 240)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class AstarNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: astarChainId,
    networkId: astarChainId,
    slip44: 810,
    name: 'Astar',
    shortName: 'astr',
    uiName: 'Astar',
    chainEnvironment: 'mainnet',
    chain: 'ASTR',
    nativeCurrency: {
      name: 'Astar',
      symbol: 'ASTR',
      decimals: 18,
    },
    contracts: {
      multicall: '0x269ff091398f2e6f99cbfb7d67907c818cd39896',
    },
    explorers: [
      {
        name: 'Astar Explorer',
        url: 'https://astar.subscan.io/',
        standard: 'EIP3091',
      },
      {
        name: 'Blockscout',
        url: 'https://blockscout.com/astar',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      authenticated: {
        alchemy: {
          name: 'Alchemy',
          url: `https://astar-mainnet.g.alchemy.com/v2/`,
          isWSS: false,
          privacy: undefined,
          chunkLimit: 2_048,
          callDataLimit: 100_000,
        },
        alchemyWSS: {
          name: 'Alchemy WSS',
          url: `wss://astar-mainnet.g.alchemy.com/v2/`,
          isWSS: true,
          privacy: undefined,
          chunkLimit: 2_048,
          callDataLimit: 100_000,
        },
      },
      public: [
        {
          name: 'Astar RPC',
          url: 'https://evm.astar.network',
          isWSS: false,
          privacy: undefined,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Blast API',
          url: 'https://astar.public.blastapi.io',
          isWSS: false,
          privacy: undefined,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'OnFinality (HTTP)',
          url: 'https://astar.api.onfinality.io/public',
          isWSS: false,
          privacy: undefined,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Dwellir (HTTP)',
          url: 'https://astar-rpc.dwellir.com',
          isWSS: false,
          privacy: undefined,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Dwellir (HTTP)',
          url: 'https://astar-rpc.dwellir.com',
          isWSS: false,
          privacy: undefined,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    gasUrls: [],
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case astarChainId:
        return AstarNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
