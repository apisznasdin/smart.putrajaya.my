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
├── _config.yml          # Jekyll configuration
├── _layouts/
│   ├── default.html     # Main layout (navbar + footer)
│   └── post.html        # Blog post layout
├── _posts/              # News articles (Jekyll blog)
├── assets/
│   ├── css/
│   │   └── styles.css   # Custom styles
│   ├── js/
│   │   └── main.js      # JavaScript functionality
│   ├── docs/            # Downloadable documents
│   └── images/          # Image assets
├── index.html           # Homepage
├── projects.md          # Projects page
├── news.md              # News listing page
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

---

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero section, 7 domains, featured projects |
| Projects | `projects.md` | All 7 smart city initiatives |
| News | `news.md` | Blog-style news listing |

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

## 🌍 Required Assets - SDG Icons

Before deployment, you must add the UN SDG icons:

### SDG Goal Icons
Download from: https://www.un.org/sustainabledevelopment/news/communications-material/

Place in `/assets/images/sdg/`:
- `sdg-01.jpg` through `sdg-17.jpg`

### SDG Wheel & Logo
Place in `/assets/images/`:
- `sdg-wheel.png` (color wheel)
- `sdg-logo.png` (horizontal logo)

See `/assets/images/sdg/README.md` for details.

---

## 🌐 Hosting

The site is configured for hosting at `https://smart.putrajaya.my`. 

To change the URL, update `_config.yml`:
```yaml
url: "https://your-domain.com"
```

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

## 🛠️ Customization

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

### Updating Contact Information

Edit the `_config.yml` file:
```yaml
contact:
  address: "Your Address"
  phone: "+60 XX XXXX XXXX"
  email: "your@email.com"
```

### Adding the Blueprint PDF

Place your PDF file at:
```
assets/docs/smart-putrajaya-blueprint.pdf
```

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
