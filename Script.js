let weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

setInterval(() => {
  let date = new Date();
  let day = date.getDay();
  let days = document.getElementsByClassName("week")[day];
  let time = document.querySelector(".time");
  let currentday = document.querySelector("#day");
  let currentMon = document.querySelector("#month");

  let currentHours = date.getHours();
  let currentMin = date.getMinutes();

  if (currentHours < 10) {
    currentHours = "0" + currentHours;
  }

  if (currentMin < 10) {
    currentMin = "0" + currentMin;
  }

  days.innerHTML = weekDays[day];
  days.style.color = "#f8a007";
  currentMon.innerHTML = date.getMonth() + 1;
  currentday.innerHTML = date.getDate();
  time.innerHTML = `${currentHours}:${currentMin}`;
  console.log(date.getSeconds());
}, 1000);
