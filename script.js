const check =
  document.getElementById("a");
const change =
  document.getElementById("c");
const result =
  document.getElementById("b");
let isClickedChange = false;
let b = document.body.style.backgroundColor === night;
let a = isClickedChange && b;
check.addEventListener("click", () => {
  if(a) {
    result.innerText = "Now is night!";
  } else {
    result.innerText = "Now is day!";
  };
});;
change.addEventListener("click", () => {
  isClickedChange = !isClickedChange;
if(isClickedChange){  document.body.style.backgroundColor = night;
     } else {
  document.body.style.backgroundColor = day;
     };
  const day = "#0000ff";
  const night = "#000000";
  };
});
