document.querySelector("video").playbackRate = 0.75;

function updateTime() {
  //brisbane
  let brisbaneElement = document.querySelector("#brisbane");
  let brisbaneDateElement = brisbaneElement.querySelector(".date");
  let brisbaneTimeElement = brisbaneElement.querySelector(".time");
  let brisbaneTime = moment().tz("Australia/Brisbane");

  brisbaneDateElement.innerHTML = brisbaneTime.format("MMMM Do YYYY");
  brisbaneTimeElement.innerHTML = brisbaneTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //london
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
