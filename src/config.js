require('dotenv').config();

const config = {
    stripe: {
      apiKey: process.env.REACT_APP_STRIPE_SECRET_KEY,
      checkoutUrl: process.env.REACT_APP_CHECKOUT_URL,
      productsUrl: process.env.REACT_APP_PRODUCTS_URL,
      currency: 'USD',
    },
  };
  
  export default config;