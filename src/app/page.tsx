import Header from './components/Header'
import BodyFatCalculator from './components/BodyFatCalculator'
import Chart from './components/Chart'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Header />
      <p className="text-lg md:text-xl mb-8 md:mb-12 text-center font-bold">
        Empowering fathers to reclaim their health, one step at a time.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        <BodyFatCalculator />
        <Chart />
      </div>
      <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link href="/story" className="btn btn-primary w-full sm:w-auto text-center">My Story</Link>
        <Link href="/nicos-story" className="btn btn-primary w-full sm:w-auto text-center">Nico's Story</Link>
        <Link href="/log" className="btn btn-secondary w-full sm:w-auto text-center">Daily Log</Link>
        <Link href="/app-stack" className="btn btn-secondary w-full sm:w-auto text-center">My App Stack</Link>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a href="https://discord.gg/BK4zkTEN" className="btn btn-discord w-full sm:w-auto text-center">Join our Discord</a>
        <a href="https://x.com/i/communities/1836602551300735382" className="btn btn-primary w-full sm:w-auto text-center">Join X Community</a>
      </div>
    </main>
  )
}