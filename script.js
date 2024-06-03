const main = document.querySelector(".main");
const playBtn = document.querySelector(".playBtn");
let insectsUrl;
let score = 0;
let insectsNum = 1;

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
    div.addEventListener("click", () => {
      insectsUrl = insects[i].url;
      playStart();
    });
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

function playStart() {
  while (main.childNodes[0]) {
    main.childNodes[0].remove();
  }
  timeCounter();
  insectCatch();
}

function timeCounter() {
  const timer = document.createElement("div");
  timer.className = "timer";
  timer.textContent = "time: 00:00";
  let i = 0;
  let seconds,
    minuts = 0;
  setInterval(() => {
    if (i < 10) {
      seconds = "0" + i;
    } else if (i < 60) {
      seconds = i;
    } else {
      minuts++;
      i = 0;
    }
    timer.textContent = `time: 0${minuts}:${seconds}`;
    i++;
  }, 1000);
  main.appendChild(timer);
}

function insectCatch() {
  const scoreElem = document.createElement("div");
  scoreElem.className = "score";
  scoreElem.textContent = `Score: ${score}`;
  main.appendChild(scoreElem);
  addInsect();
}

function addInsect() {
  document.querySelector(".score").textContent = `Score: ${score}`;
  const insect = document.createElement("img");
  insect.className = "insect";
  insect.src = insectsUrl;
  const height = Math.floor(Math.random() * (window.innerHeight - 50));
  const width = Math.floor(Math.random() * (window.innerWidth - 50));
  insect.style.top = height + "px";
  insect.style.left = width + "px";
  insect.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
  insect.addEventListener("click", () => {
    score++;
    insect.classList.add("catched");
    for (let i = 0; i < 2; i++) {
      addInsect();
    }
  });
  main.appendChild(insect);
  if (score > 20) {
    const alertElem = document.createElement("div");
    alertElem.className = "alert";
    alertElem.innerHTML = `<p>Are you annoyed yet?</p>
    <p>You are playing an impossible game!!</p>`;
    main.appendChild(alertElem);
  }
}
