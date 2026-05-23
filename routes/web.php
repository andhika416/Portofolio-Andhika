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
        ],
        [
            'title' => 'Introduction to Financial Literacy',
            'subtitle' => 'Sertifikat kelas Dicoding',
            'file' => 'Dicoding - Introduction to Financial Literacy.pdf',
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

Route::get('/certifications/gnik', function () {
    $documents = [
        [
            'title' => 'Adaptability',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Adaptability.pdf',
        ],
        [
            'title' => 'Design Thinking',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Design Thinking.pdf',
        ],
        [
            'title' => 'Digital Disruption & Transformation',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Digital Disruption & Transformation.pdf',
        ],
        [
            'title' => 'Digital Literacy',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Digital Literacy.pdf',
        ],
        [
            'title' => 'Emotional Intelligence',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Emotional Intelligence.pdf',
        ],
        [
            'title' => 'Emotional Resilience',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Emotional Resilience.pdf',
        ],
        [
            'title' => 'Integrity at Work',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Integrity at Work.pdf',
        ],
        [
            'title' => 'Self Efficacy',
            'subtitle' => 'Essential Skills Certificate',
            'file' => 'Essential Skills Self Efficacy.pdf',
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
