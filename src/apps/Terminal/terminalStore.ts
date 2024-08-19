import { createContextStore } from '@/utils/createContextStore';
import type { TerminalText } from '@/apps/Terminal/types';
import { homeDirectory } from '@/os/constants';
import { fakeBash, ps1, colored } from '@/apps/Terminal/utils/colors';
import { terminalHistory } from '@/apps/Terminal/utils/terminalHistory';
import { welcomeText } from '@/apps/Terminal/commands/welcome';
import { commands } from '@/apps/Terminal/commands';

export interface TerminalState {
  appId: string;
  pwd: string[];
  input: string;
  inputPos: number;
  terminalText: TerminalText[];
  terminalHistory: string[];
  terminalHistoryPos: number | null;
  actions: {
    setAppId: (appId: string) => void;
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

export const { Provider: TerminalStoreProvider, useStore: useTerminalStore } =
  createContextStore<TerminalState>(({ set, get }) => ({
    appId: '',
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
      setAppId: (appId: string) => {
        set((state) => {
          state.appId = appId;
        });
      },
      setPwd: (pwd: string[]) => {
        set((state) => {
          state.pwd = pwd;
        });
      },
      updateInput: (
        fn: (prevInput: string, prevInputPos: number) => [string, number]
      ) => {
        set((state) => {
          const [nextInput, nextInputPos] = fn(state.input, state.inputPos);
          state.input = nextInput;
          state.inputPos = safeInputPos({
            input: nextInput,
            inputPos: nextInputPos,
          });
        });
      },
      appendTerminalText: (text: TerminalText[]) => {
        set((state) => {
          state.terminalText = [...state.terminalText, ...text];
        });
      },
      appendPs1: () => {
        const { pwd, actions } = get();
        actions.appendTerminalText(ps1(pwd));
      },
      clearTerminalText: () => {
        set((state) => {
          state.terminalText = [];
        });
      },
      shiftTerminalHistoryPos: (delta: number) => {
        set((state) => {
          const safeTerminalHistoryPos =
            state.terminalHistoryPos == null
              ? state.terminalHistory.length
              : state.terminalHistoryPos;

          const nextTerminalHistoryPos = Math.min(
            Math.max(0, safeTerminalHistoryPos + delta),
            state.terminalHistory.length
          );

          const nextInput = state.terminalHistory[nextTerminalHistoryPos] ?? '';

          state.input = nextInput;
          state.inputPos = nextInput.length;
          state.terminalHistoryPos = nextTerminalHistoryPos;
        });
      },
      setPreviousTerminalHistory: () => {
        get().actions.shiftTerminalHistoryPos(-1);
      },
      setNextTerminalHistory: () => {
        get().actions.shiftTerminalHistoryPos(1);
      },
      runCommand: () => {
        const state = get();
        const {
          input,
          actions: { appendTerminalText, appendPs1, updateInput },
        } = state;

        appendTerminalText([colored.white(input + '\n')]);
        set((state) => {
          state.terminalHistory = terminalHistory.push(input);
          state.terminalHistoryPos = null;
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
        const args = commandParts
          .slice(1)
          .map((arg) => arg.trim())
          .filter((arg) => arg);

        const run = commands[commandName]?.run;
        if (run) {
          try {
            run({
              state,
              args,
            });
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
