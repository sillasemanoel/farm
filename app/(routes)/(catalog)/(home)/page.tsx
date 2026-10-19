import type { Metadata } from "next"

import { Section } from "@/components/shared/template"
import { config } from "@/config"

export const metadata: Metadata = {
  title: config.brand.name,
}

export default function HomePage() {
  return <Section title="Catálogo">Section</Section>
}
