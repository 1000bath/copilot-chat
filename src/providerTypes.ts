export const GO_VENDOR = "dekgo" as const;
export const ZEN_VENDOR = "dekzen" as const;
export const DEKGATEWAY_VENDOR = "dekgateway" as const;
export const AGENT_GO_VENDOR = "dekgo-agent" as const;
export const AGENT_ZEN_VENDOR = "dekzen-agent" as const;

/** Base vendor IDs used for metadata lookups and API routing. */
export type ProviderVendor = typeof GO_VENDOR | typeof ZEN_VENDOR | typeof DEKGATEWAY_VENDOR;

/** All vendor IDs including agent-host variants. */
export type AllProviderVendor = typeof GO_VENDOR | typeof ZEN_VENDOR | typeof DEKGATEWAY_VENDOR | typeof AGENT_GO_VENDOR | typeof AGENT_ZEN_VENDOR;

/** Resolve agent-host vendor variants back to their base vendor for metadata/routing lookups. */
export function resolveBaseVendor(vendor: AllProviderVendor): ProviderVendor {
  if (vendor === AGENT_GO_VENDOR) return GO_VENDOR;
  if (vendor === AGENT_ZEN_VENDOR) return ZEN_VENDOR;
  if (vendor === DEKGATEWAY_VENDOR) return DEKGATEWAY_VENDOR;
  return vendor as ProviderVendor;
}

export interface ProviderRoutingDefinition {
  vendor: AllProviderVendor;
  chatCompletionsUrl: string;
  messagesUrl: string;
  modelsUrl: string;
  responsesUrl?: string;
}
