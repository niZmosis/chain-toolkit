import { avaxMainChainId, avaxFujiChainId } from '@chain-toolkit/chains'
import type { ChainConfig, ChainId } from '@chain-toolkit/types'

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
  symbol: 'AVAX',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/avalanchec/info/logo.png',
  infoUrl: 'https://www.avax.network/',
  color: 'rgb(232, 65, 66)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class AvalancheNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: avaxMainChainId,
    networkId: avaxMainChainId,
    slip44: 9005,
    name: 'Avalanche C-Chain',
    shortName: 'avax',
    uiName: 'Avalanche C-Chain',
    chainEnvironment: 'mainnet',
    chain: 'AVAX',
    nativeCurrency: {
      name: 'Avalanche',
      symbol: 'AVAX',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      { name: 'Snowtrace', url: 'https://snowtrace.io', standard: 'EIP3091' },
      { name: 'Avascan', url: 'https://avascan.info', standard: 'EIP3091' },
    ],
    nodes: {
      public: [
        {
          name: 'AVAX',
          url: 'https://api.avax.network/ext/bc/C/rpc',
          isWSS: false,
          chunkLimit: 2_048,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://avalanche-c-chain-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 2_048,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://avalanche-c-chain-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 2_048,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
  })

  public static FUJI = (): ChainConfig => ({
    ...commonProps,
    chainId: avaxFujiChainId,
    networkId: avaxFujiChainId,
    slip44: 1,
    name: 'Avalanche Fuji Testnet',
    shortName: 'Fuji',
    uiName: 'Avalanche Fuji Testnet',
    chainEnvironment: 'testnet',
    chain: 'AVAX',
    nativeCurrency: {
      name: 'Avalanche Fuji',
      symbol: 'AVAX',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Snowtrace Testnet',
        url: 'https://testnet.snowtrace.io',
        standard: 'EIP3091',
      },
      {
        name: 'Avascan Testnet',
        url: 'https://testnet.avascan.info',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'AVAX Testnet',
          url: 'https://api.avax-test.network/ext/bc/C/rpc',
          isWSS: false,
          chunkLimit: 2_048,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://avalanche-fuji-c-chain-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 2_048,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://avalanche-fuji-c-chain-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 2_048,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    faucets: [
      { name: 'Avax Faucet', url: 'https://faucet.avax-test.network/' },
    ],
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case avaxMainChainId:
        return AvalancheNetwork.MAINNET()
      case avaxFujiChainId:
        return AvalancheNetwork.FUJI()
      default:
        return undefined
    }
  }
}
