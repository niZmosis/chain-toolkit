import {
  ethMainChainId,
  ethSepoliaChainId,
  zksyncMainChainId,
  zksyncSepoliaChainId,
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
  symbol: 'ETH',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/zksync/info/logo.png',
  color: 'rgb(141, 142, 252)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class ZKSyncNetwork {
  public static MAINNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: zksyncMainChainId,
      networkId: zksyncMainChainId,
      slip44: 804,
      name: 'zkSync Era Mainnet',
      shortName: 'zksync',
      uiName: 'zkSync Era',
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
          name: 'zkSync Era Block Explorer',
          url: 'https://explorer.zksync.io',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'zkSync Era RPC',
            url: 'https://mainnet.era.zksync.io',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'DRPC (HTTP)',
            url: 'https://zksync.drpc.org',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'DRPC (WSS)',
            url: 'wss://zksync.drpc.org',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: true,
          },
        ],
      },
      contracts: {
        multicall: '0xF9cda624FBC7e059355ce98a31693d299FACd963',
      },
      infoUrl: 'https://zksync.io/',
      parent: {
        type: 'L2',
        chain: `eip155-${ethMainChainId}`,
        bridges: [
          {
            name: 'zkSync Bridge',
            url: 'https://bridge.zksync.io/',
          },
        ],
      },
    }
  }

  public static SEPOLIA = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: zksyncSepoliaChainId,
      networkId: zksyncSepoliaChainId,
      slip44: 1,
      name: 'zkSync Sepolia Testnet',
      shortName: 'zksync-sepolia',
      uiName: 'zkSync Era Sepolia',
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
          name: 'zkSync Block Explorer',
          url: 'https://sepolia.explorer.zksync.io',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'zkSync Sepolia RPC',
            url: 'https://sepolia.era.zksync.dev',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'DRPC (HTTP)',
            url: 'https://zksync-sepolia.drpc.org',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'DRPC (WSS)',
            url: 'wss://zksync-sepolia.drpc.org',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: true,
          },
        ],
      },
      contracts: {
        multicall: '0xF9cda624FBC7e059355ce98a31693d299FACd963',
      },
      infoUrl: 'https://zksync.io/',
      parent: {
        type: 'L2',
        chain: `eip155-${ethSepoliaChainId}`,
        bridges: [
          {
            name: 'zkSync Bridge',
            url: 'https://bridge.zksync.io/',
          },
        ],
      },
      redFlags: ['reusedChainId'],
    }
  }

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case zksyncMainChainId:
        return ZKSyncNetwork.MAINNET()
      case zksyncSepoliaChainId:
        return ZKSyncNetwork.SEPOLIA()
      default:
        return undefined
    }
  }
}
