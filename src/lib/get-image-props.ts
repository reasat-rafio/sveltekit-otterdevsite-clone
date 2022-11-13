import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "./get-image-dimensions";
import type { IGetImage } from "./types";

export const imageBuilder = imageUrlBuilder({
  projectId: "kbz1tcxy",
  dataset: "production",
});

const LARGEST_VIEWPORT = 1920;
const DEFAULT_MIN_STEP = 0.1; // 10%
const DEFAULT_WIDTH_STEPS = [400, 600, 850, 1000, 1150]; //
const DEFAULT_FULL_WIDTH_STEPS = [360, 414, 768, 1366, 1536, 1920];

export default function getImageProps({
  image,
  maxWidth: userMaxWidth,
  minimumWidthStep = DEFAULT_MIN_STEP,
  customWidthSteps,
  sizes,
}: IGetImage) {
  if (!image?.asset?._ref) {
    return {};
  }
  const maxWidth: string | number =
    typeof userMaxWidth === "number" ? userMaxWidth : LARGEST_VIEWPORT;

  const builder = imageBuilder.image(image).fit("max").auto("format");

  const imageDimensions = getImageDimensions(image);

  const baseSizes = [
    maxWidth,
    ...(customWidthSteps ||
      (typeof userMaxWidth === "number"
        ? DEFAULT_WIDTH_STEPS
        : DEFAULT_FULL_WIDTH_STEPS)),
  ];
  const retinaSizes = Array.from(
    new Set([
      ...baseSizes,
      ...baseSizes.map((size) => size * 2),
      ...baseSizes.map((size) => size * 3),
    ])
  )
    .sort((a, b) => a - b)
    .filter(
      (size) => size <= imageDimensions?.width * 1.1 && size <= maxWidth * 3
    )

    .filter((size, i, arr) => {
      const nextSize = arr[i + 1];
      if (nextSize) {
        return nextSize / size > minimumWidthStep + 1;
      }

      return true;
    });

  return {
    src: builder.width(maxWidth).url(),

    srcset: retinaSizes
      .map((size) => `${builder.width(size).url()} ${size}w`)
      .join(", "),
    sizes:
      maxWidth === "100vw"
        ? "100vw"
        : sizes || `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`,

    // Let's also tell the browser what's the size of the image so it can calculate aspect ratios
    width: retinaSizes[0],
    height: retinaSizes[0] / imageDimensions!.aspectRatio,
  };
}
