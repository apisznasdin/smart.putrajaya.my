# Smart Putrajaya - Official Website

> **Smart Urban Living for Sustainability & A Higher Quality of Life**

Official website for Smart Putrajaya initiative by Perbadanan Putrajaya, showcasing the smart city transformation journey towards 2050.

![Smart Putrajaya](https://img.shields.io/badge/Smart-Putrajaya-00A8A8?style=for-the-badge)
![Jekyll](https://img.shields.io/badge/Jekyll-4.3-CC0000?style=for-the-badge&logo=jekyll)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap)

---

## 🚀 Quick Start

### Prerequisites

- Ruby (version 2.7 or higher)
- RubyGems
- GCC and Make (for native extensions)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/perbadanan-putrajaya/smart-putrajaya.git
   cd smart-putrajaya
   ```

2. **Install dependencies**
   ```bash
   bundle install
   ```

3. **Run the development server**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the website**
   Open your browser and visit: `http://localhost:4000`

---

## 📁 Project Structure

```
smart-putrajaya/
├── _config.yml              # Jekyll configuration
├── _layouts/
│   ├── default.html         # Main layout (navbar + footer)
│   ├── post.html            # Blog post layout
│   └── project.html         # Project detail layout
├── _projects/               # Smart city project collection
├── _posts/                  # News articles (Jekyll blog)
├── assets/
│   ├── css/
│   │   ├── styles.css       # Main entry (imports modules)
│   │   ├── base.css         # Variables, themes, utilities
│   │   ├── components.css   # Navigation, cards, buttons
│   │   ├── sections.css     # Hero, stats, footer
│   │   └── pages.css        # Page-specific styles
│   ├── js/
│   │   └── main.js          # JavaScript functionality
│   ├── docs/                # Downloadable documents
│   └── images/              # Image assets
├── index.html               # Homepage
├── projects.md              # Projects listing page
├── domains.md               # 7 Smart Domains page
├── sdg.md                   # SDG alignment page
├── ms-iso37122.md           # ISO 37122 Standards page
├── news.md                  # News listing page
├── contact.md               # Contact page
├── 404.html                 # Custom 404 page
├── Gemfile                  # Ruby dependencies
└── README.md                # This file
```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🌙 **Dark Mode** | WCAG AA compliant light/dark theme toggle |
| 🔍 **Client-side Search** | Fast search across all content |
| 📱 **Responsive Design** | Mobile-first, works on all devices |
| ⚡ **Performance** | CSS/JS minification via jekyll-minifier |
| 🎯 **SEO Optimized** | Meta tags, sitemaps, structured data |
| ♿ **Accessible** | Skip links, focus states, reduced motion |
| 📊 **Analytics** | Google Analytics (configurable) |

---

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section, 7 domains, featured projects |
| Projects | `projects.md` | All smart city initiatives |
| Domains | `domains.md` | 7 Smart Domains with details |
| SDG | `sdg.md` | UN SDG alignment mapping |
| MS ISO 37122 | `ms-iso37122.md` | Smart city standards & indicators |
| News | `news.md` | Blog-style news listing |
| Contact | `contact.md` | Contact information & form |

---

## 🏙️ The 7 Smart Domains

1. **Smart Transportation & Mobility** - Integrated mobility solutions
2. **Smart Home & Environment** - Sustainable living initiatives
3. **Smart Government Services** - Digital-first public services
4. **Smart Infrastructure & Utilities** - Connected smart grid systems
5. **Smart Safety & Security** - AI-powered surveillance & emergency response
6. **Smart Economy** - Digital economy enablement
7. **Smart Community** - Citizen-centric programs

---

## � CSS Architecture

The CSS is organized into modular files for maintainability:

| File | Purpose |
|------|---------|
| `base.css` | CSS variables, theming (light/dark), resets, utilities |
| `components.css` | Navigation, cards, buttons, forms, badges |
| `sections.css` | Hero, statistics, CTA, footer, page headers |
| `pages.css` | Page-specific styles (ISO, SDG, domains, contact) |
| `styles.css` | Main entry point, imports modules, additional styles |

### Theme Variables

The site uses CSS custom properties for theming:

```css
:root {
    --bg-body: #FFFFFF;
    --text-primary: #0F172A;
    --brand-accent: #00A8A8;
    /* ... */
}

[data-theme="dark"] {
    --bg-body: #0F172A;
    --text-primary: #F1F5F9;
    /* ... */
}
```

---

## � Plugins

| Plugin | Purpose |
|--------|---------|
| `jekyll-feed` | RSS feed generation |
| `jekyll-seo-tag` | SEO meta tags |
| `jekyll-sitemap` | XML sitemap |
| `jekyll-minifier` | CSS/JS/HTML compression |

---

## ⚙️ Configuration

### Google Analytics

Analytics is configured in `_config.yml`:

```yaml
google_analytics: "G-XXXXXXXXXX"
```

The tracking code is conditionally included only when `google_analytics` is set.

### Adding News Posts

Create a new file in `_posts/` with the naming convention:
```
YYYY-MM-DD-title-of-post.md
```

Example front matter:
```yaml
---
layout: post
title: "Your Post Title"
date: 2025-01-20
category: Innovation
author: Smart City Team
tags: [smart city, innovation]
excerpt: Brief description of the post.
---
```

### Adding Projects

Create a new file in `_projects/` with:
```yaml
---
layout: project
title: "Project Name"
short_title: "Short Name"
excerpt: "Brief description"
icon: "fas fa-icon-name"
color_start: "#3B82F6"
color_end: "#1D4ED8"
status: "Active"
domains:
  - "Smart Transportation & Mobility"
sdgs:
  - number: 11
    name: "Sustainable Cities"
---
```

---

## 🌍 Required Assets

### SDG Icons

Download from: https://www.un.org/sustainabledevelopment/news/communications-material/

Place in `/assets/images/sdg/`:
- `sdg-01.png` through `sdg-17.png`

### SDG Wheel & Logo

Place in `/assets/images/`:
- `sdg-wheel.png` (color wheel)
- `sdg-logo.png` (horizontal logo)

---

## 🎨 Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#0A2647` | Headers, navbar |
| Secondary | `#205295` | Accents, links |
| Accent | `#00A8A8` | CTAs, highlights |
| Light | `#F8FAFC` | Backgrounds |

### Typography

- **Primary Font**: Plus Jakarta Sans
- **Secondary Font**: DM Sans

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Device |
|------------|-------|--------|
| xs | <576px | Mobile |
| sm | ≥576px | Mobile landscape |
| md | ≥768px | Tablet |
| lg | ≥992px | Laptop |
| xl | ≥1200px | Desktop |

---

## 📋 Featured Projects

| Project | Description | Link |
|---------|-------------|------|
| Putrajaya Command Centre (PCC) | Centralized monitoring hub | - |
| Smart CCTV & Panic Button | AI surveillance + emergency buttons | - |
| Putrajaya Urban Observatory (PUO) | Urban analytics platform | [puo.ppj.gov.my](https://puo.ppj.gov.my/) |
| IEMS | Environment monitoring system | [iems.ppj.gov.my](https://iems.ppj.gov.my/) |
| CEBB | Digital signage network | - |
| Micro Mobility by Tryke | E-scooter sharing service | - |
| MyAV Pilot | Autonomous vehicle testing | - |

---

## 🌐 Hosting

The site is configured for hosting at `https://smart.putrajaya.my`. 

To change the URL, update `_config.yml`:
```yaml
url: "https://your-domain.com"
```

---

## 📞 Contact

**Seksyen Smart City**  
Bahagian Teknologi Maklumat & Komunikasi  
Perbadanan Putrajaya  
24 Persiaran Perdana  
62675 W.P. Putrajaya, Malaysia

📞 Phone: +603 8887 7000  
📧 Email: smart@putrajaya.my

---

## 📜 License

© 2025 Perbadanan Putrajaya. All Rights Reserved.

---

<p align="center">
  <strong>Smart Putrajaya</strong><br>
  <em>Transforming Putrajaya for 2050</em>
</p>
