import { celoMainChainId, celoAlfajoresChainId } from '@chain-toolkit/chains'
import type { ChainConfig, ChainId } from '@chain-toolkit/schemas'

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
  symbol: 'CELO',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/celo/info/logo.png',
  infoUrl: 'https://docs.celo.org/',
  color: 'rgb(252, 254, 82)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class CeloNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: celoMainChainId,
    networkId: celoMainChainId,
    slip44: 52752,
    name: 'Celo Mainnet',
    shortName: 'celo',
    uiName: 'Celo Mainnet',
    chainEnvironment: 'mainnet',
    chain: 'CELO',
    nativeCurrency: {
      name: 'CELO',
      symbol: 'CELO',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      { name: 'Celoscan', url: 'https://celoscan.io', standard: 'EIP3091' },
      {
        name: 'Blockscout',
        url: 'https://explorer.celo.org',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Celo RPC (HTTP)',
          url: 'https://forno.celo.org',
          isWSS: false,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
        {
          name: 'Celo RPC (WSS)',
          url: 'wss://forno.celo.org/ws',
          isWSS: true,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
  })

  public static ALFAJORES = (): ChainConfig => ({
    ...commonProps,
    chainId: celoAlfajoresChainId,
    networkId: celoAlfajoresChainId,
    slip44: 1,
    name: 'Celo Alfajores Testnet',
    shortName: 'ALFA',
    uiName: 'Celo Alfajores Testnet',
    chainEnvironment: 'testnet',
    chain: 'CELO',
    nativeCurrency: {
      name: 'CELO',
      symbol: 'CELO',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Alfajoresscan',
        url: 'https://alfajores.celoscan.io',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Alfajores RPC (HTTP)',
          url: 'https://alfajores-forno.celo-testnet.org',
          isWSS: false,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
        {
          name: 'Alfajores RPC (WSS)',
          url: 'wss://alfajores-forno.celo-testnet.org/ws',
          isWSS: true,
          chunkLimit: 3_500,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
    faucets: [
      { name: 'Celo Faucet', url: 'https://celo.org/developers/faucet' },
      {
        name: 'Cauldron Testnet Faucet',
        url: 'https://cauldron.pretoriaresearchlab.io/alfajores-faucet',
      },
    ],
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case celoMainChainId:
        return CeloNetwork.MAINNET()
      case celoAlfajoresChainId:
        return CeloNetwork.ALFAJORES()
      default:
        return undefined
    }
  }
}
