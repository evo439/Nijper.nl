document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('team-modal');
    if (!modal) return;
    
    const closeBtn = document.querySelector('.close-modal');
    const teamCards = document.querySelectorAll('.team-card');
    
    // Modal elements
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalRole = document.getElementById('modal-role');
    const modalBio = document.getElementById('modal-bio');
    const modalSocials = document.getElementById('modal-socials');

    const socialData = {
        'Roel': [
            { icon: 'assets/linkedin.svg', url: 'https://www.linkedin.com/in/roel-nijhuis-9a1a7733b', alt: 'LinkedIn' },
            { icon: 'assets/github.svg', url: 'https://github.com/BigRoelof', alt: 'GitHub' },
            { icon: 'assets/browser.svg', url: 'https://www.roelnijhuis.nl/', alt: 'Website' },
            { icon: 'assets/email_icon.svg', url: 'mailto:roel@nijper.nl', alt: 'Email' }
        ],
        'Sarah': [
            { icon: 'assets/github.svg', url: 'https://github.com/evo439', alt: 'GitHub' },
            { icon: 'assets/email_icon.svg', url: 'mailto:sarah@nijper.nl', alt: 'Email' }
        ]
    };

    const isModalOpen = () => modal.classList.contains('show');

    // Open modal
    teamCards.forEach(card => {
        card.addEventListener('click', () => {
            const name = card.getAttribute('data-name');
            const role = card.getAttribute('data-role');
            const bio = card.getAttribute('data-bio');
            const imgSrc = card.getAttribute('data-img');

            modalName.textContent = name;
            modalRole.textContent = role;
            modalBio.textContent = bio;
            modalImg.src = imgSrc;

            if (modalSocials) {
                modalSocials.innerHTML = '';
                const links = socialData[name] || [];
                links.forEach(item => {
                    const a = document.createElement('a');
                    a.href = item.url;
                    if (item.url.startsWith('mailto:')) {
                        a.target = '_self';
                    } else {
                        a.target = '_blank';
                        a.rel = 'noopener noreferrer';
                    }
                    a.className = 'modal-social-link';
                    a.innerHTML = `<img src="${item.icon}" alt="${item.alt}" class="modal-social-icon">`;
                    modalSocials.appendChild(a);
                });
            }

            modal.classList.add('show');
            document.body.classList.add('no-scroll');

            // Push a history state for the modal
            history.pushState({ modalOpen: true }, '');
        });
    });

    // Close modal function
    const closeModal = () => {
        if (!isModalOpen()) return;

        modal.classList.remove('show');
        document.body.classList.remove('no-scroll');

        // If closed via UI (not back button), remove the modal state from history
        if (history.state && history.state.modalOpen) {
            history.back();
        }
    };

    // Close on X click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Close on mobile back button
    window.addEventListener('popstate', () => {
        if (isModalOpen()) {
            modal.classList.remove('show');
            document.body.classList.remove('no-scroll');
        }
    });

});
