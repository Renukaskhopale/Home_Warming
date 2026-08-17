// Page Management
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

const openBtn = document.getElementById('openBtn');
const doorScene = document.getElementById('doorScene');
const doorGlow = document.getElementById('doorGlow');

// Open button click handler - plays the door-opening animation, then navigates
openBtn.addEventListener('click', function () {
    openDoor();
});

function openDoor() {
    if (doorScene.classList.contains('opened')) return;

    // Disable the button so it can't be triggered twice
    openBtn.disabled = true;

    // Warm golden glow behind the door
    doorGlow.classList.add('active');

    // Trigger the door-opening rotation
    doorScene.classList.add('opened');

    // Wait for the door animation to finish, then move to the invitation
    setTimeout(() => {
        navigateToPage(2);
    }, 1400);
}

// Navigation function
function navigateToPage(pageNumber) {
    page1.style.display = 'none';
    page2.style.display = 'none';

    if (pageNumber === 1) {
        page1.style.display = 'flex';
    } else if (pageNumber === 2) {
        page2.style.display = 'flex';
    }
}

// Keyboard support - Enter opens the door while on page 1
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && page1.style.display !== 'none') {
        openDoor();
    }
});

// Initialize - start on page 1
navigateToPage(1);
