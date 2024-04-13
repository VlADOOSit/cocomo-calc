import { create } from "zustand";

const useKlocStore = create((set) => ({
  klocValue: NaN,
  setKloc: (value) => set((state) => ({ klocValue: value })),
}));
export default useKlocStore;
