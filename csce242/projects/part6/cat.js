// Function to fetch and return the cat data from the JSON file
const getCats = async () => {
  const url =
    "https://LucilleCS.github.io/csce242/projects/part6/jsons/cat.json";
  try {
    const response = await fetch(url);
    return await response.json(); // This returns the parsed JSON
  } catch (error) {
    console.log("Error fetching the data: ", error);
    return []; // Return an empty array in case of an error
  }
};

// Function to generate and display the cat items dynamically
const showCats = async () => {
  const catsData = await getCats(); // Get the cat data
  const aboutCatDiv = document.getElementById("aboutCat"); // The container div where the cats will be displayed

  // Loop through each cat and create an HTML section for it
  catsData.cats.forEach((cat) => {
    const catSection = document.createElement("section");
    catSection.classList.add("catItem");

    // Create the cat image div
    const catImgDiv = document.createElement("div");
    catImgDiv.classList.add("catImg");
    const catImg = document.createElement("img");
    catImg.src = `${cat.img_name}`; // Dynamically set the image source
    catImg.alt = cat.name;
    catImgDiv.appendChild(catImg);

    // Create the text content div
    const catTextDiv = document.createElement("div");
    const catName = document.createElement("h3");
    catName.textContent = cat.name;
    const catDescription = document.createElement("p");
    catDescription.innerHTML = `Meet ${cat.name}! ${cat.personality}<br>Favorite Activity: ${cat.favorite_activity}`;

    catTextDiv.appendChild(catName);
    catTextDiv.appendChild(catDescription);

    // Append both the image and text divs to the cat section
    catSection.appendChild(catImgDiv);
    catSection.appendChild(catTextDiv);

    // Append the cat section to the 'aboutCat' div
    aboutCatDiv.appendChild(catSection);
  });
};

// Run the showCats function when the page loads
window.onload = () => showCats();
