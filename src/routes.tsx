export const routes = {
  home: "/",
  account: "/account",
  settings: "/settings",
} as const;

export type Route = typeof routes[keyof typeof routes]

