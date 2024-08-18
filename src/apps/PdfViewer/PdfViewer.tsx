import type { PdfViewerProps } from '@/os/types';
import { Window } from '@/os/Window';

export const PdfViewer = (app: PdfViewerProps) => {
  const nameParts = app.src.split('/');
  const filename = nameParts[nameParts.length - 1].split('.')[0];

  return (
    <Window appId={app.id}>
      <iframe
        className="flex-1"
        src={app.src}
        loading="lazy"
        title={filename}
      />
    </Window>
  );
};
