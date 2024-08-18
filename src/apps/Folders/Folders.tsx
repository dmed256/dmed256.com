import type { FoldersProps } from '@/os/types';
import { Window } from '@/os/Window';

export const Folders = (app: FoldersProps) => (
  <Window appId={app.id}>
    <iframe className="flex-1" loading="lazy" title="Folders browser" />
  </Window>
);
