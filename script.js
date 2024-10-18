function calculateSupply() {
    let favouriteSnack = prompt("Enter your favorite snack:");
    let currentAge = parseInt(prompt("Enter your current age:"));
    let maxAge = parseInt(prompt("Enter your estimated maximum age:"));
    let amount = parseInt(prompt("Enter how many you eat per day:"));

    if (isNaN(currentAge) || isNaN(maxAge) || isNaN(amount) || !favouriteSnack) {
      alert("Please provide valid inputs!");
      return;
    }

    let yearsLeft = maxAge - currentAge;
    let totalDays = yearsLeft * 365;
    let totalSupply = totalDays * amount;

    let result = `
      <p>Favourite Snack: <strong>${favouriteSnack}</strong></p>
      <p>Current Age: <strong>${currentAge}</strong></p>
      <p>Estimated Maximum Age: <strong>${maxAge}</strong></p>
      <p>Amount per Day: <strong>${amount}</strong></p>
      <p>You will need <strong>${totalSupply}</strong> ${favouriteSnack} to last you until the ripe old age of <strong>${maxAge}</strong>.</p>
    `;
    document.getElementById("result").innerHTML = result;
  }
  function reset(){
    document.getElementById("result").innerText= "";
  }