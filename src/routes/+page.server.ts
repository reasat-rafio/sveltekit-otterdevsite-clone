import { client } from "$lib/sanity";
import { error } from "@sveltejs/kit";
import groq from "groq";

const query = groq`
    *[_id == "landingPage"][0] {
      ...,
      sections[] {
        ...,
        "service": service->title,
        "video": video {
          "webm": video_webm.asset->url,
          "hevc": video_hevc.asset->url
        },
        awards[]-> {
          ...,
        },
        clients[]-> {
          ...,
        },
        items[]-> {
          ...,
        },
      }
    }`;

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
