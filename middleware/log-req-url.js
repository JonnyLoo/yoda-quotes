// logs request url
module.exports = (req, res, next) => {
  // console.log(req.originalUrl);
  return next();
}
