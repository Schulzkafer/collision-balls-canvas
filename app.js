const http = require("http");
const PORT = process.env.PORT || 3000;
const fs = require("fs");
http.createServer(function (req, res) {
    fs.readFile('index.html', 'utf8', async function (err, data) {
        if (err) throw Error;
        else res.end(data)
    });
}).listen(PORT, () => console.log('port---ok'));