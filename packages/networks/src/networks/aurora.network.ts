import { auroraChainId } from '@chain-toolkit/chains'
import type { ChainId, ChainConfig } from '@chain-toolkit/schemas'

const commonProps: Omit<
  ChainConfig,
  | 'name'
  | 'shortName'
  | 'uiName'
  | 'chainEnvironment'
  | 'chain'
  | 'chainId'
  | 'networkId'
  | 'nativeCurrency'
  | 'gasUrls'
  | 'explorers'
  | 'nodes'
  | 'contracts'
> = {
  chainType: 'L1',
  symbol: 'AURORA',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/aurora/info/logo.png',
  infoUrl: 'https://aurora.dev',
  color: 'rgb(110, 212, 73)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class AuroraNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: auroraChainId,
    networkId: auroraChainId,
    slip44: 2570,
    name: 'Aurora Mainnet',
    shortName: 'aurora',
    uiName: 'Aurora',
    chainEnvironment: 'mainnet',
    chain: 'NEAR',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18,
    },
    contracts: {
      multicall: '0x49eb1F1118A3E91fb895Bc2d86B19b8f878f6508',
    },
    explorers: [
      {
        name: 'Aurora Explorer',
        url: 'https://aurorascan.dev',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Aurora Mainnet',
          url: 'https://mainnet.aurora.dev',
          isWSS: false,
          privacy: undefined,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: '1RPC',
          url: 'https://1rpc.io/aurora',
          isWSS: false,
          privacy: undefined,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://aurora.drpc.org',
          isWSS: false,
          privacy: undefined,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://aurora.drpc.org',
          isWSS: true,
          privacy: undefined,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tatum Gateway',
          url: 'https://aurora-mainnet.gateway.tatum.io',
          isWSS: false,
          privacy: undefined,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'OmniaTech',
          url: 'https://endpoints.omniatech.io/v1/aurora/mainnet/public',
          isWSS: false,
          privacy: undefined,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Histori',
          url: 'https://node.histori.xyz/aurora-mainnet/8ry9f6t9dct1se2hlagxnd9n2a',
          isWSS: false,
          privacy: undefined,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    gasUrls: [],
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case auroraChainId:
        return AuroraNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
