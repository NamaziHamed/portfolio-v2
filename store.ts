import { create } from "zustand";

export const useStore = create((set) => {
  return {
    isOpen: false,
    toggleOpen: () => set((state: any) => ({ isOpen: !state.isOpen })),
  };
});
