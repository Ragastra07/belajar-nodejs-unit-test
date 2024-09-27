import winston from "winston";

test("create new logger with console & file transport", () => {

    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "application.log"
            }),
            new winston.transports.File({
                level:"error",
                filename: "application-error.log"
            }),
            new winston.transports.File({
                level:"warn",
                filename: "application-warn.log"
            }),
        ]
    });

    logger.info("Hello World");
    logger.info("Hello World");
    logger.info("Hello World");
    logger.info("Hello World");
    logger.error("Hello Error");
    logger.error("Hello Error");
    logger.error("Hello Error");
    logger.warn("Hello Warn");

});