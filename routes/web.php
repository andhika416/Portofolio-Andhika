<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
})->name('home');

Route::get('/certifications/dicoding', function () {
    $documents = [
        [
            'title' => 'Belajar Dasar Data Science',
            'subtitle' => 'Sertifikat kelas Dicoding',
            'file' => 'Dicoding - Belajar Dasar Data Science.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Belajar Penerapan Data Science dengan Microsoft Fabric',
            'subtitle' => 'Sertifikat kelas Dicoding',
            'file' => 'Dicoding - Belajar Penerapan Data Science dengan Microsoft Fabric.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Membangun Aplikasi Gen AI dengan Microsoft Azure',
            'subtitle' => 'Sertifikat kelas Dicoding',
            'file' => 'Dicoding - Membangun Aplikasi Gen AI dengan Microsoft Azure.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Memulai Pemrograman dengan Python',
            'subtitle' => 'Sertifikat kelas Dicoding',
            'file' => 'Dicoding - Memulai Pemrograman dengan Python.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Introduction to Financial Literacy',
            'subtitle' => 'Sertifikat kelas Dicoding',
            'file' => 'Dicoding - Introduction to Financial Literacy.pdf',
            'previewRatio' => '297 / 210',
        ],
    ];

    $requestedIndex = (int) request()->query('doc', 0);
    $activeIndex = max(0, min($requestedIndex, count($documents) - 1));

    return view('certificates.gallery', [
        'pageTitle' => 'Dicoding Certificates',
        'heroTitle' => 'Sertifikat Dicoding',
        'heroDescription' => 'Halaman ini menampilkan sertifikat Dicoding dalam format preview. Pilih dokumen dari daftar, lalu tinjau PDF-nya langsung di halaman ini.',
        'brandName' => 'Dicoding',
        'brandImage' => 'dicoding.png',
        'brandImageAlt' => 'Logo Dicoding',
        'brandNote' => 'Koleksi pembelajaran dan sertifikat resmi dari Dicoding Indonesia.',
        'documents' => $documents,
        'activeIndex' => $activeIndex,
    ]);
})->name('certificates.dicoding');

Route::get('/certifications/kemnaker', function () {
    $documents = [
        [
            'title' => 'Data Science for Internet of Things',
            'subtitle' => 'Pelatihan Vokasi Nasional',
            'file' => 'Pelatihan Vokasi Nasional.pdf',
            'previewRatio' => '210 / 297',
            'previewFragment' => '#page=1&view=FitH&toolbar=0&navpanes=0&pagemode=none',
        ],
        [
            'title' => 'Petugas Penguji Lingkungan Kerja',
            'subtitle' => 'Balai K3 Surabaya',
            'file' => 'PCU.pdf',
            'previewRatio' => '210 / 297',
            'previewFragment' => '#page=1&view=FitH&toolbar=0&navpanes=0&pagemode=none',
        ],
        [
            'title' => 'Junior Pemrograman Komputer',
            'subtitle' => 'Balai K3 Surabaya',
            'file' => 'IT.pdf',
            'previewRatio' => '210 / 297',
            'previewFragment' => '#page=1&view=FitH&toolbar=0&navpanes=0&pagemode=none',
        ],
    ];

    $requestedIndex = (int) request()->query('doc', 0);
    $activeIndex = max(0, min($requestedIndex, count($documents) - 1));

    return view('certificates.gallery', [
        'pageTitle' => 'Kemnaker Certificate',
        'heroTitle' => 'Sertifikat Kemnaker',
        'heroDescription' => 'Halaman ini menampilkan sertifikat Kemnaker dalam format preview. Pilih dokumen dari daftar, lalu tinjau PDF-nya langsung di halaman ini.',
        'brandName' => 'Kemnaker',
        'brandImage' => 'Kemnaker.png',
        'brandImageAlt' => 'Logo Kemnaker',
        'brandNote' => 'Koleksi sertifikat pelatihan dari Kementerian Ketenagakerjaan RI yang tersedia pada folder images.',
        'documents' => $documents,
        'activeIndex' => $activeIndex,
    ]);
})->name('certificates.kemnaker');

Route::get('/certifications/bnsp', function () {
    $documents = [
        [
            'title' => 'Junior Web Developer',
            'subtitle' => 'Sertifikat BNSP',
            'file' => 'BNSP Junior Web Developer.pdf',
            'previewRatio' => '210 / 297',
            'previewFragment' => '#page=1&view=Fit&toolbar=0&navpanes=0&pagemode=none',
        ],
    ];

    $requestedIndex = (int) request()->query('doc', 0);
    $activeIndex = max(0, min($requestedIndex, count($documents) - 1));

    return view('certificates.gallery', [
        'pageTitle' => 'BNSP Certificate',
        'heroTitle' => 'Sertifikat BNSP',
        'heroDescription' => 'Halaman ini menampilkan sertifikat BNSP dalam format preview. Pilih dokumen dari daftar, lalu tinjau PDF-nya langsung di halaman ini.',
        'brandName' => 'BNSP',
        'brandImage' => 'BNSP.png',
        'brandImageAlt' => 'Logo BNSP',
        'brandNote' => 'Koleksi sertifikat BNSP yang tersedia pada folder images dan dapat dipreview langsung dari halaman galeri.',
        'documents' => $documents,
        'activeIndex' => $activeIndex,
    ]);
})->name('certificates.bnsp');

Route::get('/certifications/msib', function () {
    $documents = [
        [
            'title' => 'Sertifikat MSIB',
            'subtitle' => 'Magang dan Studi Independen Bersertifikat',
            'file' => 'Sertifikat MSIB.pdf',
            'previewRatio' => '297 / 210',
        ],
    ];

    $requestedIndex = (int) request()->query('doc', 0);
    $activeIndex = max(0, min($requestedIndex, count($documents) - 1));

    return view('certificates.gallery', [
        'pageTitle' => 'MSIB Certificate',
        'heroTitle' => 'Sertifikat MSIB',
        'heroDescription' => 'Halaman ini menampilkan sertifikat MSIB dalam tampilan galeri yang lebih fokus. Pilih dokumen pada panel kiri lalu tinjau PDF-nya langsung pada area preview utama.',
        'brandName' => 'MSIB',
        'brandImage' => 'MSIB.png',
        'brandImageAlt' => 'Logo MSIB',
        'brandNote' => 'Sertifikat program Magang dan Studi Independen Bersertifikat yang ditampilkan langsung dari koleksi dokumen pada folder images.',
        'documents' => $documents,
        'activeIndex' => $activeIndex,
    ]);
})->name('certificates.msib');

Route::get('/certifications/gnik', function () {
    $documents = [
        [
            'title' => 'Adaptability',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Adaptability.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Design Thinking',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Design Thinking.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Digital Disruption & Transformation',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Digital Disruption & Transformation.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Digital Literacy',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Digital Literacy.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Emotional Intelligence',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Emotional Intelligence.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Emotional Resilience',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Emotional Resilience.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Integrity at Work',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Integrity at Work.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Self Efficacy',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Self Efficacy.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Social Influence',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Social Influence.pdf',
            'previewRatio' => '297 / 210',
        ],
    ];

    $requestedIndex = (int) request()->query('doc', 0);
    $activeIndex = max(0, min($requestedIndex, count($documents) - 1));

    return view('certificates.gallery', [
        'pageTitle' => 'GNIK Essential Skills Certificates',
        'heroTitle' => 'Sertifikat Essential Skills',
        'heroDescription' => 'Koleksi sertifikat Essential Skills yang dapat dipreview langsung di halaman ini. Pilih dokumen dari daftar untuk melihat PDF aktif.',
        'brandName' => 'GNIK',
        'brandImage' => 'GNIK.jpg',
        'brandImageAlt' => 'Logo GNIK',
        'brandNote' => 'Kumpulan sertifikat Essential Skills dari program GNIK dan pembelajaran pengembangan kompetensi.',
        'documents' => $documents,
        'activeIndex' => $activeIndex,
    ]);
})->name('certificates.gnik');

Route::get('/certifications/cisco', function () {
    $documents = [
        [
            'title' => 'Introduction to Data Science',
            'subtitle' => 'Cisco Certificate',
            'file' => 'Cisco - Intro Data Science.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Introduction to Cybersecurity',
            'subtitle' => 'Cisco Certificate',
            'file' => 'Cisco - Introduction to Cybersecurity.pdf',
            'previewRatio' => '297 / 210',
        ],
    ];

    $requestedIndex = (int) request()->query('doc', 0);
    $activeIndex = max(0, min($requestedIndex, count($documents) - 1));

    return view('certificates.gallery', [
        'pageTitle' => 'Cisco Certificates',
        'heroTitle' => 'Sertifikat Cisco',
        'heroDescription' => 'Koleksi sertifikat Cisco yang dapat dipreview langsung di halaman ini. Pilih dokumen dari daftar untuk melihat PDF aktif tanpa keluar dari halaman.',
        'brandName' => 'Cisco',
        'brandImage' => 'Cisco.png',
        'brandImageAlt' => 'Logo Cisco',
        'brandNote' => 'Kumpulan sertifikat pembelajaran Cisco Networking Academy yang berfokus pada data science dan cybersecurity.',
        'documents' => $documents,
        'activeIndex' => $activeIndex,
    ]);
})->name('certificates.cisco');

Route::get('/certifications/microsoft', function () {
    $documents = [
        [
            'title' => 'Microsoft Office Dekstop Application',
            'subtitle' => 'Microsoft Certificate',
            'file' => 'Microsoft Office Dekstop Application.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Microsoft Power BI Data Analyst',
            'subtitle' => 'Microsoft Certificate',
            'file' => 'Microsoft Power BI Data Analyst.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Microsoft Azure Data Fundamentals',
            'subtitle' => 'Microsoft Certificate',
            'file' => 'Microsoft Azure Data Fundamentals.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Microsoft Azure AI Fundamentals',
            'subtitle' => 'Microsoft Certificate',
            'file' => 'Microsoft Azure AI Fundamentals.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Designing and Implementing a Microsoft',
            'subtitle' => 'Microsoft Certificate',
            'file' => 'Designing and Implementing a Microsoft.pdf',
            'previewRatio' => '297 / 210',
        ],
    ];

    $requestedIndex = (int) request()->query('doc', 0);
    $activeIndex = max(0, min($requestedIndex, count($documents) - 1));

    return view('certificates.gallery', [
        'pageTitle' => 'Microsoft Certificates',
        'heroTitle' => 'Sertifikat Microsoft',
        'heroDescription' => 'Koleksi sertifikat Microsoft yang dapat dipreview langsung di halaman ini. Pilih dokumen dari daftar untuk melihat PDF aktif tanpa keluar dari halaman.',
        'brandName' => 'Microsoft',
        'brandImage' => 'Microsoft.png',
        'brandImageAlt' => 'Logo Microsoft',
        'brandNote' => 'Kumpulan sertifikat pembelajaran dan kompetensi Microsoft yang tersedia pada folder images.',
        'documents' => $documents,
        'activeIndex' => $activeIndex,
    ]);
})->name('certificates.microsoft');

Route::get('/certifications/digitalent', function () {
    $documents = [
        [
            'title' => 'Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor',
            'subtitle' => 'Digitalent Certificate',
            'file' => 'Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor.pdf',
            'previewRatio' => '297 / 210',
        ],
        [
            'title' => 'Introduction To Cloud Computing',
            'subtitle' => 'Digitalent Certificate',
            'file' => 'Introduction To Cloud Computing.pdf',
            'previewRatio' => '297 / 210',
        ],
    ];

    $requestedIndex = (int) request()->query('doc', 0);
    $activeIndex = max(0, min($requestedIndex, count($documents) - 1));

    return view('certificates.gallery', [
        'pageTitle' => 'Digitalent Certificates',
        'heroTitle' => 'Sertifikat Digitalent',
        'heroDescription' => 'Koleksi sertifikat Digitalent yang dapat dipreview langsung di halaman ini. Pilih dokumen dari daftar untuk melihat PDF aktif tanpa keluar dari halaman.',
        'brandName' => 'Digitalent',
        'brandImage' => 'Digitalent.png',
        'brandImageAlt' => 'Logo Digitalent',
        'brandNote' => 'Kumpulan sertifikat pelatihan Digitalent yang tersedia pada folder images.',
        'documents' => $documents,
        'activeIndex' => $activeIndex,
    ]);
})->name('certificates.digitalent');
