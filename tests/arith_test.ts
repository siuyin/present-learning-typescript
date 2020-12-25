import {sum,ThreeNums} from "../arith"
test('sum',()=>{
        expect(sum(2,3)).toBe(5)
})

test('ThreeNums',()=>{
        let tn=new ThreeNums(2,3,4)
        expect(tn.sum()).toBe(9)
})