import { shibariumChainId } from '@chain-toolkit/chains'
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
  symbol: 'BONE',
  logoUrl: '',
  color: 'rgb(246, 128, 12)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class ShibariumNetwork {
  public static MAINNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: shibariumChainId,
      networkId: shibariumChainId,
      slip44: undefined,
      name: 'Shibarium',
      shortName: 'shibariumecosystem',
      uiName: 'Shibarium',
      chainEnvironment: 'mainnet',
      chain: 'Shibarium',
      nativeCurrency: {
        name: 'BONE Shibarium',
        symbol: 'BONE',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Shibariumscan',
          url: 'https://www.shibariumscan.io',
          standard: 'none',
        },
      ],
      nodes: {
        public: [
          {
            name: 'Shibrpc 1',
            url: 'https://www.shibrpc.com',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Shibrpc 2',
            url: 'https://rpc.shibrpc.com',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Nownodes',
            url: 'https://shib.nownodes.io',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      infoUrl: 'https://shibariumecosystem.com',
    }
  }

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case shibariumChainId:
        return ShibariumNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
