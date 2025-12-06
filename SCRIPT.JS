// THEME SWITCH
const themeBtn = document.getElementById("themeToggle");

themeBtn.onclick = () => {
    document.body.classList.toggle("dark");

    themeBtn.textContent =
        document.body.classList.contains("dark") ? "☀" : "🌙";
};

// SOUND
const sound = document.getElementById("sound");

function playSound() {
    sound.currentTime = 0;
    sound.play();
}

// CUSTOM CARD
document.getElementById("generateCard").onclick = () => {
    const text = document.getElementById("cardText").value;

    document.getElementById("customCard").textContent = text;

    playSound();
};

// FAMILY MESSAGES
const msgList = document.getElementById("messagesList");

document.getElementById("saveMsg").onclick = () => {
    const msg = document.getElementById("familyMsg").value;

    if (!msg) return;

    const div = document.createElement("div");
    div.textContent = msg;

    msgList.prepend(div);
    playSound();
};

// ENCOURAGEMENT
const encList = document.getElementById("encList");

document.getElementById("saveEnc").onclick = () => {
    const msg = document.getElementById("encText").value;

    if (!msg) return;

    const div = document.createElement("div");
    div.textContent = msg;

    encList.prepend(div);
    playSound();
};

// GOLD PARTICLES
function goldParticles() {
    for (let i = 0; i < 35; i++) {
        const p = document.createElement("div");

        p.className = "particle";

        p.style.left = Math.random() * 100 + "vw";
        p.style.bottom = Math.random() * 20 + "vh";

        p.style.animationDuration = (6 + Math.random() * 4) + "s";

        document.body.appendChild(p);
    }
}

goldParticles();