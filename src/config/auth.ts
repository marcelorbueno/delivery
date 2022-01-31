export default {
  jwt: {
    secret_token: process.env.APP_SECRET_TOKEN || 'default',
    expiresIn: '1d',
  },
};
