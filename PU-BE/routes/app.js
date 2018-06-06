var express = require('express');
var router = express.Router();
var User = require('../models/user');
var passport = require('passport')
    , LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));
router.post('/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    })
);
router.get('/getuser', function (req, res, next) {

    User.findOne({ userID: req.body.userID }.then, function (err, result) {
        res.send(result);
    });
    // User.db.find;

});
router.post('/adduser', function (req, res, next) {
    var user = new User({
        userFullName: req.body.userFullName,
        userID: req.body.userID,
        userPassword: req.body.userPassword,
        userEmail: req.body.userEmail,
        achievedCredits: req.body.achievedCredits,
        registeredCredits: req.body.registeredCredits,
        cummulativeGpa: req.body.cummulativeGpa,
        semesterGpa: req.body.semesterGpa,
        ukGpa: req.body.ukGpa
    });
    console.log("This is the body " + req.body);
    console.log("This is the user " + user);
    user.save().then(item => {
        res.send("User saved to database");
    })
        .catch(err => {
            console.log(err);
            res.status(400).send("unable to save to database" + err);
        });
});
function getUsers() {
    return User.find();
}
// router.get('/campaign/:cmp', function (req, res, next) {
//     res.render('node', {campaigns: req.params.cmp});
// });
// router.post('/campaign',function (req, res, next){
//     var campaign = req.body.campaignName;
//     res.redirect('/campaign/' + campaign)
// });
module.exports = router;
