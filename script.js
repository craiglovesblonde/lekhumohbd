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
