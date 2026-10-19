import { Copyright } from "@/components/shared/copyright"

import { Logo } from "@/components/shared/logo"
import { Footer, Header, Main, Template } from "@/components/shared/template"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { Bag } from "./_components/bag"
import { DeliveryAddress } from "./_components/delivery-address"

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Template>
      <Header>
        <Logo href="/" />

        <nav className="flex flex-1" />

        <DeliveryAddress />

        <Bag />

        <ThemeToggle />
      </Header>

      <Main>{children}</Main>

      <Footer>
        <Copyright />
      </Footer>
    </Template>
  )
}
