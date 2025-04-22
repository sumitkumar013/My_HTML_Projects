function roundToDigits(num, digits) {
    return Number(num.toFixed(digits));
  }

  function roundNumber() {
    var num = parseFloat(document.getElementById("numberInput").value);
    var digits = parseInt(document.getElementById("digitsInput").value);

    if (isNaN(num) || isNaN(digits)) {
      document.getElementById("roundResult").innerText = "Please enter valid inputs.";
      return;
    }

    var result = roundToDigits(num, digits);
    document.getElementById("roundResult").innerText = "Rounded Number: " + result;
  }