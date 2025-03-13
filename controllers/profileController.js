export const getUserProfile = (req, res) => {
    const name = req.query.name;
    const role = req.query.role;
    if(!name) {
        return res.json({status: 'Hello, there!'});
    }
    if(!role) {
        return res.json({status: 'Hello, no role'});
    }
    const info = {name: `${name}`, role: `${role}`}
        return res.json(info);
    };