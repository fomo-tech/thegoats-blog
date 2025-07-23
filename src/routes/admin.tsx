import React from 'react';
import HomeIcon from '@/components/icons/HomeIcon';
import UsersIcon from '@/components/icons/UsersIcon';
import PostIcon from '@/components/icons/PostIcon';

export type AdminRouteKey =
  | 'dashboard'
  | 'users.list'
  | 'users.create'
  | 'posts.all'
  | 'posts.new';

export interface IMenuItem {
  label: string;
  key: AdminRouteKey | string;
  icon?: React.ReactNode;
  children?: IMenuItem[];
  type?: 'group' | 'divider';
}

const base = '/admin';

const routes: Record<AdminRouteKey, string> = {
  dashboard: `${base}`,
  'users.list': `${base}/users/list`,
  'users.create': `${base}/users/create`,
  'posts.all': `${base}/posts/all`,
  'posts.new': `${base}/posts/new`,
};

export const adminRoutes = (key: AdminRouteKey): string => routes[key];

export const adminMenu: IMenuItem[] = [
  {
    label: 'Navigation',
    key: 'nav',
    type: 'group',
    children: [
      {
        label: 'Dashboard',
        key: 'dashboard',
        icon: <HomeIcon />
      }
    ]
  },
  {
    label: 'Quản lý',
    key: 'nav2',
    type: 'group',
    children: [
      {
        label: 'Người dùng',
        key: 'users',
        icon: <UsersIcon />,
        children: [
          {
            label: 'Danh sách',
            key: 'users.list',
          }, {
            label: 'Thêm',
            key: 'users.create',
          }
        ]
      },
      {
        label: 'Bài viết',
        key: 'posts',
        icon: <PostIcon />,
        children: [
          {
            label: 'Danh sách',
            key: 'posts.all',
          }, {
            label: 'Tạo bài viết',
            key: 'posts.new',
          }
        ]
      }
    ]
  },

];
