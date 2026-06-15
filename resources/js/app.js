const translationsEn = new Map(Object.entries({
    'Beranda': 'Home',
    'Tentang': 'About',
    'Pendidikan': 'Education',
    'PENDIDIKAN': 'EDUCATION',
    'Keahlian': 'Skills',
    'Proyek': 'Projects',
    'Sertifikasi': 'Certifications',
    'Kontak': 'Contact',
    'KONTAK': 'CONTACT',
    'HUBUNGI SAYA': 'CONTACT ME',
    'Tema': 'Theme',
    'Terang': 'Light',
    'Gelap': 'Dark',
    'Pilih tema tampilan': 'Choose display theme',
    'Pilihan tema': 'Theme options',
    'Pilih bahasa': 'Choose language',
    'Pilihan bahasa': 'Language options',
    'Navigasi utama': 'Main navigation',
    'Buka menu navigasi': 'Open navigation menu',
    'Tutup menu navigasi': 'Close navigation menu',
    'Hubungi saya melalui WhatsApp': 'Contact me via WhatsApp',
    'Seorang Web Developer yang berdedikasi dan berfokus pada pembangunan aplikasi web yang tangguh, cepat, serta mampu menyatukan fungsionalitas dan estetika.': 'A dedicated Web Developer focused on building robust, fast web applications that combine functionality with aesthetics.',
    'Lihat Proyek': 'View Projects',
    'Lihat CV': 'View Resume',
    'Tutup preview CV': 'Close resume preview',
    'Tentang Saya': 'About Me',
    'Saya adalah seorang developer dengan ketertarikan mendalam pada bagaimana teknologi web dapat digunakan untuk menciptakan solusi digital yang relevan, efisien, dan berdampak. Perjalanan saya di dunia teknologi berawal dari rasa ingin tahu, yang kemudian berkembang menjadi komitmen untuk terus belajar dan membangun sistem yang lebih baik.': 'I am a developer with a strong interest in how web technology can create relevant, efficient, and impactful digital solutions. My journey in technology began with curiosity and grew into a commitment to continuous learning and building better systems.',
    'Saya terbiasa mengembangkan aplikasi baik di sisi front-end maupun back-end, dengan fokus pada kode yang bersih, terstruktur, scalable, dan mudah dipelihara. Dalam setiap proses pengembangan, saya tidak hanya berfokus pada fungsi, tetapi juga pada kualitas arsitektur, pengalaman pengguna, dan keberlanjutan sistem.': 'I develop both front-end and back-end applications with a focus on clean, structured, scalable, and maintainable code. In every development process, I consider not only functionality but also architecture quality, user experience, and long-term system sustainability.',
    'Sebagai developer, saya percaya bahwa kemampuan teknis perlu didukung oleh pola pikir analitis, ketelitian, dan kemampuan beradaptasi. Karena itu, saya terus aktif mempelajari teknologi baru, mengeksplorasi framework modern, serta meningkatkan pemahaman dalam pengelolaan database dan optimasi sistem.': 'As a developer, I believe technical skills should be supported by analytical thinking, attention to detail, and adaptability. I continuously learn new technologies, explore modern frameworks, and deepen my knowledge of database management and system optimization.',
    'Pendidikan Terakhir': 'Latest Education',
    'D3 Teknologi Informasi': 'Associate Degree in Information Technology',
    'Lulusan D3 Teknologi Informasi dengan minat pada pengembangan dan perancangan aplikasi berbasis web, serta memiliki ketertarikan dalam membangun sistem yang efisien, responsif, dan user-friendly.': 'An Information Technology associate degree graduate interested in web application development and design, with a focus on building efficient, responsive, and user-friendly systems.',
    'Ringkasan pendidikan': 'Education summary',
    'Jenjang': 'Degree',
    'PEMINATAN': 'CONCENTRATION',
    'Sistem Informasi': 'Information Systems',
    'Fokus': 'Focus',
    'Perancangan dan Pengembangan Web': 'Web Design and Development',
    'IPK': 'GPA',
    'Dokumentasi foto Andhika': 'Andhika photo documentation',
    'Keahlian Utama': 'Core Skills',
    'Daftar keahlian utama': 'Core skills list',
    'Proyek Unggulan': 'Featured Projects',
    'Geser kanan kiri untuk melihat proyek.': 'Swipe left or right to view projects.',
    'Lihat proyek sebelumnya': 'View previous project',
    'Lihat proyek berikutnya': 'View next project',
    'Website Pelayanan K3': 'Occupational Safety Service Website',
    'Website layanan K3 yang memudahkan pengelolaan informasi, pengajuan kebutuhan, dan penyampaian layanan keselamatan serta kesehatan kerja secara lebih terstruktur.': 'An occupational safety service website that streamlines information management, service requests, and the delivery of workplace safety and health services.',
    'Inventarisasi Alat K3': 'Safety Equipment Inventory',
    'Sistem inventarisasi alat K3 yang membantu pencatatan, pemantauan ketersediaan, dan pengelolaan data peralatan keselamatan kerja secara lebih rapi dan efisien.': 'A safety equipment inventory system for recording assets, monitoring availability, and managing workplace safety equipment data efficiently.',
    'Inventarisasi Bahan Kimia': 'Chemical Inventory',
    'Sistem inventarisasi bahan kimia yang membantu pencatatan stok, pemantauan data bahan, dan pengelolaan informasi penggunaan secara lebih aman dan terorganisir.': 'A chemical inventory system for tracking stock, monitoring material data, and managing usage information safely and systematically.',
    'Sistem Informasi RW': 'Community Information System',
    'Sistem informasi RW yang membantu pengelolaan data warga, pencatatan layanan, dan penyampaian informasi lingkungan secara lebih tertata dan mudah diakses.': 'A community information system that organizes resident data, service records, and neighborhood information for easier access.',
    'Kementerian Ketenagakerjaan RI': 'Ministry of Manpower of the Republic of Indonesia',
    'Badan Nasional Sertifikasi Profesi': 'National Professional Certification Agency',
    'Magang dan Studi Independen Bersertifikat': 'Certified Internship and Independent Study',
    'GERAKAN NASIONAL INDONESIA KOMPETEN': 'INDONESIA COMPETENT NATIONAL MOVEMENT',
    'Lihat sertifikat': 'View certificates',
    'Siap berkolaborasi untuk proyek berikutnya? Langsung hubungi saja.': 'Ready to collaborate on your next project? Get in touch.',
    'Daftar kontak dan sosial media': 'Contact and social media list',
    'Galeri Sertifikasi': 'Certification Gallery',
    'Kembali ke Sertifikasi': 'Back to Certifications',
    'Daftar Sertifikat': 'Certificate List',
    'Browser ini tidak menampilkan PDF secara langsung.': 'This browser cannot display the PDF directly.',
    'Lihat Sertifikat': 'View Certificate',
    'Halaman ini menampilkan sertifikat Dicoding dalam format preview. Pilih dokumen dari daftar, lalu tinjau PDF-nya langsung di halaman ini.': 'This page displays Dicoding certificates in preview format. Select a document from the list to review its PDF directly on this page.',
    'Halaman ini menampilkan sertifikat Kemnaker dalam format preview. Pilih dokumen dari daftar, lalu tinjau PDF-nya langsung di halaman ini.': 'This page displays Kemnaker certificates in preview format. Select a document from the list to review its PDF directly on this page.',
    'Halaman ini menampilkan sertifikat BNSP dalam format preview. Pilih dokumen dari daftar, lalu tinjau PDF-nya langsung di halaman ini.': 'This page displays BNSP certificates in preview format. Select a document from the list to review its PDF directly on this page.',
    'Halaman ini menampilkan sertifikat MSIB dalam tampilan galeri yang lebih fokus. Pilih dokumen pada panel kiri lalu tinjau PDF-nya langsung pada area preview utama.': 'This page presents MSIB certificates in a focused gallery. Select a document from the left panel to review its PDF in the main preview area.',
    'Koleksi sertifikat Essential Skills yang dapat dipreview langsung di halaman ini. Pilih dokumen dari daftar untuk melihat PDF aktif.': 'A collection of Essential Skills certificates available for direct preview. Select a document from the list to view the active PDF.',
    'Koleksi sertifikat Cisco yang dapat dipreview langsung di halaman ini. Pilih dokumen dari daftar untuk melihat PDF aktif tanpa keluar dari halaman.': 'A collection of Cisco certificates available for direct preview. Select a document from the list to view the active PDF without leaving the page.',
    'Koleksi sertifikat Microsoft yang dapat dipreview langsung di halaman ini. Pilih dokumen dari daftar untuk melihat PDF aktif tanpa keluar dari halaman.': 'A collection of Microsoft certificates available for direct preview. Select a document from the list to view the active PDF without leaving the page.',
    'Koleksi sertifikat Digitalent yang dapat dipreview langsung di halaman ini. Pilih dokumen dari daftar untuk melihat PDF aktif tanpa keluar dari halaman.': 'A collection of Digitalent certificates available for direct preview. Select a document from the list to view the active PDF without leaving the page.',
    'Sertifikat Dicoding': 'Dicoding Certificates',
    'Sertifikat Kemnaker': 'Kemnaker Certificates',
    'Sertifikat MSIB': 'MSIB Certificates',
    'Sertifikat Essential Skills': 'Essential Skills Certificates',
    'Sertifikat Cisco': 'Cisco Certificates',
    'Sertifikat Microsoft': 'Microsoft Certificates',
    'Sertifikat Digitalent': 'Digitalent Certificates',
    'Sertifikat kelas Dicoding': 'Dicoding Course Certificate',
    'Program Pemagangan Nasional': 'National Apprenticeship Program',
    'Pelatihan Vokasi Nasional': 'National Vocational Training',
    'Petugas Penguji Lingkungan Kerja': 'Workplace Environment Testing Officer',
    'Junior Pemrograman Komputer': 'Junior Computer Programmer',
    'Sertifikat BNSP': 'BNSP Certificate',
    'Belajar Dasar Data Science': 'Data Science Fundamentals',
    'Belajar Penerapan Data Science dengan Microsoft Fabric': 'Applying Data Science with Microsoft Fabric',
    'Membangun Aplikasi Gen AI dengan Microsoft Azure': 'Building Gen AI Applications with Microsoft Azure',
    'Memulai Pemrograman dengan Python': 'Getting Started with Python Programming',
    'Pengenalan Data Science dan Pemanfaatannya di Berbagai Sektor': 'Introduction to Data Science and Its Applications Across Sectors',
}));

const translateInterfaceValue = (value, language) => {
    if (language !== 'en') {
        return value;
    }

    const normalized = value.replace(/\s+/g, ' ').trim();

    if (!normalized) {
        return value;
    }

    if (translationsEn.has(normalized)) {
        return translationsEn.get(normalized);
    }

    const certificateCount = normalized.match(/^(\d+) sertifikat$/i);

    if (certificateCount) {
        const count = Number(certificateCount[1]);
        return `${count} certificate${count === 1 ? '' : 's'}`;
    }

    const certificateList = normalized.match(/^Daftar sertifikat (.+)$/i);

    if (certificateList) {
        return `${certificateList[1]} certificate list`;
    }

    const certificatePreview = normalized.match(/^Preview sertifikat (.+)$/i);

    if (certificatePreview) {
        return `${certificatePreview[1]} certificate preview`;
    }

    const frameworkLabel = normalized.match(/^Framework yang digunakan: (.+)$/i);

    if (frameworkLabel) {
        return `Framework used: ${frameworkLabel[1]}`;
    }

    const logoLabel = normalized.match(/^Logo (.+)$/i);

    if (logoLabel) {
        return `${logoLabel[1]} logo`;
    }

    const displayLabel = normalized.match(/^Tampilan (.+)$/i);

    if (displayLabel) {
        return `${displayLabel[1]} preview`;
    }

    const photoLabel = normalized.match(/^Foto (.+)$/i);

    if (photoLabel) {
        return `${photoLabel[1]} photo`;
    }

    return value;
};

const initLanguagePicker = () => {
    const root = document.documentElement;
    const picker = document.querySelector('[data-language-picker]');
    const toggle = document.querySelector('[data-language-toggle]');
    const menu = document.querySelector('[data-language-menu]');
    const code = document.querySelector('[data-language-code]');
    const options = Array.from(document.querySelectorAll('[data-language-option]'));
    const textOriginals = new WeakMap();
    const attributeOriginals = new WeakMap();
    const translatedAttributes = ['aria-label', 'title', 'alt', 'placeholder'];
    const originalDocumentTitle = document.title;

    if (!picker || !toggle || !menu || options.length === 0) {
        return;
    }

    const closeMenu = () => {
        picker.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    const translateTextNodes = (language) => {
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
            acceptNode: (node) => {
                const parentTag = node.parentElement?.tagName;
                const hasText = node.nodeValue?.trim();

                if (!hasText || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parentTag)) {
                    return NodeFilter.FILTER_REJECT;
                }

                return NodeFilter.FILTER_ACCEPT;
            },
        });

        let node = walker.nextNode();

        while (node) {
            if (!textOriginals.has(node)) {
                textOriginals.set(node, node.nodeValue);
            }

            const original = textOriginals.get(node);

            if (language === 'id') {
                node.nodeValue = original;
            } else {
                const leadingWhitespace = original.match(/^\s*/)?.[0] || '';
                const trailingWhitespace = original.match(/\s*$/)?.[0] || '';
                const translated = translateInterfaceValue(original, language);
                node.nodeValue = translated === original
                    ? original
                    : `${leadingWhitespace}${translated}${trailingWhitespace}`;
            }

            node = walker.nextNode();
        }
    };

    const translateAttributes = (language) => {
        document.querySelectorAll(translatedAttributes.map((attribute) => `[${attribute}]`).join(',')).forEach((element) => {
            if (!attributeOriginals.has(element)) {
                attributeOriginals.set(element, {});
            }

            const originals = attributeOriginals.get(element);

            translatedAttributes.forEach((attribute) => {
                if (!element.hasAttribute(attribute)) {
                    return;
                }

                if (!(attribute in originals)) {
                    originals[attribute] = element.getAttribute(attribute);
                }

                const original = originals[attribute];
                element.setAttribute(attribute, language === 'id' ? original : translateInterfaceValue(original, language));
            });
        });
    };

    const applyLanguage = (language) => {
        const selectedLanguage = language === 'en' ? 'en' : 'id';

        root.dataset.language = selectedLanguage;
        root.lang = selectedLanguage;
        translateTextNodes(selectedLanguage);
        translateAttributes(selectedLanguage);

        if (code) {
            code.textContent = selectedLanguage === 'en' ? 'EN' : 'ID';
        }

        toggle.setAttribute('aria-label', selectedLanguage === 'en' ? 'Choose language' : 'Pilih bahasa');

        options.forEach((option) => {
            const isActive = option.dataset.languageOption === selectedLanguage;
            option.classList.toggle('is-active', isActive);
            option.setAttribute('aria-checked', String(isActive));
        });

        const themeToggle = document.querySelector('[data-theme-toggle]');
        const themeLabel = document.querySelector('[data-theme-label]');
        const selectedTheme = root.dataset.theme === 'dark' ? 'dark' : 'light';
        const themeName = selectedTheme === 'dark'
            ? (selectedLanguage === 'en' ? 'Dark' : 'Gelap')
            : (selectedLanguage === 'en' ? 'Light' : 'Terang');

        if (themeLabel) {
            themeLabel.textContent = themeName;
        }

        if (themeToggle) {
            themeToggle.setAttribute(
                'aria-label',
                selectedLanguage === 'en'
                    ? `${themeName} theme. Choose display theme`
                    : `Tema ${themeName.toLowerCase()}. Pilih tema tampilan`,
            );
        }

        document.title = selectedLanguage === 'en'
            ? originalDocumentTitle
                .split(' | ')
                .map((part) => translateInterfaceValue(part, selectedLanguage))
                .join(' | ')
            : originalDocumentTitle;

        try {
            window.localStorage.setItem('portfolio-language', selectedLanguage);
        } catch {
            // The selected language still applies for the current page.
        }
    };

    toggle.addEventListener('click', () => {
        const willOpen = !picker.classList.contains('is-open');
        document.querySelector('[data-theme-picker]')?.classList.remove('is-open');
        document.querySelector('[data-theme-toggle]')?.setAttribute('aria-expanded', 'false');
        picker.classList.toggle('is-open', willOpen);
        toggle.setAttribute('aria-expanded', String(willOpen));

        if (willOpen) {
            options.find((option) => option.classList.contains('is-active'))?.focus();
        }
    });

    options.forEach((option) => {
        option.addEventListener('click', () => {
            applyLanguage(option.dataset.languageOption);
            closeMenu();
            toggle.focus();
        });
    });

    document.addEventListener('click', (event) => {
        if (!picker.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && picker.classList.contains('is-open')) {
            closeMenu();
            toggle.focus();
        }
    });

    applyLanguage(root.dataset.language);
};

const initThemePicker = () => {
    const root = document.documentElement;
    const picker = document.querySelector('[data-theme-picker]');
    const toggle = document.querySelector('[data-theme-toggle]');
    const menu = document.querySelector('[data-theme-menu]');
    const label = document.querySelector('[data-theme-label]');
    const options = Array.from(document.querySelectorAll('[data-theme-option]'));

    if (!picker || !toggle || !menu || options.length === 0) {
        return;
    }

    const closeMenu = () => {
        picker.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    const applyTheme = (theme) => {
        const selectedTheme = theme === 'dark' ? 'dark' : 'light';

        root.dataset.theme = selectedTheme;
        root.style.colorScheme = selectedTheme;
        const isEnglish = root.dataset.language === 'en';
        const themeName = selectedTheme === 'dark'
            ? (isEnglish ? 'Dark' : 'Gelap')
            : (isEnglish ? 'Light' : 'Terang');

        toggle.setAttribute(
            'aria-label',
            isEnglish
                ? `${themeName} theme. Choose display theme`
                : `Tema ${themeName.toLowerCase()}. Pilih tema tampilan`,
        );

        if (label) {
            label.textContent = themeName;
        }

        options.forEach((option) => {
            const isActive = option.dataset.themeOption === selectedTheme;
            option.classList.toggle('is-active', isActive);
            option.setAttribute('aria-checked', String(isActive));
        });

        try {
            window.localStorage.setItem('portfolio-theme', selectedTheme);
        } catch {
            // The selected theme still applies for the current page.
        }
    };

    toggle.addEventListener('click', () => {
        const willOpen = !picker.classList.contains('is-open');
        document.querySelector('[data-language-picker]')?.classList.remove('is-open');
        document.querySelector('[data-language-toggle]')?.setAttribute('aria-expanded', 'false');
        picker.classList.toggle('is-open', willOpen);
        toggle.setAttribute('aria-expanded', String(willOpen));

        if (willOpen) {
            options.find((option) => option.classList.contains('is-active'))?.focus();
        }
    });

    options.forEach((option) => {
        option.addEventListener('click', () => {
            applyTheme(option.dataset.themeOption);
            closeMenu();
            toggle.focus();
        });
    });

    document.addEventListener('click', (event) => {
        if (!picker.contains(event.target)) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && picker.classList.contains('is-open')) {
            closeMenu();
            toggle.focus();
        }
    });

    applyTheme(root.dataset.theme);
};

const initSectionNavigation = () => {
    const root = document.documentElement;
    const header = document.querySelector('.site-header');
    const navLinks = Array.from(document.querySelectorAll('.main-nav a[href^="#"]'));
    const controlledLinks = Array.from(document.querySelectorAll('a[href^="#"]:not([href="#"])'));
    const sections = navLinks
        .map((link) => document.querySelector(link.getAttribute('href')))
        .filter(Boolean);

    if (!header || sections.length === 0 || controlledLinks.length === 0) {
        return;
    }

    const revealSectionContent = (section) => {
        if (!section) {
            return;
        }

        section.querySelectorAll('[data-reveal]').forEach((item) => {
            item.classList.add('is-revealed');
        });
    };

    const syncAnchorOffsets = () => {
        const headerHeight = Math.round(header.getBoundingClientRect().height);
        const headerPosition = window.getComputedStyle(header).position;
        const hasOverlayHeader = headerPosition === 'sticky' || headerPosition === 'fixed';
        const topOffset = hasOverlayHeader ? headerHeight : 0;

        root.style.setProperty('--anchor-offset-top', `${topOffset}px`);
        root.style.setProperty('--anchor-offset-bottom', '24px');

        return { topOffset };
    };

    const setActiveLink = (activeId) => {
        navLinks.forEach((link) => {
            const isActive = link.getAttribute('href') === `#${activeId}`;
            link.classList.toggle('is-active', isActive);
        });
    };

    const updateActiveSection = () => {
        const { topOffset } = syncAnchorOffsets();
        const probeLine = window.scrollY + topOffset + Math.min(window.innerHeight * 0.18, 140);
        let activeSection = sections[0];

        for (const section of sections) {
            if (section.offsetTop <= probeLine) {
                activeSection = section;
            }
        }

        if (activeSection) {
            setActiveLink(activeSection.id);
        }
    };

    const scrollToHash = (hash, shouldUpdateUrl = true) => {
        const target = document.querySelector(hash);

        if (!target) {
            return;
        }

        const { topOffset } = syncAnchorOffsets();
        const targetTop = window.scrollY + target.getBoundingClientRect().top - topOffset;

        window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: 'smooth',
        });

        if (shouldUpdateUrl) {
            window.history.replaceState(null, '', hash);
        }

        setActiveLink(target.id);
        revealSectionContent(target);
    };

    controlledLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const hash = link.getAttribute('href');

            if (!hash || !hash.startsWith('#')) {
                return;
            }

            const target = document.querySelector(hash);

            if (!target) {
                return;
            }

            event.preventDefault();
            scrollToHash(hash);
        });
    });

    let scrollTicking = false;

    const handleScroll = () => {
        if (scrollTicking) {
            return;
        }

        scrollTicking = true;

        window.requestAnimationFrame(() => {
            updateActiveSection();
            scrollTicking = false;
        });
    };

    syncAnchorOffsets();
    updateActiveSection();

    const initialSection = new URLSearchParams(window.location.search).get('section');

    if (initialSection) {
        window.requestAnimationFrame(() => {
            scrollToHash(`#${initialSection}`);
        });
    } else if (window.location.hash) {
        window.requestAnimationFrame(() => {
            scrollToHash(window.location.hash, false);
        });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
        syncAnchorOffsets();
        updateActiveSection();
    });
};

const initMobileNavigation = () => {
    const navShell = document.querySelector('.nav-shell');
    const toggleButton = document.querySelector('[data-nav-toggle]');
    const mobileMenu = document.querySelector('[data-mobile-menu]');
    const mobileControls = document.querySelector('[data-mobile-nav-controls]');
    const navActions = navShell?.querySelector('.nav-actions');
    const themePicker = navShell?.querySelector('[data-theme-picker]');
    const languagePicker = navShell?.querySelector('[data-language-picker]');
    const hireButton = navActions?.querySelector('.hire-button');

    if (
        !navShell
        || !toggleButton
        || !mobileMenu
        || !mobileControls
        || !navActions
        || !themePicker
        || !languagePicker
        || !hireButton
    ) {
        return;
    }

    const mobileQuery = window.matchMedia('(max-width: 760px)');
    const menuLinks = Array.from(navShell.querySelectorAll('.main-nav a, .hire-button'));

    const closeMenu = () => {
        const isEnglish = document.documentElement.dataset.language === 'en';
        navShell.classList.remove('is-open');
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.setAttribute('aria-label', isEnglish ? 'Open navigation menu' : 'Buka menu navigasi');
    };

    const openMenu = () => {
        const isEnglish = document.documentElement.dataset.language === 'en';
        navShell.classList.add('is-open');
        toggleButton.setAttribute('aria-expanded', 'true');
        toggleButton.setAttribute('aria-label', isEnglish ? 'Close navigation menu' : 'Tutup menu navigasi');
    };

    toggleButton.addEventListener('click', () => {
        if (navShell.classList.contains('is-open')) {
            closeMenu();
            return;
        }

        openMenu();
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (mobileQuery.matches) {
                closeMenu();
            }
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navShell.classList.contains('is-open')) {
            closeMenu();
        }
    });

    const syncMenuState = () => {
        themePicker.classList.remove('is-open');
        languagePicker.classList.remove('is-open');
        themePicker.querySelector('[data-theme-toggle]')?.setAttribute('aria-expanded', 'false');
        languagePicker.querySelector('[data-language-toggle]')?.setAttribute('aria-expanded', 'false');

        if (mobileQuery.matches) {
            mobileControls.append(themePicker, languagePicker);
            return;
        }

        navActions.insertBefore(themePicker, hireButton);
        navActions.insertBefore(languagePicker, hireButton);
        closeMenu();
    };

    if (typeof mobileQuery.addEventListener === 'function') {
        mobileQuery.addEventListener('change', syncMenuState);
    } else if (typeof mobileQuery.addListener === 'function') {
        mobileQuery.addListener(syncMenuState);
    }

    syncMenuState();
};

let pdfJsLibraryPromise;

const loadPdfJsLibrary = () => {
    if (!pdfJsLibraryPromise) {
        pdfJsLibraryPromise = Promise.all([
            import('pdfjs-dist/build/pdf.mjs'),
            import('pdfjs-dist/build/pdf.worker.min.mjs?url'),
        ]).then(([pdfjs, workerModule]) => {
            pdfjs.GlobalWorkerOptions.workerSrc = workerModule.default;
            return pdfjs;
        });
    }

    return pdfJsLibraryPromise;
};

const getPdfStatusText = (status) => {
    const isEnglish = document.documentElement.dataset.language === 'en';
    const messages = {
        loading: isEnglish ? 'Loading document...' : 'Memuat dokumen...',
        error: isEnglish
            ? 'The document cannot be displayed. Please try again later.'
            : 'Dokumen tidak dapat ditampilkan. Silakan coba lagi nanti.',
    };

    return messages[status] || '';
};

const createPdfCanvasViewer = (root) => {
    const pagesContainer = root?.querySelector('[data-pdf-pages]');
    const statusElement = root?.querySelector('[data-pdf-status]');

    if (!root || !pagesContainer || !statusElement) {
        return null;
    }

    root.addEventListener('contextmenu', (event) => event.preventDefault());
    root.addEventListener('dragstart', (event) => event.preventDefault());

    let currentSource = '';
    let renderedWidth = 0;
    let renderSequence = 0;
    let loadingTask = null;
    let pdfDocument = null;
    let activeRenderTask = null;
    let resizeTimer = null;

    const setStatus = (status) => {
        root.classList.toggle('is-loading', status === 'loading');
        root.classList.toggle('has-error', status === 'error');
        root.classList.toggle('is-ready', status === 'ready');
        statusElement.hidden = status === 'ready';
        statusElement.textContent = getPdfStatusText(status);
    };

    const cancelCurrentRender = () => {
        renderSequence += 1;
        activeRenderTask?.cancel();
        activeRenderTask = null;
        loadingTask?.destroy();
        loadingTask = null;
        pdfDocument?.destroy();
        pdfDocument = null;
    };

    const render = async (source) => {
        const availableWidth = Math.floor(pagesContainer.clientWidth || root.clientWidth);

        if (!source || availableWidth < 80) {
            return;
        }

        if (
            source === currentSource
            && root.classList.contains('is-ready')
            && Math.abs(availableWidth - renderedWidth) < 20
        ) {
            return;
        }

        cancelCurrentRender();
        const sequence = renderSequence;
        currentSource = source;
        renderedWidth = availableWidth;
        pagesContainer.replaceChildren();
        setStatus('loading');

        try {
            const pdfjs = await loadPdfJsLibrary();

            if (sequence !== renderSequence) {
                return;
            }

            loadingTask = pdfjs.getDocument({ url: source });
            pdfDocument = await loadingTask.promise;
            loadingTask = null;

            for (let pageNumber = 1; pageNumber <= pdfDocument.numPages; pageNumber += 1) {
                if (sequence !== renderSequence) {
                    return;
                }

                const page = await pdfDocument.getPage(pageNumber);
                const baseViewport = page.getViewport({ scale: 1 });
                const displayScale = Math.max(0.1, availableWidth / baseViewport.width);
                const outputScale = Math.min(window.devicePixelRatio || 1, 2);
                const displayViewport = page.getViewport({ scale: displayScale });
                const renderViewport = page.getViewport({ scale: displayScale * outputScale });
                const pageElement = document.createElement('div');
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d', { alpha: false });

                if (!context) {
                    throw new Error('Canvas is not supported by this browser.');
                }

                pageElement.className = 'pdf-canvas-viewer__page';
                canvas.width = Math.ceil(renderViewport.width);
                canvas.height = Math.ceil(renderViewport.height);
                canvas.style.width = `${Math.floor(displayViewport.width)}px`;
                canvas.style.height = `${Math.floor(displayViewport.height)}px`;
                canvas.setAttribute(
                    'aria-label',
                    document.documentElement.dataset.language === 'en'
                        ? `Page ${pageNumber} of ${pdfDocument.numPages}`
                        : `Halaman ${pageNumber} dari ${pdfDocument.numPages}`,
                );
                pageElement.append(canvas);
                pagesContainer.append(pageElement);

                activeRenderTask = page.render({
                    canvasContext: context,
                    viewport: renderViewport,
                });
                await activeRenderTask.promise;
                activeRenderTask = null;
                page.cleanup();
            }

            if (sequence === renderSequence) {
                setStatus('ready');
            }
        } catch (error) {
            if (sequence !== renderSequence || error?.name === 'RenderingCancelledException') {
                return;
            }

            console.error('PDF preview failed to render.', error);
            pagesContainer.replaceChildren();
            setStatus('error');
        }
    };

    if (typeof ResizeObserver === 'function') {
        const resizeObserver = new ResizeObserver(() => {
            window.clearTimeout(resizeTimer);
            resizeTimer = window.setTimeout(() => {
                const currentWidth = Math.floor(pagesContainer.clientWidth || root.clientWidth);
                const widthChanged = Math.abs(currentWidth - renderedWidth) >= 20;

                if (currentSource && root.classList.contains('is-ready') && widthChanged && !root.hidden) {
                    render(currentSource);
                }
            }, 180);
        });

        resizeObserver.observe(root);
    }

    return { render };
};

const initDocumentExplorer = () => {
    const explorer = document.querySelector('[data-document-explorer]');

    if (!explorer) {
        return;
    }

    const items = Array.from(explorer.querySelectorAll('[data-document-item]'));
    const viewer = createPdfCanvasViewer(explorer.querySelector('[data-pdf-viewer]'));
    const frameContainer = explorer.querySelector('[data-document-frame-container]');

    if (!viewer || !frameContainer || items.length === 0) {
        return;
    }

    const setActiveItem = (item, shouldPushState = true) => {
        const src = item.dataset.documentSrc;
        const ratio = item.dataset.documentRatio || '297 / 210';

        if (!src) {
            return;
        }

        items.forEach((entry) => {
            const isActive = entry === item;
            entry.classList.toggle('is-active', isActive);

            if (isActive) {
                entry.setAttribute('aria-current', 'page');
            } else {
                entry.removeAttribute('aria-current');
            }
        });

        frameContainer.style.setProperty('--document-preview-ratio', ratio);
        viewer.render(src);

        if (shouldPushState) {
            window.history.pushState({ certificateHref: item.href }, '', item.href);
        }
    };

    const findItemByUrl = (urlString) => {
        const currentUrl = new URL(urlString, window.location.origin);

        return items.find((item) => {
            const itemUrl = new URL(item.href, window.location.origin);

            return itemUrl.pathname === currentUrl.pathname && itemUrl.search === currentUrl.search;
        });
    };

    items.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            setActiveItem(item);
        });
    });

    window.addEventListener('popstate', () => {
        const matchedItem = findItemByUrl(window.location.href) || items[0];
        setActiveItem(matchedItem, false);
    });

    const initialItem = findItemByUrl(window.location.href) || items.find((item) => item.classList.contains('is-active')) || items[0];
    setActiveItem(initialItem, false);
};

const initResumeModal = () => {
    const modal = document.querySelector('[data-resume-modal]');
    const openButton = document.querySelector('[data-resume-open]');
    const viewer = createPdfCanvasViewer(document.querySelector('[data-resume-viewer]'));
    const closeButtons = Array.from(document.querySelectorAll('[data-resume-close]'));

    if (!modal || !openButton || !viewer || !closeButtons.length) {
        return;
    }

    const resumeSrc = openButton.dataset.resumeSrc;
    let lastActiveElement = null;

    const closeModal = () => {
        modal.hidden = true;
        document.body.classList.remove('has-modal-open');

        if (lastActiveElement instanceof HTMLElement) {
            lastActiveElement.focus();
        }
    };

    const openModal = () => {
        lastActiveElement = document.activeElement;
        modal.hidden = false;
        document.body.classList.add('has-modal-open');

        if (resumeSrc) {
            window.requestAnimationFrame(() => {
                viewer.render(resumeSrc);
            });
        }
    };

    openButton.addEventListener('click', openModal);

    closeButtons.forEach((button) => {
        button.addEventListener('click', closeModal);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.hidden) {
            closeModal();
        }
    });
};

const initHeroSlideshow = () => {
    const slides = Array.from(document.querySelectorAll('[data-hero-slide]'));

    if (slides.length <= 1) {
        return;
    }

    let activeIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));

    if (activeIndex < 0) {
        activeIndex = 0;
        slides[0].classList.add('is-active');
    }

    window.setInterval(() => {
        slides[activeIndex].classList.remove('is-active');
        activeIndex = (activeIndex + 1) % slides.length;
        slides[activeIndex].classList.add('is-active');
    }, 4200);
};

const initProjectMediaPan = () => {
    const panes = Array.from(document.querySelectorAll('[data-project-pan]'));

    if (!panes.length) {
        return;
    }

    const updatePane = (pane) => {
        const image = pane.querySelector('[data-project-pan-image]');

        if (!image || !image.naturalWidth || !image.naturalHeight) {
            return;
        }

        const paneWidth = pane.clientWidth;
        const paneHeight = pane.clientHeight;

        if (!paneWidth || !paneHeight) {
            return;
        }

        const renderedHeight = paneWidth * (image.naturalHeight / image.naturalWidth);
        const panDistance = Math.max(0, renderedHeight - paneHeight);

        pane.style.setProperty('--project-pan-distance', `${panDistance}px`);
        pane.classList.toggle('has-pan', panDistance > 4);
    };

    const updateAllPanes = () => {
        panes.forEach((pane) => updatePane(pane));
    };

    panes.forEach((pane) => {
        const image = pane.querySelector('[data-project-pan-image]');

        if (!image) {
            return;
        }

        if (image.complete) {
            updatePane(pane);
        } else {
            image.addEventListener('load', () => updatePane(pane), { once: true });
        }
    });

    window.addEventListener('resize', () => {
        window.requestAnimationFrame(updateAllPanes);
    });
};

const initProjectCarousel = () => {
    const carousel = document.querySelector('[data-project-carousel]');

    if (!carousel) {
        return;
    }

    const track = carousel.querySelector('[data-project-track]');
    const list = carousel.querySelector('.project-grid');
    const cards = Array.from(carousel.querySelectorAll('.project-card'));
    const prevButton = carousel.querySelector('[data-project-scroll="prev"]');
    const nextButton = carousel.querySelector('[data-project-scroll="next"]');

    if (!track || !list || cards.length === 0 || !prevButton || !nextButton) {
        return;
    }

    let currentIndex = 0;
    let visibleCards = 3;
    let cardWidth = 348;
    let gap = 22;
    let dragOffset = 0;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const getStep = () => cardWidth + gap;

    const getMaxIndex = () => Math.max(0, cards.length - visibleCards);

    const getOffsetForIndex = (index) => -1 * getStep() * index;

    const applyOffset = (offset) => {
        carousel.style.setProperty('--project-track-offset', `${offset}px`);
    };

    const updateButtons = () => {
        prevButton.disabled = currentIndex <= 0;
        nextButton.disabled = currentIndex >= getMaxIndex();
    };

    const syncCardWidth = () => {
        const viewportWidth = track.clientWidth;

        if (!viewportWidth) {
            return;
        }

        if (window.innerWidth <= 760) {
            visibleCards = 1;
            gap = 18;
            cardWidth = Math.min(viewportWidth * 0.84, 320);
        } else if (window.innerWidth <= 1080) {
            visibleCards = 2;
            gap = 22;
            cardWidth = Math.max(300, Math.floor((viewportWidth - gap) / 2));
        } else {
            visibleCards = 3;
            gap = 22;
            cardWidth = Math.max(300, Math.floor((viewportWidth - gap * 2) / 3));
        }

        carousel.style.setProperty('--project-card-width', `${cardWidth}px`);
        currentIndex = clamp(currentIndex, 0, getMaxIndex());
        applyOffset(getOffsetForIndex(currentIndex));
        updateButtons();
    };

    const snapToIndex = (index) => {
        currentIndex = clamp(index, 0, getMaxIndex());
        applyOffset(getOffsetForIndex(currentIndex));
        updateButtons();
    };

    prevButton.addEventListener('click', () => snapToIndex(currentIndex - 1));
    nextButton.addEventListener('click', () => snapToIndex(currentIndex + 1));

    let isPointerDown = false;
    let pointerId = null;
    let startX = 0;
    let startOffset = 0;
    let hasDragged = false;

    track.addEventListener('pointerdown', (event) => {
        if (event.pointerType === 'mouse' && event.button !== 0) {
            return;
        }

        isPointerDown = true;
        pointerId = event.pointerId;
        startX = event.clientX;
        startOffset = getOffsetForIndex(currentIndex);
        dragOffset = startOffset;
        hasDragged = false;
        track.classList.add('is-dragging');
        track.setPointerCapture(pointerId);
    });

    track.addEventListener('pointermove', (event) => {
        if (!isPointerDown) {
            return;
        }

        const deltaX = event.clientX - startX;

        if (Math.abs(deltaX) > 6) {
            hasDragged = true;
        }

        const minOffset = getOffsetForIndex(getMaxIndex());
        dragOffset = clamp(startOffset + deltaX, minOffset, 0);
        applyOffset(dragOffset);
    });

    const releasePointer = () => {
        if (isPointerDown) {
            const nearestIndex = Math.round(Math.abs(dragOffset) / getStep());
            currentIndex = clamp(nearestIndex, 0, getMaxIndex());
            applyOffset(getOffsetForIndex(currentIndex));
            updateButtons();
        }

        isPointerDown = false;
        pointerId = null;
        track.classList.remove('is-dragging');
    };

    track.addEventListener('pointerup', () => {
        window.setTimeout(() => {
            hasDragged = false;
        }, 0);
        releasePointer();
    });

    track.addEventListener('pointercancel', releasePointer);
    track.addEventListener('lostpointercapture', releasePointer);

    track.addEventListener('click', (event) => {
        if (hasDragged) {
            event.preventDefault();
            event.stopPropagation();
        }
    }, true);

    window.addEventListener('resize', syncCardWidth);

    syncCardWidth();
};

const initEducationPhotoStack = () => {
    const stack = document.querySelector('[data-education-stack]');

    if (!stack) {
        return;
    }

    const photos = Array.from(stack.querySelectorAll('[data-education-photo]'));

    if (photos.length < 2) {
        return;
    }

    const slotClasses = ['is-slot-1', 'is-slot-2', 'is-slot-3', 'is-slot-4'];
    const transitionDuration = 720;
    const rotationDelay = 3200;
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let order = photos.map((_, index) => index);
    let timerId = null;
    let transitionId = null;
    let isTransitioning = false;

    const applySlots = () => {
        photos.forEach((photo) => {
            photo.classList.remove(...slotClasses);
            photo.removeAttribute('aria-current');
            photo.tabIndex = -1;
        });

        order.forEach((photoIndex, slotIndex) => {
            const photo = photos[photoIndex];
            const slotClass = slotClasses[slotIndex];

            if (photo && slotClass) {
                photo.classList.add(slotClass);

                if (slotIndex === 0) {
                    photo.setAttribute('aria-current', 'true');
                    photo.tabIndex = 0;
                }
            }
        });
    };

    const clearRotationTimer = () => {
        if (!timerId) {
            return;
        }

        window.clearTimeout(timerId);
        timerId = null;
    };

    const scheduleRotation = () => {
        clearRotationTimer();

        if (reducedMotionQuery.matches || document.hidden) {
            return;
        }

        timerId = window.setTimeout(rotateStack, rotationDelay);
    };

    const finishTransition = (outgoingPhoto) => {
        outgoingPhoto.classList.remove('is-transitioning-out');
        stack.classList.remove('is-changing-photo');
        isTransitioning = false;
        transitionId = null;
        scheduleRotation();
    };

    function rotateStack() {
        if (isTransitioning) {
            return false;
        }

        clearRotationTimer();
        isTransitioning = true;

        const outgoingPhoto = photos[order[0]];
        outgoingPhoto.classList.add('is-transitioning-out');
        stack.classList.add('is-changing-photo');

        window.requestAnimationFrame(() => {
            order = [...order.slice(1), order[0]];
            applySlots();

            transitionId = window.setTimeout(
                () => finishTransition(outgoingPhoto),
                transitionDuration,
            );
        });

        return true;
    }

    const prepareImage = async (image) => {
        if (!image.complete) {
            await new Promise((resolve) => {
                image.addEventListener('load', resolve, { once: true });
                image.addEventListener('error', resolve, { once: true });
            });
        }

        if (typeof image.decode === 'function') {
            await image.decode().catch(() => undefined);
        }
    };

    applySlots();

    const images = photos
        .map((photo) => photo.querySelector('img'))
        .filter(Boolean);

    Promise.allSettled(images.map(prepareImage)).then(scheduleRotation);

    stack.addEventListener('click', (event) => {
        if (!event.target.closest('[data-education-photo]')) {
            return;
        }

        rotateStack();
    });

    stack.addEventListener('keydown', (event) => {
        if (
            !event.target.closest('[data-education-photo]')
            || !['Enter', ' '].includes(event.key)
        ) {
            return;
        }

        event.preventDefault();
        rotateStack();
    });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            clearRotationTimer();
            return;
        }

        scheduleRotation();
    });

    reducedMotionQuery.addEventListener('change', scheduleRotation);

    window.addEventListener('pagehide', () => {
        clearRotationTimer();

        if (transitionId) {
            window.clearTimeout(transitionId);
        }
    }, { once: true });
};

const initSkillsShowcase = () => {
    const lanes = Array.from(document.querySelectorAll('[data-skills-showcase-lane]'));

    if (!lanes.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return;
    }

    const laneStates = lanes.map((lane, index) => {
        const track = lane.querySelector('[data-skills-showcase-track]');
        const firstGroup = track?.querySelector('.skills-showcase__group');

        if (!track || !firstGroup) {
            return null;
        }

        const direction = lane.classList.contains('skills-showcase__lane--reverse') ? 1 : -1;

        return {
            lane,
            track,
            firstGroup,
            gap: 0,
            direction,
            speed: 132 + (index * 6),
            offset: 0,
            distance: Math.max(1, firstGroup.scrollWidth),
            isHovered: false,
            isPressed: false,
            pressedItem: null,
        };
    }).filter(Boolean);

    if (!laneStates.length) {
        return;
    }

    const recalculate = () => {
        laneStates.forEach((state) => {
            const trackStyle = window.getComputedStyle(state.track);
            state.gap = Number.parseFloat(trackStyle.columnGap || trackStyle.gap || '0') || 0;
            state.distance = Math.max(1, state.firstGroup.scrollWidth + state.gap);

            const requiredWidth = state.lane.clientWidth + (state.distance * 2);

            while (state.track.scrollWidth < requiredWidth) {
                const clone = state.firstGroup.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true');
                state.track.appendChild(clone);
            }

            state.offset %= state.distance;
        });
    };

    let lastFrameTime = 0;

    const render = (timestamp) => {
        if (!lastFrameTime) {
            lastFrameTime = timestamp;
        }

        const deltaSeconds = Math.min((timestamp - lastFrameTime) / 1000, 0.05);
        lastFrameTime = timestamp;

        laneStates.forEach((state) => {
            if (!document.hidden && !state.isHovered && !state.isPressed) {
                state.offset = (state.offset + (state.speed * deltaSeconds)) % state.distance;
            }

            const translateX = state.direction < 0
                ? -state.offset
                : (-state.distance + state.offset);

            state.track.style.transform = `translate3d(${translateX}px, 0, 0)`;
        });

        window.requestAnimationFrame(render);
    };

    laneStates.forEach((state) => {
        state.lane.addEventListener('pointerover', (event) => {
            if (event.target.closest('.skills-showcase__item')) {
                state.isHovered = true;
            }
        });

        state.lane.addEventListener('pointerout', (event) => {
            const item = event.target.closest('.skills-showcase__item');

            if (item && !item.contains(event.relatedTarget)) {
                state.isHovered = false;
            }
        });

        state.lane.addEventListener('pointerdown', (event) => {
            const item = event.target.closest('.skills-showcase__item');

            if (!item) {
                return;
            }

            state.isPressed = true;
            state.pressedItem = item;
            item.classList.add('is-pressed');
        });

        state.lane.addEventListener('pointerleave', () => {
            state.isHovered = false;
            state.isPressed = false;
            state.pressedItem?.classList.remove('is-pressed');
            state.pressedItem = null;
        });

        state.lane.addEventListener('pointercancel', () => {
            state.isPressed = false;
            state.pressedItem?.classList.remove('is-pressed');
            state.pressedItem = null;
        });
    });

    window.addEventListener('pointerup', () => {
        laneStates.forEach((state) => {
            state.isPressed = false;
            state.pressedItem?.classList.remove('is-pressed');
            state.pressedItem = null;
        });
    });

    document.addEventListener('visibilitychange', () => {
        if (!document.hidden) {
            lastFrameTime = 0;
        }
    });

    let recalculateFrame = null;

    const scheduleRecalculate = () => {
        if (recalculateFrame) {
            window.cancelAnimationFrame(recalculateFrame);
        }

        recalculateFrame = window.requestAnimationFrame(() => {
            recalculateFrame = null;
            recalculate();
        });
    };

    window.addEventListener('resize', scheduleRecalculate);

    if ('ResizeObserver' in window) {
        const resizeObserver = new ResizeObserver(scheduleRecalculate);

        laneStates.forEach((state) => {
            resizeObserver.observe(state.lane);
            resizeObserver.observe(state.firstGroup);
        });
    }

    recalculate();
    window.requestAnimationFrame(render);
};

const initScrollReveal = () => {
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));

    if (!revealItems.length) {
        return;
    }

    revealItems.forEach((item) => {
        item.classList.add('is-revealed');
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initThemePicker();
    initLanguagePicker();
    initMobileNavigation();
    initSectionNavigation();
    initDocumentExplorer();
    initResumeModal();
    initHeroSlideshow();
    initProjectMediaPan();
    initProjectCarousel();
    initEducationPhotoStack();
    initSkillsShowcase();
    initScrollReveal();
});
