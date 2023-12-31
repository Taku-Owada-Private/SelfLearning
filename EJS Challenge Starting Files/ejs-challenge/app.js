//jshint esversion:6
import express from "express";
import axios from "axios";
import _ from 'lodash';


const app = express();
// const bodyParser = require("body-parser");
// const ejs = require("ejs");

const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";


let posts = [];

app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.render("home.ejs", {
    content: homeStartingContent,
    posts: posts
  });
});

app.post("/", async (req, res) => {
  const post = {
    title: req.body.title,
    text: req.body.postContent
  };
  posts.push(post);
  // console.log(post);
  // console.log(posts);

  res.redirect("/");
  // try {
  //   const result = await axios.get(API_URL + "/secrets/" + searchId, config);
  //   res.render("index.ejs", { content: JSON.stringify(result.data) });
  // } catch (error) {
  //   res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  // }
});


app.get("/about", async (req, res) => {
  res.render("about.ejs", { content: aboutContent });
});

app.get("/contact", async (req, res) => {
  res.render("contact.ejs", { content: contactContent });
});

app.get("/compose", async (req, res) => {
  res.render("compose.ejs");
});



app.get('/posts/:topic', (req, res) => {
  const urlTitle = req.params.topic;

  posts.forEach(function (post) {
    const kebabTitle = _.kebabCase(post.title);
    console.log(kebabTitle);
    if (kebabTitle === urlTitle) {
      console.log("match found!!!");
      res.render("post.ejs", {
        post: post
      });
    } else {
      console.log("no match");
    }




  });


});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});


