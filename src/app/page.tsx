import Header from './components/Header'
import BodyFatCalculator from './components/BodyFatCalculator'
import Chart from './components/Chart'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <Header />
      <h1 className="text-5xl font-bold mb-8 text-center">DadstoDaddies</h1>
      <p className="text-xl mb-12 text-center">Empowering fathers to reclaim their health, one step at a time.</p>
      <div className="grid md:grid-cols-2 gap-8">
        <BodyFatCalculator />
        <Chart />
      </div>
      <div className="mt-12 flex justify-center space-x-4">
        <Link href="/story" className="btn btn-primary">My Story</Link>
        <Link href="/log" className="btn btn-secondary">Daily Log</Link>
      </div>
      <a href="https://discord.gg/BK4zkTEN" className="btn btn-discord mt-8 block text-center max-w-xs mx-auto">Join our Discord</a>
    </main>
  )
}