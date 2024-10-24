import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Campaign = {
  id: number;
  name: string;
  description: string;
  created_at: Date;
  updated_at: string;
};
