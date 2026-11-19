
let IS_PROD = false;

const server = IS_PROD
    ? "https://real-time-video-conferencing-platform-1.onrender.com"
    : "http://localhost:8000";

export default server;
