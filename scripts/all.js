document.addEventListener("DOMContentLoaded", () => {
    const seatsContainer = document.querySelector(".seats");
    const selectedCountDisplay = document.querySelector("#selectedCount");
    const totalSeats = 120;

    for (let i = 0; i < totalSeats; i++) {
        const seat = document.createElement("div");
        seat.classList.add("seat");
        seat.addEventListener("click", () => {
            seat.classList.toggle("selected");
            updateSelectedCount();
        });
        seatsContainer.appendChild(seat);
    }

    function updateSelectedCount() {
        const selectedSeats = document.querySelectorAll(".seat.selected").length;
        selectedCountDisplay.textContent = selectedSeats;
    }
});