import { create } from 'zustand'

type MenuDrawerState = {
  isDrawerCollapsed: boolean;
  setIsDrawerCollapsed: (isDrawerCollapsed: boolean) => void;
  toggleIsDrawerCollapsed: () => void;

  isDrawerOpen: boolean;
  setIsDrawerOpen: (isDrawerOpen: boolean) => void;
  toggleIsDrawerOpen: () => void;
};

const useMenuDrawerStore = create<MenuDrawerState>((set) => ({
  isDrawerOpen: true,
  setIsDrawerOpen: (isDrawerOpen) => set({ isDrawerOpen }),
  toggleIsDrawerOpen: () => set((state) => ({ isDrawerOpen: !state.isDrawerOpen })),

  isDrawerCollapsed: false,
  setIsDrawerCollapsed: (isDrawerCollapsed) => set({ isDrawerCollapsed }),
  toggleIsDrawerCollapsed: () => set((state) => ({ isDrawerCollapsed: !state.isDrawerCollapsed })),
}));

export const useMenuDrawer = () => useMenuDrawerStore();
