// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgerLines = document.querySelectorAll('.hamburger');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // Animate hamburger to X
        hamburgerLines.forEach((line, index) => {
            if (mobileMenu.classList.contains('active')) {
                if (index === 0) line.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) line.style.opacity = '0';
                if (index === 2) line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                line.style.transform = 'none';
                line.style.opacity = '1';
            }
        });
    });

    // Section navigation
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .footer-link, [data-section]');
    const sections = document.querySelectorAll('.section');

    function showSection(sectionId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update active nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });

        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to current nav link
        document.querySelectorAll(`[data-section="${sectionId}"]`).forEach(link => {
            if (link.classList.contains('nav-link') || link.classList.contains('mobile-nav-link')) {
                link.classList.add('active');
            }
        });

        // Close mobile menu
        mobileMenu.classList.remove('active');
        hamburgerLines.forEach(line => {
            line.style.transform = 'none';
            line.style.opacity = '1';
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section') || this.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', function(e) {
        const currentHash = window.location.hash.substring(1) || 'home';
        showSection(currentHash);
    });

    // Set initial section based on URL hash
    const initialSection = window.location.hash.substring(1) || 'home';
    showSection(initialSection);

    // Brand card hover effects
    const brandCards = document.querySelectorAll('.brand-card');
    brandCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Value card hover effects
    const valueCards = document.querySelectorAll('.value-card, .stat-card, .goal-card, .plan-card');
    valueCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        });
    });

    // Job area hover effects
    const jobAreas = document.querySelectorAll('.job-area');
    jobAreas.forEach(area => {
        area.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
        });

        area.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add loading animation for images when they're added
    const imagePlaceholders = document.querySelectorAll('.image-placeholder, .product-placeholder');
    imagePlaceholders.forEach(placeholder => {
        placeholder.addEventListener('click', function() {
            // This is where you can add image upload functionality
            console.log('Image placeholder clicked - add your image upload logic here');
        });
    });

    // Contact form handling (if you add a contact form later)
    const contactButtons = document.querySelectorAll('.btn-outline, .btn:contains("Contact")');
    contactButtons.forEach(button => {
        if (button.textContent.includes('Contact')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                // You can add contact form modal or redirect to contact section
                alert('Contact functionality - add your contact form or email link here');
            });
        }
    });

    // Apply button functionality
    const applyButtons = document.querySelectorAll('.btn:contains("Apply")');
    applyButtons.forEach(button => {
        if (button.textContent.includes('Apply')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                // Open email client with careers email
                window.location.href = 'mailto:careers@landa-myanmar.com?subject=Job Application&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in joining Landa General Trading Co., Ltd. Please find my resume attached.%0D%0A%0D%0ABest regards,';
            });
        }
    });

    // Social media links functionality
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            // Add your social media URLs here
            console.log('Social media link clicked - add your social media URLs');
        });
    });

    // Intersection Observer for animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.value-card, .brand-card, .goal-card, .plan-card, .stat-card, .job-area');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add dynamic year to footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.innerHTML = footerText.innerHTML.replace('2024', currentYear);
    }
});

// Add smooth transitions for all interactive elements
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease, color 0.3s ease;
        }
        
        .brand-card:hover .brand-icon {
            animation: pulse 0.6s ease-in-out;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1.1); }
        }
        
        .nav-link::after {
            transition: width 0.3s ease;
        }
        
        .mobile-menu {
            transition: all 0.3s ease;
        }
        
        .hamburger {
            transition: all 0.3s ease;
        }
    `;
    document.head.appendChild(style);
});