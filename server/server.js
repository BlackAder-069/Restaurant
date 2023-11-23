const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3001;
mongoose.connect('mongodb+srv://nish_07:a08K1FigPuOwTYB9@restaurant-website.7vtzr7d.mongodb.net/Restaurant_website');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

const menuSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    category: String,
    url: String
  });

const Menu = mongoose.model('Menu', menuSchema, 'restaurant_menu');

app.get('/api/menu', async (req, res) => {
    try {
        const menuItems = await Menu.find();
        res.send(menuItems);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching menu items');
    }
});


app.post('/api/reservations', (req, res) => {
  db.collection('reservations').insertOne(req.body, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Reservation failed! Sorry, try again later.');
    } else {
        res.status(200).json({ message: 'Reservation Successful! We are looking forward to seeing you!' });
    }
  });
});



app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});