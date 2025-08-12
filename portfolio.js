const openBtn = document.getElementById('openPopup');
const overlay = document.getElementById('popupOverlay');
const closeBtn = document.querySelector('.closeBtn');

// Open popup
openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex'; // flex centers the popup
});

// Close popup when clicking X
closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// Close popup when clicking outside
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        overlay.style.display = 'none';
    }
});