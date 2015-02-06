var express = require('express');
var router = express.Router();
var beac = require('../lib/PiBeacon')

router.post('/',function(req,res){
        console.log('got here')
        var parsedBody = req.body;
        console.log( parsedBody )
        beac.setBeacon( parsedBody, function(err,stdout,stderr){
            if(err){
                console.log(arguments);
                res.status(500).json({success:false});
            } else {
                res.status(200).json({success:true});
            }
        })
    });

module.exports = router;