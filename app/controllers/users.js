const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('./passport');
const otp = require('./otp.controller.js');
const sms = require('./sms.controller');
// Load User model
const User = require('../models/User');
const { forwardAuthenticated } = require('../config/auth');

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));

// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));

// Register
router.post('/register', (req, res) => {
  const { name, email,mobile } = req.body;
  let errors = [];

  if (!name || !email || !mobile ) {
    errors.push({ msg: 'Please enter all fields' });
  }

 

  if (errors.length > 0) {
    res.render('register', {
      errors,
      name,
      email,
      mobile
      
      
    });
  } else {
    User.findOne({ mobile: mobile }).then(user => {
      if (user) {
        errors.push({ msg: 'Mobile already exists' });
        res.render('register', {
          errors,
          name,
          email,
		  mobile
          
          
        });
      } else {
		  let loginotp = otp.create();
		  let password = loginotp;
        const newUser = new User({
          name,
          email,
		  mobile,
          password,
		  otp
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.otp = loginotp;
            newUser
              .save()
              .then(user => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
				
				 sms.send({
				"mobile": mobile,
				"message": `Hi , ${loginotp} is your OTP for ngo org login. Do not share OTP with anyone`
				})
                res.redirect('/users/login');
              })
              .catch(err => console.log(err));
          });
        });
      }
    });
  }
});

// Login
router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

// Logout
router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
  res.redirect('/users/login');
});

module.exports = router;
