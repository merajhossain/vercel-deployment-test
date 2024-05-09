const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    foodName: { type: String, required: true },
    foodCode: { type: String, unique: true, required: true },
    foodImageUrl: { type: String, required: true },
    foodCategory: { type: String },
    qty: { type: String },
    price: { type: String, required: true }
}, { versionKey: 'true' });

module.exports = mongoose.model('foods', DatabaseScheme);
