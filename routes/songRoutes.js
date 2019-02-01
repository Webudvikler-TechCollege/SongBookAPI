const express = require('express');

const routes = () => {
    const songRouter = express.Router();

    songRouter.route('/')
        .get((req, res) => {
            res.send("Hello");
        });

        return songRouter;
}
module.exports = routes;