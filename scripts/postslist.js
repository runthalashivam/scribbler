function showTrashModal(id) {
  var modal = document.getElementsByClassName("trash-modal")[0];
  modal.style.display = "block";


  var deletePostBtn = document.getElementsByClassName("trash-modal-button-yes")[0];
  deletePostBtn.onclick = function () {
    document.getElementById(id).remove();
    modal.style.display = "none";
  }
}

function hideTrashModal() {
  var modal = document.getElementsByClassName("trash-modal")[0];
  modal.style.display = "none";
}

function navigateToPost() {
  location.href = "post.html";
}