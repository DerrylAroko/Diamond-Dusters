// Scroll to contact section when "Get a Quote" button is clicked
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Display success message
        document.getElementById('formMessage').textContent = 'Thank you! We will contact you soon.';
        document.getElementById('formMessage').style.color = 'green';

        // Reset form
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';

        // Clear message after 5 seconds
        setTimeout(() => {
            document.getElementById('formMessage').textContent = '';
        }, 5000);
    }

    return false; // Prevent default form submission
}

// Modal Functions
function openModal(modalId) {
    const modalElement = document.getElementById(modalId + '-modal');
    if (modalElement) {
        modalElement.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modalElement = document.getElementById(modalId + '-modal');
    if (modalElement) {
        modalElement.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Book Service Function
function bookService(serviceName) {
    // Show celebration toast notification
    showBookingNotification(serviceName);
    
    // Create confetti effect
    createConfetti();
    
    // Scroll to contact form
    setTimeout(() => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        
        // Pre-fill the message field with service type
        setTimeout(() => {
            document.getElementById('message').value = 'I would like to book: ' + serviceName;
            document.getElementById('message').focus();
        }, 500);
    }, 800);
}

// Show celebration notification
function showBookingNotification(serviceName) {
    const notification = document.createElement('div');
    notification.className = 'booking-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-emoji">🎉</span>
            <div class="notification-text">
                <strong>Great Choice!</strong>
                <p>${serviceName} selected</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Create confetti particles
function createConfetti() {
    const confettiCount = 30;
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = ['#ff9800', '#ff6b6b', '#667eea', '#764ba2', '#f093fb'][Math.floor(Math.random() * 5)];
        confetti.style.animationDelay = Math.random() * 0.3 + 's';
        confetti.style.animationDuration = Math.random() * 2 + 2 + 's';
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
}

// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all animated elements
    document.querySelectorAll('.about-tagline-box, .about-cta').forEach(el => {
        observer.observe(el);
    });
});
// Trigger the window-wipe when the section scrolls into view
document.addEventListener('DOMContentLoaded', () => {
    const wipeSections = document.querySelectorAll('.wipe-reveal');
    const wipeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                wipeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.35 });
    wipeSections.forEach(s => wipeObserver.observe(s));
});


