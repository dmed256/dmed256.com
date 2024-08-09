import fs from 'fs';
import childProcess from 'child_process';

const gitLsFilesProc = childProcess.spawnSync('git', ['ls-files'], {
  encoding: 'utf8',
});
if (gitLsFilesProc.error) {
  console.error(`Error running git ls-files: ${err}`);
  process.exit(1);
}

const createRoot = (paths) => {
  let root = {
    type: 'directory',
    children: {},
  };
  paths.forEach((path) => {
    if (!path.startsWith('/')) {
      console.error(`Error with path: ${path}`);
      process.exit(1);
    }

    const parts = path.split('/').slice(1);
    const isDirectory = path.endsWith('/');
    if (isDirectory) {
      parts.pop();
    }

    let node = root.children;
    parts.forEach((part, partIndex) => {
      const isLast = partIndex === parts.length - 1;
      node[part] = node[part] || {};
      node = node[part];

      if (!isLast || isDirectory) {
        node.type = 'directory';
        node.children = node.children || {};
        node = node.children;
      } else {
        node.type = 'file';
      }
    });
  });
  return root;
};

const root = createRoot([
  '/Applications/',
  '/Library/',
  '/System/',
  '/Users/dmed/.bash_history',
  '/Users/dmed/.emacs',
  '/Users/dmed/.Trash/.vimrc',
  '/Users/dmed/git/dmed256/',
  '/Volumes/',
  '/bin/',
  '/cores/',
  '/dev/',
  '/etc/',
  '/home/',
  '/opt/',
  '/private/',
  '/sbin/',
  '/tmp/',
  '/usr/',
  '/var/',
]);

gitLsFilesProc.stdout
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line)
  .forEach((line) => {
    const parts = line.split('/');
    const directories = parts.slice(0, -1);
    const filename = parts.at(-1);

    // Populate directories
    let currentDir =
      root.children.Users.children.dmed.children.git.children.dmed256.children;
    directories.forEach((dir) => {
      if (!(dir in currentDir)) {
        currentDir[dir] = {
          type: 'directory',
          children: {},
        };
      }
      currentDir = currentDir[dir].children;
    });

    currentDir[filename] = {
      type: 'file',
    };
  });

// Save root outputs
fs.writeFile('./src/assets/root.json', JSON.stringify(root, null, 2), (err) => {
  if (err) {
    console.error(`Error writting root.json: ${err}`);
    process.exit(1);
    return;
  }
});
