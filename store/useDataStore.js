import { create } from "zustand";

export const useDataStore = create((set) => ({
    cards: [],
    setCards: (cards) => set({cards}),
    fetchCards: async () => {
        const res = await fetch("/api/data");
        const data = await res.json();
        set({ cards: data });
    },
}));