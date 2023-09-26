document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const container = document.getElementById("form-container");
    const vacationSelect = document.getElementById("vacation");
    const seasonSelect = document.getElementById("season");
    const destinationSelect = document.getElementById("destination");
    const placesTextarea = document.getElementById("places");
    const commentsTextarea = document.getElementById("comments");
    const successForm = document.getElementById("success");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting

        const selectedVacation = vacationSelect.value;
        const selectedSeason = seasonSelect.value;
        const selectedDestination = destinationSelect.value;
        const selectedPlaces = placesTextarea.value;
        const selectedComments = commentsTextarea.value;

        let message = `<b>Your vacation choice:</b> ${selectedVacation}\n<br>`;
        message += `<b>Your preferred season:</b> ${selectedSeason}\n<br>`;
        message += `<b>Your desired destination:</b> ${selectedDestination}\n<br>`;
        message += `<b>Top 3 places you want to visit:</b>\n${selectedPlaces}\n<br>`;
        message += `<b>Additional Comments:</b>\n${selectedComments}`;

        container.style.display = 'none'; // Hide the form container
        successForm.style.display = 'block'; // Display the success message

        const paragraph = document.createElement("p");
        paragraph.innerHTML = message;
        successForm.appendChild(paragraph);
    });
});
