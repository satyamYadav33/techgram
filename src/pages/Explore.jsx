import { useMemo, useState } from 'react'
import CategoryFilter from '../components/CategoryFilter.jsx'
import { DEMO_POSTS } from '../data/mockData.js'
export default function Explore({ query }) {
  const [cat, setCat] = useState('All')
  const items = useMemo(()=>{
    let a=[...DEMO_POSTS]
    if(cat!=='All') a=a.filter(p=>p.category===cat)
    if(query) a=a.filter(p=>(p.caption+p.category).toLowerCase().includes(query.toLowerCase()))
    return a
  },[cat,query])
  return (
    <div className="max-w-4xl mx-auto px-4 pb-20 pt-4">
      <h1 className="text-xl font-extrabold">Explore tech motivation</h1>
      <CategoryFilter active={cat} setActive={setCat} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
        {items.map(p=>(
          <div key={p.id} className="relative aspect-square rounded-xl overflow-hidden group border border-white/10">
            <img src={p.image} className="w-full h-full object-cover group-hover:scale-105 transition" alt="" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition p-2 flex flex-col justify-end">
              <span className="text-[11px] text-cyan-200">{p.category}</span>
              <span className="text-xs line-clamp-2">{p.caption}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
