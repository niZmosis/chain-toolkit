import {
  ethMainChainId,
  lineaMainChainId,
  lineaTestnetChainId,
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
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/linea/info/logo.png',
  color: 'rgb(124, 124, 131)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class LineaNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: lineaMainChainId,
    networkId: lineaMainChainId,
    slip44: undefined,
    name: 'Linea',
    shortName: 'linea',
    uiName: 'Linea',
    chainEnvironment: 'mainnet',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Linea Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://lineascan.build',
        standard: 'EIP3091',
      },
      {
        name: 'Blockscout',
        url: 'https://explorer.linea.build',
        standard: 'EIP3091',
      },
      {
        name: 'L2scan',
        url: 'https://linea.l2scan.co',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      authenticated: {
        infura: {
          name: 'Infura',
          url: `https://linea-mainnet.infura.io/v3/`,
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        infuraWSS: {
          name: 'Infura WSS',
          url: `wss://linea-mainnet.infura.io/ws/v3/`,
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      },
      public: [
        {
          name: 'Linea RPC (HTTP)',
          url: 'https://rpc.linea.build',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Linea RPC (WSS)',
          url: 'wss://rpc.linea.build',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://linea-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://linea-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    infoUrl: 'https://linea.build',
    parent: {
      type: 'L2',
      chain: `eip155-${ethMainChainId}`,
      bridges: [
        {
          name: 'Linea Bridge',
          url: 'https://bridge.linea.build',
        },
      ],
    },
    status: 'active',
  })

  public static TESTNET = (): ChainConfig => ({
    ...commonProps,
    chainId: lineaTestnetChainId,
    networkId: lineaTestnetChainId,
    slip44: 1,
    name: 'Linea Goerli',
    shortName: 'linea-goerli',
    uiName: 'Linea Goerli',
    chainEnvironment: 'testnet',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Linea Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://goerli.lineascan.build',
        standard: 'EIP3091',
      },
      {
        name: 'Blockscout',
        url: 'https://explorer.goerli.linea.build',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      authenticated: {
        infura: {
          name: 'Infura',
          url: `https://linea-goerli.infura.io/v3/`,
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        infuraWSS: {
          name: 'Infura WSS',
          url: `wss://linea-goerli.infura.io/ws/v3/`,
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      },
      public: [
        {
          name: 'Linea Goerli RPC (HTTP)',
          url: 'https://rpc.goerli.linea.build',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Linea Goerli RPC (WSS)',
          url: 'wss://rpc.goerli.linea.build',
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
        name: 'Goerli Faucet',
        url: 'https://faucetlink.to/goerli',
      },
    ],
    infoUrl: 'https://linea.build',
    parent: {
      type: 'L2',
      chain: `eip155-5`,
      bridges: [
        {
          name: 'Hop Exchange',
          url: 'https://goerli.hop.exchange/#/send?token=ETH&sourceNetwork=ethereum&destNetwork=linea',
        },
      ],
    },
    status: 'active',
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case lineaMainChainId:
        return LineaNetwork.MAINNET()
      case lineaTestnetChainId:
        return LineaNetwork.TESTNET()
      default:
        return undefined
    }
  }
}
