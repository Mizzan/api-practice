const button = document.querySelector("button");

button.addEventListener("click", changeName);

function changeName() {
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      const activity = data.activity;
      const activityType = data.type;
      document.getElementById("user-activity").innerText = `${activity}`;
      document.getElementById(
        "user-activity-type"
      ).innerText = `${activityType}`;
    });
}
