// Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Certification Box Toggle Logic
const toggleButton = document.getElementById('toggle-certifications'); // The button inside main certification box
const certificationsContainer = document.getElementById('certification-container'); // Hidden grid container
const certificationBoxes = document.querySelectorAll('.certification-box'); // Individual certification boxes

// Add event listener to toggle the visibility of the grid container
if (toggleButton && certificationsContainer) {
    toggleButton.addEventListener('click', () => {
        // Toggle the 'visible' class to show/hide grid
        certificationsContainer.classList.toggle('visible');
        
        // Optionally scroll into view when revealed
        if (certificationsContainer.classList.contains('visible')) {
            certificationsContainer.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Add 'active' class toggle logic for individual certification boxes
certificationBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // Remove 'active' class from all other boxes
        certificationBoxes.forEach(otherBox => otherBox.classList.remove('active'));

        // Add 'active' class to the clicked box
        box.classList.add('active');
    });
});

// Form validation logic
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        // Basic validation: Check if all fields are filled
        let isValid = true;
        for (let value of formData.values()) {
            if (!value.trim()) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            alert('Form submitted successfully!');
            form.reset(); // Clear the form after submission
        } else {
            alert('Please fill out all required fields.');
        }
    });
}

// Console Feedback for Debugging
console.log('JavaScript loaded: Smooth scrolling, certifications toggle, and form validation are active.');
