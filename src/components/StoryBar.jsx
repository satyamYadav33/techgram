export default function StoryBar({ stories, onOpen }) {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-1">
      {stories.map((s, i) => (
        <button key={s.id} onClick={() => onOpen(i)} className="flex flex-col items-center gap-1.5 shrink-0 group">
          <div className="p-[3px] rounded-full story-ring group-hover:scale-105 transition">
            <img src={s.image} alt={s.title} className="w-16 h-16 rounded-full object-cover border-2 border-black" />
          </div>
          <span className="text-[11px] text-gray-300 max-w-[72px] truncate">{s.user.username}</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-300">{s.category}</span>
        </button>
      ))}
    </div>
  )
}
