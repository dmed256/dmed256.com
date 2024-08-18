import type { AppConfig } from '@/apps/types';
import type { TerminalProps } from '@/os/types';
import { TerminalAppIcon } from '@/icons/TerminalAppIcon';
import { Terminal } from '@/apps/Terminal/Terminal';

export const TerminalConfig: AppConfig<TerminalProps> = {
  type: 'terminal',
  name: 'Terminal',
  Component: Terminal,
  Icon: TerminalAppIcon,
};
