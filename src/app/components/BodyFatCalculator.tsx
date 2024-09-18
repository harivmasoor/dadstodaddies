'use client'

import { useState } from 'react'

export default function BodyFatCalculator() {
  const [weight, setWeight] = useState('')
  const [nonFatWeight, setNonFatWeight] = useState('')
  const [bodyFatPercentage, setBodyFatPercentage] = useState<number | null>(null)
  const [category, setCategory] = useState('')

  const calculateBodyFat = () => {
    const w = parseFloat(weight)
    const nfw = parseFloat(nonFatWeight)
    if (w && nfw) {
      const bfp = ((w - nfw) / w) * 100
      setBodyFatPercentage(bfp)
      setCategory(getCategory(bfp))
    }
  }

  const getCategory = (bfp: number) => {
    if (bfp <= 5) return 'Essential fat'
    if (bfp <= 13) return 'Athletes'
    if (bfp <= 17) return 'Fitness'
    if (bfp <= 24) return 'Acceptable'
    return 'Obesity'
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Body Fat Calculator</h2>
      <input
        type="number"
        placeholder="Total Weight (kg)"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="input input-bordered w-full mb-4 p-2 rounded"
      />
      <input
        type="number"
        placeholder="Non-Fat Weight (kg)"
        value={nonFatWeight}
        onChange={(e) => setNonFatWeight(e.target.value)}
        className="input input-bordered w-full mb-4 p-2 rounded"
      />
      <button onClick={calculateBodyFat} className="btn btn-primary w-full py-2 rounded">
        Calculate
      </button>
      {bodyFatPercentage !== null && (
        <div className="mt-6">
          <p className="text-xl">Body Fat Percentage: <span className="font-bold">{bodyFatPercentage.toFixed(2)}%</span></p>
          <p className="text-xl">Category: <span className="font-bold">{category}</span></p>
        </div>
      )}
    </div>
  )
}