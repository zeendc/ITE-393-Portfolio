const menuToggle = document.getElementById('mobile-menu');
const sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});


function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
        sidebar.classList.remove('active');
    }
}

document.querySelectorAll('.sidebar-menu li a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').slice(1);
        scrollToSection(sectionId);
    });
});

document.addEventListener('click', (event) => {
    const isClickInsideSidebar = sidebar.contains(event.target);
    const isClickOnMenuToggle = menuToggle.contains(event.target);
    if (!isClickInsideSidebar && !isClickOnMenuToggle) {
        sidebar.classList.remove('active');
    }
});