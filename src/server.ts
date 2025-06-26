import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import serverless from 'serverless-http';

const dotenv = require('dotenv')
dotenv.config()

const name = process.env.db_name
const password = process.env.db_password




async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://${name}:${password}@cluster0.ubtwufv.mongodb.net/Library?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log('mongodb connected successfully');
 
    
  } catch (error) {
    console.error('Failed to connect to MongoDB or start server:', error);
    process.exit(1); // Exit the process with failure code
  }
}
export const handler = serverless(app);

main()

