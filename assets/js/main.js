/**
 * Smart Putrajaya - Main JavaScript
 * Professional Government/Corporate Website
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // Dark Mode Toggle
    // ==========================================
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or system preference
    function getPreferredTheme() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    
    // Apply theme
    function setTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update toggle icon
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
    
    // Initialize theme
    setTheme(getPreferredTheme());
    
    // Toggle theme on button click
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
    
    // ==========================================
    // Search Functionality
    // ==========================================
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const searchModal = document.getElementById('searchModal');
    let searchData = [];
    
    // Load search data
    async function loadSearchData() {
        try {
            const response = await fetch('/search.json');
            searchData = await response.json();
        } catch (error) {
            console.log('Search data not available');
        }
    }
    
    // Perform search
    function performSearch(query) {
        if (!query || query.length < 2) {
            searchResults.innerHTML = '';
            return;
        }
        
        const lowerQuery = query.toLowerCase();
        const results = searchData.filter(item => {
            return item.title.toLowerCase().includes(lowerQuery) ||
                   (item.content && item.content.toLowerCase().includes(lowerQuery)) ||
                   (item.category && item.category.toLowerCase().includes(lowerQuery));
        }).slice(0, 10);
        
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search"></i>
                    <p>No results found for "<strong>${query}</strong>"</p>
                    <p class="small text-muted">Try different keywords or browse our pages</p>
                </div>
            `;
            return;
        }
        
        searchResults.innerHTML = results.map(item => `
            <a href="${item.url}" class="search-result-item">
                <span class="search-result-category">${item.category}</span>
                <div class="search-result-title">${highlightMatch(item.title, query)}</div>
                ${item.content ? `<div class="search-result-excerpt">${highlightMatch(item.content.substring(0, 100), query)}...</div>` : ''}
            </a>
        `).join('');
    }
    
    // Highlight matching text
    function highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }
    
    // Search event listeners
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            performSearch(e.target.value);
        });
        
        // Focus search input when modal opens
        if (searchModal) {
            searchModal.addEventListener('shown.bs.modal', () => {
                searchInput.focus();
            });
            
            // Clear search when modal closes
            searchModal.addEventListener('hidden.bs.modal', () => {
                searchInput.value = '';
                searchResults.innerHTML = '';
            });
        }
    }
    
    // Keyboard shortcut for search (Ctrl/Cmd + K)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchModal) {
                const modal = new bootstrap.Modal(searchModal);
                modal.show();
            }
        }
    });
    
    // Load search data on page load
    loadSearchData();
    
    // ==========================================
    // Navbar Scroll Effect
    // ==========================================
    const navbar = document.querySelector('.navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Initial check
    
    // ==========================================
    // Smooth Scroll for Anchor Links
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ==========================================
    // Intersection Observer for Animations
    // ==========================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.domain-card, .project-card, .news-card, .stat-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add animation class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    // ==========================================
    // Counter Animation for Statistics
    // ==========================================
    function animateCounter(element, target, suffix = '') {
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            element.textContent = Math.floor(current) + suffix;
        }, 16);
    }
    
    const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !statNumber.classList.contains('animated')) {
                    statNumber.classList.add('animated');
                    const text = statNumber.textContent.trim();
                    
                    // Parse the number and suffix
                    const match = text.match(/^(\d+)(\+|K|\%)?$/);
                    if (match) {
                        const num = parseInt(match[1]);
                        const suffix = match[2] || '';
                        animateCounter(statNumber, num, suffix);
                    }
                }
                statObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-item').forEach(el => {
        statObserver.observe(el);
    });
    
    // ==========================================
    // Mobile Menu Close on Link Click
    // ==========================================
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
            }
        });
    });
    
    // ==========================================
    // Form Handling (Newsletter & Contact)
    // ==========================================
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                const btn = this.querySelector('button[type="submit"]');
                const originalHTML = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i>';
                btn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';
                
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                    btn.style.background = '';
                    emailInput.value = '';
                }, 3000);
            }
        });
    }
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show success message
            const formCard = this.closest('.contact-form-card');
            const successMessage = document.getElementById('formSuccess');
            
            if (formCard && successMessage) {
                this.style.display = 'none';
                successMessage.style.display = 'block';
                
                // Reset after 5 seconds
                setTimeout(() => {
                    this.reset();
                    this.style.display = 'block';
                    successMessage.style.display = 'none';
                }, 5000);
            }
        });
    }
    
    // ==========================================
    // Back to Top Button
    // ==========================================
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTop);
    
    // Add styles for back to top button
    const backToTopStyles = document.createElement('style');
    backToTopStyles.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
            color: white;
            border: none;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 1000;
            box-shadow: 0 4px 15px rgba(10, 38, 71, 0.3);
        }
        .back-to-top:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(10, 38, 71, 0.4);
        }
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
        }
        [data-theme="dark"] .back-to-top {
            background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-dark) 100%);
            box-shadow: 0 4px 15px rgba(0, 168, 168, 0.3);
        }
    `;
    document.head.appendChild(backToTopStyles);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    console.log('Smart Putrajaya website initialized successfully.');
});

