const field = document.getElementById("fish-field");

var imagePath1 = "https://giuseppefurcolo.github.io/SRDS/interiors/";

var fishCount = 20;
for (var i = 1; i < fishCount; i++) {
  var fishEl = document.createElement("div");
  fishEl.setAttribute("class", "fish");
  fishEl.setAttribute("id", "para" + i);

  var badge = document.createElement("div");
  badge.setAttribute("class", "badge");
  var spanBadge = document.createElement("span");
  spanBadge.textContent = interiors[i];

  if (spanBadge.textContent.trim() === "") {
    // The text span has no text or only whitespace
  } else {
    // The text span has some text content
    badge.appendChild(spanBadge);
    field.appendChild(badge);
  }

  var img1 = document.createElement("img");
  img1.src = imagePath1 + i + ".jpg";

  img1.style.display = "flex";
  img1.style.width = 100 + "vw";

  // Create a closure to capture the correct fishEl for this imgEl
  img1.onerror = (function (hide1, hide2) {
    return function () {
      hide1.style.display = "none";
      hide2.style.display = "none";
    };
  })(fishEl, badge);

  fishEl.appendChild(img1);
  field.appendChild(fishEl);
}
