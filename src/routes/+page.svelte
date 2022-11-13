<script lang="ts">
  import Hero from "../components/home/hero/hero.svelte";
  export let data: any;
</script>

<div>
  {#each data?.data?.sections as section}
    {#if section._type === "landingHero"}
      <Hero data={section} />
    {/if}
  {/each}
</div>
