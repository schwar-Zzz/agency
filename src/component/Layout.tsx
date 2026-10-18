import type { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = { children: ReactNode }

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
