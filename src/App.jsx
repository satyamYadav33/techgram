import { useState } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import TopBar from './components/TopBar.jsx'
import CreateModal from './components/CreateModal.jsx'
import Feed from './pages/Feed.jsx'
import Reels from './pages/Reels.jsx'
import Explore from './pages/Explore.jsx'
import Profile from './pages/Profile.jsx'
import Auth from './pages/Auth.jsx'
import { useAuth } from './context/AuthContext.jsx'

function Protected({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div className="ml-[72px] lg:ml-60 min-h-screen grid place-items-center text-gray-400">Loading TechGram...</div>
  if (!user) return <Navigate to="/auth" replace />
  return children
}

export default function App() {
  const [showCreate, setShowCreate] = useState(false)
  const [query, setQuery] = useState('')
  const [refresh, setRefresh] = useState(0)
  const { user } = useAuth()

  const handleCreate = (data) => {
    const extra = JSON.parse(localStorage.getItem('techgram_extra') || '[]')
    const item = { id: 'x_' + Date.now(), user: { username: user?.username || user?.email?.split('@')[0] || 'you', avatar: user?.avatar || `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${Date.now()}` }, time: 'now', likes: 0, comments: [], ...data, caption: data.caption, image: data.media || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', title: data.caption?.slice(0,40), video: data.media?.includes('.mp4') ? data.media : undefined, poster: data.media || 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80' }
    extra.unshift(item)
    localStorage.setItem('techgram_extra', JSON.stringify(extra))
    setRefresh(r=>r+1)
  }

  return (
    <div className="min-h-screen bg-void">
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={
          <Protected>
            <Sidebar onCreate={()=>setShowCreate(true)} />
            <TopBar query={query} setQuery={setQuery} />
            <main className="ml-[72px] lg:ml-60">
              <Routes>
                <Route path="/" element={<Feed query={query} refresh={refresh} />} />
                <Route path="/reels" element={<Reels />} />
                <Route path="/explore" element={<Explore query={query} />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            {showCreate && <CreateModal onClose={()=>setShowCreate(false)} onCreate={handleCreate} />}
          </Protected>
        } />
      </Routes>
    </div>
  )
}
