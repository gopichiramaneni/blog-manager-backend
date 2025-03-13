const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    if (req.url === '/api' && req.method === 'GET') {
        const responseData = { message: 'Hello from the API!' };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/JSON');
        res.end(JSON.stringify(responseData));
    }
    if(req.url==='/api/test' && req.method==='GET') {
        const changedResponse = {message:'Testing your API!'};
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/JSON');
        res.end(JSON.stringify(changedResponse));
    }
    if(req.url==='/api/greeting' && req.method==='GET') {
        const greetingData = {greeting:'Hello from your new endpoint'};
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/JSON');
        res.end(JSON.stringify(greetingData));
    }
    if(req.url==='/api/text' && req.method==='GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Your custom text goes here');
    }
    if(req.url==='/api/details' && req.method==='GET') {
        const detailsData = {user:'Alice', age:25, status:'Active'};
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/JSON');
        res.end(JSON.stringify(detailsData));
    }
    const parsedUrl = url.parse(req.url, true);
    if (parsedUrl.pathname === '/api/greeting' && req.method === 'GET') {
        const name = parsedUrl.query.name;
        const responseData = name ? `Hello, ${name}!` : 'Hello, anonymous!';
        const greeting = { responseData };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/JSON');
        res.end(JSON.stringify(greeting));
        return;
    }
    if (parsedUrl.pathname === '/api/info' && req.method === 'GET') {
        const name = parsedUrl.query.name;
        const age = parsedUrl.query.age;
        if (!name) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/JSON');
            res.end(JSON.stringify({ message: 'name is required!' }));
            return;
        }
        if (!age) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/JSON');
            res.end(JSON.stringify({ message: 'age is required!' }));
            return;
        }
        const info = { message: `Hello, ${name}! You are ${age} years old.` };
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/JSON');
        res.end(JSON.stringify(info));
        return;
    }
    if (parsedUrl.pathname === '/api/users' && req.method === 'GET') {
        const users = [
            { "id": 1, "name": "Alice" },
            { "id": 2, "name": "Bob" }
        ]
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/JSON');
        res.end(JSON.stringify(users));
        return;
    }
    if (parsedUrl.pathname === '/api/isEven' && req.method === 'GET') {
        try {
            const number = parsedUrl.query.number;
            if (!isNaN(number)) {
                if ((number % 2) === 0) {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/JSON');
                    res.end(JSON.stringify({ status: `${number} is even` }));
                    return;
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/JSON');
                res.end(JSON.stringify({ status: `${number} is odd` }));
                return;
            }
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/JSON');
            res.end(JSON.stringify({ status: 'number is required' }));
            return;
        }
        catch (e) {
            console.log('error', e);
        }
    }
    if (parsedUrl.pathname === '/api/uppercase' && req.method === 'GET') {
        const word = parsedUrl.query.word;
        if(word) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/Json');
            res.end(JSON.stringify({upperCase: `${word.toUpperCase()}`}));
            return;
        } 
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/JSON');
        res.end(JSON.stringify({status: 'A word is required'}));
    }
    if (parsedUrl.pathname === '/api/book' && req.method === 'GET') {
        const title = parsedUrl.query.title;
        const author = parsedUrl.query.author;
        if(!title) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/JSON');
            res.end(JSON.stringify({status:'A title is required'}));
            return;
        }
        if(!author) {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/JSON');
            res.end(JSON.stringify({status: 'Author is required'}));
            return;
        }
        const book = { description: `${title} by ${author}`};
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/JSON');
        res.end(JSON.stringify(book));
        return;
    }
});
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});