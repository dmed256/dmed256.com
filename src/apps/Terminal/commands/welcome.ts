import type {
  Command,
  CommandRunArgs,
  TerminalText,
} from '@/apps/Terminal/types';
import { colored } from '@/apps/Terminal/utils/colors';

export const welcomeText = (): TerminalText[] => [
  colored.white('\n'),
  // -----
  colored.white('ヾ(・◇・)ﾉ Hello! My name is David but I usually go by '),
  colored.cyan('dmed'),
  colored.white('.\n'),
  // -----
  colored.white('\n'),
  // -----
  colored.yellow('Work:\n'),
  // -----
  colored.white('    I currently work at '),
  colored.cyan('OpenAI'),
  colored.white(', previously at '),
  colored.cyan('Brex'),
  colored.white(' and before that at '),
  colored.cyan('Two Sigma'),
  colored.white('\n'),
  // -----
  colored.white('\n'),
  // -----
  colored.yellow('Other:\n'),
  // -----
  colored.white(
    "    When not spending time with family, I'm usually coding some fun side project\n"
  ),
  // -----
  colored.white('\n'),
  // -----
  colored.white('PS: Use '),
  colored.green('help'),
  colored.white(' to find working commands\n'),
  colored.white('\n'),
];

export const welcome: Command = {
  help: [colored.white('Prints welcome message')],
  run: ({ state }: CommandRunArgs) => {
    const { appendTerminalText, appendPs1 } = state.actions;
    appendTerminalText(welcomeText());
    appendPs1();
  },
};
