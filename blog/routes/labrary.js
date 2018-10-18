const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.send('hellow it`s me, Mario!')
})

router.get('/lol', (req,res) => {
  res.send('lol oru!!!')
})

module.exports = router
