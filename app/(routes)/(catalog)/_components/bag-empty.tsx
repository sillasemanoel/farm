import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { EggFriedIcon } from "lucide-react"

export function BagEmpty() {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <EggFriedIcon />
        </EmptyMedia>

        <EmptyTitle>Sacola vazia</EmptyTitle>

        <EmptyDescription>
          Adicione ovos à sua sacola para começar a pedir.
        </EmptyDescription>
      </EmptyHeader>
    </Empty>
  )
}
