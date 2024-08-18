import type { AppType } from '@/os/types';
import { useOsStore } from '@/os/osStore';
import classNames from 'classnames';
import { APP_REGISTRY } from '@/apps/constants';

export const OsDock = () => (
  // Sliver that triggers dock showing up
  <div className="group absolute left-0 top-0 h-full fixed-w-[8px] hover:fixed-w-[90px]">
    {/* Dock container */}
    <div
      className={classNames(
        'absolute left-[-100px] top-0 h-full fixed-w-[90px] p-[6px]',
        'flex flex-col justify-center',
        'transition-all delay-200 transition-700',
        'group-hover:left-0 hover:left-0'
      )}
    >
      {/* Actual dock */}
      <div
        className={classNames(
          'flex items-start justify-center flex-col gap-2 rounded-lg py-4',
          'backdrop-blur-lg bg-neutral-400/10 border-[1px] border-neutral-400/20'
        )}
      >
        <AppIcon type="terminal" />
        <AppIcon type="pdfViewer" />
      </div>
    </div>
  </div>
);

interface AppIconProps {
  type: AppType;
}

const AppIcon = ({ type }: AppIconProps) => {
  const { unminimizeApp } = useOsStore((state) => state.actions);
  const apps = useOsStore((state) => state.apps);

  const { Icon, name } = APP_REGISTRY[type];
  const isUsingApp = Object.values(apps).some((app) => app.type === type);

  return (
    <div
      className="group/app flex flex-row items-center gap-1"
      onClick={() => {
        Object.values(apps).forEach((app) => {
          if (app.type === type && app.location.type === 'minimized') {
            unminimizeApp(app.id);
          }
        });
      }}
    >
      <div
        className={classNames(
          'fixed-size-[4px] rounded-full bg-white',
          !isUsingApp && 'opacity-0'
        )}
      />
      <Icon className="!text-[50px] hover:!text-[80px]" />
      <div
        className={classNames(
          'flex items-start justify-center flex-col rounded px-1',
          'backdrop-blur-lg bg-neutral-600/90 border-[1px] border-neutral-400/20 text-white',
          'opacity-0 group-hover/app:opacity-100 whitespace-pre'
        )}
      >
        {name}
      </div>
    </div>
  );
};
