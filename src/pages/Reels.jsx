import ReelCard from '../components/ReelCard.jsx'
import { DEMO_REELS } from '../data/mockData.js'
export default function Reels() {
  let extra = []
  try { extra = JSON.parse(localStorage.getItem('techgram_extra')||'[]').filter(x=>x.type==='reel').map(e=>({ id:e.id, user:e.user, category:e.category, title:e.caption, caption:e.caption, video:e.video||'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', poster:e.poster, likes:0 })) } catch {}
  const all = [...extra, ...DEMO_REELS]
  return (
    <div className="max-w-md mx-auto px-4 pb-20 pt-4">
      <h1 className="text-xl font-extrabold mb-3">Tech Reels <span className="gradient-text">⚡ motivation in seconds</span></h1>
      <div className="space-y-4 reels-snap max-h-[82vh] overflow-y-auto scrollbar-hide pr-1">
        {all.map(r=><ReelCard key={r.id} reel={r} />)}
      </div>
    </div>
  )
}
