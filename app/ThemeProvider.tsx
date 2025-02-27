"use client";

import { useEffect, useState } from "react";
import useThemeStore from "./store";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const root = window.document.documentElement;

    const appliedTheme =
      theme === "system"
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme;

    root.setAttribute("data-theme", appliedTheme);
  }, [theme]);

  if (!mounted) return null;

  return <>{children}</>;
};

export default ThemeProvider;
