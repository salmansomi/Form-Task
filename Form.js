const form = document.querySelector("#form");
const startDate = document.querySelector("#start-date");
const endDate = document.querySelector("#end-date");
let duration_from_form = document.getElementById("duration");

let Button = document.getElementById("save_btn");

Button.addEventListener("click", (e) => {
  e.preventDefault();

  let JSonObj = {
    name: document.getElementById("name").value,
    DOB: document.getElementById("dob").value,
    Startdate: document.getElementById("start-date").value,
    Enddate: document.getElementById("end-date").value,
    File: document.getElementById("fileup").value,
  };

  localStorage.setItem("Details", JSON.stringify(JSonObj));
});