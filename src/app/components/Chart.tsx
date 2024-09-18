'use client'

import { useState } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from 'recharts'

const data = [
  { name: 'IFBB PRO', range: '2-5%', message: "Whoa there, skeleton! Eat a burger!", value: 1 },
  { name: 'ATHLETE', range: '6-13%', message: "Show-off! Save some abs for the rest of us!", value: 1 },
  { name: 'NARP', range: '14-17%', message: "Look at you, Mr. 'I can see my toes'!", value: 1 },
  { name: 'CHUBBY', range: '18-24%', message: "Dad bod alert! It's all good... for now.", value: 1 },
  { name: 'OBESE', range: '>25%', message: "YOU ARE TOO FAT! Time to put down the pizza!", value: 1 },
]

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#FF9FF3']

const renderActiveShape = (props: any) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill } = props

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  )
}

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
}) => {
  const RADIAN = Math.PI / 180;
  const radius = outerRadius + 30;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  const textAnchor = x > cx ? 'start' : 'end';
  const lineX = x + (x > cx ? 15 : -15);

  return (
    <g>
      <text x={lineX} y={y} fill="#333" textAnchor={textAnchor} dominantBaseline="central">
        <tspan x={lineX} dy="0">{data[index].name}</tspan>
        <tspan x={lineX} dy="1.2em" fontSize="0.8em" fill="#666">{data[index].range}</tspan>
      </text>
      <path d={`M${x},${y}L${lineX},${y}`} stroke={COLORS[index % COLORS.length]} fill="none" />
    </g>
  );
};

export default function Chart() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [message, setMessage] = useState('')

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  const onPieClick = (entry: any, index: number) => {
    setMessage(entry.message)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6">Body Fat Categories</h2>
      <div className="h-[400px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={onPieEnter}
              onClick={onPieClick}
              labelLine={false}
              label={renderCustomizedLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      {message && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md text-center">
          <p className="text-lg font-semibold">{message}</p>
        </div>
      )}
    </div>
  )
}