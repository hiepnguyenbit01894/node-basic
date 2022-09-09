const http = require('http')
const server = http.createServer((req,res)=>{
    console.log('run request ....');
    res.setHeader('Content-Type', 'text/html')
    res.write('<h3>Hello World! </h3>')
    res.write('<h2>from me</h2>')
    res.end()
})
server.listen(2828,'localhost',()=>{
    console.log(`Node.JS ser is running on port: 2828 `);
})