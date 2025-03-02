'use client'

import useThemeStore, { ThemeTogglePosition } from '../store'

const ThemeSwitcher = () => {
  const { themeTogglePosition, setThemeTogglePosition } = useThemeStore()

  const ThemeButton = ({ text }: { text: ThemeTogglePosition }) => {
    return (
      <button
        className={
          themeTogglePosition === text.toLowerCase()
            ? 'capitalize underline decoration-primary decoration-2 underline-offset-4 hover:cursor-pointer'
            : 'capitalize hover:cursor-pointer'
        }
        onClick={() => {
          setThemeTogglePosition(text)
        }}
      >
        {text}
      </button>
    )
  }
  return (
    <div className="flex items-baseline gap-2 w-fit">
      <p>Theme:</p>
      <ThemeButton text="light" />
      <ThemeButton text="system" />
      <ThemeButton text="dark" />
    </div>
  )
}

export default ThemeSwitcher
