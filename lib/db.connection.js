const initOptions = {
    // initialization options;
};

const pgp = require('pg-promise')(initOptions);

const cn = 'postgres://postgres:admin@localhost:5432/express-demo';
const db = pgp(cn);

module.exports = {
    pgp, db
};