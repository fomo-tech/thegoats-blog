
import { IMenuItem } from './admin'
import { rolePermissions } from './permissions'

export const filterMenuByRole = (
  menu: IMenuItem[],
  role: keyof typeof rolePermissions
): IMenuItem[] => {
  const userPermissions = rolePermissions[role]

  const hasPermission = (item: IMenuItem): boolean => {
    if (!item.permissions) return true
    return item.permissions.some((p) => userPermissions.includes(p))
  }

  const recursiveFilter = (items: IMenuItem[]): IMenuItem[] => {
    return items
      .map((item) => {
        if (item.children) {
          const filteredChildren = recursiveFilter(item.children)
          if (filteredChildren.length > 0) {
            return { ...item, children: filteredChildren }
          }
          return null
        }

        return hasPermission(item) ? item : null
      })
      .filter(Boolean) as IMenuItem[]
  }

  return recursiveFilter(menu)
}
