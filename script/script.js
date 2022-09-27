// creare una funzione di budget che scali progressivamente
// creare 2 messaggi: 1 a metà budget e 2 quando il buudget sta per esaurirsi
// entrami i messaggi devono avvisare lo stato
// creare un output che mostri il budget
let budget = 100;
let output = document.getElementById("output");

function sottrazione(perdita) {
  budget = budget - perdita;
  output.innerHTML = budget;
  if (budget <== 50) {
    alert("Sei a metà del tuo budget!");
  }
  if (budget <= 25) {
    alert("Hai quasi esaurito il tuo budget!");
  }
  if (budget == 0) {
    alert("Hai esaurito tutto il tuo budget!");
  }
}
