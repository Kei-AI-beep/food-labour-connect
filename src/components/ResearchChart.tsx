
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { useIsMobile } from '@/hooks/use-mobile';

const data = [
  { name: '作業環境の不一致', value: 42, color: '#10b981' },
  { name: '業務内容の相違', value: 28, color: '#0ea5e9' },
  { name: '労働時間・シフトの問題', value: 17, color: '#f59e0b' },
  { name: 'コミュニケーション不足', value: 13, color: '#8b5cf6' },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name }, isMobile) => {
  // モバイル表示の場合はラベルを非表示に
  if (isMobile) return null;
  
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="white" 
      textAnchor={x > cx ? 'start' : 'end'} 
      dominantBaseline="central"
      fontSize={12}
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ResearchChart = () => {
  const isMobile = useIsMobile();
  
  // モバイル用のレイアウト調整
  const chartHeight = isMobile ? 220 : 300;
  const outerRadius = isMobile ? 60 : 80;
  
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height={chartHeight}>
        <PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={outerRadius}
            fill="#8884d8"
            dataKey="value"
            label={(props) => renderCustomizedLabel(props, isMobile)}
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
            layout={isMobile ? "horizontal" : "vertical"} 
            verticalAlign={isMobile ? "bottom" : "middle"} 
            align={isMobile ? "center" : "right"}
            wrapperStyle={isMobile 
              ? { fontSize: '10px', paddingTop: '10px' } 
              : { fontSize: '12px', paddingLeft: '20px' }
            }
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="text-center text-sm text-gray-500 mt-2">
        ※食品・農業分野における入社3ヶ月以内の離職理由調査（当社調べ）
      </div>
    </div>
  );
};

export default ResearchChart;
