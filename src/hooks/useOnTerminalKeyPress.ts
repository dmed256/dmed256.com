import * as React from 'react';
import { useStore } from '@/store';
import { commands } from '@/commands';
import { colored } from '@/utils/colors';

const VISIBLE_ASCII = ` !"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_\`abcdefghijklmnopqrstuvwxyz{|}~`;

export const useOnTerminalKeyPress = () => {
  const {
    updateInput,
    appendTerminalText,
    appendPs1,
    setPreviousTerminalHistory,
    setNextTerminalHistory,
    runCommand,
  } = useStore((state) => state.actions);

  const onKeyPress = React.useCallback(
    (e: KeyboardEvent) => {
      const ctrl = e.ctrlKey || e.metaKey;

      let updatedInput = true;
      if (ctrl && e.key === 'a') {
        // -----------------------------------------------
        // Go to beginning of line
        // -----------------------------------------------
        updateInput((prevInput) => [prevInput, 0]);
      } else if (ctrl && e.key === 'e') {
        // -----------------------------------------------
        // Go to end-of-line
        // -----------------------------------------------
        updateInput((prevInput) => [prevInput, prevInput.length]);
      } else if (ctrl && e.key === 'b') {
        // -----------------------------------------------
        // Go back a character
        // -----------------------------------------------
        updateInput((prevInput, prevInputPos) => [prevInput, prevInputPos - 1]);
      } else if (ctrl && e.key === 'f') {
        // -----------------------------------------------
        // Go forward a character
        // -----------------------------------------------
        updateInput((prevInput, prevInputPos) => [prevInput, prevInputPos + 1]);
      } else if (ctrl && e.key === 'k') {
        // -----------------------------------------------
        // Kill the characters after cursor
        // -----------------------------------------------
        updateInput((prevInput, prevInputPos) => [
          prevInput.slice(0, prevInputPos),
          prevInputPos,
        ]);
      } else if (ctrl && (e.key === 'd' || e.key === 'Delete')) {
        // -----------------------------------------------
        // Delete character on cursor
        // -----------------------------------------------
        updateInput((prevInput, prevInputPos) => [
          prevInput.slice(0, prevInputPos) + prevInput.slice(prevInputPos + 1),
          prevInputPos,
        ]);
      } else if ((ctrl && e.key === 'p') || e.key === 'ArrowUp') {
        // -----------------------------------------------
        // Go to previous terminal command
        // -----------------------------------------------
        setPreviousTerminalHistory();
      } else if ((ctrl && e.key === 'n') || e.key === 'ArrowDown') {
        // -----------------------------------------------
        // Go to next terminal command
        // -----------------------------------------------
        setNextTerminalHistory();
      } else if (ctrl && (e.key === 'c' || e.key === 'd')) {
        // -----------------------------------------------
        // Cancel current input
        // -----------------------------------------------
        updateInput((prevInput) => {
          appendTerminalText([
            colored.white(prevInput + '^' + e.key.toUpperCase() + '\n'),
          ]);
          appendPs1();
          return ['', 0];
        });
      } else if (!ctrl && VISIBLE_ASCII.includes(e.key)) {
        // -----------------------------------------------
        // Visible character
        // -----------------------------------------------
        updateInput((prevInput, prevInputPos) => [
          prevInput.slice(0, prevInputPos) +
            e.key +
            prevInput.slice(prevInputPos),
          prevInputPos + 1,
        ]);
      } else if (!ctrl && e.key === 'Backspace') {
        updateInput((prevInput, prevInputPos) => [
          prevInput.slice(0, prevInputPos - 1) + prevInput.slice(prevInputPos),
          prevInputPos - 1,
        ]);
      } else if (!ctrl && e.key === 'Enter') {
        runCommand();
        updatedInput = true;
      } else if (!ctrl && e.key === 'Tab') {
        // -----------------------------------------------
        // Auto-complete potential commands
        // -----------------------------------------------
        updateInput((prevInput, prevInputPos) => {
          const potentialCommands = Object.keys(commands)
            .sort()
            .filter((commandName) => commandName.startsWith(prevInput));

          if (potentialCommands.length === 0) {
            return [prevInput, prevInputPos];
          }

          // Only 1 command so auto-complete to it
          if (potentialCommands.length === 1) {
            if (potentialCommands[0] === prevInput.trim()) {
              return [prevInput, prevInput.length];
            } else {
              return [potentialCommands[0], potentialCommands[0].length];
            }
          }

          appendTerminalText([
            colored.white(prevInput + '\n'),
            colored.white(potentialCommands.join('\t') + '\n'),
          ]);
          appendPs1();

          return [prevInput, prevInput.length];
        });
      } else {
        updatedInput = false;
      }

      if (updatedInput) {
        e.preventDefault();
        e.stopPropagation();
      }
    },
    [updateInput, appendTerminalText, appendPs1, runCommand]
  );

  React.useEffect(() => {
    window.addEventListener('keydown', onKeyPress);
    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  }, [onKeyPress]);
};
