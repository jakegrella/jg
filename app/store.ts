import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type Theme = 'light' | 'dark' | 'system';

interface ThemeState {
    theme: Theme
    setTheme: (theme: Theme) => void;
}

const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            theme: 'system',
            setTheme: (theme) => set({ theme })
        }),
        {
            name: 'theme',
            storage: createJSONStorage(() => localStorage)
        }
    )
)

export default useThemeStore;