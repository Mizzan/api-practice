const button = document.querySelector("button");

button.addEventListener("click", changeName);

function changeName(params) {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      const user = data.results[0];
      const name = user.name;
      const userName = `${name.title} ${name.first} ${name.last}`;
      document.getElementById("user-name").innerText = userName;
    });
}
