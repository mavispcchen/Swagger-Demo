var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.get('/users', function(req, res, next) {
  User.find({}, (err, users) => {
    if (err) {
      res.status(500).json({error : err});
      return;
    }
    res.status(200).json(users);
  });
});

router.get('/user/:userId', function(req, res, next) {
  User.findOne({userId : req.params.userId}, (err, user) => {
    if (err) {
      res.status(500).json({error : err});
      return;
    }
    res.status(200).json(user);
  });
});

router.post('/user', function(req, res, next) {
  let user = new User(req.body);
  user.save(user, (err)=> {
    if (err) {
      res.status(500).json({error : err});
      return;
    }
    res.status(200).json({message : 'User added'});
  });
});

router.put('/user/:userId/name/:name', function(req, res, next) {
  User.updateOne({userId : req.params.userId}, {name : req.params.name}, (err) => {
    if (err) {
      res.status(500).json({error : err});
      return;
    }
    res.status(200).json({message : 'User updated'});
  });
});

router.delete('/user/:userId', function(req, res, next) {
  User.deleteOne({userId : req.params.userId}, (err) => {
    if (err) {
      res.status(500).json({error : err});
      return;
    }
    res.status(200).json({message : 'User deleted'});
  });
});

module.exports = router;
