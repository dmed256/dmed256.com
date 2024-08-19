import type { Command } from '@/apps/Terminal/types';
import { cd } from '@/apps/Terminal/commands/cd';
import { clear } from '@/apps/Terminal/commands/clear';
import { help } from '@/apps/Terminal/commands/help';
import { ls } from '@/apps/Terminal/commands/ls';
import { pwd } from '@/apps/Terminal/commands/pwd';
import { rm } from '@/apps/Terminal/commands/rm';
import { touch } from '@/apps/Terminal/commands/touch';
import { tree } from '@/apps/Terminal/commands/tree';
import { welcome } from '@/apps/Terminal/commands/welcome';

export const commands: Record<string, Command> = {
  cd,
  clear,
  help,
  ls,
  pwd,
  rm,
  touch,
  tree,
  welcome,
};
