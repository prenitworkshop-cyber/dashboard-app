import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { MoreHorizontal } from 'lucide-react';
import { employeeData } from '../mockData';

export const EmployeeChart = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">All Employees</h3>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreHorizontal size={20} className="text-gray-400" />
        </button>
      </div>
      
      <div className="h-64 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={employeeData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {employeeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-sm text-white bg-gray-800 px-2 py-1 rounded">Recruiter</p>
            <p className="text-lg font-bold text-gray-900">65.57%</p>
          </div>
        </div>
      </div>
    </div>
  );
};