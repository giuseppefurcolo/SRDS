var imgArray = [
   '1.jpg', 
   '2.jpg', 
   '3.jpg',
   '4.jpg',
   '5.jpg',
   '6.jpg',
   '7.jpg',
];

var basePath="./hero/";

function imgRandom() {
        var rand = imgArray[Math.floor(Math.random() * imgArray.length)];
        var image = new Image();
        image.src = basePath+rand;
     document.getElementById("imgWrap").appendChild(image);

}

imgRandom();
