document.addEventListener('DOMContentLoaded', () => {
    // Select the headings you want to be collapsible
    const headings = document.querySelectorAll('.content h2, .content h3');

    headings.forEach(heading => {
        heading.classList.add('collapsible-heading');
        heading.style.cursor = 'pointer';
        
        // Optional: Add a chevron icon via JS if you don't want to use CSS ::before
        heading.innerHTML = `<span class="toggle-icon">▶</span> ` + heading.innerHTML;

        heading.addEventListener('click', () => {
            // Toggle the 'active' class for the chevron rotation
            heading.classList.toggle('heading-open');
            
            // Toggle all siblings until the next heading of the same or higher level
            let next = heading.nextElementSibling;
            while (next && !['H1', 'H2', 'H3'].includes(next.tagName)) {
                next.style.display = (next.style.display === 'none' || next.style.display === '') ? 'block' : 'none';
                next = next.nextElementSibling;
            }
        });
    });
});
