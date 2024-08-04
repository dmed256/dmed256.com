import fs from 'fs';
import childProcess from 'child_process';

const gitLsFilesProc = childProcess.spawnSync('git', ['ls-files'], {
  encoding: 'utf8',
});
if (gitLsFilesProc.error) {
  console.error(`Error running git ls-files: ${err}`);
  process.exit(1);
}

const treeContents = {};
gitLsFilesProc.stdout
  .split('\n')
  .map((line) => line.trim())
  .filter((line) => line)
  .forEach((line) => {
    const parts = line.split('/');
    const directories = parts.slice(0, -1);
    const filename = parts.at(-1);

    // Populate directories
    let currentDir = treeContents;
    directories.forEach((dir) => {
      if (!(dir in currentDir)) {
        currentDir[dir] = {
          type: 'directory',
          name: dir,
          children: {},
        };
      }
      currentDir = currentDir[dir];
    });

    currentDir[filename] = {
      type: 'file',
      name: filename,
    };
  });

// Save tree outputs
fs.writeFile(
  './src/assets/tree.json',
  JSON.stringify(treeContents, null, 2),
  (err) => {
    if (err) {
      console.error(`Error writting tree.json: ${err}`);
      process.exit(1);
      return;
    }
  }
);
