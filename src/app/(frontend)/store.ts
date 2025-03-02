import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Theme = 'light' | 'dark';
export type ThemeTogglePosition = Theme | 'system';

interface ThemeState {
    theme: Theme
    themeTogglePosition: ThemeTogglePosition
    setThemeTogglePosition: (themeTogglePosition: ThemeTogglePosition) => void;
}

const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: 'light',
            themeTogglePosition: 'system',
            setThemeTogglePosition: (themeTogglePosition) => set({ themeTogglePosition })
        }),
        {
            name: 'theme',
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export default useThemeStore;