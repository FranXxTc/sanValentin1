const messages = [
    "Eres mi sueño hecho realidad 💖",
    "Tu sonrisa ilumina mi día ☀️",
    "Siempre serás mi persona favorita 💕",
    "No necesito suerte, te tengo a ti 🍀",
    "Cada día a tu lado es un regalo 🎁",
    "Te amo más de lo que las palabras pueden decir 🥰",
    "Estás en mis pensamientos todo el tiempo 💭",
    "Nuestro amor es mi mayor fortuna 💎",
    "Si el amor tuviera un rostro, sería el tuyo 😍",
    "Eres mi hogar, donde sea que estés 🏡",
    "Solo contigo el tiempo se detiene ⏳",
    "Me haces sentir especial cada día 🌟",
    "Contigo todo es más bonito 🎨",
    "Tú y yo, una historia sin final ✨",
    "Siempre serás mi mejor decisión ❤️",
    "Tu amor es mi mayor inspiración 🎶",
    "En cada latido de mi corazón, estás tú 💓",
    "Eres la melodía de mi vida 🎼",
    "Un abrazo tuyo es mi lugar favorito 🤗",
    "Eres la magia en mi mundo 🌠",
    "Cada momento contigo es inolvidable 📸",
    "Tu risa es mi sonido favorito 😂",
    "Nunca dejaré de quererte 💞",
    "Gracias por ser mi felicidad 😊",
    "Eres mi refugio en la tormenta ☔",
    "Contigo todo es perfecto 💯",
    "Te elijo cada día, sin dudarlo 💍",
    "Amarte es lo más fácil del mundo 💗",
    "Siempre juntos, sin importar qué pase 🤞",
    "Eres mi amor eterno 🌹"
];

function newMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById("message").innerText = messages[randomIndex];
}

// Muestra un mensaje aleatorio al cargar la página
document.addEventListener("DOMContentLoaded", newMessage);
