import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 DadstoDaddies. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <Link href="https://www.strava.com/athletes/59375532" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Strava</Link>
          <Link href="https://www.linkedin.com/in/harimasoor/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</Link>
          <Link href="https://x.com/notaihari" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">X</Link>
        </div>
      </div>
    </footer>
  )
}