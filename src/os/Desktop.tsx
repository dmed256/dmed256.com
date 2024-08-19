import * as React from 'react';
import wallpaper from '@assets/wallpaper.png?url';
import { useOsStore } from '@/os/osStore';
import { OsHeader } from '@/os/OsHeader';
import { OsDock } from '@/os/OsDock';
import { OsMenu, OsMenuItem, OsMenuDivider } from '@/os/OsMenu';
import { getAppHtmlId } from '@/utils/html';
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
  const { setDesktopDimensions, moveAppWindow, focusApp } = useOsStore(
    (state) => state.actions
  );
  const bodyRef = React.useRef<HTMLDivElement | null>(null);

  const mouseSensor = useSensor(MouseSensor);
  const touchSensor = useSensor(TouchSensor);
  const sensors = useSensors(mouseSensor, touchSensor);

  const [rightClickPos, setRightClickPos] = React.useState<DOMRect | null>(
    null
  );
  const unsetRightClickPos = () => setRightClickPos(null);

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
      onDragStart={({ active }) => {
        focusApp(active?.id as string);
      }}
      onDragEnd={({ active, delta }) => {
        moveAppWindow({ id: active.id as string, delta });
      }}
      modifiers={[restrictToDesktopBody]}
    >
      <div
        id="desktop"
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
          onContextMenu={(e) => {
            e.preventDefault();
            const x = e.pageX;
            const y = e.pageY;
            setRightClickPos({
              left: x,
              right: x + 1,
              bottom: y,
              top: y + 1,
              height: 1,
              width: 1,
              x,
              y,
              toJSON: () => {},
            });
          }}
        >
          {appRenderOrder.map((appId) => (
            <div key={appId} id={getAppHtmlId(appId)}>
              <App key={appId} {...apps[appId]!} />
            </div>
          ))}
          <OsDock />
        </div>
      </div>
      <OsMenu
        open={!!rightClickPos}
        anchorEl={
          rightClickPos &&
          (() => ({
            nodeType: 1,
            getBoundingClientRect: () => rightClickPos,
          }))
        }
        container={document.getElementById('root')!}
        onClose={unsetRightClickPos}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onContextMenu={(e) => {
          e.stopPropagation();
        }}
        slotProps={{
          root: {
            slotProps: {
              backdrop: {
                sx: {
                  backgroundColor: 'transparent',
                },
                onContextMenu: (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  unsetRightClickPos();
                },
              },
            },
          },
        }}
        disableAutoFocusItem
      >
        <OsMenuItem onClick={unsetRightClickPos} disabled>
          New Folder
        </OsMenuItem>
        <OsMenuDivider />
        <OsMenuItem onClick={unsetRightClickPos} disabled>
          Get Info
        </OsMenuItem>
        <OsMenuItem onClick={unsetRightClickPos} disabled>
          Change Wallpaper...
        </OsMenuItem>
        <OsMenuDivider />
        <OsMenuItem onClick={unsetRightClickPos} disabled>
          Use Stacks
        </OsMenuItem>
        <OsMenuItem onClick={unsetRightClickPos} disabled>
          Sort By
        </OsMenuItem>
        <OsMenuItem onClick={unsetRightClickPos} disabled>
          Show View Options
        </OsMenuItem>
      </OsMenu>
    </DndContext>
  );
};
