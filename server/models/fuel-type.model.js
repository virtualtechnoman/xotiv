const mongoose = require('mongoose');

const FuelTypeSchema = new mongoose.Schema({
    fuelTypeName: { type: String, required: true, lowercase: true, trim: true },
    isActive: { type: Boolean, required: false, default: true },
    createdAt: { type: Date, default: Date.now },
}, {
    versionKey: false
});


module.exports = mongoose.model('FuelType', FuelTypeSchema);