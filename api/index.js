const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
const password = process.env.MONGODB_PASSWORD;

try {
  mongoose.connect(
    `mongodb+srv://najidnavas2000:${password}@cluster0.nugb9hr.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
  console.log('Connected to MongoDB');
} catch (error) {
  console.error('Error connecting to MongoDB:', error);
}

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  res.json({ requestData: { username, password } });
});

app.listen(4000, () => console.log('Server started on port 4000'));
