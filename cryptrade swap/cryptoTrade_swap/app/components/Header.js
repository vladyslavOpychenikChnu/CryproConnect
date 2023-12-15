import React, { useEffect, useState } from 'react'
import TokenBalance from './TokenBalance'

import { useAccount } from 'wagmi'

import toast, { Toaster } from 'react-hot-toast'


const Header = () => {
  const [tokenBalComp, setTokenBalComp] = useState()

  const { address } = useAccount()

  const notifyConnectWallet = () =>
    toast.error('Connect wallet.', { duration: 2000 })

  useEffect(() => {
    setTokenBalComp(
      <>
        <TokenBalance name={'CoinA'} walletAddress={address} />
        <TokenBalance name={'CoinB'} walletAddress={address} />
        <TokenBalance name={'CoinC'} walletAddress={address} />
      </>,
    )

    if (!address) notifyConnectWallet()
  }, [address])

  return (
    <div className='w-900 px-8 py-4 flex items-center justify-between pt-10'>
      

      <div className='flex items-center'>{tokenBalComp}</div>

      
    </div>
  )
}

export default Header
