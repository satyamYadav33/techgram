import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
export default function StoryViewer({ stories, index, onClose }) {
  const [i, setI] = useState(index)
  useEffect(() => setI(index), [index])
  useEffect(() => {
    const t = setTimeout(() => { if (i < stories.length - 1) setI(i+1); else onClose() }, 4000)
    return () => clearTimeout(t)
  }, [i])
  if (!stories[i]) return null
  const s = stories[i]
  return (
    <div className="fixed inset-0 z-50 bg-black/90 grid place-items-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-sm h-[80vh] rounded-2xl overflow-hidden border border-white/10" onClick={e=>e.stopPropagation()}>
        <img src={s.image} className="absolute inset-0 w-full h-full object-cover" alt="" />
        <div className="absolute top-0 inset-x-0 p-3 flex gap-1">{stories.map((_,k)=><div key={k} className={`h-1 flex-1 rounded ${k<=i?'bg-white':'bg-white/30'}`} />)}</div>
        <div className="absolute top-5 left-3 flex items-center gap-2">
          <img src={s.user.avatar} className="w-8 h-8 rounded-full" alt="" />
          <span className="text-sm font-bold">@{s.user.username}</span>
          <span className="text-xs text-gray-300">{s.time}</span>
        </div>
        <button onClick={onClose} className="absolute top-4 right-3 bg-black/50 rounded-full p-1.5"><X size={18}/></button>
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent">
          <span className="text-xs px-2 py-1 rounded-full bg-cyan-400/20 text-cyan-200 border border-cyan-400/30">{s.category}</span>
          <p className="mt-2 font-bold text-lg leading-tight">{s.title}</p>
        </div>
      </div>
    </div>
  )
}
