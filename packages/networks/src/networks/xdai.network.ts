import { xdaiChainId, xDaiTestnetChainId } from '@chain-toolkit/chains'
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
  symbol: 'XDAI',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/xdai/info/logo.png',
  color: 'rgb(4, 121, 92)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class xDaiNetwork {
  public static MAINNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: xdaiChainId,
      networkId: xdaiChainId,
      slip44: 700,
      name: 'Gnosis',
      shortName: 'gno',
      uiName: 'Gnosis Chain',
      chainEnvironment: 'mainnet',
      chain: 'GNO',
      nativeCurrency: {
        name: 'xDAI',
        symbol: 'XDAI',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Gnosisscan',
          url: 'https://gnosisscan.io',
          standard: 'EIP3091',
        },
        {
          name: 'Blockscout',
          url: 'https://gnosis.blockscout.com',
          standard: 'EIP3091',
        },
        {
          name: 'Dex Guru',
          url: 'https://gnosis.dex.guru',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'Gnosis Chain RPC',
            url: 'https://rpc.gnosischain.com',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Gnosis Gateway',
            url: 'https://rpc.gnosis.gateway.fm',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Ankr',
            url: 'https://rpc.ankr.com/gnosis',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Pocket Network Gateway',
            url: 'https://gnosischain-rpc.gateway.pokt.network',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Blast API',
            url: 'https://gnosis-mainnet.public.blastapi.io',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'OnFinality',
            url: 'https://gnosis.api.onfinality.io/public',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Blockpi',
            url: 'https://gnosis.blockpi.network/v1/rpc/public',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Web3Endpoints',
            url: 'https://web3endpoints.com/gnosischain-mainnet',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Oat Farm',
            url: 'https://gnosis.oat.farm',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Gnosis Chain RPC WSS',
            url: 'wss://rpc.gnosischain.com/wss',
            isWSS: true,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Public Node (HTTP)',
            url: 'https://gnosis-rpc.publicnode.com',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Public Node (WSS)',
            url: 'wss://gnosis-rpc.publicnode.com',
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
          name: 'Gnosis Faucet',
          url: 'https://gnosisfaucet.com',
        },
        {
          name: 'Stakely Faucet',
          url: 'https://stakely.io/faucet/gnosis-chain-xdai',
        },
        {
          name: 'Prussia Dev Faucet',
          url: 'https://faucet.prussia.dev/xdai',
        },
      ],
      infoUrl: 'https://docs.gnosischain.com',
    }
  }

  public static TESTNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: xDaiTestnetChainId,
      networkId: xDaiTestnetChainId,
      slip44: 1,
      name: 'Gnosis Chiado Testnet',
      shortName: 'chi',
      uiName: 'Gnosis Chiado',
      chainEnvironment: 'testnet',
      chain: 'GNO',
      nativeCurrency: {
        name: 'Chiado xDAI',
        symbol: 'XDAI',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Blockscout 1',
          url: 'https://blockscout.chiadochain.net',
          standard: 'EIP3091',
        },
        {
          name: 'Blockscout 2',
          url: 'https://gnosis-chiado.blockscout.com',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'Chiado RPC (HTTP)',
            url: 'https://rpc.chiadochain.net',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Chiado RPC (WSS)',
            url: 'wss://rpc.chiadochain.net/wss',
            isWSS: true,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Gnosis Gateway',
            url: 'https://rpc.chiado.gnosis.gateway.fm',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Public Node (HTTP)',
            url: 'https://gnosis-chiado-rpc.publicnode.com',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'Public Node (WSS)',
            url: 'wss://gnosis-chiado-rpc.publicnode.com',
            isWSS: true,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'DRPC (HTTP)',
            url: 'https://gnosis-chiado.drpc.org',
            isWSS: false,
            chunkLimit: 50_000,
            callDataLimit: 100_000,
          },
          {
            name: 'DRPC (WSS)',
            url: 'wss://gnosis-chiado.drpc.org',
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
          name: 'Gnosis Faucet',
          url: 'https://gnosisfaucet.com',
        },
      ],
      infoUrl: 'https://docs.gnosischain.com',
    }
  }

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case xdaiChainId:
        return xDaiNetwork.MAINNET()
      case xDaiTestnetChainId:
        return xDaiNetwork.TESTNET()
      default:
        return undefined
    }
  }
}
