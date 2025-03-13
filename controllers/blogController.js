export const createBlogPost = (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        return res.json({ error: 'Missing title or body' });
    }
    return res.json({ success: true, title, body });
};