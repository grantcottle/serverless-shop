const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
stripe.setApiVersion('2017-08-15');

module.exports.handler = (event, context, callback) => {
  return stripe.products.list(
      {limit: 10}).then((products) => {
    const response = {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        data: products.data
      }),
    };
    callback(null, response);
  }).catch((err) => { // Error response
    console.log(err);
    const response = {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        error: err.message,
      }),
    };
    callback(null, response);
  });
};