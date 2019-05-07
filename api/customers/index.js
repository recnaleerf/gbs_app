//익스프레스 클래스를 이용해 익스프레스 객체 생성
const express = require('express');
const router = express.Router();

const controller = require('./customers.controller');

router.get('/', controller.index);

module.exports = router;