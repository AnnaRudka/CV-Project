function move(elem) {
  let i = 0;
  let percent = parseInt(elem.dataset.percent, 10);
  if (i == 0) {
    i = 1;
    let width = 10;
    let id = setInterval(frame, 50);
    function frame() {
      if (width >= percent) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}
function startMoving() {
  console.log("start");
  move(document.getElementById("myBar"));
  move(document.getElementById("myBar2"));
  move(document.getElementById("myBar3"));
}
startMoving();

document.getElementById("skillsID").addEventListener("click", startMoving);
