const config = require('./config');
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
        woointro: () => require('./src/routers/woointro')
    },
    repository: {
        woointro: () => require('./src/repositories/woointro')
    },
    model: {
        intro: () => require('./src/repositories/models/intro')
    }
}