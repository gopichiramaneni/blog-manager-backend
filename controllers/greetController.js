export const greetUser = (req, res) => {
    const name = req.query.name;
    if(name) {
        return res.json({ greeting: `Hello, ${name}!`});
    }
    else {
        return res.json({ greeting: 'Hello there!'});
    }
};