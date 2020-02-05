const axios = require('axios');

const getQuotes = async (req, res) => {
  try {
    const quotes = await axios.get('http://localhost:3001/yoda/v1/quotes');

    return res.status(200).send(quotes.data);
  }
  catch (err) {
    return res.status(418).send(err);
  }
}

module.exports = {
  getQuotes
};
