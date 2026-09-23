/* =========================
   NAVBAR SCROLL
========================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   SEARCH
========================= */

function searchDestination() {

    const input = document
        .getElementById("destinationSearch")
        .value
        .trim();

    if (input === "") {

        alert("Please enter a destination.");

        return;
    }

    alert(
        "Searching travel packages for: " + input
    );

}


/* =========================
   PACKAGE BOOKING
========================= */

function selectPackage(packageName) {

    const modal =
        new bootstrap.Modal(
            document.getElementById("bookingModal")
        );

    const destination =
        document.getElementById(
            "bookingDestination"
        );

    const options = [
        "Bali",
        "Paris",
        "Dubai",
        "Maldives",
        "Switzerland",
        "Japan"
    ];

    options.forEach(function (option) {

        if (packageName.includes(option)) {
            destination.value = option;
        }

    });

    modal.show();

}


/* =========================
   BOOKING FORM
========================= */

function submitBooking(event) {

    event.preventDefault();

    alert(
        "Thank you! Your travel request has been received."
    );

    event.target.reset();

    const modalElement =
        document.getElementById("bookingModal");

    const modal =
        bootstrap.Modal.getInstance(modalElement);

    modal.hide();

}


/* =========================
   CONTACT FORM
========================= */

function submitContact(event) {

    event.preventDefault();

    alert(
        "Thank you! We will contact you soon."
    );

    event.target.reset();

}


/* =========================
   NEWSLETTER
========================= */

function subscribeNewsletter() {

    const input =
        document.querySelector(
            ".newsletter input"
        );

    if (input.value.trim() === "") {

        alert(
            "Please enter your email address."
        );

        return;
    }

    alert(
        "Thank you for subscribing!"
    );

    input.value = "";

}