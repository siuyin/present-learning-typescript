// 10 OMIT

// module arith provides arithmetic routines

/** sum adds a and b and returns a number. */
export function sum(a:number,b:number):number {
        return a+b;
}
// 20 OMIT

/** ThreeNums contains 3 numbers */
export class ThreeNums {
        a: number
        b: number
        c: number

        constructor(a:number,b:number,c:number){
                this.a=a
                this.b=b
                this.c=c
        }

        /** sum returns the sum of its instance variables a,b and c. */
        sum():number {
                return this.a+this.b+this.c
        }
        /** sub returns the a -b -c operation on its instance variables. */
        sub():number {
                return this.a-this.b-this.c
        }
}
// 30 OMIT

/** AlsoASumer satisfies interface Sumer */
export class AlsoASumer {
        /** sub returns a fixed number: -1 */
        sub():number{
                return -1
        }
        /** sum returns a fixed number: 1 */
        sum():number{
                return 1
        }
}
// 40 OMIT
