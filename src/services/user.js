const config = require('../config/jwt');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('../helper/db');
const User = db.User;

async function authenticate({ userId, password }) {
    const user = await User.findOne({ userId: userId });
    if (user && bcrypt.compareSync(password, user.password)) {
        const { password, ...trimmedUser } = user.toObject();
        const token = jwt.sign({ sub: user.id }, config.jwt.secret);
        return {
            ...trimmedUser,
            token
        };
    }
}

async function getAll() {
    return await User.find().select('-password');
}

async function getById(id) {
    return await User.find({userId: id}).select('-password');
}

async function register(user) {

    if (await User.findOne({ userId: user.userId })) {
        throw 'User already registered';
    }

    const newUser = new User(user);

    if(user.password) {
        newUser.password = bcrypt.hashSync(user.password, 10);
    }

    await newUser.save();
    return newUser;
}

async function update(userId, user) {
    
    const existingUser = await User.findOne({userId: userId});

    if(!existingUser) throw 'User not found';

    if(existingUser.userId !== user.userId && await User.findOne({ name: user.name })) {
        throw 'Username ' + user.username + ' is already taken';
    }

    if (user.password) {
        user.hash = bcrypt.hashSync(user.password, 10);
    }

    Object.assign(existingUser, user);

    await existingUser.save();
    return existingUser;
}

async function remove(id) {
    await User.findOneAndDelete({userId: id});
}



module.exports = {
    authenticate,
    getAll,
    getById,
    register,
    update,
    remove
};
