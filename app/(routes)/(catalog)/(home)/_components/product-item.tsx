import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "@/components/ui/item"
import { config } from "@/config"
import { PlusIcon } from "lucide-react"

export function ProductItem() {
  return (
    <ItemGroup className="grid grid-cols-2">
      {config.product.map((item) => (
        <Item className="p-2" key={item.name} variant="outline">
          <ItemHeader>
            <Image
              alt={item.image[0].alt}
              className="aspect-square w-full rounded-lg object-cover"
              height={128}
              src={item.image[0].src}
              width={128}
            />
          </ItemHeader>

          <ItemContent>
            <ItemTitle>{item.name}</ItemTitle>

            <ItemDescription>{item.description}</ItemDescription>
          </ItemContent>

          <ItemFooter>
            <ItemTitle>{`R$ ${item.price}`}</ItemTitle>

            <Button size="icon">
              <PlusIcon />
            </Button>
          </ItemFooter>
        </Item>
      ))}
    </ItemGroup>
  )
}
