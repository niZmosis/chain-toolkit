import { bscMainChainId, bscTestChainId } from '@chain-toolkit/chains'
import type { ChainConfig, ChainId } from '@chain-toolkit/types'

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
  symbol: 'BNB',
  infoUrl: 'https://www.bnbchain.org/en',
  color: 'rgb(240, 185, 11)',
  features: [{ name: 'EIP155' }, { name: 'LEGACY' }, { name: 'EIP2930' }],
}

export class BscNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: bscMainChainId,
    networkId: bscMainChainId,
    slip44: 9006,
    name: 'BNB Smart Chain Mainnet',
    shortName: 'bnb',
    uiName: 'BNB Smart Chain',
    chainEnvironment: 'mainnet',
    chain: 'BSC',
    logoUrl:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/info/logo.png',
    nativeCurrency: {
      name: 'BNB Chain Native Token',
      symbol: 'BNB',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      { name: 'BscScan', url: 'https://bscscan.com', standard: 'EIP3091' },
      { name: 'Dex Guru', url: 'https://bnb.dex.guru', standard: 'EIP3091' },
    ],
    nodes: {
      public: [
        {
          name: 'BNB Chain RPC 1',
          url: 'https://bsc-dataseed1.bnbchain.org',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'BNB Chain RPC 2',
          url: 'https://bsc-dataseed2.bnbchain.org',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'BNB Chain RPC 3',
          url: 'https://bsc-dataseed3.bnbchain.org',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'BNB Chain RPC 4',
          url: 'https://bsc-dataseed4.bnbchain.org',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Defibit RPC 1',
          url: 'https://bsc-dataseed1.defibit.io',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Defibit RPC 2',
          url: 'https://bsc-dataseed2.defibit.io',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Defibit RPC 3',
          url: 'https://bsc-dataseed3.defibit.io',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Defibit RPC 4',
          url: 'https://bsc-dataseed4.defibit.io',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Ninicoin RPC 1',
          url: 'https://bsc-dataseed1.ninicoin.io',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Ninicoin RPC 2',
          url: 'https://bsc-dataseed2.ninicoin.io',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Ninicoin RPC 3',
          url: 'https://bsc-dataseed3.ninicoin.io',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Ninicoin RPC 4',
          url: 'https://bsc-dataseed4.ninicoin.io',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://bsc-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://bsc-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Nariox WSS',
          url: 'wss://bsc-ws-node.nariox.org',
          isWSS: true,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
  })

  public static TESTNET = (): ChainConfig => ({
    ...commonProps,
    chainId: bscTestChainId,
    networkId: bscTestChainId,
    slip44: 1,
    name: 'BNB Smart Chain Testnet',
    shortName: 'bnbt',
    uiName: 'BNB Smart Chain Testnet',
    chainEnvironment: 'testnet',
    chain: 'BSC',
    logoUrl:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/bnbt/info/logo.png',
    nativeCurrency: {
      name: 'BNB Chain Native Token',
      symbol: 'tBNB',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'BscScan Testnet',
        url: 'https://testnet.bscscan.com',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'BNB Chain Testnet RPC 1',
          url: 'https://data-seed-prebsc-1-s1.bnbchain.org:8545',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'BNB Chain Testnet RPC 2',
          url: 'https://data-seed-prebsc-2-s1.bnbchain.org:8545',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'BNB Chain Testnet RPC 3',
          url: 'https://data-seed-prebsc-1-s2.bnbchain.org:8545',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'BNB Chain Testnet RPC 4',
          url: 'https://data-seed-prebsc-2-s2.bnbchain.org:8545',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'BNB Chain Testnet RPC 5',
          url: 'https://data-seed-prebsc-1-s3.bnbchain.org:8545',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'BNB Chain Testnet RPC 6',
          url: 'https://data-seed-prebsc-2-s3.bnbchain.org:8545',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://bsc-testnet-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://bsc-testnet-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 5_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    faucets: [
      {
        name: 'BNB Chain Faucet',
        url: 'https://testnet.bnbchain.org/faucet-smart',
      },
    ],
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case bscMainChainId:
        return BscNetwork.MAINNET()
      case bscTestChainId:
        return BscNetwork.TESTNET()
      default:
        return undefined
    }
  }
}
