# TSCourseWithMaximilian

<br>

## Install TypeScript

```
npm install -g typescript
```

## Compile TypeScript

adding `--watch` or `-w` will compile the file every time you save the file
```
tsc js_file_name -w
```

## Manage Directory by TypeScript
```
tsc --init  
```
this command creates a `tsconfig.json` file

after creating `tsconfig.json` file, you can compile all the ts files in the directory by using:
```
tsc
```
or watch them by using:
```
tsc -w
```
<br>

## tsconfig.json file

* `"target": "es6"` will compile the ts files to es6
* `"sourceMap": true` will create a `js.map` file to help debugging
* `"outDir": "./dist"` will compile the ts files to the `dist` directory
* `"rootDir": "./src"` will compile the ts files from the `src` directory
* `"noEmitOnError": true` won't compile the ts files if there was an issue
* `"noUnusedLocals": true` Enable error reporting when local variables aren't read
* `"noUnusedParameters": true` Enable error reporting when function parameters aren't read
* `"noImplicitReturns": true` Enable error reporting for codepaths that do not explicitly return in a function
