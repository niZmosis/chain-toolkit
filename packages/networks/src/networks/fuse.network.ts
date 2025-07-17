import { fuseChainId } from '@chain-toolkit/chains'
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
  symbol: 'FUSE',
  logoUrl: 'https://s2.coinmarketcap.com/static/img/coins/200x200/5634.png',
  color: 'rgb(181, 249, 187)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class FuseNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: fuseChainId,
    networkId: fuseChainId,
    slip44: undefined,
    name: 'Fuse Mainnet',
    shortName: 'fuse',
    uiName: 'Fuse',
    chainEnvironment: 'mainnet',
    chain: 'FUSE',
    nativeCurrency: {
      name: 'Fuse',
      symbol: 'FUSE',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer.fuse.io',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Fuse RPC',
          url: 'https://rpc.fuse.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://fuse.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://fuse.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0x543Bc0d9A1D7e39059073F961cCa510c59e9f81b',
    },
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case fuseChainId:
        return FuseNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
