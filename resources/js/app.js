const initPageIntro = (onComplete) => {
    const intro = document.querySelector('[data-page-intro]');
    const root = document.documentElement;

    if (!intro) {
        root.classList.remove('has-page-intro');
        onComplete();
        return;
    }

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let leaveTimer = null;
    let cleanupTimer = null;
    let hasFinished = false;

    const cleanup = () => {
        if (hasFinished) {
            return;
        }

        hasFinished = true;
        window.clearTimeout(leaveTimer);
        window.clearTimeout(cleanupTimer);
        root.classList.remove('has-page-intro');
        intro.remove();
        onComplete();
    };

    if (reducedMotionQuery.matches) {
        cleanup();
        return;
    }

    const leaveIntro = () => {
        const handleTransitionEnd = (event) => {
            if (event.target !== intro || event.propertyName !== 'transform') {
                return;
            }

            intro.removeEventListener('transitionend', handleTransitionEnd);
            cleanup();
        };

        intro.classList.add('is-leaving');
        intro.addEventListener('transitionend', handleTransitionEnd);
        cleanupTimer = window.setTimeout(cleanup, 1100);
    };

    window.requestAnimationFrame(() => {
        intro.classList.add('is-running');
        leaveTimer = window.setTimeout(leaveIntro, 3200);
    });
};

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
    'GESER': 'SWIPE',
    'Geser untuk melihat sertifikasi lainnya →': 'Swipe to view more certifications →',
    '← Geser untuk kembali ke sertifikasi pertama': '← Swipe to return to first certifications',
    'Lihat sertifikasi sebelumnya': 'View previous certifications',
    'Lihat sertifikasi berikutnya': 'View next certifications',
    'Navigasi layer sertifikasi': 'Certification layer navigation',
    'Layer 1 (4 sertifikasi)': 'Layer 1 (4 certificates)',
    'Layer 2 (4 sertifikasi)': 'Layer 2 (4 certificates)',
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
    'Ahli K3 Umum (AK3U)': 'Occupational Safety and Health Expert (AK3U)',
    'Pembinaan Calon Ahli K3': 'Occupational Safety and Health Expert Training',
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

    const scrollToHash = (hash, shouldUpdateUrl = true, behavior = 'smooth') => {
        const target = document.querySelector(hash);

        if (!target) {
            return;
        }

        const { topOffset } = syncAnchorOffsets();
        const targetTop = window.scrollY + target.getBoundingClientRect().top - topOffset;

        window.scrollTo({
            top: Math.max(0, targetTop),
            behavior,
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
    const initialHash = window.__initialHash || window.location.hash;
    const targetSectionId = initialSection || (initialHash ? initialHash.replace(/^#/, '') : null);

    if (targetSectionId) {
        const target = document.querySelector(`#${targetSectionId}`);
        if (target) {
            let userInteracted = false;
            const onInteraction = () => {
                userInteracted = true;
                window.removeEventListener('wheel', onInteraction);
                window.removeEventListener('touchstart', onInteraction);
                window.removeEventListener('keydown', onInteraction);
            };

            window.addEventListener('wheel', onInteraction, { passive: true });
            window.addEventListener('touchstart', onInteraction, { passive: true });
            window.addEventListener('keydown', onInteraction, { passive: true });

            const alignToTarget = () => {
                if (userInteracted) return;
                const { topOffset } = syncAnchorOffsets();
                const rect = target.getBoundingClientRect();
                const diff = rect.top - topOffset;
                if (Math.abs(diff) > 1) {
                    window.scrollTo({
                        top: Math.max(0, window.scrollY + diff),
                        behavior: 'auto',
                    });
                }
                setActiveLink(target.id);
                revealSectionContent(target);
            };

            // Align immediately
            alignToTarget();

            if (window.location.hash !== `#${targetSectionId}`) {
                window.history.replaceState(null, '', `#${targetSectionId}`);
            }

            // Re-align on layout settlements (as cached/lazy images or fonts load)
            [50, 150, 300, 600, 1000].forEach((delay) => {
                window.setTimeout(alignToTarget, delay);
            });

            window.addEventListener('load', alignToTarget, { once: true });
            if (document.fonts?.ready) {
                document.fonts.ready.then(alignToTarget);
            }
        }
    }

    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            const currentSection = new URLSearchParams(window.location.search).get('section');
            const currentHash = window.__initialHash || window.location.hash;
            const sectionId = currentSection || (currentHash ? currentHash.replace(/^#/, '') : null);
            if (sectionId) {
                const target = document.querySelector(`#${sectionId}`);
                if (target) {
                    const { topOffset } = syncAnchorOffsets();
                    const diff = target.getBoundingClientRect().top - topOffset;
                    if (Math.abs(diff) > 1) {
                        window.scrollTo({
                            top: Math.max(0, window.scrollY + diff),
                            behavior: 'auto',
                        });
                    }
                    setActiveLink(target.id);
                    revealSectionContent(target);
                }
            }
        }
    });

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
    const entries = Array.from(explorer.querySelectorAll('[data-document-entry]'));
    const desktopSlot = explorer.querySelector('[data-document-desktop-preview]');
    const frameContainer = explorer.querySelector('[data-document-frame-container]');
    const viewer = createPdfCanvasViewer(explorer.querySelector('[data-pdf-viewer]'));

    if (!viewer || !frameContainer || items.length === 0) {
        return;
    }

    const isMobile = () => window.matchMedia('(max-width: 760px)').matches;

    const setDesktopActiveItem = (item, shouldPushState = true) => {
        const src = item.dataset.documentSrc;
        const ratio = item.dataset.documentRatio || '297 / 210';

        if (!src) {
            return;
        }

        if (desktopSlot && !desktopSlot.contains(frameContainer)) {
            desktopSlot.append(frameContainer);
        }

        items.forEach((entry) => {
            const isActive = entry === item;
            entry.classList.toggle('is-active', isActive);

            if (isActive) {
                entry.setAttribute('aria-current', 'page');
                entry.setAttribute('aria-expanded', 'true');
            } else {
                entry.removeAttribute('aria-current');
                entry.setAttribute('aria-expanded', 'false');
            }
        });

        frameContainer.style.setProperty('--document-preview-ratio', ratio);
        viewer.render(src);

        if (shouldPushState) {
            window.history.pushState({ certificateHref: item.href }, '', item.href);
        }
    };

    const toggleMobileItem = (item, shouldPushState = true) => {
        const entry = item.closest('[data-document-entry]');
        const drawer = entry ? entry.querySelector('[data-document-drawer]') : null;
        const isOpen = entry ? entry.classList.contains('is-open') : false;

        if (isOpen) {
            entry.classList.remove('is-open');
            item.classList.remove('is-active', 'is-open');
            item.removeAttribute('aria-current');
            item.setAttribute('aria-expanded', 'false');

            if (desktopSlot && !desktopSlot.contains(frameContainer)) {
                desktopSlot.append(frameContainer);
            }
            return;
        }

        entries.forEach((otherEntry) => {
            if (otherEntry !== entry) {
                otherEntry.classList.remove('is-open');
                const otherItem = otherEntry.querySelector('[data-document-item]');
                if (otherItem) {
                    otherItem.classList.remove('is-active', 'is-open');
                    otherItem.removeAttribute('aria-current');
                    otherItem.setAttribute('aria-expanded', 'false');
                }
            }
        });

        const src = item.dataset.documentSrc;
        const ratio = item.dataset.documentRatio || '297 / 210';

        if (!src || !drawer) {
            return;
        }

        entry.classList.add('is-open');
        item.classList.add('is-active', 'is-open');
        item.setAttribute('aria-current', 'page');
        item.setAttribute('aria-expanded', 'true');

        drawer.append(frameContainer);

        window.requestAnimationFrame(() => {
            frameContainer.style.setProperty('--document-preview-ratio', ratio);
            viewer.render(src);

            const rect = item.getBoundingClientRect();
            if (rect.top < 80 || rect.top > window.innerHeight - 180) {
                const targetY = window.scrollY + rect.top - 84;
                window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
            }
        });

        if (shouldPushState) {
            window.history.pushState({ certificateHref: item.href }, '', item.href);
        }
    };

    const handleItemClick = (item) => {
        if (isMobile()) {
            toggleMobileItem(item, true);
        } else {
            setDesktopActiveItem(item, true);
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
            handleItemClick(item);
        });
    });

    window.addEventListener('popstate', () => {
        const matchedItem = findItemByUrl(window.location.href) || items[0];
        if (isMobile()) {
            toggleMobileItem(matchedItem, false);
        } else {
            setDesktopActiveItem(matchedItem, false);
        }
    });

    const mediaQuery = window.matchMedia('(max-width: 760px)');
    const handleMediaChange = (e) => {
        if (!e.matches) {
            entries.forEach((entry) => entry.classList.remove('is-open'));
            if (desktopSlot && !desktopSlot.contains(frameContainer)) {
                desktopSlot.append(frameContainer);
            }
            const activeItem = items.find((item) => item.classList.contains('is-active')) || items[0];
            setDesktopActiveItem(activeItem, false);
        } else {
            const openEntry = entries.find((entry) => entry.classList.contains('is-open'));
            if (!openEntry && desktopSlot && !desktopSlot.contains(frameContainer)) {
                desktopSlot.append(frameContainer);
            }
        }
    };

    if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', handleMediaChange);
    } else if (typeof mediaQuery.addListener === 'function') {
        mediaQuery.addListener(handleMediaChange);
    }

    const initialItem = findItemByUrl(window.location.href) || items.find((item) => item.classList.contains('is-active')) || items[0];

    if (!isMobile()) {
        setDesktopActiveItem(initialItem, false);
    } else {
        const hasDocParam = window.location.search.includes('doc=');
        if (hasDocParam) {
            toggleMobileItem(initialItem, false);
        } else {
            items.forEach((item) => {
                item.classList.remove('is-active', 'is-open');
                item.removeAttribute('aria-current');
                item.setAttribute('aria-expanded', 'false');
            });
            entries.forEach((entry) => entry.classList.remove('is-open'));
            if (desktopSlot && !desktopSlot.contains(frameContainer)) {
                desktopSlot.append(frameContainer);
            }
        }
    }
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

const initProjectShowcase = () => {
    // 1. Coverflow Carousel Setup & Elements
    const coverflowWrapper = document.querySelector('.project-coverflow-wrapper');
    const stage = coverflowWrapper?.querySelector('[data-coverflow-stage]');
    const prevBtn = coverflowWrapper?.querySelector('[data-coverflow-nav="prev"]');
    const nextBtn = coverflowWrapper?.querySelector('[data-coverflow-nav="next"]');
    const pagination = coverflowWrapper?.querySelector('[data-coverflow-pagination]');
    const allCards = Array.from(document.querySelectorAll('.project-card-v2[data-project-scope]'));
    const filterButtons = Array.from(document.querySelectorAll('[data-project-filter]'));

    let activeFilter = 'all';
    let visibleCards = [...allCards];
    let currentIndex = 0;

    const updateCoverflow = () => {
        const total = visibleCards.length;
        if (total === 0) return;

        // Circular wrap-around index
        if (currentIndex < 0) {
            currentIndex = (currentIndex % total + total) % total;
        } else if (currentIndex >= total) {
            currentIndex = currentIndex % total;
        }

        // Hide cards not in the current filter
        allCards.forEach((card) => {
            if (!visibleCards.includes(card)) {
                card.style.display = 'none';
                card.classList.remove('is-active', 'is-prev-1', 'is-next-1', 'is-prev-2', 'is-next-2');
                card.classList.add('is-hidden');
            } else {
                card.style.display = 'flex';
            }
        });

        // Apply 3D Coverflow positioning to visible cards
        visibleCards.forEach((card, index) => {
            card.classList.remove('is-active', 'is-prev-1', 'is-next-1', 'is-prev-2', 'is-next-2', 'is-hidden');

            // Circular shortest distance from currentIndex
            let diff = index - currentIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            if (diff === 0) {
                card.classList.add('is-active');
                card.setAttribute('aria-hidden', 'false');
            } else if (diff === -1) {
                card.classList.add('is-prev-1');
                card.setAttribute('aria-hidden', 'true');
            } else if (diff === 1) {
                card.classList.add('is-next-1');
                card.setAttribute('aria-hidden', 'true');
            } else if (diff === -2) {
                card.classList.add('is-prev-2');
                card.setAttribute('aria-hidden', 'true');
            } else if (diff === 2) {
                card.classList.add('is-next-2');
                card.setAttribute('aria-hidden', 'true');
            } else {
                card.classList.add('is-hidden');
                card.setAttribute('aria-hidden', 'true');
            }
        });

        updatePagination();
    };

    const updatePagination = () => {
        if (!pagination) return;
        const dots = Array.from(pagination.querySelectorAll('.project-coverflow-dot'));
        dots.forEach((dot, idx) => {
            const isActive = idx === currentIndex;
            dot.classList.toggle('is-active', isActive);
            dot.setAttribute('aria-selected', String(isActive));
        });
    };

    const rebuildPagination = () => {
        if (!pagination) return;
        pagination.innerHTML = '';
        const total = visibleCards.length;
        for (let i = 0; i < total; i++) {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = `project-coverflow-dot${i === currentIndex ? ' is-active' : ''}`;
            dot.setAttribute('aria-label', `Lihat proyek slide ${i + 1}`);
            dot.setAttribute('aria-selected', String(i === currentIndex));
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                currentIndex = i;
                updateCoverflow();
            });
            pagination.appendChild(dot);
        }
    };

    const goToNext = () => {
        if (visibleCards.length === 0) return;
        currentIndex = (currentIndex + 1) % visibleCards.length;
        updateCoverflow();
    };

    const goToPrev = () => {
        if (visibleCards.length === 0) return;
        currentIndex = (currentIndex - 1 + visibleCards.length) % visibleCards.length;
        updateCoverflow();
    };

    nextBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        goToNext();
    });

    prevBtn?.addEventListener('click', (e) => {
        e.preventDefault();
        goToPrev();
    });

    // Clicking side cards shifts them to center
    allCards.forEach((card) => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('[data-device-toggle]') || e.target.closest('[data-project-modal-open]')) {
                return;
            }

            const cardIndex = visibleCards.indexOf(card);
            if (cardIndex !== -1 && cardIndex !== currentIndex) {
                e.preventDefault();
                currentIndex = cardIndex;
                updateCoverflow();
            }
        });
    });

    // Keyboard navigation (ArrowLeft & ArrowRight)
    stage?.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            goToNext();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goToPrev();
        }
    });

    // Touch swipe gestures for mobile
    let touchStartX = 0;
    let touchStartY = 0;

    stage?.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
            touchStartX = e.touches[0].clientX;
            touchStartY = e.touches[0].clientY;
        }
    }, { passive: true });

    stage?.addEventListener('touchend', (e) => {
        if (e.changedTouches.length === 1) {
            const deltaX = e.changedTouches[0].clientX - touchStartX;
            const deltaY = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX < 0) {
                    goToNext();
                } else {
                    goToPrev();
                }
            }
        }
    }, { passive: true });

    // Filter Buttons Integration (Semua, Publik, Lokal)
    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-project-filter');
            filterButtons.forEach((b) => b.classList.remove('is-active'));
            btn.classList.add('is-active');

            activeFilter = filter;
            if (filter === 'all') {
                visibleCards = [...allCards];
            } else {
                visibleCards = allCards.filter(card => card.getAttribute('data-project-scope') === filter);
            }

            currentIndex = 0;
            rebuildPagination();
            updateCoverflow();
        });
    });

    // Initial Coverflow Render
    rebuildPagination();
    updateCoverflow();

    // 2. Device Toggle Buttons (Laptop <-> HP View Switcher)
    const deviceToggles = Array.from(document.querySelectorAll('[data-device-toggle]'));
    deviceToggles.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.project-card-v2');
            if (!card) return;

            const img = card.querySelector('[data-project-card-image]');
            if (!img) return;

            const desktopSrc = btn.getAttribute('data-desktop-src');
            const mobileSrc = btn.getAttribute('data-mobile-src');
            const mobileIcon = btn.querySelector('.project-device-toggle__icon--mobile');
            const desktopIcon = btn.querySelector('.project-device-toggle__icon--desktop');
            const label = btn.querySelector('[data-device-label]');

            const isMobileView = btn.classList.contains('is-active');

            // Fade transition on image swap
            img.style.transition = 'opacity 0.2s ease, transform 0.3s ease';
            img.style.opacity = '0.3';

            setTimeout(() => {
                if (isMobileView) {
                    // Switch to Desktop
                    btn.classList.remove('is-active');
                    img.src = desktopSrc;
                    if (label) label.textContent = 'HP';
                    if (mobileIcon) mobileIcon.style.display = 'flex';
                    if (desktopIcon) desktopIcon.style.display = 'none';
                    btn.setAttribute('title', 'Ubah ke tampilan HP');
                } else {
                    // Switch to Mobile
                    btn.classList.add('is-active');
                    img.src = mobileSrc;
                    if (label) label.textContent = 'Laptop';
                    if (mobileIcon) mobileIcon.style.display = 'none';
                    if (desktopIcon) desktopIcon.style.display = 'flex';
                    btn.setAttribute('title', 'Ubah ke tampilan Laptop');
                }
                img.style.opacity = '1';
            }, 180);
        });
    });

    // 3. Modal Data & Open/Close Handlers
    const modal = document.getElementById('project-detail-modal');
    if (!modal) return;

    const modalCategory = modal.querySelector('#modal-project-category');
    const modalTitle = modal.querySelector('#modal-project-title');
    const modalStack = modal.querySelector('#modal-project-stack');
    const modalDescription = modal.querySelector('#modal-project-description');
    const modalRoles = modal.querySelector('#modal-project-roles');
    const modalFeatures = modal.querySelector('#modal-project-features');

    const openTriggers = Array.from(document.querySelectorAll('[data-project-modal-open]'));
    const closeTriggers = Array.from(document.querySelectorAll('[data-project-modal-close]'));

    const projectsData = {
        'pelayanan-k3': {
            title: 'Website Pelayanan K3',
            category: 'Sistem Informasi K3',
            image: '/images/Pelayanan_K3.png',
            stack: [
                { name: 'Laravel', icon: '/images/Laravel.png' },
                { name: 'MySQL', icon: '/images/MySQL.png' },
                { name: 'Bootstrap', icon: '/images/Bootstrap.png' }
            ],
            description: 'Platform digital terpadu untuk pengelolaan dan pelayanan Keselamatan dan Kesehatan Kerja (K3). Sistem ini mengotomatiskan alur pengajuan layanan K3, verifikasi dokumen, pemantauan tindak lanjut, dan pelaporan eksekutif guna mewujudkan lingkungan kerja yang aman dan patuh regulasi.',
            roles: [
                { name: 'Super Admin / Pengelola K3', badge: 'Administrator', desc: 'Akses penuh untuk manajemen data, validasi pengajuan tingkat akhir, konfigurasi alur persetujuan, dan pemantauan laporan eksekutif.' },
                { name: 'Petugas K3', badge: 'Verifikator Field', desc: 'Bertanggung jawab melakukan pemeriksaan kelayakan dokumen, pemrosesan teknis, penjadwalan inspeksi, dan pengisian catatan evaluasi.' },
                { name: 'Pemohon / Worker', badge: 'User Mandiri', desc: 'Dapat mengajukan permohonan layanan K3 secara online, mengunggah persyaratan, serta melacak progres pengajuan secara real-time.' }
            ],
            features: [
                'Portal Pengajuan Layanan K3 Online Mandiri',
                'Tracking Status Pengajuan Real-time dengan Status Timeline',
                'Verifikasi Multi-level & Penjadwalan Inspeksi K3',
                'Dashboard Analytics & Rekapitulasi Layanan K3',
                'Cetak Laporan Rekapitulasi dalam Format PDF/Excel',
                'Notifikasi Pengumuman & Standar Keselamatan Kerja'
            ]
        },
        'inventarisasi-alat-k3': {
            title: 'Inventarisasi Alat K3',
            category: 'Sistem Logistik & Inventaris',
            image: '/images/Inventarisasi_Alat_K3.png',
            stack: [
                { name: 'Laravel', icon: '/images/Laravel.png' },
                { name: 'MySQL', icon: '/images/MySQL.png' },
                { name: 'Bootstrap', icon: '/images/Bootstrap.png' }
            ],
            description: 'Sistem manajemen dan pengawasan stok alat Keselamatan dan Kesehatan Kerja (K3) berbasis web. Dirancang untuk memastikan seluruh inventaris APD, perlengkapan rescue, APAR, dan sensor terdata dengan akurat, siap pakai, serta terpantau masa perawatannya.',
            roles: [
                { name: 'Admin Inventaris', badge: 'Admin Logistik', desc: 'Mengelola master data peralatan, menentukan lokasi penyimpanan, menyetujui peminjaman alat, serta melakukan audit stok tahunan.' },
                { name: 'Petugas Gudang', badge: 'Operator Gudang', desc: 'Mencatat transaksi kelayakan alat, keluar-masuk barang, kondisi fisik peralatan, dan memperbarui status perawatan/kalibrasi.' },
                { name: 'Staff Operasional', badge: 'Pengguna Alat', desc: 'Melihat ketersediaan stok peralatan K3 di katalog digital dan mengajukan permohonan peminjaman alat operasional.' }
            ],
            features: [
                'Katalog Inventaris Peralatan K3 Terkategori Rapi',
                'Pencatatan Transaksi Mutasi Keluar, Masuk & Peminjaman Alat',
                'Monitoring Jadwal Kalibrasi & Masa Pakai Peralatan K3',
                'Sistem Labeling Kode Inventaris & Barcode Tagging',
                'Export Laporan Rekapitulasi Stok Peralatan (PDF & Excel)',
                'Peringatan Stok Minimum & Alerts Perlu Maintenance'
            ]
        },
        'inventarisasi-kimia-k3': {
            title: 'Inventarisasi Bahan Kimia K3',
            category: 'Sistem Manajerial K3 B3',
            image: '/images/Kimia_K3.png',
            stack: [
                { name: 'Laravel', icon: '/images/Laravel.png' },
                { name: 'MySQL', icon: '/images/MySQL.png' },
                { name: 'Tailwind', icon: '/images/tech/tailwindcss.svg' }
            ],
            description: 'Aplikasi web khusus untuk tata kelola dan pengawasan inventaris bahan kimia berbahaya (B3) di laboratorium/industri. Menyediakan integrasi dokumen Lembar Data Keselamatan Bahan (MSDS/LDKB), klasifikasi tingkat bahaya (GHS), dan pemantauan masa berlaku bahan.',
            roles: [
                { name: 'Admin Laboratorium K3', badge: 'Lab Manager', desc: 'Mengontrol akses bahan kimia sensitif, mengesahkan batas ambang penyimpanan aman, dan menyetujui dokumen MSDS baru.' },
                { name: 'Petugas Analis / Kimiawan', badge: 'Analis Lab', desc: 'Mencatat penggunaan harian reagen/bahan kimia, mengunggah file MSDS, serta memperbarui kuantitas stok terpakai.' },
                { name: 'Auditor / Inspector K3', badge: 'Safety Auditor', desc: 'Memeriksa riwayat penggunaan bahan kimia, memantau tingkat risiko penyimpanan, dan mencetak rekap kepatuhan B3.' }
            ],
            features: [
                'Katalog Bahan Kimia dengan Klasifikasi GHS & Simbol Bahaya',
                'Integrasi Repository Lembar Data Keselamatan Bahan (MSDS/LDKB)',
                'Tracking Volume Storage, Expired Date & Ambang Toleransi',
                'Log Pemakaian & Mutasi Stok Bahan Kimia Real-time',
                'Dashboard Analytics Potensi Bahaya & Kepatuhan Keselamatan',
                'Notifikasi Alert Kedaluwarsa & Peringatan Ambang Batas Stok'
            ]
        },
        'e-rukun-warga': {
            title: 'E-Rukun Warga (Sistem Informasi RW)',
            category: 'Portal Digital Kependudukan',
            image: '/images/E_Rukun_Warga.png',
            stack: [
                { name: 'CodeIgniter', icon: '/images/Codeigneter.png' },
                { name: 'MySQL', icon: '/images/MySQL.png' },
                { name: 'Bootstrap', icon: '/images/Bootstrap.png' }
            ],
            description: 'Platform layanan publik dan administrasi tingkat Rukun Warga (RW) berbasis web. Mempermudah warga dalam pengajuan pengantar surat mandiri, menyajikan papan informasi & agenda lingkungan, serta membantu transparansi tata kelola wilayah.',
            roles: [
                { name: 'Ketua RW / Admin RW', badge: 'Administrator RW', desc: 'Mengelola data kewilayahan seluruh RT, menyetujui pengantar tingkat RW, menerbitkan pengumuman resmi, dan mengelola transparansi.' },
                { name: 'Ketua RT', badge: 'Verifikator RT', desc: 'Memverifikasi status kependudukan warga di tingkat RT sebelum surat diajukan ke tingkat RW.' },
                { name: 'Warga / Masyarakat', badge: 'Warga Lingkungan', desc: 'Mengajukan permohonan surat pengantar online, memantau pengumuman lingkungan, dan mengirimkan aspirasi/aduan.' }
            ],
            features: [
                'Layanan Mandiri Surat Pengantar Digital (Domisili, Keterangan, dll)',
                'Database Kependudukan & Demografi Warga Terintegrasi',
                'Portal Pengumuman Digital & Kalender Agenda Lingkungan RW',
                'Kanal Pengaduan & Aspirasi Lingkungan Warga',
                'Modul Transparansi Kas & Laporan Iuran Kegiatan RW',
                'Tampilan Mobile Responsive & Cetak Dokumen PDF Pengantar'
            ]
        },
        'hris-system': {
            title: 'Sistem Informasi HRIS',
            category: 'Sistem Manajemen SDM',
            image: '/images/HRIS.png',
            stack: [
                { name: 'React', icon: '/images/React.png' },
                { name: 'Laravel', icon: '/images/Laravel.png' },
                { name: 'MySQL', icon: '/images/MySQL.png' },
                { name: 'Tailwind', icon: '/images/tech/tailwindcss.svg' }
            ],
            description: 'Platform Human Resource Information System (HRIS) berbasis web terpadu untuk efisiensi tata kelola kepegawaian perusahaan. Sistem ini mengotomatiskan pencatatan absensi digital, pengajuan dan persetujuan cuti/izin mandiri, manajemen struktur peran & hak akses pengguna (RBAC), pengumuman internal, serta pelaporan kepegawaian.',
            roles: [
                { name: 'Super Admin HR', badge: 'Administrator', desc: 'Akses penuh ke manajemen data pegawai, pengaturan peran & hak akses (RBAC), verifikasi pengajuan kepegawaian, dan pelaporan eksekutif.' },
                { name: 'Manajer / Supervisor', badge: 'Verifikator Divisi', desc: 'Memverifikasi dan menyetujui pengajuan cuti, lembur, dan izin anggota tim di bawah divisinya.' },
                { name: 'Karyawan / Pegawai', badge: 'User Mandiri', desc: 'Melakukan absensi harian, mengajukan permohonan cuti/izin mandiri, melihat struktur organisasi, dan memantau status pengajuan.' }
            ],
            features: [
                'Manajemen Data Induk Kepegawaian & Struktur Organisasi',
                'Sistem Pengajuan & Approval Cuti, Lembur, dan Izin Online',
                'Role-Based Access Control (RBAC) & Management Hak Akses',
                'Portal Absensi Digital Real-time & Monitoring Kehadiran',
                'Dashboard Analytics SDM & Notifikasi Pengumuman Internal',
                'Export Laporan Kepegawaian & Rekapitulasi Presensi (PDF/Excel)'
            ]
        },
        'sistem-wms': {
            title: 'Sistem Manajemen Penerimaan Barang (WMS)',
            category: 'Sistem Manajemen Gudang',
            image: '/images/Sistem WMS.png',
            stack: [
                { name: 'ReactJS', icon: '/images/React.png' },
                { name: 'Node.js', icon: '/images/tech/nodejs.svg' },
                { name: 'PostgreSQL', icon: '/images/tech/postgresql.svg' },
                { name: 'Tailwind', icon: '/images/tech/tailwindcss.svg' }
            ],
            description: 'Platform Warehouse Management System (WMS) berbasis web untuk pengelolaan penerimaan barang secara digital dan terstruktur. Sistem ini menyediakan fitur pencatatan inbound barang, validasi kualitas penerimaan, manajemen lokasi penyimpanan gudang, pelacakan stok real-time, serta pelaporan rekapitulasi penerimaan guna meningkatkan efisiensi operasional logistik.',
            roles: [
                { name: 'Admin Gudang', badge: 'Administrator', desc: 'Akses penuh untuk manajemen master data barang, konfigurasi lokasi gudang, persetujuan penerimaan barang, dan pemantauan laporan eksekutif gudang.' },
                { name: 'Petugas Penerimaan', badge: 'Operator Inbound', desc: 'Mencatat barang masuk, memverifikasi kuantitas dan kualitas penerimaan, menginput data pengiriman dari supplier, serta memperbarui status penerimaan.' },
                { name: 'Staff Logistik', badge: 'User Operasional', desc: 'Memantau ketersediaan stok, melihat riwayat penerimaan barang, serta mengakses laporan stok dan rekapitulasi gudang.' }
            ],
            features: [
                'Pencatatan Penerimaan Barang Masuk (Inbound) Secara Digital',
                'Validasi Kualitas & Kuantitas Barang Saat Penerimaan',
                'Manajemen Lokasi Penyimpanan & Mapping Area Gudang',
                'Monitoring Stok Real-time & Tracking Pergerakan Barang',
                'Dashboard Analytics Gudang & Rekapitulasi Penerimaan',
                'Export Laporan Penerimaan & Stok Gudang (PDF/Excel)'
            ]
        }
    };

    const mergedProjectsData = Object.assign({}, projectsData, window.__PROJECTS_DATA__ || {});

    const populateModal = (data) => {
        if (!data) return;

        if (modalCategory) modalCategory.textContent = data.category || '';
        if (modalTitle) modalTitle.textContent = data.title || '';
        if (modalDescription) modalDescription.textContent = data.description || '';

        if (modalStack) {
            modalStack.innerHTML = (data.stack || []).map(tech => {
                const iconSrc = tech.icon ? (tech.icon.startsWith('/') ? tech.icon : '/images/' + tech.icon) : '';
                return `
                < div class= "project-capsule" >
                <span class="project-capsule__icon">
                        <img src="${iconSrc}" alt="" loading="lazy">
                        </span>
                        <span class="project-capsule__label">${tech.name}</span>
                    </div>
                    `;
            }).join('');
        }

                    if (modalRoles) {
                        modalRoles.innerHTML = (data.roles || []).map(role => `
                <div class="project-modal__role-card">
                    <div class="project-modal__role-header">
                        <span class="project-modal__role-name">${role.name}</span>
                        <span class="project-modal__role-badge">${role.badge}</span>
                    </div>
                    <p class="project-modal__role-desc">${role.desc}</p>
                </div>
            `).join('');
        }

                    if (modalFeatures) {
                        modalFeatures.innerHTML = (data.features || []).map(feature => `
                <li class="project-modal__feature-item">
                    <span class="project-modal__feature-check">✓</span>
                    <span>${feature}</span>
                </li>
            `).join('');
        }
    };

    const openModal = (projectId) => {
                    const currentData = (window.__PROJECTS_DATA__ && window.__PROJECTS_DATA__[projectId]) || mergedProjectsData[projectId] || projectsData[projectId];
                    if (!currentData) return;

                    populateModal(currentData);
                    modal.classList.add('is-active');
                    modal.setAttribute('aria-hidden', 'false');
                    document.body.classList.add('project-modal-open');
    };

    const closeModal = () => {
                        modal.classList.remove('is-active');
                    modal.setAttribute('aria-hidden', 'true');
                    document.body.classList.remove('project-modal-open');
    };

    openTriggers.forEach((btn) => {
                        btn.addEventListener('click', (e) => {
                            e.preventDefault();
                            const id = btn.getAttribute('data-project-modal-open');
                            openModal(id);
                        });
    });

    closeTriggers.forEach((btn) => {
                        btn.addEventListener('click', (e) => {
                            e.preventDefault();
                            closeModal();
                        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-active')) {
                        closeModal();
        }
    });
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
    }, {once: true });
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

const initCertificateSlider = () => {
    const slider = document.querySelector('[data-certificate-slider]');
                    if (!slider) return;

                    const track = slider.querySelector('[data-certificate-track]');
                    const slides = Array.from(slider.querySelectorAll('.certificate-slide'));
                    const prevBtn = slider.querySelector('[data-certificate-nav="prev"]');
                    const nextBtn = slider.querySelector('[data-certificate-nav="next"]');
                    const dots = Array.from(slider.querySelectorAll('[data-certificate-dot]'));
                    const hintEl = slider.querySelector('.certificate-mobile-hint');

                    if (!track || slides.length === 0) return;

    const getCurrentIndex = () => {
        const trackRect = track.getBoundingClientRect();
                    let closestIndex = 0;
                    let minDiff = Infinity;

        slides.forEach((slide, index) => {
            const slideRect = slide.getBoundingClientRect();
                    const diff = Math.abs(slideRect.left - trackRect.left);
                    if (diff < minDiff) {
                        minDiff = diff;
                    closestIndex = index;
            }
        });

                    return closestIndex;
    };

    const updateState = (activeIndex) => {
                        dots.forEach((dot, index) => {
                            const isActive = index === activeIndex;
                            dot.classList.toggle('is-active', isActive);
                            dot.setAttribute('aria-selected', String(isActive));
                        });

                    if (prevBtn) {
                        prevBtn.disabled = activeIndex === 0;
        }

                    if (nextBtn) {
                        nextBtn.disabled = activeIndex === slides.length - 1;
        }

                    if (hintEl) {
            const isEnglish = document.documentElement.dataset.language === 'en';
                    if (activeIndex === 0) {
                        hintEl.textContent = isEnglish
                            ? 'Swipe to view more certifications →'
                            : 'Geser untuk melihat sertifikasi lainnya →';
            } else {
                        hintEl.textContent = isEnglish
                            ? '← Swipe to return to first certifications'
                            : '← Geser untuk kembali ke sertifikasi pertama';
            }
        }
    };

    const scrollToIndex = (index) => {
        if (index < 0 || index >= slides.length) return;
                    const targetSlide = slides[index];
                    if (!targetSlide) return;

                    const trackRect = track.getBoundingClientRect();
                    const slideRect = targetSlide.getBoundingClientRect();
                    const targetLeft = track.scrollLeft + (slideRect.left - trackRect.left);

                    track.scrollTo({
                        left: targetLeft,
                    behavior: 'smooth',
        });
    };

    prevBtn?.addEventListener('click', () => {
        const currentIndex = getCurrentIndex();
                    scrollToIndex(Math.max(0, currentIndex - 1));
    });

    nextBtn?.addEventListener('click', () => {
        const currentIndex = getCurrentIndex();
                    scrollToIndex(Math.min(slides.length - 1, currentIndex + 1));
    });

    dots.forEach((dot) => {
                        dot.addEventListener('click', () => {
                            const targetIndex = Number(dot.dataset.certificateDot);
                            if (!Number.isNaN(targetIndex)) {
                                scrollToIndex(targetIndex);
                            }
                        });
    });

                    let scrollTicking = false;
    track.addEventListener('scroll', () => {
        if (scrollTicking) return;
                    scrollTicking = true;
        window.requestAnimationFrame(() => {
                        updateState(getCurrentIndex());
                    scrollTicking = false;
        });
    }, {passive: true });

                    let isPointerDown = false;
                    let startX = 0;
                    let initialScrollLeft = 0;
                    let hasDragged = false;

    track.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
                    if (e.target.closest('a, button')) return;

                    isPointerDown = true;
                    hasDragged = false;
                    startX = e.pageX;
                    initialScrollLeft = track.scrollLeft;
                    track.style.scrollBehavior = 'auto';
                    track.style.scrollSnapType = 'none';
    });

    window.addEventListener('pointermove', (e) => {
        if (!isPointerDown) return;
                    const diffX = e.pageX - startX;
        if (Math.abs(diffX) > 4) {
                        hasDragged = true;
                    track.scrollLeft = initialScrollLeft - diffX;
        }
    });

    const endPointer = () => {
        if (!isPointerDown) return;
                    isPointerDown = false;
                    track.style.scrollBehavior = 'smooth';
                    track.style.scrollSnapType = 'x mandatory';

                    if (hasDragged) {
            const nextIndex = getCurrentIndex();
                    scrollToIndex(nextIndex);
        }
    };

                    window.addEventListener('pointerup', endPointer);
                    window.addEventListener('pointercancel', endPointer);

    window.addEventListener('resize', () => {
                        updateState(getCurrentIndex());
    });

                    updateState(0);
};

const initPage = () => {
                        initThemePicker();
                    initLanguagePicker();
                    initMobileNavigation();
                    initSectionNavigation();
                    initDocumentExplorer();
                    initResumeModal();
                    initHeroSlideshow();
                    initProjectShowcase();
                    initEducationPhotoStack();
                    initSkillsShowcase();
                    initCertificateSlider();
                    initScrollReveal();
};

document.addEventListener('DOMContentLoaded', () => {
                        initPageIntro(initPage);
});
