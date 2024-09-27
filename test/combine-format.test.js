import winston from "winston";

test("logging with combine format", () => {

    const logger = winston.createLogger({
        level:"info",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.simple() // harus diakhiri dengan format tampilan dan satu saja agar tidak membingungkan.
        ),
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.info("Hello Format");
    logger.warn("Hello Format");
    logger.error("Hello Format");

});