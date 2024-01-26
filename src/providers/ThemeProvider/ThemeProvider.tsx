import { ReactNode, createContext, useState } from "react";
import { Theme, defaultTheme } from "@/themes";


export interface ThemeContextType {
  theme: Theme,
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  return (
    <ThemeContext.Provider 
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
