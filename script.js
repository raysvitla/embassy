document.addEventListener('DOMContentLoaded', () => {

    // --- Footer Year ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Fade-in Animation on Scroll ---
    const observerOptions = {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const elementsToFade = document.querySelectorAll('.fade-in');
    elementsToFade.forEach(el => {
        observer.observe(el);
    });

     // --- Personalize Content (Replace placeholders here too if not done in HTML) ---
     const emailLinks = document.querySelectorAll('a[href="mailto:your.email@example.com"]');
     emailLinks.forEach(link => link.href = 'mailto:your.real.email@example.com'); // !!! REPLACE with your actual email

     const calendlyLinks = document.querySelectorAll('a[href="YOUR_CALENDLY_LINK_HERE"]');
     calendlyLinks.forEach(link => link.href = 'YOUR_ACTUAL_CALENDLY_LINK'); // !!! REPLACE with your actual Calendly link

     // Add your actual social media links here if you prefer JS over HTML edits
     // const linkedinLink = document.querySelector('.social-icons a[href="#"]'); // Example
     // if(linkedinLink) linkedinLink.href = 'YOUR_LINKEDIN_URL';


});