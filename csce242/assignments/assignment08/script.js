const tite = [
    "Happy Birthday",
    "Crazy Clown",
    "It's Raining",
    "Quiet Time",
    "Working Hard",
    "Work From Home"
];
const image = [
    "images/birthday.jpg",
    "images/clown.jpg",
    "images/rain.jpg",
    "images/read.jpg",
    "images/shovel.jpg",
    "images/work.jpg"
];

window.onload = () => {
    const column = document.getElementById("column");
    
    for (let i = 0; i < tite.length; i++) {
        const div = document.createElement("div");
        div.innerHTML += `<h3>${tite[i]}</h3>`;
        column.appendChild(div);
    }
};