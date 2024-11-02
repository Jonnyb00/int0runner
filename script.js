document.getElementById('viewWorkBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    const projectsSection = document.getElementById('projects');
    
    // Scroll to the projects section smoothly
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});
