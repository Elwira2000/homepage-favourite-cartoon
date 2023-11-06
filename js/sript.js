console.log("Cześć!");

let przycisk = document.querySelector(".przycisk");
let pudelko = document.querySelector(".pudelko");

przycisk.addEventListener("click", () => {
    pudelko.remove();
});