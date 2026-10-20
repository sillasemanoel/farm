import { DrawerDialog } from "@/components/shared/drawer-dialog"
import { BagButton } from "./bag-button"
import { BagEmpty } from "./bag-empty"
import { BagItem } from "./bag-item"

export function Bag() {
  const isEmpty = false

  return (
    <DrawerDialog render={<BagButton />} title="Sua sacola">
      {isEmpty ? <BagEmpty /> : <BagItem />}
    </DrawerDialog>
  )
}
