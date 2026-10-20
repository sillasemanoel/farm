import type { Metadata } from "next"

import { Section } from "@/components/shared/template"
import { config } from "@/config"
import { ProductItem } from "./_components/product-item"

export const metadata: Metadata = {
  title: config.brand.name,
}

export default function HomePage() {
  return (
    <Section title="Catálogo">
      <ProductItem />
    </Section>
  )
}
