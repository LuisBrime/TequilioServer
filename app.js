import express from 'express';
import db from './db';

const app = express();



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});