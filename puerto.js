const http = require('http')

const puerto = 3000

http.createServer(function(request, response){
    response.write('Estoy creando el primer puerto')
    response.end()
}).listen(puerto)

console.log('Acabo de crear mi primer puerto en java script. El puerto es el número ' + puerto)