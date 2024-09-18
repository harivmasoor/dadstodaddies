'use client'

import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts'

interface Entry {
  date: string;
  weight: number;
}

const entries: Entry[] = [
  { date: '2024-09-18', weight: 176 }
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
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px', fontSize: '0.9em' }}>
      <div style={{ marginRight: '15px' }}><span style={{ color: 'green', marginRight: '5px' }}>●</span>Non-fat (120 lbs)</div>
      <div style={{ marginRight: '15px' }}><span style={{ color: 'yellow', marginRight: '5px' }}>●</span>NARP (138 lbs)</div>
      <div style={{ marginRight: '15px' }}><span style={{ color: 'orange', marginRight: '5px' }}>●</span>Chubby (144 lbs)</div>
      <div><span style={{ color: 'red', marginRight: '5px' }}>●</span>Obese (157 lbs)</div>
    </div>
  )

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-2">Latest Entry</h2>
        <p>Date: {latestEntry.date}</p>
        <p>Weight: {latestEntry.weight} lbs</p>
        <p>Category: {getWeightCategory(latestEntry.weight)}</p>
      </div>

      <CustomLegend />

      <div style={{ width: '100%', height: 400, minWidth: 700 }}>
        <ResponsiveContainer>
          <BarChart data={entries} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
            <XAxis dataKey="date" tick={{ fill: 'black' }} />
            <YAxis domain={[120, 180]} tick={{ fill: 'black' }} />
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