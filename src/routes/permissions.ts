export type AdminPermission =
  | 'view_dashboard'
  | 'manage_users'
  | 'view_posts'
  | 'create_posts'
  | 'manage_post_tags'
  | 'manage_post_categories'

export const rolePermissions: Record<'admin' | 'writer', AdminPermission[]> = {
  admin: [
    'view_dashboard',
    'manage_users',
    'view_posts',
    'create_posts',
    'manage_post_tags',
    'manage_post_categories',
  ],
  writer: ['create_posts'],
}
