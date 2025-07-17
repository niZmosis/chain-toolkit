import { milkomedaChainId } from '@chain-toolkit/chains'
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
  symbol: 'mADA',
  logoUrl: '',
  color: 'rgb(254, 150, 36)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class MilkomedaNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: milkomedaChainId,
    networkId: milkomedaChainId,
    slip44: undefined,
    name: 'Milkomeda C1 Mainnet',
    shortName: 'milkAda',
    uiName: 'Milkomeda C1',
    chainEnvironment: 'mainnet',
    chain: 'milkAda',
    nativeCurrency: {
      name: 'milkAda',
      symbol: 'mADA',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Milkomeda C1 RPC (HTTP)',
          url: 'https://rpc-mainnet-cardano-evm.c1.milkomeda.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Milkomeda C1 RPC (WSS)',
          url: 'wss://rpc-mainnet-cardano-evm.c1.milkomeda.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    infoUrl: 'https://milkomeda.com',
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case milkomedaChainId:
        return MilkomedaNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
