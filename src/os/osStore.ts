import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import type { AppType, AppProps, PositionedWindowLocation } from '@/os/types';
import { WINDOW_HEADER_HEIGHT, WINDOW_MIN_PEEK } from '@/os/constants';
import { v4 as uuidv4 } from 'uuid';
import clamp from 'lodash/clamp';

interface SetDesktopDimensionsArgs {
  width: number;
  height: number;
}

interface MoveAppWindowArgs {
  id: string;
  delta: {
    x: number;
    y: number;
  };
}

interface OsState {
  desktopDimensions: {
    width: number;
    height: number;
  };
  apps: Record<string, AppProps>;
  lastPositionedLocationByAppType: Record<AppType, PositionedWindowLocation>;
  focusedApp: string | null;
  appRenderOrder: string[];
  actions: {
    setDesktopDimensions: ({ width, height }: SetDesktopDimensionsArgs) => void;
    focusApp: (id: string | null) => void;
    minimizeApp: (id: string) => void;
    unminimizeApp: (id: string) => void;
    maximizeApp: (id: string) => void;
    unmaximizeApp: (id: string) => void;
    closeApp: (id: string) => void;
    moveAppWindow: (_: MoveAppWindowArgs) => void;
  };
}

export const useOsStore = create<OsState>()(
  immer((set, get) => {
    const terminalId = uuidv4();
    const terminalLocation = {
      type: 'positioned',
      x: 20,
      y: 20,
      width: window.innerWidth - 60,
      height: window.innerHeight - 100,
    } as const;

    const focusAppAndExists = (id: string) => {
      const {
        apps,
        actions: { focusApp },
      } = get();

      if (apps[id]) {
        focusApp(id);
        return true;
      }

      return false;
    };

    return {
      desktopDimensions: {
        width: 0,
        height: 0,
      },
      apps: {
        [terminalId]: {
          id: terminalId,
          type: 'terminal',
          preMinimizedLocation: terminalLocation,
          lastPositionedLocation: terminalLocation,
          location: terminalLocation,
        },
      },
      lastPositionedLocationByAppType: {
        terminal: terminalLocation,
      },
      focusedApp: terminalId,
      appRenderOrder: [terminalId],
      actions: {
        setDesktopDimensions: ({ width, height }: SetDesktopDimensionsArgs) => {
          set((state) => {
            state.desktopDimensions.width = width;
            state.desktopDimensions.height = height;
          });
        },
        focusApp: (id: string | null) => {
          if (!id) {
            set((state) => {
              state.focusedApp = null;
            });
          } else {
            set((state) => {
              state.focusedApp = id;
              state.appRenderOrder = [
                id,
                ...state.appRenderOrder.filter((appId) => appId !== id),
              ];
            });
          }
        },
        minimizeApp: (id: string) => {
          const {
            apps,
            appRenderOrder,
            actions: { focusApp },
          } = get();
          if (!apps[id]) {
            return;
          }

          const nextFocusedApp = appRenderOrder.find((appId) => appId !== id);
          focusApp(nextFocusedApp ?? null);

          set((state) => {
            const app = state.apps[id]!;
            if (app.location.type === 'minimized') {
              return;
            }
            if (app.location.type === 'positioned') {
              app.lastPositionedLocation = app.location;
            }
            app.preMinimizedLocation = app.location;
            app.location = { type: 'minimized' };
          });
        },
        unminimizeApp: (id: string) => {
          if (!focusAppAndExists(id)) {
            return;
          }

          set((state) => {
            const app = state.apps[id]!;
            if (app.location.type !== 'minimized') {
              return;
            }
            app.location = app.preMinimizedLocation;
          });
        },
        maximizeApp: (id: string) => {
          if (!focusAppAndExists(id)) {
            return;
          }

          set((state) => {
            const app = state.apps[id]!;
            if (app.location.type === 'maximized') {
              return;
            }
            if (app.location.type === 'positioned') {
              app.lastPositionedLocation = app.location;
            }
            app.location = { type: 'maximized' };
          });
        },
        unmaximizeApp: (id: string) => {
          if (!focusAppAndExists(id)) {
            return;
          }

          set((state) => {
            const app = state.apps[id]!;
            if (app.location.type !== 'maximized') {
              return;
            }
            app.location = app.lastPositionedLocation;
          });
        },
        closeApp: (id: string) => {
          const {
            appRenderOrder,
            actions: { focusApp },
          } = get();
          if (!focusAppAndExists(id)) {
            return;
          }

          const nextFocusedApp = appRenderOrder.find((appId) => appId !== id);
          focusApp(nextFocusedApp ?? null);

          set((state) => {
            delete state.apps[id];
            state.appRenderOrder = state.appRenderOrder.filter(
              (appId) => appId !== id
            );
          });
        },
        moveAppWindow: ({ id, delta }: MoveAppWindowArgs) => {
          if (!focusAppAndExists(id)) {
            return;
          }

          const { desktopDimensions } = get();
          set((state) => {
            const app = state.apps[id]!;
            if (app.location.type !== 'positioned') {
              return;
            }

            app.location.x = clamp(
              app.location.x + delta.x,
              -app.location.width + WINDOW_MIN_PEEK,
              desktopDimensions.width - WINDOW_MIN_PEEK
            );
            app.location.y = clamp(
              app.location.y + delta.y,
              0,
              desktopDimensions.height - WINDOW_HEADER_HEIGHT
            );
          });
        },
      },
    };
  })
);
