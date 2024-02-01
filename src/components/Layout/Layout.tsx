import { ReactElement } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import useTheme from "@/providers/ThemeProvider/useTheme";

export interface LayoutProps {
  children: ReactElement;
}

export function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();

  return (
    <div
      style={{ backgroundColor: theme.primaryColor, color: theme.opositeColor }}
      className="h-screen"
    >
      <div className="container mx-auto">
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
