
NODE_ENV=production

## ESM build
### JS files
npx babel src --extensions '.ts' --out-dir lib/esm
### Generate d.ts files
npx tsc --declaration --emitDeclarationOnly --outDir lib/esm
### Copy JSON files
(cd src && find . -name "*.json" -type f -exec sh -c 'mkdir -p "../lib/esm/$(dirname "{}")"; cp "{}" "../lib/esm/{}"' \;)
### Copy existing d.ts files
(cd src && find . -name "*.d.ts" -type f -exec sh -c 'mkdir -p "../lib/esm/$(dirname "{}")"; cp "{}" "../lib/esm/{}"' \;)

## CJS build 
### JS files
npx babel src --config-file ./babel.config.cjs.js --extensions '.ts' --out-dir lib/cjs 
### Generate d.ts files
npx tsc --declaration --emitDeclarationOnly --outDir lib/cjs 
### Copy JSON files
(cd src && find . -name "*.json" -type f -exec sh -c 'mkdir -p "../lib/cjs/$(dirname "{}")"; cp "{}" "../lib/cjs/{}"' \;)
### Copy existing d.ts files
(cd src && find . -name "*.d.ts" -type f -exec sh -c 'mkdir -p "../lib/cjs/$(dirname "{}")"; cp "{}" "../lib/cjs/{}"' \;) 




