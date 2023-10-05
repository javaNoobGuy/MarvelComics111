const express = require("express");
const server = express();
const router = express.Router();
const cors = require("cors");
server.use(cors());
server.use(express.json({ extended: true }))


router.post('/sendImage', (req, res) =>{


});

router.post('/sendArchive', (req, res) =>{


});

router.get('/getImage/:path', (req,res) => {

})

router.get('/getArchive/:path', (req,res) => {

})




server.use(router);

server.listen(3000, () => {
    console.log('server rodando!');
})