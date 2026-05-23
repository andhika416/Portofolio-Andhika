@php
    $navBaseUrl = $navBaseUrl ?? '';
    $activeSection = $activeSection ?? 'home';
    $brandHref = $brandHref ?? ($navBaseUrl ? $navBaseUrl . '#home' : '#home');
    $hireHref = $hireHref ?? ($navBaseUrl ? $navBaseUrl . '#contact' : '#contact');
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
        <a href="{{ $brandHref }}" class="brand-mark">Andhika Firjatullah</a>

        <nav class="main-nav" aria-label="Navigasi utama">
            @foreach ($navItems as $navItem)
                @php
                    $navHref = $navBaseUrl ? $navBaseUrl . '#' . $navItem['id'] : '#' . $navItem['id'];
                @endphp
                <a href="{{ $navHref }}" @class(['is-active' => $activeSection === $navItem['id']])>{{ $navItem['label'] }}</a>
            @endforeach
        </nav>

        <a href="{{ $hireHref }}" class="hire-button">Hubungi Saya</a>
    </div>
</header>
