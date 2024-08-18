import type { AppType } from '@/os/types';
import { useOsStore } from '@/os/osStore';
import classNames from 'classnames';
import { APP_REGISTRY } from '@/apps/constants';
import { usePopover } from '@/utils/usePopover';
import { OsMenu, OsMenuItem, OsMenuDivider } from '@/os/OsMenu';

interface OsDockAppIconProps {
  type: AppType;
}

export const OsDockAppIcon = ({ type }: OsDockAppIconProps) => {
  const { unminimizeApp, openDockAppMenu, closeDockAppMenu } = useOsStore(
    (state) => state.actions
  );
  const apps = useOsStore((state) => state.apps);
  const menuIsOpen = useOsStore((state) => state.dockMenuOpenAppType === type);

  const {
    popoverAnchorEl,
    isPopoverOpen,
    onPopoverComponentClick,
    onPopoverClose,
  } = usePopover();

  const { Icon, name } = APP_REGISTRY[type];
  const isUsingApp = Object.values(apps).some((app) => app.type === type);

  const onMenuClose = () => {
    closeDockAppMenu();
    onPopoverClose();
  };

  return (
    <>
      <div
        className="group/app flex flex-row items-center gap-1"
        onClick={() => {
          Object.values(apps).forEach((app) => {
            if (app.type === type && app.location.type === 'minimized') {
              unminimizeApp(app.id);
            }
          });
        }}
        onContextMenu={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onPopoverComponentClick(e);
          openDockAppMenu(type);
        }}
      >
        <div
          className={classNames(
            'fixed-size-[4px] rounded-full bg-white',
            !isUsingApp && 'opacity-0'
          )}
        />
        <Icon
          className={classNames(
            menuIsOpen ? '!text-[80px]' : '!text-[50px] hover:!text-[80px]'
          )}
        />
        <div
          className={classNames(
            'flex items-start justify-center flex-col rounded px-2',
            'backdrop-blur-lg bg-neutral-700/80 border-[1px] border-neutral-400/20 text-white whitespace-pre',
            'hidden',
            !menuIsOpen && 'group-hover/app:flex'
          )}
        >
          {name}
        </div>
      </div>
      <OsMenu
        open={menuIsOpen && isPopoverOpen}
        anchorEl={popoverAnchorEl}
        container={document.getElementById('root')!}
        onClose={onMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
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
                  onMenuClose();
                },
              },
            },
          },
        }}
        disableAutoFocusItem
      >
        <OsMenuItem onClick={onMenuClose} disabled>
          New Window...
        </OsMenuItem>
        <OsMenuItem onClick={onMenuClose} disabled>
          New Tab...
        </OsMenuItem>
        <OsMenuDivider />
        <OsMenuItem onClick={onMenuClose} disabled>
          Options
        </OsMenuItem>
        <OsMenuDivider />
        <OsMenuItem onClick={onMenuClose} disabled>
          Show All Windows
        </OsMenuItem>
        <OsMenuItem onClick={onMenuClose} disabled>
          Show
        </OsMenuItem>
        <OsMenuItem onClick={onMenuClose} disabled>
          Force Quit
        </OsMenuItem>
      </OsMenu>
    </>
  );
};
