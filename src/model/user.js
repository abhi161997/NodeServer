const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', userSchema);