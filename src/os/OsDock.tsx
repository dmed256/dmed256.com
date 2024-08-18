import { OsDockAppIcon } from '@/os/OsDockAppIcon';
import { useOsStore } from '@/os/osStore';
import classNames from 'classnames';

export const OsDock = () => {
  const isAppMenuOpen = useOsStore((state) => !!state.dockMenuOpenAppType);

  return (
    // Sliver that triggers dock showing up
    <div className="group absolute left-0 top-0 h-full fixed-w-[8px] hover:fixed-w-[90px]">
      {/* Dock container */}
      <div
        className={classNames(
          'absolute left-[-100px] top-0 h-full fixed-w-[80px] p-[6px]',
          'flex flex-col justify-center',
          'transition-all delay-500 transition-500',
          'group-hover:delay-200 hover:delay-200',
          'group-hover:left-0 hover:left-0',
          isAppMenuOpen && '!left-0'
        )}
      >
        {/* Actual dock */}
        <div
          className={classNames(
            'flex items-start justify-center flex-col gap-2 rounded-lg py-4',
            'backdrop-blur-lg bg-neutral-400/10 border-[1px] border-neutral-400/20'
          )}
        >
          <OsDockAppIcon type="folders" />
          <OsDockAppIcon type="interweb" />
          <OsDockAppIcon type="terminal" />
          <OsDockAppIcon type="pdfViewer" />
        </div>
      </div>
    </div>
  );
};
