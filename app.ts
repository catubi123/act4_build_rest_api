import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { userRouter } from "

dotenv.config();

// Check if PORT environment variable is available
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000; // Fallback to 3000 if not set

if (isNaN(PORT)) {
    console.error('Invalid PORT value specified in environment variables.');
    process.exit(1); 
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
});
