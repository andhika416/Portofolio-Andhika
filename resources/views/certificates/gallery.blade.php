<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ $pageTitle }} | {{ config('app.name', 'Portofolio Andhika') }}</title>
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
    <body class="subpage-body">
        @php
            $homeUrl = route('home');
            $certificationsUrl = route('home') . '#certifications';
            $activeDocument = $documents[$activeIndex];
            $activeDocumentUrl = url('/images/' . rawurlencode($activeDocument['file']));
        @endphp

        <header class="site-header site-header--subpage">
            <div class="page-shell subpage-nav">
                <a href="{{ $homeUrl }}" class="brand-mark">Andhika Firjatullah</a>

                <nav class="main-nav main-nav--subpage" aria-label="Navigasi halaman sertifikat">
                    <a href="{{ $homeUrl }}">Beranda</a>
                    <a href="{{ $certificationsUrl }}" class="is-active">Sertifikasi</a>
                    <a href="{{ $homeUrl }}#contact">Kontak</a>
                </nav>

                <a href="{{ $certificationsUrl }}" class="hire-button">Kembali</a>
            </div>
        </header>

        <main>
            <section class="detail-hero">
                <div class="page-shell detail-hero__grid">
                    <div class="detail-hero__copy">
                        <p class="detail-hero__eyebrow">Certification Gallery</p>
                        <h1>{{ $heroTitle }}</h1>
                        <p>{{ $heroDescription }}</p>

                        <div class="detail-hero__actions">
                            <a href="{{ $certificationsUrl }}" class="boxed-button">Kembali ke Sertifikasi</a>
                            <a
                                href="{{ $activeDocumentUrl }}"
                                target="_blank"
                                rel="noreferrer"
                                class="boxed-button boxed-button--solid"
                            >
                                Buka PDF Aktif
                            </a>
                        </div>
                    </div>

                    <aside class="detail-hero__panel elevated-panel">
                        <div class="detail-hero__logo">
                            <img src="{{ url('/images/' . rawurlencode($brandImage)) }}" alt="{{ $brandImageAlt }}">
                        </div>
                        <p class="detail-hero__count">{{ count($documents) }} Sertifikat</p>
                        <p class="detail-hero__note">{{ $brandNote }}</p>
                    </aside>
                </div>
            </section>

            <section class="content-section detail-section">
                <div class="page-shell">
                    <div class="document-explorer elevated-panel">
                        <div class="document-explorer__sidebar">
                            <div class="document-explorer__heading">
                                <p class="document-explorer__eyebrow">Daftar Sertifikat</p>
                                <h2>Pilih Dokumen</h2>
                            </div>

                            <div class="document-list" aria-label="Daftar sertifikat {{ $brandName }}">
                                @foreach ($documents as $index => $document)
                                    @php
                                        $isActiveDocument = $index === $activeIndex;
                                        $routeParameters = array_merge(request()->route()->parameters(), ['doc' => $index]);
                                    @endphp
                                    <a
                                        href="{{ route(request()->route()->getName(), $routeParameters) }}"
                                        class="document-item{{ $isActiveDocument ? ' is-active' : '' }}"
                                        @if ($isActiveDocument) aria-current="page" @endif
                                    >
                                        <span class="document-item__number">{{ str_pad((string) ($index + 1), 2, '0', STR_PAD_LEFT) }}</span>
                                        <span class="document-item__copy">
                                            <strong>{{ $document['title'] }}</strong>
                                            <small>{{ $document['subtitle'] }}</small>
                                        </span>
                                    </a>
                                @endforeach
                            </div>
                        </div>

                        <div class="document-explorer__preview">
                            <div class="document-preview__meta">
                                <div>
                                    <p class="document-preview__eyebrow">Preview Aktif</p>
                                    <h3>{{ $activeDocument['title'] }}</h3>
                                    <p data-document-preview-subtitle>{{ $activeDocument['subtitle'] }}</p>
                                </div>
                            </div>

                            <div class="document-preview__frame">
                                <iframe
                                    src="{{ $activeDocumentUrl }}#toolbar=0&navpanes=0&view=FitH"
                                    title="Preview sertifikat {{ $brandName }}"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="site-footer">
            <div class="page-shell footer-shell">
                <p class="footer-name">Andhika Firjatullah</p>
                <p class="footer-copy">&copy; 2026 Andhika Firjatullah. Halaman sertifikat {{ $brandName }}.</p>

                <nav class="footer-nav" aria-label="Tautan halaman sertifikat">
                    <a href="{{ $homeUrl }}">Beranda</a>
                    <a href="{{ $certificationsUrl }}">Sertifikasi</a>
                    <a href="{{ $homeUrl }}#contact">Kontak</a>
                </nav>
            </div>
        </footer>
    </body>
</html>
