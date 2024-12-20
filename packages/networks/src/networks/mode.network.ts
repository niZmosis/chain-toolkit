import {
  ethMainChainId,
  ethSepoliaChainId,
  modeChainId,
  modeTestnetChainId,
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
  chainType: 'L1',
  symbol: 'ETH',
  logoUrl: 'https://avatars.githubusercontent.com/u/139873699',
  color: 'rgb(224 ,255, 1)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class ModeNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: modeChainId,
    networkId: modeChainId,
    slip44: undefined,
    name: 'Mode',
    shortName: 'mode',
    uiName: 'Mode',
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
        name: 'Modescout',
        url: 'https://explorer.mode.network',
        standard: 'none',
      },
      {
        name: 'Routescan',
        url: 'https://modescan.io',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Mode RPC',
          url: 'https://mainnet.mode.network',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://mode.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://mode.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    infoUrl: 'https://docs.mode.network/',
    parent: {
      type: 'L2',
      chain: `eip155-${ethMainChainId}`,
      bridges: [
        {
          name: 'Mode Bridge',
          url: 'https://bridge.mode.network/',
        },
      ],
    },
  })

  public static TESTNET = (): ChainConfig => ({
    ...commonProps,
    chainId: modeTestnetChainId,
    networkId: modeTestnetChainId,
    slip44: 1,
    name: 'Mode Testnet',
    shortName: 'modesep',
    uiName: 'Mode Testnet',
    chainEnvironment: 'testnet',
    chain: 'ETH',
    nativeCurrency: {
      name: 'Sepolia Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Modescout',
        url: 'https://sepolia.explorer.mode.network',
        standard: 'none',
      },
      {
        name: 'Routescan',
        url: 'https://testnet.modescan.io',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Mode Sepolia RPC',
          url: 'https://sepolia.mode.network',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF',
    },
    faucets: [
      {
        name: 'Sepolia Faucet',
        url: 'https://sepoliafaucet.com/',
      },
    ],
    infoUrl: 'https://docs.mode.network/',
    parent: {
      type: 'L2',
      chain: `eip155-${ethSepoliaChainId}`,
      bridges: [
        {
          name: 'Mode Bridge',
          url: 'https://bridge.mode.network/',
        },
      ],
    },
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case modeChainId:
        return ModeNetwork.MAINNET()
      case modeTestnetChainId:
        return ModeNetwork.TESTNET()
      default:
        return undefined
    }
  }
}
