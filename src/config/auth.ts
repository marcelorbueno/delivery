export default {
  jwt: {
    client_secret_token: process.env.APP_CLIENT_SECRET_TOKEN || 'default',
    deliveryman_secret_token:
      process.env.APP_DELIVERYMAN_SECRET_TOKEN || 'default',
    expiresIn: '1d',
  },
};
