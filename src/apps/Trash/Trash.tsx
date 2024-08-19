import type { TrashProps } from '@/os/types';
import { Window } from '@/os/Window';

export const Trash = (app: TrashProps) => (
  <Window appId={app.id}>
    <iframe className="flex-1" loading="lazy" title="Trash" />
  </Window>
);
