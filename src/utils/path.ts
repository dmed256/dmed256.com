import { homeDirectory } from '@/constants';
import type { Directory } from '@/types';
import { root } from '@/constants';

export const joinPath = (path: string[]) => {
  const pathWithoutSlash = path.join('/');
  return path[0] === '~' ? pathWithoutSlash : `/${pathWithoutSlash}`;
};

export const absPath = (path: string[]): string[] => {
  let currentPath: string[] = [];

  path.forEach((part, partIndex) => {
    const cleanPart = part.trim();

    if (partIndex === 0 && part === '~') {
      currentPath = [...homeDirectory];
    } else if (!cleanPart || cleanPart === '.') {
      // No-op
    } else if (cleanPart === '..') {
      currentPath = currentPath.slice(0, currentPath.length - 1);
    } else {
      currentPath.push(cleanPart);
    }
  });

  return currentPath;
};

export const getPathDirectory = (path: string[]): Directory | null => {
  let node: any = root;
  absPath(path).forEach((part) => {
    node = node?.children?.[part];
  });
  return node?.type === 'directory' ? node : null;
};
