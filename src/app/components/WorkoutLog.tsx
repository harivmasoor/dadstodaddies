'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ExerciseData {
  exercise: string;
  nico?: number;
  hari?: number;
  weight?: number;
}

interface WeekData {
  week: number;
  date: string;
  pullups: ExerciseData;
  squats: ExerciseData;
  dips: ExerciseData;
}

const workoutData: WeekData[] = [
  {
    week: 1,
    date: 'Sep 24, 2024',
    pullups: { exercise: 'Slow dead-hang pull-ups', nico: 13 },
    squats: { exercise: 'Squat', nico: 8, weight: 225 },
    dips: { exercise: 'Dips (body weight)', nico: 28 },
  },
  {
    week: 2,
    date: 'Oct 1, 2024',
    pullups: { exercise: 'Pull-ups', nico: 12, hari: 3 },
    squats: { exercise: 'Squat', hari: 10, weight: 135 },
    dips: { exercise: 'Dips', nico: 23, hari: 7 },
  },
]

const WorkoutLog = () => {
  const chartData = [
    { exercise: 'Pull-ups', Nico: workoutData[0].pullups.nico, Hari: workoutData[1].pullups.hari },
    { exercise: 'Squats', Nico: workoutData[0].squats.nico, Hari: workoutData[1].squats.hari },
    { exercise: 'Dips', Nico: workoutData[0].dips.nico, Hari: workoutData[1].dips.hari },
  ]

  const colors = {
    'Pull-ups': '#8884d8',
    'Squats': '#82ca9d',
    'Dips': '#ffc658'
  }

  const getMaxLifts = () => {
    const maxLifts = {
      nico: { pullups: 0, squats: { reps: 0, weight: 0 }, dips: 0 },
      hari: { pullups: 0, squats: { reps: 0, weight: 0 }, dips: 0 }
    }

    workoutData.forEach(week => {
      if (week.pullups.nico && week.pullups.nico > maxLifts.nico.pullups) maxLifts.nico.pullups = week.pullups.nico
      if (week.pullups.hari && week.pullups.hari > maxLifts.hari.pullups) maxLifts.hari.pullups = week.pullups.hari

      if (week.squats.nico && week.squats.nico > maxLifts.nico.squats.reps) {
        maxLifts.nico.squats = { reps: week.squats.nico, weight: week.squats.weight || 0 }
      }
      if (week.squats.hari && week.squats.hari > maxLifts.hari.squats.reps) {
        maxLifts.hari.squats = { reps: week.squats.hari, weight: week.squats.weight || 0 }
      }

      if (week.dips.nico && week.dips.nico > maxLifts.nico.dips) maxLifts.nico.dips = week.dips.nico
      if (week.dips.hari && week.dips.hari > maxLifts.hari.dips) maxLifts.hari.dips = week.dips.hari
    })

    return maxLifts
  }

  const maxLifts = getMaxLifts()

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Workout Log</h2>
      {workoutData.map((week, index) => (
        <div key={week.week} className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Week {week.week} - {week.date}</h3>
          <table className="w-full mb-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Exercise</th>
                <th className="p-2 text-left">Nico</th>
                <th className="p-2 text-left">Hari</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">{week.pullups.exercise}</td>
                <td className="p-2">{week.pullups.nico || '-'}</td>
                <td className="p-2">{week.pullups.hari || '-'}</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="p-2">{week.squats.exercise} ({week.squats.weight}lb)</td>
                <td className="p-2">{week.squats.nico || '-'}</td>
                <td className="p-2">{week.squats.hari || '-'}</td>
              </tr>
              <tr>
                <td className="p-2">{week.dips.exercise}</td>
                <td className="p-2">{week.dips.nico || '-'}</td>
                <td className="p-2">{week.dips.hari || '-'}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Max Lifts</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Exercise</th>
              <th className="p-2 text-left">Nico</th>
              <th className="p-2 text-left">Hari</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Pull-ups</td>
              <td className="p-2">{maxLifts.nico.pullups}</td>
              <td className="p-2">{maxLifts.hari.pullups}</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="p-2">Squats</td>
              <td className="p-2">{maxLifts.nico.squats.reps} ({maxLifts.nico.squats.weight}lb)</td>
              <td className="p-2">{maxLifts.hari.squats.reps} ({maxLifts.hari.squats.weight}lb)</td>
            </tr>
            <tr>
              <td className="p-2">Dips</td>
              <td className="p-2">{maxLifts.nico.dips}</td>
              <td className="p-2">{maxLifts.hari.dips}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-8 h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="exercise" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Nico" fill="#8884d8" />
            <Bar dataKey="Hari" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default WorkoutLog