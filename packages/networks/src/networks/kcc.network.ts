import { kccChainId, kccTestnetChainId } from '@chain-toolkit/chains'
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
  symbol: 'KCC',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/kcc/info/logo.png',
  color: 'rgb(29, 177, 146)',
  features: [{ name: 'EIP155' }, { name: 'LEGACY' }, { name: 'EIP2930' }],
}

export class KccNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: kccChainId,
    networkId: kccChainId,
    slip44: 642,
    name: 'KCC Mainnet',
    shortName: 'kcc-mainnet',
    uiName: 'KCC',
    chainEnvironment: 'mainnet',
    chain: 'KCC',
    nativeCurrency: {
      name: 'KuCoin Token',
      symbol: 'KCS',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'KCC Explorer',
        url: 'https://explorer.kcc.io/en',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'KCC Mainnet RPC',
          url: 'https://rpc-mainnet.kcc.network',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'KCC RPC',
          url: 'https://kcc-rpc.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Blockpi KCC Public RPC',
          url: 'https://public-rpc.blockpi.io/http/kcc',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tokenview KCC Public RPC',
          url: 'https://services.tokenview.io/vipapi/nodeservice/kcs?apikey=qVHq2o6jpaakcw3lRstl',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'MyTokenPocket KCC Public RPC',
          url: 'https://kcc.mytokenpocket.vip',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    infoUrl: 'https://kcc.io',
  })

  public static TESTNET = (): ChainConfig => ({
    ...commonProps,
    chainId: kccTestnetChainId,
    networkId: kccTestnetChainId,
    slip44: 1,
    name: 'KCC Testnet',
    shortName: 'kcc-testnet',
    uiName: 'KCC Testnet',
    chainEnvironment: 'testnet',
    chain: 'KCC',
    nativeCurrency: {
      name: 'KuCoin Testnet Token',
      symbol: 'tKCS',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'KCC Testnet Explorer',
        url: 'https://scan-testnet.kcc.network',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'KCC Testnet RPC',
          url: 'https://rpc-testnet.kcc.network',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: undefined,
    },
    infoUrl: 'https://scan-testnet.kcc.network',
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case kccChainId:
        return KccNetwork.MAINNET()
      case kccTestnetChainId:
        return KccNetwork.TESTNET()
      default:
        return undefined
    }
  }
}
