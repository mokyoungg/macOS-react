import { create } from "zustand";

export const NAV_SECTIONS = [
  "logo",
  "finder",
  "file",
  "edit",
  "view",
  "go",
  "windows",
  "help",
] as const;

export type NavSection = (typeof NAV_SECTIONS)[number];

const getFormattedDate = () => {
  const now = new Date();

  const weekday = now.toLocaleDateString("en-US", { weekday: "short" }); // Fri
  const month = now.toLocaleDateString("en-US", { month: "short" }); // Jun
  const day = now.getDate().toString().padStart(2, "0"); // 20

  return `${weekday} ${month} ${day}`; // Fri Jun 20
};

const getFormattedTime = () =>
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

interface NavBarStore {
  section: NavSection | null;
  settingsOpen: boolean;
  date: string;
  time: string;
  selectSection: (section: NavSection) => void;
  toggleSettings: () => void;
  setDate: () => void;
}

const useNavBarStore = create<NavBarStore>((set) => ({
  section: null,
  settingsOpen: false,
  date: getFormattedDate(),
  time: getFormattedTime(),
  selectSection: (section) => set({ section, settingsOpen: false }),
  toggleSettings: () =>
    set((state) => {
      const newSettingsOpen = !state.settingsOpen;
      return {
        settingsOpen: newSettingsOpen,
        section: newSettingsOpen ? null : state.section,
      };
    }),
  setDate: () =>
    set({
      date: getFormattedDate(),
      time: getFormattedTime(),
    }),
}));

export default useNavBarStore;
