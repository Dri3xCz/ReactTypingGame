import useTheme from "@/providers/ThemeProvider/useTheme";

export function Logo() {
  const { theme } = useTheme();

  return (
    <h1
      style={{ color: theme.highlightColor }}
      className="font-semibold text-3xl"
    >
      typingAddict_
    </h1>
  );
}

export default Logo;
