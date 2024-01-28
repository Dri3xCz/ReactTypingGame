import { FunctionComponent, SVGProps } from "react";
import { Route } from "@/routes";
import useTheme from "@/providers/ThemeProvider/useTheme";
import { useHover } from "@/hooks";

export interface IndicatorProps {
  path: Route;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

export function Indicator({ path, Icon }: IndicatorProps) {
  const { theme } = useTheme();
  const { onHoverChange } = useHover();

  return (
    <a href={path}>
      <Icon
        onMouseLeave={(event) => onHoverChange(event, theme.opositeColor)}
        onMouseOver={(event) => onHoverChange(event, theme.highlightColor)}
        style={{
          fill: theme.opositeColor
        }}
        className="ms-4 w-7 h-7 duration-300"
      />
    </a>
  );
}
