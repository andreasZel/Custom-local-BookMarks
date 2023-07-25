function GetBookMarkList() {
    var BookMarkList = document.getElementsByClassName("Bookmark_text");
    var Box_container = document.getElementById("content2");

    for (i in BookMarkList) {
        if (BookMarkList[i].innerHTML != undefined)
            Box_container.innerHTML += `<p class="removeBookmark">${BookMarkList[i].innerHTML}</p>`;
    }

}

function removeListElements() {
    var Box_container = document.getElementById("content2");

    Box_container.innerHTML = `<a href="#" class="box-close" onclick="removeListElements()"> × </a>`
}