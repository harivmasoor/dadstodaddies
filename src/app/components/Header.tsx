'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

interface NavItem {
  name: string;
  path: string;
}

const allNavItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Story', path: '/story' },
  { name: "Nico's Story", path: '/nicos-story' },
  { name: 'Log', path: '/log' },
  { name: 'App Stack', path: '/app-stack' },
  { name: 'Gallery', path: '/gallery' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="flex flex-col sm:flex-row justify-between items-center py-4 mb-8">
      <Link href="/" className="text-2xl font-bold mb-4 sm:mb-0 flex items-center">
        Dads To Daddies
        <Image src="/drool.png" alt="Drool" width={30} height={30} className="ml-2" />
      </Link>
      <nav className="w-full sm:w-auto">
        <ul className="flex flex-wrap justify-center sm:justify-end items-center -mx-2">
          {allNavItems.map((item) => (
            <li key={item.path} className="px-2 mb-2 sm:mb-0">
              <Link href={item.path} className={`hover:underline ${pathname === item.path ? 'font-bold' : ''}`}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}