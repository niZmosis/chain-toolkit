import { polygonAmoyChainId, polygonMainChainId } from '@chain-toolkit/chains'
import type { ChainId, ChainConfig } from '@chain-toolkit/schemas'

const commonProps: Omit<
  ChainConfig,
  | 'name'
  | 'shortName'
  | 'chainId'
  | 'networkId'
  | 'uiName'
  | 'chainEnvironment'
  | 'chain'
  | 'nodes'
  | 'nativeCurrency'
  | 'gasUrls'
  | 'explorers'
  | 'contracts'
> = {
  chainType: 'L1',
  symbol: 'POL',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png',
  color: 'rgb(130, 71, 229)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class PolygonNetwork {
  public static MAINNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: polygonMainChainId,
      networkId: polygonMainChainId,
      slip44: 966,
      name: 'Polygon Mainnet',
      shortName: 'pol',
      uiName: 'Polygon',
      chainEnvironment: 'mainnet',
      chain: 'Polygon',
      nativeCurrency: {
        name: 'POL',
        symbol: 'POL',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Polygonscan',
          url: 'https://polygonscan.com',
          standard: 'EIP3091',
        },
        {
          name: 'Dex Guru',
          url: 'https://polygon.dex.guru',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        authenticated: {
          infura: {
            name: 'Infura',
            url: `https://polygon-mainnet.infura.io/v3/`,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
            requiresAuth: true,
          },
          infuraWSS: {
            name: 'Infura WSS',
            url: `wss://polygon-mainnet.infura.io/ws/v3/`,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: true,
            requiresAuth: true,
          },
        },
        public: [
          {
            name: 'Polygon RPC',
            url: 'https://polygon-rpc.com/',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'Matic Network RPC',
            url: 'https://rpc-mainnet.matic.network',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'Chainstack Labs RPC',
            url: 'https://matic-mainnet.chainstacklabs.com',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'MaticVigil RPC',
            url: 'https://rpc-mainnet.maticvigil.com',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'Quiknode RPC',
            url: 'https://rpc-mainnet.matic.quiknode.pro',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'Bware Labs RPC',
            url: 'https://matic-mainnet-full-rpc.bwarelabs.com',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'Publicnode (HTTP)',
            url: 'https://polygon-bor-rpc.publicnode.com',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'Publicnode (WSS)',
            url: 'wss://polygon-bor-rpc.publicnode.com',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: true,
          },
          {
            name: 'Tenderly Gateway (HTTP)',
            url: 'https://polygon.gateway.tenderly.co',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'Tenderly Gateway (WSS)',
            url: 'wss://polygon.gateway.tenderly.co',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: true,
          },
          {
            name: 'DRPC (HTTP)',
            url: 'https://polygon.drpc.org',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'DRPC (WSS)',
            url: 'wss://polygon.drpc.org',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: true,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      infoUrl: 'https://polygon.technology/',
    }
  }

  public static AMOY = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: polygonAmoyChainId,
      networkId: polygonAmoyChainId,
      slip44: 1,
      name: 'Amoy',
      shortName: 'polygonamoy',
      uiName: 'Amoy',
      chainEnvironment: 'testnet',
      chain: 'Polygon',
      nativeCurrency: {
        name: 'POL',
        symbol: 'POL',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Polygonscan',
          url: 'https://amoy.polygonscan.com',
          standard: 'EIP3091',
        },
        {
          name: 'OKLink',
          url: 'https://www.oklink.com/amoy',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        authenticated: {
          infura: {
            name: 'Infura',
            url: `https://polygon-amoy.infura.io/v3/`,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
            requiresAuth: true,
          },
          infuraWSS: {
            name: 'Infura WSS',
            url: `wss://polygon-amoy.infura.io/ws/v3/`,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: true,
            requiresAuth: true,
          },
        },
        public: [
          {
            name: 'Polygon Amoy RPC',
            url: 'https://rpc-amoy.polygon.technology',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'PublicNode (HTTP)',
            url: 'https://polygon-amoy-bor-rpc.publicnode.com',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'PublicNode (WSS)',
            url: 'wss://polygon-amoy-bor-rpc.publicnode.com',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: true,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      faucets: [
        {
          name: 'Polygon Faucet',
          url: 'https://faucet.polygon.technology/',
        },
      ],
      infoUrl: 'https://polygon.technology/',
    }
  }

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case polygonMainChainId:
        return PolygonNetwork.MAINNET()
      case polygonAmoyChainId:
        return PolygonNetwork.AMOY()
      default:
        return undefined
    }
  }
}
