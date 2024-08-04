import { create } from 'zustand';
import type { TerminalText } from '@/types';
import { ps1, colored } from '@/utils';
import { welcomeText } from '@/commands/welcome';
import { commands } from '@/commands';

interface Store {
  pwd: string[];
  input: string;
  inputPos: number;
  terminalText: TerminalText[];
  actions: {
    updateInput: (
      fn: (prevInput: string, prevInputPos: number) => [string, number]
    ) => void;
    appendTerminalText: (text: TerminalText[]) => void;
    appendPs1: () => void;
    clearTerminalText: () => void;
    runCommand: () => void;
  };
}

const safeInputPos = ({
  input,
  inputPos,
}: {
  input: string;
  inputPos: number;
}): number => {
  if (inputPos >= 0) {
    return Math.min(inputPos, input.length);
  } else {
    return Math.max(0, input.length + inputPos);
  }
};

export const useStore = create<Store>((set, get) => ({
  pwd: ['~'],
  input: '',
  inputPos: 0,
  terminalText: [
    ...ps1(['~']),
    colored.white('welcome\n'),
    ...welcomeText(),
    ...ps1(['~']),
  ],
  actions: {
    updateInput: (
      fn: (prevInput: string, prevInputPos: number) => [string, number]
    ) => {
      const { input, inputPos } = get();
      const [nextInput, nextInputPos] = fn(input, inputPos);
      set({
        input: nextInput,
        inputPos: safeInputPos({ input: nextInput, inputPos: nextInputPos }),
      });
    },
    appendTerminalText: (text: TerminalText[]) => {
      const { terminalText } = get();
      set({
        terminalText: [...terminalText, ...text],
      });
    },
    appendPs1: () => {
      const { pwd, actions } = get();
      actions.appendTerminalText(ps1(pwd));
    },
    clearTerminalText: () => {
      set({ terminalText: '' });
    },
    runCommand: () => {
      const { input } = get();
      const { appendTerminalText, appendPs1, updateInput } = get().actions;

      appendTerminalText([colored.white(input + '\n')]);

      const commandParts = input
        .split()
        .map((part) => part.trim())
        .filter((part) => part);
      if (!commandParts.length) {
        appendPs1();
        updateInput(() => ['', 0]);
        return;
      }

      const commandName = commandParts[0];
      const args = commandParts.slice(1);

      const run = commands[commandName]?.run;
      if (run) {
        run(args);
      } else {
        appendTerminalText([
          colored.white('fake-bash: '),
          colored.red(commandName),
          colored.white(' command not found\n'),
        ]);
        appendPs1();
      }
      updateInput(() => ['', 0]);
    },
  },
}));
