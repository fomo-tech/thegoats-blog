import React from 'react'
import HomeIcon from '@/components/icons/HomeIcon'
import UsersIcon from '@/components/icons/UsersIcon'
import PostIcon from '@/components/icons/PostIcon'
import { AdminPermission, rolePermissions } from './permissions'

export type AdminRouteKey =
  | 'dashboard'
  | 'users.list'
  | 'users.create'
  | 'posts.all'
  | 'posts.new'
  | 'posts.tags'
  | 'posts.categories'
  | 'post.id'
  | 'post.edit'

export interface IMenuItem {
  label: string
  key: AdminRouteKey | string
  icon?: React.ReactNode
  children?: IMenuItem[]
  type?: 'group' | 'divider'
  permissions?: AdminPermission[]
}

const base = '/admin'

const routes: Record<AdminRouteKey, string | ((param: string) => string)> = {
  dashboard: `${base}`,
  'users.list': `${base}/users/list`,
  'users.create': `${base}/users/create`,
  'posts.all': `${base}/posts/all`,
  'posts.new': `${base}/posts/new`,
  'posts.tags': `${base}/posts/tags`,
  'posts.categories': `${base}/posts/categories`,
  'post.id': (slug: string) => `${base}/posts/${slug}`,
  'post.edit': (slug: string) => `${base}/posts/edit/${slug}`,
}

export const adminRoutes = (key: AdminRouteKey, param?: string): string => {
  const route = routes[key]
  if (typeof route === 'function') {
    if (!param) throw new Error(`Missing param for dynamic route "${key}"`)
    return route(param)
  }
  return route
}

export const adminMenu: IMenuItem[] = [
  {
    label: 'Điều hướng',
    key: 'navigation',
    type: 'group',
    children: [
      {
        label: 'Bảng điều khiển',
        key: 'dashboard',
        icon: <HomeIcon />,
        permissions: ['view_dashboard'],
      },
    ],
  },
  {
    label: 'Quản lý hệ thống',
    key: 'management',
    type: 'group',
    children: [
      {
        label: 'Người dùng',
        key: 'users',
        icon: <UsersIcon />,
        children: [
          {
            label: 'Danh sách người dùng',
            key: 'users.list',
            permissions: ['manage_users'],
          },
          {
            label: 'Tạo người dùng',
            key: 'users.create',
            permissions: ['manage_users'],
          },
        ],
      },
      {
        label: 'Bài viết',
        key: 'posts',
        icon: <PostIcon />,
        children: [
          {
            label: 'Danh sách bài viết',
            key: 'posts.all',
            permissions: ['view_posts'],
          },
          {
            label: 'Tạo bài viết mới',
            key: 'posts.new',
            permissions: ['create_posts'],
          },
          {
            label: 'Quản lý thẻ',
            key: 'posts.tags',
            permissions: ['manage_post_tags'],
          },
          {
            label: 'Quản lý thể loại',
            key: 'posts.categories',
            permissions: ['manage_post_categories'],
          },
        ],
      },
    ],
  },
]
