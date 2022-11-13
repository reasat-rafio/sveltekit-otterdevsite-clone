<script lang="ts">
  import IntersectionObserver from "svelte-intersection-observer";

  import type { HeroProps } from "$lib/types";
  import { PortableText } from "@portabletext/svelte";
  import PopText from "./pop-text.svelte";

  export let data: HeroProps;
  const { heading, tagline, video } = data;
  let videoEl: HTMLVideoElement;
  let intersecting: boolean;

  $: {
    if (intersecting) {
      videoEl?.play();
    } else {
      videoEl?.pause();
    }
  }
</script>

<section class="max-w-7xl mx-auto py-20 px-5">
  <header class="flex flex-col space-y-5">
    <h1
      class="2xl:text-[80px] xl:text-7xl md:text-5xl text-4xl font-extrabold text-center drop-shadow"
    >
      <PortableText
        value={heading}
        components={{
          marks: {
            pop: PopText,
          },
        }}
      />
    </h1>
    <h2
      class="text-gray-700 text-center lg:text-xl text-base max-w-xl mx-auto leading-loose"
    >
      <PortableText value={tagline} />
    </h2>
  </header>

  <IntersectionObserver element={videoEl} bind:intersecting>
    <video
      preload="auto"
      muted
      playsInline
      loop
      disableRemotePlayback
      bind:this={videoEl}
    >
      <source src={video?.webm} type="video/webm" />
      <source src={video?.hevc} type="video/quicktime" />
    </video>
  </IntersectionObserver>
</section>
