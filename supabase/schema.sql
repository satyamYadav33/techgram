-- TechGram Supabase schema: run in Supabase SQL Editor
-- Auth: Supabase Auth (email/password). Authorization via RLS.

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  avatar text,
  bio text default 'Building in tech daily',
  created_at timestamptz default now()
);

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  category text not null check (category in ('AI','Agentic AI','Generative AI','Web Dev','Cloud Computing','Blockchain','Data Science','Automation','IT & Career')),
  caption text not null,
  image_url text,
  created_at timestamptz default now()
);

create table if not exists reels (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  category text not null,
  title text not null,
  video_url text not null,
  poster_url text,
  caption text,
  created_at timestamptz default now()
);

create table if not exists stories (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  category text not null,
  title text not null,
  image_url text not null,
  expires_at timestamptz default now() + interval '24 hours',
  created_at timestamptz default now()
);

create table if not exists likes (
  user_id uuid references profiles(id) on delete cascade,
  post_id uuid references posts(id) on delete cascade,
  reel_id uuid references reels(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (user_id, post_id, reel_id)
);

create table if not exists comments (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade not null,
  post_id uuid references posts(id) on delete cascade not null,
  text text not null,
  created_at timestamptz default now()
);

create table if not exists follows (
  follower_id uuid references profiles(id) on delete cascade,
  following_id uuid references profiles(id) on delete cascade,
  created_at timestamptz default now(),
  primary key (follower_id, following_id)
);

-- RLS
alter table profiles enable row level security;
alter table posts enable row level security;
alter table reels enable row level security;
alter table stories enable row level security;
alter table likes enable row level security;
alter table comments enable row level security;
alter table follows enable row level security;

-- Public read, owner write
create policy "public read profiles" on profiles for select using (true);
create policy "owner update profile" on profiles for update using (auth.uid() = id);
create policy "owner insert profile" on profiles for insert with check (auth.uid() = id);

create policy "public read posts" on posts for select using (true);
create policy "auth create post" on posts for insert with check (auth.uid() = user_id);
create policy "owner delete post" on posts for delete using (auth.uid() = user_id);

create policy "public read reels" on reels for select using (true);
create policy "auth create reel" on reels for insert with check (auth.uid() = user_id);
create policy "owner delete reel" on reels for delete using (auth.uid() = user_id);

create policy "public read stories" on stories for select using (stories.expires_at > now());
create policy "auth create story" on stories for insert with check (auth.uid() = user_id);

-- Storage buckets (create in Dashboard > Storage): techgram-media (public)
-- insert into storage.buckets (id, name, public) values ('techgram-media','techgram-media', true);
