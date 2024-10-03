'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ExerciseData {
  exercise: string;
  nico?: number;
  hari?: number;
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
    date: 'Sep 21-26, 2024',
    pullups: { exercise: 'Slow dead-hang pull-ups', nico: 13 },
    squats: { exercise: 'Squat (225lb)', nico: 8 },
    dips: { exercise: 'Dips (body weight)', nico: 28 },
  },
  {
    week: 2,
    date: 'Oct 1, 2024',
    pullups: { exercise: 'Pull-ups', nico: 12, hari: 3 },
    squats: { exercise: 'Squats (135lb)', hari: 10 },
    dips: { exercise: 'Dips', nico: 23, hari: 7 },
  },
]

const WorkoutLog = () => {
  const chartData = workoutData.flatMap(week => [
    { name: `Week ${week.week} Pullups`, Nico: week.pullups.nico, Hari: week.pullups.hari },
    { name: `Week ${week.week} Squats`, Nico: week.squats.nico, Hari: week.squats.hari },
    { name: `Week ${week.week} Dips`, Nico: week.dips.nico, Hari: week.dips.hari },
  ])

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
                <td className="p-2">{week.squats.exercise}</td>
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
      <div className="mt-8 h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
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