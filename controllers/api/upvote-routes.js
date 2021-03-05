const router = require('express').Router();
const { Upvote } = require('../../models');
const withAuth = require('../../utils/auth')

//get number of upvotes

router.get('/', (req, res) => {
    Upvote.findAndCountAll({
        where: {
            post_id: req.body.post_id,
            user_id: req.session.user_id
        },
     })
     .then(dbUpvoteData => res.json(dbUpvoteData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });

//create upvote
router.post('/', withAuth, (req, res) => {
    // check the session
    if (req.session) {
        Upvote.create({
            user_upvoted_post: req.body.user_upvoted_post,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
            .then(dbUpvoteData => res.json(dbUpvoteData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    }
});

//
router.delete('/:id', withAuth, (req, res) => {
    Upvote.destroy({
        where: {
            post_id: req.body.post_id,
            user_id: req.session.user_id
        }
    })
        .then(dbUpvoteData => res.json(dbUpvoteData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    });

module.exports = router;