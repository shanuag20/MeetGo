let IS_PROD = true;

const server = IS_PROD
    ? "https://meetgo-backend-dvw8.onrender.com"
    : "http://localhost:8000";

export default server;