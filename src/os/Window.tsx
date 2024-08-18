import * as React from 'react';
import { useOsStore } from '@/os/osStore';
import { WINDOW_HEADER_HEIGHT } from '@/os/constants';
import { MaximizeIcon } from '@/icons/MaximizeIcon';
import { UnmaximizeIcon } from '@/icons/UnmaximizeIcon';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames';
import { useDraggable } from '@dnd-kit/core';

interface WindowProps {
  appId: string;
  children: React.ReactNode;
}

export const Window = ({ appId, children }: WindowProps) => {
  const app = useOsStore((state) => state.apps[appId]);
  const { minimizeApp, maximizeApp, unmaximizeApp, closeApp } = useOsStore(
    (state) => state.actions
  );

  const { listeners, setNodeRef, transform } = useDraggable({
    id: appId,
  });

  const positionLocation =
    app.location.type === 'positioned' ? app.location : null;

  if (!app || app.location.type === 'minimized') {
    return null;
  }

  const getPositionedStyle = (): React.CSSProperties => {
    const style: React.CSSProperties = {};

    if (!positionLocation) {
      return style;
    }

    if (transform) {
      style.transform = `translate3d(${transform.x}px, ${transform.y}px, 0)`;
    }

    style.left = positionLocation.x;
    style.top = positionLocation.y;

    const width = positionLocation.width;
    const height = positionLocation.height;

    style.minWidth = style.maxWidth = width;
    style.minHeight = style.maxHeight = height;

    return style;
  };

  const isMaximized = app.location.type === 'maximized';
  const MaxIcon = isMaximized ? UnmaximizeIcon : MaximizeIcon;

  const onClose = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    closeApp(app.id);
  };

  const onMinimize = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    minimizeApp(app.id);
  };

  const onMaximize = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    if (isMaximized) {
      unmaximizeApp(app.id);
    } else {
      maximizeApp(app.id);
    }
  };

  return (
    <div
      className={classNames(
        'absolute flex flex-col rounded-b-lg overflow-hidden',
        isMaximized && 'left-0 top-0 w-full h-full',
        positionLocation && 'rounded-t-lg'
      )}
      style={getPositionedStyle()}
    >
      {/* Header */}
      <div
        ref={setNodeRef}
        className={classNames(
          'flex flex-row items-center px-[14px] bg-neutral-800',
          positionLocation && 'rounded-t-lg'
        )}
        style={{
          minHeight: WINDOW_HEADER_HEIGHT,
          maxHeight: WINDOW_HEADER_HEIGHT,
        }}
        {...(positionLocation ? listeners : {})}
      >
        <div className="group/window flex flex-row p-1 gap-[8px] !text-[12px]">
          <div
            className="flex items-center justify-center fixed-size-[12px] rounded-full bg-red-400"
            onMouseDown={onClose}
            onTouchStart={onClose}
          >
            <CloseIcon
              className="opacity-0 group-hover/window:opacity-100 !text-black/80"
              fontSize="inherit"
            />
          </div>
          <div
            className="flex items-center justify-center fixed-size-[12px] rounded-full bg-yellow-400"
            onMouseDown={onMinimize}
            onTouchStart={onMinimize}
          >
            <RemoveIcon
              className="opacity-0 group-hover/window:opacity-100 !text-black/50"
              fontSize="inherit"
            />
          </div>
          <div
            className="flex items-center justify-center fixed-size-[12px] rounded-full bg-green-500"
            onMouseDown={onMaximize}
            onTouchStart={onMaximize}
          >
            <MaxIcon
              className="opacity-0 group-hover/window:opacity-100 !text-black/50"
              fontSize="inherit"
            />
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
    </div>
  );
};
