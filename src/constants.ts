import type { INode } from '@/types';
import untypedTree from '@assets/tree.json';

export const tree = untypedTree as INode[];

export const terminalColors = {
  white: '#FFFFFF',
  blue: '#A1A9E7',
  cyan: '#9AE8FF',
  yellow: '#E3D973',
  orange: '#C57B1B',
  green: '#85EC45',
  red: '#BD514A',
} as const;
