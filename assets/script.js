let start = document.getElementById("start");
let stop = document.getElementById("stop");

function startAnimation() {
  document.getElementsById("content").style = "transform-origin: center";
  document.getElementsById("content").style = "  transform-style: preserve-3d";
  document.getElementsById("content").style = "transform: translateZ(-30vw) rotateY(0)";
  document.getElementsById("content").style = "animation: carousel 10s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards";
}
