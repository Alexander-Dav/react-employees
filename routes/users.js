var express = require('express');
var router = express.Router();
const { login, register, current } = require('../contriollers/users');
const { auth } = require('../middleware/auth');

/*   /api/user/login */
router.post('/login', login);

/*   /api/user/register */
router.post('/register', register);

/*   /api/user/current */
router.post('/current', auth, current);

module.exports = router;
