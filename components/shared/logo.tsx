import Image from "next/image"
import Link from "next/link"

import { config } from "@/config"

export function Logo({
  href = "#",
  size = 50,
}: {
  href?: string
  size?: number
}) {
  return (
    <Link className="flex w-fit flex-none" href={href}>
      <Image
        alt={config.brand.image.alt}
        height={size}
        priority
        src={config.brand.image.src}
        width={size}
      />
    </Link>
  )
}
