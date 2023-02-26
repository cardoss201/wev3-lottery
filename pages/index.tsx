import React from 'react'
import Head from 'next/head'
import { Inter } from '@next/font/google'
import { useAddress, useContract, useContractRead } from '@thirdweb-dev/react'

import Header from '@/components/Header/Header'
import Login from '@/components/LoginScreen/Login'
import Loading from '@/components/LoadingScreen/Loading'
import AdminControls from '@/components/AdminControls/AdminControls'
import WinnerPopUp from '@/components/WinnerPopUp/WinnerPopUp'
import LastWinnerLine from '@/components/LastWinner/LastWinner'
import NextDrawBox from '@/components/NextDrawBox/NextDrawBox'
import TicketPriceBox from '@/components/TicketPriceBox/TicketPriceBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const adress = useAddress()
  const { contract, isLoading } = useContract(
    '0xF1f1632EA91C9143691E218F47A4f60b6DE56550'
  )

  const { data: winnings } = useContractRead(
    contract,
    'getWinningsForAddress',
    adress
  )

  const { data: isAdmin } = useContractRead(contract, 'lotteryOperator')

  if (isLoading) return <Loading />
  if (!adress) return <Login />

  return (
    <div className='bg-[#091B18] min-h-screen flex flex-col'>
      <Head>
        <title>Web 3 lottery</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='flex-1'>
        <Header />

        <LastWinnerLine />

        {isAdmin === adress && (
          <div className='flex justify-center items-center'>
            <AdminControls />
          </div>
        )}

        {winnings > 0 && <WinnerPopUp />}

        <div className='space-y-5 md:space-y-0 m-5 md:flex md:flex-row items-start justify-center md:space-x-5'>
          <NextDrawBox />
          <TicketPriceBox />
        </div>
      </div>
    </div>
  )
}
