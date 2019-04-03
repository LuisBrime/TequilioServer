import express from 'express';
import db from './db';

const app = express();

app.get('/api/tequileros', (req, res) => {
    var result = [];
    var data = db.tequileros;
    
    for (var i = 0; i < data.length; i++) {
        result.push(data[i].name);
    }

    res.status(200).send({
        success: 'true',
        message: 'tequileros retrieved successfuly',
        tequileros: result
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});