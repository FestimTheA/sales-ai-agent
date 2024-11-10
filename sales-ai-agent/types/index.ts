import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type PaginatedResults = {
  items: [];
  pages: number;
  // total: number;
  // has_next: boolean;
  // has_prev: boolean;
};

export type BackendResponse = {
  status: number;
  body?: PaginatedResults;
};
