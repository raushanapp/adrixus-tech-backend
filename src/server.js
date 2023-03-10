const app = require("./index")
const connect = require("./config/db");

const port = process.env.PORT || 2500;
app.listen(port, async () => {
    try {
        await connect();
        console.log(`Listening on port ${port}`)
    } catch (err) {
        console.log(err);
    }
});