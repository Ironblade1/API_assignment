const express = require('express');
const cors = require('cors');
const axios = require('axios');

const port = 8000;
const app = express();

app.use(cors()); 

const url = "https://jsonplaceholder.typicode.com/users";

app.get('/api/users	', async (req, res) => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    return res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log('Server running on port ' + port + '...');
});
