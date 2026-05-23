<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config('app.name', 'Andhika Portfolio') }}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
        >

        @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
            @vite(['resources/css/app.css', 'resources/js/app.js'])
        @else
            <style>
                {!! file_get_contents(resource_path('css/app.css')) !!}
            </style>
        @endif
    </head>
    <body>
        @php
            $heroSlides = [
                [
                    'src' => url('/images/' . rawurlencode('Foto 1-cropped.png')),
                    'alt' => 'Foto Andhika 1',
                    'scale' => 0.98,
                    'position' => 'center bottom',
                    'offsetY' => '0px',
                ],
                [
                    'src' => url('/images/' . rawurlencode('Foto 2-cropped.png')),
                    'alt' => 'Foto Andhika 2',
                    'scale' => 1.16,
                    'position' => 'center bottom',
                    'offsetY' => '0px',
                ],
            ];
        @endphp

        @include('partials.navbar')

        <main>
            <section id="home" class="hero-band">
                <div class="hero-cosmos" aria-hidden="true">
                    <span class="hero-cosmos__planet hero-cosmos__planet--one"></span>
                    <span class="hero-cosmos__planet hero-cosmos__planet--two"></span>
                    <span class="hero-cosmos__planet hero-cosmos__planet--three"></span>
                    <span class="hero-cosmos__orbit hero-cosmos__orbit--one"></span>
                    <span class="hero-cosmos__orbit hero-cosmos__orbit--two"></span>
                    <span class="hero-cosmos__orbit hero-cosmos__orbit--three"></span>
                    <span class="hero-cosmos__star hero-cosmos__star--one"></span>
                    <span class="hero-cosmos__star hero-cosmos__star--two"></span>
                    <span class="hero-cosmos__star hero-cosmos__star--three"></span>
                    <span class="hero-cosmos__star hero-cosmos__star--four"></span>
                    <span class="hero-cosmos__star hero-cosmos__star--five"></span>
                    <span class="hero-cosmos__star hero-cosmos__star--six"></span>
                    <span class="hero-cosmos__dot hero-cosmos__dot--one"></span>
                    <span class="hero-cosmos__dot hero-cosmos__dot--two"></span>
                    <span class="hero-cosmos__dot hero-cosmos__dot--three"></span>
                    <span class="hero-cosmos__dot hero-cosmos__dot--four"></span>
                    <span class="hero-cosmos__trail hero-cosmos__trail--one"></span>
                    <span class="hero-cosmos__trail hero-cosmos__trail--two"></span>
                    <span class="hero-cosmos__nebula hero-cosmos__nebula--one"></span>
                    <span class="hero-cosmos__nebula hero-cosmos__nebula--two"></span>
                    <span class="hero-cosmos__cluster hero-cosmos__cluster--one"></span>
                    <span class="hero-cosmos__cluster hero-cosmos__cluster--two"></span>
                    <span class="hero-cosmos__grid"></span>
                </div>

                <div class="page-shell hero-grid">
                    <div class="hero-copy">
                        <h1>Andhika Firjatullah</h1>
                        <p>
                            A dedicated Web Developer specializing in building robust, high-performance web
                            applications that bridge functionality and aesthetics.
                        </p>

                        <div class="hero-actions">
                            <a href="#projects" class="boxed-button boxed-button--solid">View Projects</a>
                            <a href="#contact" class="boxed-button">Download CV</a>
                        </div>
                    </div>

                    <div class="portrait-frame">
                        <div class="hero-visual-stage">
                            <div class="hero-visual-stage__halo" aria-hidden="true"></div>
                            <div class="hero-visual-stage__floor" aria-hidden="true"></div>

                            <div class="hero-slideshow" data-slideshow data-slides='@json($heroSlides)'>
                                <img
                                    src="{{ $heroSlides[0]['src'] }}"
                                    alt="{{ $heroSlides[0]['alt'] }}"
                                    class="hero-slideshow__image"
                                    data-slide-image
                                    style="--slide-scale: {{ $heroSlides[0]['scale'] }}; --slide-position: {{ $heroSlides[0]['position'] }}; --slide-offset-y: {{ $heroSlides[0]['offsetY'] }};"
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="content-section about-section">
                <div class="page-shell">
                    <div class="about-grid">
                        <h2 class="section-title section-title--side">About Me</h2>

                        <div class="elevated-panel about-panel">
                            <p>
                                I am a passionate developer with a strong foundation in modern web technologies. My
                                journey in the tech world is driven by a desire to create impactful digital solutions
                                that solve real-world problems. With experience in both front-end and back-end
                                development, I pride myself on writing clean, maintainable code and staying ahead of
                                industry trends.
                            </p>
                            <p>
                                Beyond the screen, I am committed to continuous learning and professional growth.
                                Whether it is mastering a new framework or optimizing a database query, I approach
                                every challenge with precision and a structured mindset that ensures excellence in
                                every pixel.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" class="content-section band-section">
                <div class="page-shell">
                    <h2 class="section-title section-title--center section-title--accent">Core Skills</h2>

                    <div class="skills-grid">
                        <article class="skill-card">
                            <svg viewBox="0 0 48 48" aria-hidden="true">
                                <rect x="8" y="12" width="32" height="22" rx="2" />
                                <path d="M14 28l5-6 4 4 7-8 4 5" />
                            </svg>
                            <span>Laravel</span>
                        </article>
                        <article class="skill-card">
                            <svg viewBox="0 0 48 48" aria-hidden="true">
                                <ellipse cx="24" cy="15" rx="12" ry="5" />
                                <path d="M12 15v12c0 3 5 5 12 5s12-2 12-5V15" />
                                <path d="M12 22c0 3 5 5 12 5s12-2 12-5" />
                            </svg>
                            <span>MySQL</span>
                        </article>
                        <article class="skill-card">
                            <svg viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M18 15l-8 9 8 9" />
                                <path d="M30 15l8 9-8 9" />
                                <path d="M26 12l-4 24" />
                            </svg>
                            <span>PHP</span>
                        </article>
                        <article class="skill-card">
                            <svg viewBox="0 0 48 48" aria-hidden="true">
                                <rect x="10" y="10" width="28" height="28" />
                                <path d="M16 18h16M16 24h10M16 30h14" />
                            </svg>
                            <span>Bootstrap</span>
                        </article>
                        <article class="skill-card">
                            <svg viewBox="0 0 48 48" aria-hidden="true">
                                <rect x="11" y="9" width="26" height="30" />
                                <path d="M17 18h14M17 24h14M17 30h8" />
                            </svg>
                            <span>Analytics</span>
                        </article>
                        <article class="skill-card">
                            <svg viewBox="0 0 48 48" aria-hidden="true">
                                <rect x="10" y="12" width="28" height="22" />
                                <path d="M10 18h28M18 12v22" />
                            </svg>
                            <span>WordPress</span>
                        </article>
                    </div>
                </div>
            </section>

            <section id="projects" class="content-section projects-section">
                <div class="page-shell">
                    <div class="title-row">
                        <h2 class="section-title">Featured Projects</h2>
                        <span class="title-line" aria-hidden="true"></span>
                    </div>

                    <div class="project-grid">
                        <article class="project-card elevated-panel">
                            <div class="project-media">
                                <svg viewBox="0 0 320 180" aria-hidden="true">
                                    <rect width="320" height="180" fill="#1d1d1d" />
                                    <rect x="22" y="24" width="108" height="56" fill="#2a2a2a" />
                                    <rect x="143" y="24" width="58" height="56" fill="#2c2c2c" />
                                    <rect x="212" y="24" width="84" height="122" fill="#303030" />
                                    <rect x="22" y="92" width="84" height="54" fill="#2d2d2d" />
                                    <rect x="116" y="92" width="84" height="54" fill="#343434" />
                                    <path d="M34 66h84M34 58h84M154 64h34M154 56h26M224 58h60M224 74h60M224 90h60M224 106h46" stroke="#575757" stroke-width="4" opacity="0.85" />
                                </svg>
                            </div>
                            <div class="project-body">
                                <h3>E-Commerce Platform</h3>
                                <p>
                                    A full-stack Laravel application featuring advanced inventory management, payment
                                    integration, and real-time analytics.
                                </p>
                                <a href="#contact" class="boxed-button boxed-button--small">Project Details</a>
                            </div>
                        </article>

                        <article class="project-card elevated-panel">
                            <div class="project-media">
                                <svg viewBox="0 0 320 180" aria-hidden="true">
                                    <rect width="320" height="180" fill="#171717" />
                                    <rect x="34" y="28" width="110" height="58" fill="#2a2a2a" />
                                    <rect x="176" y="28" width="110" height="58" fill="#2d2d2d" />
                                    <rect x="34" y="100" width="110" height="42" fill="#262626" />
                                    <rect x="176" y="100" width="110" height="42" fill="#2a2a2a" />
                                    <path d="M48 70c10-18 24-28 38-28s28 6 44 28M190 68c14-22 30-28 42-28s24 8 40 28M48 122h82M48 132h68M190 122h82M190 132h60" stroke="#5c5c5c" stroke-width="4" opacity="0.9" />
                                    <circle cx="26" cy="152" r="14" fill="#121212" />
                                    <circle cx="294" cy="152" r="14" fill="#121212" />
                                </svg>
                            </div>
                            <div class="project-body">
                                <h3>Data Analytics Engine</h3>
                                <p>
                                    Custom reporting for process and visualization of large-scale datasets with
                                    interactive charts and reporting tools.
                                </p>
                                <a href="#contact" class="boxed-button boxed-button--small">Project Details</a>
                            </div>
                        </article>

                        <article class="project-card elevated-panel">
                            <div class="project-media">
                                <svg viewBox="0 0 320 180" aria-hidden="true">
                                    <rect width="320" height="180" fill="#222" />
                                    <polygon points="82,130 230,150 256,56 110,36" fill="#ece9e3" />
                                    <polygon points="104,121 213,135 228,71 121,57" fill="#f5f3f1" />
                                    <path d="M132 82h78M132 92h52M132 102h68" stroke="#bfc3c8" stroke-width="5" />
                                    <rect x="132" y="112" width="46" height="12" fill="#d9dde2" />
                                    <rect x="34" y="150" width="54" height="8" fill="#171717" opacity="0.75" />
                                </svg>
                            </div>
                            <div class="project-body">
                                <h3>Bespoke CMS Solution</h3>
                                <p>
                                    Tailored WordPress development with custom themes and plugins for high-traffic
                                    corporate websites.
                                </p>
                                <a href="#contact" class="boxed-button boxed-button--small">Project Details</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section id="certifications" class="content-section band-section">
                <div class="page-shell">
                    <h2 class="section-title section-title--accent section-title--underlined">Certifications</h2>

                    <div class="certificate-list">
                        <article class="certificate-card elevated-panel">
                            <div class="certificate-icon" aria-hidden="true">
                                <svg viewBox="0 0 48 48">
                                    <path d="M24 8l5 3 6-1 1 6 5 3-3 5 1 6-6 1-3 5-5-3-6 1-1-6-5-3 3-5-1-6 6-1z" />
                                    <circle cx="24" cy="24" r="6" />
                                </svg>
                            </div>
                            <div>
                                <h3>Advanced Laravel Specialist</h3>
                                <p>Global Tech Institute • 2025</p>
                            </div>
                        </article>

                        <article class="certificate-card elevated-panel">
                            <div class="certificate-icon" aria-hidden="true">
                                <svg viewBox="0 0 48 48">
                                    <path d="M24 8l5 3 6-1 1 6 5 3-3 5 1 6-6 1-3 5-5-3-6 1-1-6-5-3 3-5-1-6 6-1z" />
                                    <circle cx="24" cy="24" r="6" />
                                </svg>
                            </div>
                            <div>
                                <h3>Professional Database Design</h3>
                                <p>Database Academy • 2025</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section id="contact" class="content-section contact-section">
                <div class="page-shell contact-shell">
                    <h2 class="section-title section-title--center">Get In Touch</h2>
                    <p class="contact-intro">Ready to collaborate on your next project? Drop a message below.</p>

                    <form class="contact-form">
                        <div class="contact-grid">
                            <label class="field-block">
                                <span>Full Name</span>
                                <input type="text" placeholder="Enter your name" />
                            </label>

                            <label class="field-block">
                                <span>Email Address</span>
                                <input type="email" placeholder="Enter your email" />
                            </label>
                        </div>

                        <label class="field-block field-block--full">
                            <span>Message</span>
                            <textarea rows="6" placeholder="Your project details..."></textarea>
                        </label>

                        <div class="contact-action">
                            <button type="button" class="boxed-button boxed-button--solid">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>

        @include('partials.footer')

        <script>
            document.addEventListener('DOMContentLoaded', function () {
                const slideshow = document.querySelector('[data-slideshow]');

                if (!slideshow) {
                    return;
                }

                const slideImage = slideshow.querySelector('[data-slide-image]');
                const slides = JSON.parse(slideshow.dataset.slides || '[]');
                let currentIndex = 0;
                let timerId = null;

                const showSlide = (nextIndex) => {
                    if (!slides[nextIndex] || !slideImage) {
                        return;
                    }

                    slideImage.classList.remove('is-visible');

                    window.setTimeout(() => {
                        slideImage.src = slides[nextIndex].src;
                        slideImage.alt = slides[nextIndex].alt;
                        slideImage.style.setProperty('--slide-scale', slides[nextIndex].scale);
                        slideImage.style.setProperty('--slide-position', slides[nextIndex].position);
                        slideImage.style.setProperty('--slide-offset-y', slides[nextIndex].offsetY || '0px');
                        slideImage.classList.add('is-visible');
                    }, 120);

                    currentIndex = nextIndex;
                };

                const startAutoSlide = () => {
                    timerId = window.setInterval(() => {
                        const nextIndex = (currentIndex + 1) % slides.length;
                        showSlide(nextIndex);
                    }, 3200);
                };

                if (slides.length > 1) {
                    slideImage.classList.add('is-visible');
                    startAutoSlide();
                } else if (slideImage) {
                    slideImage.classList.add('is-visible');
                }
            });
        </script>
    </body>
</html>
