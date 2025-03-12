import { create } from "zustand";

interface SystemStore {
  booting: boolean;
  settings: {
    color: string;
    wallpaper: {
      name: string;
      open: boolean;
      preview: string;
      src: string;
      surname: string;
    };
  };
  soundPlayed: boolean;
  ////////////////////////////
  setBooting: (booting: boolean) => void;
  setSoundPlayed: (soundPlayed: boolean) => void;
  setColor: (color: string) => void;
}

const useSystemStore = create<SystemStore>((set) => ({
  booting: false,
  settings: {
    color: "blue",
    wallpaper: {
      name: "Mojave",
      open: false,
      preview: "",
      src: "",
      surname: "",
    },
  },
  soundPlayed: false,
  ////////////////////////////
  setBooting: (booting) => set({ booting }),
  setSoundPlayed: (soundPlayed) => set({ soundPlayed }),
  setColor: (color: string) =>
    set((state) => ({ settings: { ...state.settings, color } })),
}));

export default useSystemStore;
