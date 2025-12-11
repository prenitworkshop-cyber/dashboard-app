import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { MoreHorizontal } from 'lucide-react';
import { salaryData } from '../mockData';

export const SalaryChart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Gross Salary Breakdown</h3>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreHorizontal size={20} className="text-gray-400" />
        </button>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={salaryData} layout="horizontal">
            <XAxis type="number" hide />
            <YAxis 
              type="category" 
              dataKey="department" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
              width={100}
            />
            <Bar 
              dataKey="value" 
              fill="#3B82F6" 
              radius={[0, 4, 4, 0]}
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};