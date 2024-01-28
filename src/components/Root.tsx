import useTheme from "@/providers/ThemeProvider/useTheme";
import { ReactElement } from "react";

export interface RootProps {
  children: ReactElement;
}

export function Root({ children }: RootProps) {
  const { theme } = useTheme();

  return (
    <div
      style={{ backgroundColor: theme.primaryColor, color: theme.opositeColor }}
      className="h-screen"
    >
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
