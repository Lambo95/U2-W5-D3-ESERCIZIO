let animated = document.querySelector("#animated");

function start() {
  animated.classList.remove("stop");
}

function stop() {
  animated.classList.add("stop");
}

// function start() {
//   document.getElementsById("content").style.transformStyle = "preserve-3d";
//   document.getElementsById("content").style.animation = "carousel 10s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards";
// }
//     document.getElementsById("content").style = "none";
//     document.getElementsById("content").style = "none";
//     document.getElementsById("content").style = "none";
//     document.getElementsById("content").style = "none";

// }
