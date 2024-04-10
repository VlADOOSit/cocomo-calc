import { create } from "zustand";

const useKlocStore = create((set) => ({
  klocValue: 0,
  setKloc: (value) => set((state) => ({ klocValue: value })),
}));
export default useKlocStore;
