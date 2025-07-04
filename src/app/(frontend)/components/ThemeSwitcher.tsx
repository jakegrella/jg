'use client';

import useThemeStore, { ThemeTogglePosition } from '../store';

const ThemeSwitcher = () => {
  const { themeTogglePosition, setThemeTogglePosition } = useThemeStore();

  const ThemeButton = ({ text }: { text: ThemeTogglePosition }) => {
    return (
      <button
        className={
          themeTogglePosition === text.toLowerCase()
            ? 'uppercase underline decoration-primary decoration-2 underline-offset-4 hover:cursor-pointer'
            : 'uppercase hover:cursor-pointer'
        }
        onClick={() => {
          setThemeTogglePosition(text);
        }}
      >
        {text}
      </button>
    );
  };
  return (
    <div className="flex items-baseline gap-2 w-fit">
      <p className="!mb-0">Theme:</p>
      <ThemeButton text="light" />
      <ThemeButton text="system" />
      <ThemeButton text="dark" />
    </div>
  );
};

export default ThemeSwitcher;
