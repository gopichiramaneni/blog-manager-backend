export const getBlogList = (req, res) => {
    const dummyBlogPosts = [
        { title: 'My First Post', body: 'Hello World!'},
        { title: 'Another Post', body: 'Lorem ipsum dolor sit amet...'}
    ];
    return res.json(dummyBlogPosts);
};