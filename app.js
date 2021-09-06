const cards = document.querySelectorAll(".card");
console.log(cards); //gives us a nodeList

function flipcard() {
  console.log("card flipped");

  console.log(this);
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipcard));
