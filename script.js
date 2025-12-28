const check =
  document.getElementById("a");
const change =
  document.getElementById("c");
const result =
  document.getElementById("b");
const day = "#0000ff";
  const night = "#000000";
let isClickedChange = false;
check.addEventListener("click", () => {
  if(isClickedChange) {
    result.innerText = "Now is night!";
  } else {
    result.innerText = "Now is day!";
  }
  setTimeout( () => {
    result.innerText = "";
  }, 1000);
  });
change.addEventListener("click", () => {
  isClickedChange = !isClickedChange;
if(isClickedChange){  document.body.style.backgroundColor = night;
     } else {
  document.body.style.backgroundColor = day;
     }
});
