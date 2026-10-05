import { useState } from 'react'
import { X, Image, Clapperboard, CircleDot } from 'lucide-react'
import { TECH_CATEGORIES } from '../data/mockData.js'
export default function CreateModal({ onClose, onCreate }) {
  const [type, setType] = useState('post')
  const [caption, setCaption] = useState('')
  const [category, setCategory] = useState('AI')
  const [media, setMedia] = useState('')
  const submit = () => {
    if (!caption.trim()) return alert('Add a motivational caption')
    onCreate({ type, caption, category, media: media || undefined })
    onClose()
  }
  return (
    <div className="fixed inset-0 z-50 bg-black/70 grid place-items-center p-4" onClick={onClose}>
      <div className="w-full max-w-md bg-panel border border-white/10 rounded-2xl p-5" onClick={e=>e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-extrabold text-lg">Create tech motivation</h2>
          <button onClick={onClose}><X size={20}/></button>
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {[{k:'post',icon:Image,l:'Post'},{k:'reel',icon:Clapperboard,l:'Reel'},{k:'story',icon:CircleDot,l:'Story'}].map(t=>(
            <button key={t.k} onClick={()=>setType(t.k)} className={`flex items-center justify-center gap-1.5 py-2.5 rounded-xl border text-sm font-bold ${type===t.k?'bg-cyan-400/15 border-cyan-400/40 text-cyan-200':'bg-white/5 border-white/10 text-gray-400'}`}><t.icon size={16}/>{t.l}</button>
          ))}
        </div>
        <label className="text-xs text-gray-400">Category (tech only)</label>
        <select value={category} onChange={e=>setCategory(e.target.value)} className="w-full mt-1 mb-3 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none">
          {TECH_CATEGORIES.filter(c=>c!=='All').map(c=><option key={c} value={c} className="bg-gray-900">{c}</option>)}
        </select>
        <label className="text-xs text-gray-400">Image / Video URL (optional — we add a tech default)</label>
        <input value={media} onChange={e=>setMedia(e.target.value)} placeholder="https://..." className="w-full mt-1 mb-3 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-cyan-400/50" />
        <label className="text-xs text-gray-400">Motivational caption</label>
        <textarea value={caption} onChange={e=>setCaption(e.target.value)} rows={4} placeholder="e.g. Day 37: Shipped my first AI agent. Keep going! 🚀" className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-cyan-400/50" />
        <button onClick={submit} className="w-full mt-4 py-3 rounded-xl font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 text-black hover:opacity-90">Share to TechGram</button>
        <p className="text-[11px] text-gray-500 mt-2 text-center">Only tech motivation allowed: IT, AI, Automation, Agentic AI, GenAI, Web Dev, Cloud, Blockchain, Data Science</p>
      </div>
    </div>
  )
}
