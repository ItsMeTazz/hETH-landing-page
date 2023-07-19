import './css/style.css'

import { Chakra_Petch } from 'next/font/google'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  title: 'HypnosETH',
  description: 'L0 algo pegged to ETH',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${chakra.variable} font-chakra antialiased bg-white text-zinc-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <Header />
          {children}
          {/* <Banner /> */}
        </div>
      </body>
    </html>
  )
}
