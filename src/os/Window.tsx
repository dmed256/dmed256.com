import * as React from 'react';
import { useOsStore } from '@/os/osStore';
import { MaximizeIcon } from '@/icons/MaximizeIcon';
import { UnmaximizeIcon } from '@/icons/UnmaximizeIcon';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames';
import clamp from 'lodash/clamp';

const MIN_WINDOW_DIM = 200;

interface WindowProps {
  appId: string;
  children: React.ReactNode;
}

export const Window = ({ appId, children }: WindowProps) => {
  const app = useOsStore((state) => state.apps[appId]);
  const desktopDimensions = useOsStore((state) => state.desktopDimensions);
  const { minimizeApp, maximizeApp, unmaximizeApp, closeApp } = useOsStore(
    (state) => state.actions
  );

  if (!app || app.location.type === 'minimized') {
    return null;
  }

  const getPositionedStyle = (): React.CSSProperties => {
    if (app.location.type !== 'positioned') {
      return {};
    }

    const left = clamp(
      app.location.x,
      0,
      desktopDimensions.width - MIN_WINDOW_DIM
    );
    const top = clamp(
      app.location.y,
      0,
      desktopDimensions.height - MIN_WINDOW_DIM
    );
    const width = clamp(app.location.width, 0, desktopDimensions.width - left);
    const height = clamp(
      app.location.height,
      0,
      desktopDimensions.height - left
    );

    return {
      left,
      top,
      minWidth: width,
      maxWidth: width,
      minHeight: height,
      maxHeight: height,
    };
  };

  const isMaximized = app.location.type === 'maximized';
  const MaxIcon = isMaximized ? UnmaximizeIcon : MaximizeIcon;

  return (
    <div
      className={classNames(
        'absolute flex flex-col rounded-b-lg overflow-hidden',
        isMaximized && 'left-0 top-0 w-full h-full',
        app.location.type === 'positioned' && 'rounded-t-lg'
      )}
      style={getPositionedStyle()}
    >
      {/* Header */}
      <div
        className={classNames(
          'flex flex-row px-[14px] py-[10px] bg-neutral-800',
          app.location.type === 'positioned' && 'rounded-t-lg'
        )}
      >
        <div className="group/window flex flex-row p-1 gap-[8px] !text-[12px]">
          <div
            className="flex items-center justify-center fixed-size-[12px] rounded-full bg-red-400"
            onClick={() => closeApp(app.id)}
          >
            <CloseIcon
              className="opacity-0 group-hover/window:opacity-100 !text-black/80"
              fontSize="inherit"
            />
          </div>
          <div
            className="flex items-center justify-center fixed-size-[12px] rounded-full bg-yellow-400"
            onClick={() => minimizeApp(app.id)}
          >
            <RemoveIcon
              className="opacity-0 group-hover/window:opacity-100 !text-black/50"
              fontSize="inherit"
            />
          </div>
          <div
            className="flex items-center justify-center fixed-size-[12px] rounded-full bg-green-500"
            onClick={() =>
              isMaximized ? unmaximizeApp(app.id) : maximizeApp(app.id)
            }
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
