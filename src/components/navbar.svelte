<script lang="ts">
  import { fade } from "svelte/transition";
  import type { SiteProps } from "$lib/types";
  import SanityImage from "./sanity-image.svelte";
  export let navData: SiteProps["data"];

  let visible = false;
  let y: number;

  const onMenuItemHoverAction = (submenu: boolean) => {
    if (submenu) visible = true;
    else visible = false;
  };
</script>

<svelte:window bind:scrollY={y} />
<nav
  class="z-50 mx-auto | px-5 | bg-white/20 | sticky top-0 left-0 | backdrop-blur-md | transition-all duration-300 ease-in-out {y
    ? 'py-5 shadow-lg'
    : 'py-10'}"
>
  <div class="relative | flex items-center container mx-auto">
    <a class="flex-1" href="/">
      <figure class="h-10">
        <SanityImage
          class="h-full w-fit object-contain"
          image={navData.logo}
          maxWidth={100}
        />
      </figure>
    </a>

    <ul class=" lg:space-x-8 space-x-4 sm:flex hidden">
      {#each navData.menu as { title, slug, submenu, highlight }}
        <li class="font-semibold text-base">
          {#if highlight}
            <a
              class="bg-blue-600 hover:bg-black text-white px-3 py-2 rounded-3xl transition-all duration-300"
              href={slug.current}>{title}</a
            >
          {:else}
            <a
              on:mouseenter={() =>
                onMenuItemHoverAction(Boolean(submenu?.length))}
              href={slug.current}>{title}</a
            >
          {/if}

          {#if submenu?.length && visible}
            <div
              on:mouseleave={() => (visible = false)}
              transition:fade
              class="absolute bottom-0 right-0 translate-y-[150%] | w-full containe | flex justify-end "
            >
              <ul
                class="flex space-x-8  bg-white rounded-2xl px-8 py-5 | shadow-xl"
              >
                {#each submenu as { title, slug }}
                  <li class="flex">
                    <a class="flex " href={slug?.current}>{title}</a>
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</nav>
