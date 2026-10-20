import Image from "next/image"

import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { MinusIcon, PlusIcon } from "lucide-react"

export function BagItem() {
  return (
    <ItemGroup>
      <Item variant="outline">
        <ItemMedia variant="image">
          <Image
            alt="Placeholder"
            className="object-cover"
            height={40}
            src="/assets/placeholder.svg"
            width={40}
          />
        </ItemMedia>

        <ItemContent>
          <ItemTitle className="line-clamp-1">Ovos Caipiras</ItemTitle>

          <ItemDescription>Extra Grandes</ItemDescription>
        </ItemContent>

        <ItemActions className="flex flex-col items-end">
          <ItemTitle>R$ 12,00</ItemTitle>

          <ButtonGroup>
            <Button size="icon-xs" variant="outline">
              <MinusIcon />
            </Button>

            <Input className="h-6 w-11 text-center" />

            <Button size="icon-xs" variant="outline">
              <PlusIcon />
            </Button>
          </ButtonGroup>
        </ItemActions>
      </Item>
    </ItemGroup>
  )
}
