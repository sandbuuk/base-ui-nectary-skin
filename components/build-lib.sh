
NODE_ENV=production npx babel src --extensions '.ts' --out-dir lib && npx tsc --declaration --emitDeclarationOnly

(cd src && find . -name "*.json" -type f -exec sh -c 'mkdir -p "../lib/$(dirname "{}")"; cp "{}" "../lib/{}"' \;)

