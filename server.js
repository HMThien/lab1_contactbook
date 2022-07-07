// lab1
//const app = require("./app");
//const config = require("./config");
//const PORT = config.app.port;
//app.listen(PORT, () => {
//    console.log(`Server is running on port ${PORT}`);
//});

//lab2
const app = require("./app");
const config = require("./config");
const MongoDB = require("./utils/mongodb.util");
async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        console.log("Ket noi thanh cong den MongoDN")

        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`Server dang chay o cong ${PORT}`)
        });

    } catch (error) {
        console.log("Khong kn dc MongoDB!", error);
        process.exit();
    }
}

startServer();