const router = require('express').Router();
let Exercise = require('../models/exercise.model');

/* Same endpoints as users */
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
        .then(() => res.json('Exercise added !'))
        .catch(err => res.status(400).json('Error: ' + err));
});

/* ":id" is like a variable. The object id created by MongoDB <=> 5d93296e0ccd4990fcab506a 
** So if you go to /exercises/5d93296e0ccd4990fcab506a and do a get request, we're gonna return
** the information about this id.
*/
router.route('/:id').get((req, res) => {
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error ' + err));
});

/* Exactly the same, but if it is a delete request */

router.route('/:id').delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted'))
        .catch(err => res.status(400).json('Error :' + err));
});

/* About req.body vs req.params :
** req.params request the data where the route name starts with ":" /movie/:movieid <=> /movie/8547964
** req.body is the information sent 
*/

/* We have to find the exercise concerned findById()
** then(excercise => ) <=> exercise is what we got from the database 
** we receive a JSONobject in the body that contains the necessary infos
*/
router.route('/update/:id').post((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
            .then(() => res.json('Exercise Updated'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;