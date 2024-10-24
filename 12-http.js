const http = require('http');

const server = http.createServer((req ,res) => {
    if(req.url === '/') {
        res.end('Welcome to our homepage')
        return;
    }
    if(req.url === '/about') {
        res.end('Here is our short history')
        return;
    }
    res.end(`
        <H1>Ooops</h1>
        <P> we can't seem to find the page</p>
        <a href="/">back home</a>
    `)
})

server.listen(5000)