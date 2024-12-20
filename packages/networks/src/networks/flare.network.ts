import { flareChainId, flareSongbirdCanaryChainId } from '@chain-toolkit/chains'
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
  symbol: 'FLR',
  logoUrl:
    'https://docs.flare.network/assets/images/dev/reference/logo-FLR.png',
  color: 'rgb(229, 33, 88)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class FlareNetwork {
  public static MAINNET = (): ChainConfig => ({
    ...commonProps,
    chainId: flareChainId,
    networkId: flareChainId,
    slip44: undefined,
    name: 'Flare Mainnet',
    shortName: 'flr',
    uiName: 'Flare',
    chainEnvironment: 'mainnet',
    chain: 'FLR',
    nativeCurrency: {
      name: 'Flare',
      symbol: 'FLR',
      decimals: 18,
    },
    gasUrls: [],
    explorers: [
      {
        name: 'Blockscout',
        url: 'https://flare-explorer.flare.network',
        standard: 'EIP3091',
      },
      {
        name: 'Routescan',
        url: 'https://mainnet.flarescan.com',
        standard: 'EIP3091',
      },
    ],
    nodes: {
      public: [
        {
          name: 'Flare API',
          url: 'https://flare-api.flare.network/ext/C/rpc',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Thirdweb',
          url: 'https://flare.rpc.thirdweb.com',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Etherspot',
          url: 'https://flare-bundler.etherspot.io',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Ankr',
          url: 'https://rpc.ankr.com/flare',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tatum 1',
          url: 'https://01-gravelines-003-01.rpc.tatum.io/ext/bc/C/rpc',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Tatum 2',
          url: 'https://01-vinthill-003-02.rpc.tatum.io/ext/bc/C/rpc',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'FTSO',
          url: 'https://rpc.ftso.au/flare',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Enosys',
          url: 'https://flare.enosys.global/ext/C/rpc',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
        {
          name: 'Solidifi',
          url: 'https://flare.solidifi.app/ext/C/rpc',
          isWSS: false,
          chunkLimit: 50_000,
          callDataLimit: 100_000,
        },
      ],
    },
    contracts: {
      multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
    },
  })

  public static SONGBIRD = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: flareSongbirdCanaryChainId,
      networkId: flareSongbirdCanaryChainId,
      slip44: 1,
      name: 'Songbird Canary-Network',
      shortName: 'sgb',
      uiName: 'Songbird',
      chainEnvironment: 'mainnet',
      chain: 'SGB',
      symbol: 'SGB',
      nativeCurrency: {
        name: 'Songbird',
        symbol: 'SGB',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Blockscout',
          url: 'https://songbird-explorer.flare.network',
          standard: 'EIP3091',
        },
        {
          name: 'Routescan',
          url: 'https://songbird.flarescan.com',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'Songbird API',
            url: 'https://songbird-api.flare.network/ext/C/rpc',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Tatum 1',
            url: 'https://01-gravelines-006-01.rpc.tatum.io/ext/bc/C/rpc',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Tatum 2',
            url: 'https://01-vinthill-006-02.rpc.tatum.io/ext/bc/C/rpc',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Tatum 3',
            url: 'https://02-tokyo-006-03.rpc.tatum.io/ext/bc/C/rpc',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'FTSO',
            url: 'https://rpc.ftso.au/songbird',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Enosys',
            url: 'https://songbird.enosys.global/ext/C/rpc',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Solidifi',
            url: 'https://songbird.solidifi.app/ext/C/rpc',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      infoUrl: 'https://flare.network',
    }
  }

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case flareChainId:
        return FlareNetwork.MAINNET()
      case flareSongbirdCanaryChainId:
        return FlareNetwork.SONGBIRD()
      default:
        return undefined
    }
  }
}
