import Header from '../../components/Header'
import DailyLog from '../../components/DailyLog'
import WorkoutLog from '../../components/WorkoutLog'

export default function Log() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header />
      <h1 className="text-4xl font-bold mb-8">Daily Log</h1>
      <DailyLog />
      <WorkoutLog />
    </div>
  )
}