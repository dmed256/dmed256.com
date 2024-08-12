import * as React from 'react';
import wallpaper from '@assets/wallpaper.png?url';
import { useOsStore } from '@/os/osStore';
import { OsHeader } from '@/os/OsHeader';
import { OsDock } from '@/os/OsDock';
import { App } from '@/apps/App';

export const Desktop = () => {
  const apps = useOsStore((state) => state.apps);
  const appRenderOrder = useOsStore((state) => state.appRenderOrder);
  const { setDesktopDimensions } = useOsStore((state) => state.actions);
  const bodyRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = bodyRef.current;
    if (!node) {
      return;
    }

    const onResize = () => {
      setDesktopDimensions({
        width: node.clientWidth,
        height: node.clientHeight,
      });
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [!!bodyRef.current]);

  return (
    <div
      className="flex-1 flex flex-col m-2 rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
      }}
    >
      <OsHeader />
      <div
        ref={bodyRef}
        className="relative flex-1 flex flex-col p-4 overflow-hidden"
      >
        {appRenderOrder.map((appId) => (
          <App key={appId} {...apps[appId]!} />
        ))}
        <OsDock />
      </div>
    </div>
  );
};
