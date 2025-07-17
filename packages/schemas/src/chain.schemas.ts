import { z } from 'zod'

/** Schema for contract addresses. */
export const AddressSchema = z
  .string()
  .regex(/^0x[a-fA-F0-9]{40}$/, 'Invalid contract address.')

/**
 * Schema for chain ID (must be a positive integer).
 */
export const ChainIdSchema = z.number().int().positive({
  message: 'Chain ID must be a positive integer.',
})

/**
 * Schema for chain ID (must be a positive integer).
 */
export const NetworkIdSchema = z.number().int().positive({
  message: 'Network ID must be a positive integer.',
})

/**
 * Schema for chain types.
 */
export const ChainTypeSchema = z.enum(['L1', 'L2'], {
  description: 'Type of blockchain network.',
})

/**
 * Schema for the native currency of a blockchain.
 */
export const NativeCurrencySchema = z.object({
  /** Name of the native currency (e.g., "Ether"). */
  name: z.string().min(1, 'Native currency name cannot be empty.'),
  /** Symbol of the native currency (e.g., "ETH"). */
  symbol: z.string().min(1, 'Native currency symbol cannot be empty.'),
  /** Number of decimals the currency supports. */
  decimals: z.number().int().nonnegative(),
})

/**
 * Schema for gas price providers.
 */
export const GasPricingUrlSchema = z.object({
  /** Name of the gas price provider. */
  name: z.string().min(1, 'Gas price provider name cannot be empty.'),
  /** URL to fetch gas price data. */
  url: z.string().url('Invalid URL format for gas price provider.'),
})

/** Schema for explorer standards. */
export const ExplorerStandardSchema = z.enum(['none', 'EIP3091', 'EIP3085'])

/**
 * Schema for block explorer URLs.
 */
export const ExplorersSchema = z.object({
  /** Name of the block explorer. */
  name: z.string().min(1, 'Block explorer name cannot be empty.'),
  /** URL of the block explorer. */
  url: z.string().url('Invalid URL format for block explorer.'),
  /** Indicates if the block explorer supports standard transactions. */
  standard: ExplorerStandardSchema.optional(),
})

/**
 * Schema for bridges between blockchain networks.
 */
export const BridgesSchema = z.object({
  /** Name of the bridge service. */
  name: z.string().min(1, 'Bridge name cannot be empty.'),
  /** URL of the bridge service. */
  url: z.string().url('Invalid URL format for bridge service.'),
})

/**
 * Schema for faucets providing test tokens.
 */
export const FaucetSchema = z.object({
  /** Name of the faucet service. */
  name: z.string().min(1, 'Faucet name cannot be empty.'),
  /** URL of the faucet service. */
  url: z.string().url('Invalid URL format for faucet service.'),
})

/**
 * Schema for market data identifiers.
 */
export const MarketDataIdsSchema = z.object({
  coinGeckoId: z.string().optional(),
  coinMarketCapId: z.string().optional(),
  cryptoCompareId: z.string().optional(),
})

/**
 * Schema for RPC node privacy.
 */
export const PrivacySchema = z.enum([
  'no-tracking',
  'semi-tracking',
  'tracking',
])

/**
 * Schema for RPC node configurations.
 */
export const NodeConfigBaseSchema = z.object({
  /** Name of the node. */
  name: z.string().min(1, 'Node name cannot be empty.'),
  /** RPC URL for the node. */
  url: z.string().url('Invalid RPC URL format.'),
  /** Indicates if the URL is using WebSockets. */
  isWSS: z.boolean().optional(),
  /** Indicates if the node tracks user activity. */
  privacy: PrivacySchema.optional(),
  /** Chunk limit for the node. */
  chunkLimit: z.number().positive(),
  /** Call data limit for the node. */
  callDataLimit: z.number().positive(),
})

/**
 * Authenticated provider types schema
 */
export const AuthenticatedProviderTypeSchema = z.union([
  z.literal('infura'),
  z.literal('infuraWSS'),
  z.literal('alchemy'),
  z.literal('alchemyWSS'),
])

/**
 * Schema for authenticated node configurations.
 */
export const AuthenticatedNodeConfigSchema = NodeConfigBaseSchema.extend({
  /**
   * Used for App purposes only.
   * Don't use this property for configuration files.
   */
  appID: z.string().optional(),
})

/**
 * Schema for grouping node providers.
 */
export const NodeProvidersSchema = z.object({
  authenticated: z
    .record(AuthenticatedProviderTypeSchema, AuthenticatedNodeConfigSchema)
    .optional(),
  public: z.array(NodeConfigBaseSchema).optional(),
})

/**
 * Schema for parent chain configuration.
 */
export const ParentChainSchema = z.object({
  /** Parent chain ID or identifier (e.g., "eip155-1"). */
  chain: z.string().min(1, 'Parent chain identifier cannot be empty.'),
  /** Type of the parent chain (e.g., L1, L2). */
  type: ChainTypeSchema,
  /** Bridge services for asset transfers. */
  bridges: z.array(BridgesSchema).optional(),
})

/**
 * Enumerates recognized transaction features.
 *
 * Currently includes:
 * - **LEGACY**: Pre-EIP-2930 transaction type
 * - **EIP2930**: Adds optional access lists
 * - **EIP1559**: Fee market implementation with maxFeePerGas, maxPriorityFeePerGas
 */
export const TransactionFeatureSchema = z.enum(
  ['LEGACY', 'EIP2930', 'EIP1559'],
  {
    description: 'Recognized transaction feature types.',
  },
)

/**
 * Enumerates recognized blockchain-level features.
 *
 * Currently includes:
 * - **EIP155**: Chain ID specification for replay protection
 */
export const BlockchainFeatureSchema = z.enum(
  ['EIP1108', 'EIP155', 'EIP6551'],
  {
    description: 'Recognized blockchain feature types.',
  },
)

/**
 * Combines both `TransactionFeatureSchema` and `BlockchainFeatureSchema` into a single schema,
 * allowing a unified set of recognized features to be used.
 */
export const SupportedFeatureSchema = z.union([
  TransactionFeatureSchema,
  BlockchainFeatureSchema,
])

/**
 * Defines the structure for an individual feature object, strictly enforcing
 * that its `name` matches one of the recognized features in `SupportedFeatureSchema`.
 */
export const FeatureSchema = z.object({
  /**
   * The name of the feature (e.g. "EIP155" or "EIP2930"),
   * required to be one of the recognized feature strings.
   */
  name: SupportedFeatureSchema,
})

/** Schema for red flags or warnings about the blockchain network. */
export const RedFlagSchema = z.enum(['reusedChainId'])

/** Schema for status of the blockchain network. */
export const StatusSchema = z.enum(['active', 'incubating', 'deprecated'])

/**
 * Schema for blockchain network configuration.
 */
export const ChainConfigSchema = z
  .object({
    /** Unique identifier for the blockchain network. */
    chainId: ChainIdSchema,
    /** Network ID for the blockchain network. */
    networkId: NetworkIdSchema,
    /** SLIP-44 identifier for the blockchain network. */
    slip44: z.number().int().nonnegative().optional(),
    /** Full canonical name of the blockchain network. */
    name: z.string().min(1, 'Network full name cannot be empty.'),
    /** Short identifier or slug for the blockchain network. */
    shortName: z.string().min(1, 'Slug cannot be empty.'),
    /** User-friendly name for UI purposes. */
    uiName: z.string().min(1, 'UI name cannot be empty.'),
    /** Technical name of the chain environment (e.g., "mainnet"). */
    chainEnvironment: z.string().min(1, 'Chain environment cannot be empty.'),
    /** Chain identifier for the blockchain network. */
    chain: z.string().min(1, 'Chain identifier cannot be empty.'),
    /** Type of blockchain network. */
    chainType: ChainTypeSchema,
    /** Symbol representing the network (e.g., "ETH"). */
    symbol: z.string().min(1, 'Network symbol cannot be empty.'),
    /** URL to the logo image of the network. */
    logoUrl: z.string().url().optional(),
    /** Hex or RGB color associated with the network. */
    color: z.string().regex(
      new RegExp(
        '^(' +
          // Hex (#RGB or #RRGGBB), optional leading '#'
          '#?(?:[A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})' +
          '|' +
          // rgb(r, g, b) with optional spaces
          'rgb\\(\\s*\\d+\\s*,\\s*\\d+\\s*,\\s*\\d+\\s*\\)' +
          '|' +
          // rgba(r, g, b, a) with optional spaces, alpha between 0-1
          'rgba\\(\\s*\\d+\\s*,\\s*\\d+\\s*,\\s*\\d+\\s*,\\s*(?:0(?:\\.\\d+)?|1(?:\\.0)?)\\s*\\)' +
          ')$',
      ),
      'Invalid color format. Must be a valid hex, rgb(), or rgba() string.',
    ),
    /** Native currency of the blockchain. */
    nativeCurrency: NativeCurrencySchema,
    /** Gas pricing APIs. */
    gasUrls: z.array(GasPricingUrlSchema),
    /** Block explorer URLs. */
    explorers: z.array(ExplorersSchema),
    /** RPC node providers. */
    nodes: NodeProvidersSchema,
    /** Smart contract configurations. */
    contracts: z.object({
      multicall: AddressSchema.optional(),
    }),
    /** ENS configurations. */
    ens: z
      .object({
        /** ENS registry address. */
        registry: AddressSchema,
      })
      .optional(),
    /** Parent chain configuration. */
    parent: ParentChainSchema.optional(),
    /** Feature supported by the blockchain network. */
    features: z.array(FeatureSchema).optional(),
    /** URL for information about the blockchain network. */
    infoUrl: z.string().url().optional(),
    /** Faucets for providing test tokens. */
    faucets: z.array(FaucetSchema).optional(),
    /** Market data identifiers for external services. */
    marketDataIds: MarketDataIdsSchema.optional(),
    /** Red flags or warnings about the blockchain network. */
    redFlags: z.array(RedFlagSchema).optional(),
    /** Status of the blockchain network. */
    status: StatusSchema.optional(),
  })
  .refine((data) => data.name !== data.shortName, {
    path: ['name', 'slug'],
    message: 'name and shortName must be different.',
  })
