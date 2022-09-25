import { getReactInstanceForElement } from "../getReactInstanceForElement";

import { Source, Editors, Instance } from "../types";

function getSourceForInstance({ _debugSource }: Instance) {
  if (!_debugSource) return;

  const { columnNumber = 1, fileName, lineNumber = 1 } = _debugSource;

  return { columnNumber, fileName, lineNumber };
}

export function getUrlSchemeToSource(source: Source, editor: Editors) {
  const { columnNumber = 1, fileName, lineNumber = 1 } = source;

  if (editor === "webstorm") {
    return `webstorm://open?file=${fileName}&line=${lineNumber}&column=${columnNumber}`;
  } else {
    return `vscode://file/${fileName}:${lineNumber}:${columnNumber}`;
  }
}

export function getSourceForElement(element: EventTarget) {
  const instance = getReactInstanceForElement(element);
  const source = getSourceForInstance(instance || {});

  if (source) return source;

  console.warn("Couldn't find a React instance for the element", element);
}
