import type { TerminalState } from '@/apps/Terminal/terminalStore';

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

export interface CommandRunArgs {
  state: TerminalState;
  args: string[];
}

export interface Command {
  help: TerminalText[];
  run: (_: CommandRunArgs) => void;
}
