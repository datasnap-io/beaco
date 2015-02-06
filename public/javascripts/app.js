
$(document).ready(function(){

    //Cache elements
    var beaconEl = $('#beacon'),
        majorEl = $('#major'),
        minorEl = $('#minor'),
        advertiseRateEl = $('#advertiseRate'),
        powerLevelEl = $('#powerlevel');


        function updateSuccess(){
            console.log('updated settings')
        }

        function sendUpdate(){

            var uuid = beaconEl.val(),
                major = majorEl.val(),
                minor = minorEl.val(),
                advertiseRate = advertiseRateEl.val(),
                powerLevel = powerLevelEl.val()

            var sendObj = {
                    uuid: uuid,
                    major:major,
                    minor:minor,
                    advertiseRate: advertiseRate,
                    powerLevel: powerLevel
                },
                cleanObj = _.omit(sendObj,function(val){ return val===""; })


                console.log(cleanObj)
            $.ajax({
                type:"POST",
                url:"/settings",
                data: cleanObj,
                success: updateSuccess,
                dataType:'json'
            })
        }

        //Attach handlers
        beaconEl.change( sendUpdate );
        majorEl.change( sendUpdate );
        minorEl.change( sendUpdate );
        advertiseRateEl.change( sendUpdate );
        powerLevelEl.change( sendUpdate );

})