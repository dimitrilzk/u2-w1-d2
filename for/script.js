let budget = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let output = document.getElementById("output");

for (let i = 0; i < budget.lenght; i++) {
  console.log(budget[i]);
  if (budget[i] == 5) {
    output.innerHTML = "Sei a metà del tuo budget!";
  }
  if (budget[i] <= 2) {
    output.innerHTML = "Sei quasi a secco.";
  }
  if (budget[i] == 0) {
    output.innerHTML = "Non hai più nulla!";
  }
}
