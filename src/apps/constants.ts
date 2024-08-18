import type { AppType, AppProps } from '@/os/types';
import { TerminalAppIcon } from '@/icons/TerminalAppIcon';
import { PdfViewerAppIcon } from '@/icons/PdfViewerAppIcon';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import { Terminal } from '@/apps/Terminal/Terminal';
import { PdfViewer } from '@/apps/PdfViewer/PdfViewer';

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
};
