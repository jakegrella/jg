'use client';

import { useEffect, useState } from 'react';
import useThemeStore, { ThemeTogglePosition } from './store';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { themeTogglePosition } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const root = window.document.documentElement;

    const applyTheme = (themeTogglePosition: ThemeTogglePosition) => {
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

      const appliedTheme = themeTogglePosition === 'system' ? systemDark : themeTogglePosition;
      root.setAttribute('data-theme', appliedTheme);
    };

    applyTheme(themeTogglePosition);

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (themeTogglePosition === 'system') {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, [themeTogglePosition]);

  if (!mounted) return null;

  return <>{children}</>;
};

export default ThemeProvider;
