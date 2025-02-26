window.onload = () => {
    const events = [];
    events["Happy Birthday"] = "images/birthday.jpg";
    events["Crazy Clown"] = "images/clown.jpg";
    events["It's Raining"] = "images/rain.jpg";
    events["Quiet Time"] = "images/read.jpg";
    events["Working Hard"] = "images/shovel.jpg";
    events["Work From Home"] = "images/work.jpg";

    const column = document.getElementById("column");
    const section = document.getElementById("displayEvent");
    const popupModal = document.getElementById("popupModal");
    const popupImage = document.getElementById("popupImage");
    const closePopup = document.getElementById("closePopup");

    for (let eventName in events) {
        const p = document.createElement("p");
        section.append(p);
        p.innerHTML = eventName;

        p.onclick = () => {
            popupModal.style.display = "flex";
            popupImage.src = events[eventName]; 
            popupImage.alt = eventName;
        };
    }

    closePopup.onclick = () => {
        popupModal.style.display = "none";
    };

    window.onclick = (event) => {
        if (event.target === popupModal) {
            popupModal.style.display = "none"; 
        }
    };
};
