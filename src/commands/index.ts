import type { Command } from '@/types';
import { clear } from '@/commands/clear';
import { help } from '@/commands/help';
import { cd } from '@/commands/cd';
import { ls } from '@/commands/ls';
import { tree } from '@/commands/tree';
import { welcome } from '@/commands/welcome';
import { pwd } from '@/commands/pwd';

export const commands: Record<string, Command> = {
  cd,
  clear,
  help,
  ls,
  pwd,
  tree,
  welcome,
};
