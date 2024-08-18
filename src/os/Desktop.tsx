import * as React from 'react';
import wallpaper from '@assets/wallpaper.png?url';
import { useOsStore } from '@/os/osStore';
import { OsHeader } from '@/os/OsHeader';
import { OsDock } from '@/os/OsDock';
import { App } from '@/apps/App';
import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import type { Modifier } from '@dnd-kit/core';

export const Desktop = () => {
  const apps = useOsStore((state) => state.apps);
  const appRenderOrder = useOsStore((state) => state.appRenderOrder);
  const { setDesktopDimensions, moveAppWindow } = useOsStore(
    (state) => state.actions
  );
  const bodyRef = React.useRef<HTMLDivElement | null>(null);

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const sensors = useSensors(mouseSensor, touchSensor);

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

  const restrictToDesktopBody: Modifier = ({ transform, draggingNodeRect }) => {
    const bodyRect = bodyRef.current?.getBoundingClientRect();
    if (!draggingNodeRect || !bodyRect) {
      return transform;
    }

    // Make sure the window doesn't go above the OS Header
    if (draggingNodeRect.top + transform.y <= bodyRect.top) {
      return { ...transform, y: bodyRect.top - draggingNodeRect.top };
    }

    return transform;
  };

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={({ active, delta }) => {
        moveAppWindow({ id: active?.id as string, delta });
      }}
      modifiers={[restrictToDesktopBody]}
    >
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
    </DndContext>
  );
};
