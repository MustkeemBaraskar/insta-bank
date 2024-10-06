require('dotenv').config();

const config = {
    apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000/api',
    loginUrl: process.env.LOGIN_URL || 'auth/login',
    registerUrl: process.env.REGISTER_URL || 'auth/register',
    getBalanceUrl: process.env.GET_BALANCE_URL || 'user/get-balance'
  };
  
  export default config;
  