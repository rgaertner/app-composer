export { AppComposer } from './types/app-composer';
export { EntryPoint } from './types/entry-point';
export { Invocation } from './types/invocation';
export { Invokeable } from './types/invokeable';
export { InvokePackage } from './types/invoke-package';
export { Names } from './types/names';
export { PackageJson } from './types/package-json';
export { ServerConfig } from './types/server-config';
export { Suffixes } from './types/suffixes';
export { WatcherState } from './types/watcher-state';
export { Watcher } from './types/watcher';

export { extractFromCompose } from './functions/extract-from-compose';
export { extractor } from './functions/extractor';
export { filesToNames } from './functions/files-to-names';
export { startGlobalWatch } from './functions/start-global-watch';
export { invokePackage } from './functions/invoke-package';
export { startApp } from './functions/start-app';
export { startPkg } from './functions/start-pkg';
export { startWatchComposer } from './functions/start-watch-composer';
export { transformToCompose } from './functions/transform-to-compose';
export { writeComposedJs } from './functions/write-composed-js';

export default AppComposer;
