import express from 'express';
import patientRoutes from './src/routes/patientRoutes';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;


// Middleware
app.use(express.json());
app.use(cors());
app.use('/api', patientRoutes);

// Simple route to test the server
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
