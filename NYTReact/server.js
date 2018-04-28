const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const Article = require("./articleSchema")
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets
app.use(express.static("client/build"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// mongodb://<dbuser>:<dbpassword>@ds159129.mlab.com:59129/nytreact-search

mongoose.connect('mongodb://newuser:newuser123@ds159129.mlab.com:59129/nytreact-search')

// Use apiRoutes
app.get("/api", function(req, res){
  res.send('hello')
});

//this route will add one article

app.post('/new-article', function(req, res){
  const article = new Article(req.body)
  article.save().then(function(result){
    res.json(result)
  }).catch(function(error){
    res.send(error)
  })
})

//this route will get all articles
app.get('/all',function(req, res){
  Article.find()
  .exec()
  .then(function(doc){
    res.send(doc)
  }).catch(function(error){
    res.send(error)
  })
})

//this route will delete an article by ID

app.delete('/delete-article/:id', function(req, res){
  var id = req.params.id
  Article.remove({_id:id})
  .exec()
  .then(function(result){
    res.send(result)
  }).catch(function(error){
    res.send(error)
  })
})

//this route will update an article by id

app.patch('/update-article/:id', function(req, res){
  var id = req.params.id
  Article.update({_id:id}, {$set: {title: req.body.title, date: req.body.date, url: req.body.url}})
  .exec()
  .then(function(result){
    res.send(result)
  }).catch(function(error){
    res.send(error)
  })
})

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

