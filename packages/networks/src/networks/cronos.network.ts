import { cronosChainId } from '@chain-toolkit/chains'
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
  symbol: 'CRO',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/cronos/info/logo.png',
  infoUrl: 'https://cronos.org/',
  color: 'rgb(9, 44, 114)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class CronosNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: cronosChainId,
    networkId: cronosChainId,
    slip44: 394,
    name: 'Cronos Mainnet',
    shortName: 'cro',
    uiName: 'Cronos',
    chainEnvironment: 'mainnet',
    chain: 'CRO',
    nativeCurrency: {
      name: 'Cronos',
      symbol: 'CRO',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Cronos Explorer',
        url: 'https://explorer.cronos.org',
        standard: 'none',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Cronos RPC',
          url: 'https://evm.cronos.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (HTTP)',
          url: 'https://cronos-evm-rpc.publicnode.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'PublicNode (WSS)',
          url: 'wss://cronos-evm-rpc.publicnode.com',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://cronos.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://cronos.drpc.org',
          isWSS: true,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0x13aD51a6664973EbD0749a7c84939d973F247921',
    },
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case cronosChainId:
        return CronosNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
