import { DrawerDialog } from "@/components/shared/drawer-dialog"
import { BagButton } from "./bag-button"
import { BagEmpty } from "./bag-empty"

export function Bag() {
  return (
    <DrawerDialog render={<BagButton />} title="Sua sacola">
      <BagEmpty />
    </DrawerDialog>
  )
}
