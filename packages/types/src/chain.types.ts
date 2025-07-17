import {
  AddressSchema,
  ChainIdSchema,
  ChainTypeSchema,
  NativeCurrencySchema,
  GasPricingUrlSchema,
  ExplorerStandardSchema,
  ExplorersSchema,
  BridgesSchema,
  FaucetSchema,
  MarketDataIdsSchema,
  PrivacySchema,
  NodeConfigBaseSchema,
  AuthenticatedProviderTypeSchema,
  AuthenticatedNodeConfigSchema,
  NodeProvidersSchema,
  ParentChainSchema,
  TransactionFeatureSchema,
  BlockchainFeatureSchema,
  SupportedFeatureSchema,
  FeatureSchema,
  RedFlagSchema,
  StatusSchema,
  ChainConfigSchema,
} from '@chain-toolkit/schemas'
import { z } from 'zod'

/**
 * Represents a blockchain address.
 */
export type Address = z.infer<typeof AddressSchema>

/**
 * Represents the chain ID (must be a positive integer).
 */
export type ChainId = z.infer<typeof ChainIdSchema>

/**
 * Represents the chain types.
 */
export type ChainType = z.infer<typeof ChainTypeSchema>

/**
 * Represents the the native currency of a blockchain.
 */
export type NativeCurrency = z.infer<typeof NativeCurrencySchema>

/**
 * Represents the gas price providers.
 */
export type GasPricingUrl = z.infer<typeof GasPricingUrlSchema>

/**
 * Represents the explorer standards.
 */
export type ExplorerStandard = z.infer<typeof ExplorerStandardSchema>

/**
 * Represents the block explorer URLs.
 */
export type BlockExplorerUrl = z.infer<typeof ExplorersSchema>

/**
 * Represents the bridges between blockchain networks.
 */
export type BridgeUrl = z.infer<typeof BridgesSchema>

/**
 * Represents the faucets providing test tokens.
 */
export type Faucet = z.infer<typeof FaucetSchema>

/**
 * Represents the market data identifiers.
 */
export type MarketDataIds = z.infer<typeof MarketDataIdsSchema>

/**
 * Represents the privacy of the node.
 */
export type Privacy = z.infer<typeof PrivacySchema>

/**
 * Represents the RPC node configurations.
 */
export type NodeConfigBase = z.infer<typeof NodeConfigBaseSchema>

/**
 * Authenticated provider types schema
 */
export type AuthenticatedProviderType = z.infer<
  typeof AuthenticatedProviderTypeSchema
>

/**
 * Represents the authenticated node configurations.
 */
export type AuthenticatedNodeConfig = z.infer<
  typeof AuthenticatedNodeConfigSchema
>

/**
 * Represents the grouping node providers.
 */
export type NodeProviders = z.infer<typeof NodeProvidersSchema>

/**
 * Represents the parent chain configuration.
 */
export type ParentChain = z.infer<typeof ParentChainSchema>

/**
 * Represents the transaction features supported by the blockchain network.
 */
export type TransactionFeature = z.infer<typeof TransactionFeatureSchema>

/**
 * Represents the blockchain features supported by the blockchain network.
 */
export type BlockchainFeature = z.infer<typeof BlockchainFeatureSchema>

/**
 * Represents the recognized features supported by the blockchain network.
 */
export type SupportedFeature = z.infer<typeof SupportedFeatureSchema>

/**
 * Represents the individual feature objects.
 */
export type Feature = z.infer<typeof FeatureSchema>

/**
 * Represents the red flags or warnings about the blockchain network.
 */
export type RedFlag = z.infer<typeof RedFlagSchema>

/**
 *Represents the status of the blockchain network.
 */
export type Status = z.infer<typeof StatusSchema>

/**
 * Represents the blockchain network configuration.
 */
export type ChainConfig = z.infer<typeof ChainConfigSchema>
