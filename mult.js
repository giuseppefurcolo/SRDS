var fishCount = 20;
var fishField = document.getElementById("fish-field");
var imagePath1 = "https://giuseppefurcolo.github.io/SRDS/interiors/coworking/";

for (var i = 0; i < fishCount; i++) {
  var fishEl = document.createElement("div");
  fishEl.setAttribute("class", "fish");
  
  fishEl.setAttribute("id","para" + i );
  var img1 = document.createElement("img");
  img1.src = imagePath1 + i + ".jpg";

  img1.style.display = "flex";
  img1.style.width = 100 + "vw";

  // Create a closure to capture the correct fishEl for this imgEl
  img1.onerror = (function (elementToHide) {
    return function () {
      elementToHide.style.display = "none";
    };
  })(fishEl);

 
  // Append the <img> element to the fishEl
  fishEl.appendChild(img1);
  fishField.appendChild(fishEl);
 
  var who = "para" + i;
  var y = Math.floor( document.getElementById(who).getBoundingClientRect().y);
  
  var badge = document.createElement("div");
  badge.setAttribute("class", "badge");

 console.log( y);
  
  
  
}

//var element = document.getElementById("para5");
//var rect = document.getElementById("para5").getBoundingClientRect();

// the position related to the viewport


