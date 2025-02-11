window.onload = () => {
  document.getElementById("transportation").onkeyup = (event) => {
    const imgElement = document.getElementById("transportationImg");
    if (event.currentTarget.value.toLowerCase() === "bike") {
      imgElement.src = "images/bike.jpg";
      imgElement.style.display = "block";
    } else if (event.currentTarget.value.toLowerCase() === "car") {
      imgElement.src = "images/car.jpg";
      imgElement.style.display = "block";
    } else if (event.currentTarget.value.toLowerCase() === "scooter") {
      imgElement.src = "images/scooter.jpg";
      imgElement.style.display = "block";
    } else if (event.currentTarget.value.toLowerCase() === "skateboard") {
      imgElement.src = "images/skateboard.png";
      imgElement.style.display = "block";
    } else {
      imgElement.style.display = "none";
    }
  };
};
function changeHeartColor(color) {
  document.getElementById("heart").style.color = color;
}
