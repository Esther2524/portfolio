// 1. Navigation
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



// 2. Filtering
document.querySelectorAll('.category-list button').forEach(button => {
    button.addEventListener('click', function() {
        // get the category from button text
        const category = this.innerText.toLowerCase();
        const boxes = document.querySelectorAll('.portfolio-box');

        boxes.forEach(box => {
            if (category === 'all' || box.dataset.category === category) {
                box.style.display = 'block'; // display the box
            } else {
                box.style.display = 'none'; // hide the box
            }
        });

        // update active class on buttons
        document.querySelectorAll('.category-list .active').forEach(active => {
            active.classList.remove('active');
        });
        this.classList.add('active');

    });
});
