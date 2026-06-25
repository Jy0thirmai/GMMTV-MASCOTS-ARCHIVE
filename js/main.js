const grid = document.getElementById("grid");

const overlay = document.getElementById("overlay");
const focusContainer = document.getElementById("focusContainer");
const focusCard = document.getElementById("focusCard");

const mName = document.getElementById("m-name");
const mInfo = document.getElementById("m-info");


// CREATE GRID
mascots.forEach((mascot) => {

  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${mascot.image}" alt="${mascot.name}">
    <span>${mascot.name}</span>
  `;

  card.addEventListener("click", () => {

    // show overlay + focus view
    overlay.classList.remove("hidden");
    focusContainer.classList.remove("hidden");

    // set image
    focusCard.innerHTML = `
      <img src="${mascot.image}" alt="${mascot.name}">
    `;

    // set text
    mName.textContent = mascot.name;

    mInfo.innerHTML = `
      <b>Parents:</b> ${mascot.parents}<br><br>
      <b>Nickname:</b> ${mascot.nickname}<br><br>
      <b>Inspiration:</b> ${mascot.inspiration}<br><br>
      <b>Details:</b> ${mascot.details}
    `;
    document.querySelector(".info-panel").scrollTop = 0;
  });

  grid.appendChild(card);
});


// CLOSE FUNCTION
function closeFocus() {
  overlay.classList.add("hidden");
  focusContainer.classList.add("hidden");
}


// close when clicking dark background
overlay.addEventListener("click", closeFocus);


// close when clicking outside content area
focusContainer.addEventListener("click", (e) => {
  if (e.target === focusContainer) {
    closeFocus();
  }
});