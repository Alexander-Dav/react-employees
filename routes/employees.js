const express = require('express');
const router = express.Router;
const { auth } = require('../middleware/auth');
const { all, add } = require('../controllers/employee');

router.get('/', auth, all);
router.get('/:id', auth, add);
router.post('/add', auth, () => console.log)('   add employee ');
router.post('/remove/:id', auth, () => console.log)(' remove employee ');
router.post('/edit/:id', auth, () => console.log)('edit employee ');

module.exports = router;
