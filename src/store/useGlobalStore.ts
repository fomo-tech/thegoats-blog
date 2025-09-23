// store/useGlobalStore.ts
import { create } from "zustand";

interface GlobalAppState {
  isToggleNav: boolean;
  handleToggleNav: () => void;
  callBackListComment: () => void;
  isCallBaclListComment: boolean;
}

export const useGlobalStore = create<GlobalAppState>((set) => ({
  isToggleNav: false,
  isCallBaclListComment: false,
  callBackListComment: () =>
    set((state) => ({ isCallBaclListComment: !state.isCallBaclListComment })),
  handleToggleNav: () => set((state) => ({ isToggleNav: !state.isToggleNav })),
}));
