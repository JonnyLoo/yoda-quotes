const axios = require('axios');
const queryString = require('query-string');
const config = require('../configs');

const getQuotes = async (req, res) => {
  try {
    const quotes = await axios.get(`${config.API_URL}/yoda/v1/quotes`);

    return res.status(200).send(quotes.data);
  } catch (err) {
    return res.status(418).send(err);
  }
}

const getRandomQuote = async (req, res) => {
  try {
    const quote = await axios.get(`${config.API_URL}/yoda/v1/quotes/random`);

    return res.status(200).send(quote.data);
  } catch (err) {
    return res.status(418).send(err);
  }
}

const getStonks = async (req, res) => {
  try {
    const query = queryString.stringify({
      function: 'TIME_SERIES_INTRADAY',
      symbol: req.params.symbol,
      interval: '5min',
      apikey: config.STONKS_APIKEY
    });

    const stonks = await axios.get(`${config.STONKS_URL}?${query}`);
    const meta = stonks.data['Meta Data'];
    const time = stonks.data['Time Series (5min)'];

    const metadata = { symbol: meta['2. Symbol'], lastRefreshed: meta['3. Last Refreshed'] };
    const timeSeries = Object.keys(time)
      .map(date => {
        return { date, price: time[date]['1. open'] };
      })
      .reverse();

    return res.status(200).send({ metadata, timeSeries });
  } catch (err) {
    return res.status(418).send(err);
  }
}

module.exports = {
  getQuotes,
  getRandomQuote,
  getStonks
};
