// Array con las rutas de tus videos
const videoPaths = [
    'videos/AULAS 7MO.mp4',
    'videos/BAÑO.mp4',
    'videos/BIBLIOTECA.mp4',
    'videos/COMEDOR.mp4',
    'videos/COORDINACION.mp4',
    'videos/GIMNASIO.mp4',
    'videos/NATATORIO.mp4',
    'videos/SUBSUELO EDIFICIO 4.mp4'
];

const playButton = document.getElementById('playButton');
const videoPlayer = document.getElementById('videoPlayer');
const verRespuestaButton = document.getElementById('verRespuesta');
const siguienteButton = document.getElementById('siguiente');

let currentVideoIndex = -1;

function playRandomVideo() {
    currentVideoIndex = Math.floor(Math.random() * videoPaths.length);
    const randomVideoPath = videoPaths[currentVideoIndex];
    videoPlayer.src = randomVideoPath;
    videoPlayer.style.display = 'block';
    videoPlayer.play();
    playButton.style.display = 'none';
}

function showVerRespuestaButton() {
    verRespuestaButton.style.display = 'block';
}

function showSiguienteButton() {
    siguienteButton.style.display = 'block';
}

function hideVerRespuestaButton() {
    verRespuestaButton.style.display = 'none';
}

function hideSiguienteButton() {
    siguienteButton.style.display = 'none';
}

playButton.addEventListener('click', () => {
    playRandomVideo();
});

videoPlayer.addEventListener('ended', () => {
    showVerRespuestaButton();
    showSiguienteButton();
});

verRespuestaButton.addEventListener('click', () => {
    const currentVideoPath = videoPaths[currentVideoIndex];
    const videoName = currentVideoPath.replace('.mp4', '');
    const nombreVideo = videoName.replace('videos/', '');
    const respuestaElement = document.createElement('div');
    respuestaElement.textContent = `RESPUESTA: ${nombreVideo}`;
    respuestaElement.classList.add('respuesta');
    document.body.appendChild(respuestaElement);
    hideVerRespuestaButton();
});

siguienteButton.addEventListener('click', () => {
    hideVerRespuestaButton();
    hideSiguienteButton();
    window.location.href = 'index.html'; // Redirige a la página de inicio
});
