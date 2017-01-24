var canvas = document.getElementById("avatarmaker");

var context = canvas.getContext("2d");

context.font="15px Arial Bold";

context.fillText("No image", 80, 80);

var windowURL = window.webkitURL || window.URL;

window.onload = function() {
    var input = document.getElementById('input');
    input.addEventListener('change', handleFiles, false);
}

function handleFiles(e) {
    var url = windowURL.createObjectURL(e.target.files[0]);
    var img = new Image();
    img.onload = function() {

      context.drawImage(img, -20, 0, 235, 272);

      var outline = new Image();
      outline.src = ("3wa9d39d2.png");
      outline.onload = function (){
        context.drawImage(outline, -20, 0);
      }

      var cubedImage = new Image();
      cubedImage.src = ("3wa9d39d.png");
      cubedImage.onload = function (){
        context.drawImage(cubedImage, -20, 0);

      }
    }
    img.src = url;

}
