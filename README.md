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

* `"sourceMap": true` will create a `js.map` file to help debugging