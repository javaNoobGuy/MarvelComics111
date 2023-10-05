const express = require("express");
const server = express();
const router = express.Router();
const cors = require("cors");
server.use(cors());
server.use(express.json({ extended: true }))












server.use(router);

server.listen(3000, () => {
    console.log('server rodando!');
})