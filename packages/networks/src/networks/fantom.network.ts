import { fantomChainId, fantomTestnetChainId } from '@chain-toolkit/chains'
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
  symbol: 'FTM',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/fantom/info/logo.png',
  color: 'rgb(25, 105, 255)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class FantomNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: fantomChainId,
    networkId: fantomChainId,
    slip44: 1007,
    name: 'Fantom Opera',
    shortName: 'ftm',
    uiName: 'Fantom Opera',
    chainEnvironment: 'mainnet',
    chain: 'FTM',
    nativeCurrency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      { name: 'FTMScan', url: 'https://ftmscan.com', standard: 'EIP3091' },
      {
        name: 'Dex Guru',
        url: 'https://fantom.dex.guru',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Fantom RPC',
          url: 'https://rpc.ftm.tools',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://fantom-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://fantom-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://fantom.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://fantom.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0x66335D7Ad8011F6AA3f4797b225977eA054Ae1f1',
    },
  })

  public static TESTNET = (): ChainConfig => ({
    ...commonProps,
    chainId: fantomTestnetChainId,
    networkId: fantomTestnetChainId,
    slip44: 1,
    name: 'Fantom Testnet',
    shortName: 'tftm',
    uiName: 'Fantom Testnet',
    chainEnvironment: 'testnet',
    chain: 'FTM',
    nativeCurrency: {
      name: 'Fantom',
      symbol: 'FTM',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'FTMScan Testnet',
        url: 'https://testnet.ftmscan.com',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Fantom Testnet RPC',
          url: 'https://rpc.testnet.fantom.network',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://fantom-testnet-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://fantom-testnet-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://fantom-testnet.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://fantom-testnet.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0x22D1D492010F95E0f910fDd7Ba433B380ACA2d32',
    },
    faucets: [
      {
        name: 'Fantom Faucet',
        url: 'https://faucet.fantom.network',
      },
    ],
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case fantomChainId:
        return FantomNetwork.MAINNET()
      case fantomTestnetChainId:
        return FantomNetwork.TESTNET()
      default:
        return undefined
    }
  }
}
