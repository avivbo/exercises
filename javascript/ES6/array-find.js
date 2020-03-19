var users = [{ name: "Aviv" }, { name: "Ron" }, { name: "Liran" }];

var user;

for (var i = 0; i < users.length; i++) {
  if (users[i].name === "Aviv") {
    user = users[i];
    break;
  }
}

console.log(user);

// Using array find -> return the first element that fits to criteria
var userFind = users.find(function(user) {
  return user.name === "Aviv";
});

console.log(userFind);

// Another exsample

var posts = [
  { id: 1, title: "First Post" },
  { id: 2, title: "Second Post" }
];

var comment = { postId: 1, content: "Great Post" };

function postsForComment(posts, comment) {
  return posts.find(function(post) {
    return post.id === comment.postId;
  });
}

console.log(postsForComment(posts, comment));
