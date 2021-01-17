function navigateToAllPosts(){
  location.href = "html/all_posts.html"
}

function showCreatePostModal(){
  var modal = document.getElementById("create-post-modal");
  modal.style.display = "flex";
}

function hideCreatePostModal(){
  var modal = document.getElementById("create-post-modal");
  modal.style.display = "none";
}