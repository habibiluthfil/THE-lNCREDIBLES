// Pesan-pesan lucu untuk ditampilkan saat klik
const funMessages = [
  "Halo! Aku The Incredibles yang sangat luar biasa! 🦸",
  "Psst... rahasia #1: Saya tidak pernah bosan! 😎",
  "Kamu klik lagi? Saya suka perhatian! 💕",
  "Tahu nggak? Setiap klik membuat aku lebih kuat! 💪",
  "Hehehehe... aku ngakak! Kliknya berapa kali nih? 😂",
  "Jangan berhenti! Ini pembeli rasa-rasanya seru sekali! 🎉",
  "Tahku paling sering diklik di seluruh The Incredibles! 🏆",
  "Kamu pasti lagi bosan ya? Ayo main lagi! 🎮",
  "Sini sini... biar aku tunjukkan trick spesialku! 🎪",
  "Wow! Kamu sudah klik 9 kali! Pelanggan setia nih! ⭐"
];

const emojis = ["👋", "🎩", "🤟", "🙌", "👏", "✌️", "🤪", "😆", "🎊", "🌟"];
let clickCount = 0;

// Magic button functionality
const magicButton = document.getElementById("magicButton");
const welcomeMessage = document.getElementById("welcomeMessage");
const emoji = document.getElementById("emoji");

magicButton.addEventListener("click", function() {
  clickCount++;
  
  // Ubah pesan
  const messageIndex = Math.min(clickCount - 1, funMessages.length - 1);
  welcomeMessage.textContent = funMessages[messageIndex];
  
  // Ubah emoji
  const emojiIndex = (clickCount - 1) % emojis.length;
  emoji.textContent = emojis[emojiIndex];
  
  // Animasi bounce pada button
  magicButton.classList.add("bounce");
  setTimeout(() => {
    magicButton.classList.remove("bounce");
  }, 600);
  
  // Buat efek partikel saat klik
  createConfetti();
});

// Fungsi untuk membuat efek confetti (kembang api)
function createConfetti() {
  for (let i = 0; i < 5; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.textContent = ["🎉", "🎊", "✨", "⭐", "🌟"][Math.floor(Math.random() * 5)];
    confetti.style.left = Math.random() * 100 + "%";
    confetti.style.top = "20%";
    document.querySelector(".welcome-section").appendChild(confetti);
    
    // Animasi jatuh
    setTimeout(() => {
      confetti.remove();
    }, 1000);
  }
}

// Hover effect pada welcome text
const welcomeText = document.getElementById("welcomeText");
welcomeText.addEventListener("mouseenter", function() {
  this.style.transform = "scale(1.05)";
});

welcomeText.addEventListener("mouseleave", function() {
  this.style.transform = "scale(1)";
});
