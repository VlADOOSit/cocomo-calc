import { create } from "zustand";

const useAttributesStore = create((set) => ({
  Attr: {
    reliability: 1,
    db_size: 1,
    product_complexity: 1,
    performance_requirements: 1,
    memory_limits: 1,
    instability: 1,
    recovery_time: 1,
    analytic_skills: 1,
    software_development_abilities: 1,
    development_experience: 1,
    experience_using_virtual_machines: 1,
    language_experience: 1,
    development_tools: 1,
    development_methods: 1,
    development_schedule: 1,
  },
  setAttributes: (value) => set((state) => ({ Attr: value })),
}));
export default useAttributesStore;
