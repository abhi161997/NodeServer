const expressJwt = require('express-jwt');
const config = require('../config/jwt');

const userSerivce = require('../services/user');

function jwt() {
    const secret = config.jwt.secret;
    return expressJwt({ secret, isRevoked }).unless({
        path: [
            '/user/authenticate',
            '/user/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userSerivce.getById(payload.sub);

    if(!user) {
        return done(null, true);
    }

    done();
};

module.exports = jwt;