import React from 'react'
import { useAddress, useDisconnect } from '@thirdweb-dev/react'

import NavButton from '../UI/NavButton'
import { Bars3BottomRightIcon } from '@heroicons/react/24/solid'

const Header = () => {
  const adress = useAddress()
  const disconnect = useDisconnect()
  return (
    <header className='grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5'>
      <div className='flex items-center space-x-3'>
        <img
          className='h-20 w-20 rounded-full hover:opacity-70 cursor-pointer'
          onClick={disconnect}
          alt='profile picture'
          src={`https://api.dicebear.com/5.x/bottts/svg?seed=${adress}&backgroundColor=b6e3f4`}
        />

        <div>
          <h1 className='text-lg text-white font-bold'>Dmitrij's Draw</h1>
          <p className='text-xs text-emerald-500 truncate'>
            user: {adress?.substring(0, 5)}...
            {adress?.substring(adress.length, adress.length - 5)}
          </p>
        </div>
      </div>

      <div className='hidden md:flex md:col-span-3 items-center justify-center'>
        <div className='bg-[#0A1F1C] p-4 space-x-2 rounded-md'>
          <NavButton title='But ticket' isActive />
          <NavButton onClick={disconnect} title='Log Out' />
        </div>
      </div>

      <div className='flex flex-col ml-auto text-right'>
        <Bars3BottomRightIcon className='h-8 w-8 mx-auto text-white cursor-pointer' />
        <span className='md:hidden'>
          <NavButton onClick={disconnect} title='Log Out' />
        </span>
      </div>
    </header>
  )
}

export default Header
