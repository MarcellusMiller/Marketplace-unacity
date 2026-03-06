import app from "./app";

function startServer() {
    app.listen(3000, () => {
        console.log("server runnig");
    });
}

startServer();