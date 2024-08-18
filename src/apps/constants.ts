import type { AppType } from '@/os/types';
import type { AppConfig } from '@/apps/types';
import { TerminalConfig } from '@/apps/Terminal';
import { PdfViewerConfig } from '@/apps/PdfViewer';
import { InterwebConfig } from '@/apps/Interweb';
import { FoldersConfig } from '@/apps/Folders';

export const APP_REGISTRY: Record<AppType, AppConfig<any>> = {
  terminal: TerminalConfig,
  pdfViewer: PdfViewerConfig,
  interweb: InterwebConfig,
  folders: FoldersConfig,
};
