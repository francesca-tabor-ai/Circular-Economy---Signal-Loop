
import React from 'react';
import { MOCK_MARKET, MOCK_CREATOR } from '../constants';

const Marketplace: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="bg-gray-50 border border-gray-100 p-12 rounded-[48px] flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-md">
          <h2 className="text-3xl font-heading font-bold text-gray-950 mb-4 tracking-tight">Secondary Market</h2>
          <p className="text-gray-500 font-medium leading-relaxed">
            Trade access rights and experience passes. A 5% royalty from every transaction is automatically distributed to {MOCK_CREATOR.name}.
          </p>
        </div>
        <div className="text-center md:text-right bg-white p-8 rounded-3xl card-shadow border border-gray-100">
          <p className="text-4xl font-heading font-extrabold text-gray-950 tracking-tighter">$1,840.22</p>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-2">Royalties Distributed</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-between border-b border-gray-100 pb-8">
        <div className="flex gap-8">
          {['All Items', 'Experience Passes', 'Access Rights'].map((cat, i) => (
            <button key={i} className={`text-xs font-bold uppercase tracking-widest ${i === 0 ? 'text-gray-950 underline underline-offset-8' : 'text-gray-400 hover:text-gray-600'}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search assets..." 
            className="bg-transparent border-b border-gray-200 py-2 px-1 text-xs focus:border-gray-950 outline-none w-48 transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {MOCK_MARKET.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="relative aspect-square rounded-[32px] overflow-hidden mb-5">
              <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} />
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[9px] font-bold uppercase tracking-widest text-gray-950">
                {item.type}
              </div>
            </div>
            <div className="space-y-1 px-1">
              <h4 className="font-heading font-bold text-gray-950 text-base">{item.title}</h4>
              <p className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">Owned by <span className="text-gray-700 font-bold">{item.owner}</span></p>
              
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-gray-100">
                <div>
                  <p className="text-[9px] text-gray-400 uppercase font-bold tracking-widest leading-none mb-2">Price</p>
                  <p className="text-xl font-heading font-extrabold text-gray-950">${item.currentPrice}</p>
                </div>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-950 px-5 py-2 rounded-xl text-[11px] font-bold tracking-tight transition-colors">
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
