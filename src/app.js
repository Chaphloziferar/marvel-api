import env from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Importing Routes
import characterRoutes from './routes/character.routes.js';

// Initialize the app
env.config();
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Marvel REST API');
});

// Routes Middleware
app.use('/api/character', characterRoutes);

export default app;