import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use((cors()));
import { greetUser } from './controllers/greetController.js';
import { getUserProfile } from './controllers/profileController.js';
import { getBlogList } from './controllers/blogListController.js';
import { createBlogPost } from './controllers/blogController.js';

app.get('/', (req, res) => {
    res.send('Hello from Express!');
});
app.get('/api', (req, res) => {
    res.send({ message: 'Welcome to Express API' });
});
app.get('/api/greet', greetUser);
app.get('/api/profile', getUserProfile);
app.get('/api/blog-list', getBlogList);
app.post('/api/blog-post', createBlogPost);

app.listen(3001, () => {
    console.log('Server listening on port 3001');
});