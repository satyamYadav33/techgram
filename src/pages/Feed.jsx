import { useMemo, useState } from 'react'
import StoryBar from '../components/StoryBar.jsx'
import StoryViewer from '../components/StoryViewer.jsx'
import PostCard from '../components/PostCard.jsx'
import CategoryFilter from '../components/CategoryFilter.jsx'
import { DEMO_POSTS, DEMO_STORIES } from '../data/mockData.js'
import { useAuth } from '../context/AuthContext.jsx'

export default function Feed({ query, refresh }) {
  const [cat, setCat] = useState('All')
  const [storyIdx, setStoryIdx] = useState(null)
  const [deleted, setDeleted] = useState([])
  const { user } = useAuth()

  const extra = useMemo(() => {
    try { return JSON.parse(localStorage.getItem('techgram_extra') || '[]').filter(x=>x.type!=='reel') } catch { return [] }
  }, [refresh])

  const posts = useMemo(() => {
    let all = [...extra.map(e=>({ ...e, category: e.category })), ...DEMO_POSTS]
    if (cat !== 'All') all = all.filter(p=>p.category===cat)
    if (query) all = all.filter(p=>(p.caption+p.category+p.user.username).toLowerCase().includes(query.toLowerCase()))
    return all.filter(p=>!deleted.includes(p.id))
  }, [cat, query, deleted, extra])

  return (
    <div className="max-w-2xl mx-auto px-4 pb-20">
      <StoryBar stories={DEMO_STORIES} onOpen={setStoryIdx} />
      {storyIdx !== null && <StoryViewer stories={DEMO_STORIES} index={storyIdx} onClose={()=>setStoryIdx(null)} />}
      <CategoryFilter active={cat} setActive={setCat} />
      <div className="mt-3 p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-pink-500/10 border border-white/10">
        <h1 className="text-xl font-extrabold">Welcome back, @{user?.username || user?.email?.split('@')[0]} 👋</h1>
        <p className="text-sm text-gray-300">Tech motivation only. No noise. Posts • Reels • Stories for builders in AI, Cloud, Web Dev, Blockchain & more.</p>
      </div>
      <div className="mt-4 space-y-5">
        {posts.length===0 && <p className="text-center text-gray-500 py-10">No posts found. Try another category or create one!</p>}
        {posts.map(p=>(
          <PostCard key={p.id} post={p} canDelete={String(p.user.username)===(user?.username) || p.id.startsWith('x_')} onDelete={(id)=>setDeleted(d=>[...d,id])} />
        ))}
      </div>
    </div>
  )
}
