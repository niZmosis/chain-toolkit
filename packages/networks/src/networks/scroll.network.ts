import {
  ethMainChainId,
  ethSepoliaChainId,
  scrollChainId,
  scrollSepoliaChainId,
} from '@chain-toolkit/chains'
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
  symbol: 'ETH',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/scroll/info/logo.png',
  color: 'rgb(234, 195, 142)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class ScrollNetwork {
  public static MAINNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: scrollChainId,
      networkId: scrollChainId,
      slip44: 534352,
      name: 'Scroll',
      shortName: 'scr',
      uiName: 'Scroll',
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
          name: 'Scrollscan',
          url: 'https://scrollscan.com',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        authenticated: {
          infura: {
            name: 'Infura',
            url: `https://scroll-mainnet.infura.io/v3/`,
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          infuraWSS: {
            name: 'Infura WSS',
            url: `wss://scroll-mainnet.infura.io/ws/v3/`,
            isWSS: true,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
        },
        public: [
          {
            name: 'Scroll RPC',
            url: 'https://rpc.scroll.io',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Ankr',
            url: 'https://rpc.ankr.com/scroll',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Chainstack Labs',
            url: 'https://scroll-mainnet.chainstacklabs.com',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'PublicNode (HTTP)',
            url: 'https://scroll-rpc.publicnode.com',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'PublicNode (WSS)',
            url: 'wss://scroll-rpc.publicnode.com',
            isWSS: true,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      infoUrl: 'https://scroll.io',
      parent: {
        type: 'L2',
        chain: `eip155-${ethMainChainId}`,
        bridges: [
          {
            name: 'Scroll Bridge',
            url: 'https://scroll.io/bridge',
          },
        ],
      },
      status: 'active',
    }
  }

  public static SEPOLIA = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: scrollSepoliaChainId,
      networkId: scrollSepoliaChainId,
      slip44: 1,
      name: 'Scroll Sepolia Testnet',
      shortName: 'scr-sepolia',
      uiName: 'Scroll Sepolia',
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
          name: 'Scroll Sepolia Etherscan',
          url: 'https://sepolia.scrollscan.com',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        authenticated: {
          infura: {
            name: 'Infura',
            url: `https://scroll-sepolia.infura.io/v3/`,
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          infuraWSS: {
            name: 'Infura WSS',
            url: `wss://scroll-sepolia.infura.io/ws/v3/`,
            isWSS: true,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
        },
        public: [
          {
            name: 'Scroll Sepolia RPC',
            url: 'https://sepolia-rpc.scroll.io',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Ankr',
            url: 'https://rpc.ankr.com/scroll_sepolia_testnet',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Chainstack Labs',
            url: 'https://scroll-sepolia.chainstacklabs.com',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Unifra',
            url: 'https://scroll-testnet-public.unifra.io',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'PublicNode (HTTP)',
            url: 'https://scroll-sepolia-rpc.publicnode.com',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'PublicNode (WSS)',
            url: 'wss://scroll-sepolia-rpc.publicnode.com',
            isWSS: true,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      infoUrl: 'https://scroll.io',
      parent: {
        type: 'L2',
        chain: `eip155-${ethSepoliaChainId}`,
        bridges: [
          {
            name: 'Scroll Bridge',
            url: 'https://sepolia.scroll.io/bridge',
          },
        ],
      },
      status: 'active',
    }
  }

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case scrollChainId:
        return ScrollNetwork.MAINNET()
      case scrollSepoliaChainId:
        return ScrollNetwork.SEPOLIA()
      default:
        return undefined
    }
  }
}
