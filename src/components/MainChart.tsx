import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Download } from 'lucide-react';
import { areaChartData } from '../mockData';

export const MainChart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50">
          <Download size={16} />
          Export
        </button>
      </div>
      
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaChartData}>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#6B7280' }}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8B5CF6" 
                  strokeWidth={2}
                  fill="url(#colorGradient)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="w-48 space-y-6">
          <div>
            <p className="text-sm text-gray-600">Trading days</p>
            <p className="text-2xl font-bold text-gray-900">231</p>
            <p className="text-xs text-blue-500">+4.5%</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">number loss</p>
            <p className="text-2xl font-bold text-gray-900">28</p>
            <p className="text-xs text-orange-500">+6.8%</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">profit</p>
            <p className="text-2xl font-bold text-gray-900">2.23%</p>
            <p className="text-xs text-green-500">+8.5%</p>
          </div>
        </div>
      </div>
    </div>
  );
};