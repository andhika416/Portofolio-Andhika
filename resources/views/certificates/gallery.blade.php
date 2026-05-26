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

        <link rel="stylesheet" href="{{ asset('build/assets/style.css') }}">
        <script type="module" src="{{ asset('build/assets/app.js') }}"></script>
    </head>
    <body class="subpage-body">
        @php
            $homeUrl = route('home');
            $certificationsUrl = route('home') . '#certifications';
            $activeDocument = $documents[$activeIndex];
            $activeDocumentUrl = url('/images/' . rawurlencode($activeDocument['file']));
            $shouldScrollDocuments = count($documents) > 5;
            $activeDocumentRatio = $activeDocument['previewRatio'] ?? '297 / 210';
            $activeDocumentFragment = $activeDocument['previewFragment'] ?? '#page=1&toolbar=0&navpanes=0&view=FitH&pagemode=none';
            $activePreviewUrl = $activeDocumentUrl
                . '?preview=' . rawurlencode((string) microtime(true))
                . $activeDocumentFragment;
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
                        <p class="detail-hero__eyebrow">Certification Gallery</p>
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
                                        data-document-src="{{ url('/images/' . rawurlencode($document['file'])) }}"
                                        data-document-ratio="{{ $document['previewRatio'] ?? '297 / 210' }}"
                                        data-document-fragment="{{ $document['previewFragment'] ?? '#page=1&toolbar=0&navpanes=0&view=FitH&pagemode=none' }}"
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
                            <div class="document-preview__frame" data-document-frame-container style="--document-preview-ratio: {{ $activeDocumentRatio }};">
                                <object
                                    data="{{ $activePreviewUrl }}"
                                    type="application/pdf"
                                    aria-label="Preview sertifikat {{ $brandName }}"
                                    data-document-frame
                                >
                                    <div class="document-preview__fallback">
                                        <p>Browser ini tidak menampilkan PDF secara langsung.</p>
                                        <a
                                            href="{{ $activeDocumentUrl }}"
                                            target="_blank"
                                            rel="noreferrer"
                                            class="boxed-button boxed-button--solid"
                                        >
                                            Lihat Sertifikat
                                        </a>
                                    </div>
                                </object>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        @include('partials.footer')
    </body>
</html>
