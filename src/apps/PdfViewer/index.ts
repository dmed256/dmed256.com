import type { AppConfig } from '@/apps/types';
import type { PdfViewerProps } from '@/os/types';
import { PdfViewerAppIcon } from '@/icons/PdfViewerAppIcon';
import { PdfViewer } from '@/apps/PdfViewer/PdfViewer';

export const PdfViewerConfig: AppConfig<PdfViewerProps> = {
  type: 'pdfViewer',
  name: 'PdfViewer browser',
  Component: PdfViewer,
  Icon: PdfViewerAppIcon,
};
