const introModel = require('./models/intro');
const tagModel = require('./models/tag');

const getTagIds = async (introKey) => {
    return (await tagModel.find({
        deleted: false,
        title: introKey
    }).exec()).map(x => x.id);
}

const getIntroItems = async (introKey) => {
    return await introModel.find({
        deleted: false,
        tags: { $in: await getTagIds(introKey) }
    }).exec();
}
module.exports = {
    getIntroItems
}