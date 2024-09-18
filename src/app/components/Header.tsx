import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center py-4 mb-8">
      <Link href="/" className="text-2xl font-bold mb-4 sm:mb-0 flex items-center">
        Dads To Daddies
        <Image src="/drool.png" alt="Drool" width={30} height={30} className="ml-2" />
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/story" className="hover:underline">Story</Link></li>
          <li><Link href="/log" className="hover:underline">Log</Link></li>
        </ul>
      </nav>
    </header>
  )
}