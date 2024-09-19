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
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">Body Fat Calculator</h2>
      <input
        type="number"
        placeholder="Total Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        className="input input-bordered w-full mb-3 sm:mb-4 p-2 rounded text-sm sm:text-base"
      />
      <input
        type="number"
        placeholder="Non-Fat Weight"
        value={nonFatWeight}
        onChange={(e) => setNonFatWeight(e.target.value)}
        className="input input-bordered w-full mb-3 sm:mb-4 p-2 rounded text-sm sm:text-base"
      />
      <button onClick={calculateBodyFat} className="btn btn-primary w-full py-2 rounded text-sm sm:text-base">
        Calculate
      </button>
      {bodyFatPercentage !== null && (
        <div className="mt-4 sm:mt-6">
          <p className="text-lg sm:text-xl">Body Fat Percentage: <span className="font-bold">{bodyFatPercentage.toFixed(2)}%</span></p>
          <p className="text-lg sm:text-xl">Category: <span className="font-bold">{category}</span></p>
        </div>
      )}
    </div>
  )
}