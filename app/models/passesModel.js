const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let passesSchema = new Schema({
    type: {
        type: String,
        required: true,
        trim: true
    },
    quota: {
        type: Number,
        required: true,
        trim: true
    },
    passes: {
        type: Number,
        required: true,
        trim: true
    },
    cost: {
        type: Number,
        required: true,
        trim: true
    },
}, {
    timestamps: true
});

passesSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

module.exports = mongoose.model('passes', passesSchema);
