import { useRef, useState } from 'react'
import { Heart, MessageCircle, VolumeX, Volume2, Play } from 'lucide-react'
export default function ReelCard({ reel }) {
  const [liked, setLiked] = useState(false)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  const vref = useRef(null)
  const toggle = () => {
    if (!vref.current) return
    if (playing) vref.current.pause()
    else vref.current.play()
    setPlaying(!playing)
  }
  return (
    <div className="relative h-[78vh] w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden bg-black border border-white/10">
      <video ref={vref} src={reel.video} poster={reel.poster} loop autoPlay muted={muted} playsInline className="absolute inset-0 w-full h-full object-cover" onClick={toggle} />
      {!playing && <div className="absolute inset-0 grid place-items-center"><div className="bg-black/60 rounded-full p-4"><Play /></div></div>}
      <button onClick={()=>setMuted(!muted)} className="absolute top-3 right-3 bg-black/60 rounded-full p-2">{muted?<VolumeX size={16}/>:<Volume2 size={16}/>}</button>
      <div className="absolute right-2 bottom-24 flex flex-col gap-4 items-center">
        <button onClick={()=>setLiked(!liked)} className="flex flex-col items-center"><Heart size={28} fill={liked?'#ec4899':'none'} className={liked?'text-pink-500':'text-white'} /><span className="text-xs">{(reel.likes+(liked?1:0)).toLocaleString()}</span></button>
        <button className="flex flex-col items-center text-white"><MessageCircle size={26} /><span className="text-xs">Comment</span></button>
      </div>
      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/50 to-transparent">
        <p className="text-sm font-bold">@{reel.user.username}</p>
        <p className="text-sm">{reel.title}</p>
        <p className="text-xs text-gray-300 mt-1">{reel.caption}</p>
        <span className="inline-block mt-2 text-[11px] px-2 py-0.5 rounded-full bg-cyan-400/20 border border-cyan-400/30 text-cyan-200">{reel.category}</span>
      </div>
    </div>
  )
}
