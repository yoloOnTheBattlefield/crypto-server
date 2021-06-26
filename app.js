const axios = require('axios')
const express = require('express');
const app = express();

const port  = process.env.PORT || 3000

app.get('/coins/:name', async (req, res) => {
    try{
        const {data} = await axios('https://api.coingecko.com/api/v3/search?locale=en');
        const coins = data.coins.filter(el => el.id.startsWith(req.params.name) || el.name.startsWith(req.params.name) || el.symbol.startsWith(req.params.name)).slice(0, 10);
        res.send(coins)
    }catch(err){
        console.log(err)
    }

});


app.listen(port, () => console.log('live on 3000'))