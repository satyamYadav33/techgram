import { DEMO_POSTS } from '../data/mockData.js'
import { useAuth } from '../context/AuthContext.jsx'
import { Settings } from 'lucide-react'
export default function Profile() {
  const { user } = useAuth()
  const name = user?.username || user?.email?.split('@')[0] || 'tech_builder'
  return (
    <div className="max-w-3xl mx-auto px-4 pb-20 pt-6">
      <div className="flex items-center gap-5">
        <img src={user?.avatar || `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${name}`} className="w-20 h-20 rounded-full border-2 border-cyan-400/40 bg-white/10" alt="" />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-extrabold">@{name}</h1>
            <button className="text-xs px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 flex items-center gap-1"><Settings size={12}/> Edit</button>
          </div>
          <div className="flex gap-5 mt-2 text-sm">
            <span><b>{DEMO_POSTS.length}</b> posts</span><span><b>1.2k</b> followers</span><span><b>340</b> following</span>
          </div>
          <p className="text-sm text-gray-300 mt-1">{user?.bio || 'Building in tech daily 🚀 • AI • Web Dev • Cloud'}</p>
          <p className="text-xs text-cyan-300 mt-1">Tech motivation only ✨</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 mt-6">
        {DEMO_POSTS.map(p=>(
          <img key={p.id} src={p.image} className="aspect-square object-cover rounded-lg border border-white/10" alt="" />
        ))}
      </div>
    </div>
  )
}
