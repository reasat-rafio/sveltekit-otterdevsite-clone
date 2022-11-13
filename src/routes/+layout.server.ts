import { client } from "$lib/sanity";
import { error } from "@sveltejs/kit";
import groq from "groq";

const query = groq`*[_id == "site"][0]`;

export const load = async () => {
  const data = await client.fetch(query);

  if (!data) {
    throw error(404, {
      message: "Not found",
    });
  }

  return {
    data,
  };
};
