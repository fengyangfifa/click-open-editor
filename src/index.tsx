import { ClickOpenEditor as Component } from "./clickOpenEditor";

export const ClickOpenEditor = process.env.NODE_ENV === "development" ? Component : () => null;
