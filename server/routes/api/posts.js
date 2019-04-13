const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();



// Add Post
router.post('/', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.insertOne({
    text: req.body.text,
    email: req.body.email,
    questionOne: req.body.questionOne,
    questionTwo: req.body.questionTwo,
    pickedTrue: req.body.pickedTrue,
    user: req.body.user,
    password: req.body.password,
    createdAt: new Date()
  });
  res.status(201).send();
});

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
  });
  
// Delete Post
router.delete('/:id', async (req, res) => {
  const posts = await loadPostsCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadPostsCollection() {
  const client = await mongodb.MongoClient.connect(
    'mongodb://MasterFather:master749674@ds261114.mlab.com:61114/father_resources',
    {
      useNewUrlParser: true
    }
  );

  return client.db('father_resources').collection('posts');
}

module.exports = router;