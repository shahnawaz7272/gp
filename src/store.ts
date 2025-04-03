import { create } from "zustand";

type counterstore = {
  counter: number;
  inc: () => void;
  dec: () => void;
};

export const userCounter = create<counterstore>((set) => ({
  counter: 0,

  inc: () => set((state) => ({ counter: state.counter + 1 })),
  dec: () => set((state) => ({ counter: state.counter - 1 })),
}));

type recp = {
  title: string;
  ingridients: string;
  instruction: string;
};

type recpstore = {
  recps: recp[];
  recp: recp;
  add: () => void;
    resetForm: () => void;
  updateField: (field: string, value: string) => void;
};

export const recpCounter = create<recpstore>((set) => ({
  recps: [],
  recp: {
    title: "",
    ingridients: "",
    instruction: "",
  },

  add: () => set((state) => ({ recps: [...state.recps, state.recp] })),
    resetForm: () =>
        set(() => ({
        recp: {
            title: "",
            ingridients: "",
            instruction: "",
        },
        })),
  updateField: (field, value) =>
    set((state) => ({ recp: { ...state.recp, [field]: value } })),
}));
