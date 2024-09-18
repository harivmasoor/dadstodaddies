'use client'

import { useState } from 'react'

const WeightMeter = ({ currentWeight }) => {
  const totalHeight = 340
  const width = 60
  const nonFatWeight = 120
  const goals = {
    obesity: 157,
    chubby: 144,
    narp: 138
  }
  const maxWeight = 176  // Set this to your starting weight
  const minWeight = nonFatWeight

  const getY = (weight) => totalHeight - 20 - ((weight - minWeight) / (maxWeight - minWeight)) * (totalHeight - 40)

  return (
    <svg width={width + 100} height={totalHeight} className="mx-auto">
      {/* Weight bar */}
      <rect x="0" y={getY(currentWeight)} width={width} height={getY(goals.obesity) - getY(currentWeight)} fill="#FF0000" />
      <rect x="0" y={getY(goals.obesity)} width={width} height={getY(goals.chubby) - getY(goals.obesity)} fill="#FFFF00" />
      <rect x="0" y={getY(goals.chubby)} width={width} height={getY(goals.narp) - getY(goals.chubby)} fill="#00FF00" />
      <rect x="0" y={getY(goals.narp)} width={width} height={getY(nonFatWeight) - getY(goals.narp)} fill="#808080" />

      {/* Weight markers */}
      <line x1="0" y1={getY(currentWeight)} x2={width} y2={getY(currentWeight)} stroke="black" strokeWidth="2" />
      <text x={width + 5} y={getY(currentWeight)} dominantBaseline="middle" fontSize="12">Current: {currentWeight}lbs</text>

      <line x1="0" y1={getY(goals.obesity)} x2={width} y2={getY(goals.obesity)} stroke="black" strokeDasharray="5,5" />
      <text x={width + 5} y={getY(goals.obesity)} dominantBaseline="middle" fontSize="12">Obesity: {goals.obesity}lbs</text>

      <line x1="0" y1={getY(goals.chubby)} x2={width} y2={getY(goals.chubby)} stroke="black" strokeDasharray="5,5" />
      <text x={width + 5} y={getY(goals.chubby)} dominantBaseline="middle" fontSize="12">Chubby: {goals.chubby}lbs</text>

      <line x1="0" y1={getY(goals.narp)} x2={width} y2={getY(goals.narp)} stroke="black" strokeDasharray="5,5" />
      <text x={width + 5} y={getY(goals.narp)} dominantBaseline="middle" fontSize="12">NARP: {goals.narp}lbs</text>

      <line x1="0" y1={getY(nonFatWeight)} x2={width} y2={getY(nonFatWeight)} stroke="black" strokeDasharray="5,5" />
      <text x={width + 5} y={getY(nonFatWeight)} dominantBaseline="middle" fontSize="12">Non-fat: {nonFatWeight}lbs</text>
    </svg>
  )
}

export default function DailyLog() {
  const [entries, setEntries] = useState([
    { date: '2024-09-17', weight: 176, notes: 'Starting my journey!' },
  ])

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Weight Progress Meters</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {entries.map((entry, index) => (
            <div key={index} className="text-center">
              <p className="font-semibold">{entry.date}</p>
              <WeightMeter currentWeight={entry.weight} />
              <p className="mt-2">Weight: {entry.weight} lbs</p>
              <p className="text-sm text-gray-600">{entry.notes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}