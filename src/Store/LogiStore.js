import { create } from "zustand";

const useLoginStore = create((set) => ({
  isLogin: false,
  setIsLogin: (value) => set((state) => ({ isLogin: value })),
}));
export default useLoginStore;
