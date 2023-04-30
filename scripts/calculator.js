function calculateMortgage() {
    const principal = document.getElementById("principal").value;
    const interest = document.getElementById("interest").value / 1200;
    const years = document.getElementById("years").value;
  
    const monthlyPayment =
      (principal * interest) /
      (1 - Math.pow(1 / (1 + interest), years * 12));
    const totalInterest = monthlyPayment * years * 12 - principal;
  
    const output = document.getElementById("output");
    output.innerHTML = `<p>Monthly Payment: $${monthlyPayment
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p><p>Total Interest Paid: $${totalInterest
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>`;
  }
  