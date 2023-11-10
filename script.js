var imgArray = ['1.jpg', '2.jpg', '3.jpg'];
var basePath="./hero/";

function imgRandom() {
   // for (var i = 0; i < 3; i++) {
        var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
        var image = new Image();
        image.src = basePath+rand;
     document.getElementById("imgWrap").appendChild(image);
   // }
}

imgRandom();