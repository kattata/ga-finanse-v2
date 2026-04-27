export interface Customer {
  name: string;
  image: {
    url: string;
  };
  url?: string;
}

export interface USP {
  overheadline?: string;
  headline: string;
  text: string;
  variant?: "small" | "default";
}

export interface NavItem {
  label: string;
  url: string;
}
