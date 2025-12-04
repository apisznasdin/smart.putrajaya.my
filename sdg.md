---
layout: default
title: SDG Alignment
description: How Smart Putrajaya contributes to UN Sustainable Development Goals
permalink: /sdg/
---

<!-- Page Header -->
<header class="page-header page-header-sdg">
    <div class="container">
        <div class="page-header-content">
            <img src="{{ '/assets/images/sdg-' | relative_url }}logo.png" alt="Sustainable Development Goals" class="sdg-header-logo mb-3">
            <h1 class="page-title">Sustainable Development Goals</h1>
            <p class="page-subtitle">
                Smart Putrajaya's contribution to the UN 2030 Agenda for Sustainable Development
            </p>
            <nav class="breadcrumb-nav" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ '/' | relative_url }}"><i class="fas fa-home"></i> Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">SDG</li>
                </ol>
            </nav>
        </div>
    </div>
</header>

<!-- SDG Overview -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <div class="section-badge">
                <i class="fas fa-globe"></i>
                <span>Global Goals</span>
            </div>
            <h2 class="section-title">Our Commitment to Sustainability</h2>
            <p class="section-subtitle">
                All Smart Putrajaya initiatives are designed to contribute to the achievement of the 
                UN Sustainable Development Goals. Each project aligns with specific SDGs to ensure 
                our smart city development creates lasting positive impact.
            </p>
        </div>

        <!-- SDG Wheel -->
        <div class="text-center mb-5">
            <img src="{{ '/assets/images/sdg-wheel.png' | relative_url }}" alt="SDG Wheel" class="sdg-wheel-main" >
        </div>

        <!-- SDG Grid Overview -->
        <div class="sdg-overview-grid">
            <a href="#sdg-2" class="sdg-overview-item">
                <img src="{{ '/assets/images/sdg/sdg-02.png' | relative_url }}" alt="SDG 2">
            </a>
            <a href="#sdg-3" class="sdg-overview-item">
                <img src="{{ '/assets/images/sdg/sdg-03.png' | relative_url }}" alt="SDG 3">
            </a>
            <a href="#sdg-6" class="sdg-overview-item">
                <img src="{{ '/assets/images/sdg/sdg-06.png' | relative_url }}" alt="SDG 6">
            </a>
            <a href="#sdg-7" class="sdg-overview-item">
                <img src="{{ '/assets/images/sdg/sdg-07.png' | relative_url }}" alt="SDG 7">
            </a>
            <a href="#sdg-9" class="sdg-overview-item">
                <img src="{{ '/assets/images/sdg/sdg-09.png' | relative_url }}" alt="SDG 9">
            </a>
            <a href="#sdg-11" class="sdg-overview-item">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-11.png" alt="SDG 11">
            </a>
            <a href="#sdg-12" class="sdg-overview-item">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-12.png" alt="SDG 12">
            </a>
            <a href="#sdg-13" class="sdg-overview-item">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-13.png" alt="SDG 13">
            </a>
            <a href="#sdg-14" class="sdg-overview-item">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-14.png" alt="SDG 14">
            </a>
            <a href="#sdg-15" class="sdg-overview-item">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-15.png" alt="SDG 15">
            </a>
            <a href="#sdg-16" class="sdg-overview-item">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-16.png" alt="SDG 16">
            </a>
            <a href="#sdg-17" class="sdg-overview-item">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-17.png" alt="SDG 17">
            </a>
        </div>
    </div>
</section>

<!-- SDG Details Section -->
<section class="section section-light">
    <div class="container">
        
        <!-- SDG 2: Zero Hunger -->
        <div class="sdg-detail-card" id="sdg-2">
            <div class="sdg-detail-header sdg-2">
                <img src="{{ '/assets/images/sdg/sdg-02.png' | relative_url }}" alt="SDG 2" class="sdg-detail-icon">
                <div class="sdg-detail-title">
                    <span class="sdg-number">SDG 2</span>
                    <h3>Zero Hunger</h3>
                    <p>End hunger, achieve food security and improved nutrition and promote sustainable agriculture</p>
                </div>
            </div>
            <div class="sdg-detail-content">
                <h4>How We Contribute</h4>
                <p>Smart Putrajaya promotes urban agriculture and sustainable food systems through precision farming technologies, enabling local food production and reducing food miles while ensuring food security for the community.</p>
                
                <h4>Related Projects</h4>
                <div class="sdg-projects-grid">
                    {% for project in site.projects %}
                        {% for sdg in project.sdgs %}
                            {% if sdg.number == 2 %}
                            <a href="{{ project.url | relative_url }}" class="sdg-project-card">
                                <div class="project-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                    <i class="{{ project.icon }}"></i>
                                </div>
                                <div class="project-info">
                                    <h5>{{ project.short_title | default: project.title }}</h5>
                                    <p>{{ project.excerpt | strip_html | truncate: 60 }}</p>
                                </div>
                            </a>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                </div>
            </div>
        </div>

        <!-- SDG 3: Good Health & Well-being -->
        <div class="sdg-detail-card" id="sdg-3">
            <div class="sdg-detail-header sdg-3">
                <img src="{{ '/assets/images/sdg/sdg-03.png' | relative_url }}" alt="SDG 3" class="sdg-detail-icon">
                <div class="sdg-detail-title">
                    <span class="sdg-number">SDG 3</span>
                    <h3>Good Health & Well-being</h3>
                    <p>Ensure healthy lives and promote well-being for all at all ages</p>
                </div>
            </div>
            <div class="sdg-detail-content">
                <h4>How We Contribute</h4>
                <p>Smart Putrajaya promotes health and well-being through environmental monitoring, safe public spaces, and active mobility options that encourage healthy lifestyles.</p>
                
                <h4>Related Projects</h4>
                <div class="sdg-projects-grid">
                    {% for project in site.projects %}
                        {% for sdg in project.sdgs %}
                            {% if sdg.number == 3 %}
                            <a href="{{ project.url | relative_url }}" class="sdg-project-card">
                                <div class="project-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                    <i class="{{ project.icon }}"></i>
                                </div>
                                <div class="project-info">
                                    <h5>{{ project.short_title | default: project.title }}</h5>
                                    <p>{{ project.excerpt | strip_html | truncate: 60 }}</p>
                                </div>
                            </a>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                </div>
            </div>
        </div>

        <!-- SDG 6: Clean Water & Sanitation -->
        <div class="sdg-detail-card" id="sdg-6">
            <div class="sdg-detail-header sdg-6">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-06.png" alt="SDG 6" class="sdg-detail-icon">
                <div class="sdg-detail-title">
                    <span class="sdg-number">SDG 6</span>
                    <h3>Clean Water & Sanitation</h3>
                    <p>Ensure availability and sustainable management of water and sanitation for all</p>
                </div>
            </div>
            <div class="sdg-detail-content">
                <h4>How We Contribute</h4>
                <p>Through our environmental monitoring systems, we continuously track water quality in Putrajaya's lakes and water features, ensuring clean and safe water resources.</p>
                
                <h4>Related Projects</h4>
                <div class="sdg-projects-grid">
                    {% for project in site.projects %}
                        {% for sdg in project.sdgs %}
                            {% if sdg.number == 6 %}
                            <a href="{{ project.url | relative_url }}" class="sdg-project-card">
                                <div class="project-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                    <i class="{{ project.icon }}"></i>
                                </div>
                                <div class="project-info">
                                    <h5>{{ project.short_title | default: project.title }}</h5>
                                    <p>{{ project.excerpt | strip_html | truncate: 60 }}</p>
                                </div>
                            </a>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                </div>
            </div>
        </div>

        <!-- SDG 7: Affordable & Clean Energy -->
        <div class="sdg-detail-card" id="sdg-7">
            <div class="sdg-detail-header sdg-7">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-07.png" alt="SDG 7" class="sdg-detail-icon">
                <div class="sdg-detail-title">
                    <span class="sdg-number">SDG 7</span>
                    <h3>Affordable & Clean Energy</h3>
                    <p>Ensure access to affordable, reliable, sustainable and modern energy for all</p>
                </div>
            </div>
            <div class="sdg-detail-content">
                <h4>How We Contribute</h4>
                <p>Our electric mobility solutions, solar rooftop installations, EV charging infrastructure, and energy-efficient street lighting reduce dependence on fossil fuels and promote clean energy adoption.</p>
                
                <h4>Related Projects</h4>
                <div class="sdg-projects-grid">
                    {% for project in site.projects %}
                        {% for sdg in project.sdgs %}
                            {% if sdg.number == 7 %}
                            <a href="{{ project.url | relative_url }}" class="sdg-project-card">
                                <div class="project-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                    <i class="{{ project.icon }}"></i>
                                </div>
                                <div class="project-info">
                                    <h5>{{ project.short_title | default: project.title }}</h5>
                                    <p>{{ project.excerpt | strip_html | truncate: 60 }}</p>
                                </div>
                            </a>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                </div>
            </div>
        </div>

        <!-- SDG 9: Industry, Innovation & Infrastructure -->
        <div class="sdg-detail-card" id="sdg-9">
            <div class="sdg-detail-header sdg-9">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-09.png" alt="SDG 9" class="sdg-detail-icon">
                <div class="sdg-detail-title">
                    <span class="sdg-number">SDG 9</span>
                    <h3>Industry, Innovation & Infrastructure</h3>
                    <p>Build resilient infrastructure, promote inclusive industrialization and foster innovation</p>
                </div>
            </div>
            <div class="sdg-detail-content">
                <h4>How We Contribute</h4>
                <p>Smart Putrajaya pioneers innovative urban solutions including autonomous vehicles, IoT infrastructure, smart traffic systems, and AI-powered city management systems.</p>
                
                <h4>Related Projects</h4>
                <div class="sdg-projects-grid">
                    {% for project in site.projects %}
                        {% for sdg in project.sdgs %}
                            {% if sdg.number == 9 %}
                            <a href="{{ project.url | relative_url }}" class="sdg-project-card">
                                <div class="project-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                    <i class="{{ project.icon }}"></i>
                                </div>
                                <div class="project-info">
                                    <h5>{{ project.short_title | default: project.title }}</h5>
                                    <p>{{ project.excerpt | strip_html | truncate: 60 }}</p>
                                </div>
                            </a>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                </div>
            </div>
        </div>

        <!-- SDG 11: Sustainable Cities & Communities -->
        <div class="sdg-detail-card" id="sdg-11">
            <div class="sdg-detail-header sdg-11">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-11.png" alt="SDG 11" class="sdg-detail-icon">
                <div class="sdg-detail-title">
                    <span class="sdg-number">SDG 11</span>
                    <h3>Sustainable Cities & Communities</h3>
                    <p>Make cities and human settlements inclusive, safe, resilient and sustainable</p>
                </div>
            </div>
            <div class="sdg-detail-content">
                <h4>How We Contribute</h4>
                <p>This is our core SDG. Every Smart Putrajaya initiative is designed to make our city more sustainable, inclusive, safe, and resilient for all residents.</p>
                
                <h4>Related Projects</h4>
                <div class="sdg-projects-grid">
                    {% for project in site.projects %}
                        {% for sdg in project.sdgs %}
                            {% if sdg.number == 11 %}
                            <a href="{{ project.url | relative_url }}" class="sdg-project-card">
                                <div class="project-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                    <i class="{{ project.icon }}"></i>
                                </div>
                                <div class="project-info">
                                    <h5>{{ project.short_title | default: project.title }}</h5>
                                    <p>{{ project.excerpt | strip_html | truncate: 60 }}</p>
                                </div>
                            </a>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                </div>
            </div>
        </div>

        <!-- SDG 12: Responsible Consumption & Production -->
        <div class="sdg-detail-card" id="sdg-12">
            <div class="sdg-detail-header sdg-12">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-12.png" alt="SDG 12" class="sdg-detail-icon">
                <div class="sdg-detail-title">
                    <span class="sdg-number">SDG 12</span>
                    <h3>Responsible Consumption & Production</h3>
                    <p>Ensure sustainable consumption and production patterns</p>
                </div>
            </div>
            <div class="sdg-detail-content">
                <h4>How We Contribute</h4>
                <p>Through solar energy adoption, energy-efficient infrastructure, and smart resource management, we promote sustainable consumption patterns in city operations.</p>
                
                <h4>Related Projects</h4>
                <div class="sdg-projects-grid">
                    {% for project in site.projects %}
                        {% for sdg in project.sdgs %}
                            {% if sdg.number == 12 %}
                            <a href="{{ project.url | relative_url }}" class="sdg-project-card">
                                <div class="project-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                    <i class="{{ project.icon }}"></i>
                                </div>
                                <div class="project-info">
                                    <h5>{{ project.short_title | default: project.title }}</h5>
                                    <p>{{ project.excerpt | strip_html | truncate: 60 }}</p>
                                </div>
                            </a>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                </div>
            </div>
        </div>

        <!-- SDG 13: Climate Action -->
        <div class="sdg-detail-card" id="sdg-13">
            <div class="sdg-detail-header sdg-13">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-13.png" alt="SDG 13" class="sdg-detail-icon">
                <div class="sdg-detail-title">
                    <span class="sdg-number">SDG 13</span>
                    <h3>Climate Action</h3>
                    <p>Take urgent action to combat climate change and its impacts</p>
                </div>
            </div>
            <div class="sdg-detail-content">
                <h4>How We Contribute</h4>
                <p>Through environmental monitoring, electric mobility, solar energy, and sustainable transportation, we actively reduce carbon emissions and track climate indicators.</p>
                
                <h4>Related Projects</h4>
                <div class="sdg-projects-grid">
                    {% for project in site.projects %}
                        {% for sdg in project.sdgs %}
                            {% if sdg.number == 13 %}
                            <a href="{{ project.url | relative_url }}" class="sdg-project-card">
                                <div class="project-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                    <i class="{{ project.icon }}"></i>
                                </div>
                                <div class="project-info">
                                    <h5>{{ project.short_title | default: project.title }}</h5>
                                    <p>{{ project.excerpt | strip_html | truncate: 60 }}</p>
                                </div>
                            </a>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                </div>
            </div>
        </div>

        <!-- SDG 14: Life Below Water -->
        <div class="sdg-detail-card" id="sdg-14">
            <div class="sdg-detail-header sdg-14">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-14.png" alt="SDG 14" class="sdg-detail-icon">
                <div class="sdg-detail-title">
                    <span class="sdg-number">SDG 14</span>
                    <h3>Life Below Water</h3>
                    <p>Conserve and sustainably use the oceans, seas and marine resources</p>
                </div>
            </div>
            <div class="sdg-detail-content">
                <h4>How We Contribute</h4>
                <p>Our lake water quality monitoring system protects aquatic ecosystems in Putrajaya's man-made lake, ensuring sustainable management of water resources and aquatic life.</p>
                
                <h4>Related Projects</h4>
                <div class="sdg-projects-grid">
                    {% for project in site.projects %}
                        {% for sdg in project.sdgs %}
                            {% if sdg.number == 14 %}
                            <a href="{{ project.url | relative_url }}" class="sdg-project-card">
                                <div class="project-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                    <i class="{{ project.icon }}"></i>
                                </div>
                                <div class="project-info">
                                    <h5>{{ project.short_title | default: project.title }}</h5>
                                    <p>{{ project.excerpt | strip_html | truncate: 60 }}</p>
                                </div>
                            </a>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                </div>
            </div>
        </div>

        <!-- SDG 15: Life on Land -->
        <div class="sdg-detail-card" id="sdg-15">
            <div class="sdg-detail-header sdg-15">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-15.png" alt="SDG 15" class="sdg-detail-icon">
                <div class="sdg-detail-title">
                    <span class="sdg-number">SDG 15</span>
                    <h3>Life on Land</h3>
                    <p>Protect, restore and promote sustainable use of terrestrial ecosystems</p>
                </div>
            </div>
            <div class="sdg-detail-content">
                <h4>How We Contribute</h4>
                <p>Environmental monitoring helps protect Putrajaya's rich biodiversity, green corridors, wetlands, and ecosystems through data-driven conservation.</p>
                
                <h4>Related Projects</h4>
                <div class="sdg-projects-grid">
                    {% for project in site.projects %}
                        {% for sdg in project.sdgs %}
                            {% if sdg.number == 15 %}
                            <a href="{{ project.url | relative_url }}" class="sdg-project-card">
                                <div class="project-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                    <i class="{{ project.icon }}"></i>
                                </div>
                                <div class="project-info">
                                    <h5>{{ project.short_title | default: project.title }}</h5>
                                    <p>{{ project.excerpt | strip_html | truncate: 60 }}</p>
                                </div>
                            </a>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                </div>
            </div>
        </div>

        <!-- SDG 16: Peace, Justice & Strong Institutions -->
        <div class="sdg-detail-card" id="sdg-16">
            <div class="sdg-detail-header sdg-16">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-16.png" alt="SDG 16" class="sdg-detail-icon">
                <div class="sdg-detail-title">
                    <span class="sdg-number">SDG 16</span>
                    <h3>Peace, Justice & Strong Institutions</h3>
                    <p>Promote peaceful and inclusive societies for sustainable development</p>
                </div>
            </div>
            <div class="sdg-detail-content">
                <h4>How We Contribute</h4>
                <p>Our safety and security initiatives, combined with transparent governance through open data, strengthen public institutions and community safety.</p>
                
                <h4>Related Projects</h4>
                <div class="sdg-projects-grid">
                    {% for project in site.projects %}
                        {% for sdg in project.sdgs %}
                            {% if sdg.number == 16 %}
                            <a href="{{ project.url | relative_url }}" class="sdg-project-card">
                                <div class="project-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                    <i class="{{ project.icon }}"></i>
                                </div>
                                <div class="project-info">
                                    <h5>{{ project.short_title | default: project.title }}</h5>
                                    <p>{{ project.excerpt | strip_html | truncate: 60 }}</p>
                                </div>
                            </a>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                </div>
            </div>
        </div>

        <!-- SDG 17: Partnerships for the Goals -->
        <div class="sdg-detail-card" id="sdg-17">
            <div class="sdg-detail-header sdg-17">
                <img src="{{ '/assets/images/sdg/' | relative_url }}sdg-17.png" alt="SDG 17" class="sdg-detail-icon">
                <div class="sdg-detail-title">
                    <span class="sdg-number">SDG 17</span>
                    <h3>Partnerships for the Goals</h3>
                    <p>Strengthen the means of implementation and revitalize global partnerships</p>
                </div>
            </div>
            <div class="sdg-detail-content">
                <h4>How We Contribute</h4>
                <p>Smart Putrajaya actively engages in public-private partnerships, international knowledge sharing, and collaboration with research institutions and technology providers.</p>
                
                <h4>Related Projects</h4>
                <div class="sdg-projects-grid">
                    {% for project in site.projects %}
                        {% for sdg in project.sdgs %}
                            {% if sdg.number == 17 %}
                            <a href="{{ project.url | relative_url }}" class="sdg-project-card">
                                <div class="project-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                    <i class="{{ project.icon }}"></i>
                                </div>
                                <div class="project-info">
                                    <h5>{{ project.short_title | default: project.title }}</h5>
                                    <p>{{ project.excerpt | strip_html | truncate: 60 }}</p>
                                </div>
                            </a>
                            {% endif %}
                        {% endfor %}
                    {% endfor %}
                </div>
            </div>
        </div>

    </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
    <div class="container">
        <h2 class="cta-title">Learn More About Our Impact</h2>
        <p class="cta-text">
            Explore how each project contributes to sustainable development in Putrajaya.
        </p>
        <a href="{{ '/projects/' | relative_url }}" class="btn-cta">
            <i class="fas fa-project-diagram"></i>
            View All Projects
        </a>
    </div>
</section>

