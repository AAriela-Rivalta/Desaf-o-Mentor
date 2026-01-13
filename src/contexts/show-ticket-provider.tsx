import { useState, type ReactNode } from "react"
import { ShowTicketContext } from "./show-ticket"

interface ShowTicketsProviderProps {
  children: ReactNode;
}

export const ShowTicketProvider = ({children}: ShowTicketsProviderProps) => {

  const [showTicket, setShowTicket] = useState<boolean>(false)

  return (
    <ShowTicketContext.Provider value={{
      showTicket,
      setShowTicket
    }}>
      {children}
    </ShowTicketContext.Provider>
  )
}