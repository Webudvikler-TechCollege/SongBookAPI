const express = require('express');

const routes = () => {
    const songRouter = express.Router();
    
    songRouter.route('/')
        .get((req, res) => {
            console.log(12121);
            res.status(201).send("Hello");
        });

        return songRouter;
}
module.exports = routes;