document.getElementById("toggle-nav").onclick = () => {
  let clickElement = document.getElementById("click");
  let unclickElement = document.getElementById("unclick");
  document.getElementById("nav-items").classList.toggle("hide-small");
  clicks++;

  if (clicks % 2 === 1) {
    clickElement.style.display = "none";
    unclickElement.style.display = "block";
  } else {
    clickElement.style.display = "block";
    unclickElement.style.display = "none";
  }
};
