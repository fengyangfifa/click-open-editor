interface Source {
  columnNumber: number;
  fileName: string;
  lineNumber: number;
}

interface Instance {
  _debugSource?: Source;
}

type Editors = "webstorm" | "vscode";

enum State {
  IDLE = "IDLE",
  HOVER = "HOVER"
}

interface ClickOpenEditorProps {
  editor?: Editors;
}

export { Source, Instance, Editors, State, ClickOpenEditorProps };
