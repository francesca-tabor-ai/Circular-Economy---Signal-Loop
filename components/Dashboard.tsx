
import React from 'react';
import { 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area,
  BarChart, Bar, Cell
} from 'recharts';
import { MOCK_TIERS } from '../constants';

const data = [
  { name: 'W1', revenue: 4000 },
  { name: 'W2', revenue: 4500 },
  { name: 'W3', revenue: 7800 },
  { name: 'W4', revenue: 6200 },
  { name: 'W5', revenue: 5900 },
  { name: 'W6', revenue: 12000 },
  { name: 'W7', revenue: 9800 },
];

const stabilityData = [
  { category: 'Patreon', stability: 65 },
  { category: 'SignalLoop', stability: 92 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      {/* Top Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          { label: 'Recurring Revenue', value: '$12,450', change: '+12.5%', color: 'text-emerald-500' },
          { label: 'Circular Royalties', value: '$1,840', change: '+45%', color: 'text-blue-500' },
          { label: 'Active Members', value: '4,945', change: 'Stable', color: 'text-gray-400' },
          { label: 'Stability Index', value: '94/100', change: 'A+', color: 'text-yellow-500' },
        ].map((stat, i) => (
          <div key={i} className="group">
            <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-3 leading-none">{stat.label}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-heading font-extrabold text-gray-950 tracking-tight">{stat.value}</span>
              <span className={`text-[10px] font-bold ${stat.color}`}>{stat.change}</span>
            </div>
            <div className="mt-4 h-[1px] w-full bg-gray-100 group-hover:bg-gray-200 transition-colors"></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Graph */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading font-bold text-lg text-gray-950">Revenue Velocity</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-[10px] font-bold bg-gray-100 text-gray-900 rounded-md">30D</button>
              <button className="px-3 py-1 text-[10px] font-bold text-gray-400">90D</button>
            </div>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="0 0" stroke="#f3f4f6" vertical={false} />
                <XAxis dataKey="name" stroke="#9ca3af" fontSize={10} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#9ca3af" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `$${v/1000}k`} dx={-10} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #f3f4f6', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Predictability */}
        <div className="bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
          <h3 className="font-heading font-bold text-lg text-gray-950 mb-8">Stability Index</h3>
          <div className="h-[240px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stabilityData} layout="vertical" barGap={20}>
                <XAxis type="number" hide />
                <YAxis dataKey="category" type="category" stroke="#94a3b8" fontSize={10} width={80} tickLine={false} axisLine={false} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px' }} />
                <Bar dataKey="stability" radius={[0, 10, 10, 0]} barSize={24}>
                  {stabilityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 1 ? '#111827' : '#e5e7eb'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 space-y-4">
            <p className="text-[11px] font-medium text-gray-500 leading-relaxed italic">
              "Circular transactions increase MRR predictability by 4.2x."
            </p>
          </div>
        </div>
      </div>

      {/* Identity Tiers */}
      <div className="space-y-6">
        <h3 className="font-heading font-bold text-lg text-gray-950">Identity Membership</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_TIERS.map((tier) => (
            <div key={tier.id} className="bg-white border border-gray-100 p-6 rounded-2xl hover:border-gray-200 transition-all card-shadow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className={`w-3 h-3 rounded-full ${tier.color} shadow-sm`}></span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Tier 0{tier.id}</span>
              </div>
              <h4 className="font-heading font-bold text-gray-950">{tier.name}</h4>
              <p className="text-xs text-gray-500 mb-6">{tier.members} Members</p>
              <div className="mt-auto flex items-baseline justify-between">
                <span className="text-lg font-heading font-bold text-gray-950">${tier.price}</span>
                <span className="text-[10px] font-bold text-emerald-500">↑ Growth</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
