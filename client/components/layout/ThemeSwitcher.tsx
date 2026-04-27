"use client"

import { useReducedMotion } from "@/lib/hooks"
import { cn } from "@/lib/utils"
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useRef, useState } from "react"

const themes = [
  { value: "light", label: "Light theme", Icon: SunIcon },
  { value: "system", label: "System theme", Icon: MonitorIcon },
  { value: "dark", label: "Dark theme", Icon: MoonIcon },
] as const

type Pill = { left: number; width: number; visible: boolean }

const HIDDEN: Pill = { left: 0, width: 0, visible: false }

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([])
  const [pill, setPill] = useState<Pill>(HIDDEN)
  const [animate, setAnimate] = useState(false)
  const reducedMotion = useReducedMotion()
  const animatePill = animate && !reducedMotion

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const measure = () => {
    const activeIndex = themes.findIndex(({ value }) => value === theme)
    const el = buttonRefs.current[activeIndex]
    setPill(
      el
        ? { left: el.offsetLeft, width: el.offsetWidth, visible: true }
        : HIDDEN,
    )
  }

  useEffect(() => {
    if (!mounted) return
    measure()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, mounted])

  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimate(true))
    window.addEventListener("resize", measure)
    return () => {
      cancelAnimationFrame(id)
      window.removeEventListener("resize", measure)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="relative inline-flex items-center rounded-full border border-neutral-200 bg-white p-0.5 dark:border-neutral-800 dark:bg-neutral-900"
    >
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute top-0.5 bottom-0.5 rounded-full bg-neutral-100 dark:bg-neutral-700",
          {
            "transition-[left,width,opacity] duration-300 ease-out":
              animatePill,
          },
        )}
        style={{
          left: pill.left,
          width: pill.width,
          opacity: pill.visible ? 1 : 0,
        }}
      />
      {themes.map(({ value, label, Icon }, index) => {
        const active = mounted && theme === value
        return (
          <button
            key={value}
            ref={(el) => {
              buttonRefs.current[index] = el
            }}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            onClick={() => setTheme(value)}
            className={cn(
              "relative inline-flex size-7 items-center justify-center rounded-full transition-colors",
              {
                "text-neutral-900 dark:text-white": active,
                "text-neutral-400 hover:text-neutral-600 dark:text-neutral-500 dark:hover:text-neutral-300":
                  !active,
              },
            )}
          >
            <Icon className="size-4" aria-hidden="true" />
          </button>
        )
      })}
    </div>
  )
}
