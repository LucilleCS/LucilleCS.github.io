const getCats = async () => {
  const url =
    "https://LucilleCS.github.io/csce242/projects/part6/jsons/cat.json";
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.log("Error fetching the data: ", error);
    return [];
  }
};

const showCats = async () => {
  const catsData = await getCats();
  const aboutCatDiv = document.getElementById("aboutCat");

  catsData.cats.forEach((cat) => {
    const catSection = document.createElement("section");
    catSection.classList.add("catItem");

    const catImgDiv = document.createElement("div");
    catImgDiv.classList.add("catImg");
    const catImg = document.createElement("img");
    catImg.src = `${cat.img_name}`;
    catImg.alt = cat.name;
    catImgDiv.appendChild(catImg);

    const catTextDiv = document.createElement("div");
    const catName = document.createElement("h3");
    catName.textContent = cat.name;
    const catDescription = document.createElement("p");
    catDescription.innerHTML = `Meet ${cat.name}! ${cat.personality}<br>Favorite Activity: ${cat.favorite_activity}`;

    catTextDiv.appendChild(catName);
    catTextDiv.appendChild(catDescription);
    catSection.appendChild(catImgDiv);
    catSection.appendChild(catTextDiv);
    aboutCatDiv.appendChild(catSection);
  });
};

window.onload = () => showCats();
