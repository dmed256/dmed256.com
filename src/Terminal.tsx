import * as React from 'react';
import classNames from 'classnames';
import { useStore } from '@/store';
import { useOnTerminalKeyPress } from '@/hooks/useOnTerminalKeyPress';

export const Terminal = () => {
  const terminalText = useStore((state) => state.terminalText);
  const input = useStore((state) => state.input);
  const inputPos = useStore((state) => state.inputPos);
  const endRef = React.useRef<HTMLSpanElement>(null);

  useOnTerminalKeyPress();

  React.useEffect(() => {
    endRef.current?.scrollIntoView();
  }, [endRef, input, inputPos, terminalText]);

  return (
    <div className="flex-1 flex flex-col rounded-lg overflow-hidden">
      {/* Header */}
      <div className="flex flex-row px-[20px] py-[14px] bg-neutral-800 rounded-t-lg">
        <div className="flex flex-row gap-[8px]">
          <div className="fixed-size-[12px] rounded-full bg-red-400" />
          <div className="fixed-size-[12px] rounded-full bg-yellow-400" />
          <div className="fixed-size-[12px] rounded-full bg-green-500" />
        </div>
      </div>
      {/* Body */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div
          id="terminal"
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
          <span ref={endRef} />
        </div>
      </div>
    </div>
  );
};

const TerminalInput = () => {
  const input = useStore((state) => state.input);
  const inputPos = useStore((state) => state.inputPos);

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
