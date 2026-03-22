// FAQ ACCORDION (your existing code)
const buttons = document.querySelectorAll(".faq-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});


// ✅ ENERGY CALCULATOR FUNCTION
function calculateEnergy() {
  let power = document.getElementById("power").value;
  let hours = document.getElementById("hours").value;
  let price = document.getElementById("price").value;

  // Validation
  if (power === "" || hours === "" || price === "") {
    document.getElementById("result").innerHTML = "⚠ Please fill all fields.";
    return;
  }

  if (power <= 0 || hours <= 0 || price <= 0) {
    document.getElementById("result").innerHTML = "⚠ Values must be greater than 0.";
    return;
  }

  // Calculations
  let daily = (power * hours) / 1000;
  let monthly = daily * 30;
  let yearly = daily * 365;
  let cost = yearly * (price / 100);

  // Output
  document.getElementById("result").innerHTML =
    "<strong>Daily:</strong> " + daily.toFixed(2) + " kWh<br>" +
    "<strong>Monthly:</strong> " + monthly.toFixed(2) + " kWh<br>" +
    "<strong>Yearly:</strong> " + yearly.toFixed(2) + " kWh<br>" +
    "<strong>Estimated Yearly Cost:</strong> $" + cost.toFixed(2);
}