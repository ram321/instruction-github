const jokebtn = document.getElementById("jokebtn");
const jokeEl = document.getElementById("joke");

generateJoke();

async function generateJoke() {
  let config = {
    headers: {
      Accept: "application/json",
    },
  };
  let res = await fetch("https://icanhazdadjoke.com/", config);
  let data = await res.json();
  jokeEl.innerHTML = data.joke;
}
// function generateJoke() {
//   let config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };
//   fetch("https://icanhazdadjoke.com/", config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEl.innerHTML = data.joke;
//     });
// }
jokebtn.addEventListener("click", generateJoke);
