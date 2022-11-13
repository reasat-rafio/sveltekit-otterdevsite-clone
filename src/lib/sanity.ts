import sanityClient from "@sanity/client";
import {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_API_TOKEN,
} from "$env/static/private";

export const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  useCdn: false,
  token: SANITY_API_TOKEN,
  apiVersion: "2021-08-31",
});
