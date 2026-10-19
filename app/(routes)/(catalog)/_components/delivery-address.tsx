import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { MapPinIcon } from "lucide-react"

export function DeliveryAddress() {
  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Link
            className={buttonVariants({
              variant: "secondary",
            })}
            href="https://maps.app.goo.gl/PYEYLQ9SvK4KkQvY9"
            target="_blank"
          >
            <MapPinIcon />
            UFERSA, PDF
          </Link>
        }
      />

      <TooltipContent>
        <p>Abrir no Google Maps</p>
      </TooltipContent>
    </Tooltip>
  )
}
