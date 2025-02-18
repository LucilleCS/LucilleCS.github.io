let clicks = 0;
document.getElementById("drawStairs").onclick = () => {
  const showButton = document.getElementById("climbStairs");
  const showStick = document.getElementById("left");
  const stair = document.getElementById("stair");
  const stairImg = document.getElementById("stairImg");

  showButton.style.display = "block";
  showStick.style.display = "block";

  drawStairs();

  for(let i=0; i<10;i++) {
    innerHTML +=
  }

}

function drawStairs () {

}
document.getElementById("climbStairs").onclick = () => {
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  if(clicks % 2 === 0) {
    left.style.display="none"
    right.style.display="block"
  }
  else{
    right.style.display="none"
    left.style.display="block"
  }
  clicks++;
}




