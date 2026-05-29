@php
    $navBaseUrl = $navBaseUrl ?? '';
    $activeSection = $activeSection ?? 'home';
    $buildSectionHref = static function (string $sectionId) use ($navBaseUrl): string {
        if (!$navBaseUrl) {
            return '#' . $sectionId;
        }

        return $navBaseUrl . '?section=' . rawurlencode($sectionId) . '#' . $sectionId;
    };
    $brandHref = $brandHref ?? $buildSectionHref('home');
    $hireHref = $hireHref ?? 'https://wa.me/6281398522929';
    $navItems = [
        ['id' => 'home', 'label' => 'Beranda'],
        ['id' => 'about', 'label' => 'Tentang'],
        ['id' => 'skills', 'label' => 'Keahlian'],
        ['id' => 'projects', 'label' => 'Proyek'],
        ['id' => 'certifications', 'label' => 'Sertifikasi'],
        ['id' => 'contact', 'label' => 'Kontak'],
    ];
@endphp

<header class="site-header">
    <div class="page-shell nav-shell">
        <div class="nav-topbar">
            <a href="{{ $brandHref }}" class="brand-mark" style="color: #105666;">Andhika Firjatullah</a>

            <button
                type="button"
                class="nav-toggle"
                data-nav-toggle
                aria-expanded="false"
                aria-controls="site-mobile-menu"
                aria-label="Buka menu navigasi"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

        <div class="nav-menu-panel" data-mobile-menu>
            <nav id="site-mobile-menu" class="main-nav" aria-label="Navigasi utama">
                @foreach ($navItems as $navItem)
                    @php
                        $navHref = $buildSectionHref($navItem['id']);
                    @endphp
                    <a href="{{ $navHref }}" @class(['is-active' => $activeSection === $navItem['id']])>{{ $navItem['label'] }}</a>
                @endforeach
            </nav>

            <a href="{{ $hireHref }}" class="hire-button" target="_blank" rel="noreferrer" aria-label="Hubungi saya melalui WhatsApp">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="hire-button__icon">
                    <path d="M19.1 4.9A9.93 9.93 0 0 0 12.05 2C6.56 2 2.1 6.46 2.1 11.95c0 1.76.46 3.48 1.33 5L2 22l5.18-1.36a9.94 9.94 0 0 0 4.76 1.21h.01c5.49 0 9.95-4.46 9.95-9.95a9.9 9.9 0 0 0-2.8-7Zm-7.15 15.27h-.01a8.28 8.28 0 0 1-4.22-1.15l-.3-.18-3.07.81.82-2.99-.2-.31a8.27 8.27 0 0 1-1.28-4.39c0-4.58 3.73-8.31 8.32-8.31a8.2 8.2 0 0 1 5.9 2.45 8.24 8.24 0 0 1 2.42 5.87c0 4.58-3.73 8.31-8.3 8.31Zm4.56-6.22c-.25-.12-1.48-.73-1.71-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.85-.88 2.06 0 1.21.9 2.38 1.02 2.54.12.17 1.75 2.67 4.23 3.74.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.05-.1-.21-.17-.46-.29Z" fill="currentColor"/>
                </svg>
                <span>HUBUNGI SAYA</span>
            </a>
        </div>
    </div>
</header>
