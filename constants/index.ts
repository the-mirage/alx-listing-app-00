// constants/index.ts

export const API_BASE_URL: string = "https://api.example.com";
export const MAX_ITEMS_PER_PAGE: number = 10;

export const USER_ROLES = {
  ADMIN: "admin",
  EDITOR: "editor",
  VIEWER: "viewer",
} as const; // 'as const' makes the object properties truly read-only

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];
