import type { TerminalText } from '@/types';
import { terminalColors } from '@/constants';

export const colored = {
  white: (text: string): TerminalText => ({
    value: text,
    color: terminalColors.white,
  }),
  blue: (text: string): TerminalText => ({
    value: text,
    color: terminalColors.blue,
  }),
  cyan: (text: string): TerminalText => ({
    value: text,
    color: terminalColors.cyan,
  }),
  yellow: (text: string): TerminalText => ({
    value: text,
    color: terminalColors.yellow,
  }),
  orange: (text: string): TerminalText => ({
    value: text,
    color: terminalColors.orange,
  }),
  green: (text: string): TerminalText => ({
    value: text,
    color: terminalColors.green,
  }),
  red: (text: string): TerminalText => ({
    value: text,
    color: terminalColors.red,
  }),
};

export const ps1 = (pwd: string[]): TerminalText[] =>
  [
    { value: `[${pwd.join('/')}]\n`, color: terminalColors.yellow },
    { value: '> ', color: terminalColors.cyan },
  ] as const;
