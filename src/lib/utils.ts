import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number | string, options: {
  currency?: "USD" | "EUR" | "GBP" | "BDT" | "SGD",
  notation?: Intl.NumberFormatOptions["notation"],
} = {}) {
  const { currency = "SGD", notation = "compact" } = options

  const numericPrice = typeof price === "string" ? parseFloat(price) : price

  return Intl.NumberFormat("en-US", { style: "currency", currency, notation, maximumFractionDigits: 2 }).format(numericPrice)
}

export function constructMetadata({
  title = 'RendezVibes - Where Music Unites Hearts and Beats.',
  description = 'RendezVibes is a place to share your love for music.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
  noIndex = false,
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@joshtriedcoding',
    },
    icons,
    metadataBase: new URL('https://digitalhippo.up.railway.app'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  }
}