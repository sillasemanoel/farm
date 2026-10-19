import { Button } from "@/components/ui/button"
import { ShoppingBagIcon } from "lucide-react"

export function BagButton() {
  return (
    <Button size="icon" variant="outline">
      <ShoppingBagIcon />
    </Button>
  )
}
