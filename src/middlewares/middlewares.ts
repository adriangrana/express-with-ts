const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function(app) {
    app.use(bodyParser.json());
    app.use(cors());
    require('../routes')(app);
}
// End of file