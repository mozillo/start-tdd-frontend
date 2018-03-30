## Error: The module '<project>/node_modules/xxxx'

####was compiled against a different Node.js version using
NODE_MODULE_VERSION xx. This version of Node.js requires
NODE_MODULE_VERSION xx. Please try re-compiling or re-installing

* Also remember to rebuild dev dependencies as electron-rebuild only does prod and optional dependencies by default.

* Use this instead for devDependencies as well
```
./node_modules/.bin/electron-rebuild -p -t "dev,prod,optional"
// -p for parallel
```
