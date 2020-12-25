import * as c from "../../arith"

// main function
let tn=new c.ThreeNums(2,3,4)
console.log('sum 2,3,4 =',tn.sum())

console.log('sumer: 2,3,4 =',mySum(tn))
let aas=new c.AlsoASumer()
console.log('also a sumer:',mySum(aas))

interface Sumer {
        sum():number
}

function mySum(s: Sumer): number{
        return s.sum()
}