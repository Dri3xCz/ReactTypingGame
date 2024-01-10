import { FunctionComponent, SVGProps } from "react";
import { Route } from "../../routes";

export interface IndicatorProps {
  path: Route;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export function Indicator({ path, Icon }: IndicatorProps) {
  return (
    <a href={path}>
      <Icon className="fill-white ms-4 w-8 h-8" />
    </a>
  );
}
