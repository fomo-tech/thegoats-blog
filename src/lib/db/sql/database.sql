-- 1. Categories trước
create table categories (
  id uuid primary key default uuid_generate_v4(),
  name text unique not null,
  slug text unique not null,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- 2. Tags
create table tags (
  id uuid primary key default uuid_generate_v4(),
  name text unique not null,
  slug text unique not null,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- 3. Posts (sau khi categories đã tồn tại)
create table posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  excerpt text,
  content jsonb not null,
  cover_image text,
  author_id uuid references profile(id) on delete set null,
  category_id uuid references categories(id) on delete set null,
  status text default 'draft',
  published_at timestamp,
  created_at timestamp default now(),
  updated_at timestamp default now(),
  sort_order integer default 0,
  is_featured boolean default false, -- Đánh dấu bài viết nổi bật
  is_trending boolean default false, -- Đánh dấu bài viết trending
  views integer default 0,           -- Số lượt xem
  likes integer default 0,           -- Số lượt thích
  seo_title text,                    -- Tiêu đề SEO (nếu khác title)
  seo_description text               -- Mô tả SEO
);

-- 4. post_tags
create table post_tags (
  post_id uuid references posts(id) on delete cascade,
  tag_id uuid references tags(id) on delete cascade,
  primary key (post_id, tag_id)
);

-- Tạo bảng comments dùng UUID cho post_id
CREATE TABLE comments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,  -- ID comment cũng dùng UUID
    post_id UUID NOT NULL,                          -- Tham chiếu đến posts.id
    name VARCHAR(100) NOT NULL,                     -- Tên người comment
    content TEXT NOT NULL,                          -- Nội dung comment
    created_at TIMESTAMPTZ DEFAULT NOW(),           -- Thời gian tạo
    CONSTRAINT fk_post
        FOREIGN KEY (post_id) 
        REFERENCES posts(id)
        ON DELETE CASCADE
);

-- Index để query nhanh theo bài viết
CREATE INDEX idx_comments_post_id ON comments(post_id);

