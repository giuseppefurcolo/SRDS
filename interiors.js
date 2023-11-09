const field = document.getElementById("fish-field");

var imagePath1 = "https://simonaregolo.com/interiors/";

var fishCount = 20;
for (var i = 1; i < fishCount; i++) {
  var fishEl = document.createElement("div");
  fishEl.setAttribute("class", "fish");
  fishEl.setAttribute("id", "para" + i);

  var badge = document.createElement("div");
  badge.setAttribute("class", "badge");
  var spanBadge = document.createElement("span");

  if (interiors[i] != "") {
    spanBadge.textContent = interiors[i];
    badge.appendChild(spanBadge);
    field.appendChild(badge);
  }

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

  fishEl.appendChild(img1);
  field.appendChild(fishEl);
}
