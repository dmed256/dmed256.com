import type { AppConfig } from '@/apps/types';
import type { FoldersProps } from '@/os/types';
import { FoldersAppIcon } from '@/icons/FoldersAppIcon';
import { Folders } from '@/apps/Folders/Folders';

export const FoldersConfig: AppConfig<FoldersProps> = {
  type: 'folders',
  name: 'Folders',
  Component: Folders,
  Icon: FoldersAppIcon,
};
