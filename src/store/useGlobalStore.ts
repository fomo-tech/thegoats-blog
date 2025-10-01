// store/useGlobalStore.ts
import { SettingMap } from "@/types/setting";
import { create } from "zustand";

interface GlobalAppState {
  isToggleNav: boolean;
  handleToggleNav: () => void;
  callBackListComment: () => void;
  isCallBaclListComment: boolean;
  settings: SettingMap | null;
  setSettings: (settings: SettingMap) => void;
}

export const useGlobalStore = create<GlobalAppState>((set) => ({
  settings: null,
  isToggleNav: false,
  isCallBaclListComment: false,
  callBackListComment: () =>
    set((state) => ({ isCallBaclListComment: !state.isCallBaclListComment })),
  handleToggleNav: () => set((state) => ({ isToggleNav: !state.isToggleNav })),
  setSettings: (settings) => set({ settings }),
}));
