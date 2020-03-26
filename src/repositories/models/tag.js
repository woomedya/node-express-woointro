const mongoose = require('../../../config').mongoose;
const ObjectId = require('mongodb').ObjectId;

const tag = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        default: () => {
            return new ObjectId().toString();
        },
        index: true
    },
    title: {
        type: String
    },
    updatedDate: {
        type: Date,
        default: () => {
            return new Date();
        },
    },
    createdDate: {
        type: Date,
        default: () => {
            return new Date();
        },
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.main.model('Tag', tag, 'Tag');
