is_empty = false;

function GetBookMarkList() {
  var BookMarkList = document.getElementsByClassName("Bookmark_text");
  var Box_container = document.getElementById("BookmarkRM_Conteiner");

  for (i in BookMarkList) {
    if (BookMarkList[i].innerHTML != undefined)
      Box_container.innerHTML += `<p class="removeBookmark" id="${BookMarkList[i].innerHTML}" onclick="removeBookmark()">${BookMarkList[i].innerHTML}</p>`;
  }
}

function removeListElements() {
  var Box_container = document.getElementById("BookmarkRM_Conteiner");

  Box_container.innerHTML = ``;
}

function removeBookmark() {
  var BookMarkConteiner = document.getElementById("CNT");
  var BookMarkList = document.getElementsByClassName("Bookmark");
  var BookmarkBtnToRemove = document.getElementById(event.target.id);

  for (i in BookMarkList) {
    if (BookMarkList[i].innerText == event.target.id) {
      var BookmarkToRemove = BookMarkList[i];
    }
  }

  BookMarkConteiner.removeChild(BookmarkToRemove);
  BookmarkBtnToRemove.parentNode.removeChild(BookmarkBtnToRemove);
}

function addBookmark() {
  var BookMarkName = document.getElementById("Bookmark_Name");
  var BookMarkLink = document.getElementById("Bookmark_Link");
  var BookMarkIMG = document.getElementById("IMG_URL");
  var BookMarkConteiner = document.getElementById("CNT");

  if (is_empty == "true") {
    BookMarkConteiner.innerHTML = "";
    is_empty == "false";
  }

  var BookMarkToAdd = `<div class="Bookmark">
                            <a target="_blank" href="${BookMarkLink.value}">
                                <img class="Bookmark_img"
                                src="${BookMarkIMG.value}"
                                alt="img"
                                >
                            </a>
                            <p class="Bookmark_text">${BookMarkName.value}</p>
                        </div>`;

  BookMarkConteiner.innerHTML += BookMarkToAdd;
  BookMarkName.value = "";
  BookMarkLink.value = "";
  BookMarkIMG.value = "";

  saveChanges();
}

function saveChanges() {
  var Page = document.documentElement.outerHTML;
  var htmlContent = [Page];
  var bl = new Blob(htmlContent, { type: "text/html" });
  var a = document.createElement("a");

  a.href = URL.createObjectURL(bl);
  a.download = "bookmarks.html";
  a.hidden = true;
  document.body.appendChild(a);
  a.innerHTML = "";
  a.click();
}

function checkOnLoad() {
  var BookMarkConteiner = document.getElementById("CNT");

  if (BookMarkConteiner.innerHTML == "") {
    BookMarkConteiner.innerHTML = `<h1 class="no_Bookmarks"> Press + to add BookMarks </h1>`;
    is_empty = "true";
  }

 
}
