import { ClickOpenEditor as Component } from "./clickOpenEditor";
import { ClickOpenEditorProps as Props } from "./types";

export const ClickOpenEditor = process.env.NODE_ENV === "development" ? Component : () => null;
export type ClickOpenEditorProps = Props;
