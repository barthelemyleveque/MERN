const router = require('express').Router(); // allows to create a route 
let User = require('../models/user.model'); // require the corresponding Mongoose Model

/* This is the first route
** It is the first endpoint that handles http://localhost:5000/users/
*/

router.route('/').get((req, res) => {
    console.log('route /');
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' +err));
});

/* Just a / at the end  (/users/)
** find() is a mongoose method that is going to get a list of all the users
** returned in a JSON format (users)
*/

/* The second endpoint is a POST request at  /users/add/ */
router.route('/add').post((req, res) => {
    console.log('route /add');
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}); 
/* The username is contained in req.body, and we will create a newUser
** who will be saved to the database thanks to the method save() 
*/

/* In a real thing, we would have update, delete... */

module.exports = router; 