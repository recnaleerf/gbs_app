//익스프레스 클래스를 이용해 익스프레스 객체 생성
const express = require('express');
const router = express.Router();

const controller = require('./user.controller');

// router.get('/', (req, res) => {
//     return res.json(users);
// });

router.get('/', controller.index);

router.get('/:id', controller.show);

router.delete('/:id', controller.destroy);

router.post('/', controller.create);

module.exports = router;