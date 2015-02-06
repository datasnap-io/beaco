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
            }).value()

        var command = [
            'export UUID='+vals.uuid,
            'export MAJOR='+vals.major,
            'export MINOR='+vals.minor,
            'export POWER='+vals.powerlevel,
            'export RATE='+vals.advertiseRate,
            '../init_beacon.sh'
        ].join(' && ');

        console.log(command)
        exec(command, cb)
    }
};