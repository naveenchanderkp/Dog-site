const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./route');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/excersise', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(error => console.log('MongoDB connection error:', error));

app.use('/api/auth', router);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
