import { rskChainId, rskTestnetChainId } from '@chain-toolkit/chains'
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
  symbol: 'RBTC',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/rootstock/info/logo.png',
  color: 'rgb(255, 147, 30)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class RskNetwork {
  public static MAINNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: rskChainId,
      networkId: rskChainId,
      slip44: 137,
      name: 'Rootstock Mainnet',
      shortName: 'rsk',
      uiName: 'Rootstock',
      chainEnvironment: 'mainnet',
      chain: 'Rootstock',
      nativeCurrency: {
        name: 'Smart Bitcoin',
        symbol: 'RBTC',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Rootstock Explorer',
          url: 'https://explorer.rsk.co',
          standard: 'EIP3091',
        },
        {
          name: 'Blockscout',
          url: 'https://rootstock.blockscout.com',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'RSK Public Node',
            url: 'https://public-node.rsk.co',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'MyCrypto',
            url: 'https://mycrypto.rsk.co',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      infoUrl: 'https://rootstock.io',
    }
  }

  public static TESTNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: rskTestnetChainId,
      networkId: rskTestnetChainId,
      slip44: 1,
      name: 'Rootstock Testnet',
      shortName: 'trsk',
      uiName: 'Rootstock Testnet',
      chainEnvironment: 'testnet',
      chain: 'Rootstock',
      nativeCurrency: {
        name: 'Testnet Smart Bitcoin',
        symbol: 'tRBTC',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'RSK Testnet Explorer',
          url: 'https://explorer.testnet.rsk.co',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'RSK Testnet Public Node',
            url: 'https://public-node.testnet.rsk.co',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'MyCrypto Testnet',
            url: 'https://mycrypto.testnet.rsk.co',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      faucets: [
        {
          name: 'RSK Faucet',
          url: 'https://faucet.rsk.co/',
        },
      ],
      infoUrl: 'https://rootstock.io',
    }
  }

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case rskChainId:
        return RskNetwork.MAINNET()
      case rskTestnetChainId:
        return RskNetwork.TESTNET()
      default:
        return undefined
    }
  }
}
