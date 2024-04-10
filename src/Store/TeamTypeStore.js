import { create } from "zustand";

const useTeamTypeStore = create((set) => ({
  TeamType: "organic",
  setTeamType: (value) => set((state) => ({ TeamType: value })),
}));
export default useTeamTypeStore;
