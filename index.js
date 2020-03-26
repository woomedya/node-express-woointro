const config = require('./config');
const woointroRouter = require('./src/routers/woointro');
const woointroRepo = require('./src/repositories/woointro');
const introModel = require('./src/repositories/models/intro');
const woocontent = require('woo-utilities/mongoose-woocontent');
const authToken = require('woo-utilities/authTokenHandler');

const init = ({
    publicKey, privateKey, mongoose
}) => {
    config.publicKey = publicKey;
    config.privateKey = privateKey;
    config.mongoose = mongoose;

    authToken.init({
        publicKey,
        privateKey
    });

    woocontent.init({
        mongoose
    });
}

module.exports = {
    init,
    router: {
        woointro: woointroRouter
    },
    repository: {
        woointro: woointroRepo
    },
    model: {
        intro: introModel
    }
}