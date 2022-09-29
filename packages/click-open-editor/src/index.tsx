import { ClickOpenEditor as Component } from "./clickOpenEditor";

export type { ClickOpenEditorProps } from "./types";
export const ClickOpenEditor = process.env.NODE_ENV === "development" ? Component : () => null;
