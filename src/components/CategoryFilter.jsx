import { TECH_CATEGORIES } from '../data/mockData.js'
export default function CategoryFilter({ active, setActive }) {
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide py-2">
      {TECH_CATEGORIES.map(c=>(
        <button key={c} onClick={()=>setActive(c)} className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-bold border transition ${active===c?'bg-gradient-to-r from-cyan-400 to-violet-500 text-black border-transparent':'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'}`}>{c}</button>
      ))}
    </div>
  )
}
