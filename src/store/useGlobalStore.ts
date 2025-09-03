// store/useGlobalStore.ts
import { create } from 'zustand'

interface GlobalAppState {
  isToggleNav: boolean
  handleToggleNav: () => void
}

export const useGlobalStore = create<GlobalAppState>((set) => ({
  isToggleNav: false,
  handleToggleNav: () =>
    set((state) => ({ isToggleNav: !state.isToggleNav })),
}))
