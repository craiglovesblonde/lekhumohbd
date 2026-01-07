// Confetti
function createConfetti(amount = 150) {
    const colors = ["#ff6ec7","#7c3aed","#fbb1b1","#d8b4fe","#c084fc"];
    for (let i = 0; i < amount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Celebrate button
document.getElementById("celebrateBtn").addEventListener("click", () => {
    // Music
    const music = document.getElementById("bgMusic");
    music.play().catch(()=>{}); // works on mobile after click
    // Confetti burst
    createConfetti(200);
});

document.getElementById("btnSong2").addEventListener("click", () => {
    // Music
    const music = document.getElementById("mp3Song2");
    music.play().catch(()=>{}); // works on mobile after click
    // Confetti burst
    createConfetti(200);
});

// Initial confetti
window.onload = () => { createConfetti(); };

// Image modal
function openModal(img) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
const card = document.getElementById("birthdayCard");

card.addEventListener("click", () => {
    card.classList.toggle("open");

    // Confetti burst
    createConfetti(200);

    // Play music (mobile-safe)
    const music = document.getElementById("bgMusic");
    if (music) {
        music.play().catch(()=>{});
    }

    // Mobile vibration (optional)
    if (navigator.vibrate) {
        navigator.vibrate(150);
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const card = document.getElementById("birthdayCard");

    if (!card) {
        console.error("Card not found");
        return;
    }

    card.addEventListener("click", () => {
        card.classList.toggle("open");

        if (typeof createConfetti === "function") {
            createConfetti(150);
        }

        const music = document.getElementById("bgMusic");
        if (music) {
            music.play().catch(()=>{});
        }
    });
});

