import { zoraMainChainId, zoraSepoliaChainId } from '@chain-toolkit/chains'
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
  color: 'rgb(69, 123, 246)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class ZoraNetwork {
  public static MAINNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: zoraMainChainId,
      networkId: zoraMainChainId,
      slip44: undefined,
      name: 'Zora',
      shortName: 'zora',
      uiName: 'Zora',
      chainEnvironment: 'mainnet',
      chain: 'ETH',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Zora Network Explorer',
          url: 'https://explorer.zora.energy',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'Zora RPC',
            url: 'https://rpc.zora.energy/',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      infoUrl: 'https://zora.energy',
    }
  }

  public static SEPOLIA = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: zoraSepoliaChainId,
      networkId: zoraSepoliaChainId,
      slip44: 1,
      name: 'Zora Sepolia Testnet',
      shortName: 'zsep',
      uiName: 'Zora Sepolia',
      chainEnvironment: 'sepolia',
      chain: 'ETH',
      nativeCurrency: {
        name: 'Sepolia Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Zora Sepolia Testnet Network Explorer',
          url: 'https://sepolia.explorer.zora.energy',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'Zora Sepolia RPC',
            url: 'https://sepolia.rpc.zora.energy',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      infoUrl: 'https://zora.energy',
    }
  }

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case zoraMainChainId:
        return ZoraNetwork.MAINNET()
      case zoraSepoliaChainId:
        return ZoraNetwork.SEPOLIA()
      default:
        return undefined
    }
  }
}
