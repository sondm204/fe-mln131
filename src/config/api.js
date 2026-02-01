// API Configuration
// Cả chatbot và leaderboard đều nằm trên cùng 1 service
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

export const API_CONFIG = {
  CHAT_API: `${API_BASE_URL}/chat`,
  LEADERBOARD_API: `${API_BASE_URL}/leaderboard`
};

