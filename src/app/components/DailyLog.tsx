'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts'

interface Entry {
  date: string;
  weight: number;
}

const entries: Entry[] = [
  { date: '2024-09-17', weight: 176.6 },
  { date: '2024-09-18', weight: 176.2 },
  { date: '2024-09-19', weight: 176.6 },
  { date: '2024-09-20', weight: 176.6 },
  { date: '2024-09-25', weight: 175.2 },
  { date: '2024-09-27', weight: 175.6 },
  { date: '2024-10-01', weight: 175.2 },
  { date: '2024-10-02', weight: 176 },
  { date: '2024-10-08', weight: 175.4 },
  { date: '2024-10-12', weight: 174.2 },
  { date: '2024-10-18', weight: 173.8 },
  { date: '2024-11-16', weight: 173.2 },
  { date: '2024-11-17', weight: 170.6 },
  { date: '2024-11-18', weight: 168.8 },
  // Add more entries here as you progress
]

const DailyLog = () => {
  const latestEntry = entries[entries.length - 1]

  const getWeightCategory = (weight: number) => {
    if (weight > 157) return 'Obese'
    if (weight > 144) return 'Chubby'
    if (weight > 138) return 'NARP'
    return 'Fit'
  }

  const CustomLegend = () => (
    <div className="flex flex-wrap justify-center mb-4 text-xs sm:text-sm">
      <div className="mr-2 sm:mr-4 mb-1"><span className="text-green-500 mr-1">●</span>Non-fat (120 lbs)</div>
      <div className="mr-2 sm:mr-4 mb-1"><span className="text-yellow-500 mr-1">●</span>NARP (138 lbs)</div>
      <div className="mr-2 sm:mr-4 mb-1"><span className="text-orange-500 mr-1">●</span>Chubby (144 lbs)</div>
      <div className="mb-1"><span className="text-red-500 mr-1">●</span>Obese (157 lbs)</div>
    </div>
  )

  return (
    <div className="p-4">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Latest Entry</h2>
        <p className="text-sm sm:text-base">Date: {latestEntry.date}</p>
        <p className="text-sm sm:text-base">Weight: {latestEntry.weight} lbs</p>
        <p className="text-sm sm:text-base">Category: {getWeightCategory(latestEntry.weight)}</p>
      </div>

      <CustomLegend />

      <div className="w-full h-[300px] sm:h-[400px] overflow-x-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={entries} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <XAxis dataKey="date" tick={{ fill: 'black', fontSize: '0.75rem' }} />
            <YAxis domain={[120, 180]} tick={{ fill: 'black', fontSize: '0.75rem' }} />
            <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="weight" fill="#8884d8" />
            <ReferenceLine y={120} stroke="green" strokeWidth={2} />
            <ReferenceLine y={138} stroke="yellow" strokeWidth={2} />
            <ReferenceLine y={144} stroke="orange" strokeWidth={2} />
            <ReferenceLine y={157} stroke="red" strokeWidth={2} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DailyLog