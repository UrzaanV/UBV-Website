document.getElementById('contact-btn').addEventListener('click', function() {
    var contactInfo = document.getElementById('contact-info');
    if (contactInfo.style.display === 'none' || contactInfo.style.display === '') {
        contactInfo.style.display = 'block';
    } else {
        contactInfo.style.display = 'none';
    }
    // Scroll down to the contact-info section
    contactInfo.scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', function () {
    // Listen for click events on the navigation bar links
    document.querySelectorAll('nav a').forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Prevent the default anchor link behavior
            e.preventDefault();

            // Determine the section to show based on the clicked link
            var targetId = link.getAttribute('href').slice(1); // Remove the '#' from the href value
            var targetSection = document.getElementById(targetId);

            // Toggle visibility of the targeted section
            if (targetSection) {
                var isSectionCurrentlyHidden = targetSection.style.display === 'none' || targetSection.style.display === '';
                // Hide all sections
                document.querySelectorAll('section').forEach(function(section) {
                    section.style.display = 'none'; 
                });
                
                // Set the appropriate display style based on the section's current state
                if (isSectionCurrentlyHidden) {
                    // If the section is a flex container, set it to 'flex' rather than 'block'
                    if (targetSection.classList.contains('flex')) {
                        targetSection.style.display = 'flex';
                    } else {
                        targetSection.style.display = 'block';
                    }
                } else {
                    targetSection.style.display = 'none';
                }

                // Smoothly scroll to the targeted section
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

