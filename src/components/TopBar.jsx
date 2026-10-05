import { Search, Bell, Cpu } from 'lucide-react'
export default function TopBar({ query, setQuery }) {
  return (
    <header className="sticky top-0 z-30 glass border-b border-white/10 px-4 py-3 flex items-center gap-3 ml-[72px] lg:ml-60">
      <div className="flex items-center gap-2 text-sm text-cyan-300 bg-cyan-400/10 border border-cyan-400/20 px-3 py-1.5 rounded-full">
        <Cpu size={14} /> Tech-only motivation • IT • AI • Cloud • Web3
      </div>
      <div className="ml-auto flex items-center gap-2">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-2.5 text-gray-500" />
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search tech motivation..." className="bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-2 text-sm w-48 md:w-72 outline-none focus:border-cyan-400/50" />
        </div>
        <button className="w-9 h-9 grid place-items-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10"><Bell size={18}/></button>
      </div>
    </header>
  )
}
