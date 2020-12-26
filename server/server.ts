// server.ts implements a web server capable of
// servicing multiple concurrent requests.

import svr = require('express') // 1 // HL
const app: svr.Application = svr() // equivalent to function app() { return express() }

app.get("/", function(r,rw) { //r: request, rw: response writer
        rw.send("Hello World!")
})

app.listen(3000,function(){
        console.log("Express http server is listening on port 3000")
})

console.log("The app.listen call is non-blocking.")