import { useCallback, useEffect, useState } from "react";

import { getSourceForElement, getUrlSchemeToSource } from "./utils";
import { Editors, State } from "./types";

import "./clickOpenEditor.css";

interface ClickOpenEditorProps {
  editor?: Editors;
}

export const ClickOpenEditor = (props: ClickOpenEditorProps) => {
  const { editor = "webstorm" } = props;
  const [state, setState] = useState<State>(State.IDLE);
  const [target, setTarget] = useState<EventTarget | null>(null);

  const handleClick = useCallback(() => {
    if (!target || state !== State.HOVER) {
      return;
    }

    const source = getSourceForElement(target);

    if (source) {
      const url = getUrlSchemeToSource(source, editor);
      window.open(url);

      // 删除当前 target 的 data-click-open-editor 属性
      if (target instanceof HTMLElement) {
        delete target.dataset.clickOpenEditor;
      }
      setState(State.IDLE);
    }
  }, [editor, state, target]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (state === State.IDLE && e.altKey) {
        setState(State.HOVER);
      }
    },
    [state]
  );

  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (state === State.IDLE || e.altKey) {
        return;
      }

      // 删除当前 target 的 data-click-open-editor 属性
      if (target instanceof HTMLElement) {
        delete target.dataset.clickOpenEditor;
      }

      setState(State.IDLE);
    },
    [state, target]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (state === State.IDLE || !e.target) {
        return;
      }

      // 删除之前 target 的 data-click-open-editor 属性
      if (target instanceof HTMLElement) {
        delete target.dataset.clickOpenEditor;
      }

      const element = e.target as HTMLElement;
      element.dataset.clickOpenEditor = state;
      setTarget(element);
    },
    [state, target]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("mousemove", handleMouseMove, { capture: true });
    window.addEventListener("click", handleClick, { capture: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      window.removeEventListener("click", handleClick, { capture: true });
      window.removeEventListener("mousemove", handleMouseMove, { capture: true });
    };
  }, [editor, handleClick, handleKeyDown, handleKeyUp, handleMouseMove]);

  return null;
};
