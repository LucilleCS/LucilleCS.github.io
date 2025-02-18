let clicks = 0;
let climb = -40;
document.getElementById("drawStairs").onclick = () => {
  const showButton = document.getElementById("climbStairs");
  const showStick = document.getElementById("left");
  const showStair = document.getElementById("stair");
  showButton.style.display = "block";
  showStick.style.display = "block";
  showStair.style.display="block"

  for(let i=0;i<10;i++) {
    let hr = document.createElement("hr"); 
    document.getElementById("stair").appendChild(hr);
  }



}

document.getElementById("climbStairs").onclick = () => {
  const left = document.getElementById("left");
  const right = document.getElementById("right");
  const person = document.getElementById("image");
  person.style.position='relative';
  if(clicks % 2 === 0) {
    left.style.display="none"
    right.style.display="block"
    person.style.top = climb + 'px';
    climb = climb + -40;
  }
  else{
    right.style.display="none"
    left.style.display="block"
    person.style.top = climb + 'px';
    climb = climb + -40;
  }
  clicks++;



}




