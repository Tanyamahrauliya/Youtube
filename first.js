function testError() {
  try {
    let result = undefinedVariable + 5;
    alert(result);
  } catch (err) {
    alert("😅 Oops! Error caught: " + err.message);
  } finally {
    alert("✅ Finally block executed - no matter what!");
  }
}


