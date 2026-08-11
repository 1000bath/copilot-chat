export type DekEndpointKind = "chat-completions" | "messages" | "responses" | "google";

export function buildDekGatewayAuthHeaders(endpointKind: DekEndpointKind, apiKey: string): Record<string, string> {
  if (endpointKind === "messages") {
    return {
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    };
  }

  if (endpointKind === "google") {
    return {
      "x-goog-api-key": apiKey,
    };
  }

  return {
    Authorization: `Bearer ${apiKey}`,
  };
}
