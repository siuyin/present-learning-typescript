# Concurrency with typescript
Concurrency in typescript is implemented with async / await.

## async functions
An async function returns a promise of
a specified type.
eg.
```
async function myFunc():Promise<number>{...}
```

It is called thus:
```
let num = myFunc()
```

## When to use
Async functions are used to 'unblock' main-line
code.

An external service call will take some
time to fulfil and is a good candidate for implementation as an async function.

Example:
```
async function googleSearch(s:string):Promise<string>{
        return await callGoogleAPI(s)
}

func callGoogleAPI(s:string):Promise<string>{...}
```