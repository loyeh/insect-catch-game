const main = document.querySelector(".main");
const playBtn = document.querySelector(".playBtn");

const insects = [
  { name: "Fly", url: "./images/fly.png" },
  { name: "Butterfly", url: "./images/butterfly.png" },
  { name: "Bug", url: "./images/bug.png" },
  { name: "Grasshopper", url: "./images/grasshopper.webp" },
];

playBtn.addEventListener("click", playBtnHandler);

function playBtnHandler() {
  while (main.childNodes[0]) {
    main.childNodes[0].remove();
  }
  const title = document.createElement("h3");
  title.textContent = 'what is your "favorite" insect?';
  main.appendChild(title);
  const row = document.createElement("div");
  row.classList.add("row");
  for (let i = 0; i < insects.length; i++) {
    const insect = insects[i];
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = insect.name;
    const image = document.createElement("img");
    image.src = insect.url;
    div.appendChild(p);
    div.appendChild(image);
    row.appendChild(div);
  }
  main.appendChild(row);
}
