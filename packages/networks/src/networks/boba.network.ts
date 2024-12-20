import {
  bobaChainId,
  bobaSepoliaChainId,
  ethMainChainId,
  ethSepoliaChainId,
} from '@chain-toolkit/chains'
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
  chainType: 'L2',
  symbol: 'BOBA',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/boba/info/logo.png',
  infoUrl: 'https://boba.network',
  color: 'rgb(204, 255, 0)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class BobaNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: bobaChainId,
    networkId: bobaChainId,
    slip44: 9002,
    name: 'Boba Network',
    shortName: 'Boba',
    uiName: 'Boba Network',
    chainEnvironment: 'mainnet',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      { name: 'Bobascan', url: 'https://bobascan.com', standard: 'none' },
    ],
    nodes: {
      public: [
        {
          name: 'Boba Network RPC',
          url: 'https://mainnet.boba.network',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Boba Network Replica',
          url: 'https://replica.boba.network',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tenderly Gateway (HTTP)',
          url: 'https://boba-ethereum.gateway.tenderly.co',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tenderly Gateway (WSS)',
          url: 'wss://boba-ethereum.gateway.tenderly.co/',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://boba-eth.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://boba-eth.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0x5c16256040Eb8B29B9219619BFe20c2978d799e5',
    },
    parent: {
      type: 'L2',
      chain: `eip155-${ethMainChainId}`,
      bridges: [
        {
          name: 'Boba Gateway',
          url: 'https://gateway.boba.network',
        },
      ],
    },
  })

  public static SEPOLIA = (): ChainConfig => ({
    ...commonProps,
    chainId: bobaSepoliaChainId,
    networkId: bobaSepoliaChainId,
    slip44: 1,
    name: 'Boba Sepolia',
    shortName: 'BobaSepolia',
    uiName: 'Boba Sepolia',
    chainEnvironment: 'sepolia',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Bobascan Sepolia',
        url: 'https://testnet.bobascan.com',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Boba Sepolia RPC',
          url: 'https://sepolia.boba.network',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tenderly Gateway (HTTP)',
          url: 'https://boba-sepolia.gateway.tenderly.co',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tenderly Gateway (WSS)',
          url: 'wss://boba-sepolia.gateway.tenderly.co/',
          isWSS: true,
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
        name: 'L2 Faucet',
        url: 'https://www.l2faucet.com/boba',
      },
    ],
    parent: {
      type: 'L2',
      chain: `eip155-${ethSepoliaChainId}`,
      bridges: [],
    },
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case bobaChainId:
        return BobaNetwork.MAINNET()
      case bobaSepoliaChainId:
        return BobaNetwork.SEPOLIA()
      default:
        return undefined
    }
  }
}
