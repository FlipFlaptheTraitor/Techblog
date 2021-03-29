const router = require('express').Router();

const userRoutes = require('./users-routes.js');
const postRoutes = require('./posts-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
