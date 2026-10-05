import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Home, Clapperboard, Compass, PlusSquare, User, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'

export default function Sidebar({ onCreate }) {
  const loc = useLocation()
  const nav = useNavigate()
  const { user, signOut } = useAuth()
  const item = (to, Icon, label) => {
    const active = loc.pathname === to
    return (
      <Link to={to} className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition ${active ? 'bg-white/10 text-white shadow-glow' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}>
        <Icon size={22} /> <span className="hidden lg:block">{label}</span>
      </Link>
    )
  }
  return (
    <aside className="fixed left-0 top-0 h-screen w-[72px] lg:w-60 border-r border-white/10 bg-panel/80 backdrop-blur p-3 flex flex-col gap-2 z-40">
      <Link to="/" className="px-2 py-4 flex items-center gap-2">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-violet-500 to-pink-500 grid place-items-center font-black">T</div>
        <span className="hidden lg:block text-xl font-extrabold gradient-text">TechGram</span>
      </Link>
      {item('/', Home, 'Feed')}
      {item('/reels', Clapperboard, 'Reels')}
      {item('/explore', Compass, 'Explore')}
      <button onClick={onCreate} className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-white/5 hover:text-white font-medium">
        <PlusSquare size={22} /> <span className="hidden lg:block">Create</span>
      </button>
      {item('/profile', User, 'Profile')}
      <div className="mt-auto p-3 rounded-xl bg-white/5 border border-white/10">
        <p className="text-xs text-gray-400 hidden lg:block">Logged as</p>
        <p className="text-sm font-bold truncate">@{user?.username || user?.email?.split('@')[0] || 'guest'}</p>
        <button onClick={async () => { await signOut(); nav('/auth') }} className="mt-2 text-xs flex items-center gap-1 text-red-400 hover:text-red-300"><LogOut size={14}/> Logout</button>
      </div>
    </aside>
  )
}
