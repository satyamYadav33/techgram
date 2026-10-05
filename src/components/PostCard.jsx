import { useState } from 'react'
import { Heart, MessageCircle, Bookmark, Share2, BadgeCheck } from 'lucide-react'
export default function PostCard({ post, onDelete, canDelete }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [showComments, setShowComments] = useState(false)
  const [comment, setComment] = useState('')
  const [list, setList] = useState(post.comments || [])
  return (
    <article className="bg-card/80 border border-white/10 rounded-2xl overflow-hidden">
      <div className="flex items-center gap-3 p-3">
        <img src={post.user.avatar} className="w-10 h-10 rounded-full bg-white/10" alt="" />
        <div className="flex-1">
          <p className="text-sm font-bold flex items-center gap-1">@{post.user.username} <BadgeCheck size={14} className="text-cyan-400" /></p>
          <p className="text-xs text-gray-400">{post.time} • {post.category}</p>
        </div>
        <span className="text-[11px] px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-white/10 text-cyan-200">{post.category}</span>
        {canDelete && <button onClick={() => onDelete(post.id)} className="text-xs text-red-400 hover:text-red-300 px-2">Delete</button>}
      </div>
      <img src={post.image} className="w-full aspect-square object-cover" alt="" loading="lazy" />
      <div className="p-3">
        <div className="flex items-center gap-4">
          <button onClick={()=>setLiked(!liked)} className={liked?'text-pink-500':'text-gray-300 hover:text-pink-400'}><Heart size={24} fill={liked?'currentColor':'none'} /></button>
          <button onClick={()=>setShowComments(!showComments)} className="text-gray-300 hover:text-cyan-300"><MessageCircle size={24} /></button>
          <button className="text-gray-300 hover:text-cyan-300"><Share2 size={22} /></button>
          <button onClick={()=>setSaved(!saved)} className={`ml-auto ${saved?'text-yellow-400':'text-gray-300'}`}><Bookmark size={22} fill={saved?'currentColor':'none'} /></button>
        </div>
        <p className="mt-2 text-sm font-bold">{(post.likes + (liked?1:0)).toLocaleString()} likes</p>
        <p className="mt-1 text-sm"><span className="font-bold">@{post.user.username}</span> {post.caption}</p>
        <button onClick={()=>setShowComments(!showComments)} className="text-xs text-gray-400 mt-1">View all {list.length} comments</button>
        {showComments && (
          <div className="mt-2 space-y-1.5">
            {list.map((c,k)=><p key={k} className="text-sm"><span className="font-bold">@{c.user}</span> {c.text}</p>)}
            <div className="flex gap-2 mt-2">
              <input value={comment} onChange={e=>setComment(e.target.value)} placeholder="Add a comment..." className="flex-1 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 text-sm outline-none focus:border-cyan-400/50" />
              <button onClick={()=>{ if(!comment.trim()) return; setList([...list,{user:'you',text:comment}]); setComment('') }} className="text-sm font-bold text-cyan-300">Post</button>
            </div>
          </div>
        )}
      </div>
    </article>
  )
}
