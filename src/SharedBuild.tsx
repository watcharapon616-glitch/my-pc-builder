import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, ArrowLeft, Zap, Download, TrendingUp, ShieldCheck, Flame } from 'lucide-react';

// --- จัดรายการคอมระดับเทพ และ คอมราคาประหยัด (Total 6 Sets) ---
const PREBUILT_SETS = [
  // กลุ่มที่ 1: คอมระดับเทพ (Ultimate Performance)
  { id: 's1', name: 'THE GODZILLA OMEGA', cpu: 'Core i9-14900K', gpu: 'RTX 4090 24GB', price: 4299, score: 99 },
  { id: 's2', name: 'RYZEN DOMINATOR', cpu: 'Ryzen 9 7950X3D', gpu: 'RTX 4090 24GB', price: 4150, score: 98 },
  { id: 's3', name: 'TITAN WORKSTATION', cpu: 'Threadripper 7960X', gpu: 'RTX 4080 Super', price: 3800, score: 95 },

  // กลุ่มที่ 2: คอมดีราคาประหยัด/คุ้มค่า (Best Value)
  { id: 's4', name: 'GAMING KING V.2', cpu: 'Ryzen 7 7800X3D', gpu: 'RTX 4070 Super', price: 1699, score: 92 },
  { id: 's5', name: 'BUDGET DESTROYER', cpu: 'Core i5-13400F', gpu: 'RTX 4060 Ti', price: 950, score: 68 },
  { id: 's6', name: 'VALUE FIGHTER', cpu: 'Ryzen 5 7600', gpu: 'RX 7600 XT', price: 799, score: 60 },
];

export default function SharedBuild() {
  const [data, setData] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem('pc_shared_data');
    if (savedData) setData(JSON.parse(savedData));
  }, []);

  // 1. Ultimate Speed Ranking (Sort by Score)
  const topSpeedSets = [...PREBUILT_SETS].sort((a, b) => b.score - a.score).slice(0, 3);
  
  // 2. Best Value Ranking (Sort by Score per Price)
  const topValueSets = [...PREBUILT_SETS].sort((a, b) => (b.score / b.price) - (a.score / a.price)).slice(0, 3);

  if (!data) return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center">
        <div className="text-center animate-pulse">
            <p className="p-20 text-center text-cyan-500 font-black italic text-2xl tracking-tighter uppercase">NO DATA FOUND...</p>
            <button onClick={() => navigate('/build')} className="text-white border border-white/20 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Go Back</button>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] p-4 md:p-10 transition-colors">
      <div className="max-w-6xl mx-auto">
        <button onClick={() => navigate('/build')} className="mb-6 flex items-center gap-2 text-sm font-black dark:text-cyan-400 uppercase tracking-widest hover:translate-x-[-4px] transition-transform">
          <ArrowLeft size={16} /> Back to Configurator
        </button>

        {/* Current Build Performance Score Card */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Section 1: Top 3 Ultimate Speed (ระดับเทพ) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-500 rounded-lg text-white"><Flame size={20} /></div>
              <h3 className="text-2xl font-black italic uppercase dark:text-white">Top 3 Ultimate Speed</h3>
            </div>
            {topSpeedSets.map((set, index) => (
              <div key={set.id} className="relative group bg-white dark:bg-slate-900 p-6 rounded-[2rem] border-2 border-slate-100 dark:border-white/5 hover:border-orange-500 transition-all shadow-sm">
                <span className="absolute -top-3 -left-3 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black italic shadow-lg">#{index + 1}</span>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-black text-lg dark:text-white tracking-tight">{set.name}</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase mt-1">{set.cpu} + {set.gpu}</p>
                    <p className="text-orange-500 font-mono font-bold mt-2">${set.price.toLocaleString()}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase">Performance</p>
                    <p className="text-3xl font-black text-orange-500 italic">{set.score}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Section 2: Top 3 Best Value (ราคาประหยัด/คุ้มค่า) */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-green-500 rounded-lg text-white"><TrendingUp size={20} /></div>
              <h3 className="text-2xl font-black italic uppercase dark:text-white">Top 3 Best Value</h3>
            </div>
            {topValueSets.map((set, index) => (
              <div key={set.id} className="relative group bg-white dark:bg-slate-900 p-6 rounded-[2rem] border-2 border-slate-100 dark:border-white/5 hover:border-green-500 transition-all shadow-sm">
                <span className="absolute -top-3 -left-3 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-black italic shadow-lg">#{index + 1}</span>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4 className="font-black text-lg dark:text-white tracking-tight">{set.name}</h4>
                    <p className="text-xs text-slate-500 font-bold uppercase mt-1">{set.cpu} + {set.gpu}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-green-500 font-mono font-bold">${set.price.toLocaleString()}</span>
                      <span className="text-[9px] px-2 py-0.5 bg-green-500/10 text-green-500 rounded-md font-bold uppercase">Best Value</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black text-slate-400 uppercase">Perf/Price Ratio</p>
                    <p className="text-3xl font-black text-green-500 italic">{(set.score / set.price * 1000).toFixed(1)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extra: Footer Disclaimer เพื่อความปลอดภัยเรื่องลิขสิทธิ์ */}
        <div className="mt-12 pt-8 border-t dark:border-white/5 text-center">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest opacity-50 italic">
                All benchmark scores are estimates based on hardware specifications. 
                Product images and brand names are property of their respective owners.
            </p>
        </div>
      </div>
    </div>
  );
}