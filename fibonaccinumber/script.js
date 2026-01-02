function generateFibonacci() {
  let limit = document.getElementById("num").value;
  let a = 0, b = 1, result = "";
  for (let i = 1; i <= limit; i++) {
    result += a + " ";
    let next = a + b;
    a = b;
    b = next;
  }

  document.getElementById("output").innerText = `Fibonacci:${result}`;
}
