import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { isSupabaseConfigured } from '../lib/supabaseClient.js'

export default function Auth() {
  const [mode, setMode] = useState('signin')
  const [email, setEmail] = useState('demo@techgram.dev')
  const [password, setPassword] = useState('demo1234')
  const [username, setUsername] = useState('tech_builder')
  const [err, setErr] = useState('')
  const { signIn, signUp } = useAuth()
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setErr('')
    try {
      if (mode==='signin') await signIn({ email, password })
      else await signUp({ email, password, username })
      nav('/')
    } catch (ex) { setErr(ex.message) }
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="hidden md:flex flex-col justify-center p-12 bg-gradient-to-br from-cyan-500/20 via-violet-600/20 to-pink-500/20 border-r border-white/10">
        <div className="text-5xl font-black leading-tight">Tech motivation,<br/><span className="gradient-text">only tech.</span></div>
        <p className="mt-4 text-gray-300 max-w-md">Instagram-style Reels, Posts & Stories — but 100% IT, AI, Automation, Agentic AI, GenAI, Web Dev, Cloud, Blockchain, Data Science. No noise, just builder energy.</p>
        <div className="mt-6 flex gap-2 flex-wrap text-xs">
          {['Reels ⚡','Stories ⭕','Posts 📸','Supabase Auth 🔐','RLS 🛡️','Tailwind 🎨'].map(t=><span key={t} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10">{t}</span>)}
        </div>
        {!isSupabaseConfigured && <p className="mt-6 text-xs text-yellow-300 bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-3">Demo mode: Supabase keys not set. Auth runs locally. Add VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY to go live (see .env.example + supabase/schema.sql).</p>}
      </div>
      <div className="flex items-center justify-center p-6">
        <form onSubmit={submit} className="w-full max-w-sm bg-card/60 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-1"><div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-violet-500 to-pink-500 grid place-items-center font-black text-white">T</div><span className="text-xl font-extrabold gradient-text">TechGram</span></div>
          <h2 className="text-lg font-bold mt-2">{mode==='signin'?'Welcome back, builder':'Join TechGram'}</h2>
          <p className="text-xs text-gray-400 mb-4">Authentication + Authorization powered by Supabase</p>
          {mode==='signup' && (<><label className="text-xs">Username</label><input value={username} onChange={e=>setUsername(e.target.value)} className="w-full mt-1 mb-3 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none" /></>)}
          <label className="text-xs">Email</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} type="email" required className="w-full mt-1 mb-3 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none" />
          <label className="text-xs">Password</label>
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" required className="w-full mt-1 mb-3 bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm outline-none" />
          {err && <p className="text-xs text-red-400 mb-2">{err}</p>}
          <button className="w-full py-2.5 rounded-xl font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 text-black">{mode==='signin'?'Log In':'Sign Up'}</button>
          <button type="button" onClick={()=>setMode(mode==='signin'?'signup':'signin')} className="w-full text-xs text-gray-400 mt-3 hover:text-white">{mode==='signin'?"Don't have an account? Sign up":"Already have an account? Log in"}</button>
          <Link to="/" className="block text-center text-xs text-cyan-300 mt-2">Continue as demo →</Link>
        </form>
      </div>
    </div>
  )
}
