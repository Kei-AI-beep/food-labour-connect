
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { name: '作業環境の不一致', value: 42, color: '#10b981' },
  { name: '業務内容の相違', value: 28, color: '#0ea5e9' },
  { name: '労働時間・シフトの問題', value: 17, color: '#f59e0b' },
  { name: 'コミュニケーション不足', value: 13, color: '#8b5cf6' },
];

const ResearchChart = () => {
  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value}%`, '離職理由の割合']}
            contentStyle={{ backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          />
          <Legend 
            layout="vertical" 
            verticalAlign="middle" 
            align="right"
            wrapperStyle={{ fontSize: '12px', paddingLeft: '20px' }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center text-sm text-gray-500 mt-4">
        ※食品・農業分野における入社3ヶ月以内の離職理由調査（当社調べ）
      </div>
    </div>
  );
};

export default ResearchChart;
