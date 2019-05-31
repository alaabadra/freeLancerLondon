const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Server is running on 4000!!');
});

module.exports = router;
