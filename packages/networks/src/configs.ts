import {
  arbitrumMainChainId,
  arbitrumSepoliaChainId,
  astarChainId,
  auroraChainId,
  avaxMainChainId,
  avaxFujiChainId,
  baseMainChainId,
  baseSepoliaChainId,
  blastMainChainId,
  blastSepoliaChainId,
  bobaChainId,
  bobChainId,
  bscMainChainId,
  bscTestChainId,
  celoMainChainId,
  celoAlfajoresChainId,
  cronosChainId,
  energiMainChainId,
  energiTestChainId,
  etherliteChainId,
  ethMainChainId,
  ethHoleskyChainId,
  ethSepoliaChainId,
  evmosMainnetChainId,
  evmosTestnetChainId,
  fantomChainId,
  fantomTestnetChainId,
  flareChainId,
  flareSongbirdCanaryChainId,
  fuseChainId,
  ganacheChainId,
  godwokenMainnetChainId,
  godwokenTestnetChainId,
  harmonyChainId,
  hecoChainId,
  kccChainId,
  kccTestnetChainId,
  klaytnChainId,
  lineaMainChainId,
  lineaTestnetChainId,
  mantleMainnetChainId,
  mantleSepoliaChainId,
  mantaPacificChainId,
  metisChainId,
  milkomedaChainId,
  modeChainId,
  modeTestnetChainId,
  moonbeamChainId,
  moonriverChainId,
  moonbaseAlphaChainId,
  oasisChainId,
  oasisSapphireChainId,
  okcChainId,
  optimismMainChainId,
  optimismSepoliaChainId,
  plsMainChainId,
  plsTestChainId,
  polygonMainChainId,
  polygonAmoyChainId,
  rskChainId,
  rskTestnetChainId,
  scrollChainId,
  scrollSepoliaChainId,
  shibariumChainId,
  thundercoreChainId,
  thundercoreTestnetChainId,
  xdaiChainId,
  xDaiTestnetChainId,
  zkEVMMainChainId,
  zkEVMCardonaChainId,
  zksyncMainChainId,
  zksyncSepoliaChainId,
  zoraMainChainId,
  zoraSepoliaChainId,
} from '@chain-toolkit/chains'
import type { ChainId, ChainConfig } from '@chain-toolkit/schemas'

import {
  ArbitrumNetwork,
  AstarNetwork,
  AuroraNetwork,
  AvalancheNetwork,
  BaseNetwork,
  BlastNetwork,
  BobaNetwork,
  BobNetwork,
  BscNetwork,
  CeloNetwork,
  CronosNetwork,
  EnergiNetwork,
  EtherliteNetwork,
  EthereumNetwork,
  EvmosNetwork,
  FantomNetwork,
  FlareNetwork,
  FuseNetwork,
  GanacheNetwork,
  GodwokenNetwork,
  HarmonyNetwork,
  HecoNetwork,
  KccNetwork,
  KlaytnNetwork,
  LineaNetwork,
  MantleNetwork,
  MantaNetwork,
  MetisNetwork,
  MilkomedaNetwork,
  ModeNetwork,
  MoonNetwork,
  OasisNetwork,
  OkcNetwork,
  OptimismNetwork,
  PolygonNetwork,
  PulseNetwork,
  RskNetwork,
  ScrollNetwork,
  ShibariumNetwork,
  ThundercoreNetwork,
  xDaiNetwork,
  zkEVMNetwork,
  ZKSyncNetwork,
  ZoraNetwork,
} from './networks'

/**
 * Default configuration for a blockchain network.
 */
export const defaultChainConfig: ChainConfig = {
  chainType: 'L1',
  chainId: 0,
  networkId: 0,
  name: '',
  shortName: '',
  uiName: '',
  chainEnvironment: '',
  chain: '',
  symbol: '',
  color: '',
  nativeCurrency: {
    name: '',
    symbol: '',
    decimals: 18,
  },
  gasUrls: [],
  explorers: [],
  nodes: {
    public: [],
  },
  contracts: {},
}

/**
 * Retrieves the configuration for a given blockchain network identified by its chain ID.
 *
 * @param chainId - The ID of the blockchain network to get the configuration for.
 *
 * @returns {ChainConfig} The configuration object for the specified chain ID
 */
export function getChainConfig(chainId: ChainId): ChainConfig {
  const chain = +chainId

  switch (chain) {
    // ARBITRUM
    case arbitrumMainChainId:
      return ArbitrumNetwork.MAINNET()
    case arbitrumSepoliaChainId:
      return ArbitrumNetwork.SEPOLIA()

    // ASTAR
    case astarChainId:
      return AstarNetwork.MAINNET()

    // AURORA
    case auroraChainId:
      return AuroraNetwork.MAINNET()

    // AVAX
    case avaxMainChainId:
      return AvalancheNetwork.MAINNET()
    case avaxFujiChainId:
      return AvalancheNetwork.FUJI()

    // BASE
    case baseMainChainId:
      return BaseNetwork.MAINNET()
    case baseSepoliaChainId:
      return BaseNetwork.SEPOLIA()

    // BLAST
    case blastMainChainId:
      return BlastNetwork.MAINNET()
    case blastSepoliaChainId:
      return BlastNetwork.SEPOLIA()

    // BOBA
    case bobaChainId:
      return BobaNetwork.MAINNET()

    // BOB
    case bobChainId:
      return BobNetwork.MAINNET()

    // BSC
    case bscMainChainId:
      return BscNetwork.MAINNET()
    case bscTestChainId:
      return BscNetwork.TESTNET()

    // CELO
    case celoMainChainId:
      return CeloNetwork.MAINNET()
    case celoAlfajoresChainId:
      return CeloNetwork.ALFAJORES()

    // CRONOS
    case cronosChainId:
      return CronosNetwork.MAINNET()

    // ENERGI
    case energiMainChainId:
      return EnergiNetwork.MAINNET()
    case energiTestChainId:
      return EnergiNetwork.TESTNET()

    // ETHERLITE
    case etherliteChainId:
      return EtherliteNetwork.MAINNET()

    // ETHEREUM
    case ethMainChainId:
      return EthereumNetwork.MAINNET()
    case ethHoleskyChainId:
      return EthereumNetwork.HOLESKY()
    case ethSepoliaChainId:
      return EthereumNetwork.SEPOLIA()

    // EVMOS
    case evmosMainnetChainId:
      return EvmosNetwork.MAINNET()
    case evmosTestnetChainId:
      return EvmosNetwork.TESTNET()

    // FANTOM
    case fantomChainId:
      return FantomNetwork.MAINNET()
    case fantomTestnetChainId:
      return FantomNetwork.TESTNET()

    // FLARE
    case flareChainId:
      return FlareNetwork.MAINNET()
    case flareSongbirdCanaryChainId:
      return FlareNetwork.SONGBIRD()

    // FUSE
    case fuseChainId:
      return FuseNetwork.MAINNET()

    // GANACHE
    case ganacheChainId:
      return GanacheNetwork.MAINNET()

    // GODWOKEN
    case godwokenMainnetChainId:
      return GodwokenNetwork.MAINNET()
    case godwokenTestnetChainId:
      return GodwokenNetwork.TESTNET()

    // HARMONY
    case harmonyChainId:
      return HarmonyNetwork.MAINNET()

    // HECO
    case hecoChainId:
      return HecoNetwork.MAINNET()

    // KCC
    case kccChainId:
      return KccNetwork.MAINNET()
    case kccTestnetChainId:
      return KccNetwork.TESTNET()

    // KLAYTN
    case klaytnChainId:
      return KlaytnNetwork.MAINNET()

    // LINEA
    case lineaMainChainId:
      return LineaNetwork.MAINNET()
    case lineaTestnetChainId:
      return LineaNetwork.TESTNET()

    // MANTLE
    case mantleMainnetChainId:
      return MantleNetwork.MAINNET()
    case mantleSepoliaChainId:
      return MantleNetwork.SEPOLIA()

    // MANTA
    case mantaPacificChainId:
      return MantaNetwork.MAINNET()

    // METIS
    case metisChainId:
      return MetisNetwork.MAINNET()

    // MILKOMEDA
    case milkomedaChainId:
      return MilkomedaNetwork.MAINNET()

    // MODE
    case modeChainId:
      return ModeNetwork.MAINNET()
    case modeTestnetChainId:
      return ModeNetwork.TESTNET()

    // MOON
    case moonbeamChainId:
      return MoonNetwork.MOONBEAM()
    case moonriverChainId:
      return MoonNetwork.MOONRIVER()
    case moonbaseAlphaChainId:
      return MoonNetwork.MOONBASE_ALPHA()

    // OASIS
    case oasisChainId:
      return OasisNetwork.MAINNET()
    case oasisSapphireChainId:
      return OasisNetwork.SAPPHIRE()

    // OKC
    case okcChainId:
      return OkcNetwork.MAINNET()

    // OPTIMISM
    case optimismMainChainId:
      return OptimismNetwork.MAINNET()
    case optimismSepoliaChainId:
      return OptimismNetwork.SEPOLIA()

    // PULSE
    case plsMainChainId:
      return PulseNetwork.MAINNET()
    case plsTestChainId:
      return PulseNetwork.TESTNET()

    // POLYGON
    case polygonMainChainId:
      return PolygonNetwork.MAINNET()
    case polygonAmoyChainId:
      return PolygonNetwork.AMOY()

    // RSK
    case rskChainId:
      return RskNetwork.MAINNET()
    case rskTestnetChainId:
      return RskNetwork.TESTNET()

    // SCROLL
    case scrollChainId:
      return ScrollNetwork.MAINNET()
    case scrollSepoliaChainId:
      return ScrollNetwork.SEPOLIA()

    // SHIBARIUM
    case shibariumChainId:
      return ShibariumNetwork.MAINNET()

    // THUNDERCORE
    case thundercoreChainId:
      return ThundercoreNetwork.MAINNET()
    case thundercoreTestnetChainId:
      return ThundercoreNetwork.TESTNET()

    // XDAI
    case xdaiChainId:
      return xDaiNetwork.MAINNET()
    case xDaiTestnetChainId:
      return xDaiNetwork.TESTNET()

    // zkEVM
    case zkEVMMainChainId:
      return zkEVMNetwork.MAINNET()
    case zkEVMCardonaChainId:
      return zkEVMNetwork.CARDONA()

    // ZKSYNC
    case zksyncMainChainId:
      return ZKSyncNetwork.MAINNET()
    case zksyncSepoliaChainId:
      return ZKSyncNetwork.SEPOLIA()

    // ZORA
    case zoraMainChainId:
      return ZoraNetwork.MAINNET()
    case zoraSepoliaChainId:
      return ZoraNetwork.SEPOLIA()

    default: {
      throw new Error(`Chain ID ${chain} is not supported`)
    }
  }
}
