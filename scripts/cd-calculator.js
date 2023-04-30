function calculateCD() {
    const principal = document.getElementById("principal").value;
    const interest = document.getElementById("interest").value / 100;
    const years = document.getElementById("years").value;
  
    const futureValue = principal * Math.pow(1 + interest, years);
    const totalInterest = futureValue - principal;
  
    const output = document.getElementById("output");
    output.innerHTML = `<p>Future Value: $${futureValue
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p><p>Total Interest Earned: $${totalInterest
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>`;
  }
  