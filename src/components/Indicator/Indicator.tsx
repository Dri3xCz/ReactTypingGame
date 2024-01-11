import { FunctionComponent, SVGProps } from "react";
import { Route } from "../../routes";

export interface IndicatorProps {
  path: Route;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export function Indicator({ path, Icon }: IndicatorProps) {
  return (
    <a href={path}>
      <Icon className="fill-white ms-4 w-7 h-7" />
    </a>
  );
}
