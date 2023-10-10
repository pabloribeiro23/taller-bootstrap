const optionsTgr = document.getElementById("options");
const list = document.getElementById("list");
const mutableParagraph = document.getElementById("mutableParagraph");
let paragraphCollection = document.getElementsByClassName("paragraph");
let paragraphArray = Array.from(paragraphCollection);

paragraphArray.forEach((item) => {
  console.log(item.innerHTML);
});

optionsTgr.addEventListener("click", () => {
  list.classList.toggle("d-none");
});

function textoAleatorioCadaTresSegundos() {
  setInterval(() => {
    const randomIndex = Math.floor(Math.random() * paragraphArray.length);
    const randomParagraph = paragraphArray[randomIndex];

    const texto = randomParagraph.innerHTML;

    const startIndex = Math.floor(Math.random() * texto.length);
    const fragmento = texto.substr(startIndex, 70);

    mutableParagraph.innerHTML = fragmento;
  }, 3000);
}

textoAleatorioCadaTresSegundos();
