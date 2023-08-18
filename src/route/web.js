import express from "express";
import homeController from "../controllers/homecontroller";
let router = express.Router();

let initWebRouters = (app) => {
    router.get('/', homeController.getHomePage);
    
    router.get('/quang', (req, res) => {
        return res.send('Hello World 1111')
    });

    return app.use("/", router);
}

module.exports = initWebRouters;