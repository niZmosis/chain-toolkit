import { harmonyChainId } from '@chain-toolkit/chains'
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
  | 'ens'
> = {
  chainType: 'L1',
  symbol: 'ONE',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/harmony/info/logo.png',
  color: 'rgb(49, 213, 212)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class HarmonyNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: harmonyChainId,
    networkId: harmonyChainId,
    slip44: 1023,
    name: 'Harmony Mainnet Shard 0',
    shortName: 'hmy-s0',
    uiName: 'Harmony',
    chainEnvironment: 'mainnet',
    chain: 'Harmony',
    nativeCurrency: {
      name: 'ONE',
      symbol: 'ONE',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Harmony Block Explorer',
        url: 'https://explorer.harmony.one',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Harmony API',
          url: 'https://api.harmony.one',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Harmony API (s0.t.hmny 1)',
          url: 'https://a.api.s0.t.hmny.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Harmony API (s0.t.hmny 2)',
          url: 'https://api.s0.t.hmny.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Ankr',
          url: 'https://rpc.ankr.com/harmony',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: '1RPC',
          url: 'https://1rpc.io/one',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (HTTP)',
          url: 'https://harmony-0.drpc.org',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'DRPC (WSS)',
          url: 'wss://harmony-0.drpc.org',
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
      registry: '0x4cd2563118e57b19179d8dc033f2b0c5b5d69ff5',
    },
    infoUrl: 'https://www.harmony.one/',
  })

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case harmonyChainId:
        return HarmonyNetwork.MAINNET()
      default:
        return undefined
    }
  }
}
