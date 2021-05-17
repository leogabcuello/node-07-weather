const ExpressServer = require('./server/expressServer');
const config = require('../config');
const logger = require('./logger');

module.exports = async () => {
    
    const server = new ExpressServer();
    logger.info('Express loader');

    server.start();
    logger.info(`server listening on port ${config.port}`);

}