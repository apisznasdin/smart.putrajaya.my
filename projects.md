---
layout: default
title: Projects & Initiatives
description: Explore Smart Putrajaya's innovative projects driving urban transformation
permalink: /projects/
---

<!-- Page Header -->
<header class="page-header">
    <div class="container">
        <div class="page-header-content">
            <h1 class="page-title">Projects & Initiatives</h1>
            <p class="page-subtitle">
                Innovative solutions transforming Putrajaya into a sustainable, connected, and livable smart city.
            </p>
            <nav class="breadcrumb-nav" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ '/' | relative_url }}"><i class="fas fa-home"></i> Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Projects</li>
                </ol>
            </nav>
        </div>
    </div>
</header>

<!-- Projects Section -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <div class="section-badge">
                <i class="fas fa-rocket"></i>
                <span>Active Initiatives</span>
            </div>
            <h2 class="section-title">Our Smart City Projects</h2>
            <p class="section-subtitle">
                Explore {{ site.projects.size }} active initiatives across 7 Smart Domains, 
                each contributing to Putrajaya's vision of becoming a world-class smart city by 2050.
            </p>
        </div>

        <div class="projects-grid">
            {% for project in site.projects %}
            <div class="project-card">
                <div class="project-image" style="background: linear-gradient(135deg, {{ project.color_start | default: '#0A2647' }} 0%, {{ project.color_end | default: '#205295' }} 100%);">
                    <i class="{{ project.icon | default: 'fas fa-microchip' }} project-icon"></i>
                    <span class="project-domain">{{ project.domain }}</span>
                </div>
                <div class="project-content">
                    <h3 class="project-title">{{ project.title }}</h3>
                    <p class="project-excerpt">{{ project.excerpt | strip_html | truncate: 100 }}</p>
                    
                    <!-- SDG Icons -->
                    {% if project.sdgs %}
                    <div class="project-sdg-icons">
                        {% for sdg in project.sdgs %}
                        {% if sdg.number < 10 %}
                        <img src="{{ '/assets/images/sdg/sdg-0' | append: sdg.number | append: '.png' | relative_url }}" alt="SDG {{ sdg.number }}" title="SDG {{ sdg.number }}: {{ sdg.title }}" class="project-sdg-icon">
                        {% else %}
                        <img src="{{ '/assets/images/sdg/sdg-' | append: sdg.number | append: '.png' | relative_url }}" alt="SDG {{ sdg.number }}" title="SDG {{ sdg.number }}: {{ sdg.title }}" class="project-sdg-icon">
                        {% endif %}
                        {% endfor %}
                    </div>
                    {% endif %}
                    
                    <a href="{{ project.url | relative_url }}" class="project-link">
                        Learn More <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
            {% endfor %}
        </div>
    </div>
</section>

<!-- SDG Alignment Section with Wheel -->
<section class="section section-light">
    <div class="container">
        <div class="section-header">
            <div class="section-badge">
                <i class="fas fa-globe"></i>
                <span>Global Goals</span>
            </div>
            <h2 class="section-title">Aligned with UN Sustainable Development Goals</h2>
            <p class="section-subtitle">
                All Smart Putrajaya initiatives are designed to contribute to the achievement of the SDGs by 2030, 
                supporting both local and global sustainability efforts.
            </p>
        </div>
        
        <!-- SDG Wheel -->
        <div class="text-center mb-4">
            <img src="{{ '/assets/images/sdg-wheel.png' | relative_url }}" alt="UN SDGs Wheel" class="sdg-banner-wheel">
        </div>
        
        <div class="sdg-showcase-grid">
            <a href="{{ '/sdg/' | relative_url }}#sdg-2" class="sdg-showcase-item" title="Zero Hunger">
                <img src="{{ '/assets/images/sdg/sdg-02.png' | relative_url }}" alt="SDG 2">
            </a>
            <a href="{{ '/sdg/' | relative_url }}#sdg-3" class="sdg-showcase-item" title="Good Health & Well-being">
                <img src="{{ '/assets/images/sdg/sdg-03.png' | relative_url }}" alt="SDG 3">
            </a>
            <a href="{{ '/sdg/' | relative_url }}#sdg-6" class="sdg-showcase-item" title="Clean Water & Sanitation">
                <img src="{{ '/assets/images/sdg/sdg-06.png' | relative_url }}" alt="SDG 6">
            </a>
            <a href="{{ '/sdg/' | relative_url }}#sdg-7" class="sdg-showcase-item" title="Affordable & Clean Energy">
                <img src="{{ '/assets/images/sdg/sdg-07.png' | relative_url }}" alt="SDG 7">
            </a>
            <a href="{{ '/sdg/' | relative_url }}#sdg-8" class="sdg-showcase-item" title="Decent Work & Economic Growth">
                <img src="{{ '/assets/images/sdg/sdg-08.png' | relative_url }}" alt="SDG 8">
            </a>
            <a href="{{ '/sdg/' | relative_url }}#sdg-9" class="sdg-showcase-item" title="Industry, Innovation & Infrastructure">
                <img src="{{ '/assets/images/sdg/sdg-09.png' | relative_url }}" alt="SDG 9">
            </a>
            <a href="{{ '/sdg/' | relative_url }}#sdg-10" class="sdg-showcase-item" title="Reduced Inequalities">
                <img src="{{ '/assets/images/sdg/sdg-10.png' | relative_url }}" alt="SDG 10">
            </a>
            <a href="{{ '/sdg/' | relative_url }}#sdg-11" class="sdg-showcase-item" title="Sustainable Cities & Communities">
                <img src="{{ '/assets/images/sdg/sdg-11.png' | relative_url }}" alt="SDG 11">
            </a>
            <a href="{{ '/sdg/' | relative_url }}#sdg-12" class="sdg-showcase-item" title="Responsible Consumption & Production">
                <img src="{{ '/assets/images/sdg/sdg-12.png' | relative_url }}" alt="SDG 12">
            </a>
            <a href="{{ '/sdg/' | relative_url }}#sdg-13" class="sdg-showcase-item" title="Climate Action">
                <img src="{{ '/assets/images/sdg/sdg-13.png' | relative_url }}" alt="SDG 13">
            </a>
            <a href="{{ '/sdg/' | relative_url }}#sdg-16" class="sdg-showcase-item" title="Peace, Justice & Strong Institutions">
                <img src="{{ '/assets/images/sdg/sdg-16.png' | relative_url }}" alt="SDG 16">
            </a>
            <a href="{{ '/sdg/' | relative_url }}#sdg-17" class="sdg-showcase-item" title="Partnerships for the Goals">
                <img src="{{ '/assets/images/sdg/sdg-17.png' | relative_url }}" alt="SDG 17">
            </a>
        </div>
        
        <div class="text-center mt-4">
            <a href="{{ '/sdg/' | relative_url }}" class="btn-hero-secondary">
                <i class="fas fa-globe"></i>
                Learn More About Our SDG Contributions
            </a>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
    <div class="container">
        <h2 class="cta-title">Partner With Us</h2>
        <p class="cta-text">
            Interested in collaborating on smart city initiatives? We welcome partnerships with 
            technology providers, research institutions, and innovative organizations.
        </p>
        <a href="mailto:smart@putrajaya.my" class="btn-cta">
            <i class="fas fa-envelope"></i>
            Get in Touch
        </a>
    </div>
</section>
