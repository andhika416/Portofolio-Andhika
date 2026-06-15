<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>{{ config('app.name', 'Portofolio Andhika') }}</title>
        <script>
            (() => {
                document.documentElement.classList.add('has-page-intro');

                if ('scrollRestoration' in history) {
                    history.scrollRestoration = 'manual';
                }

                if (window.location.hash) {
                    history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
                }

                window.scrollTo(0, 0);
                window.addEventListener('pageshow', () => window.scrollTo(0, 0), { once: true });

                try {
                    document.documentElement.dataset.theme = localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light';
                    document.documentElement.dataset.language = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'id';
                } catch {
                    document.documentElement.dataset.theme = 'light';
                    document.documentElement.dataset.language = 'id';
                }

                window.setTimeout(() => {
                    document.documentElement.classList.remove('has-page-intro');
                }, 6000);
            })();
        </script>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
        >

        <link rel="stylesheet" href="/build/assets/style.css">
        <script type="module" src="/build/assets/app.js"></script>
    </head>
    <body>
        <div class="page-intro" data-page-intro aria-hidden="true">
            <div class="page-intro__stage" aria-label="Andhika">
                <span class="page-intro__letter" style="--intro-index: 0; --intro-color: #0f6576;">A</span>
                <span class="page-intro__letter" style="--intro-index: 1; --intro-color: #4c92dc;">N</span>
                <span class="page-intro__letter" style="--intro-index: 2; --intro-color: #d3968c;">D</span>
                <span class="page-intro__letter" style="--intro-index: 3; --intro-color: #0f6576;">H</span>
                <span class="page-intro__letter" style="--intro-index: 4; --intro-color: #4c92dc;">I</span>
                <span class="page-intro__letter" style="--intro-index: 5; --intro-color: #d3968c;">K</span>
                <span class="page-intro__letter" style="--intro-index: 6; --intro-color: #0f6576;">A</span>
                <div class="page-intro__name">
                    <span class="page-intro__name-word page-intro__name-word--first">ANDHIKA</span>
                    <span class="page-intro__name-word page-intro__name-word--last">FIRJATULLAH</span>
                </div>
            </div>
        </div>

        @php
            $imagePath = static fn (string $file): string => '/images/' . rawurlencode($file);
            $techImagePath = static fn (string $file): string => '/images/tech/' . rawurlencode($file);
            $resumeUrl = $imagePath('Resume Andhika Firjatullah.pdf');
        @endphp

        @include('partials.navbar')

        <main>
            <section id="home" class="hero-band">
                @php
                    $heroSlides = [
                        [
                            'src' => $imagePath('Foto 3-trimmed.png'),
                            'alt' => 'Foto Andhika 3',
                            'scale' => 1.28,
                            'position' => 'center bottom',
                            'offsetY' => '0px',
                        ],
                        [
                            'src' => $imagePath('Foto 4-trimmed.png'),
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
                                style="color: #ffffff; background: #d3968c;"
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

                    <div
                        class="resume-modal__body pdf-canvas-viewer"
                        aria-label="Preview Resume Andhika Firjatullah"
                        data-resume-viewer
                        data-pdf-viewer
                    >
                        <p class="pdf-canvas-viewer__status" role="status" data-pdf-status>
                            Memuat dokumen...
                        </p>
                        <div class="pdf-canvas-viewer__pages" data-pdf-pages></div>
                    </div>
                </div>
            </div>

            <section id="about" class="content-section about-section">
                <div class="page-shell">
                    <div class="about-grid">
                        <h2 class="section-title section-title--side" data-reveal>Tentang Saya</h2>

                        <div class="elevated-panel about-panel" data-reveal data-reveal-delay="180">
                            <p>
                                Saya adalah seorang developer dengan ketertarikan mendalam pada bagaimana teknologi
                                web dapat digunakan untuk menciptakan solusi digital yang relevan, efisien, dan
                                berdampak. Perjalanan saya di dunia teknologi berawal dari rasa ingin tahu, yang
                                kemudian berkembang menjadi komitmen untuk terus belajar dan membangun sistem yang
                                lebih baik.
                            </p>
                            <p>
                                Saya terbiasa mengembangkan aplikasi baik di sisi front-end maupun back-end, dengan
                                fokus pada kode yang bersih, terstruktur, scalable, dan mudah dipelihara. Dalam setiap
                                proses pengembangan, saya tidak hanya berfokus pada fungsi, tetapi juga pada kualitas
                                arsitektur, pengalaman pengguna, dan keberlanjutan sistem.
                            </p>
                            <p>
                                Sebagai developer, saya percaya bahwa kemampuan teknis perlu didukung oleh pola pikir
                                analitis, ketelitian, dan kemampuan beradaptasi. Karena itu, saya terus aktif
                                mempelajari teknologi baru, mengeksplorasi framework modern, serta meningkatkan
                                pemahaman dalam pengelolaan database dan optimasi sistem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="education" class="content-section education-section">
                @php
                    $educationPhotos = [
                        ['file' => 'Andhika 1.jpg', 'alt' => 'Foto dokumentasi pendidikan Andhika 1'],
                        ['file' => 'Andhika 2.jpg', 'alt' => 'Foto dokumentasi pendidikan Andhika 2'],
                        ['file' => 'Andhika 3.jpg', 'alt' => 'Foto dokumentasi pendidikan Andhika 3'],
                        ['file' => 'Andhika 4.jpg', 'alt' => 'Foto dokumentasi pendidikan Andhika 4'],
                    ];
                @endphp

                <div class="page-shell">
                    <h2 class="education-title" data-reveal>PENDIDIKAN</h2>

                    <div class="education-grid">
                        <article class="education-panel" data-reveal data-reveal-delay="120">
                            <span class="education-badge">Pendidikan Terakhir</span>

                            <div class="education-heading">
                                <div class="education-logo">
                                    <img
                                        src="{{ $imagePath('Brawijaya.png') }}"
                                        alt="Logo Universitas Brawijaya"
                                        loading="lazy"
                                    >
                                </div>
                                <div>
                                    <h3>D3 Teknologi Informasi</h3>
                                    <p>Universitas Brawijaya</p>
                                </div>
                            </div>

                            <p class="education-copy">
                                Lulusan D3 Teknologi Informasi dengan minat pada pengembangan dan perancangan aplikasi berbasis web, serta memiliki ketertarikan dalam membangun sistem yang efisien, responsif, dan user-friendly.
                            </p>

                            <div class="education-facts" aria-label="Ringkasan pendidikan">
                                <div class="education-fact">
                                    <span>Jenjang</span>
                                    <strong>Diploma</strong>
                                </div>
                                <div class="education-fact">
                                    <span>PEMINATAN</span>
                                    <strong>Sistem Informasi</strong>
                                </div>
                                <div class="education-fact">
                                    <span>Fokus</span>
                                    <strong>Perancangan dan Pengembangan Web</strong>
                                </div>
                                <div class="education-fact">
                                    <span>IPK</span>
                                    <strong>3.86 / 4.00</strong>
                                </div>
                            </div>

                            
                        </article>

                        <div class="education-photos" data-reveal data-reveal-delay="240" data-education-stack aria-label="Dokumentasi foto Andhika">
                            @foreach ($educationPhotos as $photo)
                                <figure
                                    class="education-photo"
                                    data-education-photo
                                    role="button"
                                    tabindex="-1"
                                    aria-label="Tampilkan foto pendidikan berikutnya"
                                >
                                    <img
                                        src="{{ $imagePath($photo['file']) }}"
                                        alt="{{ $photo['alt'] }}"
                                        loading="{{ $loop->first ? 'eager' : 'lazy' }}"
                                        decoding="async"
                                        draggable="false"
                                    >
                                </figure>
                            @endforeach
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills" class="content-section band-section skills-section">
                @php
                    $skillRows = [
                        [
                            ['name' => 'Next.js', 'image' => 'nextjs.svg'],
                            ['name' => 'Laravel', 'image' => 'laravel.svg'],
                            ['name' => 'ReactJS', 'image' => 'react.svg'],
                            ['name' => 'Tailwind CSS', 'image' => 'tailwindcss.svg'],
                            ['name' => 'PostgreSQL', 'image' => 'postgresql.svg'],
                        ],
                        [
                            ['name' => 'MySQL', 'image' => 'mysql.svg'],
                            ['name' => 'TypeScript', 'image' => 'typescript.svg'],
                            ['name' => 'Figma', 'image' => 'figma.svg'],
                            ['name' => 'Git', 'image' => 'git.svg'],
                            ['name' => 'PHP', 'image' => 'php.svg'],
                        ],
                    ];
                @endphp

                <div class="page-shell">
                    <h2 class="section-title section-title--center section-title--accent" data-reveal>Keahlian Utama</h2>

                    <div class="skills-showcase" data-reveal data-reveal-delay="220" aria-label="Daftar keahlian utama">
                        @foreach ($skillRows as $skillRow)
                            <div
                                class="skills-showcase__lane{{ $loop->even ? ' skills-showcase__lane--reverse' : '' }}"
                                style="--skill-row-count: {{ count($skillRow) }};"
                                data-skills-showcase-lane
                            >
                                <div class="skills-showcase__track" data-skills-showcase-track>
                                    @for ($groupIndex = 0; $groupIndex < 2; $groupIndex++)
                                        <div class="skills-showcase__group" @if ($groupIndex === 1) aria-hidden="true" @endif>
                                            @foreach ($skillRow as $skill)
                                                <article class="skills-showcase__item">
                                                    <img
                                                        src="{{ $techImagePath($skill['image']) }}"
                                                        alt="Logo {{ $skill['name'] }}"
                                                        loading="lazy"
                                                    >
                                                    <span>{{ $skill['name'] }}</span>
                                                </article>
                                            @endforeach
                                        </div>
                                    @endfor
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </section>

            <section id="projects" class="content-section projects-section">
                <div class="page-shell">
                    <div class="title-row" data-reveal>
                        <h2 class="section-title">Proyek Unggulan</h2>
                        <span class="title-line" aria-hidden="true"></span>
                    </div>

                    <p class="project-scroll-hint" data-reveal data-reveal-delay="100">
                        Geser kanan kiri untuk melihat proyek.
                    </p>

                    <div class="project-carousel" data-reveal data-reveal-delay="180" data-project-carousel>
                        <button type="button" class="project-carousel__button project-carousel__button--prev" data-project-scroll="prev" aria-label="Lihat proyek sebelumnya">
                            <span aria-hidden="true">&#8249;</span>
                        </button>

                        <div class="project-scroller" data-project-track>
                            <div class="project-grid">
                                <article class="project-card elevated-panel">
                                    <div class="project-media project-media--showcase" data-project-pan>
                                        <img
                                            src="{{ $imagePath('K3.png') }}"
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
                                        <div class="project-stack-chip" aria-label="Framework yang digunakan: Laravel">
                                            <span class="project-stack-chip__icon" aria-hidden="true">
                                                <img src="{{ $imagePath('Laravel.png') }}" alt="" loading="lazy">
                                            </span>
                                            <span class="project-stack-chip__label">Laravel</span>
                                        </div>
                                    </div>
                                </article>

                                <article class="project-card elevated-panel">
                                    <div class="project-media project-media--showcase" data-project-pan>
                                        <img
                                            src="{{ $imagePath('Alat.png') }}"
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
                                        <div class="project-stack-chip" aria-label="Framework yang digunakan: Laravel">
                                            <span class="project-stack-chip__icon" aria-hidden="true">
                                                <img src="{{ $imagePath('Laravel.png') }}" alt="" loading="lazy">
                                            </span>
                                            <span class="project-stack-chip__label">Laravel</span>
                                        </div>
                                    </div>
                                </article>

                                <article class="project-card elevated-panel">
                                    <div class="project-media project-media--showcase" data-project-pan>
                                        <img
                                            src="{{ $imagePath('Kimia.png') }}"
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
                                        <div class="project-stack-chip" aria-label="Framework yang digunakan: Laravel">
                                            <span class="project-stack-chip__icon" aria-hidden="true">
                                                <img src="{{ $imagePath('Laravel.png') }}" alt="" loading="lazy">
                                            </span>
                                            <span class="project-stack-chip__label">Laravel</span>
                                        </div>
                                    </div>
                                </article>

                                <article class="project-card elevated-panel">
                                    <div class="project-media project-media--showcase" data-project-pan>
                                        <img
                                            src="{{ $imagePath('RW.png') }}"
                                            alt="Tampilan Sistem Informasi RW"
                                            class="project-media__image"
                                            data-project-pan-image
                                        >
                                    </div>
                                    <div class="project-body">
                                        <h3>Sistem Informasi RW</h3>
                                        <p>
                                            Sistem informasi RW yang membantu pengelolaan data warga, pencatatan layanan,
                                            dan penyampaian informasi lingkungan secara lebih tertata dan mudah diakses.
                                        </p>
                                        <div class="project-stack-chip" aria-label="Framework yang digunakan: CodeIgniter">
                                            <span class="project-stack-chip__icon" aria-hidden="true">
                                                <img src="{{ $imagePath('Codeigneter.png') }}" alt="" loading="lazy">
                                            </span>
                                            <span class="project-stack-chip__label">CodeIgniter</span>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>

                        <button type="button" class="project-carousel__button project-carousel__button--next" data-project-scroll="next" aria-label="Lihat proyek berikutnya">
                            <span aria-hidden="true">&#8250;</span>
                        </button>
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
                            'count' => 4,
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
                        [
                            'name' => 'Microsoft',
                            'label' => 'Microsoft',
                            'image' => 'Microsoft.png',
                            'url' => route('certificates.microsoft'),
                            'count' => 5,
                        ],
                        [
                            'name' => 'Digitalent',
                            'label' => 'Digital Talent Scholarship',
                            'image' => 'Digitalent.png',
                            'url' => route('certificates.digitalent'),
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
                                            src="{{ $imagePath($certificateCard['image']) }}"
                                            alt="Logo {{ $certificateCard['name'] }}"
                                        >
                                    </div>
                                    <div class="certificate-content">
                                        <div class="certificate-copy">
                                            <h3 style="color: #105666;">{{ $certificateCard['name'] }}</h3>
                                            <p>{{ $certificateCard['label'] }}</p>
                                        </div>

                                        <div class="certificate-card__meta">
                                            @if (!empty($certificateCard['count']))
                                                <span class="certificate-chip">{{ $certificateCard['count'] }} sertifikat</span>
                                            @endif

                                            @if ($hasDetailPage)
                                                <span class="certificate-action" style="color: #ffffff; background: #d3968c; border-color: #d3968c;">Lihat sertifikat</span>
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
                                            <svg viewBox="0 0 72 72" width="56" height="56" aria-hidden="true">
                                                <g fill="none" fill-rule="evenodd">
                                                    <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/>
                                                    <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z" fill="#FFF"/>
                                                </g>
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
