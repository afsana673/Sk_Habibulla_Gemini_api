const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// আপনার দেওয়া টোকেন
const GOAT_TOKEN = "AQ.Ab8RN6JBy8ve9eG_ZoMRbv5QzdEtjaMFShre5Q13hs মানবতার_QzdEtjaMFShre5Q13hsDYUxd7Hw"; // Token placeholder matching user query format

app.get('/get-token', (req, res) => {
  res.json({
    status: 200,
    message: "Success",
    data: {
      token: "AQ.Ab8RN6JBy8ve9eG_ZoMRbv5QzdEtjaMFShre5Q13hsDYUxd7Hw"
    }
  });
});

app.listen(port, () => {
  console.log(`API Server running on port ${port}`);
});
