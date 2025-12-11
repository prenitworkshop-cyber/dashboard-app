import { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Cell, Radar, RadarChart, PolarGrid, 
  PolarAngleAxis, PolarRadiusAxis 
} from 'recharts';
import { 
  Calendar, Filter, MoreHorizontal, Download, MoveUpRight, 
} from 'lucide-react';

// --- MOCK DATA ---

const mainChartData = [
  { name: 'Jan', value: 5.8 }, { name: 'Feb', value: 5.9 }, { name: 'Mar', value: 6.1 },
  { name: 'Apr', value: 6.0 }, { name: 'May', value: 6.4 }, { name: 'Jun', value: 6.3 },
  { name: 'Jul', value: 6.4 }, { name: 'Aug', value: 7.2 }, { name: 'Sep', value: 7.8 },
  { name: 'Oct', value: 7.7 }, { name: 'Nov', value: 8.1 }, { name: 'Dec', value: 8.5 },
];

const sparklineData = [
  { name: '1', value: 40 }, { name: '2', value: 30 }, { name: '3', value: 60 },
  { name: '4', value: 80 }, { name: '5', value: 50 }, { name: '6', value: 70 },
];

const salaryData = [
  { name: 'Administration', value: 10000 },
  { name: 'Accounting', value: 23000 },
  { name: 'Customer Support', value: 15000 },
  { name: 'Finance', value: 12000 },
  { name: 'Human Resource', value: 18000 },
  { name: 'Sales', value: 14000 },
  { name: 'IT', value: 9000 },
];

const employeeData = [
  { name: 'Working', value: 65.57 },
  { name: 'On Leave', value: 34.43 },
];

const trafficData = [
  { subject: '2014', A: 120, fullMark: 150 },
  { subject: '2015', A: 98, fullMark: 150 },
  { subject: '2016', A: 86, fullMark: 150 },
  { subject: '2017', A: 99, fullMark: 150 },
  { subject: '2018', A: 85, fullMark: 150 },
  { subject: '2019', A: 65, fullMark: 150 },
];

// Colors
const PIE_COLORS = ['#7c3aed', '#f472b6']; // Purple & Pink

// --- COMPONENTS ---

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 ${className}`}>
    {children}
  </div>
);

const IconButton = ({ icon: Icon }: { icon: any }) => (
  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
    <Icon size={18} />
  </button>
);

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('12 months');
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50/50 p-6 md:p-8 font-sans text-slate-800">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-xl font-bold mb-4 tracking-tight">REPORT</h1>
          <div className="bg-white rounded-lg p-1 shadow-sm inline-flex border border-gray-100">
            {['12 months', '30 days', '7 days', '24 hours'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                  activeTab === tab 
                    ? 'bg-gray-100 text-slate-900' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
            <Calendar size={16} /> Select dates
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
            <Filter size={16} /> Filters
          </button>
        </div>
      </div>

      {/* KPI METRICS ROW */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 items-center">
        {/* KPI 1: Win Rate */}
        <div className="flex items-center justify-between bg-white/50 p-4 rounded-xl">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">WIN RATE</p>
            <h3 className="text-2xl font-bold text-slate-900">67.98%</h3>
          </div>
          <div className="h-12 w-24">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sparklineData}>
                <Bar dataKey="value" fill="#8b5cf6" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* KPI 2: Profit */}
        <div className="flex items-center justify-between bg-white/50 p-4 rounded-xl">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Profit</p>
            <h3 className="text-2xl font-bold text-slate-900">8.86%</h3>
          </div>
          <div className="h-12 w-24">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sparklineData}>
                <Bar dataKey="value" fill="#60a5fa" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* KPI 3: Trades */}
        <div className="flex items-center justify-between bg-white/50 p-4 rounded-xl">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">number of trade</p>
            <h3 className="text-2xl font-bold text-slate-900">4.8</h3>
          </div>
          <div className="h-12 w-24">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sparklineData}>
                <Bar dataKey="value" fill="#f472b6" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-end">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-6 py-3 rounded-xl font-bold text-sm shadow-sm transition-colors w-full md:w-auto">
            View Analytic
          </button>
        </div>
      </div>

      {/* MAIN CHART SECTION */}
      <Card className="mb-6">
        <div className="flex justify-between items-start mb-6">
           {/* Spacer to balance layout if needed, or title */}
           <div />
           <div className="flex gap-2">
             <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50">
               <Download size={14} /> Export
             </button>
             <IconButton icon={MoreHorizontal} />
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Large Area Chart */}
          <div className="lg:col-span-3 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mainChartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{fill: '#94a3b8', fontSize: 12}} 
                />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Value
                              </span>
                              <span className="font-bold text-muted-foreground">
                                {payload[0].value}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }

                    return null;
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8b5cf6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Right Side Stats Panel */}
          <div className="flex flex-col justify-center space-y-8 pl-4 border-l border-gray-50">
            <div>
              <p className="text-sm text-gray-500 mb-1">Trading days</p>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-slate-900">231</span>
                <span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">
                  <MoveUpRight size={12} className="mr-0.5" /> 4.5%
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">number loss</p>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-slate-900">28</span>
                <span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">
                  <MoveUpRight size={12} className="mr-0.5" /> 6.9%
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">profit</p>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-slate-900">2.23%</span>
                <span className="flex items-center text-xs font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">
                  <MoveUpRight size={12} className="mr-0.5" /> 8.5%
                </span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* BOTTOM GRID SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Gross Salary - Horizontal Bar */}
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-800">Gross Salary Breakdown</h3>
            <IconButton icon={MoreHorizontal} />
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={salaryData} barSize={20}>
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  width={100} 
                  tick={{fontSize: 11, fill: '#64748b'}} 
                  axisLine={false} 
                  tickLine={false}
                />
                <Tooltip cursor={{fill: 'transparent'}} />
                <Bar dataKey="value" fill="#dbeafe" radius={[0, 4, 4, 0]}>
                  {salaryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 1 ? '#3b82f6' : '#dbeafe'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

          </div>
        </Card>

        {/* All Employees - Donut Chart */}
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-800">All Employees</h3>
            <IconButton icon={MoreHorizontal} />
          </div>
          <div className="h-[200px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={employeeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={0}
                  dataKey="value"
                  stroke="none"
                  labelLine={false}
                  label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                    if (index !== activeIndex) return null;
                    return (
                      <text
                        x={cx}
                        y={cy}
                        dy={8}
                        textAnchor="middle"
                        fill="#333"
                        fontWeight="bold"
                      >
                        {`${value}%`}
                      </text>
                    );
                  }}
                  activeIndex={activeIndex}
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(undefined)}
                >
                  {employeeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                  ))}
                </Pie>              </PieChart>
            </ResponsiveContainer>

          </div>
        </Card>

        {/* Traffic Sources - Radar Chart */}
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-800">Traffic Sources</h3>
            <IconButton icon={MoreHorizontal} />
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={trafficData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{fontSize: 10, fill: '#94a3b8'}} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name="Traffic"
                  dataKey="A"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  fill="#8b5cf6"
                  fillOpacity={0.2}
                />
                {/* Yellow overlay imitation */}
                <Radar
                  name="Old"
                  dataKey="A"
                  stroke="#fbbf24"
                  strokeWidth={1}
                  fill="#fbbf24"
                  fillOpacity={0.1}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>

      </div>
    </div>
  );
}
