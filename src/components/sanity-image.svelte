<script lang="ts">
  import getImageProps from "$lib/get-image-props";
  import type { SanityAssetProps } from "$lib/types";

  export let image: SanityAssetProps;
  export let maxWidth = 600 as number | undefined;
  export let sizes = undefined as string | undefined;
</script>

<img
  loading="lazy"
  class={$$restProps.class || ""}
  alt={image.alt || " "}
  {...getImageProps({
    image,
    sizes,
    maxWidth,
  })}
/>
