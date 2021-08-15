var pool = require('./bd');
var md5 = require('md5');

async function getDniAndPass(dni, pass) {
    try {
        var query = "select * from inquilino where documento = ? and password = ? limit 1";
        var rows = await pool.query(query, [dni, md5(pass)]);
        return rows[0];
    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    getDniAndPass
};