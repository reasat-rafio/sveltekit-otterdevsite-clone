<script lang="ts">
  import "../app.css";
  import type { SiteProps } from "$lib/types";
  import Navbar from "../components/navbar.svelte";

  export let data: SiteProps;
  const { data: navData } = data;
</script>

<main>
  <Navbar {navData} />

  <slot />
</main>
