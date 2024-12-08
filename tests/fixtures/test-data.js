module.exports = {
    validUser: {
        username: process.env.APP_USERNAME || 'standard_user', // Use APP_USERNAME
        password: process.env.PASSWORD || 'secret_sauce',
    },
    invalidUser: {
        username: 'invalid_user',
        password: 'wrong_password',
    },
};

console.log('Loaded Environment Variables:', {
    USERNAME: process.env.APP_USERNAME, // Updated to APP_USERNAME
    PASSWORD: process.env.PASSWORD,
});
