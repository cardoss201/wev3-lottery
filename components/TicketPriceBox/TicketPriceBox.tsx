import React from 'react'
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react'

import TicketInput from './TicketInput'
import FeeAndServiceInfo from './FeeAndServiceInfo'
import BuyTicketsButton from './BuyTicketsButton'
import UserTickets from './UserTickets'

const TicketPriceBox = () => {
  const [quantity, setQuantity] = React.useState<number>(0)
  const [userTickets, setUserTickets] = React.useState<number>(0)
  const adress = useAddress()
  const { contract } = useContract('0xF1f1632EA91C9143691E218F47A4f60b6DE56550')
  const { data: tickets } = useContractRead(contract, 'getTickets')

  React.useEffect(() => {
    if (!tickets) return

    const totlaTickets: string[] = tickets

    const userTickets = totlaTickets.reduce(
      (acc, ticketAdress) => (ticketAdress === adress ? acc + 1 : acc),
      0
    )

    setUserTickets(userTickets)
  }, [tickets, adress])

  return (
    <div className='stats-container space-y-2'>
      <div className='stats-container'>
        <TicketInput
          ticketQuantity={quantity}
          setTicketQuantity={setQuantity}
        />

        <FeeAndServiceInfo ticketQuantity={quantity} />

        <BuyTicketsButton ticketQuantity={quantity} />
      </div>
      {userTickets > 0 && <UserTickets usersTickets={userTickets} />}
    </div>
  )
}

export default TicketPriceBox
