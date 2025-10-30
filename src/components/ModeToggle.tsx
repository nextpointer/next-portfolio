"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Toggle
      aria-label="Toggle theme"
      pressed={isDark}
      onPressedChange={() => setTheme(isDark ? "light" : "dark")}
      className="dark:bg-background bg-background transition-all hover:bg-background m-0 p-0 rounded-full ml-auto"
    >
      {isDark ? (
        <Moon className="transition-all h-24" />
      ) : (
        <Sun className="transition-all" />
      )}
    </Toggle>
  );
}
