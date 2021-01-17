var likes = 0;
function incrementCounter() {
  likes++;
  document.getElementById('first-like').style.display = 'none';
  document.getElementById("like-text").innerHTML = "Liked";
  var cntr = document.getElementById('like-counter');
  if (likes === 1) {
    cntr.innerHTML = likes + " person likes this!";
  } else {
    cntr.innerHTML = likes + " people like this!";
  }

}

function toggleEditSave() {
  var toggleSave = '<button class="edit-post-btn">Save ' +
    '<i style="font-size: 14px;font-weight: bolder;" ' +
    'class="fa fa-save" aria-hidden="true"></i>' +
    '</button>';
  var toggleEdit = '<button class="edit-post-btn">Edit ' +
    '<i style="font-size: 14px;font-weight: bolder;" ' +
    'class="fa fa-pencil-square-o" aria-hidden="true"></i>' +
    '</button>';

  var edtSaveBtn = document.getElementById('edit-post');
  var toDo = (edtSaveBtn.innerText).toString().trim();
  if (toDo.localeCompare('Edit') === 0) {
    var bSave = document.getElementById('edit-post');
    bSave.innerHTML = toggleSave;
    enableEditableText();
  }
  else {
    var bEdit = document.getElementById('edit-post');
    bEdit.innerHTML = toggleEdit;
    updateEditedPost();
  }

}

function enableEditableText() {
  var getPostTitleElement = document.getElementById("post-title-heading");
  var getPostTitle = getPostTitleElement.innerText;
  var getTitleDiv = document.getElementById('post-title');
  var inputElementTitle = '<textarea class="post-edit-text" id="post-edit-title" rows="1" cols="80">' +
    getPostTitle +
    '</textarea>'
  getTitleDiv.innerHTML = inputElementTitle;

  var getPostContentElement = document.getElementById('post-body');
  var getPostContent = getPostContentElement.innerText;
  var getContentDiv = document.getElementById('post-content-id');
  var inputElementBody = '<textarea class="post-edit-text" id="post-edit-content" rows="10" cols="150">' +
    getPostContent +
    '</textarea>'
  getContentDiv.innerHTML = inputElementBody;

}
function updateEditedPost() {
  var editedTitle = document.getElementById('post-edit-title');
  var titleEdited = (editedTitle.value).toString();
  var pElement = '<h id="post-title-heading">' +
    titleEdited +
    '</h>';
  var getTitleDiv = document.getElementById('post-title');
  getTitleDiv.innerHTML = pElement;


  var editedPost = document.getElementById('post-edit-content');
  var textEdited = (editedPost.value).toString();
  var pElement = '<p id="post-body">' +
    textEdited +
    '</p>';
  var getDiv = document.getElementById('post-content-id');
  getDiv.innerHTML = pElement;

}
function addComment() {
  var x = document.getElementById("comment-text-area").addEventListener("onchange", function () {
    document.getElementById("comment-text-area").innerHTML;
  });

  var x = document.getElementById("comment-text-area").value;

  var pElement = '<p class="comment">' + x + '</p>';
  var getDiv = document.getElementById('show-all-comments');
  getDiv.style.display = 'block';
  getDiv.innerHTML = pElement + getDiv.innerHTML;
}