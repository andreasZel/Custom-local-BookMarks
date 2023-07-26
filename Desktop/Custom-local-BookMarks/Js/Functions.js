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