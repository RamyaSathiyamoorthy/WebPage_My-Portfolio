// Toggle Navigation Menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Filter Projects by Category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-item');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Lightbox for Project Images
function openLightbox(imageSrc) {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${imageSrc}" alt="Project Image">
            <button onclick="closeLightbox()" class="close-btn">&times;</button>
        </div>
    `;
    document.body.appendChild(lightbox);
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) lightbox.remove();
}

document.querySelectorAll('.project-image').forEach(img => {
    img.addEventListener('click', function () {
        openLightbox(this.src);
    });
});

// Form Validation
function validateForm(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.querySelector('input[name="name"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const message = form.querySelector('textarea[name="message"]').value.trim();
    
    clearErrors();
    let isValid = true;

    if (!name) {
        showError('name', 'Name is required');
        isValid = false;
    }
    if (!email || !email.includes('@')) {
        showError('email', 'Valid email is required');
        isValid = false;
    }
    if (!message) {
        showError('message', 'Message is required');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
    }
}
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none'; // Hide all sections
    });
    document.getElementById(sectionId).style.display = 'block'; // Show the selected section
}
function showError(fieldName, errorMessage) {
    const field = document.querySelector(`[name="${fieldName}"]`);
    const errorDiv = document.createElement('span');
    errorDiv.classList.add('error-message');
    errorDiv.textContent = errorMessage;
    field.parentElement.appendChild(errorDiv);
    field.classList.add('error');
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(msg => msg.remove());
    document.querySelectorAll('.error').forEach(field => field.classList.remove('error'));
}

document.querySelector('.contact-form')?.addEventListener('submit', validateForm);
