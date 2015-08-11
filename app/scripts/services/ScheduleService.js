/**
 * Created by mariiazadyra on 8/11/15.
 */
(function() {
    "use strict";

    angular
        .module('syncronizationApp')
        .service('ScheduleService', ScheduleService);

    /*@ngInject*/
    function ScheduleService($timeout) {
        var Service = {};

        Service.scheduleOptionsPrimary = [
            {
                name: 'Daily',
                value: 'DAILY'
            },{
                name: 'Weekly',
                value: 'WEEKLY'
            },{
                name: 'Monthly',
                value: 'MONTHLY'
            }
        ];

        Service.scheduleOptionsSecondary = [
            {
                name: 'Monday',
                value: 'MON'
            },{
                name: 'Tuesday',
                value: 'TUE'
            },{
                name: 'Wednesday',
                value: 'WED'
            },{
                name: 'Thursday',
                value: 'THU'
            },{
                name: 'Friday',
                value: 'FRI'
            },{
                name: 'Saturday',
                value: 'SAT'
            },{
                name: 'Sunday',
                value: 'SUN'
            }
        ];

        return Service;
    }
})();