import { useEffect, useState } from "react";

export function useColorScheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return {
    isDark,
    setIsDark,
  };
}