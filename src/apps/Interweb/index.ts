import type { AppConfig } from '@/apps/types';
import type { InterwebProps } from '@/os/types';
import { InterwebAppIcon } from '@/icons/InterwebAppIcon';
import { Interweb } from '@/apps/Interweb/Interweb';

export const InterwebConfig: AppConfig<InterwebProps> = {
  type: 'interweb',
  name: 'Interweb browser',
  Component: Interweb,
  Icon: InterwebAppIcon,
};
