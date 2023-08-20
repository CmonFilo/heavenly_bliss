var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark_mode_hb");
  if (document.body.classList.contains("dark_mode_hb")) {
    icon.src = "image/sun.png";
  } else {
    icon.src = "image/moon.png";
  }
};
