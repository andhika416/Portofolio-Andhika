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
            $resumeUrl = url('/images/' . rawurlencode('Resume Andhika Firjatullah.pdf'));
        @endphp

        @include('partials.navbar')

        <main>
            <section id="home" class="hero-band">
                @php
                    $heroSlides = [
                        [
                            'src' => url('/images/' . rawurlencode('Foto 3-trimmed.png')),
                            'alt' => 'Foto Andhika 3',
                            'scale' => 1.28,
                            'position' => 'center bottom',
                            'offsetY' => '0px',
                        ],
                        [
                            'src' => url('/images/' . rawurlencode('Foto 4-trimmed.png')),
                            'alt' => 'Foto Andhika 4',
                            'scale' => 1.26,
                            'position' => 'center bottom',
                            'offsetY' => '0px',
                        ],
                    ];
                @endphp
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
                    <div class="hero-copy" data-reveal>
                        <h1>Andhika Firjatullah</h1>
                        <p>
                            Seorang Web Developer yang berdedikasi dan berfokus pada pembangunan aplikasi web
                            yang tangguh, cepat, serta mampu menyatukan fungsionalitas dan estetika.
                        </p>

                        <div class="hero-actions">
                            <a href="#projects" class="boxed-button boxed-button--solid">Lihat Proyek</a>
                            <button
                                type="button"
                                class="boxed-button boxed-button--resume"
                                data-resume-open
                                data-resume-src="{{ $resumeUrl }}"
                            >
                                Lihat CV
                            </button>
                        </div>
                    </div>

                    <div class="portrait-frame" data-reveal data-reveal-delay="220">
                        <div class="hero-visual-stage">
                            <div class="hero-visual-stage__halo" aria-hidden="true"></div>
                            <div class="hero-visual-stage__floor" aria-hidden="true"></div>

                            <div class="hero-slideshow">
                                @foreach ($heroSlides as $heroSlide)
                                    <img
                                        src="{{ $heroSlide['src'] }}"
                                        alt="{{ $heroSlide['alt'] }}"
                                        class="hero-slideshow__image{{ $loop->first ? ' is-active' : '' }}"
                                        style="--slide-scale: {{ $heroSlide['scale'] }}; --slide-position: {{ $heroSlide['position'] }}; --slide-offset-y: {{ $heroSlide['offsetY'] }};"
                                        data-hero-slide
                                        @if (!$loop->first) loading="lazy" @endif
                                    >
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="resume-modal" data-resume-modal hidden>
                <div class="resume-modal__backdrop" data-resume-close></div>
                <div class="resume-modal__dialog elevated-panel" role="dialog" aria-modal="true" aria-labelledby="resume-modal-title">
                    <div class="resume-modal__header">
                        <div>
                            <p class="resume-modal__eyebrow">Curriculum Vitae</p>
                        </div>

                        <button type="button" class="resume-modal__close" data-resume-close aria-label="Tutup preview CV">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="resume-modal__body">
                        <iframe
                            src="about:blank"
                            title="Preview Resume Andhika Firjatullah"
                            loading="lazy"
                            data-resume-frame
                        ></iframe>
                    </div>
                </div>
            </div>

            <section id="about" class="content-section about-section">
                <div class="page-shell">
                    <div class="about-grid">
                        <h2 class="section-title section-title--side" data-reveal>Tentang Saya</h2>

                        <div class="elevated-panel about-panel" data-reveal data-reveal-delay="180">
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
                        ['name' => 'Figma', 'image' => 'Figma.png'],
                        ['name' => 'Laragon', 'image' => 'Laragon.jpg'],
                        ['name' => 'Power BI', 'image' => 'Power BI.png'],
                        ['name' => 'WordPress', 'image' => 'WordPress.png'],
                        ['name' => 'XAMPP', 'image' => 'XAMPP.png'],
                        ['name' => 'MySQL', 'image' => 'MySQL.png'],
                        ['name' => 'CodeIgniter', 'image' => 'Codeigneter.png'],
                    ];
                @endphp

                <div class="page-shell">
                    <h2 class="section-title section-title--center section-title--accent" data-reveal>Keahlian Utama</h2>

                    <div class="skills-marquee" style="--skills-count: {{ count($skillCards) }};" data-reveal data-reveal-delay="220">
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
                    <div class="title-row" data-reveal>
                        <h2 class="section-title">Proyek Unggulan</h2>
                        <span class="title-line" aria-hidden="true"></span>
                    </div>

                    <div class="project-grid">
                        <article class="project-card elevated-panel" data-reveal data-reveal-delay="180">
                            <div class="project-media project-media--showcase" data-project-pan>
                                <img
                                    src="{{ url('/images/' . rawurlencode('K3.png')) }}"
                                    alt="Tampilan Website Pelayanan K3"
                                    class="project-media__image"
                                    data-project-pan-image
                                >
                            </div>
                            <div class="project-body">
                                <h3>Website Pelayanan K3</h3>
                                <p>
                                    Website layanan K3 yang memudahkan pengelolaan informasi, pengajuan kebutuhan,
                                    dan penyampaian layanan keselamatan serta kesehatan kerja secara lebih terstruktur.
                                </p>
                            </div>
                        </article>

                        <article class="project-card elevated-panel" data-reveal data-reveal-delay="280">
                            <div class="project-media project-media--showcase" data-project-pan>
                                <img
                                    src="{{ url('/images/' . rawurlencode('Alat.png')) }}"
                                    alt="Tampilan Inventarisasi Alat K3"
                                    class="project-media__image"
                                    data-project-pan-image
                                >
                            </div>
                            <div class="project-body">
                                <h3>Inventarisasi Alat K3</h3>
                                <p>
                                    Sistem inventarisasi alat K3 yang membantu pencatatan, pemantauan ketersediaan,
                                    dan pengelolaan data peralatan keselamatan kerja secara lebih rapi dan efisien.
                                </p>
                            </div>
                        </article>

                        <article class="project-card elevated-panel" data-reveal data-reveal-delay="380">
                            <div class="project-media project-media--showcase" data-project-pan>
                                <img
                                    src="{{ url('/images/' . rawurlencode('Kimia.png')) }}"
                                    alt="Tampilan Inventarisasi Bahan Kimia"
                                    class="project-media__image"
                                    data-project-pan-image
                                >
                            </div>
                            <div class="project-body">
                                <h3>Inventarisasi Bahan Kimia</h3>
                                <p>
                                    Sistem inventarisasi bahan kimia yang membantu pencatatan stok, pemantauan data
                                    bahan, dan pengelolaan informasi penggunaan secara lebih aman dan terorganisir.
                                </p>
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
                            'url' => route('certificates.kemnaker'),
                            'count' => 3,
                        ],
                        [
                            'name' => 'BNSP',
                            'label' => 'Badan Nasional Sertifikasi Profesi',
                            'image' => 'BNSP.png',
                            'url' => route('certificates.bnsp'),
                            'count' => 1,
                        ],
                        [
                            'name' => 'MSIB',
                            'label' => 'Magang dan Studi Independen Bersertifikat',
                            'image' => 'MSIB.png',
                            'url' => route('certificates.msib'),
                            'count' => 1,
                        ],
                        [
                            'name' => 'Dicoding',
                            'label' => 'Dicoding Indonesia',
                            'image' => 'dicoding.png',
                            'url' => route('certificates.dicoding'),
                            'count' => 5,
                        ],
                        [
                            'name' => 'GNIK',
                            'label' => 'GERAKAN NASIONAL INDONESIA KOMPETEN',
                            'image' => 'GNIK.jpg',
                            'url' => route('certificates.gnik'),
                            'count' => 9,
                        ],
                        [
                            'name' => 'Cisco',
                            'label' => 'Cisco Networking Academy',
                            'image' => 'Cisco.png',
                            'url' => route('certificates.cisco'),
                            'count' => 2,
                        ],
                    ];
                @endphp
                <div class="page-shell">
                    <h2 class="section-title section-title--accent section-title--underlined" data-reveal>Sertifikasi</h2>

                    <div class="certificate-list">
                        @foreach ($certificateCards as $certificateCard)
                            @php
                                $hasDetailPage = !empty($certificateCard['url']);
                            @endphp
                            <article
                                class="certificate-card elevated-panel{{ $hasDetailPage ? ' certificate-card--interactive' : '' }}"
                                data-reveal
                                data-reveal-delay="{{ 180 + ($loop->index * 90) }}"
                            >
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
                @php
                    $contactLinks = [
                        [
                            'name' => 'WhatsApp',
                            'handle' => '0813 9852 2929',
                            'href' => 'https://wa.me/6281398522929',
                            'external' => true,
                            'icon' => 'whatsapp',
                        ],
                        [
                            'name' => 'Instagram',
                            'handle' => '@firjakandd_',
                            'href' => 'https://www.instagram.com/firjakandd_/',
                            'external' => true,
                            'icon' => 'instagram',
                        ],
                        [
                            'name' => 'LinkedIn',
                            'handle' => 'andhika-firjatullah-a56127264',
                            'href' => 'https://www.linkedin.com/in/andhika-firjatullah-a56127264/',
                            'external' => true,
                            'icon' => 'linkedin',
                        ],
                        [
                            'name' => 'GitHub',
                            'handle' => 'github.com/andhika416',
                            'href' => 'https://github.com/andhika416',
                            'external' => true,
                            'icon' => 'github',
                        ],
                    ];
                @endphp
                <div class="page-shell contact-shell">
                    <h2 class="section-title section-title--center" data-reveal>KONTAK</h2>
                    <p class="contact-intro" data-reveal data-reveal-delay="100">Siap berkolaborasi untuk proyek berikutnya? Langsung hubungi saja.</p>

                    <div class="contact-links" aria-label="Daftar kontak dan sosial media">
                        @foreach ($contactLinks as $contactLink)
                            <a
                                href="{{ $contactLink['href'] }}"
                                class="contact-card elevated-panel"
                                data-reveal
                                data-reveal-delay="{{ 200 + ($loop->index * 110) }}"
                                @if ($contactLink['external'])
                                    target="_blank" rel="noreferrer"
                                @endif
                            >
                                <span class="contact-card__icon" aria-hidden="true">
                                    @switch($contactLink['icon'])
                                        @case('whatsapp')
                                            <svg viewBox="0 0 24 24">
                                                <path d="M19.1 4.9A9.93 9.93 0 0 0 12.05 2C6.56 2 2.1 6.46 2.1 11.95c0 1.76.46 3.48 1.33 5L2 22l5.18-1.36a9.94 9.94 0 0 0 4.76 1.21h.01c5.49 0 9.95-4.46 9.95-9.95a9.9 9.9 0 0 0-2.8-7Zm-7.15 15.27h-.01a8.28 8.28 0 0 1-4.22-1.15l-.3-.18-3.07.81.82-2.99-.2-.31a8.27 8.27 0 0 1-1.28-4.39c0-4.58 3.73-8.31 8.32-8.31a8.2 8.2 0 0 1 5.9 2.45 8.24 8.24 0 0 1 2.42 5.87c0 4.58-3.73 8.31-8.3 8.31Zm4.56-6.22c-.25-.12-1.48-.73-1.71-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.85-.88 2.06 0 1.21.9 2.38 1.02 2.54.12.17 1.75 2.67 4.23 3.74.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.05-.1-.21-.17-.46-.29Z" fill="currentColor"/>
                                            </svg>
                                            @break
                                        @case('instagram')
                                            <svg viewBox="0 0 24 24">
                                                <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.35 1.65a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z" fill="currentColor"/>
                                            </svg>
                                            @break
                                        @case('linkedin')
                                            <svg viewBox="0 0 24 24">
                                                <path d="M4.75 3.5A1.75 1.75 0 1 1 3 5.25 1.75 1.75 0 0 1 4.75 3.5ZM3.25 8h3V20h-3Zm4.75 0h2.88v1.64h.04A3.15 3.15 0 0 1 13.75 7c3 0 3.55 1.97 3.55 4.53V20h-3v-7.53c0-1.8-.03-4.1-2.5-4.1s-2.88 1.95-2.88 3.97V20h-3Z" fill="currentColor"/>
                                            </svg>
                                            @break
                                        @case('github')
                                            <svg viewBox="0 0 24 24">
                                                <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.76-.24.76-.54v-1.9c-3.1.67-3.75-1.49-3.75-1.49a2.95 2.95 0 0 0-1.24-1.64c-1.01-.69.08-.67.08-.67a2.34 2.34 0 0 1 1.71 1.15 2.37 2.37 0 0 0 3.24.92 2.38 2.38 0 0 1 .7-1.49c-2.47-.28-5.07-1.24-5.07-5.5a4.3 4.3 0 0 1 1.14-2.99 4 4 0 0 1 .11-2.95s.93-.3 3.05 1.14a10.57 10.57 0 0 1 5.56 0c2.12-1.44 3.04-1.14 3.04-1.14a4 4 0 0 1 .11 2.95 4.29 4.29 0 0 1 1.14 2.99c0 4.27-2.6 5.21-5.08 5.49a2.67 2.67 0 0 1 .76 2.07v3.07c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" fill="currentColor"/>
                                            </svg>
                                            @break
                                    @endswitch
                                </span>

                                <span class="contact-card__copy">
                                    <strong>{{ $contactLink['name'] }}</strong>
                                    <small>{{ $contactLink['handle'] }}</small>
                                </span>
                            </a>
                        @endforeach
                    </div>
                </div>
            </section>
        </main>

        @include('partials.footer')
    </body>
</html>
