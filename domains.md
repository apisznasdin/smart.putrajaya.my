---
layout: default
title: Smart Domains
description: Explore the 7 Smart Domains of Putrajaya Smart City Initiative
permalink: /domains/
---

<!-- Page Header -->
<header class="page-header">
    <div class="container">
        <div class="page-header-content">
            <h1 class="page-title">The 7 Smart Domains</h1>
            <p class="page-subtitle">
                Our comprehensive framework for smart city development covers seven interconnected domains,
                each designed to enhance the quality of life for Putrajaya's residents.
            </p>
            <nav class="breadcrumb-nav" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ '/' | relative_url }}"><i class="fas fa-home"></i> Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Domains</li>
                </ol>
            </nav>
        </div>
    </div>
</header>

<!-- Domains Overview -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <div class="section-badge">
                <i class="fas fa-cubes"></i>
                <span>Core Framework</span>
            </div>
            <h2 class="section-title">Integrated Smart City Framework</h2>
            <p class="section-subtitle">
                Each domain works synergistically with others to create a holistic smart city ecosystem
                that addresses all aspects of urban living.
            </p>
        </div>

        <!-- Domain 1: Smart Transportation -->
        <div class="domain-detail-card" id="smart-transportation">
            <div class="domain-detail-header domain-mobility">
                <div class="domain-detail-icon">
                    <i class="fas fa-bus"></i>
                </div>
                <div class="domain-detail-title">
                    <h2>Smart Transportation & Mobility</h2>
                    <p>Integrated mobility solutions for sustainable urban movement</p>
                </div>
            </div>
            <div class="domain-detail-content">
                <div class="row">
                    <div class="col-lg-6">
                        <h4>Overview</h4>
                        <p>Smart Transportation focuses on creating an efficient, sustainable, and connected mobility ecosystem for Putrajaya. This domain integrates various transportation modes, leverages technology for traffic optimization, and promotes eco-friendly alternatives to reduce carbon emissions.</p>
                        
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li>Autonomous vehicle integration</li>
                            <li>Micro-mobility solutions</li>
                            <li>Intelligent traffic management</li>
                            <li>Public transport optimization</li>
                            <li>Last-mile connectivity</li>
                            <li>Electric vehicle infrastructure</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <h4>Related Projects</h4>
                        <div class="domain-projects">
                            {% for project in site.projects %}
                                {% if project.domains contains "Smart Transportation & Mobility" %}
                                <a href="{{ project.url | relative_url }}" class="domain-project-card">
                                    <div class="project-card-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                        <i class="{{ project.icon }}"></i>
                                    </div>
                                    <div class="project-card-info">
                                        <h5>{{ project.short_title | default: project.title }}</h5>
                                        <p>{{ project.excerpt | strip_html | truncate: 80 }}</p>
                                        <span class="status-badge {% if project.status == 'Active' %}active{% elsif project.status == 'Pilot' %}pilot{% endif %}">{{ project.status }}</span>
                                    </div>
                                </a>
                                {% endif %}
                            {% endfor %}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Domain 2: Home & Environment -->
        <div class="domain-detail-card" id="home-environment">
            <div class="domain-detail-header domain-environment">
                <div class="domain-detail-icon">
                    <i class="fas fa-leaf"></i>
                </div>
                <div class="domain-detail-title">
                    <h2>Smart Home & Environment</h2>
                    <p>Sustainable living through environmental stewardship</p>
                </div>
            </div>
            <div class="domain-detail-content">
                <div class="row">
                    <div class="col-lg-6">
                        <h4>Overview</h4>
                        <p>Home & Environment domain emphasizes sustainability and quality of life through environmental monitoring, green initiatives, and smart home integration. This domain ensures that Putrajaya remains a clean, green, and healthy city for all residents.</p>
                        
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li>Environmental monitoring systems</li>
                            <li>Air and water quality management</li>
                            <li>Green building initiatives</li>
                            <li>Waste management optimization</li>
                            <li>Urban greenery and biodiversity</li>
                            <li>Climate change adaptation</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <h4>Related Projects</h4>
                        <div class="domain-projects">
                            {% for project in site.projects %}
                                {% if project.domains contains "Smart Home & Environment" %}
                                <a href="{{ project.url | relative_url }}" class="domain-project-card">
                                    <div class="project-card-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                        <i class="{{ project.icon }}"></i>
                                    </div>
                                    <div class="project-card-info">
                                        <h5>{{ project.short_title | default: project.title }}</h5>
                                        <p>{{ project.excerpt | strip_html | truncate: 80 }}</p>
                                        <span class="status-badge {% if project.status == 'Active' %}active{% elsif project.status == 'Pilot' %}pilot{% endif %}">{{ project.status }}</span>
                                    </div>
                                </a>
                                {% endif %}
                            {% endfor %}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Domain 3: Government Services -->
        <div class="domain-detail-card" id="government-services">
            <div class="domain-detail-header domain-government">
                <div class="domain-detail-icon">
                    <i class="fas fa-landmark"></i>
                </div>
                <div class="domain-detail-title">
                    <h2>Smart Government Services</h2>
                    <p>Digital-first public services for efficient governance</p>
                </div>
            </div>
            <div class="domain-detail-content">
                <div class="row">
                    <div class="col-lg-6">
                        <h4>Overview</h4>
                        <p>Government Services domain focuses on digital transformation of public administration, enabling seamless citizen engagement and efficient service delivery. This domain ensures transparent, accessible, and responsive government for all.</p>
                        
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li>E-government services</li>
                            <li>Digital citizen engagement</li>
                            <li>Open data initiatives</li>
                            <li>Public information systems</li>
                            <li>Administrative efficiency</li>
                            <li>Transparent governance</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <h4>Related Projects</h4>
                        <div class="domain-projects">
                            {% for project in site.projects %}
                                {% if project.domains contains "Smart Government Services" %}
                                <a href="{{ project.url | relative_url }}" class="domain-project-card">
                                    <div class="project-card-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                        <i class="{{ project.icon }}"></i>
                                    </div>
                                    <div class="project-card-info">
                                        <h5>{{ project.short_title | default: project.title }}</h5>
                                        <p>{{ project.excerpt | strip_html | truncate: 80 }}</p>
                                        <span class="status-badge {% if project.status == 'Active' %}active{% elsif project.status == 'Pilot' %}pilot{% endif %}">{{ project.status }}</span>
                                    </div>
                                </a>
                                {% endif %}
                            {% endfor %}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Domain 4: Infrastructure & Utilities -->
        <div class="domain-detail-card" id="infrastructure-utilities">
            <div class="domain-detail-header domain-infrastructure">
                <div class="domain-detail-icon">
                    <i class="fas fa-network-wired"></i>
                </div>
                <div class="domain-detail-title">
                    <h2>Smart Infrastructure & Utilities</h2>
                    <p>Connected infrastructure for a resilient city</p>
                </div>
            </div>
            <div class="domain-detail-content">
                <div class="row">
                    <div class="col-lg-6">
                        <h4>Overview</h4>
                        <p>Infrastructure & Utilities domain focuses on building a connected, resilient, and efficient urban infrastructure. This includes smart grid systems, IoT sensor networks, and optimized utility management to ensure reliable services for all residents.</p>
                        
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li>Smart grid systems</li>
                            <li>IoT sensor networks</li>
                            <li>Utility optimization</li>
                            <li>Digital connectivity</li>
                            <li>Infrastructure monitoring</li>
                            <li>Predictive maintenance</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <h4>Related Projects</h4>
                        <div class="domain-projects">
                            {% for project in site.projects %}
                                {% if project.domains contains "Smart Infrastructure & Utilities" %}
                                <a href="{{ project.url | relative_url }}" class="domain-project-card">
                                    <div class="project-card-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                        <i class="{{ project.icon }}"></i>
                                    </div>
                                    <div class="project-card-info">
                                        <h5>{{ project.short_title | default: project.title }}</h5>
                                        <p>{{ project.excerpt | strip_html | truncate: 80 }}</p>
                                        <span class="status-badge {% if project.status == 'Active' %}active{% elsif project.status == 'Pilot' %}pilot{% endif %}">{{ project.status }}</span>
                                    </div>
                                </a>
                                {% endif %}
                            {% endfor %}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Domain 5: Safety & Security -->
        <div class="domain-detail-card" id="safety-security">
            <div class="domain-detail-header domain-safety">
                <div class="domain-detail-icon">
                    <i class="fas fa-shield-alt"></i>
                </div>
                <div class="domain-detail-title">
                    <h2>Smart Safety & Security</h2>
                    <p>Protecting citizens through smart surveillance and response</p>
                </div>
            </div>
            <div class="domain-detail-content">
                <div class="row">
                    <div class="col-lg-6">
                        <h4>Overview</h4>
                        <p>Safety & Security domain leverages AI-powered surveillance, emergency response systems, and public safety innovations to create a safe environment for all. This domain ensures rapid response to incidents and proactive crime prevention.</p>
                        
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li>AI-powered surveillance</li>
                            <li>Emergency response systems</li>
                            <li>Crime prevention analytics</li>
                            <li>Public safety infrastructure</li>
                            <li>Disaster preparedness</li>
                            <li>Multi-agency coordination</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <h4>Related Projects</h4>
                        <div class="domain-projects">
                            {% for project in site.projects %}
                                {% if project.domains contains "Smart Safety & Security" %}
                                <a href="{{ project.url | relative_url }}" class="domain-project-card">
                                    <div class="project-card-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                        <i class="{{ project.icon }}"></i>
                                    </div>
                                    <div class="project-card-info">
                                        <h5>{{ project.short_title | default: project.title }}</h5>
                                        <p>{{ project.excerpt | strip_html | truncate: 80 }}</p>
                                        <span class="status-badge {% if project.status == 'Active' %}active{% elsif project.status == 'Pilot' %}pilot{% endif %}">{{ project.status }}</span>
                                    </div>
                                </a>
                                {% endif %}
                            {% endfor %}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Domain 6: Smart Economy -->
        <div class="domain-detail-card" id="smart-economy">
            <div class="domain-detail-header domain-economy">
                <div class="domain-detail-icon">
                    <i class="fas fa-chart-line"></i>
                </div>
                <div class="domain-detail-title">
                    <h2>Smart Economy</h2>
                    <p>Digital economy enablement for sustainable growth</p>
                </div>
            </div>
            <div class="domain-detail-content">
                <div class="row">
                    <div class="col-lg-6">
                        <h4>Overview</h4>
                        <p>Smart Economy domain focuses on digital economy enablement through innovation hubs, startup ecosystem support, and smart business solutions. This domain aims to position Putrajaya as a leading hub for technology and innovation.</p>
                        
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li>Innovation hubs and incubators</li>
                            <li>Startup ecosystem development</li>
                            <li>Digital commerce platforms</li>
                            <li>Smart business solutions</li>
                            <li>Technology investment attraction</li>
                            <li>Workforce digital skills</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <h4>Related Projects</h4>
                        <div class="domain-projects">
                            {% for project in site.projects %}
                                {% if project.domains contains "Smart Economy" %}
                                <a href="{{ project.url | relative_url }}" class="domain-project-card">
                                    <div class="project-card-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                        <i class="{{ project.icon }}"></i>
                                    </div>
                                    <div class="project-card-info">
                                        <h5>{{ project.short_title | default: project.title }}</h5>
                                        <p>{{ project.excerpt | strip_html | truncate: 80 }}</p>
                                        <span class="status-badge {% if project.status == 'Active' %}active{% elsif project.status == 'Pilot' %}pilot{% endif %}">{{ project.status }}</span>
                                    </div>
                                </a>
                                {% endif %}
                            {% endfor %}
                            {% assign economy_count = 0 %}
                            {% for project in site.projects %}
                                {% if project.domains contains "Smart Economy" %}
                                    {% assign economy_count = economy_count | plus: 1 %}
                                {% endif %}
                            {% endfor %}
                            {% if economy_count == 0 %}
                            <div class="no-projects-notice">
                                <i class="fas fa-info-circle"></i>
                                <p>Projects under development. Stay tuned for updates.</p>
                            </div>
                            {% endif %}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Domain 7: Smart Community -->
        <div class="domain-detail-card" id="smart-community">
            <div class="domain-detail-header domain-community">
                <div class="domain-detail-icon">
                    <i class="fas fa-users"></i>
                </div>
                <div class="domain-detail-title">
                    <h2>Smart Community</h2>
                    <p>Citizen-centric programs for inclusive development</p>
                </div>
            </div>
            <div class="domain-detail-content">
                <div class="row">
                    <div class="col-lg-6">
                        <h4>Overview</h4>
                        <p>Smart Community domain emphasizes citizen-centric programs that foster digital literacy, community engagement, and inclusive development. This domain ensures that all residents can participate in and benefit from smart city initiatives.</p>
                        
                        <h4>Key Focus Areas</h4>
                        <ul>
                            <li>Digital literacy programs</li>
                            <li>Community engagement platforms</li>
                            <li>Inclusive development initiatives</li>
                            <li>Public participation tools</li>
                            <li>Social cohesion programs</li>
                            <li>Accessible city services</li>
                        </ul>
                    </div>
                    <div class="col-lg-6">
                        <h4>Related Projects</h4>
                        <div class="domain-projects">
                            {% for project in site.projects %}
                                {% if project.domains contains "Smart Community" %}
                                <a href="{{ project.url | relative_url }}" class="domain-project-card">
                                    <div class="project-card-icon" style="background: linear-gradient(135deg, {{ project.color_start }} 0%, {{ project.color_end }} 100%);">
                                        <i class="{{ project.icon }}"></i>
                                    </div>
                                    <div class="project-card-info">
                                        <h5>{{ project.short_title | default: project.title }}</h5>
                                        <p>{{ project.excerpt | strip_html | truncate: 80 }}</p>
                                        <span class="status-badge {% if project.status == 'Active' %}active{% elsif project.status == 'Pilot' %}pilot{% endif %}">{{ project.status }}</span>
                                    </div>
                                </a>
                                {% endif %}
                            {% endfor %}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>

<!-- CTA Section -->
<section class="cta-section">
    <div class="container">
        <h2 class="cta-title">Explore Our Initiatives</h2>
        <p class="cta-text">
            Discover how each domain contributes to making Putrajaya a world-class smart city.
        </p>
        <a href="{{ '/projects/' | relative_url }}" class="btn-cta">
            <i class="fas fa-project-diagram"></i>
            View All Projects
        </a>
    </div>
</section>

