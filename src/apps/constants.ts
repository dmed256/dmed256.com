import type { AppType, AppProps } from '@/os/types';
import { TerminalAppIcon } from '@/icons/TerminalAppIcon';
import { PdfViewerAppIcon } from '@/icons/PdfViewerAppIcon';
import { InterwebAppIcon } from '@/icons/InterwebAppIcon';
import { FoldersAppIcon } from '@/icons/FoldersAppIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import { Terminal } from '@/apps/Terminal/Terminal';
import { PdfViewer } from '@/apps/PdfViewer/PdfViewer';
import { Interweb } from '@/apps/Interweb/Interweb';
import { Folders } from '@/apps/Folders/Folders';

interface AppInfo<T extends AppProps> {
  Component: React.FC<T>;
  Icon: React.FC<SvgIconProps>;
  name: string;
}

export const APP_REGISTRY: Record<AppType, AppInfo<any>> = {
  terminal: {
    Component: Terminal,
    Icon: TerminalAppIcon,
    name: 'Terminal',
  },
  pdfViewer: {
    Component: PdfViewer,
    Icon: PdfViewerAppIcon,
    name: 'PDF Viewer',
  },
  interweb: {
    Component: Interweb,
    Icon: InterwebAppIcon,
    name: 'Interweb',
  },
  folders: {
    Component: Folders,
    Icon: FoldersAppIcon,
    name: 'Folders',
  },
};
