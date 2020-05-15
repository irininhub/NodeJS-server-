let users = require("./usersRouter");
let {addUsers, getUsers} = require('./repository');
const express = require('express');
// создаем апп экспресс
const app = express();
// настраиваем его
app.use('/users', users);

app.get('/tasks', async (req, res) => {
    res.send('tasks');

});


// в конец доб-м перехватчик
app.use((req, res) => {
    res.send({value: 404});
});

app.listen(5000, function () {
    console.log('Example app listening on port 5000!');
});
