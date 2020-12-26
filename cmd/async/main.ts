// main function
console.log("speaking")
getANum() // this is run asynchronously
setTimeout(speak,1000)

async function getANum():Promise<void> {
        console.log('aNum starting')
        let n=await promiseNumber()
        console.log(`aNum returned with a value of ${n}.`)
}
function promiseNumber():Promise<number>{
        return new Promise<number>(r => {
                setTimeout(  ()=>r(1),  1000)
        })
}

function speak(){
        console.log("spoken")
}