export type MainRouteKey =
    | 'home' | 'post_single'


const routes: Record<MainRouteKey, string | ((param: string) => string)> = {
    home: '/',
    post_single: (slug: string) => `/${slug}`
}

export const mainRoutes = (key: MainRouteKey, param?: string): string => {
    const route = routes[key]
    if (typeof route === 'function') {
        if (!param) throw new Error(`Missing param for dynamic route "${key}"`)
        return route(param)
    }
    return route
}