# Typescript Hello world

## Pre-requisites
1. node  
   ```
   node -v
   ```
1. npm  
   ```
   npm -v
   ```

## Installation
I installed typescript by first starting a disposable docker container (note --rm flag):
```
docker run --rm -it -v $(pwd):/h --user 1000:1000 node:10-stretch-slim bash
```
then
```
npm install typescript --save-dev
npx tsc -v
```

## Hello world
See [cmd/hello](cmd/hello/README.md).

## To transpile all typescript files to javascript
1. create a tsconfig.json file. See [tsconfig.json](tsconfig.json) .
1. npx tsc

run with:
```
node cmd/hello/hello.js  <-- note .js extension
```
