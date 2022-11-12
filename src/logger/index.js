const winston = require('winston')

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'app-suma' },
    transports: [
        new winston.transports.File({ filename: './logs/app-suma-errors.log', level: 'error' }),
        new winston.transports.File({ filename: './logs/app-suma.log'}),
    ],
})

if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

module.exports = logger
