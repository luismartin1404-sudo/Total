
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', revenue: 4000, users: 2400 },
  { name: 'Tue', revenue: 3000, users: 1398 },
  { name: 'Wed', revenue: 2000, users: 9800 },
  { name: 'Thu', revenue: 2780, users: 3908 },
  { name: 'Fri', revenue: 1890, users: 4800 },
  { name: 'Sat', revenue: 2390, users: 3800 },
  { name: 'Sun', revenue: 3490, users: 4300 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Total Revenue" value="$54,230" change="+12.5%" isPositive={true} />
        <MetricCard title="Active Projects" value="18" change="+2" isPositive={true} />
        <MetricCard title="System Load" value="42%" change="-5%" isPositive={true} />
        <MetricCard title="Client Satisfaction" value="98%" change="+0.4%" isPositive={true} />
      </div>

      {/* Main Chart Section */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-bold text-slate-800">Operational Performance</h3>
            <p className="text-slate-500 text-sm">Real-time data synchronization from all nodes.</p>
          </div>
          <select className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-orange-500 outline-none">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Year to Date</option>
          </select>
        </div>

        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0f172a" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#0f172a" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="revenue" stroke="#f97316" fillOpacity={1} fill="url(#colorRevenue)" strokeWidth={3} />
              <Area type="monotone" dataKey="users" stroke="#0f172a" fillOpacity={1} fill="url(#colorUsers)" strokeWidth={3} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tables/Lists Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Recent Activities</h3>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl transition-colors">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i % 2 === 0 ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-600'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">System Backup Node-{i}</p>
                    <p className="text-xs text-slate-500">Completed 2 hours ago</p>
                  </div>
                </div>
                <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">Success</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-orange-50 hover:border-orange-200 transition-all group">
              <div className="p-3 bg-white rounded-xl shadow-sm mb-3 group-hover:text-orange-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <span className="text-sm font-bold text-slate-700">New Report</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-orange-50 hover:border-orange-200 transition-all group">
              <div className="p-3 bg-white rounded-xl shadow-sm mb-3 group-hover:text-orange-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <span className="text-sm font-bold text-slate-700">Notifications</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MetricCard: React.FC<{ title: string; value: string; change: string; isPositive: boolean }> = ({ title, value, change, isPositive }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between mb-4">
      <span className="text-sm font-medium text-slate-500">{title}</span>
      <span className={`text-xs font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {change}
      </span>
    </div>
    <p className="text-3xl font-bold text-slate-900">{value}</p>
  </div>
);
