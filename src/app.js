import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello!");
};
let generateExcuse = () => {
  let pron = ["The", "A", "My", "Your"];
  let sub = ["cat", "storm", "mom", "fish"];
  let act = ["ruined", "distroyed", "smashed", "broke"];
  let what = ["my life", "my project", "the world", "the house"];

  let pronIndx = Math.floor(Math.random() * pron.length);
  let subIndx = Math.floor(Math.random() * sub.length);
  let actIndx = Math.floor(Math.random() * act.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  return (
    pron[pronIndx] +
    " " +
    sub[subIndx] +
    " " +
    act[actIndx] +
    " " +
    what[whatIndx]
  );
};
