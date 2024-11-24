console.log("Стартует мой сайт");

function generateNumber() {
  const a = Number(document.getElementById("n1").value);
  const b = Number(document.getElementById("n2").value);
  console.log(a, b);

  //   const number = Math.floor(Math.random() * 100);
  const number = Math.floor(Math.random() * (b - a + 1)) + a;
  document.getElementById("randomNumber").innerHTML = number;
  console.log(number);
}
