export const TECH_CATEGORIES = ['All','AI','Agentic AI','Generative AI','Web Dev','Cloud Computing','Blockchain','Data Science','Automation','IT & Career']

export const DEMO_USERS = [
  { id: 'u1', username: 'ai_motivator', email: 'demo@techgram.dev', avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=ai', bio: 'Shipping AI daily 🤖' },
  { id: 'u2', username: 'cloudguru', email: 'cloud@techgram.dev', avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=cloud', bio: '☁️ Cloud + DevOps' },
  { id: 'u3', username: 'webwizard', email: 'web@techgram.dev', avatar: 'https://api.dicebear.com/7.x/bottts-neutral/svg?seed=web', bio: 'React • Supabase • Tailwind' },
]

export const DEMO_STORIES = [
  { id: 's1', user: DEMO_USERS[0], category: 'AI', title: 'Ship 1 AI demo daily', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80', time: '2h' },
  { id: 's2', user: DEMO_USERS[1], category: 'Cloud Computing', title: 'Learn 1 AWS service', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80', time: '5h' },
  { id: 's3', user: DEMO_USERS[2], category: 'Web Dev', title: '100 Days of Code', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80', time: '8h' },
  { id: 's4', user: DEMO_USERS[0], category: 'Agentic AI', title: 'Agents > Prompts', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=80', time: '12h' },
]

export const DEMO_POSTS = [
  { id: 'p1', user: DEMO_USERS[0], category: 'Generative AI', time: '2h', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80', caption: 'Stop watching tutorials. Build 1 tiny GenAI app today. Motivation compounds like interest. 🚀 #BuildInPublic', likes: 342, comments: [{ user: 'cloudguru', text: 'So true! Shipped my first RAG app today' }] },
  { id: 'p2', user: DEMO_USERS[2], category: 'Web Dev', time: '4h', image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80', caption: 'Your first 10 web apps will be ugly. Ship them anyway. #100DaysOfCode', likes: 512, comments: [] },
  { id: 'p3', user: DEMO_USERS[1], category: 'Cloud Computing', time: '7h', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', caption: 'Cloud tip: Learn IAM + VPC deeply once. Everything else becomes easy. ☁️', likes: 289, comments: [] },
  { id: 'p4', user: DEMO_USERS[0], category: 'Agentic AI', time: '1d', image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80', caption: 'Agentic AI workflow: Goal → Plan → Tools → Reflect → Loop. Master this loop.', likes: 678, comments: [] },
  { id: 'p5', user: DEMO_USERS[1], category: 'Automation', time: '1d', image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80', caption: 'Automate 1 boring task this week. You will save 50 hrs/year.', likes: 195, comments: [] },
]

export const DEMO_REELS = [
  { id: 'r1', user: DEMO_USERS[0], category: 'AI', title: '5 AI habits in 30 sec 🤖', video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', poster: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80', likes: 1204, caption: 'Prompt → Build → Ship daily' },
  { id: 'r2', user: DEMO_USERS[2], category: 'Web Dev', title: '0 to deployed in 60s ⚡', video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', poster: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80', likes: 892, caption: 'Vite + Tailwind + Supabase' },
  { id: 'r3', user: DEMO_USERS[1], category: 'Blockchain', title: 'Blockchain explained fast ⛓️', video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', poster: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80', likes: 654, caption: 'Decentralize everything' },
]
