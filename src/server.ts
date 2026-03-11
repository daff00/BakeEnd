import * as dotenv from 'dotenv';
import app from './app';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`
    Server is running!
    Base URL: http://localhost:${PORT}
    Environment: ${process.env.NODE_ENV}
  `);
});

// Handle unhandled promise rejections (Industry Standard Safety Net)
process.on('unhandledRejection', (err: Error) => {
  console.error('UNHANDLED REJECTION! Shutting down...');
  console.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});