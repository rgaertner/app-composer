
export function startGlobalWatch(baseDir: string = __dirname): void {
  console.log(`global-watch starts in ${baseDir}`);
  /*
  nodemon({
    exec: 'echo',
    watch: [baseDir],
    ignore: ['lib/*'],
    ext: '*'
  }).on('start', () => {
    console.log(`global-watch started in ${baseDir}`);
  }).on('crash', () => {
    console.log('global-watch script crashed for some reason');
  }).on('restart', (files: string[]) => {
    if (!files) { return; }
    console.log(baseDir, files);
    const fnames = files
      .map((fname) => fname.substr(baseDir.length + '/'.length))
      .filter((fname) => !fname.includes('/lib/'))
      .map((fname) => findPathOfPackageJson(fname))
      .filter((fname) => !!fname)
      .filter((fname) => fname !== baseDir);
    const toBuild = [...new Set(fnames)];
    const pnames = toBuild.map((dir) => ({
      name: JSON.parse(fs.readFileSync(path.join(dir, 'package.json')).toString()).name,
      pkgdir: dir
    }));
    pnames.forEach((ps) => {
      const runCmd = `cd ${path.join(baseDir, ps.pkgdir)} && yarn run dev`;
      let ret: execa.ExecaReturns;
      try {
        console.log(runCmd);
        ret = execa.sync('sh', ['-c', runCmd]);
        console.log(ret.stdout);
      } catch (e) {
        console.error(e);
      }
    });
  });
  */
}

// const depTree = {};

// // tslint:disable-next-line: no-any
// function finder(node: any, pkgnames: string[]) {
//   if (pkgnames.includes(node.name)) {
//     return true;
//   }
//   // tslint:disable-next-line: no-any
//   return (node.children || []).find((cnode: any) => finder(cnode, pkgnames));
// }

// const pwds = execa.sync('npx', ['lerna', 'exec', '--', 'sh', '-c',
//       'pwd; [ -f lib/deps.json ] || (mkdir -p lib; yarn list --json > lib/deps.json)']).stdout;
// pwds.split(/[\n\r]+/)
// .map((fname) => fname.substr(__dirname.length + '/'.length))
// .forEach(pwd => {
//   const packageJson = JSON.parse(fs.readFileSync(path.join(pwd, 'package.json')));
//   console.log(`loading dependency for ${packageJson.name} from ${pwd}`);
//   depTree[packageJson.name] = {
//     path: pwd,
//     deps: JSON.parse(fs.readFileSync(path.join(pwd, 'lib', 'deps.json')))
//   }
// });

// const moddef = JSON.parse(execa.sync('npx', ['lerna', 'ls', '--json']).stdout);
// moddef.forEach(mod => {
// const key = execa.sync('npx', ['lerna', `--scope=${mod.name}`, 'exec', 'pwd']).stdout;
// console.log(`loading dependency for ${mod.name}`);
// const paths = execa.sync('npx',
//   ['lerna', `--scope=${mod.name}`,
//  ]).stdout;
// console.log(paths);
// depTree[mode.name] = JSON.parse(
// );

// force a restart
// nodemon.emit('restart');

// force a quit
// nodemon.emit('quit');
