require('dotenv').config();

module.exports = {
  BOT_UID: '61577598163835', // Your bot FB ID
  BOT_LINK: 'https://www.facebook.com/profile.php?id=61577598163835',
  BOT_NICKNAME: 'music-lover (newton)',

  PREFIX: '*',

  ADMIN_UID: ['100095322679638'],
  OWNER_UID: ['100095322679638'],
  CREATOR_UID: ['100095322679638'],
  OWNER_LINK: 'https://www.facebook.com/newton.biswas.504758',

  AUTHOR: 'newton',

  // API KEYS (from .env)
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
  REMOVEBG_API_KEY: process.env.REMOVEBG_API_KEY,
  DEEPAI_API_KEY: process.env.DEEPAI_API_KEY,
  GOOGLE_TTS_KEY: process.env.GOOGLE_TTS_KEY,
  UPSCALE_API_KEY: process.env.UPSCALE_API_KEY,
  VOICERSS_API_KEY: process.env.VOICERSS_API_KEY,
  TTSMP3_API_KEY: process.env.TTSMP3_API_KEY,
  ASSEMBLYAI_API_KEY: process.env.ASSEMBLYAI_API_KEY,
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY,
  BING_SEARCH_KEY: process.env.BING_SEARCH_KEY,
  NEKOBOT_API_KEY: process.env.NEKOBOT_API_KEY,

  // other configs
  TIMEZONE: 'Asia/Dhaka',
  LANGUAGE: 'bn'
};
