import { oasisChainId, oasisSapphireChainId } from '@chain-toolkit/chains'
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
  symbol: 'OAC',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/oasis/info/logo.png',
  color: 'rgb(0, 146, 246)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class OasisNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: oasisChainId,
    networkId: oasisChainId,
    slip44: 474,
    name: 'OasisChain Mainnet',
    shortName: 'OAC',
    uiName: 'OasisChain',
    chainEnvironment: 'mainnet',
    chain: 'OasisChain',
    nativeCurrency: {
      name: 'OAC',
      symbol: 'OAC',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'OasisChain Explorer',
        url: 'https://scan.oasischain.io',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'OasisChain RPC 1',
          url: 'https://rpc1.oasischain.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'OasisChain RPC 2',
          url: 'https://rpc2.oasischain.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'OasisChain RPC 3',
          url: 'https://rpc3.oasischain.io',
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
        name: 'OasisChain Faucet',
        url: 'http://faucet.oasischain.io',
      },
    ],
    infoUrl: 'https://scan.oasischain.io',
  })

  public static SAPPHIRE = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: oasisSapphireChainId,
      networkId: oasisSapphireChainId,
      slip44: undefined,
      name: 'Oasis Sapphire',
      shortName: 'sapphire',
      uiName: 'Oasis Sapphire',
      chainEnvironment: 'mainnet',
      chain: 'Sapphire',
      symbol: 'ROSE',
      nativeCurrency: {
        name: 'Sapphire Rose',
        symbol: 'ROSE',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Oasis Sapphire Explorer',
          url: 'https://explorer.oasis.io/mainnet/sapphire',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'Oasis Sapphire RPC (HTTP)',
            url: 'https://sapphire.oasis.io',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Oasis Sapphire RPC (WSS)',
            url: 'wss://sapphire.oasis.io/ws',
            isWSS: true,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      infoUrl: 'https://docs.oasis.io/dapp/sapphire',
    }
  }

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case oasisChainId:
        return OasisNetwork.MAINNET()
      case oasisSapphireChainId:
        return OasisNetwork.SAPPHIRE()
      default:
        return undefined
    }
  }
}
