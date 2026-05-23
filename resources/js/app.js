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

    const syncAnchorOffsets = () => {
        const headerHeight = Math.round(header.getBoundingClientRect().height);
        const headerPosition = window.getComputedStyle(header).position;
        const hasOverlayHeader = headerPosition === 'sticky' || headerPosition === 'fixed';
        const topOffset = hasOverlayHeader ? headerHeight + 24 : 28;

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
        const visualTarget = target.querySelector('.section-title') || target;
        const targetTop = window.scrollY + visualTarget.getBoundingClientRect().top - topOffset;

        window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: 'smooth',
        });

        if (shouldUpdateUrl) {
            window.history.replaceState(null, '', hash);
        }

        setActiveLink(target.id);
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

const initDocumentExplorer = () => {
    const explorer = document.querySelector('[data-document-explorer]');

    if (!explorer) {
        return;
    }

    const items = Array.from(explorer.querySelectorAll('[data-document-item]'));
    const frame = explorer.querySelector('[data-document-frame]');
    const previewSuffix = '#toolbar=0&navpanes=0&view=FitH';

    if (!frame || items.length <= 1) {
        return;
    }

    const setActiveItem = (item, shouldPushState = true) => {
        const src = item.dataset.documentSrc;

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

        const previewUrl = `${src}${previewSuffix}`;

        if (frame.tagName === 'OBJECT') {
            frame.setAttribute('data', previewUrl);
        } else {
            frame.src = previewUrl;
        }

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

document.addEventListener('DOMContentLoaded', () => {
    initSectionNavigation();
    initDocumentExplorer();
});
