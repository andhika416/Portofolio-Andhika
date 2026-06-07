<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
        <title>{{ $pageTitle }} | {{ config('app.name', 'Portofolio Andhika') }}</title>
        <script>
            (() => {
                try {
                    document.documentElement.dataset.theme = localStorage.getItem('portfolio-theme') === 'dark' ? 'dark' : 'light';
                    document.documentElement.dataset.language = localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'id';
                } catch {
                    document.documentElement.dataset.theme = 'light';
                    document.documentElement.dataset.language = 'id';
                }
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
    <body class="subpage-body">
        @php
            $imagePath = static fn (string $file): string => '/images/' . rawurlencode($file);
            $homeUrl = route('home');
            $certificationsUrl = route('home') . '#certifications';
            $activeDocument = $documents[$activeIndex];
            $activeDocumentUrl = $imagePath($activeDocument['file']);
            $shouldScrollDocuments = count($documents) > 5;
            $activeDocumentRatio = $activeDocument['previewRatio'] ?? '297 / 210';
        @endphp

        @include('partials.navbar', [
            'navBaseUrl' => $homeUrl,
            'activeSection' => 'certifications',
            'brandHref' => $homeUrl . '?section=home#home',
            'hireHref' => $homeUrl . '?section=contact#contact',
        ])

        <main>
            <section class="detail-hero">
                <div class="page-shell detail-hero__grid">
                    <div class="detail-hero__copy">
                        <p class="detail-hero__eyebrow">Galeri Sertifikasi</p>
                        <h1>{{ $heroTitle }}</h1>
                        <p>{{ $heroDescription }}</p>
                    </div>

                    <div class="detail-hero__actions">
                        <a href="{{ $certificationsUrl }}" class="boxed-button">Kembali ke Sertifikasi</a>
                    </div>
                </div>
            </section>

            <section id="certificate-browser" class="content-section detail-section">
                <div class="page-shell">
                    <div class="document-explorer elevated-panel" data-document-explorer>
                        <div class="document-explorer__sidebar">
                            <div class="document-explorer__heading">
                                <p class="document-explorer__eyebrow">Daftar Sertifikat</p>
                            </div>

                            <div class="document-list{{ $shouldScrollDocuments ? '' : ' document-list--static' }}" aria-label="Daftar sertifikat {{ $brandName }}">
                                @foreach ($documents as $index => $document)
                                    @php
                                        $isActiveDocument = $index === $activeIndex;
                                        $routeParameters = array_merge(request()->route()->parameters(), ['doc' => $index]);
                                    @endphp
                                    <a
                                        href="{{ route(request()->route()->getName(), $routeParameters) }}#certificate-browser"
                                        class="document-item{{ $isActiveDocument ? ' is-active' : '' }}"
                                        data-document-item
                                        data-document-src="{{ $imagePath($document['file']) }}"
                                        data-document-ratio="{{ $document['previewRatio'] ?? '297 / 210' }}"
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
                            <div
                                class="document-preview__frame pdf-canvas-viewer"
                                style="--document-preview-ratio: {{ $activeDocumentRatio }};"
                                data-document-frame-container
                                data-pdf-viewer
                                data-pdf-src="{{ $activeDocumentUrl }}"
                            >
                                <p class="pdf-canvas-viewer__status" role="status" data-pdf-status>
                                    Memuat dokumen...
                                </p>
                                <div
                                    class="pdf-canvas-viewer__pages"
                                    aria-label="Preview sertifikat {{ $brandName }}"
                                    data-pdf-pages
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        @include('partials.footer')
    </body>
</html>
