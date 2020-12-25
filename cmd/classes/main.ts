// 10 OMIT
import * as ar from "../../arith"

// main function
let tn=new ar.ThreeNums(2,3,4)
console.log('sum 2,3,4 =',tn.sum())
// 20 OMIT

console.log('sumer: 2,3,4 =',mySum(tn))
// 30 OMIT
let aas=new ar.AlsoASumer()
console.log('also a sumer:',mySum(aas))
// 40 OMIT

interface Sumer {
        sum():number
}

function mySum(s: Sumer): number{
        return s.sum()
}
// 50 OMIT
