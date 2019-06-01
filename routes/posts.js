const express = require('express');
const Post = require('../models/Posts');

const router = express.Router();
router.get('/', async (req, res) =>{
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({errorMessage : err});
    }
});


router.get('/:postID', async (req, res)=>{
    try{
        const specificPost = await Post.findById(req.params.postID);
        res.json(specificPost);
    }catch(err){
        res.json({errorMessage : err});
    }
});

router.post('/', async (req, res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try{
        const savedPost = await post.save();
        res.json(data)
    }catch(err) {
        res.json({message : err})
    };
});

router.delete('/:postId', async (req, res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId});    
        res.json(removedPost);
    }catch(err){
        res.json({errorMessage : err});
    }
});

router.patch('/:postID', async (req, res) => {
    try{
        const post = await Post.updateOne({_id: req.params.postID}, {$set: {
            title: req.body.title 
        }})
        res.json(post);
    }catch(err){
        res.json(post);
    }
});

module.exports = router;