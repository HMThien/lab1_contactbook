const config = {
    app: {
    port: 3000,
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb:////127.0.0.1:27017/lab2_contactbook"
    }
    };
    module.exports = config;    