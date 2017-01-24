var canvas = document.getElementById("avatarmaker");

var context = canvas.getContext("2d");

context.font="15px Arial Bold";

context.fillText("No image", 80, 80);

var windowURL = window.webkitURL || window.URL;

window.onload = function() {
    var input = document.getElementById('input');
    input.addEventListener('change', handleFiles, false);
}

//  var imgd = context.getImageData(0, 0, 215, 220),

//  context.putImageData(imgd, 0, 0);

transparency = function() {

  var d = context.getImageData(0, 0, 215, 220);
  var L = d.length;

    for ( var i = 3; i < L; i += 4 )
    {
        d[i] = 50;
    }

    context.putImageData(imgd, 0, 0);

}



function handleFiles(e) {
    var url = windowURL.createObjectURL(e.target.files[0]);
    var img = new Image();
    img.onload = function() {

      context.drawImage(img, -22, -28, 235, 272);

      var outline = new Image();
      outline.src = ("3wa9d39d2.png");
      outline.onload = function (){
        context.drawImage(outline, -22, -28);
      }

      var cubedImage = new Image();
      cubedImage.src = ("3wa9d39d.png");
      cubedImage.onload = function (){
        context.drawImage(cubedImage, -22, -28);

      }

    }
    img.src = url;

    transparency();


}
