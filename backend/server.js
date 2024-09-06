

/* import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000; // Port for Express server

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define User schema and model
const userSchema = new mongoose.Schema({
  Firstname: String,
  Lastname: String,
  Email: { type: String, unique: true },
  password: { type: String, required: true } // Added password field
});

const User = mongoose.model('User', userSchema);

// Signup route
app.post('/api/signup', async (req, res) => {
  const { Firstname, Lastname, Email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ Firstname, Lastname, Email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Signup failed' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
 */


import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 5000; // Port for Express server

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/yourdbname')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define User schema and model
const userSchema = new mongoose.Schema({
  Firstname: String,
  Lastname: String,
  Email: { type: String, unique: true },
  password: { type: String, required: true } // Added password field
});

const User = mongoose.model('User', userSchema);

// Signup route
app.post('/api/signup', async (req, res) => {
  const { Firstname, Lastname, Email, password } = req.body;

  try {
    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ Firstname, Lastname, Email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Signup failed' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
    
  try {
    const user = await User.findOne({ Email: email });
    console.log(user)
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }

    // Check if passwords match (plain text comparison)
    if (user.password !== password) {
      return res.status(400).json({ success: false, message: 'Invalid credentials password' });
    }

    // Successful login
    res.status(200).json({ success: true, message: 'You are logged in!' });

  } catch (error) {
    res.status(500).json({ success: false, message: 'Login failed' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
