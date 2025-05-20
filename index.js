const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "logs.log" }),
  ],
});

logger.info("hello, winston");

logger.error("something went wrong", {
  error: new Error("something went wrong"),
});
