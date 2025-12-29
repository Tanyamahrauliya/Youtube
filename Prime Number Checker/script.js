function checkPrime() {
  let num = document.getElementById("num").value;
  let result = document.getElementById("result");

  if (num <= 1) {
    result.textContent = "Not a Prime Number ❌";
    return;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      result.textContent = "Not a Prime Number ❌";
      return;
    }
  }

  result.textContent = "Prime Number ✅";
}
