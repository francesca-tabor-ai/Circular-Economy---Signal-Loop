
import React from 'react';
import { MOCK_TIERS, MOCK_DROPS, MOCK_CREATOR } from '../constants';

const FanExperience: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-20 pb-20 animate-in slide-in-from-bottom-6 duration-700">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row gap-10 items-end">
        <div className="relative w-40 h-40 shrink-0">
          <img src={MOCK_CREATOR.avatar} className="w-full h-full rounded-[40px] object-cover shadow-2xl shadow-gray-200" alt="Avatar" />
          <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-accent-gradient rounded-2xl border-4 border-white"></div>
        </div>
        <div className="flex-1 pb-2">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-5xl font-heading font-extrabold tracking-tight text-gray-950">{MOCK_CREATOR.name}</h2>
            <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold tracking-widest uppercase">Verified</span>
          </div>
          <p className="text-lg text-gray-500 font-light max-w-xl leading-relaxed">
            Building a circular economy around culture, technology, and identity. 
            Join the inner loop for exclusive access.
          </p>
        </div>
      </div>

      {/* Fan Status */}
      <section className="bg-gray-50/50 border border-gray-100 p-10 rounded-[40px]">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3">Community Rank</p>
            <h3 className="text-2xl font-heading font-bold text-gray-950">Cultural Architect</h3>
          </div>
          <div className="text-right">
            <p className="text-3xl font-heading font-bold text-gray-950 tracking-tight">850 pts</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">To Next Tier</p>
          </div>
        </div>
        <div className="w-full bg-gray-200/50 h-2 rounded-full overflow-hidden mb-6">
          <div className="bg-gray-950 h-full w-[65%] rounded-full"></div>
        </div>
        <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <span>Voyager</span>
          <span>Curator</span>
          <span className="text-gray-950">Architect</span>
          <span>Legend</span>
        </div>
      </section>

      {/* Tiers */}
      <section className="space-y-10">
        <h3 className="text-3xl font-heading font-bold text-gray-950 tracking-tight">Access Tiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_TIERS.map((tier) => (
            <div key={tier.id} className="group bg-white border border-gray-100 p-10 rounded-[32px] hover:border-gray-900/10 hover:shadow-2xl hover:shadow-gray-200 transition-all duration-300 flex flex-col">
              <div className={`w-8 h-8 rounded-full ${tier.color} mb-8 shadow-sm`}></div>
              <h4 className="text-2xl font-heading font-bold text-gray-950 mb-2">{tier.name}</h4>
              <div className="mb-8">
                <span className="text-4xl font-heading font-extrabold text-gray-950">${tier.price}</span>
                <span className="text-gray-400 text-sm ml-2">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {tier.perks.map((perk, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-500 font-medium">
                    <span className="text-gray-950">/</span>
                    {perk}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl bg-gray-950 text-white hover:bg-gray-800 transition-all font-bold text-sm tracking-tight shadow-lg shadow-gray-200">
                Join {tier.name}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Drops */}
      <section className="space-y-10">
        <div className="flex items-center justify-between">
          <h3 className="text-3xl font-heading font-bold text-gray-950 tracking-tight">Active Experiences</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {MOCK_DROPS.map((drop) => (
            <div key={drop.id} className="group flex flex-col">
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-6">
                <img src={drop.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt={drop.title} />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white ${
                    drop.status === 'Active' ? 'bg-emerald-500' : 'bg-gray-400'
                  }`}>
                    {drop.status}
                  </span>
                </div>
              </div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3 leading-none">{drop.type} • {drop.date}</p>
              <h4 className="font-heading font-bold text-xl text-gray-950 mb-4 tracking-tight leading-tight">{drop.title}</h4>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xl font-heading font-bold text-gray-950">${drop.price}</span>
                <button className={`text-xs font-bold uppercase tracking-widest ${
                  drop.status === 'Sold Out' ? 'text-gray-300' : 'text-gray-950 hover:underline'
                }`}>
                  {drop.status === 'Sold Out' ? 'Closed' : 'Secure Pass'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FanExperience;
