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
        <Link href="/log" className="btn btn-secondary w-full sm:w-auto text-center">Daily Log</Link>
      </div>
      <a href="https://discord.gg/BK4zkTEN" className="btn btn-discord mt-8 block text-center max-w-xs mx-auto">Join our Discord</a>
    </main>
  )
}