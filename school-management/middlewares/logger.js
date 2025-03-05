const logger = (req, res, next) => {
    console.log(`📌 ${req.method} ${req.url} - ${new Date().toISOString()}`);
    next(); // Move to the next middleware or route handler
  };
  
  module.exports = logger;
  