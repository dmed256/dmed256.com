import type { Directory } from '@/apps/Terminal/types';
import untypedRoot from '@assets/root.json';

export const homeDirectory = ['Users', 'dmed'];

export const root = untypedRoot as Directory;

export const terminalColors = {
  white: '#FFFFFF',
  blue: '#A1A9E7',
  cyan: '#9AE8FF',
  yellow: '#E3D973',
  orange: '#C57B1B',
  green: '#85EC45',
  red: '#BD514A',
} as const;
