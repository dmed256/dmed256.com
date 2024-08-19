import type { Command } from '@/apps/Terminal/types';
import { clear } from '@/apps/Terminal/commands/clear';
import { help } from '@/apps/Terminal/commands/help';
import { cd } from '@/apps/Terminal/commands/cd';
import { ls } from '@/apps/Terminal/commands/ls';
import { tree } from '@/apps/Terminal/commands/tree';
import { touch } from '@/apps/Terminal/commands/touch';
import { welcome } from '@/apps/Terminal/commands/welcome';
import { pwd } from '@/apps/Terminal/commands/pwd';

export const commands: Record<string, Command> = {
  cd,
  clear,
  help,
  ls,
  pwd,
  tree,
  touch,
  welcome,
};
