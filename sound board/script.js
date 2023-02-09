const sounds = ["applause", "boo", "paint", "gasp"];
const button = document.getElementById("button");

sounds.forEach((sound) => {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  button.appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    let song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
