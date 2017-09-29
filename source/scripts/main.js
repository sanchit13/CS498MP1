console.log("Hello World!");

// Nav Bar Resize Code
window.onscroll = function scrolled() {
    console.log("we scrolled");
    if (window.pageYOffset > 50) {
        document.getElementById("navigationBar").classList.add('shrink');
    } else {
        document.getElementById("navigationBar").classList.remove('shrink');
    }
}

//Modal Code
var modal = document.getElementById('myModal');
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}

