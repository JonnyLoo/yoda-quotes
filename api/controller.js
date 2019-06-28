const getHello = (req, res) => {
  return res.status(200).send({ greeting: 'hello' });
};

module.exports = {
  getHello
};
