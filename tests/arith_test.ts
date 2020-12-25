import {sum,ThreeNums,AlsoASumer} from "../arith"

test('sum',()=>{
        expect(sum(2,3)).toBe(5)
})

test('ThreeNums',()=>{
        let tn=new ThreeNums(2,3,4)
        expect(tn.sum()).toBe(9)
        expect(tn.sub()).toBe(2-3-4)
})

test('AlsoASumer',()=>{
        let aas=new AlsoASumer()
        expect(aas.sum()).toBe(1)
        expect(aas.sub()).toBe(-1)
})