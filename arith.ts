// module arith provides arithmetic routines

/** sum adds a and b and returns a number.
 */
export function sum(a:number,b:number) :number {
        return a+b;
}

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

        sum():number {
                return this.a+this.b+this.c
        }
        sub():number {
                return this.a-this.b-this.c
        }
}

/** AlsoASumer satisfies interface Sumer */
export class AlsoASumer {
        sub():number{
                return -1
        }
        sum():number{
                return 1
        }
}
