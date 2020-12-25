import {sum,ThreeNums,AlsoASumer} from "../arith"

test('sum',()=>{
        let dat=[
                {"a":2,"b":3,"s":5},
                {"a":1,"b":2,"s":3},
        ]
        for (let v of dat){
                let o = sum(v["a"],v["b"])
                expect(o).toBe(v["s"])
        }
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