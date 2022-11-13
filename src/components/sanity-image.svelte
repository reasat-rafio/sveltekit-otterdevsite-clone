<script lang="ts">
  import getImageProps from "$lib/get-image-props";
  import type { SanityAssetProps } from "$lib/types";

  export let image: SanityAssetProps;
</script>

<img
  loading="lazy"
  alt={image.alt || " "}
  {...getImageProps({
    image,
    maxWidth: 600,
  })}
/>
