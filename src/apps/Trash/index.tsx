import type { AppConfig } from '@/apps/types';
import type { TrashProps } from '@/os/types';
import { TrashEmptyAppIcon } from '@/icons/TrashEmptyAppIcon';
import { TrashNonEmptyAppIcon } from '@/icons/TrashNonEmptyAppIcon';
import { Trash } from '@/apps/Trash/Trash';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import { useOsStore } from '@/os/osStore';
import { getPathDirectory } from '@/os/utils/path';
import { homeDirectory } from '@/os/constants';

const TrashAppIcon = (props: SvgIconProps) => {
  const trashDirectory = useOsStore((state) =>
    getPathDirectory([...homeDirectory, '.Trash'], state.root)
  );
  if (trashDirectory?.children && Object.keys(trashDirectory.children).length) {
    return <TrashNonEmptyAppIcon {...props} />;
  }

  return <TrashEmptyAppIcon {...props} />;
};

export const TrashConfig: AppConfig<TrashProps> = {
  type: 'trash',
  name: 'Trash',
  Component: Trash,
  Icon: TrashAppIcon,
};
