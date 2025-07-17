import {
  ethHoleskyChainId,
  ethMainChainId,
  ethSepoliaChainId,
} from '@chain-toolkit/chains'
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
  | 'ens'
> = {
  chainType: 'L1',
  symbol: 'ETH',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png',
  color: 'rgb(124, 124, 131)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class EthereumNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: ethMainChainId,
    networkId: ethMainChainId,
    slip44: 60,
    name: 'Ethereum Mainnet',
    shortName: 'eth',
    uiName: 'Ethereum',
    chainEnvironment: 'mainnet',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      { name: 'Etherscan', url: 'https://etherscan.io', standard: 'EIP3091' },
      {
        name: 'Blockscout',
        url: 'https://eth.blockscout.com',
        standard: 'EIP3091',
      },
      {
        name: 'Dex Guru',
        url: 'https://ethereum.dex.guru',
        standard: 'EIP3091',
      },
      {
        name: 'Routescan',
        url: 'https://ethereum.routescan.io',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      authenticated: {
        infura: {
          name: 'Infura',
          url: `https://mainnet.infura.io/v3/`,
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        infuraWSS: {
          name: 'Infura WSS',
          url: `wss://mainnet.infura.io/ws/v3/`,
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      },
      public: [
        {
          name: 'MyCrypto API',
          url: 'https://api.mycryptoapi.com/eth',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Cloudflare',
          url: 'https://cloudflare-eth.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://ethereum-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://ethereum-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tenderly Gateway (HTTP)',
          url: 'https://mainnet.gateway.tenderly.co',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tenderly Gateway (WSS)',
          url: 'wss://mainnet.gateway.tenderly.co',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Blocknative',
          url: 'https://rpc.blocknative.com/boost',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Flashbots',
          url: 'https://rpc.flashbots.net',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Flashbots (Fast)',
          url: 'https://rpc.flashbots.net/fast',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'MEVBlocker',
          url: 'https://rpc.mevblocker.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'MEVBlocker (Fast)',
          url: 'https://rpc.mevblocker.io/fast',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'MEVBlocker (No Reverts)',
          url: 'https://rpc.mevblocker.io/noreverts',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'MEVBlocker (Full Privacy)',
          url: 'https://rpc.mevblocker.io/fullprivacy',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://eth.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://eth.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    ens: {
      registry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
  })

  public static HOLESKY = (): ChainConfig => ({
    ...commonProps,
    chainId: ethHoleskyChainId,
    networkId: ethHoleskyChainId,
    slip44: 1,
    name: 'Holesky',
    shortName: 'holesky',
    uiName: 'Holesky',
    chainEnvironment: 'holesky',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Testnet ETH',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Holesky Explorer',
        url: 'https://holesky.beaconcha.in',
        standard: 'EIP3091',
      },
      {
        name: 'Otterscan',
        url: 'https://holesky.otterscan.io',
        standard: 'EIP3091',
      },
      {
        name: 'Etherscan',
        url: 'https://holesky.etherscan.io',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Holesky RPC',
          url: 'https://rpc.holesky.ethpandaops.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://ethereum-holesky-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://ethereum-holesky-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://holesky.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://holesky.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'RockX',
          url: 'https://rpc-holesky.rockx.com',
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
        name: 'Holesky Faucet',
        url: 'https://faucet.holesky.ethpandaops.io',
      },
      {
        name: 'Holesky Faucet (pk910.de)',
        url: 'https://holesky-faucet.pk910.de',
      },
    ],
    status: 'incubating',
  })

  public static SEPOLIA = (): ChainConfig => ({
    ...commonProps,
    chainId: ethSepoliaChainId,
    networkId: ethSepoliaChainId,
    slip44: 1,
    name: 'Sepolia',
    shortName: 'sep',
    uiName: 'Sepolia',
    chainEnvironment: 'sepolia',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Sepolia Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Etherscan',
        url: 'https://sepolia.etherscan.io',
        standard: 'EIP3091',
      },
      {
        name: 'Otterscan',
        url: 'https://sepolia.otterscan.io',
        standard: 'EIP3091',
      },
      {
        name: 'Routescan',
        url: 'https://11155111.testnet.routescan.io',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      authenticated: {
        infura: {
          name: 'Infura',
          url: `https://sepolia.infura.io/v3/`,
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        infuraWSS: {
          name: 'Infura WSS',
          url: `wss://sepolia.infura.io/v3/`,
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        alchemy: {
          name: 'Alchemy',
          url: `https://eth-sepolia.g.alchemy.com/v2/`,
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      },
      public: [
        {
          name: 'Sepolia RPC',
          url: 'https://rpc.sepolia.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Sepolia RPC 2',
          url: 'https://rpc2.sepolia.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'RockX',
          url: 'https://rpc-sepolia.rockx.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'EthPandaOps',
          url: 'https://rpc.sepolia.ethpandaops.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tenderly Gateway (HTTP)',
          url: 'https://sepolia.gateway.tenderly.co',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tenderly Gateway (WSS)',
          url: 'wss://sepolia.gateway.tenderly.co',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://ethereum-sepolia-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://ethereum-sepolia-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://sepolia.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://sepolia.drpc.org',
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
        name: 'Sepolia Faucet',
        url: 'http://fauceth.komputing.org?chain=11155111&address=${ADDRESS}',
      },
    ],
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case ethMainChainId:
        return EthereumNetwork.MAINNET()
      case ethHoleskyChainId:
        return EthereumNetwork.HOLESKY()
      case ethSepoliaChainId:
        return EthereumNetwork.SEPOLIA()
      default:
        return undefined
    }
  }
}
