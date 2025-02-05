window.onload = () => {
  document.getElementById("randomPic").onclick = () => {
    window.location.reload();
  };

  document.getElementById("sayHello").onclick = () => {
    document.getElementById("output").innerHTML += "hello<br>";
  };

  document.getElementById("favcolor").addEventListener("input", function () {
    const colorValue = this.value;
    document.getElementById("star").style.color = colorValue;
  });
};
