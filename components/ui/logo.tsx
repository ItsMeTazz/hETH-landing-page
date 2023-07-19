import Image from 'next/image'
import Link from 'next/link'
import logo from '@/public/images/hETH.svg'

export default function Logo() {
  return (
    <Link href="/" className="flex gap-2 items-center" aria-label="HypnosETH">
      <Image src={logo} height={50} alt="logo" />
      <h1 className='text-lg font-bold'>Hypnos<span className='text-purple-500'>ETH</span></h1>
    </Link>
  )
}
