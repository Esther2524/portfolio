document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section:not(.sidebar)'); // Select all sections except the sidebar
    const navLinks = document.querySelectorAll('header nav a');

    // Function to hide all sections
    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none'; // Hide each section
        });
    }

    // Initialize by hiding all sections except the first one
    hideAllSections();
    sections[0].style.display = 'block'; // Display only the first main section initially

    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));

            hideAllSections(); // Hide all sections
            targetSection.style.display = 'block'; // Display the target section

            // Update active link
            navLinks.forEach(lnk => {
                lnk.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
