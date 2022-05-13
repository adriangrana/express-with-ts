import UserService from "./modules/users/user.service";

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
require('./middlewares/middlewares')(app);


app._router.stack.map(i => {
    if (i.route) {
        console.log('\x1b[32m',`[${i.route.stack[0].method}] ${i.route.path}`,'\x1b[0m');
    }
})

mongoose.connect('mongodb://127.0.0.1:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('Connected to MongoDB');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


