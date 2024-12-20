import { plsMainChainId, plsTestChainId } from '@chain-toolkit/chains'
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
  | 'ens'
> = {
  chainType: 'L1',
  symbol: 'PLS',
  logoUrl: '',
  color: 'rgb(5, 185, 213)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class PulseNetwork {
  public static MAINNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: plsMainChainId,
      networkId: plsMainChainId,
      slip44: 60,
      name: 'PulseChain',
      shortName: 'pls',
      uiName: 'PulseChain',
      chainEnvironment: 'mainnet',
      chain: 'PLS',
      nativeCurrency: {
        name: 'Pulse',
        symbol: 'PLS',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Blockscout',
          url: 'https://scan.pulsechain.com',
          standard: 'EIP3091',
        },
        {
          name: 'Otterscan',
          url: 'https://otter.pulsechain.com',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'PulseChain RPC (HTTP)',
            url: 'https://rpc.pulsechain.com',
            chunkLimit: 500_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'PulseChain RPC (WSS)',
            url: 'wss://rpc.pulsechain.com',
            chunkLimit: 500_000,
            callDataLimit: 100_000,
            isWSS: true,
          },
          {
            name: 'PublicNode (HTTP)',
            url: 'https://pulsechain-rpc.publicnode.com',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'PublicNode (WSS)',
            url: 'wss://pulsechain-rpc.publicnode.com',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: true,
          },
          {
            name: 'G4MM4 (HTTP)',
            url: 'https://rpc-pulsechain.g4mm4.io',
            chunkLimit: 5_000_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'G4MM4 (WSS)',
            url: 'wss://rpc-pulsechain.g4mm4.io',
            chunkLimit: 5_000_000,
            callDataLimit: 100_000,
            isWSS: true,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      ens: {
        registry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
      },
      infoUrl: 'https://pulsechain.com/',
      status: 'active',
    }
  }

  public static TESTNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: plsTestChainId,
      networkId: plsTestChainId,
      slip44: 1,
      name: 'PulseChain Testnet v4',
      shortName: 't4pls',
      uiName: 'PulseChain Testnet v4',
      chainEnvironment: 'testnet',
      chain: 't4PLS',
      nativeCurrency: {
        name: 'Test Pulse',
        symbol: 'tPLS',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Blockscout',
          url: 'https://scan.v4.testnet.pulsechain.com',
          standard: 'EIP3091',
        },
        {
          name: 'Otterscan',
          url: 'https://otter-testnet-pulsechain.g4mm4.io',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'PulseChain Testnet RPC (HTTP)',
            url: 'https://rpc.v4.testnet.pulsechain.com',
            chunkLimit: 500_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'PulseChain Testnet RPC (WSS)',
            url: 'wss://rpc.v4.testnet.pulsechain.com',
            chunkLimit: 500_000,
            callDataLimit: 100_000,
            isWSS: true,
          },
          {
            name: 'PublicNode (HTTP)',
            url: 'https://pulsechain-testnet-rpc.publicnode.com',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'PublicNode (WSS)',
            url: 'wss://pulsechain-testnet-rpc.publicnode.com',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: true,
          },
          {
            name: 'G4MM4 Testnet (HTTP)',
            url: 'https://rpc-testnet-pulsechain.g4mm4.io',
            chunkLimit: 5_000_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'G4MM4 Testnet (WSS)',
            url: 'wss://rpc-testnet-pulsechain.g4mm4.io',
            chunkLimit: 5_000_000,
            callDataLimit: 100_000,
            isWSS: true,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      ens: {
        registry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
      },
      faucets: [
        {
          name: 'PulseChain Faucet',
          url: 'https://faucet.v4.testnet.pulsechain.com/',
        },
      ],
      infoUrl: 'https://pulsechain.com',
      status: 'active',
    }
  }

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case plsMainChainId:
        return PulseNetwork.MAINNET()
      case plsTestChainId:
        return PulseNetwork.TESTNET()
      default:
        return undefined
    }
  }
}
