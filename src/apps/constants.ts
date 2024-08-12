import type { AppType, AppProps } from '@/os/types';
import { TerminalAppIcon } from '@/icons/TerminalAppIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import { Terminal } from '@/apps/Terminal/Terminal';

interface AppInfo {
  Component: React.FC<AppProps>;
  Icon: React.FC<SvgIconProps>;
  name: string;
}

export const APP_REGISTRY: Record<AppType, AppInfo> = {
  terminal: {
    Component: Terminal,
    Icon: TerminalAppIcon,
    name: 'Terminal',
  },
};
