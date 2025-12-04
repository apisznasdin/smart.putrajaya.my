---
layout: default
title: News & Updates
description: Latest news and announcements from Smart Putrajaya
permalink: /news/
---

<!-- Page Header -->
<header class="page-header page-header-news">
    <div class="container">
        <div class="page-header-content">
            <h1 class="page-title">News & Updates</h1>
            <p class="page-subtitle">
                Stay informed with the latest developments, announcements, and milestones from Smart Putrajaya.
            </p>
            <nav class="breadcrumb-nav" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ '/' | relative_url }}"><i class="fas fa-home"></i> Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">News</li>
                </ol>
            </nav>
        </div>
    </div>
</header>

<!-- News Timeline Section -->
<section class="section">
    <div class="container">
        <div class="section-header">
            <div class="section-badge">
                <i class="fas fa-newspaper"></i>
                <span>News Archive</span>
            </div>
            <h2 class="section-title">Smart Putrajaya in the Media</h2>
            <p class="section-subtitle">
                A comprehensive timeline of news coverage and developments from 2017 to present.
            </p>
        </div>

        {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
        {% for year in posts_by_year %}
        <div class="news-year-section">
            <h3 class="news-year-header">{{ year.name }}</h3>
            <div class="news-timeline">
                {% for post in year.items %}
                <article class="news-timeline-item">
                    <div class="news-timeline-date">
                        <span class="news-day">{{ post.date | date: "%d" }}</span>
                        <span class="news-month">{{ post.date | date: "%b" }}</span>
                    </div>
                    <div class="news-timeline-content">
                        <div class="news-source-badge">
                            <i class="fas fa-external-link-alt"></i>
                            {{ post.source }}
                        </div>
                        <h4 class="news-timeline-title">
                            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
                        </h4>
                        <p class="news-timeline-excerpt">{{ post.excerpt | strip_html | truncate: 200 }}</p>
                        <div class="news-timeline-actions">
                            <a href="{{ post.url | relative_url }}" class="news-read-more">
                                Read More <i class="fas fa-arrow-right"></i>
                            </a>
                            {% if post.source_url %}
                            <a href="{{ post.source_url }}" target="_blank" class="news-source-link">
                                <i class="fas fa-external-link-alt"></i> Original Source
                            </a>
                            {% endif %}
                        </div>
                    </div>
                </article>
                {% endfor %}
            </div>
        </div>
        {% endfor %}
    </div>
</section>
