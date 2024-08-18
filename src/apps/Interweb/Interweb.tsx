import type { InterwebProps } from '@/os/types';
import { Window } from '@/os/Window';

export const Interweb = (app: InterwebProps) => (
  <Window appId={app.id}>
    <iframe className="flex-1" loading="lazy" title="Interweb browser" />
  </Window>
);
