import Link from 'next/link'

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 mb-8">
      <Link href="/" className="text-2xl font-bold">Dads To Daddies</Link>
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