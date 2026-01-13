import { Congrats } from "./congrats"
import { TicketGenerado } from "./ticket-generado"

export const ConfirmationPage = () => {
  return (
    <section>
      <Congrats/>
      <TicketGenerado/>
    </section>
  )
}