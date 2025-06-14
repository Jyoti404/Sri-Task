// server.js
import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js'; // Import admin order routes
import heroRoutes from './routes/heroRoutes.js';
import adRoutes from './routes/adRoutes.js'; 
// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

const corsOptions = {
  origin: 'https://sri-task.vercel.app', // Frontend URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type, Authorization'],
};


app.use(cors());
app.use(express.json());

// Define routes
app.use('/api/auth', authRoutes);
app.use('/api/category', categoryRoutes);
app.use('/api/product', productRoutes);
app.use('/api/payment', orderRoutes);
app.use("/api/hero", heroRoutes);
app.use('/api/ad', adRoutes);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
