document.addEventListener("DOMContentLoaded", () => {
    const assentosCon = document.querySelector(".assentos");
    const contador = document.querySelector("#contagem");
    const assentos = 150;

    for (let i = 0; i < assentos; i++) {
        const assento = document.createElement("div");
        assento.classList.add("assento");
        assento.textContent = i + 1;
        assento.addEventListener("click", () => {
            assento.classList.toggle("selected");
            updateSelectedCount();
        });
        assentosCon.appendChild(assento);
    }

    function updateSelectedCount() {
        const assentosSel = document.querySelectorAll(".assento.selected").length;
        contador.textContent = assentosSel;
    }
});
