// config.js
// Change this to false when deploying to production
const USE_LOCAL = false;

const LOCAL_API_URL = 'http://localhost:8000/api/v1';
const PROD_API_URL = 'https://skillswapph-production.up.railway.app/api/v1';

const API_URL = USE_LOCAL ? LOCAL_API_URL : PROD_API_URL;