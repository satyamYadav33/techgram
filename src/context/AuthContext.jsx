import { createContext, useContext, useEffect, useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient.js'
import { DEMO_USERS } from '../data/mockData.js'

const AuthCtx = createContext(null)
export const useAuth = () => useContext(AuthCtx)
const LS_KEY = 'techgram_demo_user'

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function init() {
      if (isSupabaseConfigured) {
        const { data } = await supabase.auth.getSession()
        setUser(data.session?.user ?? null)
        supabase.auth.onAuthStateChange((_e, session) => setUser(session?.user ?? null))
      } else {
        try {
          const raw = localStorage.getItem(LS_KEY)
          if (raw) setUser(JSON.parse(raw))
          else setUser(DEMO_USERS[0])
        } catch { setUser(DEMO_USERS[0]) }
      }
      setLoading(false)
    }
    init()
  }, [])

  const signUp = async ({ email, password, username }) => {
    if (isSupabaseConfigured) {
      const { data, error } = await supabase.auth.signUp({ email, password, options: { data: { username } } })
      if (error) throw error
      return data.user
    } else {
      const nu = { id: 'u_' + Date.now(), email, username: username || email.split('@')[0], avatar: `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${username}`, bio: 'Tech builder 🚀' }
      localStorage.setItem(LS_KEY, JSON.stringify(nu))
      setUser(nu)
      return nu
    }
  }

  const signIn = async ({ email, password }) => {
    if (isSupabaseConfigured) {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      return data.user
    } else {
      const found = DEMO_USERS.find(u => u.email === email) || { id: 'u_demo', email, username: email.split('@')[0], avatar: `https://api.dicebear.com/7.x/bottts-neutral/svg?seed=${email}`, bio: 'Tech builder 🚀' }
      localStorage.setItem(LS_KEY, JSON.stringify(found))
      setUser(found)
      return found
    }
  }

  const signOut = async () => {
    if (isSupabaseConfigured) await supabase.auth.signOut()
    else localStorage.removeItem(LS_KEY)
    setUser(null)
  }

  return (
    <AuthCtx.Provider value={{ user, loading, signIn, signUp, signOut, isDemo: !isSupabaseConfigured }}>
      {children}
    </AuthCtx.Provider>
  )
}
