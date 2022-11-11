import { pageQuery } from "$lib/query";
import { client } from "$lib/sanity";
import { error } from "@sveltejs/kit";

const query = `*[_id == "site"][0]`;

export async function load() {
  const data = await client.fetch(query);

  if (!data) {
    throw error(404, {
      message: "Not found",
    });
  }

  return {
    status: 200,
    body: {
      data,
    },
  };
}
