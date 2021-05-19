const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');

const config = require('../../config');
const logger = require('../logger');
class ExpressServer {

    constructor() {

        this.app = express();
        this.port = config.port;
        this.basePathcity = `${config.api.prefix}/cities`;
        this.basePathWeather = `${config.api.prefix}/weather`;

        this._middlewares();
        this._swaggerConfig();

        this._router();
 
        this._notFound();
        this._errorHandler();
    }

    _middlewares() {
        this.app.use(express.json());
        this.app.use(morgan('tiny'));
    }

    _swaggerConfig(){
        this.app.use(
            config.swagger.path, 
            swaggerUi.serve, 
            swaggerUi.setup(require('../swagger/swagger.json'))
        );
    }

    _router() {

        this.app.head("/status", (req, res) => {
            res.status(200).end();
        }); 
        this.app.use(this.basePathcity, require('../../router/cities'));
        this.app.use(this.basePathWeather, require('../../router/weather'));
    }
    

    _notFound() {
        this.app.use((req, res, next) =>{
            const err = new Error("Not Found");
            err.code = 404;
            next(err);
        });
    }

    _errorHandler() {
        this.app.use((err, req, res, next) => {
            const code = err.code || 500;
            
            logger.error(`${code} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            logger.error(err.stack);

            res.status(code);
            const body = {
                error: {
                    code,
                    message: err.message
                }
            }
            res.json(body);
        });
    }

    
    async start() {
        this.app.listen(this.port, (error) =>{
            if (error){
                logger.error(error);
                process.exit(1);
                return;
            }
        })
    }
}

module.exports = ExpressServer;