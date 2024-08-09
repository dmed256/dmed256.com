import { create } from 'zustand';
import type { TerminalText } from '@/types';
import { homeDirectory } from '@/constants';
import { fakeBash, ps1, colored } from '@/utils/colors';
import { terminalHistory } from '@/utils/terminalHistory';
import { welcomeText } from '@/commands/welcome';
import { commands } from '@/commands';

interface Store {
  pwd: string[];
  input: string;
  inputPos: number;
  terminalText: TerminalText[];
  terminalHistory: string[];
  terminalHistoryPos: number | null;
  actions: {
    setPwd: (pwd: string[]) => void;
    updateInput: (
      fn: (prevInput: string, prevInputPos: number) => [string, number]
    ) => void;
    appendTerminalText: (text: TerminalText[]) => void;
    appendPs1: () => void;
    clearTerminalText: () => void;
    shiftTerminalHistoryPos: (delta: number) => void;
    setPreviousTerminalHistory: () => void;
    setNextTerminalHistory: () => void;
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
  pwd: homeDirectory,
  input: '',
  inputPos: 0,
  terminalText: [
    ...ps1(homeDirectory),
    colored.white('welcome\n'),
    ...welcomeText(),
    ...ps1(homeDirectory),
  ],
  terminalHistory: terminalHistory.get(),
  terminalHistoryPos: null,
  actions: {
    setPwd: (pwd: string[]) => {
      set({ pwd });
    },
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
      set({ terminalText: [] });
    },
    shiftTerminalHistoryPos: (delta: number) => {
      const { terminalHistory, terminalHistoryPos } = get();

      const safeTerminalHistoryPos =
        terminalHistoryPos == null
          ? terminalHistory.length
          : terminalHistoryPos;
      const nextTerminalHistoryPos = Math.min(
        Math.max(0, safeTerminalHistoryPos + delta),
        terminalHistory.length
      );

      const nextInput = terminalHistory[nextTerminalHistoryPos] ?? '';
      set({
        input: nextInput,
        inputPos: nextInput.length,
        terminalHistoryPos: nextTerminalHistoryPos,
      });
    },
    setPreviousTerminalHistory: () => {
      get().actions.shiftTerminalHistoryPos(-1);
    },
    setNextTerminalHistory: () => {
      get().actions.shiftTerminalHistoryPos(1);
    },
    runCommand: () => {
      const { input } = get();
      const { appendTerminalText, appendPs1, updateInput } = get().actions;

      appendTerminalText([colored.white(input + '\n')]);
      set({
        terminalHistory: terminalHistory.push(input),
        terminalHistoryPos: null,
      });

      const commandParts = input
        .split(' ')
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
        try {
          run(args);
        } catch (e) {
          console.error(e);
          appendTerminalText(
            fakeBash([
              colored.red(commandName),
              colored.white(' something went wrong\n'),
            ])
          );
          appendPs1();
        }
      } else {
        appendTerminalText(
          fakeBash([
            colored.red(commandName),
            colored.white(' command not found\n'),
          ])
        );
        appendPs1();
      }
      updateInput(() => ['', 0]);
    },
  },
}));
