import { homeDirectory } from '@/os/constants';
import type { Directory } from '@/os/types';
import { useOsStore } from '@/os/osStore';

export const joinPath = (path: string[]) => {
  const pathWithoutSlash = path.join('/');
  return path[0] === '~' ? pathWithoutSlash : `/${pathWithoutSlash}`;
};

interface SplitPathArgs {
  path: string;
  pwd: string[];
}

export const splitPath = ({ path, pwd }: SplitPathArgs): string[] => {
  if (path.startsWith('/') || path.startsWith('~')) {
    return absPath(path.split('/'));
  }
  return absPath([...pwd, ...path.split('/')]);
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

interface GetPathDirectoryArgs {
  path: string[];
  root?: Directory | null | undefined;
}

export const getPathDirectory = ({
  path,
  root,
}: GetPathDirectoryArgs): Directory | null => {
  let node: any = root ?? useOsStore.getState().root;
  absPath(path).forEach((part) => {
    node = node?.children?.[part];
  });
  return node?.type === 'directory' ? node : null;
};
