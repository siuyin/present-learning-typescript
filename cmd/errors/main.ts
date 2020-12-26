// cmd/errors/main.ts
try {
        numberOperationThatCanFail(-2)
} catch(e) {
        console.log(`number operation failed: ${e}`)
} finally {
        console.log("Always executed.")
}

function numberOperationThatCanFail(n:number):number {
        // we could also do the input check here
        let r=Math.sqrt(n)
        if (isNaN(r)) {
                // here, we rely on Math.sqrt to tell us if it failed.
                throw new Error(`can't accept ${n}`)
        }
        return r
}