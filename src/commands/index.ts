import type { Command } from '@/types';
import { clear } from '@/commands/clear';
import { help } from '@/commands/help';
import { ls } from '@/commands/ls';
import { reset } from '@/commands/reset';
import { welcome } from '@/commands/welcome';

export const commands: Record<string, Command> = {
  clear,
  help,
  // ls,
  reset,
  welcome,
};
