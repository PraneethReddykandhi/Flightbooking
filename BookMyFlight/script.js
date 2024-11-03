$(document).ready(function() {
    function showSection(sectionId) {
        $('.page-section').hide(); // Hide all sections
        $(sectionId).show(); // Show selected section
    }

    // Show Home page by default
    showSection('#home');

    // Navigate to Home
    $('#home-link').on('click', function() {
        showSection('#home');
    });

    // Navigate to Flights page
    $('#flights-link, #search-flights').on('click', function() {
        showSection('#flights');
    });

    // Show Sign In page
    $('#sign-in-btn').on('click', function() {
        showSection('#sign-in');
    });

    // Show Sign Up page
    $('#sign-up-btn').on('click', function() {
        showSection('#sign-up');
    });

    // Show About page when About or Contact is clicked
    $('#about-link, #contact-link').on('click', function() {
        showSection('#about');
    });

    // Toggle Return Date field based on Trip Type
    $('#trip-type').on('change', function() {
        if ($(this).val() === 'oneway') {
            $('#return-date').prop('disabled', true); // Disable return date for One-Way
        } else {
            $('#return-date').prop('disabled', false); // Enable return date for Round Trip
        }
    });

    // Display sample flights when Search button is clicked
    $('#search-flight-btn').on('click', function(event) {
        event.preventDefault();

        const tripType = $('#trip-type').val();
        const origin = $('#origin').val();
        const destination = $('#destination').val();
        const departureDate = $('#departure-date').val();
        const returnDate = $('#return-date').val();

        if (tripType && origin && destination && departureDate && (tripType === 'oneway' || returnDate)) {
            $('#flight-results').html(`
                <div class="flight-result">
                    <span>Sample Flight 1</span>
                    <button class="book-btn">Book</button>
                </div>
                <div class="flight-result">
                    <span>Sample Flight 2</span>
                    <button class="book-btn">Book</button>
                </div>
                <div class="flight-result">
                    <span>Sample Flight 3</span>
                    <button class="book-btn">Book</button>
                </div>
                <div class="flight-result">
                    <span>Sample Flight 4</span>
                    <button class="book-btn">Book</button>
                </div>
            `);
        } else {
            alert("Please fill in all required fields.");
        }
    });

    // Show Passenger Details page when Book button is clicked
    $(document).on('click', '.book-btn', function() {
        showSection('#passenger-details');
    });

    // Handle form submission on Passenger Details page
    $('#passenger-form').on('submit', function(event) {
        event.preventDefault();
        alert("Flight ticket booked successfully!");
        showSection('#home'); // Redirect to Home after booking
    });

    // Handle Sign Up form submission
    $('#sign-up-form').on('submit', function(event) {
        event.preventDefault();
        const password = $('#sign-up-password').val();
        const verifyPassword = $('#verify-password').val();

        if (password !== verifyPassword) {
            $('#error-message').text("Passwords do not match.");
        } else {
            $('#error-message').text("");
            alert("Account Created!");
            $('#sign-up-form')[0].reset();
            showSection('#home'); // Redirect to Home after successful sign up
        }
    });
});
