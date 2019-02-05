const express = require('express')
const app = express() // creating a blank server kind of
const port = 3000

app.get('/', (req, res) => res.send('This is a home page'));
app.post('/', (req, res) => {console.log(res); res.status(200).send({ message: 'saves'});
});

app.get('/about', (req,res) => res.send({ message: 'this is about page'}));
app.get('/bootcampinfo', (req, res) => res.send('<h1>Bootcamp JS 2019 is 1/4th over</h1>'));

 
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // this says start listening 
//on specific port, and console log is- just to see that it is listening to the port