import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "ke6tbdpi",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

export default client;
