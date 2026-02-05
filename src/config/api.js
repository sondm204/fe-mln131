// API Configuration
// Cả chatbot và leaderboard đều nằm trên cùng 1 service
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://urls-dial-phil-webmasters.trycloudflare.com';

export const API_CONFIG = {
  CHAT_API: `${API_BASE_URL}/chat`,
  LEADERBOARD_API: `${API_BASE_URL}/leaderboard`
};

