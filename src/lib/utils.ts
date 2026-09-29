import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { StaticImport } from "next/dist/shared/lib/get-img-props"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * `sizes` value for an image rendered at a fixed CSS height with `w-auto`,
 * where its rendered width is height × aspect ratio. Lets next/image pick a
 * right-sized srcset candidate instead of the full intrinsic width.
 */
export function fixedHeightSizes(
  image: StaticImport | string,
  height: string,
  fallback = "100vw"
) {
  const data = typeof image === "object" && "default" in image ? image.default : image
  if (typeof data !== "object" || !data.width || !data.height) return fallback
  const aspect = (data.width / data.height).toFixed(3)
  return `calc(${height} * ${aspect})`
}
