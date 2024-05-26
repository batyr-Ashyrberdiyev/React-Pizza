import { create } from "zustand";

export type ActiveCategoryType = {
  view: string;
  id: string;
};

type CategoryStore = {
  activeCategory: ActiveCategoryType;
  setCategory: (obj: ActiveCategoryType) => void;
};

export const useCategory = create<CategoryStore>((set) => ({
  activeCategory: {
    view: "Все",
    id: "all",
  },
  active: false,
  setCategory: (obj) =>
    set((state) => ({ activeCategory: (state.activeCategory = obj) })),
}));
