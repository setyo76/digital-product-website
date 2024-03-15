const writeElement= ['Learning & Creating', 'Digital Product for Education'];
let count = 0;
let writeIndex = 0;
let currentWrite = '';
let words = '';

(function write() {

    if(count == writeElement.length){
        count = 0;
    }

    currentWrite = writeElement[count];

    words = currentWrite.slice(0, ++writeIndex);
    document.querySelector('.write-efect').textContent = words;

    if(words.length == currentWrite.length){
        count++;
        writeIndex = 0;
    }
    setTimeout(write, 200);
})();

window.onscroll = function () {
  showBackToTopButton();
};

function showBackToTopButton() {
  var button = document.getElementById("back-to-top");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}