export interface Directory {
  type: 'directory';
  children: Record<string, INode>;
}

export interface File {
  type: 'file';
}

export type INode = Directory | File;

export interface TerminalText {
  value: string;
  color: string;
}

export interface Command {
  help: TerminalText[];
  run: (args: string[]) => void;
}
