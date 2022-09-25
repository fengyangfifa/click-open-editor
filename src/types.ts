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

export { Source, Instance, Editors, State };
