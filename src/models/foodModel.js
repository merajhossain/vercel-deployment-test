const mongoose=require('mongoose');

const DatabaseScheme = mongoose.Schema({
    foodName: { type: String, required: true },
    foodCode: { type: String, unique: true, required: true },
    foodImageUrl: { type: String, required: true },
    foodCategory: { type: String, required: true },
    qty: { type: String, required: true },
    price: { type: String, required: true }
}, { versionKey: 'true' });

module.exports = mongoose.model('foods', DatabaseScheme);
