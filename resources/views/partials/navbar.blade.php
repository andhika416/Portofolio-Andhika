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
        ['id' => 'education', 'label' => 'Pendidikan'],
        ['id' => 'skills', 'label' => 'Keahlian'],
        ['id' => 'projects', 'label' => 'Proyek'],
        ['id' => 'certifications', 'label' => 'Sertifikasi'],
        ['id' => 'contact', 'label' => 'Kontak'],
    ];
@endphp

<header class="site-header">
    <div class="page-shell nav-shell">
        <div class="nav-topbar">
            <a href="{{ $brandHref }}" class="brand-mark">
                <span class="brand-mark__initials">AF<span class="brand-mark__dot">.</span></span>
            </a>

            <div class="nav-mobile-controls" data-mobile-nav-controls></div>

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
                    <a href="{{ $navHref }}" @class(['is-active' => $activeSection === $navItem['id']])>
                        <svg class="nav-link-icon" viewBox="0 0 24 24" aria-hidden="true">
                            @switch($navItem['id'])
                                @case('home')
                                    <path d="m3 11 9-7 9 7"></path>
                                    <path d="M5 10v10h14V10M9 20v-6h6v6"></path>
                                    @break
                                @case('about')
                                    <circle cx="12" cy="8" r="4"></circle>
                                    <path d="M4.5 21a7.5 7.5 0 0 1 15 0"></path>
                                    @break
                                @case('education')
                                    <path d="m3 10 9-5 9 5-9 5-9-5Z"></path>
                                    <path d="M7 12.5V17c2.8 2 7.2 2 10 0v-4.5M21 10v6"></path>
                                    @break
                                @case('skills')
                                    <path d="M12 3 9.8 7.5 5 8.2l3.5 3.4-.8 4.8 4.3-2.3 4.3 2.3-.8-4.8L19 8.2l-4.8-.7L12 3Z"></path>
                                    <path d="m18 17 .7 1.5 1.6.2-1.2 1.1.3 1.6-1.4-.8-1.4.8.3-1.6-1.2-1.1 1.6-.2L18 17Z"></path>
                                    @break
                                @case('projects')
                                    <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                                    <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2"></path>
                                    @break
                                @case('certifications')
                                    <circle cx="12" cy="10" r="6"></circle>
                                    <path d="m8.5 15-1 6 4.5-2 4.5 2-1-6M9.5 10.2l1.6 1.6 3.4-3.6"></path>
                                    @break
                                @case('contact')
                                    <path d="M4 5h16v12H8l-4 3V5Z"></path>
                                    <path d="M8 9h8M8 13h5"></path>
                                    @break
                            @endswitch
                        </svg>
                        <span>{{ $navItem['label'] }}</span>
                    </a>
                @endforeach
            </nav>

            <div class="nav-actions">
                <div class="theme-picker" data-theme-picker>
                    <button
                        type="button"
                        class="theme-toggle"
                        data-theme-toggle
                        aria-expanded="false"
                        aria-controls="theme-menu"
                        aria-label="Pilih tema tampilan"
                    >
                        <svg class="theme-toggle__icon theme-toggle__icon--light" viewBox="0 0 24 24" aria-hidden="true">
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"></path>
                        </svg>
                        <svg class="theme-toggle__icon theme-toggle__icon--dark" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.4 15.2A8.5 8.5 0 0 1 8.8 3.6 8.5 8.5 0 1 0 20.4 15.2Z"></path>
                        </svg>
                        <span class="theme-toggle__label" data-theme-label>Tema</span>
                        <svg class="theme-toggle__chevron" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="m6 8 4 4 4-4"></path>
                        </svg>
                    </button>

                    <div id="theme-menu" class="theme-menu" data-theme-menu role="menu" aria-label="Pilihan tema">
                        <button type="button" class="theme-option" data-theme-option="light" role="menuitemradio">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <circle cx="12" cy="12" r="4"></circle>
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.65 17.65l1.42 1.42M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.65 6.35l1.42-1.42"></path>
                            </svg>
                            <span>Terang</span>
                        </button>
                        <button type="button" class="theme-option" data-theme-option="dark" role="menuitemradio">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.4 15.2A8.5 8.5 0 0 1 8.8 3.6 8.5 8.5 0 1 0 20.4 15.2Z"></path>
                            </svg>
                            <span>Gelap</span>
                        </button>
                    </div>
                </div>

                <div class="language-picker" data-language-picker>
                    <button
                        type="button"
                        class="language-toggle"
                        data-language-toggle
                        aria-expanded="false"
                        aria-controls="language-menu"
                        aria-label="Pilih bahasa"
                    >
                        <span class="language-toggle__code" data-language-code>ID</span>
                        <svg class="language-toggle__chevron" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="m6 8 4 4 4-4"></path>
                        </svg>
                    </button>

                    <div id="language-menu" class="language-menu" data-language-menu role="menu" aria-label="Pilihan bahasa">
                        <button type="button" class="language-option" data-language-option="id" role="menuitemradio">
                            <span class="language-option__code">ID</span>
                            <span>Indonesia</span>
                        </button>
                        <button type="button" class="language-option" data-language-option="en" role="menuitemradio">
                            <span class="language-option__code">EN</span>
                            <span>English</span>
                        </button>
                    </div>
                </div>

                <a href="{{ $hireHref }}" class="hire-button" target="_blank" rel="noreferrer" aria-label="Hubungi saya melalui WhatsApp">
                    <svg viewBox="0 0 24 24" aria-hidden="true" class="hire-button__icon">
                        <path d="M19.1 4.9A9.93 9.93 0 0 0 12.05 2C6.56 2 2.1 6.46 2.1 11.95c0 1.76.46 3.48 1.33 5L2 22l5.18-1.36a9.94 9.94 0 0 0 4.76 1.21h.01c5.49 0 9.95-4.46 9.95-9.95a9.9 9.9 0 0 0-2.8-7Zm-7.15 15.27h-.01a8.28 8.28 0 0 1-4.22-1.15l-.3-.18-3.07.81.82-2.99-.2-.31a8.27 8.27 0 0 1-1.28-4.39c0-4.58 3.73-8.31 8.32-8.31a8.2 8.2 0 0 1 5.9 2.45 8.24 8.24 0 0 1 2.42 5.87c0 4.58-3.73 8.31-8.3 8.31Zm4.56-6.22c-.25-.12-1.48-.73-1.71-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.98-.15.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.69-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.85-.2-.48-.4-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.88.85-.88 2.06 0 1.21.9 2.38 1.02 2.54.12.17 1.75 2.67 4.23 3.74.59.25 1.05.4 1.41.51.59.19 1.13.16 1.55.1.47-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.05-.1-.21-.17-.46-.29Z" fill="currentColor"/>
                    </svg>
                    <span>HUBUNGI SAYA</span>
                </a>
            </div>
        </div>
    </div>
</header>
