interface Directory {
  type: 'directory';
  name: string;
  children: Record<str, INode>;
}

interface File {
  type: 'file';
  name: string;
}

export type INode = Directory | File;

export interface TerminalText {
  value: string;
  color: string;
}

export interface Command {
  help: TerminalText[];
  run: (args: string[]) => TerminalText[];
}
