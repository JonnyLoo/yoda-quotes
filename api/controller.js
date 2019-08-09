const Request = require('request');

const getYodish = (req, res) => {
  Request.post({
    url: 'https://api.funtranslations.com/translate/yoda',
    formData: req.body
  },
  (err, response, body) => {
    if(err) {
      console.error('a teapot, I am');
      return res.status(418).send('a teapot, I am');
    } else {
      if(response.statusCode === 429) {
        console.error('rate limited, you are');
        return res.status(429).send('rate limited, you are');
      }
      return res.status(200).send(body);
    }
  });
}

module.exports = {
  getYodish
};
