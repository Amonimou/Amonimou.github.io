// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [

  { text: "Don't blame me, love made me crazy", time: 0.7 },
  { text: "If it doesn't, you ain't doin' it right", time: 3.0 },
  { text: "Lord, save me, my drug is my baby", time: 6.9},
  { text: "I'll be usin' for the rest of my life", time: 10 },
  { text: "Don't blame me, love made me crazy", time: 15.2},
  { text: "If it doesn't, you ain't doin' it right", time: 18 },
  { text: "Oh, Lord, save me, my drug is my baby", time: 21 },  
  { text: "I'll be usin' for the rest of my life", time: 25 },
  { text: "I get so high, oh", time: 28 },
  { text: "Every time you're, every time you're lovin' me", time: 30 },
  { text: "You're lovin' me", time: 36 },
  { text: "Trip of my life, oh", time: 35.5 },
  { text: "Every time you're, every time you're touchin' me", time: 37 },
  { text: "You're touchin' me", time: 40 },
  { text: "Every time you're, every time you're lovin' me", time: 44 },
  { text: "Oh, Lord, save me, my drug is my baby", time: 49 },
  { text: "I'll be usin' for the rest of my life", time: 52 },
   { text: "Don't blame me, love made me crazy", time: 58.5 },
  { text: "If it doesn't, you ain't doin' it right", time: 62},
  { text: "Lord, save me, my drug is my baby", time: 65 },
  { text: "I'll be usin' for the rest of my life", time: 69 },
  { text: "Don't blame me, love made me crazy", time: 72.5 },
  { text: "If it doesn't, you ain't doin' it right", time: 76.1 },
  { text: "Oh, Lord, save me, my drug is my baby", time: 78.1 },  
  { text: "I'll be usin' for the rest of my life", time: 82.1 },
  { text: "I get so high, oh", time: 85 },
  { text: "Every time you're, every time you're lovin' me", time: 88 },
  { text: "Oh, Lord, save me, my drug is my baby", time: 93},  
  { text: "I'll be usin' for the rest of my life", time: 96 },

];

// Función para actualizar las letras
function updateLyrics() {
  var currentTime = audio.currentTime;
  var currentLyric = lyricsData.find(
    (lyric, index) =>
      currentTime >= lyric.time &&
      (index === lyricsData.length - 1 || currentTime < lyricsData[index + 1].time)
  );

  if (currentLyric) {
    lyrics.innerHTML = `<p>${currentLyric.text}</p>`;
  } else {
    lyrics.innerHTML = "";
  }
}

// Actualizar las letras cada 200ms para mayor precisión
setInterval(updateLyrics, 200);

// Limpiar las letras al final de la canción
audio.addEventListener("ended", function () {
  lyrics.innerHTML = ""; // Limpia el contenido del contenedor de letras
});