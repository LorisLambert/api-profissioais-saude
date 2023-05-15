const express = require('express');
const server = express();
const profissoes = require('./src/data/profissoes.json')

server.get('/profissoes', (req, res)=> {
    return res.json(profissoes)
});

server.listen(3000, () =>{
    console.log('Server working!')
});