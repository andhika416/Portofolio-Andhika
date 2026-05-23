<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ config('app.name', 'Portofolio Andhika') }}</title>
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
            <script>
                {!! file_get_contents(resource_path('js/app.js')) !!}
            </script>
        @endif
    </head>
    <body>
        @php
            $heroSlide = [
                'src' => url('/images/' . rawurlencode('Foto 1-cropped.png')),
                'alt' => 'Foto Andhika',
                'scale' => 1,
                'position' => 'center bottom',
                'offsetY' => '0px',
            ];
        @endphp

        @include('partials.navbar')

        <main>
            <section id="home" class="hero-band">
                <div class="hero-sky" aria-hidden="true">
                    <span class="hero-sky__nebula hero-sky__nebula--one"></span>
                    <span class="hero-sky__nebula hero-sky__nebula--two"></span>
                    <span class="hero-sky__nebula hero-sky__nebula--three"></span>
                    <span class="hero-sky__ring hero-sky__ring--one"></span>
                    <span class="hero-sky__ring hero-sky__ring--two"></span>
                    <span class="hero-sky__grid"></span>
                    <span class="hero-sky__stars hero-sky__stars--near"></span>
                    <span class="hero-sky__stars hero-sky__stars--far"></span>
                    <span class="hero-sky__meteor hero-sky__meteor--one"></span>
                    <span class="hero-sky__meteor hero-sky__meteor--two"></span>
                    <span class="hero-sky__meteor hero-sky__meteor--three"></span>
                </div>

                <div class="page-shell hero-grid">
                    <div class="hero-copy">
                        <h1>Andhika Firjatullah</h1>
                        <p>
                            Seorang Web Developer yang berdedikasi dan berfokus pada pembangunan aplikasi web
                            yang tangguh, cepat, serta mampu menyatukan fungsionalitas dan estetika.
                        </p>

                        <div class="hero-actions">
                            <a href="#projects" class="boxed-button boxed-button--solid">Lihat Proyek</a>
                            <a href="#contact" class="boxed-button">Unduh CV</a>
                        </div>
                    </div>

                    <div class="portrait-frame">
                        <div class="hero-visual-stage">
                            <div class="hero-visual-stage__halo" aria-hidden="true"></div>
                            <div class="hero-visual-stage__floor" aria-hidden="true"></div>

                            <div class="hero-slideshow">
                                <img
                                    src="{{ $heroSlide['src'] }}"
                                    alt="{{ $heroSlide['alt'] }}"
                                    class="hero-slideshow__image"
                                    style="--slide-scale: {{ $heroSlide['scale'] }}; --slide-position: {{ $heroSlide['position'] }}; --slide-offset-y: {{ $heroSlide['offsetY'] }};"
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about" class="content-section about-section">
                <div class="page-shell">
                    <div class="about-grid">
                        <h2 class="section-title section-title--side">Tentang Saya</h2>

                        <div class="elevated-panel about-panel">
                            <p>
                                Saya adalah seorang developer yang antusias dengan fondasi yang kuat dalam teknologi
                                web modern. Perjalanan saya di dunia teknologi didorong oleh keinginan untuk
                                menciptakan solusi digital yang berdampak dan mampu menyelesaikan masalah nyata.
                                Dengan pengalaman di sisi front-end maupun back-end, saya terbiasa menulis kode yang
                                rapi, mudah dirawat, dan tetap relevan dengan perkembangan industri.
                            </p>
                            <p>
                                Di luar layar, saya berkomitmen untuk terus belajar dan berkembang secara profesional.
                                Baik saat mempelajari framework baru maupun mengoptimalkan query database, saya
                                menghadapi setiap tantangan dengan ketelitian dan pola pikir terstruktur demi
                                menghasilkan kualitas terbaik di setiap detail.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" class="content-section band-section">
                @php
                    $skillCards = [
                        ['name' => 'Laravel', 'image' => 'Laravel.png'],
                        ['name' => 'Bootstrap', 'image' => 'Bootstrap.png'],
                        ['name' => 'Power BI', 'image' => 'Power BI.png'],
                        ['name' => 'WordPress', 'image' => 'WordPress.png'],
                        ['name' => 'XAMPP', 'image' => 'XAMPP.png'],
                        ['name' => 'MySQL', 'image' => 'MySQL.png'],
                        ['name' => 'CodeIgniter', 'image' => 'Codeigneter.png'],
                    ];
                @endphp

                <div class="page-shell">
                    <h2 class="section-title section-title--center section-title--accent">Keahlian Utama</h2>

                    <div class="skills-marquee" style="--skills-count: {{ count($skillCards) }};">
                        <div class="skills-grid" aria-label="Daftar keahlian utama">
                            @for ($loopIndex = 0; $loopIndex < 2; $loopIndex++)
                                <div class="skills-grid__group" @if ($loopIndex === 1) aria-hidden="true" @endif>
                                    @foreach ($skillCards as $skillCard)
                                        <article class="skill-card">
                                            <img
                                                src="{{ url('/images/' . rawurlencode($skillCard['image'])) }}"
                                                alt="Logo {{ $skillCard['name'] }}"
                                            >
                                            <span>{{ $skillCard['name'] }}</span>
                                        </article>
                                    @endforeach
                                </div>
                            @endfor
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" class="content-section projects-section">
                <div class="page-shell">
                    <div class="title-row">
                        <h2 class="section-title">Proyek Unggulan</h2>
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
                                <h3>Platform E-Commerce</h3>
                                <p>
                                    Aplikasi Laravel full-stack dengan fitur manajemen inventaris lanjutan, integrasi
                                    pembayaran, dan analitik real-time.
                                </p>
                                <a href="#contact" class="boxed-button boxed-button--small">Detail Proyek</a>
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
                                <h3>Mesin Analitik Data</h3>
                                <p>
                                    Sistem pelaporan kustom untuk pemrosesan dan visualisasi dataset berskala besar
                                    dengan grafik interaktif dan alat pelaporan.
                                </p>
                                <a href="#contact" class="boxed-button boxed-button--small">Detail Proyek</a>
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
                                <h3>Solusi CMS Kustom</h3>
                                <p>
                                    Pengembangan WordPress yang disesuaikan dengan tema dan plugin kustom untuk situs
                                    perusahaan dengan trafik tinggi.
                                </p>
                                <a href="#contact" class="boxed-button boxed-button--small">Detail Proyek</a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section id="certifications" class="content-section band-section">
                @php
                    $certificateCards = [
                        [
                            'name' => 'Kemnaker',
                            'label' => 'Kementerian Ketenagakerjaan RI',
                            'image' => 'Kemnaker.png',
                            'count' => 1,
                        ],
                        [
                            'name' => 'BNSP',
                            'label' => 'Badan Nasional Sertifikasi Profesi',
                            'image' => 'BNSP.png',
                            'count' => 1,
                        ],
                        [
                            'name' => 'MSIB',
                            'label' => 'Magang dan Studi Independen Bersertifikat',
                            'image' => 'MSIB.png',
                            'count' => 1,
                        ],
                        [
                            'name' => 'Dicoding',
                            'label' => 'Dicoding Indonesia',
                            'image' => 'dicoding.png',
                            'url' => route('certificates.dicoding'),
                            'count' => 2,
                        ],
                        [
                            'name' => 'GNIK',
                            'label' => 'Gerakan Nasional 1000 Startup Digital',
                            'image' => 'GNIK.jpg',
                            'url' => route('certificates.gnik'),
                            'count' => 8,
                        ],
                        [
                            'name' => 'Cisco',
                            'label' => 'Cisco Networking Academy',
                            'image' => 'Cisco.png',
                            'count' => 1,
                        ],
                    ];
                @endphp
                <div class="page-shell">
                    <h2 class="section-title section-title--accent section-title--underlined">Sertifikasi</h2>

                    <div class="certificate-list">
                        @foreach ($certificateCards as $certificateCard)
                            @php
                                $hasDetailPage = !empty($certificateCard['url']);
                            @endphp
                            <article class="certificate-card elevated-panel{{ $hasDetailPage ? ' certificate-card--interactive' : '' }}">
                                @if ($hasDetailPage)
                                    <a
                                        href="{{ $certificateCard['url'] }}"
                                        class="certificate-card__trigger"
                                    >
                                @else
                                    <div class="certificate-card__body">
                                @endif
                                    <div class="certificate-icon" aria-hidden="true">
                                        <img
                                            src="{{ url('/images/' . rawurlencode($certificateCard['image'])) }}"
                                            alt="Logo {{ $certificateCard['name'] }}"
                                        >
                                    </div>
                                    <div class="certificate-content">
                                        <div class="certificate-copy">
                                            <h3>{{ $certificateCard['name'] }}</h3>
                                            <p>{{ $certificateCard['label'] }}</p>
                                        </div>

                                        <div class="certificate-card__meta">
                                            <span class="certificate-chip">{{ $certificateCard['count'] }} sertifikat</span>

                                            @if ($hasDetailPage)
                                                <span class="certificate-action">Lihat sertifikat</span>
                                            @endif
                                        </div>
                                    </div>
                                @if ($hasDetailPage)
                                    </a>
                                @else
                                    </div>
                                @endif
                            </article>
                        @endforeach
                    </div>
                </div>
            </section>

            <section id="contact" class="content-section contact-section">
                <div class="page-shell contact-shell">
                    <h2 class="section-title section-title--center">Hubungi Saya</h2>
                    <p class="contact-intro">Siap berkolaborasi untuk proyek berikutnya? Tinggalkan pesan di bawah.</p>

                    <form class="contact-form">
                        <div class="contact-grid">
                            <label class="field-block">
                                <span>Nama Lengkap</span>
                                <input type="text" placeholder="Masukkan nama Anda" />
                            </label>

                            <label class="field-block">
                                <span>Alamat Email</span>
                                <input type="email" placeholder="Masukkan email Anda" />
                            </label>
                        </div>

                        <label class="field-block field-block--full">
                            <span>Pesan</span>
                            <textarea rows="6" placeholder="Tulis detail proyek Anda..."></textarea>
                        </label>

                        <div class="contact-action">
                            <button type="button" class="boxed-button boxed-button--solid">Kirim Pesan</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>

        @include('partials.footer')
    </body>
</html>
