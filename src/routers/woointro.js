const returnModel = require('woo-utilities/returnModel');
const AsyncRouter = require('express-async-router').AsyncRouter;
const authToken = require('woo-utilities/authTokenHandler');
const token = require('../constants/token');
const woointroRepo = require('../repositories/woointro');

const router = AsyncRouter();

router.post('/items', authToken.handler(token.INTRO_ITEMS), async (req, res) => {
    var introKey = req.body.introKey;
    
    var data = await woointroRepo.getIntroItems(introKey);

    res.send(returnModel({
        data: data
    }));
});

module.exports = router;