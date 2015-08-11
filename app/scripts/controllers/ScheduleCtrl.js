/**
 * Created by mariiazadyra on 8/11/15.
 */
(function() {
    "use strict";

    angular
        .module('syncronizationApp')
        .controller('ScheduleCtrl', ScheduleCtrl);

    /*@ngInject*/

    function ScheduleCtrl($timeout, ScheduleService) {
        var vm = this;

        vm.scheduleOptionsPrimary = ScheduleService.scheduleOptionsPrimary;
        vm.scheduleOptionPrimary = vm.scheduleOptionsPrimary[1].value;

        vm.scheduleOption = null;
        vm.scheduleOptionsSecondary = ScheduleService.scheduleOptionsSecondary;

        activate();

        function activate() {}

    }
})();