export const periodOptions = ['12 months', '30 days', '7 days', '24 hours'] as const

export const statCards = [
  {
    id: 'win-rate',
    label: 'WIN RATE',
    value: '67.98%',
    color: '#8b5cf6',
    data: [22, 28, 25, 30, 24, 26, 32, 31, 29, 27],
  },
  {
    id: 'profit',
    label: 'Profit',
    value: '8.86%',
    color: '#6366f1',
    data: [12, 14, 10, 16, 13, 18, 15, 20, 19, 17],
  },
  {
    id: 'trades',
    label: 'number of trade',
    value: '4.8',
    color: '#60a5fa',
    data: [6, 9, 7, 10, 12, 11, 9, 8, 7, 10],
  },
] as const

export const revenueSeries = [
  { month: 'Jan', value: 6.0 },
  { month: 'Feb', value: 6.2 },
  { month: 'Mar', value: 6.1 },
  { month: 'Apr', value: 6.3 },
  { month: 'May', value: 6.5 },
  { month: 'Jun', value: 6.7 },
  { month: 'Jul', value: 6.6 },
  { month: 'Aug', value: 7.4 },
  { month: 'Sep', value: 7.7 },
  { month: 'Oct', value: 7.8 },
  { month: 'Nov', value: 7.9 },
  { month: 'Dec', value: 8.1 },
] as const

export const summaryStats = [
  { id: 'trading-days', label: 'Trading days', value: '231', delta: '+4.5%', isPositive: true },
  { id: 'number-loss', label: 'number loss', value: '28', delta: '+0.9%', isPositive: true },
  { id: 'profit', label: 'profit', value: '2.23%', delta: '+8.55%', isPositive: true },
] as const

export const salaryData = [
  { name: 'Administration', value: 14000 },
  { name: 'Accounting', value: 23000 },
  { name: 'Customer Suport', value: 19500 },
  { name: 'Finance', value: 18000 },
  { name: 'Human Resouces', value: 16500 },
  { name: 'Sales', value: 15500 },
  { name: 'IT', value: 14500 },
  { name: 'Marketing', value: 13800 },
] as const

export const employeesData = [
  { name: 'Working', value: 65.57 },
  { name: 'On Leave', value: 18.2 },
  { name: 'Contract', value: 9.3 },
  { name: 'Other', value: 7 },
] as const

export const radarData = [
  { year: '2014', marketing: 18, sales: 14, finance: 20 },
  { year: '2016', marketing: 24, sales: 19, finance: 26 },
  { year: '2017', marketing: 26, sales: 22, finance: 28 },
  { year: '2018', marketing: 30, sales: 25, finance: 31 },
  { year: '2019', marketing: 34, sales: 28, finance: 35 },
  { year: '2020', marketing: 31, sales: 30, finance: 33 },
] as const