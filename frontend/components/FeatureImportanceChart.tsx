
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { TranslationSchema } from '../types';

interface FeatureImportanceChartProps {
  t: TranslationSchema;
}

const FeatureImportanceChart: React.FC<FeatureImportanceChartProps> = ({ t }) => {
  const chartT = t.sections.chart;
  
  const data = [
    { name: chartT.features.cp, value: 0.82 },
    { name: chartT.features.age, value: 0.65 },
    { name: chartT.features.restecg, value: 0.44 },
    { name: chartT.features.exang, value: 0.38 },
    { name: chartT.features.trestbps, value: 0.31 },
    { name: chartT.features.chol, value: 0.22 },
    { name: chartT.features.fbs, value: 0.12 },
  ];

  const isRTL = document.dir === 'rtl';

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={data}
          // Increase left/right margin to prevent label clipping
          margin={{ top: 10, right: isRTL ? 110 : 30, left: isRTL ? 30 : 110, bottom: 10 }}
        >
          <XAxis type="number" hide />
          <YAxis 
            dataKey="name" 
            type="category" 
            axisLine={false} 
            tickLine={false}
            orientation={isRTL ? "right" : "left"}
            tick={{ 
              fontSize: 12, 
              fontWeight: 600, 
              fill: '#94a3b8',
              // Dynamic text anchor based on RTL
              textAnchor: isRTL ? 'start' : 'end'
            }}
            // Increased width for the axis labels area
            width={100}
          />
          <Tooltip 
            cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }}
            contentStyle={{ 
              borderRadius: '8px', 
              border: '1px solid #334155', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              backgroundColor: '#1e293b',
              color: '#f8fafc',
              textAlign: isRTL ? 'right' : 'left'
            }}
            itemStyle={{ color: '#ef4444' }}
            formatter={(value) => [value, chartT.value]}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index < 2 ? '#ef4444' : '#475569'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FeatureImportanceChart;
