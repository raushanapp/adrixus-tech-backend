const app = require("./server/src/app")
const connect = require("./server/src/config/db");

const port = process.env.PORT || 2500;
app.listen(port, async () => {
    try {
        await connect();
        console.log("Listening on port 2500....")
    } catch (err) {
        console.log(err);
    }
});