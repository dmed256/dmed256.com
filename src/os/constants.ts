import type { Directory } from '@/os/types';
import untypedRoot from '@assets/root.json';

// Height of a window header
export const WINDOW_HEADER_HEIGHT = 40;

// How much a window is allowed to peek out of the
// left/right sides of the desktop
export const WINDOW_MIN_PEEK = 40;

export const homeDirectory = ['Users', 'dmed'];

export const originalRoot = untypedRoot as Directory;
