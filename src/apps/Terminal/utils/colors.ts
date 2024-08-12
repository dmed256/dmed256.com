import type { TerminalText } from '@/apps/Terminal/types';
import { homeDirectory, terminalColors } from '@/apps/Terminal/constants';
import { joinPath } from '@/apps/Terminal/utils/path';
import isEqual from 'lodash/isEqual';

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

export const ps1 = (pwd: string[]): TerminalText[] => {
  let renderedPwd = pwd;
  if (isEqual(pwd.slice(0, homeDirectory.length), homeDirectory)) {
    renderedPwd = ['~', ...pwd.slice(homeDirectory.length)];
  }

  return [
    { value: `[${joinPath(renderedPwd)}]\n`, color: terminalColors.yellow },
    { value: '> ', color: terminalColors.cyan },
  ] as const;
};

export const fakeBash = (message: TerminalText[]): TerminalText[] => [
  colored.cyan('fake-bash'),
  colored.white(': '),
  ...message,
];
