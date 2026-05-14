document.addEventListener('DOMContentLoaded', () => {
    // Select the headings you want to be collapsible
    const headings = document.querySelectorAll('.content h2, .content h3');

    headings.forEach(heading => {
        heading.classList.add('collapsible-heading');
        heading.style.cursor = 'pointer';
        
        // Check if already open (default)
        heading.classList.add('heading-open');

        // Add chevron icon
        const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        icon.setAttribute("class", "toggle-icon");
        icon.setAttribute("viewBox", "0 0 100 100");
        icon.innerHTML = '<path d="M 30,20 L 70,50 L 30,80 Z" fill="currentColor"></path>';
        heading.prepend(icon);

        heading.addEventListener('click', () => {
            // Toggle the 'heading-open' class
            heading.classList.toggle('heading-open');
            
            // Toggle all siblings until the next heading of the same or higher level
            let next = heading.nextElementSibling;
            const currentLevel = parseInt(heading.tagName.substring(1));
            
            while (next) {
                const nextLevel = next.tagName.startsWith('H') ? parseInt(next.tagName.substring(1)) : null;
                if (nextLevel && nextLevel <= currentLevel) break;
                
                // Toggle a class instead of direct style
                next.classList.toggle('is-collapsed-content', !heading.classList.contains('heading-open'));
                next = next.nextElementSibling;
            }
        });
    });
});

