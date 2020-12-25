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

### First time installation
I installed typescript by first starting a disposable docker container (note --rm flag):
```
docker run --rm -it -v $(pwd):/h --user 1000:1000 node:10-stretch-slim bash
```
then
```
npm init
npm install typescript --save-dev
npx tsc -v
```
### Testing framework installation
I decided on using the jest testing framework.
See this [gitbook](https://basarat.gitbook.io/typescript/intro-1/jest) for
installation details.

Briefly:
```
npm install jest @types/jest ts-jest typescript --save-dev
```
then configure jest.
Here is my [jest configuration](jest.config.js).

### Running tests
To run the tests:
```
npm test
or
npx jest
```

### Installation after git clone
```
npm install
```

### Persistent docker container
```
docker run -it -v $(pwd):/h --user 1000:1000 -h nodedev --name nodedev node:10-stretch-slim bash
```
Exit with Ctrl-D,
reconnect with:
```
docker start -ai nodedev
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


## Presentation
This presentation is written in Go [present](https://godoc.org/golang.org/x/tools/present).

I'm running this from a docker container thus:
```
present -http 0.0.0.0:3999 -orighost 127.0.0.1
```
