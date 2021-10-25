const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
//string json data ke convert kore.
app.use(express.json());

const port = 5000;
// const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('WOW! I am Exited  node')
})

const users = [
    { id: 0, name: 'Mehedi', email: 'mehedi@gmailcom', phone: '015945162849' },
    { id: 1, name: 'Ashik', email: 'ashi@gmailcom', phone: '015945162849' },
    { id: 2, name: 'Mychel', email: 'mychel@gmailcom', phone: '015945162849' },
    { id: 3, name: 'Shakil', email: 'shakil@gmailcom', phone: '015945162849' },
    { id: 4, name: 'Rony', email: 'rony@gmailcom', phone: '015945162849' },
    { id: 5, name: 'Nishat', email: 'nishat@gmailcom', phone: '015945162849' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    //Use query parameters
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else { res.send(users) }


});

//App.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})


//Dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana'])
})

app.get('/fruits/mangos/fazli', (req, res) => {
    res.send('Yummy je moja fazli');
})

app.listen(port, () => {
    console.log('listening to port', port)
})