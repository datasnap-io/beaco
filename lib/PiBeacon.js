var exec = require('child_process').exec;
var _ = require('lodash');

module.exports = {

    setBeacon: function(newSettings, cb){
        var vals =_.chain(newSettings)
            .omit(function(val){ return val === ""; })
            .defaults({
                uuid:'00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00',
                major:'00 00',
                minor:'00 00',
                powerLevel:'c5 00',
                advertiseRate:'A0 00 A0 00 00'
            })

        var command = [
            '../init_beacon.sh',
            vals.uuid,
            vals.major,
            vals.minor,
            vals.powerlevel,
            vals.advertiseRate
        ].join(' ');
        console.log(command)
        exec(command, cb)
    }
};