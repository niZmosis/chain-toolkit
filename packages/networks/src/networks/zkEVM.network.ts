import {
  ethMainChainId,
  ethSepoliaChainId,
  zkEVMCardonaChainId,
  zkEVMMainChainId,
} from '@chain-toolkit/chains'
import type { ChainId, ChainConfig } from '@chain-toolkit/types'

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
> = {
  chainType: 'L2',
  symbol: 'ETH',
  logoUrl:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygonzkevm/info/logo.png',
  color: 'rgb(131 ,69, 230)',
  features: [
    { name: 'EIP155' },
    { name: 'LEGACY' },
    { name: 'EIP1559' },
    { name: 'EIP2930' },
  ],
}

export class zkEVMNetwork {
  public static MAINNET = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: zkEVMMainChainId,
      networkId: zkEVMMainChainId,
      slip44: undefined,
      name: 'Polygon zkEVM',
      shortName: 'zkevm',
      uiName: 'Polygon zkEVM',
      chainEnvironment: 'mainnet',
      chain: 'Polygon',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Polygonscan',
          url: 'https://zkevm.polygonscan.com',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'ZKEVM RPC',
            url: 'https://zkevm-rpc.com',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'DRPC (HTTP)',
            url: 'https://polygon-zkevm.drpc.org',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
          {
            name: 'DRPC (WSS)',
            url: 'wss://polygon-zkevm.drpc.org',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: true,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      infoUrl: 'https://polygon.technology/polygon-zkevm',
      parent: {
        type: 'L2',
        chain: `eip155-${ethMainChainId}`,
        bridges: [
          {
            name: 'Polygon zkEVM Bridge',
            url: 'https://bridge.zkevm-rpc.com',
          },
        ],
      },
    }
  }

  public static CARDONA = (): ChainConfig => {
    return {
      ...commonProps,
      chainId: zkEVMCardonaChainId,
      networkId: zkEVMCardonaChainId,
      slip44: 1,
      name: 'Polygon zkEVM Cardona Testnet',
      shortName: 'zkevm-testnet-cardona',
      uiName: 'Polygon zkEVM Cardona',
      chainEnvironment: 'testnet',
      chain: 'Polygon',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      gasUrls: [],
      explorers: [
        {
          name: 'Polygonscan',
          url: 'https://cardona-zkevm.polygonscan.com',
          standard: 'EIP3091',
        },
      ],
      nodes: {
        public: [
          {
            name: 'zkEVM Cardona RPC',
            url: 'https://rpc.cardona.zkevm-rpc.com',
            chunkLimit: 50_000,
            callDataLimit: 100_000,
            isWSS: false,
          },
        ],
      },
      contracts: {
        multicall: '0xcA11bde05977b3631167028862bE2a173976CA11',
      },
      infoUrl: 'https://polygon.technology/polygon-zkevm',
      parent: {
        type: 'L2',
        chain: `eip155-${ethSepoliaChainId}`,
        bridges: [
          {
            name: 'Polygon zkEVM Bridge',
            url: 'https://bridge-ui.cardona.zkevm-rpc.com',
          },
        ],
      },
    }
  }

  public static getChainConfig(chainId: ChainId): ChainConfig | undefined {
    switch (chainId) {
      case zkEVMMainChainId:
        return zkEVMNetwork.MAINNET()
      case zkEVMCardonaChainId:
        return zkEVMNetwork.CARDONA()
      default:
        return undefined
    }
  }
}
