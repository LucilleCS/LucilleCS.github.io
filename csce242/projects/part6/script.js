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

document.getElementById("individualCat").onclick = () => {
  let link = document.createElement("a");
  link.href = "individualCat.html";
  link.click();
  document.getElementById("catName").innerText = catName;
  document.getElementById("catDescription").innerHTML = catDescription;
  document.getElementById("catPicture").querySelector("img").src = catPicture;

  document.getElementById("insert").innerHTML = "EHEOIJEIO";
};
