import { create } from "zustand";
import { ActiveCategoryType } from "./useCategory";

type SortStore = {
  activeSort: ActiveCategoryType;
  active: boolean;
  setActive: (value: boolean) => void;
  setActiveSort: (item: ActiveCategoryType) => void;
};

export const useSort = create<SortStore>((set) => ({
  activeSort: {
    view: "популярность",
    id: "popularity",
  },
  active: false,
  setActive: (value) => set((state) => ({ active: (state.active = value) })),
  setActiveSort: (item) =>
    set((state) => ({ activeSort: (state.activeSort = item) })),
}));
