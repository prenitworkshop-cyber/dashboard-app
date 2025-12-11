import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { MoreHorizontal } from 'lucide-react';
import { trafficData } from '../mockData';

export const TrafficChart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Traffic Sources</h3>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreHorizontal size={20} className="text-gray-400" />
        </button>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={trafficData}>
            <PolarGrid />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <PolarRadiusAxis 
              angle={90} 
              domain={[0, 150]} 
              tick={{ fontSize: 10, fill: '#6B7280' }}
            />
            <Radar
              name="Traffic"
              dataKey="A"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
              strokeWidth={2}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};