import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app: Application = express();

// --- Middlewares ---
app.use(helmet()); // Adds security headers
app.use(cors());   // Enables CORS
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded data

// --- Root Route (Health Check) ---
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'API is running smoothly',
  });
});

// --- Future Routes go here ---
// app.use('/api/v1/users', userRouter);

export default app;