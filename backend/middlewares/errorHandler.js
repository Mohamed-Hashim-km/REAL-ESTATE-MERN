const notfound = (req, res, next) => {
  const error = new Error(`Not Found-${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statuseCode = res.statusCode == 200 ? 500 : res.statusCode;
  let message = err.message;

  res.status(statuseCode).json({
    message,
  });
};

export { notfound, errorHandler };
