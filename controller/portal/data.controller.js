'use strict'

var request = require('request');
var config = require("../config/config.controller");
var message = config.LanguageSelection("es")

function getWebData(req,res){
    
    let body = {
        uri: 'https://sitr.cnd.com.pa/m/pub/data/gen.json?1683778495858',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    request(body, function (err, response) {
        if(err){
            return res.status(500).send({message: message.global.error, err});
        }else if(response){
            let json = JSON.parse(response.body)
            return res.send({message: message.global.success, json});
            
        }else{
            return res.send({message: message.global.warning});
        }       
    });
}


module.exports ={
    getWebData
}

