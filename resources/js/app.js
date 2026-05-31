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

    const getScrollTarget = (section) => {
        if (!section) {
            return null;
        }

        const directShell = section.querySelector(':scope > .page-shell');

        if (!directShell) {
            return section;
        }

        return directShell.querySelector('.title-row, .section-title') || directShell;
    };

    const syncAnchorOffsets = () => {
        const headerHeight = Math.round(header.getBoundingClientRect().height);
        const headerPosition = window.getComputedStyle(header).position;
        const hasOverlayHeader = headerPosition === 'sticky' || headerPosition === 'fixed';
        const topOffset = hasOverlayHeader ? headerHeight + 8 : 12;

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
        const scrollTarget = getScrollTarget(target);
        const targetTop = window.scrollY + scrollTarget.getBoundingClientRect().top - topOffset;

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

    if (!navShell || !toggleButton || !mobileMenu) {
        return;
    }

    const mobileQuery = window.matchMedia('(max-width: 760px)');
    const menuLinks = Array.from(navShell.querySelectorAll('.main-nav a, .hire-button'));

    const closeMenu = () => {
        navShell.classList.remove('is-open');
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.setAttribute('aria-label', 'Buka menu navigasi');
    };

    const openMenu = () => {
        navShell.classList.add('is-open');
        toggleButton.setAttribute('aria-expanded', 'true');
        toggleButton.setAttribute('aria-label', 'Tutup menu navigasi');
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
        if (!mobileQuery.matches) {
            closeMenu();
        }
    };

    if (typeof mobileQuery.addEventListener === 'function') {
        mobileQuery.addEventListener('change', syncMenuState);
    } else if (typeof mobileQuery.addListener === 'function') {
        mobileQuery.addListener(syncMenuState);
    }

    syncMenuState();
};

const initDocumentExplorer = () => {
    const explorer = document.querySelector('[data-document-explorer]');

    if (!explorer) {
        return;
    }

    const items = Array.from(explorer.querySelectorAll('[data-document-item]'));
    const frame = explorer.querySelector('[data-document-frame]');
    const frameContainer = explorer.querySelector('[data-document-frame-container]');
    const defaultPreviewFragment = '#page=1&toolbar=0&navpanes=0&view=FitH&pagemode=none';
    let previewSequence = 0;

    if (!frame || !frameContainer || items.length <= 1) {
        return;
    }

    const buildPreviewUrl = (src, fragment) => {
        const separator = src.includes('?') ? '&' : '?';

        previewSequence += 1;

        return `${src}${separator}preview=${Date.now()}-${previewSequence}${fragment}`;
    };

    const setActiveItem = (item, shouldPushState = true) => {
        const src = item.dataset.documentSrc;
        const ratio = item.dataset.documentRatio || '297 / 210';
        const fragment = item.dataset.documentFragment || defaultPreviewFragment;

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

        const previewUrl = buildPreviewUrl(src, fragment);

        if (frame.tagName === 'OBJECT') {
            frame.setAttribute('data', 'about:blank');

            window.requestAnimationFrame(() => {
                frame.setAttribute('data', previewUrl);
            });
        } else {
            frame.src = 'about:blank';

            window.requestAnimationFrame(() => {
                frame.src = previewUrl;
            });
        }

        frameContainer.style.setProperty('--document-preview-ratio', ratio);

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
    const frame = document.querySelector('[data-resume-frame]');
    const closeButtons = Array.from(document.querySelectorAll('[data-resume-close]'));

    if (!modal || !openButton || !frame || !closeButtons.length) {
        return;
    }

    const resumeSrc = openButton.dataset.resumeSrc;
    const resumePreviewUrl = resumeSrc ? `${resumeSrc}#page=1&toolbar=0&navpanes=0&view=FitH&pagemode=none` : '';
    let lastActiveElement = null;

    const closeModal = () => {
        modal.hidden = true;
        document.body.classList.remove('has-modal-open');
        frame.setAttribute('src', 'about:blank');

        if (lastActiveElement instanceof HTMLElement) {
            lastActiveElement.focus();
        }
    };

    const openModal = () => {
        lastActiveElement = document.activeElement;
        modal.hidden = false;
        document.body.classList.add('has-modal-open');

        if (resumePreviewUrl) {
            window.requestAnimationFrame(() => {
                frame.setAttribute('src', resumePreviewUrl);
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

const initScrollReveal = () => {
    const revealItems = Array.from(document.querySelectorAll('[data-reveal]'));

    if (!revealItems.length) {
        return;
    }

    revealItems.forEach((item) => {
        const delay = item.dataset.revealDelay;

        if (delay) {
            item.style.setProperty('--reveal-delay', `${delay}ms`);
        }
    });

    if (!('IntersectionObserver' in window)) {
        revealItems.forEach((item) => {
            item.classList.add('is-revealed');
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-revealed');
            } else {
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
                const rect = entry.boundingClientRect;
                const isOutsideViewport = rect.bottom <= 0 || rect.top >= viewportHeight;

                if (isOutsideViewport) {
                    entry.target.classList.remove('is-revealed');
                }
            }
        });
    }, {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
    });

    revealItems.forEach((item) => {
        observer.observe(item);
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initMobileNavigation();
    initSectionNavigation();
    initDocumentExplorer();
    initResumeModal();
    initHeroSlideshow();
    initProjectMediaPan();
    initScrollReveal();
});
