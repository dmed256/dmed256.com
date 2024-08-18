import * as React from 'react';
import classNames from 'classnames';
import {
  TerminalStoreProvider,
  useTerminalStore,
} from '@/apps/Terminal/terminalStore';
import { useOnTerminalKeyPress } from '@/apps/Terminal/hooks/useOnTerminalKeyPress';
import { Window } from '@/os/Window';
import type { TerminalProps } from '@/os/types';
import { isMobile } from 'react-device-detect';

export const Terminal = (app: TerminalProps) => (
  <TerminalStoreProvider>
    <TerminalInner {...app} />
  </TerminalStoreProvider>
);

export const TerminalInner = (app: TerminalProps) => {
  const terminalText = useTerminalStore((state) => state.terminalText);
  const inputHash = useTerminalStore(
    (state) => `${terminalText.length}:${state.input}:${state.inputPos}`
  );

  const terminalRef = React.useRef<HTMLDivElement>(null);

  useOnTerminalKeyPress(app.id);

  React.useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = 1_000_000;
    }
  }, [terminalRef, inputHash]);

  return (
    <Window appId={app.id}>
      <div
        ref={terminalRef}
        className={classNames(
          'flex-1 overflow-auto p-2 rounded-b-lg select-text bg-black/80 text-white',
          'whitespace-pre-wrap font-mono text-[12px] leading-[18px]',
          'selection:bg-[#8CA3C5] selection:text-neutral-900'
        )}
      >
        {terminalText.map(({ value, color }, index) => (
          <span style={{ color }} key={index}>
            {value}
          </span>
        ))}
        <TerminalInput />
      </div>
    </Window>
  );
};

const TerminalInput = () => {
  const input = useTerminalStore((state) => state.input);
  const inputPos = useTerminalStore((state) => state.inputPos);
  const { updateInput, runCommand } = useTerminalStore(
    (state) => state.actions
  );

  if (isMobile) {
    return (
      <form
        className="inline"
        onSubmit={(e) => {
          runCommand();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          className="bg-transparent text-white outline-none border-b-[1px] border-b-[#9AE8FF] w-[95%]"
          value={input}
          onChange={(e) => {
            const nextInput = e.currentTarget.value;
            updateInput(() => [nextInput, nextInput.length]);
          }}
        />
      </form>
    );
  }

  // Show the cursor in the character
  if (inputPos < input.length) {
    const left = input.slice(0, inputPos);
    const cursorChar = input[inputPos];
    const right = input.slice(inputPos + 1);

    return (
      <>
        <span>{left}</span>
        <span className="!bg-white !text-neutral-900">{cursorChar}</span>
        <span>{right}</span>
      </>
    );
  }

  return (
    <>
      <span>{input}</span>
      <span className="select-none !bg-white"> </span>
    </>
  );
};
